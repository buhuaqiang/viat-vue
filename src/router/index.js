import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import form from './form'
import formsMulti from './formsMulti'
import tables from './tables'
import viewgird from './viewGird'
import store from '../store/index'
import redirect from './redirect'
import charts from './charts'


import { LoginCallback, navigationGuard } from '@okta/okta-vue'
import HomeComponent from '@/components/Home'
import ProfileComponent from '@/components/Profile'

/*
const routes = [
      ...form,//Demo表单路由
      ...formsMulti,
      ...tables,//tables
      ...viewgird,
      ...redirect,
      ...charts,
      {
        path: '/',
        component: HomeComponent
      },
      {
        path: '/login/callback',
        component: LoginCallback
      },
      {
        path: '/profile',
        component: ProfileComponent,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/messages',
        component: MessagesComponent,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue')
      },
    {
        path: '/index',
        name: 'index',
        component: () => import('@/views/Index.vue')
    },
    {
        path: '/UserInfo',
        name: 'UserInfo',
        component: () => import('@/views/system/UserInfo.vue')
      },
      {
        path: '/sysMenu',
        name: 'sysMenu',
        component: () => import('@/views/system/Sys_Menu.vue')
      }, {
        path: '/coder',
        name: 'coder',
        component: () => import('@/views/builder/coder.vue')
      },
      {
        path: '/formDraggable',  //表单设计
        name: 'formDraggable',
        component: () => import('@/views/formDraggable/formDraggable.vue')
      },
      {
        path: '/formSubmit',  //表单提交页面
        name: 'formSubmit',
        component: () => import('@/views/formDraggable/FormSubmit.vue'),
        meta:{
          keepAlive:false
        }
      },
      {
        path: '/formCollectionResultTree',  //显示收集的数据表单
        name: 'formCollectionResultTree',
        component: () => import('@/views/formDraggable/FormCollectionResultTree.vue'),
        meta:{
          keepAlive:false
        }
      },
      {
        path: '/signalR',
        name: 'signalR',
        component: () => import('@/views/signalR/Index.vue'),
        meta:{
          keepAlive:false
        }
      }
]



const router = createRouter({
  //history: createWebHashHistory(), //createWebHistory(process.env.BASE_URL),
  history: createWebHistory(process.env.BASE_URL),
  routes
})
*/


const routes = [
    {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/Index'),
        redirect: '/home',
        meta: {
            requiresAuth: true
        },
        children: [
            ...form,//Demo表单路由
            ...formsMulti,
            ...tables,//tables
            ...viewgird,
            ...redirect,
            ...charts,

            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/Home.vue')
            }, {
                path: '/UserInfo',
                name: 'UserInfo',
                component: () => import('@/views/system/UserInfo.vue')
            },
            {
                path: '/sysMenu',
                name: 'sysMenu',
                component: () => import('@/views/system/Sys_Menu.vue')
            }, {
                path: '/coder',
                name: 'coder',
                component: () => import('@/views/builder/coder.vue')
            },
            {
                path: '/formDraggable',  //表单设计
                name: 'formDraggable',
                component: () => import('@/views/formDraggable/formDraggable.vue')
            },
            {
                path: '/formSubmit',  //表单提交页面
                name: 'formSubmit',
                component: () => import('@/views/formDraggable/FormSubmit.vue'),
                meta:{
                    keepAlive:false
                }
            },
            {
                path: '/formCollectionResultTree',  //显示收集的数据表单
                name: 'formCollectionResultTree',
                component: () => import('@/views/formDraggable/FormCollectionResultTree.vue'),
                meta:{
                    keepAlive:false
                }
            },
            {
                path: '/signalR',
                name: 'signalR',
                component: () => import('@/views/signalR/Index.vue'),
                meta:{
                    keepAlive:false
                }
            },
        ]
    },
    {
        path: '/login/callback',
        component: LoginCallback
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue')
    },

    {
        path: '/',
        component: HomeComponent
    },
    {
        path: '/login/callback',
        component: LoginCallback
    },
    {
        path: '/profile',
        component: ProfileComponent,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/app/guide',
        name: 'apphome',
        meta: {
            anonymous: true
        },
        component: () => import('@/views/h5/Guide.vue'),
    },
    {
        path: '/bigdata',
        name: 'bigdata',
        component: () => import('@/views/charts/bigdata.vue'),
        meta: {
            keepAlive: false
        }
    }
]

const router = createRouter({
    //history: createWebHashHistory(), //createWebHistory(process.env.BASE_URL),
    history: createWebHistory(process.env.BASE_URL),
    routes
})



/*
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeComponent
    },
    {
      path: '/login/callback',
      component: LoginCallback
    },
    {
      path: '/profile',
      component: ProfileComponent,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/messages',
      component: MessagesComponent,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
*/


/*router.beforeEach((to, from, next) => {
  if (to.matched.length == 0) return next({ path: '/404' });
  //2020.06.03增加路由切换时加载提示
  store.dispatch("onLoading", true);
  if ((to.hasOwnProperty('meta') && to.meta.anonymous) || store.getters.isLogin() || to.path == '/login') {
    return next();
  }

  next({ path: '/login', query: { redirect: Math.random() } });
})*/


router.beforeEach(navigationGuard)

router.afterEach((to, from) => {
  store.dispatch("onLoading", false);
})
router.onError((error) => {
  // const targetPath = router.currentRoute.value.matched;
  try {
    console.log(error.message);
    if (process.env.NODE_ENV == 'development') {
      alert(error.message)
    }
    localStorage.setItem("route_error", error.message)
  } catch (e) {

  }
  window.location.href = '/'
});
export default router
