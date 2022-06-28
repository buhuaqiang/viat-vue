/*****************************************************************************************
 **  Author:jxx 2022
 **  QQ:283591387
 **完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
 **常用示例见：http://v2.volcore.xyz/document/vueDev
 **后台操作见：http://v2.volcore.xyz/document/netCoreDev
 *****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import Viat_com_custModelBody from "../../basic/cust/Viat_com_custModelBody";
import ProductModelBody from "../../basic/prod/View_com_prod_pop_query.vue";
import PriceGroupModelBody from "./PriceGroupModelBody";

let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: Viat_com_custModelBody,
    gridBody: ProductModelBody,
    gridFooter: PriceGroupModelBody,
    //新建、编辑弹出框扩展组件
    modelHeader: Viat_com_custModelBody,
    modelBody: ProductModelBody,
    modelFooter: PriceGroupModelBody
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: {view: [], box: [], detail: []}, //扩展的按钮
  methods: {
    getOption(field) {
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
    onInit() {  //框架初始化配置前，
      this.labelWidth = 180;
      //示例：设置修改新建、编辑弹出框字段标签的长度
      this.boxOptions.labelWidth = 180;
      this.setFiexdSearchForm(true);
      this.single = true;

      let custname = this.getOption("cust_dbidname");
      custname.extra = {
        render: this.getFormRender("cust_dbid", 'f', 'header')
      }
      let cust_dbid = this.getSearchOption("cust_dbid");
      let cust_dbidF = this.getEditFormOption("cust_dbid");
      let cust_custname = this.getSearchOption("cust_dbidname");
      cust_dbid.hidden = true
      cust_dbidF.hidden = true
      cust_custname.readonly = false
      cust_custname.extra = {
        render: this.getFormRender("cust_dbid", 's', 'header')
      }


      let prodname = this.getOption("prod_dbidname");
      prodname.extra = {
        render: this.getFormRender("prod_dbid", 'f', 'body')
      }
      let prod_dbid = this.getSearchOption("prod_dbid");
      let prod_dbidF = this.getEditFormOption("prod_dbid");
      let prod_prodname = this.getSearchOption("prod_dbidname");
      prod_dbid.hidden = true
      prod_dbidF.hidden = true
      prod_prodname.readonly = false
      prod_prodname.extra = {
        render: this.getFormRender("prod_dbid", 's', 'body')
      }

      let groupname = this.getOption("pricegroup_dbidname");
      groupname.extra = {
        render: this.getFormRender("pricegroup_dbid", 'f', 'footer')
      }
      let pricegroup_dbid = this.getSearchOption("pricegroup_dbid");
      let pricegroup_dbidF = this.getEditFormOption("pricegroup_dbid");
      let pricegroup_name = this.getSearchOption("pricegroup_dbidname");
      pricegroup_dbid.hidden = true
      pricegroup_dbidF.hidden = true
      pricegroup_name.readonly = false
      pricegroup_name.extra = {
        render: this.getFormRender("pricegroup_dbid", 's', 'footer')
      }

      //编辑弹窗 客户和产品多选绑定弹窗
     /* let custs=this.getEditFormOption("cust_dbidname");
      custs.extra = {
        icon: "el-icon-zoom-in",
        text: "選擇",
        style: "color:#409eff;font-size: 12px;cursor: pointer;",
        click: () => {
          this.$refs.modelHeader.openMulity("custs",'mf');
        }
      }
      let prods=this.getEditFormOption("prod_dbidname");
      prods.extra = {
        icon: "el-icon-zoom-in",
        text: "選擇",
        style: "color:#409eff;font-size: 12px;cursor: pointer;",
        click: () => {
          this.$refs.modelBody.openMulity("prods",'mf');
        }
      }
*/


      //日期格式化 formatter
      let created_date = this.getColumnsOption("created_date");
      created_date.formatter = (row) => {
        //对单元格的数据格式化处理
        if (!row.created_date) {
          return;
        }
        return row.created_date.substr(0, 10);
      }
      let start_date = this.getColumnsOption("start_date");
      start_date.formatter = (row) => {
        //对单元格的数据格式化处理
        if (!row.start_date) {
          return;
        }
        return row.start_date.substr(0, 10);
      }
      let end_date = this.getColumnsOption("end_date");
      end_date.formatter = (row) => {
        //对单元格的数据格式化处理
        if (!row.end_date) {
          return;
        }
        return row.end_date.substr(0, 10);
      }
      let modified_date = this.getColumnsOption("modified_date");
      modified_date.formatter = (row) => {
        //对单元格的数据格式化处理
        if (!row.modified_date) {
          return;
        }
        return row.modified_date.substr(0, 10);
      }
    },
    getFormRender(fieldName, formType, body) {//
      return (h, {row, column, index}) => {
          return h("div", {
            style: {
              color: '#0c83ff',
              'font-size': '12px',
              cursor: 'pointer',
              "text-decoration": "none"
            }
          }, [
            h(
              "a",
              {
                props: {},
                style: {
                  "color": "",
                  "border-bottom": "1px solid",
                  "margin-left": "9px",
                  "text-decoration": "none"
                },
                onClick: (e) => {
                  if (formType === 'f'){
                    if (body === 'header'){
                      this.$refs.modelHeader.openDemo(fieldName, formType)
                    }
                    if (body === 'body') {
                      this.$refs.modelBody.openDemo(fieldName, formType)
                    }
                    if (body === 'footer') {
                      this.$refs.modelFooter.openDemo(fieldName, formType)
                    }
                  }
                  if (formType === 's'){
                    if (body === 'header'){
                      this.$refs.gridHeader.openDemo(fieldName, formType);
                    }
                    if (body === 'body') {
                      this.$refs.gridBody.openDemo(fieldName, formType);
                    }
                    if (body === 'footer') {
                      this.$refs.gridFooter.openDemo(fieldName, formType);
                    }
                  }
                }
              },
              [h("i", {class: "el-icon-zoom-in"})],
              "選擇"
            ),
            h(
              "a",
              {
                props: {},
                style: {
                  "color": "red",
                  "margin-left": "9px",
                  "border-bottom": "1px solid",
                  "text-decoration": "none"
                },
                onClick: (e) => {
                  if (formType === 'f'){
                    if (body === 'header'){
                      this.$refs.modelHeader.clearData(fieldName, formType);
                    }
                    if (body === 'body') {
                      this.$refs.modelBody.clearData(fieldName, formType);
                    }
                    if (body === 'footer') {
                      this.$refs.modelFooter.clearData(fieldName, formType);
                    }
                  }
                  if (formType === 's'){
                    if (body === 'header'){
                      this.$refs.gridHeader.clearData(fieldName, formType);
                    }
                    if (body === 'body') {
                      this.$refs.gridBody.clearData(fieldName, formType);
                    }
                    if (body === 'footer') {
                      this.$refs.gridFooter.clearData(fieldName, formType);
                    }
                  }
                }
              },
              [h("i", {class: "el-icon-zoom-out"})],
              "清除"
            ),
          ]);
      };
    },
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
    getColumnsOption(field) {
      let option;
      this.columns.forEach(x => {
        if (x.field == field) {
          option = x;
        }
      })
      return option;
    },
    getEditFormOption(field) {
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
    onInited() {
      //框架初始化配置后
      //如果要配置明细表,在此方法操作
      //this.detailOptions.columns.forEach(column=>{ });
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
    rowClick({row, column, event}) {
      //查询界面点击行事件
      // this.$refs.table.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
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
