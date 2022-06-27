/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import View_com_prod_pop_query from "@/extension/basic/prod/View_com_prod_pop_query.vue";
import Viat_com_custModelBody from "@/extension/basic/cust/Viat_com_custModelBody";
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: View_com_prod_pop_query,
    gridFooter: Viat_com_custModelBody,
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: View_com_prod_pop_query,
    modelFooter: Viat_com_custModelBody
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
   Summary: '',
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

        //示例：设置修改新建、编辑弹出框字段标签的长度
        // this.boxOptions.labelWidth = 150;
      //显示查询全部字段
      this.setFiexdSearchForm(true);

      //設置默認值
      let contract_no  = this.$route.query.contract_no;
      this.searchFormFields.contract_no = contract_no;
      let sum_percent=this.getColumnsOption("sum_percent");
        sum_percent.formatter = (row) => {
        //对单元格的数据格式化处理
        if (!row.sum_percent) {
          return;
        }
          this.searchFormFields.Summary = row.sum_percent
        return row.sum_percent;
      }






      //查詢選擇
      let cust_dbidname=this.getSearchOption("cust_dbidname");
      cust_dbidname.extra={
        render:this.getSearchRender("cust_dbid","s","c")
      }
      let prod_dbidname=this.getSearchOption("prod_dbidname");
      prod_dbidname.extra={
        render:this.getSearchRender("prod_dbid","s","p")
      }
      //編輯選擇
      let search_cust_dbidname=this.getEditOption("cust_dbidname");
      search_cust_dbidname.extra = {
        render:this.getSearchRender("cust_dbid","f","c")
      }
      let edit_prod_dbidname=this.getEditOption("prod_dbidname");
      edit_prod_dbidname.extra = {
        render:this.getSearchRender("prod_dbid","f","p")
      }


    },
    onInited() {
      //框架初始化配置后
      //如果要配置明细表,在此方法操作
      //this.detailOptions.columns.forEach(column=>{ });

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
     * @param pageType c-cust,p-prod
     * @returns {function(*, {row: *, column: *, index: *}): *}
     */
    getSearchRender(fieldName,formType,pageType) {//
      return (h, { row, column, index }) => {
        return h("div", { style: { color: '#0c83ff', 'font-size': '12px', cursor: 'pointer',"text-decoration": "none"} }, [
          h(
              "a",
              {
                style: { "color":"","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none"},
                onClick: (e) => {
                  if(formType=='s'){//查詢頁面
                    if(pageType=='c'){
                      this.$refs.gridFooter.openDemo(fieldName,formType);
                    }
                    if(pageType=='p'){
                      this.$refs.gridBody.openDemo(fieldName,formType);
                    }
                  }
                  if(formType=='f'){//編輯頁面
                    if(pageType=='c'){
                      this.$refs.modelFooter.openDemo(fieldName,formType);
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
                style: { "color":"red","margin-left": "9px", "border-bottom": "1px solid", "text-decoration": "none"},
                onClick: (e) => {
                  if(formType=='s') {//查詢頁面
                    if(pageType=='c'){
                      this.$refs.gridFooter.clearData(fieldName,formType);
                    }if(pageType=='p'){
                      this.$refs.gridBody.clearData(fieldName,formType);
                    }
                  }
                  if(formType=='f'){//編輯頁面
                    if(pageType=='c'){
                      this.$refs.modelFooter.clearData(fieldName,formType);
                    }if(pageType=='p'){
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

    //计算总比值
  /*  async getSumPercent() {

      let data = "";
      let params = {
        "wheres": "[]"
      }
      let url = "api/View_app_hp_share_table/GetSumPercent";
      params.wheres = "[{\"name\":\"hpcont_dbid\",\"value\":\"" + this.$route.query.hpcont_dbid + "\",\"displayType\":\"=\"}]";
      let _result = await this.http.post(url, params, true).then((result) => {
        return result;
      });
      console.log( JSON.stringify(_result))
      return data;
    },*/


    searchBefore(param) {
      //界面查询前,可以给param.wheres添加查询参数
      //返回false，则不会执行查询
      param.wheres.push({ name: 'hpcont_dbid', value: this.$route.query.hpcont_dbid });
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
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)

      this.editFormFields.hpcont_dbid = this.$route.query.hpcont_dbid;
      this.editFormFields.cust_dbidname = this.editFormFields.cust_id+" "+this.editFormFields.cust_name;
      this.editFormFields.prod_dbidname = this.editFormFields.prod_id+" "+this.editFormFields.prod_ename;
    }
  }
};
export default extension;
