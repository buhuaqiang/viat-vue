/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import View_com_prod_pop_query from "../../basic/prod/View_com_prod_pop_query.vue";
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: View_com_prod_pop_query,
    gridFooter: View_com_prod_pop_query,
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: '',
    modelFooter: ''
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
  // p_id:'',
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
      this.labelWidth=180;
      //设置编辑表单标签文字宽度
      this.boxOptions.labelWidth=150;
      this.setFiexdSearchForm(true);
      //編輯product彈窗
      var editform_prod_id = this.getFormOption("prod_id");

      editform_prod_id.extra = {
        render:this.getFormRender("editFormSearchProduct")
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
                    //this.$refs.modelBody.openCustmModelBody(true,searchType)
                    debugger
                    this.$refs.gridFooter.openModel(true,searchType);
                  }
                  if(searchType=="editFormSearchProduct"){
                    debugger
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
                  if(searchType=="editFormSearchCustomer"){
                    this.editFormFields['cust_dbid'] = "";
                    this.editFormFields['cust_id'] = "";
                    this.pickEditFormCustomerName="";
                  }
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

    //选择產品product Pick 回填字段
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
      //選擇產品List table1
      // let table1RowData = this.$refs.modelBody.table1RowData;
      // //删除数据回传
      // let delTable1RowData = this.$refs.modelBody.delTable1RowData;
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
      let prodDbid = this.getFormOption('prod_dbid');
      let nhiadjustm = this.getFormOption('nhiadjustm_dbid');
      prodDbid.hidden=true;
      nhiadjustm.hidden=true;
      // input.el-input__inner=this.pickEditFormProductName;
      // prodDbid.
      let $parent;
      //获取生成页面viewgrid的对象
      this.editFormFields.nhiadjustm_dbid=this.$store.getters.data().nhiadjustm_dbid;


      // alert(id)

    }
  }
};
export default extension;
