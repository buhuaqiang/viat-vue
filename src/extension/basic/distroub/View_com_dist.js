import Viat_com_custModelBody from "../../basic/cust/Viat_com_custModelBody";

/*****************************************************************************************
 **  Author:jxx 2022
 **  QQ:283591387
 **完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
 **常用示例见：http://v2.volcore.xyz/document/vueDev
 **后台操作见：http://v2.volcore.xyz/document/netCoreDev
 *****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码

let extension = {
    components: {
      //查询界面扩展组件
      gridHeader: '',
      gridBody: Viat_com_custModelBody,
      gridFooter: '',
      //新建、编辑弹出框扩展组件
      modelHeader: '',
      modelBody: Viat_com_custModelBody,
      modelFooter: ''
    },
    tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
    buttons: {view: [], box: [], detail: []}, //扩展的按钮
    methods: {
      onInit() {  //框架初始化配置前，
        this.labelWidth = 180;
        //示例：设置修改新建、编辑弹出框字段标签的长度
        this.boxOptions.labelWidth = 120;
        this.boxOptions.width=1500
        //this.setFiexdSearchForm(true);
        //表格设置为单选
        //this.single=true;
        this.load = false;
        this.pickCustomerName = ""
        let cust_id = this.getEditFormOption("cust_id");
        cust_id.extra = {
          render: this.getFormRender()
        }

        cust_id.onKeyPress=($event)=>{
          if($event.keyCode == 13){
            let  editCust_dbidname = this.editFormFields['cust_id']
            if(editCust_dbidname) {
              this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+editCust_dbidname.replace(/\s/g,""),{} , "loading").then(reslut => {
                if(reslut !=null){
                  this.editFormFields['cust_dbid'] =reslut.cust_dbid;
                  this.editFormFields['cust_id'] =reslut.cust_id
                  this.pickCustomerName=reslut.cust_name;
                  return;
                }else{
                  this.$message.error("Customer Id Is Not Exists.");
                  this.editFormFields['cust_dbid'] ='';
                  this.editFormFields['cust_id'] =''
                  this.pickCustomerName=''
                  return;
                }
              })
            }
          }
        }

        let cust_dbid = this.getEditFormOption("cust_dbid");
        cust_dbid.hidden = true;
        this.getEditFormOption("cust_name").hidden = true;
      },

      /**
       *
       * @param fieldName綁定欄位
       * @param formType 表單類型f-form表單,s-查詢表單
       * @param pageType c-cust,pg-pricegroup
       * @returns {function(*, {row: *, column: *, index: *}): *}
       */
      getFormRender() {//
        return (h, { row, column, index }) => {
          return h("div", { class:"el-input el-input--medium el-input--suffix"}, [
            h(
              "input",
              {
                class:"el-input__inner",
                type:"text",
                style:{width:"65%","background-color":"#f5f7fb"},
                readonly:"true",
                value:this.pickCustomerName
              }
            ),
            h(
              "a",
              {
                props: {},
                style: { "color":"#409eff","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none","cursor":"pointer","font-size": "12px"},
                onClick: (e) => {
                  this.$refs.modelBody.openModel(false, "searchCustomer", "")
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
                  this.clearData();
                }
              },
              [h("i",{class:"el-icon-zoom-out"})],
              "Clean"
            ),
          ]);
        };
      },

      handleCustomerSelected(flag, rows) {
        this.editFormFields["cust_dbid"] = rows[0].cust_dbid;
        this.editFormFields["cust_id"] = rows[0].cust_id;
        this.editFormFields["cust_name"] = rows[0].cust_name;
        this.pickCustomerName = rows[0].cust_name;
        this.model = false;
      },
      clearData() {
        this.editFormFields["cust_dbid"] = "";
        this.editFormFields["cust_id"] = "";
        this.editFormFields["cust_name"] = "";
        this.pickCustomerName = "";
      },
      //下面这些方法可以保留也可以删除
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
      getEditFormOption(field) {
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
        return true;
      },
      rowClick({row, column, event}) {
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
  }
;
export default extension;
