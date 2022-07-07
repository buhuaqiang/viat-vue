/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import customers from "@/extension/basic/cust/Viat_com_custModelBody"
import prodPop from "@/extension/basic/prod/View_com_prod_pop_query.vue"
import incoicePop from "./View_invoice_pop_query.vue"
let extension = {
  components: {
    //查询界面扩展组件
   // gridHeader: '',
    //gridBody: '',
    //gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: customers,
    modelBody: prodPop,
    modelFooter: incoicePop,
  },
  tableAction: "View_full_allowance_reverse", //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
  text: "",
  extra:"",
  sum1:0,
  sum2:0,
    data() {
        return {
            editFormSearchCustomer:"editFormSearchCustomer",
            editFormSearchProd:"editFormSearchProd",
            editFormSearchInvoice:"editFormSearchInvoice",
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
      //this.setFiexdSearchForm(true);
      this. singleSearch = null;
        this.boxOptions.width=1200;


        //显示查询全部字段
        this.setFiexdSearchForm(true);

        this.buttons.forEach(x => {
            if (x.name == "Inquire" || x.name =="Edit") {
                x.hidden=true
            }
        })



        this.extend.extra= {
        render:this.getSUMRender("")
      }
      this.extend.sum1=10000;
      this.extend.sum2=20000;

        //编辑页面
        let editform_cust_id=this.getFormOption("cust_id");
        editform_cust_id.extra = {
            render:this.getFormRender("editFormSearchCustomer")
        }
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
        let editform_prod_id=this.getFormOption("prod_id");
        editform_prod_id.extra = {
            render:this.getFormRender("editFormSearchProd")
        }
        editform_prod_id.onKeyPress=($event)=>{
            if($event.keyCode == 13){
                let  prod_id = this.editFormFields['prod_id']
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

        let editform_invoice_no=this.getFormOption("invoice_no");
        editform_invoice_no.extra = {
            render:this.getFormRender("editFormSearchInvoice")
        }
        /*editform_invoice_no.onKeyPress=($event)=>{
            if($event.keyCode == 13){
                let  invoice_no = this.editFormFields['invoice_no']
                let  cust_id = this.editFormFields['cust_id']
                if(invoice_no) {
                    this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id.replace(/\s/g,""),{} , "loading").then(reslut => {
                        if(reslut !=null){
                            this.editFormFields['invoice_no'] =reslut.cust_id ;
                            return;
                        }else{
                            this.$message.error("Invoice_no Id Is Not Exists.");
                            return;
                        }
                    })
                }
            }
        }*/

    },

      getSUMRender() {//
          return (h, { row, column, index }) => {
              return h("div", { class:"el-input el-input--medium el-input--suffix" }, [
                  h(
                      "span",
                      {
                          style:{width:"10%","font-weight":"bolder"},
                          innerHTML:"&nbsp;&nbsp;SUM:"
                      }
                  ),
                  h(
                      "input",
                      {
                          class:"el-input__inner",
                          type:"text",
                          style:{width:"40%"},
                          disabled:"true",
                          value:this.extend.sum1
                      }
                  ),
                  h(
                      "span",
                      {
                          style:{width:"10%","font-weight":"bolder"},
                          innerHTML:"&nbsp;&nbsp;&nbsp;&nbsp;SUM(W/T):"
                      }
                  ),
                  h(
                      "input",
                      {
                          class:"el-input__inner",
                          type:"text",
                          style:{width:"40%"},
                          disabled:"true",
                          value:this.extend.sum2
                      }
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
    getFormRender(searchType) {//
        if(searchType=="editFormSearchInvoice"){
            return (h, { row, column, index }) => {
                return h("div", { class:"el-input el-input--medium el-input--suffix"}, [
                    h(
                        "a",
                        {
                            props: {},
                            style: { "color":"#409eff","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none","cursor":"pointer","font-size": "12px"},
                            onClick: (e) => {
                                    this.$refs.modelFooter.openModel(true,searchType);
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
                                    this.editFormFields['invoice_no'] = "";
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
                                    this.$refs.modelHeader.openModel(true,searchType);
                                }
                                if(searchType=="editFormSearchProd"){
                                    //this.$refs.modelBody.openPriceGroupModelBody(true,searchType);
                                    this.$refs.modelBody.openModel(true,searchType);
                                }
                                if(searchType=="editFormSearchInvoice"){
                                    this.$refs.modelFooter.openModel(true,searchType);
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
                                if(searchType=="editFormSearchProd"){
                                    this.editFormFields['prod_dbid'] = "";
                                    this.editFormFields['prod_id'] = "";
                                    this.pickEditFormProductName="";
                                }
                                if(searchType=="editFormSearchInvoice"){
                                    this.editFormFields['invoice_no'] = "";
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
    getPickName(searchType){
        if(searchType=="editFormSearchCustomer"){
            return this.pickEditFormCustomerName
        }else if(searchType=="editFormSearchProd"){
            return this.pickEditFormProductName
        }

    },
    //选择客户Pick 回填字段
    handleCustomerSelected(flag,rows){
        this.editFormFields["cust_dbid"] = rows[0].cust_dbid;
        this.editFormFields["cust_id"] =rows[0].cust_id;
        this.pickEditFormCustomerName=rows[0].cust_name;
    },
    handleProdSelected(flag,rows){
        this.editFormFields["prod_dbid"] = rows[0].prod_dbid;
        this.editFormFields["prod_id"] =rows[0].prod_id;
        this.pickEditFormProductName=rows[0].prod_ename;
    },
    handleInvoiceSelected(flag,rows){
        this.editFormFields["invoice_no"] =rows[0].invoice_no;
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

    onInited() {
      //框架初始化配置后
      //如果要配置明细表,在此方法操作
      //this.detailOptions.columns.forEach(column=>{ });
    /*  this.boxButtons.push("Update");
      this.boxButtons.push("Add");*/
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
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)
    }
  }
};
export default extension;
