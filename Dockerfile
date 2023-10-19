# 使用官方的 Node.js 16 镜像作为基础镜像
FROM node:16 as nodejs


RUN mkdir code
workdir /code
COPY ./* ./

# 安装应用程序的依赖
RUN npm install --force

RUN npm run build


FROM nginx
MAINTAINER buhuaqiang@163.com
VOLUME /tmp
ENV LANG en_US.UTF-8
RUN echo "server {  \
                      listen       80; \
                      location /viat-api/ { \
                      proxy_pass             https://via-pcm-api-dev.azurewebsites.net/; \
                  } \
                  #解决Router(mode: 'history')模式下，刷新路由地址不能找到页面的问题 \
                  location / { \
                     root   /var/www/html/; \
                      index  index.html index.htm; \
                      if (!-e \$request_filename) { \
                          rewrite ^(.*)\$ /index.html?s=\$1 last; \
                          break; \
                      } \
                  } \
                  access_log  /var/log/nginx/access.log ; \
              } " > /etc/nginx/conf.d/default.conf \
    &&  mkdir  -p  /var/www \
    &&  mkdir -p /var/www/html

ADD dist/ /var/www/html/
EXPOSE 80
#EXPOSE 443
