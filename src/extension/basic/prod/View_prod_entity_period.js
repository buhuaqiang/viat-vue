/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import View_com_prod_pop_query from "../prod/View_com_prod_pop_query.vue";
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: View_com_prod_pop_query,
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: View_com_prod_pop_query,
    modelFooter: ''
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
  data() {
    return {
      searchCustomer: "searchCustomer",
      searchPriceGroup:"searchPriceGroup",
      searchProduct: "searchProduct",
      editFormSearchCustomer: "editFormSearchCustomer",
      editFormSearchPriceGroup:"editFormSearchPriceGroup",
      editFormSearchProduct:"editFormSearchProduct",
    }
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
      this.boxOptions.labelWidth = 120;
      this.labelWidth = 120;
      this.setFiexdSearchForm(true);
      this.single=true;//设置单选

      //日期格式化 formatter
      let start_date=this.getColumnsOption("start_date");
      start_date.formatter = (row) => {
        //对单元格的数据格式化处理
        if (!row.start_date) {
          return;
        }
        return row.start_date.substr(0,10);
      }
      let end_date=this.getColumnsOption("end_date");
      end_date.formatter = (row) => {
        //对单元格的数据格式化处理
        if (!row.end_date) {
          return;
        }
        return row.end_date.substr(0,10);
      }

      //搜尋時,產品彈窗
      let search_Prod_id=this.getSearchOption('prod_id');
      let prodbid=this.getSearchOption('prod_dbid');
      prodbid.hidden = true
      search_Prod_id.extra = {
        render:this.getSearchRender("searchProduct")
      }
      //編輯時,產品彈窗
      let editform_prod_id=this.getEditOption('prod_id');
      editform_prod_id.extra = {
        render:this.getFormRender("editFormSearchProduct")
      }
      //查詢時輸入正確的customer_id 或prod_id回車時, 系統將智能回填customer和product name
      search_Prod_id=($event)=>{
        if($event.keyCode == 13){
          let  searchProdId = this.searchFormFields['prod_id']
          if(searchProdId) {
            this.http.get("api/Viat_com_prod/getProdByProdID?prod_id="+searchProdId.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.searchFormFields['prod_dbid'] =reslut.prod_dbid;
                this.searchFormFields['prod_id'] =reslut.prod_id;
                this.pickProductName = reslut.prod_ename;
                return;
              }else{
                this.$message.error("Product Id Is Not Exists.");
                return;
              }
            })
          }
        }
      }
      //編輯時輸入正確的customer_id 或prod_id回車時, 系統將智能回填customer和product name
      editform_prod_id.onKeyPress=($event)=>{
        if($event.keyCode == 13){
          let  editProd_dbidname = this.editFormFields['prod_id']
          if(editProd_dbidname) {
            this.http.get("api/Viat_com_prod/getProdByProdID?prod_id="+editProd_dbidname.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.editFormFields['prod_dbid'] =reslut.prod_dbid;
                this.editFormFields['prod_id'] =reslut.prod_id;
                this.pickEditFormProductName = reslut.prod_ename;
                return;
              }else{
                this.$message.error("Product Id Is Not Exists.");
                return ;
              }
            })
          }
        }
      }

        //示例：设置修改新建、编辑弹出框字段标签的长度
        // this.boxOptions.labelWidth = 150;
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
      }else if (searchType=='editFormSearchProduct'){
        return this.pickEditFormProductName
      }else if (searchType=='searchProduct'){
        return this.pickProductName
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
                  if(searchType=="searchProduct"){
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
                  if(searchType=="searchProduct"){
                    this.searchFormFields["prod_dbid"] = "";
                    this.searchFormFields["prod_id"] = "";
                    this.pickProductName = "";
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
    getFormRender(searchType) {//
      return (h, { row, column, index }) => {
        return h("div", { class:"el-input el-input--medium el-input--suffix"}, [
          h(
              "input",
              {
                class:"el-input__inner",
                type:"text",
                style:{width:"55%","background-color":"#f5f7fb"},
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
                  if(searchType=="editFormSearchProduct"){
                    //this.$refs.modelBody.openPriceGroupModelBody(true,searchType);
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
                  if(searchType=="editFormSearchProduct"){
                    this.editFormFields['prod_dbid'] = "";
                    this.editFormFields['prod_id'] = "";
                    this.pickEditFormProductName="";
                  }
                }
              },
              [h("i",{class:"el-icon-zoom-out"})],
              "Clean"
          ),

        ]);
      };
    },

    //product Pick 回填字段
    handleProdSelected(flag,rows){
      if(flag=="searchProduct"){
        this.searchFormFields["prod_dbid"] = rows[0].prod_dbid;
        this.searchFormFields["prod_id"] =rows[0].prod_id;
        this.pickProductName=rows[0].prod_ename;
      }else{
        this.editFormFields["prod_dbid"] = rows[0].prod_dbid;
        this.editFormFields["prod_id"] =rows[0].prod_id;
        this.pickEditFormProductName=rows[0].prod_ename;
      }
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
      debugger
      // let prodidEdit=this.getEditOption('prod_id');
      // prodidEdit.hidden=true;
      let prodenameEdit=this.getEditOption('prod_ename');
      prodenameEdit.hidden=true;
      let proddbidEdit=this.getEditOption('prod_dbid');
      proddbidEdit.hidden=true;
      this.pickEditFormProductName = this.editFormFields.prod_ename;

      let status=this.getEditOption('status');
      let empEname=this.getEditOption('emp_ename');
      let modifiedDate = this.getEditOption('modified_date');
      if(this.currentAction==this.const.ADD){
          status.hidden = true;
          empEname.hidden = true;
          modifiedDate.hidden = true;
      }else if (this.currentAction==this.const.EDIT){
          status.hidden = false;
          empEname.hidden = false;
          modifiedDate.hidden = false;
          empEname.readonly = true;
          modifiedDate.readonly = true;
      }
    }
  }
};
export default extension;
