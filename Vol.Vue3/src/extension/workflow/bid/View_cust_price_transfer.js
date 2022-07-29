/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import PriceGroupModelBody from "../../price/price/PriceGroupModelBody";
import Viat_com_custModelBody from "../../basic/cust/Viat_com_custModelBody";
import BathUpdateBidPriceTransfer from "./BathUpdateBidPriceTransfer";
import confirmJoinGroup from "./confirmJoinGroup";
import View_com_prod_pop_query from "../../basic/prod/View_com_prod_pop_query.vue";
import commonPopForPriceTransfer from "./commonPopForPriceTransfer";

let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: View_com_prod_pop_query,
    gridBody: PriceGroupModelBody,
    gridFooter: Viat_com_custModelBody,
    //新建、编辑弹出框扩展组件
    modelHeader: confirmJoinGroup,
    modelBody: commonPopForPriceTransfer,
    modelFooter: BathUpdateBidPriceTransfer
  },
  in_pricegroup_dbid:'',//客户申请时查询到的群组dbid
  cust_dbid:'',
  prod_dbid:'',
  isFirstValid:true,//是否是第一次校驗
  joinGroupList:[],//加入价格群组的客户集合
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
  methods: {
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

    getSearchOption(field){
      let option;
      this.searchFormOptions.forEach(x=>{
        x.forEach(item => {
          if (item.field == field) {
            option = item;
          }
        })
      })
      return option;
    },

    getDetailColumns(field) {
      let row;
      this.detailOptions.columns.forEach(x => {
        if (x.field == field) {
          row = x;
        }
      })
      return row;
    },
    getColumnsOption(field) {
      let option;
      this.columns.forEach(x => {
        if (x.field === field) {
          option = x;
        }
      })
      return option;
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
        this.boxOptions.labelWidth = 150;
        this.boxOptions.width=1500
      this.boxOptions.height=1500
      //设置查询表单的标签文字宽度
      this.labelWidth = 150;
      //表格设置为单选
      this.single=true;
      //設置初始不加載
      this.load=false;
      //搜索表单不隐藏
      this.setFiexdSearchForm(true);
      //-------------------页面基础设置end---------------------

      //----------查詢列表格式化 start-----------
      /*let requestor_name=this.getColumnsOption("requestor_name");
      requestor_name.formatter = (row) => {
        //对单元格的数据格式化处理
        if (!row.requestor_name) {
          return;
        }
        return row.territory_id+"  "+row.requestor_name;
      }*/
      //日期格式化 formatter
      let modified_date=this.getColumnsOption("modified_date");
      modified_date.formatter = (row) => {
        //对单元格的数据格式化处理
        if (!row.modified_date) {
          return;
        }
        return row.modified_date.substr(0,10);
      }
      let create_date=this.getColumnsOption("created_date");
      create_date.formatter = (row) => {
        //对单元格的数据格式化处理
        if (!row.created_date) {
          return;
        }
        return row.created_date.substr(0,10);
      }
      //----------查詢列表格式化 end-----------

      //-----------------新增列表頁面按鈕start-----------------
      /*this.buttons.splice(1,0,{  //也可以用push或者splice方法来修改buttons数组
        name: 'Edit', //按钮名称
        icon: 'el-icon-edit', //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
        type: 'primary', //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
        value:'editBid',
        onClick: function () {
            this.editBid();
        }
      });*/
      //-----------------新增列表頁面按鈕end-----------------

      //-------------- pick 渲染 start-----------------
      let cust_dbid=this.getSearchOption("cust_dbid");
      cust_dbid.hidden=true
      let cust_id=this.getSearchOption("cust_id");
      cust_id.extra={
        render:this.getSearchRender("searchCustomer")
      }
      cust_id.onKeyPress=($event)=>{
        if($event.keyCode==13){
          let  cust_id_v = this.searchFormFields['cust_id']
          if(cust_id_v) {
            this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id_v.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.searchFormFields['cust_dbid'] =reslut.cust_dbid;
                this.searchFormFields['cust_id'] =reslut.cust_id ;
                this.pickCustomerName=reslut.cust_name
                return;
              }else{
                this.$message.error("Customer Id Is Not Exists.");
                this.searchFormFields['cust_id']=''
                this.searchFormFields['cust_dbid'] =""
                this.pickCustomerName=''
                return;
              }
            })
          }
        }
      }

      let form_cust_id=this.getEditOption("cust_id");
      form_cust_id.onKeyPress=($event)=>{
        if($event.keyCode==13){
          let  cust_id_v = this.editFormFields['cust_id']
          if(cust_id_v) {
            this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id_v.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.editFormFields['cust_dbid'] =reslut.cust_dbid;
                this.editFormFields['cust_id'] =reslut.cust_id ;
                this.pickEditFormCustomerName=reslut.cust_name
                this.initCustomerGroupInfo(reslut.cust_dbid);
                return;
              }else{
                this.$message.error("Customer Id Is Not Exists.");
                this.editFormFields['cust_id']=''
                this.editFormFields['cust_dbid'] =""
                this.editFormFields['cust_in_id']
                this.pickEditFormCustomerName=''
                return;
              }
            })
          }
        }
      }

      let group_id=this.getSearchOption("group_id");
      let group_dbid=this.getSearchOption("pricegroup_dbid");
      group_dbid.hidden=true
      group_id.extra={
        render:this.getSearchRender("searchPriceGroup")
      }
      group_id.onKeyPress=($event)=>{
        if($event.keyCode == 13){
          let  group_id_v = this.searchFormFields['group_id']
          if(group_id_v) {
            this.http.get("api/Viat_app_cust_price_group/getPriceGroupByGroupID?group_id="+group_id_v,{} , "loading").then(reslut => {
              if(reslut!==null){
                this.searchFormFields['pricegroup_dbid'] =reslut.pricegroup_dbid;
                this.searchFormFields['group_id'] =reslut.group_id ;
                this.pickPriceGroupName=reslut.group_name
              }else {
                this.$message.error("Group Id Is Not Exists.");
                this.searchFormFields['group_id']=''
                this.searchFormFields['pricegroup_dbid']=''
                this.pickPriceGroupName=''
              }

              return;
            })
          }

        }
      }
      let searchProd=this.getSearchOption("prod_id");
      let prod_dbid=this.getSearchOption("prod_dbid");
      prod_dbid.hidden=true
      searchProd.extra={
        render:this.getSearchRender("searchProd")
      }
      searchProd.onKeyPress=($event)=>{
        if($event.keyCode == 13){
          let  prod_id = this.searchFormFields['prod_id']
          if(prod_id) {
            this.http.get("api/Viat_com_prod/getProdByProdID?prod_id="+prod_id,{} , "loading").then(reslut => {
              if(reslut!=null){
                this.searchFormFields['prod_dbid'] =reslut.prod_dbid;
                this.searchFormFields['prod_id'] =reslut.prod_id ;
                this.pickProductName=reslut.prod_ename ;
              }else{
                this.$Message.error(" Product Id Is Not Exists.");
                this.searchFormFields['prod_dbid'] ='';
                this.searchFormFields['prod_id'] ='';
                this.pickProductName='' ;
              }

              return;
            })
          }

        }
      }

      //-------------- pick 渲染 end-----------------

      //==========================

      let isGroupImport=this.getEditOption("add_group")
      let form_group_id=this.getEditOption("group_id");
      form_group_id.extra={
        render:this.getPopShowRender("formPriceGroup")
      }
      isGroupImport.onChange=(val, option)=>{

        if(val=='Y'){
          //this.showGroupInfo()
          this.getEditOption("cust_in_id").inputStyle="";
        }else{
          // this.editFormFields["group_id"]=""
          // this.editFormFields["pricegroup_dbid"]=""
          //this.pickEditFormPriceGroupName=""
          this.joinGroupList=[]
          this.getEditOption("cust_in_id").inputStyle="border-color: red";
        }
      }
      /*isGroupImport.extra={
        render:this.groupImport()
      }*/



      //==========================
    },
    groupImport(){
      return (h, { row, column, index }) => {
        return h("div", { class:"el-input el-input--medium el-input--suffix" }, [
          h(
              "input",
              {
                class:"",
                value:"",
                text:"",
                type:"checkbox",
                style:{width:"20%"},
                onClick: (e) => {
                  let checkflag=e.currentTarget.checked
                  let form_group_id=this.getEditOption("group_id");
                  //form_group_id.disabled=!checkflag;
                  if(checkflag){
                    this.editFormFields.add_group='Y';
                    form_group_id.extra={
                      render:this.getPopShowRender("formPriceGroup")
                    }
                    this.showGroupInfo()
                  }else{
                    this.editFormFields.nhi_id='N';
                    form_group_id.extra={
                      render:this.getPopShowRender("formPriceGroup")
                    }
                    this.editFormFields["group_id"]=""
                    this.editFormFields["pricegroup_dbid"]=""
                    this.pickEditFormPriceGroupName=""
                  }
                }
              }
          )
        ]);
      };
    },

    showGroupInfo(){
      if(this.cust_dbid){
        this.http.get("api/Viat_app_cust_group/getCustGroupIDAndANmeByCustDBID?cust_dbid="+this.cust_dbid,{} , "loading").then(reslut => {
          if(reslut!==null){
            this.editFormFields['pricegroup_dbid'] =reslut.pricegroup_dbid;
            this.editFormFields['group_id'] =reslut.group_id ;
            this.pickEditFormPriceGroupName=reslut.group_name
          }else {
            this.$message.error("User not in the Group Data.");
            this.editFormFields['group_id']=''
            this.editFormFields['pricegroup_dbid']=''
            this.pickEditFormPriceGroupName=''
            this.editFormFields['add_group']='N'
          }
        })
      }

    },
    getPickName(searchType){
      if(searchType=="searchCustomer"){
        return this.pickCustomerName
      }else if(searchType=="formCustomer"){
        return this.pickEditFormCustomerName
      }else if(searchType=="searchPriceGroup"){
        return this.pickPriceGroupName
      }else if(searchType=="formPriceGroup"){
        return this.pickEditFormPriceGroupName
      }else if (searchType=="searchProd"){
        return this.pickProductName
      }

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

    getSearchRender(searchType) {//
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
                  if(searchType=="searchCustomer"){
                    this.$refs.gridFooter.openModel(true,searchType);
                  }
                  if(searchType=="searchPriceGroup"){
                    this.$refs.gridBody.openModel(true,searchType);
                  }

                  if(searchType=="searchProd"){
                    this.$refs.gridHeader.openModel(true,searchType);
                  }
                  if(searchType=="formPriceGroup"){
                    this.$refs.modelBody.openPriceGroup();
                  }
                  if(searchType=="formCustomer"){
                    this.$refs.modelBody.openCustPop();
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
                  if(searchType=="searchCustomer"){
                    this.searchFormFields["cust_dbid"] = "";
                    this.searchFormFields["cust_id"] = "";
                    this.pickCustomerName = "";
                  }if(searchType=="searchPriceGroup"){
                    this.searchFormFields["pricegroup_dbid"] = "";
                    this.searchFormFields["group_id"] = "";
                    this.pickPriceGroupName = "";
                  }
                  if(searchType=="formPriceGroup"){
                    this.editFormFields["group_id"]=""
                    this.editFormFields["pricegroup_dbid"]=""
                    this.pickEditFormPriceGroupName=""
                  }
                  if(searchType=="formCustomer"){
                    this.editFormFields["cust_id"]=""
                    this.editFormFields["cust_dbid"]=""
                    this.pickEditFormCustomerName=""
                  }
                  if(searchType=="searchProd"){
                    this.searchFormFields["prod_dbid"] = "";
                    this.searchFormFields["prod_id"] = "";
                    this.pickProductName=""
                  }
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
      if(flag=='searchProd'){
        this.searchFormFields['prod_dbid'] = rows[0].prod_dbid;
        this.searchFormFields['prod_id'] = rows[0].prod_id;
        this.pickProductName=rows[0].prod_ename
      }

    },
//选择客户Pick 回填字段
    handleCustomerSelected(flag,rows){
      if(flag=="searchCustomer"){
        this.searchFormFields["cust_dbid"] = rows[0].cust_dbid;
        this.searchFormFields["cust_id"] =rows[0].cust_id;
        this.pickCustomerName=rows[0].cust_name;
      }else{
        this.editFormFields["cust_dbid"] = rows[0].cust_dbid;
        this.editFormFields["cust_id"] =rows[0].cust_id;
        this.pickEditFormCustomerName=rows[0].cust_name;
      }
    },
    //选择group pick回填字段
    handlePriceGroupSelected(flag,rows){
      if(flag=="searchPriceGroup"){
        this.searchFormFields["pricegroup_dbid"] = rows[0].pricegroup_dbid;
        this.searchFormFields["group_id"] =rows[0].group_id;
        this.pickPriceGroupName=rows[0].group_name;
      }else{
        this.editFormFields["pricegroup_dbid"] = rows[0].pricegroup_dbid;
        this.editFormFields["group_id"] =rows[0].group_id;
        this.pickEditFormPriceGroupName=rows[0].group_name;
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
      //编辑保存前formData为对象，包括明细表、删除行的Id
      //選擇客戶List table1


      //新建保存前formData为对象，包括明细表，可以给给表单设置值，自己输出看formData的值
      return true;
    },
    updateBefore(formData) {
      debugger
      if(formData.mainData.add_group=='Y'){
        if(formData.mainData.cust_dbid){

        }else{
          this.$Message.error("Please input cust");
          return false;
        }
      }
      let allProdDBIDS=[]//所有價格產品
      //编辑保存前formData为对象，包括明细表、删除行的Id
      let priceTableRowData = this.$refs.modelFooter.priceTableRowData;
      let invalidProd=[];//产品状态无效
      let priceInvalid=[];//发票价格输入不合理
      //价格列表只判断产品状态
      priceTableRowData.forEach(x=>{
        allProdDBIDS.push(x.prod_dbid)
        if(x.prodStatus=='1'){
          //判断输入的发票价格是否合规
          if(Number(x.price_close)>Number(x.invoice_price)){
            priceInvalid.push(x.prod_id);
          }
        }else {
          invalidProd.push(x.prod_id);
        }
      })
      if(invalidProd.length>0){
        this.$Message.error("Price List Invalid Product "+invalidProd.join(",")+" ");
        return false;
      }
      if(priceInvalid.length>0){
        this.$Message.error("  Price List  Product "+priceInvalid.join(",")+", Invoice Price <Approved Price,can't be saved ,Please check");
        return false;
      }
      //table2數據回填到 formData
      let orderTableRowData = this.$refs.modelFooter.orderTableRowData;
      let orderInvalidProd=[];//产品状态无效
      let notExistProd=[];//不存在价格产品price book
      let lessThanMinQty=[];//购买数量小于price book设定的最小数量
      //订单列表需要判断产品状态和产品价格状态以及最小数量
      orderTableRowData.forEach(x=>{
        if(x.prodStatus=='1'){
          if(x.min_qty !=null){
            if(Number(x.qty)<Number(x.min_qty)){
              lessThanMinQty.push(x.prod_id);
            }
          }else{
            //数据库查询不到产品价格,看是否存在当前申请列表内
            priceTableRowData.forEach(p=>{
              if(p.prod_id==x.prod_id){
                if(Number(p.qty)<Number(x.min_qty)){
                  lessThanMinQty.push(x.prod_id);
                }
              }else{
                notExistProd.push(x.prod_id);
              }
            })
          }
        }else {
          orderInvalidProd.push(x.prod_id);
        }
      })

      if(orderInvalidProd.length>0){
        this.$Message.error("Order List Invalid Product "+orderInvalidProd.join(",")+" ");
        return false;
      }
      if(notExistProd.length>0){
        this.$Message.error("Order List Price not exist  "+notExistProd.join(",")+" ");
        return false;
      }
      if(lessThanMinQty.length>0){
        this.$Message.error("Order List  Product "+lessThanMinQty.join(",")+" ,Qty less than Min Qty ");
        return false;
      }
      let detailData = [
        {
          key: "priceTableRowData",
          value: priceTableRowData,
        },
        {
          key: "orderTableRowData",
          value: orderTableRowData,
        },
        {
          key:"orderNote",
          value: this.$refs.modelFooter.formModel.order_note
        },
        {
          key:"priceNote",
          value: this.$refs.modelFooter.formModel.price_note
        }
      ]
      if(this.isFirstValid){
        //第一次提交
        //調用接口校驗  allProdDBIDS
        //{"pricegroup_dbid":formData.mainData.pricegroup_dbid,"prod_dbid":allProdDBIDS}
        if(allProdDBIDS.length>0 && formData.mainData.in_pricegroup_dbid && formData.mainData.add_group=='Y'){
          //把客户所在群组dbid传入后台
          this.http.get("api/View_cust_price_transfer/CustPriceDetailData?cust_dbid="+this.cust_dbid+"&pricegroup_dbid="+formData.mainData.in_pricegroup_dbid+"&prod_dbid="+allProdDBIDS,{} , "loading").then(reslut => {
            this.isFirstValid=false
            if(reslut!==null && reslut.length>0){
              //查詢當前群組內其他產品的單一價格列表
              let data=reslut;
              if(data.length>0){
                this.$confirm('There are other customers in this group ,are you sure these customer join the group?', 'Warn', {
                  confirmButtonText: 'confirm',
                  cancelButtonText: 'Cancel',
                  type: 'warning',
                  center: true
                }).then(() => {
                  this.$refs.modelHeader.openModel(data)
                  return false
                });
              }
            }else {
              formData.detailData = detailData;
              this.save()
            }
          })
        }else{
          formData.detailData = detailData;
          return true;
        }

      }else{
        detailData.push({key:"joinGroupList",value:this.joinGroupList})
        formData.detailData = detailData;
        return true;
      }

    },

    handleConfirmJoinGroup(){

    },
    rowClick({ row, column, event }) {
      //查询界面点击行事件
      this.$refs.table.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
    },

    async modelOpenBeforeAsync(row) {
      if (this.currentAction==this.const.EDIT){
        if(row.state!=0){
          this.$Message.error(" This  data can not edit.");
          return false;
        }
      }
      return true;
    },

    initCustomerGroupInfo(cust_dbid){
      let cust_in_id=this.getEditOption("cust_in_id");
      this.http.get("api/Viat_app_cust_group/getCustGroupIDAndANmeByCustDBID?cust_dbid="+cust_dbid,{} , "loading").then(reslut => {
        debugger
        if(reslut!==null){
          cust_in_id.hidden=false
          this.editFormFields['cust_in_id']=reslut.group_id+"   "+reslut.group_name
          this.editFormFields['in_pricegroup_dbid']=reslut.pricegroup_dbid

          if (this.currentAction==this.const.EDIT){
            cust_in_id.inputStyle="border-color: red;"
          }else{
            cust_in_id.inputStyle=""
          }
        }else {
          this.editFormFields['in_pricegroup_dbid']=""
          cust_in_id.hidden=true
        }
      })
    },
    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)
      this.pickEditFormCustomerName=row.cust_name;
      this.pickEditFormPriceGroupName=row.group_name
      //获取当前数据的产品和客户dbid
      this.prod_dbid=row.prod_dbid
      this.cust_dbid=row.cust_dbid
      this.getEditOption("cust_dbid").hidden=true
      this.getEditOption("in_pricegroup_dbid").hidden=true


      let form_cust_id=this.getEditOption("cust_id");
      form_cust_id.extra={
        render:this.getPopShowRender("formCustomer")
      }

      let form_group_id=this.getEditOption("group_id");
      // form_group_id.disabled=true
      let form_group_dbid=this.getEditOption("pricegroup_dbid");
      form_group_dbid.hidden=true
      form_group_id.extra={
        render:this.getPopShowRender("formPriceGroup")
      }

      let cust_in_id=this.getEditOption("cust_in_id");
      cust_in_id.hidden=true
      if(row.cust_dbid){
        this.initCustomerGroupInfo(row.cust_dbid)
      }


      if (this.currentAction==this.const.EDIT){
        this.isFirstValid=true//
        this.joinGroupList=[]
        //只有组申请时才可以更改客户
        if(row.pricegroup_dbid){
          form_cust_id.extra={
            render:this.getSearchRender("formCustomer")
          }
        }
        this.getEditOption("start_date").disabled=false;
        this.getEditOption("end_date").disabled=false;

        //this.editFormFields['add_group']='N'
        /*this.getEditOption("add_group").disabled=false
        //this.editFormFields['add_group']='N'
        if(row.pricegroup_dbid){
          this.getEditOption("add_group").hidden=true
        }else{
          this.getEditOption("add_group").hidden=false
        }*/
      }
      this.$nextTick(
          ()=>{
            this.$refs.modelFooter.openModel(row.bid_no)
          });
    }
  }
};
export default extension;
