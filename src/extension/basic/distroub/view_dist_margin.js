/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import View_com_prod_pop_query from "../prod/View_com_prod_pop_query.vue";
import Viat_com_custModelBody from "../../basic/cust/Viat_com_custModelBody";

let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: Viat_com_custModelBody,
    gridBody: View_com_prod_pop_query,
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: Viat_com_custModelBody,
    modelBody: View_com_prod_pop_query,
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
        this.single=true;//设置单选
        //margin_value%格式化
        this.getColumnsOption("margin_value").formatter = (row) => {
            if (!row.margin_value) {
                return;
            }
            return  row.margin_value + '%';
        }



        //日期格式化 formatter
        let start_date=this.getColumnsOption("start_date");
        start_date.formatter = (row) => {
            //对单元格的数据格式化处理
            if (!row.start_date) {
                return;
            }
            return row.start_date.substr(0,10);
        }
        let end_date=this.getColumnsOption("end_date");
        end_date.formatter = (row) => {
            //对单元格的数据格式化处理
            if (!row.end_date) {
                return;
            }
            return row.end_date.substr(0,10);
        }
        let modified_date=this.getColumnsOption("modified_date");
        modified_date.formatter = (row) => {
            //对单元格的数据格式化处理
            if (!row.end_date) {
                return;
            }
            return row.end_date.substr(0,10);
        }
        //示例：设置修改新建、编辑弹出框字段标签的长度
        // this.boxOptions.labelWidth = 150;
        this.boxOptions.labelWidth=180;
        //显示查询全部字段
        this.setFiexdSearchForm(true);
        //设置查询表单的标签文字宽度
        this.labelWidth=180;
        //搜尋彈窗 選擇產品
        let proddbidname=this.getSearchOption('prod_dbidname');
        let prodbid=this.getSearchOption('prod_dbid');
        prodbid.hidden = true
        proddbidname.readonly = true
        proddbidname.extra = {
            render:this.getRender('prod_dbid', 's' ,'p')
       }
        let custdbidname = this.getSearchOption('cust_dbidname');
        let custdbid= this.getSearchOption('cust_dbid');
        custdbid.hidden = true
        custdbidname.readonly = true
        custdbidname.extra = {
            render:this.getRender('cust_dbid', 's' ,'c')
        }
        //編輯彈窗
        let proddbidEditname=this.getEditOption('prod_dbidname');
        proddbidEditname.readonly = true
        proddbidEditname.extra = {
            render:this.getRender('prod_dbid', 'f' ,'p')
        }
        let custdbidEditname = this.getEditOption('cust_dbidname');
        custdbidEditname.readonly = true
        custdbidEditname.extra = {
            render:this.getRender('cust_dbid', 'f','c' )
        }
        //编辑弹窗 客户和产品多选绑定弹窗
        let custs=this.getEditOption("custs");
        custs.extra = {
            icon: "el-icon-zoom-in",
            text: "選擇",
            style: "color:#409eff;font-size: 12px;cursor: pointer;",
            click: item => {
                this.$refs.modelHeader.openMulity("custs",'mf');
            }
        }
        let prods=this.getEditOption("prods");
        prods.extra = {
            icon: "el-icon-zoom-in",
            text: "選擇",
            style: "color:#409eff;font-size: 12px;cursor: pointer;",
            click: item => {
                this.$refs.modelBody.openMulity("prods",'mf');
            }
        }

    },
      getColumnsOption (field) {
          let option;
          this.columns.forEach(x => {
              if (x.field == field) {
                  option = x;
              }
          })
          return option;
      },

    onInited() {
      //框架初始化配置后
      //如果要配置明细表,在此方法操作
      //this.detailOptions.columns.forEach(column=>{ });
        //手动调度弹出框的高度
        this.boxOptions.height = this.boxOptions.height- 550;
    },
      //获取编辑页面字段
      getEditOption(field) {
          let option;
          this.editFormOptions.forEach(x => {
              x.forEach(item => {
                  if (item.field == field) {
                      option = item;
                  }
              })
          })
          return option;
      },
      /**
       *
       * @param fieldName綁定欄位
       * @param formType 表單類型f-form表單,s-查詢表單
       * @param pageType c-cust,pg-pricegroup,p-prod
       * @returns {function(*, {row: *, column: *, index: *}): *}
       */
      getRender(fieldName,formType,pageType) {//
          return (h, { row, column, index }) => {
              return h("div", { style: { color: '#0c83ff', 'font-size': '12px', cursor: 'pointer',"text-decoration": "none"} }, [
                  h(
                      "a",
                      {
                          props: {},
                          style: { "color":"","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none"},
                          onClick: (e) => {
                              if(formType=='s'){
                                  if(pageType=='c'){
                                      this.$refs.gridHeader.openDemo(fieldName,formType);
                                  }
                                  if(pageType=='p'){
                                      this.$refs.gridBody.openDemo(fieldName,formType);
                                  }

                              }
                              if(formType=='f'){
                                  if(pageType=='c'){
                                      this.$refs.modelHeader.openDemo(fieldName,formType);
                                  }
                                  if(pageType=='p'){
                                      this.$refs.modelBody.openDemo(fieldName,formType);
                                  }


                              }
                          }
                      },
                      [h("i",{class:"el-icon-zoom-in"})],
                      "選擇"
                  ),
                  h(
                      "a",
                      {
                          props: {},
                          style: { "color":"red","margin-left": "9px", "border-bottom": "1px solid", "text-decoration": "none"},
                          onClick: (e) => {
                              if(formType=='s') {
                                  if(pageType=='c'){
                                      this.$refs.gridHeader.clearData(fieldName,formType);
                                  }
                                  if(pageType=='p'){
                                      this.$refs.gridBody.clearData(fieldName,formType);
                                  }
                              }
                              if(formType=='f'){
                                  if(pageType=='c'){
                                      this.$refs.modelHeader.clearData(fieldName,formType);
                                  }
                                  if(pageType=='p'){
                                      this.$refs.modelBody.clearData(fieldName,formType);
                                  }

                              }
                          }
                      },
                      [h("i",{class:"el-icon-zoom-out"})],
                      "清除"
                  ),


              ]);
          };
      },


      //獲取搜尋頁面字段
      getSearchOption(field) {
          let option;
          this.searchFormOptions.forEach(x => {
              x.forEach(item => {
                  if (item.field == field) {
                      option = item;
                  }
              })
          })
          return option;
      },

    searchBefore(param) {
      //界面查询前,可以给param.wheres添加查询参数
      //返回false，则不会执行查询
      return true;
    },
    searchAfter(result) {
      //查询后，result返回的查询数据,可以在显示到表格前处理表格的值
      return true;
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
       this.$refs.table.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
    },
    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
        let prodidEdit=this.getEditOption('prod_id');
        prodidEdit.hidden=true;
        let custidEdit=this.getEditOption('cust_id');
        custidEdit.hidden=true;
        let prodenameEdit=this.getEditOption('prod_ename');
        prodenameEdit.hidden=true;
        let custnameEdit=this.getEditOption('cust_name');
        custnameEdit.hidden=true;

        this.editFormFields.prod_dbidname= this.editFormFields.prod_id + ' ' + this.editFormFields.prod_ename;
        this.editFormFields.cust_dbidname= this.editFormFields.cust_id + ' ' + this.editFormFields.cust_name;
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)


        //編輯彈窗
        //判断是新增还是修改
        let custs=this.getEditOption("custs");
        let prods= this.getEditOption("prods");
        custs.data=[];
        prods.data=[];

        let proddbidEditname=this.getEditOption('prod_dbidname');
        let custdbidEditname = this.getEditOption('cust_dbidname');
        if(this.currentAction==this.const.ADD){
            proddbidEditname.hidden = true
            custdbidEditname.hidden = true

            custs.hidden=false
            prods.hidden=false
        }else if(this.currentAction==this.const.EDIT){
            proddbidEditname.hidden = false
            custdbidEditname.hidden = false

            custs.hidden=true
            prods.hidden=true


        }



    }
  }
};
export default extension;
