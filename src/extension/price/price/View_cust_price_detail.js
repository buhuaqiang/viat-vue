/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import View_com_prod_pop_query from "../../basic/prod/View_com_prod_pop_query.vue";
import Viat_com_custModelBody from "../../basic/cust/Viat_com_custModelBody";
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: View_com_prod_pop_query,
    gridBody: Viat_com_custModelBody,
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: View_com_prod_pop_query,
    modelBody: Viat_com_custModelBody,
    modelFooter: ''
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
  methods: {
    getFormOption(field) {
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
    getColumns(field) {
      let row;
      this.columns.forEach(x => {
        if (x.field == field) {
          row = x;
        }
      })
      return row;
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
                    if(pageType=='p'){
                      this.$refs.gridHeader.openDemo(fieldName,formType);
                    }
                    if(pageType=='c'){
                      this.$refs.gridBody.openDemo(fieldName,formType);
                    }

                  }
                  if(formType=='f'){
                    if(pageType=='p'){
                      this.$refs.modelHeader.openDemo(fieldName,formType);
                    }
                    if(pageType=='c'){
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
                    if(pageType=='p'){
                      this.$refs.gridHeader.clearData(fieldName,formType);
                    }
                    if(pageType=='c'){
                      this.$refs.gridBody.clearData(fieldName,formType);
                    }
                  }
                  if(formType=='f'){
                    if(pageType=='p'){
                      this.$refs.modelHeader.clearData(fieldName,formType);
                    }
                    if(pageType=='c'){
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

      this.boxOptions.labelWidth = 180;
      //显示查询全部字段
      this.setFiexdSearchForm(true);
      //设置查询表单的标签文字宽度
      this.labelWidth = 180;
      //表格设置为单选
      this.single=true;
      //设置保存后继续添加 ，不关闭当前窗口
      this.continueAdd=true;
      this.continueAddName="Save And Continue";
      //设置查询页面显示6个按钮(默认3个)
      this.maxBtnLength = 6;
      //-------------日期字段格式化 start--------------
      let startDate=this.getColumns("start_date");
      let endDate=this.getColumns("end_date");
      let modifiedDate=this.getColumns("modified_date");
      startDate.formatter = (row) => {
        if (!row.start_date) {
          return;
        }
        return row.start_date.substr(0,10);
      }
      endDate.formatter = (row) => {
        if (!row.end_date) {
          return;
        }
        return row.end_date.substr(0,10);
      }
      modifiedDate.formatter = (row) => {
        if (!row.modified_date) {
          return;
        }
        return row.modified_date.substr(0,10);
      }
      //-------------日期字段格式化 end--------------
      //-------------列表頁搜索框綁定彈窗 start-------------
      let searchCust=this.getSearchOption("cust_dbidname");
      searchCust.disabled=true
      searchCust.extra = {
        render: this.getRender("cust_dbid", 's','c')
      }
      let searchCustDBID=this.getSearchOption("cust_dbid");
      searchCustDBID.hidden=true;

      let searchProdDBIDS=this.getSearchOption("prods");
      searchProdDBIDS.extra = {
        icon: "el-icon-zoom-in",
        text: "選擇",
        style: "color:#409eff;font-size: 12px;cursor: pointer;",
        click: item => {
          this.$refs.gridHeader.openMulity("prods",'ms');
        }
      }

      //-------------列表頁搜索框綁定彈窗 end-------------
      //-------------表單輸入框綁定彈窗 start-------------
      let formCust=this.getFormOption("cust_dbidname");
      let formProd=this.getFormOption("prod_dbidname");
      let formCustDBID=this.getFormOption("cust_dbid");
      let formProdDBID=this.getFormOption("prod_dbid");
      formCustDBID.hidden=true;
      formProdDBID.hidden=true;
      formCust.extra = {
        render: this.getRender("cust_dbid", 'f','c')
      }
      formProd.extra = {
        render: this.getRender("prod_dbid", 'f','p')
      }
      //-------------表單輸入框綁定彈窗 end-------------


    },
    handleFormSelected(rows){
      alert("check the cust is Expfizer ");
      //alert("cust_dbid:"+rows[0].cust_dbid)
      if(rows[0].cust_id=='CD15590180'){
        this.getFormOption("gross_price").hidden=false;
      }else{
        this.getFormOption("gross_price").hidden=true;
      }

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
      if(formData.mainData.nhi_price >= formData.mainData.invoice_price && formData.mainData.invoice_price >= formData.mainData.net_price ){

      }else{
        this.$Message.error(" Nhi price >= Invoice Price and Invoice Price >= Net Price");
        return false;
      }
      return true;
    },
    updateBefore(formData) {
      //编辑保存前formData为对象，包括明细表、删除行的Id
      //source_type=2组内价格不允许编辑

      if(formData.mainData.nhi_price >= formData.mainData.invoice_price && formData.mainData.invoice_price >= formData.mainData.net_price ){

      }else{
        this.$Message.error(" Nhi price >= Invoice Price and Invoice Price >= Net Price");
        return false;
      }
      return true;
    },
    rowClick({ row, column, event }) {
      //查询界面点击行事件
      this.$refs.table.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
    },
    modelOpenBefore(row){
      if (this.currentAction==this.const.EDIT){
        if(row.source_type==2){
          this.$Message.error(" This group data can not edit.");
          return false;
        }
      }
      //---------處理彈框字段顯示---------
      this.editFormOptions.forEach(x => {
        x.forEach(item => {
          item.disabled=this.currentAction==this.const.VIEW;
        })
      })
      if (this.hasDetail) {
        this.detailOptions.columns.forEach(x=>{
          x.edit=!this.currentAction==this.const.VIEW;
        })
        this.detailOptions.buttons.forEach(x=>{
          x.hidden=this.currentAction==this.const.VIEW;
        })
      }
      //隱藏保存按鈕
      let saveBtn = this.boxButtons.find((x) => x.name == '保 存');
      if(saveBtn){
        saveBtn.hidden=this.currentAction==this.const.VIEW;
      }

    },
    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)
      this.getFormOption("cust_dbidname").disabled=true;
      this.getFormOption("prod_dbidname").disabled=true;
      this.getFormOption("nhi_price").disabled=true;
      //判斷Cust Id是否為Expfizer Cust Id
      this.getFormOption("gross_price").hidden=true;

      if(this.currentAction==this.const.ADD){
        //設置Min Qty初始值為1
        this.editFormFields.min_qty=1;
        //設置狀態默認值
        this.editFormFields.status='Y';

        this.getFormOption("bid_no").disabled=false;
        this.getFormOption("invoice_price").disabled=false;
        this.getFormOption("net_price").disabled=false;
        this.getFormOption("min_qty").disabled=false;
        this.getFormOption("cust_dbidname").extra={render: this.getRender("cust_dbid", 'f','c')};
        this.getFormOption("prod_dbidname").extra={render: this.getRender("prod_dbid", 'f','p')};

      }else if (this.currentAction==this.const.EDIT){

        if(row.gross_price){
          this.getFormOption("gross_price").hidden=false;
        }
        this.getFormOption("bid_no").disabled=true;
        this.getFormOption("invoice_price").disabled=true;
        this.getFormOption("net_price").disabled=true;
        this.getFormOption("min_qty").disabled=true;
        this.getFormOption("cust_dbidname").extra={};
        this.getFormOption("prod_dbidname").extra={};

      }else if (this.currentAction==this.const.VIEW){
        if(row.gross_price){
          this.getFormOption("gross_price").hidden=false;
        }
      }

    }
  }
};
export default extension;
