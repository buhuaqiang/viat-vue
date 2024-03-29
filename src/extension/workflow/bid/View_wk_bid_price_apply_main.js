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
import BathInsertBidPrice from "./BathInsertBidPrice";
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: PriceGroupModelBody,
    gridFooter: Viat_com_custModelBody,
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: BathInsertBidPrice,
    modelFooter: ''
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
  methods: {
     //下面这些方法可以保留也可以删除
    onInit() {  //框架初始化配置前，
      this.labelWidth=180;
      this.boxOptions.height=1500;
      this.boxOptions.width=2400;
      //设置编辑表单标签文字宽度
      this.boxOptions.labelWidth=150;
      this.setFiexdSearchForm(true);
      this.load=false;
      //
      this.buttons.push({  //也可以用push或者splice方法来修改buttons数组
        name: 'Submit', //按钮名称
        icon: 'el-icon-circle-check', //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
        type: 'success', //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
        value:'submit',
        onClick: function () {
              this.doSubmit();
        }
      });
      this.buttons.push({  //也可以用push或者splice方法来修改buttons数组
        name: 'Call Back', //按钮名称
        icon: 'el-icon-back', //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
        type: 'danger', //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
        value:'back',
        onClick: function () {
          this.doRollBack();
        }
      });

      this.boxButtons.splice(1, 0,{
        name: 'Save and Submit',
        icon: 'el-icon-check',
        type: 'danger',
        disabled: false,
        value: 'Save&Submit',
        onClick() {
          this.saveSubmit();
        }
      })



      var editform_cust_id = this.getFormOption("cust_id");
      var editform_group_id = this.getFormOption("group_id");
      var isgroup = this.getFormOption("isgroup");
      var cust_exists_group_id =  this.getFormOption("cust_exists_group_id");
      var cust_exists_group_name =  this.getFormOption("cust_exists_group_name");
      isgroup.onChange = (val) => {

        if(val=='0'){
          editform_cust_id.hidden=false;
          editform_cust_id.required = true
          editform_group_id.hidden = true;
          editform_group_id.required = false
          cust_exists_group_id.hidden = true;
          cust_exists_group_name.hidden = true;
          this.editFormFields.pricegroup_dbid="";
          this.editFormFields.group_id="";
          this.pickEditFormPriceGroupName = "";
        }else if(val=='1'){
          editform_cust_id.hidden=true;
          editform_cust_id.required = false
          editform_group_id.hidden = false;
          editform_group_id.required = true
          editform_group_id.disabled = false;
          cust_exists_group_id.hidden = true;
          cust_exists_group_name.hidden = true;
          this.editFormFields.cust_dbid="";
          this.editFormFields.cust_id="";
          this.editFormFields.cust_name="";
          this.pickEditFormCustomerName = "";
        }

      }
      editform_cust_id.extra = {
        render:this.getFormRender("editFormSearchCustomer","")
      }

      editform_group_id.extra={
        render:this.getFormRender("editFormSearchPriceGroup","")
      }
      //編輯框快捷回填customer和pricegroup
      editform_cust_id.onKeyPress=($event)=>{
        if($event.keyCode == 13){
          let  cust_id = this.editFormFields['cust_id']
          if(cust_id) {
            this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.editFormFields['cust_dbid'] =reslut.cust_dbid;
                this.editFormFields['cust_id'] =reslut.cust_id ;
                this.pickEditFormCustomerName=reslut.cust_name;
                this.initCustomerGroup(reslut.cust_dbid);
                return;
              }else{
                this.editFormFields['cust_dbid'] ="";
                this.editFormFields['cust_id'] ="" ;
                this.pickEditFormCustomerName="";
                this.editFormFields['cust_exists_group_id'] ="" ;
                this.editFormFields['cust_exists_group_name'] ="" ;
                cust_exists_group_id.hidden = true;
                cust_exists_group_name.hidden = true;
                this.$message.error("Customer Id Is Not Exists.");
                return;
              }

            })
          }

        }
      }

      editform_group_id.onKeyPress=($event)=>{
        if($event.keyCode == 13){
          let  group_id = this.editFormFields['group_id']
          if(group_id) {
            this.http.get("api/Viat_app_cust_price_group/getPriceGroupByGroupID?group_id="+group_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.editFormFields['pricegroup_dbid'] =reslut.pricegroup_dbid;
                this.editFormFields['group_id'] =reslut.group_id ;
                this.pickEditFormPriceGroupName=reslut.group_name;
                return;
              }else{
                this.$message.error("Group Id Is Not Exists.");
                return ;
              }

            })
          }

        }
      }

      var editform_apply_type = this.getFormOption("apply_type");
      editform_apply_type.onChange = (val) => {
        if(val=='03'){
          this.editFormFields.isgroup = "0";
          this.getFormOption("start_date").hidden=false;
          this.getFormOption("end_date").hidden=false;
          this.getFormOption("start_date").required=true;
          this.getFormOption("end_date").required=true;
          this.getFormOption("isgroup").disabled=false;
          this.getFormOption("cust_id").required=true;
          this.getFormOption("cust_id").hidden=false;
          this.$refs.modelBody.showPriceDiv = true;
        }else if(val=='04'){
          this.getFormOption("start_date").hidden=true;
          this.getFormOption("end_date").hidden=true;
          this.getFormOption("start_date").required=false;
          this.getFormOption("end_date").required=false;
          this.editFormFields.isgroup = "0";
          this.getFormOption("isgroup").disabled=true;
          this.getFormOption("cust_id").hidden=false;
          this.getFormOption("cust_id").required=true;

          this.getFormOption("group_id").hidden=true;
          this.getFormOption("group_id").required=false;

          this.$refs.modelBody.showPriceDiv = false;
        }

      }

      //查詢條件快捷回填
      let searchCust_Id=this.getSearchOption("cust_id");
      searchCust_Id.extra={
        render:this.getSearchRender("searchCustomer")
      }
      searchCust_Id.onKeyPress=($event)=>{
        if($event.keyCode == 13){
          let  cust_id = this.searchFormFields['cust_id']
          if(cust_id) {
            this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.searchFormFields['cust_dbid'] =reslut.cust_dbid;
                this.searchFormFields['cust_id'] =reslut.cust_id ;
                this.pickCustomerName=reslut.cust_name;
                return;
              }else{
                this.$message.error("Customer Id Is Not Exists.");
                return;
              }

            })
          }

        }
      }



      let group_id=this.getSearchOption("group_id");
      group_id.extra = {
        render:this.getSearchRender("searchPriceGroup")
      }
      group_id.onKeyPress=($event)=>{
        if($event.keyCode == 13){
          let  group_id = this.searchFormFields['group_id']
          if(group_id) {
            this.http.get("api/Viat_app_cust_price_group/getPriceGroupByGroupID?group_id="+group_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.searchFormFields['pricegroup_dbid'] =reslut.pricegroup_dbid;
                this.searchFormFields['group_id'] =reslut.group_id ;
                this.pickPriceGroupName=reslut.group_name;
                return;
              }else{
                this.$message.error("Group Id Is Not Exists.");
                return ;
              }

            })
          }

        }
      }


      //格式化 formatter
      let bid_date=this.getColumnsOption("bid_date");
      bid_date.formatter = (row) => {
        //对单元格的数据格式化处理
        if (!row.bid_date) {
          return;
        }
        return row.bid_date.substr(0,10);
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

      //日期格式化 formatter
      let end_date=this.getColumnsOption("end_date");
      end_date.formatter = (row) => {
        //对单元格的数据格式化处理
        if (!row.end_date) {
          return;
        }
        return row.end_date.substr(0,10);
      }

      //form表单日期校验
      let editform_end_date = this.getFormOption("end_date");

      editform_end_date.validator = (rule, val, callback) => {
        let editform_start_date_val=this.editFormFields.start_date;
        let editform_end_date_val=this.editFormFields.end_date;
        if (editform_end_date_val!='' &&editform_start_date_val!='' && new Date(editform_end_date_val)<new Date(editform_start_date_val)) {
          return '[End Data] Should be later than  [Start Date]'
        }
        return "";
      }


      this.editFormOptions.forEach(x => {
        x.forEach(item => {
          if (item.field == 'upload') {
            item.type = 'file';//可以指定上传文件类型img/file/excel
            //设置上传图片字段100%宽度
            //启用多图上传(默认单图)
            item.multiple = true;
            //禁止自动上传(默认自动上传)
            item.autoUpload=false;
            //最多可以上传3张照片
            item.maxFile = 5;
            //限制图片大小，默认3M
            item.maxSize = 3;
            //选择文件时
            item.onChange=(files)=>{
              console.log('选择文件事件')
              //此处不返回true，会中断代码执行
              return true;
            }
            //上传前
            item.uploadBefore=(files)=>{
              console.log('上传前')
              return true;
            }
            //上传后
            item.uploadAfter=(files)=>{
              console.log('上传后')
              return true;
            }
          }
        })
      })
    },
    /**
     *
     * @param fieldName綁定欄位
     * @param formType 表單類型f-form表單,s-查詢表單
     * @param pageType c-cust,pg-pricegroup
     * @returns {function(*, {row: *, column: *, index: *}): *}
     */
    getFormRender(searchType,flage) {//flage新增參數區分view與add、edit
      if(flage=="view"){//查看時修改顯示樣式
        return (h, { row, column, index }) => {
          return h("div", { class:"el-input el-input--medium el-input--suffix"}, [
            h(
                "input",
                {
                  class:"el-input__inner",
                  type:"text",
                  style:{width:"65%","background-color":"#f5f7fb"},
                  readonly:"true",
                  value:this.getPickName(searchType)
                }
            ),
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
      }else{
        return (h, { row, column, index }) => {
          return h("div", { class:"el-input el-input--medium el-input--suffix"}, [
            h(
                "input",
                {
                  class:"el-input__inner",
                  type:"text",
                  style:{width:"65%","background-color":"#f5f7fb"},
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
                    if(searchType=="editFormSearchCustomer"){
                      this.$refs.gridFooter.openModel(true,searchType);
                    }
                    if(searchType=="editFormSearchPriceGroup"){
                      this.$refs.gridBody.openModel(true,searchType);
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
                    if(searchType=="editFormSearchCustomer"){
                      this.editFormFields['cust_dbid'] = "";
                      this.editFormFields['cust_id'] = "";
                      this.pickEditFormCustomerName="";
                    }
                    if(searchType=="editFormSearchPriceGroup"){
                      this.editFormFields['pricegroup_dbid'] = "";
                      this.editFormFields['group_id'] = "";
                      this.pickEditFormPriceGroupName="";
                    }
                  }
                },
                [h("i",{class:"el-icon-zoom-out"})],
                "Clean"
            ),

          ]);
        };
      }

    },

    /**
     *
     * @param fieldName綁定欄位
     * @param formType 表單類型f-form表單,s-查詢表單
     * @param pageType c-cust,pg-pricegroup
     * @returns {function(*, {row: *, column: *, index: *}): *}
     */

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
                }
              },
              [h("i",{class:"el-icon-zoom-out"})],
              "Clean"
          ),

        ]);
      };
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
        this.initCustomerGroup(rows[0].cust_dbid);
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
    getPickName(searchType){
      if(searchType=="searchCustomer"){
        return this.pickCustomerName
      }else if(searchType=="searchPriceGroup"){
        return this.pickPriceGroupName
      }else if(searchType=="editFormSearchCustomer"){
        return this.pickEditFormCustomerName
      }else if(searchType=="editFormSearchPriceGroup"){
        return this.pickEditFormPriceGroupName
      }

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
    getFormOption (field) {
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
    },
    searchBefore(param) {
      //界面查询前,可以给param.wheres添加查询参数
      //返回false，则不会执行查询
      let userInfo = this.$store.getters.getUserInfo();
      let userId = userInfo.userId;
      param.wheres.push({ name: "created_user", value: userId});

      return true;
    },
    searchAfter(result) {
      //查询后，result返回的查询数据,可以在显示到表格前处理表格的值
      return true;
    },
    addBefore(formData) {
      //编辑保存前formData为对象，包括明细表、删除行的Id
      //選擇客戶List table1
      this.editFormFields.contstret_dbid = this.$refs.modelBody.contstret_dbid;
      let priceTableRowData="";
      let isRepeat = false;
      if(this.editFormFields.apply_type=='03'){
        //重複判斷  保存时判断prod是否重复
        priceTableRowData= this.$refs.modelBody.getPriceTableRowData();
        for(let i=0;i<priceTableRowData.length;i++){
          for(let j=0;j<priceTableRowData.length;j++){
            if(i!=j && priceTableRowData[i].prod_id==priceTableRowData[j].prod_id){
              this.$message.error("The selected product is duplicate, please reselect.");
              isRepeat = true;
              break;
            }
          }
          if(isRepeat) break;
        }
        if(isRepeat) return false;

      /*  priceTableRowData.forEach((item, index) => {
          priceTableRowData.forEach((item1,index1)=>{
            debugger
            if(index!=index1 && item.prod_id==item1.prod_id){
              this.$message.error("Product Price is already exist in draft.");
              return false;
            }

          })
        })*/
      }

      let orderTableRowData = this.$refs.modelBody.getOrderTableRowData();
      if(this.editFormFields.apply_type=='03' && priceTableRowData.length==0){
        this.$Message.error("Please Input Bid Pirce List ")
        return  false;
      }else if(this.editFormFields.apply_type=='04' && orderTableRowData.length==0){
        this.$Message.error("Please Input Bid Order List ")
        return  false;
      }
      if(!this.checkOrlderList(orderTableRowData)){
        return false
      }

      let detailData = [
        {
          key: "priceTableRowData",
          value: priceTableRowData,
        },
        {
          key: "orderTableRowData",
          value: orderTableRowData,
        }
      ]
      formData.detailData = detailData;

      //新建保存前formData为对象，包括明细表，可以给给表单设置值，自己输出看formData的值
      return true;
    },
    checkOrlderList(orderTableRowData){
      if(orderTableRowData.length>0){
        let messageInfo=""
        orderTableRowData.forEach(x => {
          if(x.qty=="" ||x.qty<1){
            messageInfo="Prodcut Id:["+x.prod_id +"] Min Qty mast>0";
            return false;
          }
        })
        if(messageInfo){
          this.$Message.error(messageInfo);
          return false;
        }
      return true;
      }
      return true;
    },
    updateBefore(formData) {
      let priceTableRowData="";
      if(this.editFormFields.apply_type=='03'){
        priceTableRowData= this.$refs.modelBody.getPriceTableRowData();
      }
      let orderTableRowData = this.$refs.modelBody.getOrderTableRowData();

      if(this.editFormFields.apply_type=='03' && priceTableRowData.length==0){
        this.$Message.error("Please Input Bid Pirce List ")
        return  false;
      }else if(this.editFormFields.apply_type=='04' && orderTableRowData.length==0){
        this.$Message.error("Please Input Bid Order List ")
        return  false;
      }
      if(!this.checkOrlderList(orderTableRowData)){
        return false
      }
      //删除数据回传
      let delPriceTableRowData = this.$refs.modelBody.delPriceTableRowData;

      //table2數據回填到 formData
      let delOrderTableRowData = this.$refs.modelBody.delOrderTableRowData;

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
          key: "delPriceTableRowData",
          value: delPriceTableRowData,
        },
        {
          key: "delOrderTableRowData",
          value: delOrderTableRowData,
        }
      ]
      formData.detailData = detailData;
      return true
    },
    rowClick({ row, column, event }) {
      //查询界面点击行事件
       this.$refs.table.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
    },

    //是否可編輯校驗
    async modelOpenBeforeAsync(row) {
      if (this.currentAction==this.const.EDIT){
        if(row.status!='00' && row.status!='02'){
          this.$Message.error(" This row data can not edit.");
          return false;
        }
      }
      return true;
    },

    //是否可刪除校驗
    delBefore(ids, rows) { //查询界面的表删除前 ids为删除的id数组,rows删除的行
      let status = rows.some(x => { return x.status !='00' });
      if (status) {
        this.$message.error('Only delete Draft Data')
        return false;
      }
      //this.$message.success('删除前，选择的Id:' + ids.join(','));
      return true;
    },

    //提交審批
    doSubmit(){
      let rows = this.$refs.table.getSelected();
      if (!rows || rows.length == 0) return this.$error('Please select the row to submit!');
      let delKeys = rows.map((x) => {
        return x[this.table.key];
      });
      if (!delKeys || delKeys.length == 0)
        return this.$error('None Need Submit Data!');
      let status = rows.some(x => { return (x.status !='00' && x.status !='02')});
      if (status) {
        this.$message.error('Only Submit Draft Or RollBack Data')
        return false;
      }
      let tigger = false;
      this.$confirm('Are you sure you want to Submit the selected data?', 'Warn', {
        confirmButtonText: 'confirm',
        cancelButtonText: 'Cancel',
        type: 'warning',
        center: true
      }).then(() => {
        if (tigger) return;
        tigger = true;
        let url = "api/View_wk_bid_price_apply_main/Submit";
        this.http.post(url, rows, 'Submit data....').then((x) => {
          if (!x.status) return this.$Message.error(x.message);
          this.$Message.success("Submit Success");
          this.refresh();
        });
      });

      return true;
    },

    //save and Submit
    saveSubmit(){
      this.$refs.form.validate((result) => {
        if (result) {
          this.saveSubmitExecute();
        }
      });

    },
    saveSubmitExecute(){
        let formData = {
          mainData: this.editFormFields,
          detailData: null,
          delKeys: null
        };
        if (this.currentAction==this.const.ADD){
          if(!this.addBefore(formData)){
            return false
          }
        }else{
          if(!this.updateBefore(formData)){
            return false;
          }
        }

        let url = "api/View_wk_bid_price_apply_main/addSubmit";
        let _currentIsAdd = this.currentAction == this.const.ADD;
        this.http.post(url, formData, true).then((x) => {
          //保存后
          if (_currentIsAdd) {
            if (!this.addAfter(x)) return;
            //连续添加
            if (this.continueAdd && x.status) {
              this.$Message.success(x.message?x.message:"Saved successfully!");
              //新建
              this.currentAction = this.const.ADD;
              this.currentRow = {};
              this.resetAdd();
              this.refresh();
              return;
            }
          } else {
            if (!this.updateAfter(x)) return;
          }
          if (!x.status) return this.$error(x.message);
          this.$Message.success(x.message?x.message:"Saved successfully!");
          //如果保存成功后需要关闭编辑框，直接返回不处理后面
          if (this.boxOptions.saveClose) {
            this.boxModel = false;
            //2020.12.27如果是编辑保存后不重置分页页数，刷新页面时还是显示当前页的数据
            this.$refs.table.load(null, _currentIsAdd);
            //this.refresh();
            return;
          }
          let resultRow;
          if (typeof x.data == 'string' && x.data != '') {
            resultRow = JSON.parse(x.data);
          } else {
            resultRow = x.data;
          }

          if (this.currentAction == this.const.ADD) {
            //  this.currentRow=x.data;
            this.editFormFields[this.table.key] = '';
            this.currentAction = this.const.EDIT;
            this.currentRow = resultRow.data;
          }
          this.resetEditForm(resultRow.data);
          // console.log(resultRow);
          if (this.hasDetail) {
            this.detailOptions.delKeys = [];
            if (resultRow.list) {
              this.$refs.detail.rowData.push(...resultRow.list);
            }
          }
          this.$refs.table.load(null, _currentIsAdd);
          // this.refresh();
        });



    },


    doRollBack(){
      let rows = this.$refs.table.getSelected();

      if (!rows || rows.length == 0) return this.$error('Please select the row to RollBack!');
      let delKeys = rows.map((x) => {
        return x[this.table.key];
      });
      if (!delKeys || delKeys.length == 0)
        return this.$error('None Need RollBack Data!');
      let status = rows.some(x => { return (x.status !='01')});
      if (status) {
        this.$message.error('Only RollBack Approving Data')
        return false;
      }

      let tigger = false;
      this.$confirm('Are you sure you want to RollBack the selected data?', 'Warn', {
        confirmButtonText: 'confirm',
        cancelButtonText: 'Cancel',
        type: 'warning',
        center: true
      }).then(() => {
        if (tigger) return;
        tigger = true;
        let url = "api/View_wk_bid_price_apply_main/doRollBack";
        this.http.post(url, delKeys, 'RollBack data....').then((x) => {
          if (!x.status) return this.$Message.error(x.message);
          this.$Message.success("RollBack Success");
          this.refresh();
        });
      });
      return true;
    },

    initCustomerGroup(cust_dbid){
      //切換客戶時先清空並隱藏
      this.getFormOption("cust_exists_group_id").hidden=true;
      this.getFormOption("cust_exists_group_name").hidden=true;
      this.editFormFields.cust_exists_group_id = "";
      this.editFormFields.cust_exists_group_name = "";
      let url = "api/Viat_app_cust_group/getCustGroupIDAndANmeByCustDBID?cust_dbid="+cust_dbid;
      this.http.get(url, {}, 'Get data....').then((x) => {
        if (!x) return ;
        this.editFormFields.cust_exists_group_id=x.group_id;
        this.editFormFields.cust_exists_group_name=x.group_name;
        this.getFormOption("cust_exists_group_id").hidden=false;
        this.getFormOption("cust_exists_group_name").hidden=false;
      });
    },
    //格式化日期时间
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

    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)
      var editform_cust_id = this.getFormOption("cust_id");
      var editform_group_id = this.getFormOption("group_id");
      if(this.currentAction=="view"){//查看時調整顯示樣式
        editform_cust_id.extra = {
          render:this.getFormRender("editFormSearchCustomer","view")
        }
        editform_group_id.extra={
          render:this.getFormRender("editFormSearchPriceGroup","view")
        }
      }else{
        editform_cust_id.extra = {
          render:this.getFormRender("editFormSearchCustomer","")
        }
        editform_group_id.extra={
          render:this.getFormRender("editFormSearchPriceGroup","")
        }
      }
      this.getFormOption("territory_id").data=[];
      let userInfo = this.$store.getters.getUserInfo();
      let territoryId = userInfo.territoryId;
      let deputys = [];
      let deputy = {};
      let url = "api/View_wk_bid_price_apply_main/SysUserData";
      this.http.post(url, {}, true).then((result) => {
        let professionType = result.profession_type;
        let deputyZone = result.deputy_zone;
        let org_id = result.deputy_zone_sa;
        if(org_id!="" && org_id!=null) {//解析deputy_zone_sa，作为模糊查询的条件
          org_id = org_id.replace("TT","").replace("T","");
        }
        if(professionType=='FF'){//为FF时取deputy_zone字段为选项
          this.getFormOption("territory_id").required=true;
          this.getFormOption("territory_id").hidden=false;
          if(deputyZone!=""){
            ///解析deputy_zone作为选项
            deputy = deputyZone.split(",")
            for(let i=0;i<deputy.length;i++){
              deputys.push({
                key:deputy[i],
                value:deputy[i]
              })
            }
          }
          //将自身的territoryId添加到选项中
          deputys.push({ key:territoryId,value:territoryId})
        }else if(professionType=='SA'){//为SA时取deputy_zone_sa字段为选项
          this.getFormOption("territory_id").required=true;
          this.getFormOption("territory_id").hidden=false;
          //查询org_id下的所有子项
          this.http.get("api/View_wk_bid_price_apply_main/LevelDetailData?org_id="+org_id).then((result) => {
            result.forEach(x =>{
              deputys.push({
                key:x.org_Id,
                value:x.org_Id
              })
            })
          })
          deputys.push({ key:territoryId,value:territoryId})
        }
        else{
          this.getFormOption("territory_id").hidden=true;
          this.getFormOption("territory_id").required=false;
        }

        this.getFormOption("territory_id").data = deputys;

      });

      var editform_cust_id = this.getFormOption("cust_id");
      var editform_group_id = this.getFormOption("group_id");
      this.editFormFields.cust_id= this.editFormFields.cust_id;
      this.editFormFields.group_id= this.editFormFields.group_id;
      this.pickEditFormCustomerName=this.editFormFields.cust_name;
      this.pickEditFormPriceGroupName=this.editFormFields.group_name;
      var isgroup  = this.editFormFields.isgroup;
      if(isgroup=='0'){
        editform_cust_id.hidden=false;
        editform_cust_id.required = true
        editform_group_id.hidden = true;
        editform_group_id.required = false
      }else if(isgroup=='1'){
        editform_cust_id.hidden=true;
        editform_cust_id.required = false
        editform_group_id.hidden = false;
        editform_group_id.required = true
      }else{
        editform_cust_id.hidden=true;
        editform_group_id.hidden = true;
      }


      //编辑表单，动态设置下拉框选项禁用状态或者隐藏显示
      this.editFormOptions.forEach((options) => {
        options.forEach((item) => {
          if (item.field == 'apply_type') {
            item.data.forEach((kv) => {
              //根据字典的值判断
              if (kv.key == '01' ||kv.key == '02') {
                // kv.disabled = true; //设置选项禁用
                 kv.hidden = true; //设置选项隐藏
              }
            });
          }
        });
      });
      this.getFormOption("cust_exists_group_id").hidden=true;
      this.getFormOption("cust_exists_group_name").hidden=true;
      this.boxButtons.forEach(x => {
        if (x.value == "Save&Submit") {
          x.hidden=false
        }
      })
      if (this.currentAction =='Add'){
        this.editFormFields.apply_type='03'
        this.editFormFields.isgroup = "0";
        this.getFormOption("cust_id").hidden=false;
        this.getFormOption("cust_id").required=true;
        this.getFormOption("cust_id").disabled=false;
        this.getFormOption("start_date").disabled=false;
        this.getFormOption("end_date").disabled=false;
        this.getFormOption("remarks").disabled=false;
        this.getFormOption("apply_type").disabled=false
        this.getFormOption("isgroup").disabled=false;
        this.getFormOption("upload").hidden=false;
        this.getFormOption("territory_id").disabled=false;
        //this.getFormOption("cust_id").disabled=false;
        let dateStrs=this.parseTime(new Date(),'{y}-{m}-{d}')
        this.editFormFields.bid_date=dateStrs;
        this.editFormFields.end_date='2099-12-31';
      }else if (this.currentAction =='update'){
        this.getFormOption("apply_type").disabled=true;
        this.getFormOption("cust_id").disabled=true;
        this.getFormOption("group_id").disabled=true;
        this.getFormOption("isgroup").disabled=true;
        this.getFormOption("start_date").disabled=false;
        this.getFormOption("end_date").disabled=false;
        this.getFormOption("remarks").disabled=false;
        this.getFormOption("upload").hidden=false;
        this.getFormOption("territory_id").disabled=false;
      }else if(this.currentAction =='view'){
        this.boxButtons.forEach(x => {
          if (x.value == "Save&Submit") {
            x.hidden=true
          }
        })
      }
      //初使化 Customer In Group Info
      let cust_dbid = this.editFormFields.cust_dbid;
      if(cust_dbid){
        this.initCustomerGroup(cust_dbid);
      }
      let apply_type = this.editFormFields.apply_type;
      if(apply_type=='03'){
        this.getFormOption("start_date").hidden=false;
        this.getFormOption("end_date").hidden=false;
        this.getFormOption("start_date").required=true;
        this.getFormOption("end_date").required=true;
      }else if(apply_type=='04'){
        this.getFormOption("start_date").hidden=true;
        this.getFormOption("end_date").hidden=true;
        this.getFormOption("start_date").required=false;
        this.getFormOption("end_date").required=false;
        this.editFormFields.isgroup = "0";
        this.getFormOption("isgroup").disabled=true;
        this.getFormOption("cust_id").hidden=false;
      }



      //選控制 DIV，渲染完成再控制欄位

      this.$nextTick(
          ()=>{
            this.$refs.modelBody.openModel();
          /*  if(this.currentAction =='view'){
              this.$refs.modelBody.showButton = false;
            }else{
              this.$refs.modelBody.showButton = true;
            }
            if (this.currentAction == "Add") {
              this.$refs.modelBody.clearTableDetail();
            } else {
              this.$refs.modelBody.$refs.orderTable.load();
              if(apply_type=='03'){
                this.$refs.modelBody.$refs.priceTable.load();
              }

            }

            if(this.currentAction =='view'){
              this.showButton = false;
            }else{
              this.showButton = true;
            }
*/

          });
    }
  }
};
export default extension;
