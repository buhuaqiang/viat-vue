/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import View_com_prod_pop_query from "../prod/View_com_prod_pop_query.vue";
import Viat_com_custModelBody from "../../basic/cust/Viat_com_custModelBody";

let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: Viat_com_custModelBody,
    gridBody: View_com_prod_pop_query,
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: Viat_com_custModelBody,
    modelBody: View_com_prod_pop_query,
    modelFooter: ''
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
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

        // this.single=true;//设置单选

        //查詢時彈窗
        let proddbidname=this.getSearchOption('prod_id');
        let prodbid=this.getSearchOption('prod_dbid');
        prodbid.hidden = true

        proddbidname.extra = {
            render:this.getRender('prod_dbid')
        }
        //查詢時輸入正確的customer_id 或prod_id, 將智能回填customer和product name
        proddbidname.onKeyPress=($event)=>{
            if($event.keyCode == 13){
                let  searchProd_dbidname = this.searchFormFields['prod_id']
                if(searchProd_dbidname) {
                    this.http.get("api/Viat_com_prod/getProdByProdID?prod_id="+searchProd_dbidname.replace(/\s/g,""),{} , "loading").then(reslut => {
                        if(reslut !=null){
                            this.searchFormFields['prod_dbid'] =reslut.prod_dbid;
                            this.searchFormFields['prod_id'] =reslut.prod_id
                            this.pickProductName=reslut.prod_ename;
                            return;
                        }else{
                            this.$message.error("Product Id Is Not Exists.");
                            this.searchFormFields['prod_dbid'] ='';
                            this.searchFormFields['prod_id'] =''
                            this.pickProductName='';
                            return;
                        }

                    })
                }

            }
        }

        let custdbidname = this.getSearchOption('cust_id');
        let custdbid= this.getSearchOption('cust_dbid');
        custdbid.hidden = true

        custdbidname.extra = {
            render:this.getRender('cust_dbid')
        }

        custdbidname.onKeyPress=($event)=>{
            if($event.keyCode == 13){
                let  searchCust_dbidname = this.searchFormFields['cust_id']
                if(searchCust_dbidname) {
                    this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+searchCust_dbidname.replace(/\s/g,""),{} , "loading").then(reslut => {
                        if(reslut !=null){
                            this.searchFormFields['cust_dbid'] =reslut.cust_dbid;
                            this.searchFormFields['cust_id'] =reslut.cust_id
                            this.pickCustomerName=reslut.cust_name;
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
        //=============================================
        //編輯彈窗
        let proddbidEditname=this.getEditOption('prod_id');
        this.getEditOption('prod_dbid').hidden=true;
        proddbidEditname.extra = {
            render:this.getRender('f_prod_dbid')
        }
        let custdbidEditname = this.getEditOption('cust_id');
        this.getEditOption('cust_dbid').hidden=true;
        custdbidEditname.extra = {
            render:this.getRender('f_cust_dbid' )
        }




        //編輯時輸入正確的customer_id 或prod_id, 將智能回填customer和product name
        proddbidEditname.onKeyPress=($event)=>{
            if($event.keyCode == 13){
                let  editProd_dbidname = this.editFormFields['prod_id']
                if(editProd_dbidname) {
                    this.http.get("api/Viat_com_prod/getProdByProdID?prod_id="+editProd_dbidname.replace(/\s/g,""),{} , "loading").then(reslut => {
                        if(reslut !=null){
                            this.editFormFields['prod_dbid'] =reslut.prod_dbid;
                            this.editFormFields['prod_id'] =reslut.prod_id
                            this.pickEditFormCustomerName=reslut.prod_ename;
                            return;
                        }else{
                            this.$message.error("Product Id Is Not Exists.");
                            this.editFormFields['prod_dbid'] ='';
                            this.editFormFields['prod_id'] =''
                            this.pickEditFormCustomerName=''
                            return ;
                        }
                    })
                }

            }
        }

        custdbidEditname.onKeyPress=($event)=>{
            if($event.keyCode == 13){
                let  editCust_dbidname = this.editFormFields['cust_id']
                if(editCust_dbidname) {
                    this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+editCust_dbidname.replace(/\s/g,""),{} , "loading").then(reslut => {
                        if(reslut !=null){
                            this.editFormFields['cust_dbid'] =reslut.cust_dbid;
                            this.editFormFields['cust_id'] =reslut.cust_id
                            this.pickEditFormCustomerName=reslut.cust_name;
                            return;
                        }else{
                            this.$message.error("Customer Id Is Not Exists.");
                            this.editFormFields['cust_dbid'] ='';
                            this.editFormFields['cust_id'] =''
                            this.pickEditFormCustomerName=''
                            return;
                        }

                    })
                }

            }
        }


        //margin_value%格式化
        this.getColumnsOption("margin_value").formatter = (row) => {
            if (!row.margin_value) {
                return;
            }
            return  row.margin_value + '%';
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
        let end_date=this.getColumnsOption("end_date");
        end_date.formatter = (row) => {
            //对单元格的数据格式化处理
            if (!row.end_date) {
                return;
            }
            return row.end_date.substr(0,10);
        }
        let modified_date=this.getColumnsOption("modified_date");
        modified_date.formatter = (row) => {
            //对单元格的数据格式化处理
            if (!row.end_date) {
                return;
            }
            return row.end_date.substr(0,10);
        }

        //示例：设置修改新建、编辑弹出框字段标签的长度
        this.boxOptions.labelWidth=150;
        this.boxOptions.width=1500;
        //显示查询全部字段
        //this.setFiexdSearchForm(true);
        //默認不查詢
        this.load=false;
        //设置查询表单的标签文字宽度
        this.labelWidth=130;



        //编辑弹窗 客户和产品多选绑定弹窗
        let custs=this.getEditOption("custs");
        custs.extra = {
            icon: "el-icon-zoom-in",
            text: "Pick",
            style: "color:#409eff;font-size: 12px;cursor: pointer;",
            click: item => {
                this.$refs.modelHeader.openModel(false,"custs");
            }
        }
        let prods=this.getEditOption("prods");
        prods.extra = {
            icon: "el-icon-zoom-in",
            text: "Pick",
            style: "color:#409eff;font-size: 12px;cursor: pointer;",
            click: item => {
                this.$refs.modelBody.openModel(false,"prods");
            }
        }

    },
      //選擇prod回填字段
      handleProdSelected(flag,rows){
        debugger
          if(flag=='f_prod_dbid'){
              this.editFormFields['prod_dbid'] = rows[0].prod_dbid;
              this.editFormFields['prod_id'] = rows[0].prod_id;
              this.pickEditFormProductName=rows[0].prod_ename
          }
          if(flag=='prod_dbid'){
              this.searchFormFields['prod_dbid'] = rows[0].prod_dbid;
              this.searchFormFields['prod_id'] = rows[0].prod_id;
              this.pickProductName=rows[0].prod_ename
          }
          if(flag=='prods'){
              let selectrows = [];//将勾选值设置成数组
              rows.forEach(row=>{
                  selectrows.push({"key":row.prod_dbid,"value":row.prod_ename});
                  this.editFormFields.prods.push(row.prod_dbid)
              })
              this.getEditOption("prods").data=selectrows;
          }
      },
      //选择客户Pick 回填字段
      handleCustomerSelected(flag,rows){
          if(flag=="cust_dbid"){
              this.searchFormFields["cust_dbid"] = rows[0].cust_dbid;
              this.searchFormFields["cust_id"] =rows[0].cust_id;
              this.pickCustomerName=rows[0].cust_name;
          }else if(flag=='f_cust_dbid'){
              this.editFormFields["cust_dbid"] = rows[0].cust_dbid;
              this.editFormFields["cust_id"] =rows[0].cust_id;
              this.pickEditFormCustomerName=rows[0].cust_name;
          }else if(flag=='custs'){
              let selectrows = [];//将勾选值设置成数组
              rows.forEach(row=>{
                  selectrows.push({"key":row.cust_dbid,"value":row.cust_name});
                  this.editFormFields.custs.push(row.cust_dbid)
              })
              this.getEditOption("custs").data=selectrows;
          }

      },
        //reset不清理我們自定義的參數值
      resetSearchFormAfter() {
         this.pickCustomerName=''
          this.pickProductName=''
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
        //手动调度弹出框的高度
        //this.boxOptions.height = this.boxOptions.height- 550;
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
      getPickName(searchType){
          if(searchType=='f_prod_dbid'){
              return this.pickEditFormProductName
          }
          if(searchType=='prod_dbid'){
              return this.pickProductName
          }

          if(searchType=='f_cust_dbid'){
              return this.pickEditFormCustomerName
          }
          if(searchType=='cust_dbid'){
              return this.pickCustomerName
          }

      },
      getRender(searchType) {//
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

                              if(searchType=='f_prod_dbid'){
                                  this.$refs.modelBody.openModel(true,searchType);
                              }
                              if(searchType=='prod_dbid'){
                                  this.$refs.gridBody.openModel(true,searchType);
                              }

                              if(searchType=='f_cust_dbid'){
                                  this.$refs.modelHeader.openModel(true,searchType);
                              }
                              if(searchType=='cust_dbid'){
                                  this.$refs.gridHeader.openModel(true,searchType);
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

                              if(searchType=='f_prod_dbid'){
                                  this.editFormFields['prod_dbid'] = "";
                                  this.editFormFields['prod_id'] = "";
                                  this.pickEditFormProductName="";
                              }
                              if(searchType=='prod_dbid'){
                                  this.searchFormFields["prod_dbid"] = "";
                                  this.searchFormFields["prod_id"] = "";
                                  this.pickProductName = "";
                              }

                              if(searchType=='f_cust_dbid'){
                                  this.editFormFields['cust_dbid'] = "";
                                  this.editFormFields['cust_id'] = "";
                                  this.pickEditFormCustomerName="";
                              }
                              if(searchType=='cust_dbid'){
                                  this.searchFormFields["cust_dbid"] = "";
                                  this.searchFormFields["cust_id"] = "";
                                  this.pickCustomerName = "";
                              }

                          }
                      },
                      [h("i",{class:"el-icon-zoom-out"})],
                      "Clean"
                  ),

              ]);
          };
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
        let prodidEdit=this.getEditOption('prod_id');
        prodidEdit.hidden=true;
        let custidEdit=this.getEditOption('cust_id');
        custidEdit.hidden=true;

      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)


        //編輯彈窗
        //判断是新增还是修改
        let custs=this.getEditOption("custs");
        let prods= this.getEditOption("prods");
        custs.data=[];
        prods.data=[];

        let proddbidEditname=this.getEditOption('prod_id');
        let custdbidEditname = this.getEditOption('cust_id');
        if(this.currentAction==this.const.ADD){
            proddbidEditname.hidden = true
            custdbidEditname.hidden = true

            custs.hidden=false
            prods.hidden=false
        }else if(this.currentAction==this.const.EDIT){
            proddbidEditname.hidden = false
            custdbidEditname.hidden = false

            custs.hidden=true
            prods.hidden=true


        }



    }
  }
};
export default extension;
