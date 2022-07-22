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
import InvalidDataPage from "./InvalidDataPage";
import Common_ModelBody from "./Common_ModelBody";

let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: View_com_prod_pop_query,
    gridBody: Viat_com_custModelBody,
    gridFooter: Common_ModelBody,
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
    getPickName(searchType){
      if(searchType=="searchCustomer"){
        return this.pickCustomerName
      }
      if(searchType=="formCustomer"){
        return this.pickEditFormCustomerName
      }else if(searchType=='editFormProduct'){
        return this.pickEditFormProductName
      }

    },
    getPopRender(searchType) {//
      return (h, { row, column, index }) => {
        return h("div", { class:"el-input el-input--medium el-input--suffix" }, [
          h(
              "input",
              {
                class:"el-input__inner",
                type:"text",
                style:{width:"70%","background-color":"#f5f7fb"},
                readonly:"true",
                value:this.getPickName(searchType)
              }
          ),
          h(
              "a",
              {
                props: {},
                style: { "color":"#409eff","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none","cursor":"pointer","font-size": "12px"},
                onClick: (e) => {
                  if(searchType=='editFormProduct'){
                    this.$refs.modelHeader.openModel(true,searchType)
                  }
                  if(searchType=="searchCustomer"){
                    this.$refs.gridBody.openModel(true,searchType)
                  }
                  if(searchType=='formCustomer'){
                    this.$refs.modelBody.openModel(true,searchType)
                  }
                }
              },
              [h("i",{class:"el-icon-zoom-in"})],
              "Pick"
          ),
          h(
              "a",
              {
                props: {},
                style: { "color":"red","margin-left": "9px", "border-bottom": "1px solid", "text-decoration": "none","cursor":"pointer","font-size": "12px"},
                onClick: (e) => {

                  if(searchType=='editFormProduct'){
                    this.editFormFields['prod_dbid'] = "";
                    this.editFormFields['prod_id'] = "";
                    this.pickEditFormProductName=''
                  }
                  if(searchType=="searchCustomer"){
                    this.searchFormFields["cust_dbid"] ='';
                    this.searchFormFields["cust_id"] ='';
                    this.pickCustomerName=''
                  }
                  if(searchType=='formCustomer'){
                    this.editFormFields['cust_dbid'] = "";
                    this.editFormFields['cust_id'] = "";
                    this.pickEditFormCustomerName=''
                  }
                }
              },
              [h("i",{class:"el-icon-zoom-out"})],
              "Clean"
          ),

        ]);
      };
    },


    getPopShowRender(searchType) {//
      return (h, { row, column, index }) => {
        return h("div", { class:"el-input el-input--medium el-input--suffix" }, [
          h(
              "input",
              {
                class:"el-input__inner",
                type:"text",
                style:{width:"70%","background-color":"#f5f7fb"},
                readonly:"true",
                value:this.getPickName(searchType)
              }
          )
          ,h(
              "a",
              {
                props: {},
                style: { "color":"grey","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none","cursor":"pointer","font-size": "12px"},
                onClick: (e) => {

                }
              },
              [h("i",{class:"el-icon-zoom-in"})],
              "Pick"
          ),
          h(
              "a",
              {
                props: {},
                style: { "color":"grey","margin-left": "9px", "border-bottom": "1px solid", "text-decoration": "none","cursor":"pointer","font-size": "12px"},
                onClick: (e) => {

                }
              },
              [h("i",{class:"el-icon-zoom-out"})],
              "Clean"
          ),
        ]);
      };
    },

    //選擇prod回填字段
    handleProdSelected(flag,rows){
      if(flag=='editFormProduct'){
        this.editFormFields['prod_dbid'] = rows[0].prod_dbid;
        this.editFormFields['prod_id'] = rows[0].prod_id;
        this.pickEditFormProductName=rows[0].prod_ename
      }
      if(flag=='prods'){
        let selectrows = [];//将勾选值设置成数组
        rows.forEach(row=>{
          selectrows.push({"key":row.prod_dbid,"value":row.prod_ename});
          this.searchFormFields.prods.push(row.prod_dbid)
        })
        this.getSearchOption("prods").data=selectrows;
      }
    },
    //选择客户Pick 回填字段
    handleCustomerSelected(flag,rows){
      if(flag=="searchCustomer"){
        this.searchFormFields["cust_dbid"] = rows[0].cust_dbid;
        this.searchFormFields["cust_id"] =rows[0].cust_id;
        this.pickCustomerName=rows[0].cust_name;
      }else if(flag=='formCustomer'){
        this.editFormFields["cust_dbid"] = rows[0].cust_dbid;
        this.editFormFields["cust_id"] =rows[0].cust_id;
        this.pickEditFormCustomerName=rows[0].cust_name;
      }

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
      this.boxOptions.height=520
      this.boxOptions.width=1600
      //显示查询全部字段
      this.setFiexdSearchForm(true);
      //设置查询表单的标签文字宽度
      this.labelWidth = 180;
      //表格设置为单选
      this.single=true;
      //设置保存后继续添加 ，不关闭当前窗口
      this.continueAdd=true;
      this.continueAddName="Save And Continue";
      //設置初始不加載
      this.load=false;
      //设置查询页面显示6个按钮(默认3个)
      //this.maxBtnLength = 6;
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
      let searchCust=this.getSearchOption("cust_id");
      searchCust.extra = {
        render: this.getPopRender("searchCustomer")
      }
      let searchCustDBID=this.getSearchOption("cust_dbid");
      searchCust.onKeyPress= ($event) => {
        if($event.keyCode==13){
          let  cust_id = this.searchFormFields['cust_id']
          if(cust_id) {
            this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.searchFormFields['cust_dbid'] =reslut.cust_dbid;
                this.searchFormFields['cust_id'] =reslut.cust_id
                this.pickCustomerName=reslut.cust_name
                return;
              }else{
                this.$message.error("Customer Id Is Not Exists.");
                this.searchFormFields['cust_dbid'] ='';
                this.searchFormFields['cust_id'] =''
                this.pickCustomerName=''
                return;
              }
            })
          }
        }
      }
      searchCustDBID.hidden=true;

      let searchProdDBIDS=this.getSearchOption("prods");
      searchProdDBIDS.extra = {
        icon: "el-icon-zoom-in",
        text: "Pick",
        style: "color:#409eff;font-size: 12px;cursor: pointer;",
        click: item => {
          this.$refs.gridHeader.openModel(false,"prods");
        }
      }

      //-------------列表頁搜索框綁定彈窗 end-------------
      //-------------表單輸入框綁定彈窗 start-------------
      let formCust=this.getFormOption("cust_id");
      let formProd=this.getFormOption("prod_id");
      let formCustDBID=this.getFormOption("cust_dbid");
      let formProdDBID=this.getFormOption("prod_dbid");
      formCustDBID.hidden=true;
      formProdDBID.hidden=true;
      formCust.extra = {
        render: this.getPopRender("formCustomer")
      }
      formCust.onKeyPress= ($event) => {
        if($event.keyCode==13){
          let  cust_id = this.editFormFields['cust_id']
          if(cust_id) {
            this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.editFormFields['cust_dbid'] =reslut.cust_dbid;
                this.editFormFields['cust_id'] =reslut.cust_id ;
                this.pickEditFormCustomerName= reslut.cust_name;
                return;
              }else{
                this.$message.error("Customer Id Is Not Exists.");
                this.editFormFields['cust_dbid'] ='';
                this.editFormFields['cust_id'] ='';
                this.pickEditFormCustomerName= '';
                return;
              }
            })
          }
        }
      }


      formProd.extra = {
        render: this.getPopRender("editFormProduct")
      }
      formProd.onKeyPress= ($event) => {
        if($event.keyCode==13){
          let  prod_id = this.editFormFields['prod_id']
          if(prod_id) {
            this.http.get("api/Viat_com_prod/getProdByProdID?prod_id="+prod_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.editFormFields['prod_dbid'] =reslut.prod_dbid;
                this.editFormFields['prod_id'] =reslut.prod_id ;
                this.pickEditFormProductName= reslut.prod_ename;
                return;
              }else{
                this.$message.error("Product Id Is Not Exists.");
                this.editFormFields['prod_dbid'] ='';
                this.editFormFields['prod_id'] ='' ;
                this.pickEditFormProductName= '';
                return;
              }
            })
          }
        }
      }

      ///=======狀態修改為無效時 修改結束日期為當前日期==========
      let status=this.getFormOption("status");
      status.onChange=(val, option)=>{
        if(val=='N'){
          let dateStrs=this.parseTime(new Date(),'{y}-{m}-{d}')
          this.editFormFields['end_date']=dateStrs;
        }
      }

      //-------------表單輸入框綁定彈窗 end-------------


    },

    parseTime(time,cFormat){
      const format=cFormat||'{y}-{m}-{d} {h}:{i}:{s}'
      let date
      if(typeof time ==='object'){
        date=time
      }else {
        if(typeof time ==='string'){
          if((/^[0-9]+$/.test(time))){
            time=parseInt(time)
          }else{
            time=time.replace(new RegExp(/-/gm),'/')
          }
        }
        if((typeof time==='number') && (time.toString().length)===10){
          time=time*1000
        }
        date=new Date(time)
      }
      const formatObj={
        y:date.getFullYear(),
        m:date.getMonth()+1,
        d:date.getDate(),
        h:date.getHours(),
        i:date.getMinutes(),
        s:date.getSeconds(),
        a:date.getDay()
      }
      const time_str=format.replace(/{([ymdhisa])+}/g,(result,key)=>{
        const value=formatObj[key]
        if(key==='a'){
          return['日','一','二','三','四','五','六'][value]
        }
        return  value.toString().padStart(2,'0')
      })
      return time_str
    },
    handleCustFormSelected(rows){
      alert("check the cust is Expfizer ");
      //alert("cust_dbid:"+rows[0].cust_dbid)
      if(rows[0].cust_id=='CD15590180'){
        this.getFormOption("gross_price").hidden=false;
      }else{
        this.getFormOption("gross_price").hidden=true;
      }

    },
    invalidData(){
      this.$refs.gridFooter.openInvalidPage();
    },
    bathAdd(){
      this.$refs.gridFooter.openBathAddCustDetailPage();
    },
    //reset不清理我們自定義的參數值
    resetSearchFormAfter() {
      this.pickCustomerName=''
      this.pickProductName=''
      this.pickPriceGroupName=''
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

     /* if(formData.mainData.nhi_price >= formData.mainData.invoice_price && formData.mainData.invoice_price >= formData.mainData.net_price ){

      }else{
        this.$Message.error(" Nhi price >= Invoice Price and Invoice Price >= Net Price");
        return false;
      }*/
      if(formData.mainData.start_date <= formData.mainData.end_date){

      }else{
        this.$Message.error("Start date can't behind end date");
        return false;
      }
      return true;
    },
    rowClick({ row, column, event }) {
      //查询界面点击行事件
      this.$refs.table.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
    },
    modelOpenBefore(row){
     /* if (this.currentAction==this.const.EDIT){
        if(row.source_type==2){
          this.$Message.error(" This group data can not edit.");
          return false;
        }
      }*/

    },
    async modelOpenBeforeAsync(row) {
      if (this.currentAction==this.const.EDIT){
        if(row.source_type==2){
          this.$Message.error(" This group data can not edit.");
          return false;
        }
      }
      return true;
    },
    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)

      this.getFormOption("nhi_price").disabled=true;
      //判斷Cust Id是否為Expfizer Cust Id
      this.getFormOption("gross_price").hidden=true;

      this.pickEditFormCustomerName=''
      this.pickEditFormProductName=''

      if(this.currentAction==this.const.ADD){
        //設置Min Qty初始值為1
        this.editFormFields.min_qty=1;
        //設置狀態默認值
        this.editFormFields.status='Y';

        this.getFormOption("bid_no").disabled=false;
        this.getFormOption("invoice_price").disabled=false;
        this.getFormOption("net_price").disabled=false;
        this.getFormOption("min_qty").disabled=false;
        this.getFormOption("cust_id").extra={render: this.getPopRender("formCustomer")};
        this.getFormOption("prod_id").extra={render: this.getPopRender("editFormProduct")};

      }else if (this.currentAction==this.const.EDIT){

        if(row.status=='Y'){
          this.getFormOption("status").disabled=false;
        }else if(row.status=='N'){
          this.getFormOption("status").disabled=true;
        }
        
        if(row.gross_price){
          this.getFormOption("gross_price").hidden=false;
          this.getFormOption("gross_price").disabled=true;
        }else{

        }

        this.getFormOption("bid_no").disabled=true;
        this.getFormOption("invoice_price").disabled=true;
        this.getFormOption("net_price").disabled=true;

        this.getFormOption("min_qty").disabled=true;
        this.getFormOption("cust_id").extra={render: this.getPopShowRender("formCustomer")};
        this.getFormOption("prod_id").extra={render: this.getPopShowRender("editFormProduct")};
        this.getFormOption("cust_id").disabled=true;
        this.getFormOption("prod_id").disabled=true;
        this.pickEditFormCustomerName=row.cust_name
        this.pickEditFormProductName=row.prod_ename

      }else if (this.currentAction==this.const.VIEW){
        if(row.gross_price){
          this.getFormOption("gross_price").hidden=false;
          this.getFormOption("gross_price").disabled=true;
        }
      }


    }
  }
};
export default extension;
