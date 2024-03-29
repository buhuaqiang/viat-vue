/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import Viat_sftp_exportModelBody from "./Viat_sftp_exportModelBody"
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: Viat_sftp_exportModelBody,
    gridBody: '',
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: '',
    modelFooter: ''
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
  methods: {
     //下面这些方法可以保留也可以删除
    onInit() {  //框架初始化配置前，
        //示例：在按钮的最前面添加一个按钮
        //   this.buttons.unshift({  //也可以用push或者splice方法来修改buttons数组
        //     name: '按钮', //按钮名称
        //     icon: 'el-icon-document', //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
        //     type: 'primary', //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
        //     onClick: function () {
        //       this.$Message.success('点击了按钮');
        //     }
        //   });
      //显示所有查询字段,即從進階查詢裡面拿出來
      this.setFiexdSearchForm(true)
      this.pagination.sortName = "modified_date";  //设置排序字段
      this.pagination.order = "asc" ; //排序方式desc或者asc
      //设置查询表单的标签文字宽度
      this.labelWidth = 230;
      //表格设置为单选
      this.single=true;
      //設置初始不加載
      this.load=false;

      //自製按鈕Save and Submit
      this.buttons.splice(2, 0,{
        name: 'Execute',
        icon: 'el-icon-check',
        type: 'danger',
        disabled: false,
        value: 'save',
        onClick: function() {
          this.$message.error("动态添加的button");
          this.$refs.gridHeader.openModel(true,"searchType" );
        }
      })
        //示例：设置修改新建、编辑弹出框字段标签的长度
        // this.boxOptions.labelWidth = 150;
      this.columns.push({
        title: '操作', width: 165, render: (h, { row, column, index }) => {
          return h(
              "div",
              { style: {} },
              [
                h(
                    "a",
                    {
                      props: {},
                      style: { "color":"#409eff","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none","cursor":"pointer","font-size": "12px"},
                      onClick: (e) => {
                        // this.$confirm('Do you want to download?', 'Confirm')
                        //debugger

                        // if (!this.searchFormFields.filename){
                        //   return this.$message.error("Warninig ! Please select a type!");
                        // }

                        let fileName = row.file_name;
                        let formData = {
                          mainData: {"filename": fileName},
                          detailData: null,
                          delKeys:null
                        }
                        // let cmd = {"Type":types, "Dist":distIds, "transDate":transfDate}
                        this.$confirm('Do you want to download?', 'Confirm', {
                          confirmButtonText: 'confirm',
                          cancelButtonText: 'Cancel',
                          type: 'Confirm',
                          center: true
                        }).then(()=> {
                          this.$message.info("Wait...")
                          let url = "api/Viat_sftp_export/ExecuteRow?file_name="+fileName;
                          this.http.get(url,  { responseType: 'blob' }).then((response) => {
                            console.log(response);
                            let blob = new Blob(['\uFEFF' + response]);
                            // 针对于 IE 浏览器的处理, 因部分 IE 浏览器不支持 createObjectURL
                            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                              window.navigator.msSaveOrOpenBlob(blob, response.fileName);
                            } else {
                              var downloadElement = document.createElement("a");
                              var href = window.URL.createObjectURL(blob); // 创建下载的链接
                              downloadElement.href = href;
                              downloadElement.download = fileName; // 下载后文件名
                              document.body.appendChild(downloadElement);
                              downloadElement.click(); // 点击下载
                              document.body.removeChild(downloadElement); // 下载完成移除元素
                              window.URL.revokeObjectURL(href); // 释放掉 blob 对象
                            }
                            //if (!x.status) return this.$Message.error(x.message);
                            this.$Message.success("Complete.")
                            // this.refresh();
                          })
                        })

                      }
                    },
                    [h("i",{class:"el-icon-zoom-in"})],
                    "Download"
                )
              ]
          );
        }
      })
    },
    onInited() {
      //框架初始化配置后
      //如果要配置明细表,在此方法操作
      //this.detailOptions.columns.forEach(column=>{ });
      this.searchFormOptions.forEach(x => {
        x.forEach(item => {
          if (item.field == "transfer_date") {
            //设置单个日期查询
            item.range = false;
            //设置查询类型(默认为datetime)
            item.type = "date";
          }

        })
      })
    },
    searchBefore(param) {
      //界面查询前,可以给param.wheres添加查询参数
      //返回false，则不会执行查询
      return true;
    },
    searchAfter(result) {
      //查询后，result返回的查询数据,可以在显示到表格前处理表格的值
      return result;

    },
    addBefore(formData) {
      //新建保存前formData为对象，包括明细表，可以给给表单设置值，自己输出看formData的值
      return true;
    },
    updateBefore(formData) {
      //编辑保存前formData为对象，包括明细表、删除行的Id
      return true;
    },
    rowClick({ row, column, event }) {
      //查询界面点击行事件
      //debugger
      this.$refs.table.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
    },
    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)
    }
  }
};
export default extension;
