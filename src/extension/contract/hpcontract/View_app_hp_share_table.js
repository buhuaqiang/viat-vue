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
  data() {
    return {
      searchCustomer: "searchCustomer",
      searchProduct:"searchProduct",
      editFormSearchCustomer: "editFormSearchCustomer",
      editFormSearchProduct:"editFormSearchProduct",
    }
  },
  methods: {
     //下面这些方法可以保留也可以删除
    onActivated(){//禁用頁面緩存，每次进入页面查询数据
      let contract_no  = this.$route.query.contract_no;
      this.searchFormFields.contract_no = contract_no;
      this.search()
    },
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

      //this.searchFormFields.Summary =sumpercent;
      //this.searchFormFields.Summary = summary;
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
      let searchCust_Id=this.getSearchOption("cust_id");
      searchCust_Id.extra={
        render:this.getSearchRender("searchCustomer")
      }
      //查詢條件快捷回填
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

      let searchProd_id=this.getSearchOption("prod_id");
      searchProd_id.extra={
        render:this.getSearchRender("searchProduct")
      }
      //查詢條件快捷回填
      searchProd_id.onKeyPress=($event)=>{
          if($event.keyCode == 13){
            let  prod_id = this.searchFormFields['prod_id']
            if(prod_id) {
              this.http.get("api/Viat_com_prod/getProdByProdID?prod_id="+prod_id.replace(/\s/g,""),{} , "loading").then(reslut => {
                if(reslut !=null){
                  this.searchFormFields['prod_dbid'] =reslut.prod_dbid;
                  this.searchFormFields['prod_id'] =reslut.prod_id ;
                  this.pickProductName=reslut.prod_ename;
                  return;
                }else{
                  this.$message.error("product Id Is Not Exists.");
                  return;
                }
              })
            }
          }
      }
      //編輯選擇
      let edit_cust_id=this.getEditOption("cust_id");
      edit_cust_id.extra = {
        render:this.getSearchRender("editFormSearchCustomer")
      }
      //快捷回填
      edit_cust_id.onKeyPress=($event)=>{
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
      let edit_prod_id=this.getEditOption("prod_id");
      edit_prod_id.extra = {
        render:this.getSearchRender("editFormSearchProduct")
      }
      //快捷回填
      edit_prod_id.onKeyPress=($event)=>{
        if($event.keyCode == 13){
          let  prod_id = this.searchFormFields['prod_id']
          if(prod_id) {
            this.http.get("api/Viat_com_prod/getProdByProdID?prod_id="+prod_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.editFormFields['prod_dbid'] =reslut.prod_dbid;
                this.editFormFields['prod_id'] =reslut.prod_id ;
                this.pickEditFormProductName=reslut.prod_ename;
                return;
              }else{
                this.$message.error("product Id Is Not Exists.");
                return;
              }
            })
          }
        }
      }
    },
    //获取总比值
    getSumPercent() {
      let sum_percent = '';
      let hpcont_dbid = this.$route.query.hpcont_dbid;
      //this.http.get("api/Viat_app_hp_contract_share/GetSumPercentByHpcontDBID?hpcont_dbid="+hpcont_dbid,{} , "loading").then(reslut => {
      this.http.get("api/Viat_app_hp_contract_share/GetSumPercentByHpcontDBID?hpcont_dbid="+this.$route.query.hpcont_dbid,{} , "loading").then(reslut => {
        sum_percent = reslut.sum_percent;
        return ;
      })
      return sum_percent;
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
                  if(searchType=="searchProduct"){
                    this.$refs.gridBody.openModel(true,searchType);
                  }
                  if(searchType=="editFormSearchCustomer"){
                    this.$refs.modelFooter.openModel(true,searchType);
                  }
                  if(searchType=="editFormSearchProduct"){
                    this.$refs.modelBody.openModel(true,searchType);
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
                  }if(searchType=="searchProduct"){
                    this.searchFormFields["prod_dbid"] = "";
                    this.searchFormFields["prod_id"] = "";
                    this.pickProductName = "";
                  }
                  if(searchType=="editFormSearchCustomer"){
                    this.editFormFields["cust_dbid"] = "";
                    this.editFormFields["cust_id"] = "";
                    this.pickEditFormCustomerName = "";
                  }if(searchType=="editFormSearchProduct"){
                    this.editFormFields["prod_dbid"] = "";
                    this.editFormFields["prod_id"] = "";
                    this.pickEditFormProductName = "";
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
      }else if(searchType=="searchProduct"){
        return this.pickProductName
      }else if(searchType=="editFormSearchCustomer"){
        return this.pickEditFormCustomerName
      }else if(searchType=="editFormSearchProduct"){
        return this.pickEditFormProductName
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
    handleProdSelected(flag,rows){
      if(flag=="searchProduct"){
        //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的
        this.searchFormFields["prod_dbid"] = rows[0].prod_dbid;
        this.searchFormFields["prod_id"] =rows[0].prod_id;
        this.pickProductName=rows[0].prod_ename;
      }else{
        this.editFormFields["prod_dbid"] = rows[0].prod_dbid;
        this.editFormFields["prod_id"] =rows[0].prod_id;
        this.pickEditFormProductName=rows[0].prod_ename;
      }


    },

    searchBefore(param) {
      //界面查询前,可以给param.wheres添加查询参数
      //返回false，则不会执行查询
      param.wheres.push({ name: 'hpcont_dbid', value: this.$route.query.hpcont_dbid });
      return true;
    },
    searchAfter(result) {
      //this.getSumPercent();
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
      this.pickEditFormCustomerName=this.editFormFields.cust_name;
      this.pickEditFormProductName=this.editFormFields.prod_ename;
     // this.editFormFields.cust_dbidname = this.editFormFields.cust_id+" "+this.editFormFields.cust_name;
      //this.editFormFields.prod_dbidname = this.editFormFields.prod_id+" "+this.editFormFields.prod_ename;
    }
  }
};
export default extension;
