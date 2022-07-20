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
      this.boxOptions.width=2000;
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

        }
      });
      this.buttons.push({  //也可以用push或者splice方法来修改buttons数组
        name: 'Back', //按钮名称
        icon: 'el-icon-back', //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
        type: 'danger', //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
        value:'back',
        onClick: function () {

        }
      });

      this.boxButtons.splice(1, 0,{
        name: 'Save and Submit',
        icon: 'el-icon-check',
        type: 'danger',
        disabled: false,
        value: 'save',
        onClick() {
          this.save();
        }
      })

      var editform_cust_id = this.getFormOption("cust_id");
      var editform_group_id = this.getFormOption("group_id");
      var isgroup = this.getFormOption("isgroup");
      isgroup.onChange = (val) => {

        if(val=='0'){
          editform_cust_id.hidden=false;
          editform_cust_id.required = true
          editform_group_id.hidden = true;
          editform_group_id.required = false
        }else if(val=='1'){
          editform_cust_id.hidden=true;
          editform_cust_id.required = false
          editform_group_id.hidden = false;
          editform_group_id.required = true
        }

      }
      editform_cust_id.extra = {
        render:this.getFormRender("editFormSearchCustomer")
      }

      editform_group_id.extra={
        render:this.getFormRender("editFormSearchPriceGroup")
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
                return;
              }else{
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
      param.wheres.push({ name: "apply_type", value: '03' });
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
      // this.$refs.table.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
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

      this.editFormFields.apply_type='03'
      this.$refs.modelBody.openModel();
    }
  }
};
export default extension;
