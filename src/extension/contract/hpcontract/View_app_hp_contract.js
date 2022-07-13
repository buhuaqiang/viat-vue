/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import viat_app_hp_contract_GridBody from "./viat_app_hp_contract_GridBody";
import Viat_app_hp_contract_ModelBody from "./Viat_app_hp_contract_ModelBody";
import PriceGroupModelBody from "@/extension/price/price/PriceGroupModelBody.vue";
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: viat_app_hp_contract_GridBody,
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: Viat_app_hp_contract_ModelBody,
    modelFooter: ''
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
  price_dbid:'',
  data() {
    return {
      searchPriceGroup:"searchPriceGroup",
      searchCustomer: "searchCustomer",
      searchPuProd: "searchPuProd",
      searchFuProd: "searchFuProd",
      editFormSearchPriceGroup:"editFormSearchPriceGroup",
      startDate:"",//输入的开始时间
      endDate:"",//輸入結束時間
    };
  },

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
      //设置查询表单的标签文字宽度
      this.labelWidth=180;
      //设置编辑表单标签文字宽度
      this.boxOptions.labelWidth=180;

      this.boxOptions.height=600;
      this.boxOptions.width=1200;
      //表格设置为单选
      this.single=true;
      //设置默认不查询
      this.load = false;

      this.price_dbid = this.getSearch("pricegroup_dbid");
      var costomer_type = this.getOption("costomer_type");
      var group_id = this.getOption("group_id");
      //group_id.hidden = true;
      costomer_type.onChange = (val) => {
        if(val=='0'){//選擇產品組價格
          group_id.hidden=false;
        }else if(val=='1'){//選擇產品價格
          group_id.hidden=true;
        }
      }
      //编辑页面
      let editform_group_id=this.getOption("group_id");
      editform_group_id.extra = {
        render:this.getFormRender("editFormSearchPriceGroup")
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
                this.$refs.modelBody.initCustomerListByGroupDbId(reslut.pricegroup_dbid);
                return;
              }else{
                this.$message.error("Group Id Is Not Exists.");
                return ;
              }

            })
          }

        }
      }

      var allw_type = this.getOption("allw_type");
      allw_type.onChange = (val) => {
          this.$refs.modelBody.changeAllw(val);
      }

      //查询页面
      let search_group_id=this.getSearch("group_id");
      search_group_id.extra = {
        render:this.getSearchRender("searchPriceGroup")
      }
      search_group_id.onKeyPress=($event)=>{
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

      let search_cust_id=this.getSearch("cust_id");
      search_cust_id.extra = {
        render:this.getSearchRender("searchCustomer")
      }
      search_cust_id.onKeyPress=($event)=>{
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

      let search_pu_prod_id=this.getSearch("pu_prod_id");
      search_pu_prod_id.extra = {
        render:this.getSearchRender("searchPuProd")
      }
      search_pu_prod_id.onKeyPress=($event)=>{
        if($event.keyCode == 13){
          let  prod_id = this.searchFormFields['pu_prod_id']
          if(prod_id) {
            this.http.get("api/Viat_com_prod/getProdByProdID?prod_id="+prod_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.searchFormFields['pu_prod_dbid'] =reslut.prod_dbid;
                this.searchFormFields['pu_prod_id'] =reslut.prod_id ;
                this.pickPuProdName=reslut.prod_ename;
                return;
              }else{
                this.$message.error("product Id Is Not Exists.");
                return;
              }
            })
          }
        }
      }
      let search_cf_prod_id=this.getSearch("cf_prod_id");
      search_cf_prod_id.extra = {
        render:this.getSearchRender("searchFuProd")
      }
      search_cf_prod_id.onKeyPress=($event)=>{
        if($event.keyCode == 13){
          let  prod_id = this.searchFormFields['cf_prod_id']
          if(prod_id) {
            this.http.get("api/Viat_com_prod/getProdByProdID?prod_id="+prod_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.searchFormFields['cf_prod_dbid'] =reslut.prod_dbid;
                this.searchFormFields['cf_prod_id'] =reslut.prod_id ;
                this.pickFuProdName=reslut.prod_ename;
                return;
              }else{
                this.$message.error("product Id Is Not Exists.");
                return;
              }
            })
          }
        }
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

      let startDates=this.getSearch("start_date");
      startDates.onChange = (val, option) => {
        this.startDate = val;
      }
      let endDates=this.getSearch("end_date");
      endDates.onChange = (val, option) => {
        this.endDate = val;
      }

    //在第二个按钮后添加一个新的按钮
      /*this.buttons.splice(2, 0, {
        name: "Edit Share Table",
        icon: 'el-icon-edit-outline',
        type: 'primary',
        onClick: function () {
          this.openEditShareTable()
        }
      })*/

    },
    onInited() {
      //框架初始化配置后
      //如果要配置明细表,在此方法操作
      //this.detailOptions.columns.forEach(column=>{ });
      //单日期查询
      this.searchFormOptions.forEach(x => {
        x.forEach(item => {
          if (item.field == "start_date") {
            //设置单个日期查询
            item.range = false;
            //设置查询类型(默认为datetime)
            item.type = "date";
          }
          if (item.field == "end_date") {
            //设置单个日期查询
            item.range = false;
            //设置查询类型(默认为datetime)
            item.type = "date";
          }
        })
      })
    },
    //打開shareTab
    openEditShareTable(){
      let url='/View_app_hp_share_table'
      //let url='/Viat_com_system_value'
      let _rows =  this.getSelectRows();
      if (!_rows || _rows.length != 1) {
        return this.$message.error("請選擇一條數據");
      }
      let contract_no=_rows[0].contract_no

      this.$tabs.open({
        text: "Share Table",
        path: url,
        query: {"hpcont_dbid":_rows[0].hpcont_dbid,"contract_no":contract_no},
      });

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
    //获取编辑页面字段
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
    //获取查询页面字段
    getSearch(field) {
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
     * @param pageType c-cust,pg-pricegroup
     * @returns {function(*, {row: *, column: *, index: *}): *}
     */
    getFormRender(searchType) {//
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
                  if(searchType=="editFormSearchPriceGroup"){
                    this.$refs.modelBody.openPriceGroupModelBody(true,searchType);
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
                    this.$refs.gridBody.CustomersModelBody(true,searchType);
                  }
                  if(searchType=="searchPriceGroup"){
                    this.$refs.gridBody.openPriceGroupModelBody(true,searchType);
                  }
                  if(searchType=="searchPuProd"){
                    this.$refs.gridBody.puProdModelBody(true,searchType);
                  }
                  if(searchType=="searchFuProd"){
                    this.$refs.gridBody.fuProdModelBody(true,searchType);
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
                  if(searchType=="searchFuProd"){
                    this.searchFormFields["cf_prod_dbid"] = "";
                    this.searchFormFields["cf_prod_id"] = "";
                    this.pickFuProdName = "";
                  }
                  if(searchType=="searchPuProd"){
                    this.searchFormFields["pu_prod_dbid"] = "";
                    this.searchFormFields["pu_prod_id"] = "";
                    this.pickPuProdName = "";
                  }
                }
              },
              [h("i",{class:"el-icon-zoom-out"})],
              "Clean"
          ),

        ]);
      };
    },


    getPickName(searchType){
      if(searchType=="searchCustomer"){
        return this.pickCustomerName
      }else if(searchType=="searchPriceGroup"){
        return this.pickPriceGroupName
      }else if(searchType=="searchPuProd"){
        return this.pickPuProdName
      }else if(searchType=="searchFuProd"){
        return this.pickFuProdName
      }else if(searchType=="editFormSearchPriceGroup"){
        return this.pickEditFormPriceGroupName
      }
    },

    searchBefore(param) {
      //界面查询前,可以给param.wheres添加查询参数
      //返回false，则不会执行查询

      if(this.startDate!=null) {
        for (var i = 0; i < param.wheres.length; i++) {
          if (param.wheres[i].name == 'start_date') {
            param.wheres[i].displayType = "thanorequal" //>=
          }
          if (param.wheres[i].name == 'end_date') {
            param.wheres[i].displayType = "lessorequal" //<=
          }
        }
      }


      return true;
    },
    searchAfter(result) {
      //查询后，result返回的查询数据,可以在显示到表格前处理表格的值
      return true;
    },
    addBefore(formData) {
      //编辑保存前formData为对象，包括明细表、删除行的Id
      //選擇客戶List table1
      let table1RowData = this.$refs.modelBody.table1RowData;

      //table2數據回填到 formData
      let table2RowData = this.$refs.modelBody.table2RowData;

      //table3數據回填到 formData 贈送產品
      let table3RowData = this.$refs.modelBody.table3RowData;

      //table4數據回填到 formData
      let table4RowData = this.$refs.modelBody.table4RowData;

      let detailData = [
        {
          key: "table1RowData",
          value: table1RowData,
        },
        {
          key: "table2RowData",
          value: table2RowData,
        },
        {
          key: "table3RowData",
          value: table3RowData,
        },
        {
          key: "table4RowData",
          value: table4RowData,
        },
      ]
      formData.detailData = detailData;

      //新建保存前formData为对象，包括明细表，可以给给表单设置值，自己输出看formData的值
      return true;
    },
   /* addAfter (result) {//新建保存后result返回的状态及表单对象
      let url='/View_app_hp_share_table'
      this.$tabs.open({
        text: "Share Table",
        path: url,
        query: {"hpcont_dbid":"30E41672-23E1-4FDF-AA89-26AE4A3E28F4","contract_no":"A-96825546"},
      });
      return true;
    },*/

    updateBefore(formData) {
      //编辑保存前formData为对象，包括明细表、删除行的Id

      //選擇客戶List table1
      let table1RowData = this.$refs.modelBody.table1RowData;

      //table2數據回填到 formData 贈送產品
      let table2RowData = this.$refs.modelBody.table2RowData;

      //table3數據回填到 formData 贈送產品
      let table3RowData = this.$refs.modelBody.table3RowData;

      //table4數據回填到 formData 贈送產品
      let table4RowData = this.$refs.modelBody.table4RowData;

      //删除数据回传
      let delTable1RowData = this.$refs.modelBody.delTable1RowData;

      //table2數據回填到 formData
      let delTable2RowData = this.$refs.modelBody.delTable2RowData;

      //table4數據回填到 formData
      let delTable4RowData = this.$refs.modelBody.delTable4RowData;

      //vue2方法,  不使用,可以直接賦值
      //this.$set(this.detailData, "table1RowData", table1RowData)
      // this.$set(this.detailData, "table1RowData", table1RowData)
      // this.$set(this.detailData, "table1RowData", table1RowData)
      let detailData = [
        {
          key: "table1RowData",
          value: table1RowData,
        },

        {
          key: "table2RowData",
          value: table2RowData,
        },
        {
          key: "table4RowData",
          value: table4RowData,
        },
        {
          key: "delTable1RowData",
          value: delTable1RowData,
        },
        {
          key: "delTable2RowData",
          value: delTable2RowData,
        },
        {
          key: "delTable4RowData",
          value: delTable4RowData,
        },
      ]

      formData.detailData = detailData;


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
      if(this.currentAction=='Add'){
        this.getOption("contract_no").hidden=true;
        this.editFormFields.state='Y';
        this.getOption("state").disabled=true;
        this.getOption("allw_type").disabled=false;
      }else{
        this.getOption("contract_no").hidden=false;
        this.getOption("allw_type").disabled=true;
        this.getOption("contract_no").disabled=true;
        this.getOption("state").disabled=false;
        //this.editFormFields.pricegroup_dbidname = this.editFormFields.group_id+" "+this.editFormFields.group_name;
      }

      var costomer_type  = this.editFormFields.costomer_type;
      var editform_group_id = this.getOption("group_id");
      if(costomer_type=='0'){
        editform_group_id.hidden=false;
      }else if(costomer_type=='1') {
        editform_group_id.hidden=true;
      }else{
        editform_group_id.hidden=true;
      }

      this.editFormFields.group_id= this.editFormFields.group_id;
      this.pickEditFormPriceGroupName=this.editFormFields.group_name;

     // let pricegroup_dbidname =this.getOption("pricegroup_dbidname");
      var costomer_type  = this.editFormFields.costomer_type;
      if(costomer_type=='1'){
        editform_group_id.hidden=true
      }else if(costomer_type=='0'){
        editform_group_id.hidden=false
      }else{
        editform_group_id.hidden=true
      }

      this.$refs.modelBody.modelOpen();
    }
  }
};
export default extension;
