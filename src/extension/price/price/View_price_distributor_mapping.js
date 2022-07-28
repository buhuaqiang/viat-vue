/*****************************************************************************************
 **  Author:jxx 2022
 **  QQ:283591387
 **完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
 **常用示例见：http://v2.volcore.xyz/document/vueDev
 **后台操作见：http://v2.volcore.xyz/document/netCoreDev
 *****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import Viat_com_custModelBody from "../../basic/cust/Viat_com_custModelBody";
import ProductModelBody from "../../basic/prod/View_com_prod_pop_query.vue";
import PriceGroupModelBody from "./PriceGroupModelBody";

let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: Viat_com_custModelBody,
    gridBody: ProductModelBody,
    gridFooter: PriceGroupModelBody,
    //新建、编辑弹出框扩展组件
    modelHeader: Viat_com_custModelBody,
    modelBody: ProductModelBody,
    modelFooter: PriceGroupModelBody
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: {view: [], box: [], detail: []}, //扩展的按钮
  methods: {
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
    onInit() {  //框架初始化配置前，
      this.labelWidth = 180;
      //示例：设置修改新建、编辑弹出框字段标签的长度
      this.boxOptions.labelWidth = 180;
      this.boxOptions.width=1500;
      this.setFiexdSearchForm(true);
      this.load = false;

      var s_prod_id = this.getSearchOption("prod_id");
      var s_group_id = this.getSearchOption("group_id");
      var s_cust_id = this.getSearchOption("cust_id");
      var s_prod_ename = this.getSearchOption("prod_ename");
      var e_prod_ename = this.getEditOption("prod_ename");
      var s_group_name = this.getSearchOption("group_name");
      var e_group_name = this.getEditOption("group_name");
      var s_cust_name = this.getSearchOption("cust_name");
      var e_cust_name = this.getEditOption("cust_name");
      var e_prod_id = this.getEditOption("prod_id");
      var e_group_id = this.getEditOption("group_id");
      var e_cust_id = this.getEditOption("cust_id");
      var e_pricegroup_dbid = this.getEditOption("pricegroup_dbid");

      var e_price_channel = this.getEditOption("price_channel");
      e_price_channel.onChange = () => {
        this.editFormFields.pricegroups = [];
        this.editFormFields.custs = [];
      }

      e_pricegroup_dbid.hidden = true
      s_cust_name.hidden = true
      s_prod_id.hidden = true
      e_prod_id.hidden = true
      e_group_id.hidden = true
      e_cust_id.hidden = true
      e_prod_ename.hidden = true
      e_group_name.hidden = true
      e_cust_name.hidden = true

      this.getSearchOption("cust_id").extra = {
        render: this.getFormRender('searchCustomer', 'f', 'header')
      }
      let cust_dbid = this.getSearchOption("cust_dbid");
      cust_dbid.hidden = true

      s_prod_ename.hidden = true
      s_prod_ename.readonly;
      let prod_dbid = this.getSearchOption("prod_dbid");
      prod_dbid.hidden = true
      this.getSearchOption("prods").extra = {
        icon: "el-icon-zoom-in",
        text: "Pick",
        style: "color:#409eff;font-size: 12px;cursor: pointer;",
        click: item => {
          this.$refs.gridBody.openModel(false,"searchProduct");
        }
      }

      s_group_name.hidden = true
      s_group_name.readonly;
      let pricegroup_dbid = this.getSearchOption("pricegroup_dbid");
      pricegroup_dbid.hidden = true
      this.getSearchOption("group_id").extra = {
        render: this.getFormRender('searchPriceGroup', 'f', 'footer')
      }

      s_cust_id.onKeyPress = ($event) => {
        if ($event.keyCode === 13) {
          let cust_id = this.searchFormFields['cust_id']
          if (cust_id) {
            this.http.get("api/Viat_com_cust/getCustByCustID?cust_id=" + cust_id.replace(/\s/g, ""), {}, "loading").then(result => {
              if (result != null) {
                this.searchFormFields['cust_dbid'] = result.cust_dbid;
                this.searchFormFields['cust_id'] = result.cust_id;
                this.searchFormFields['cust_name'] = result.cust_name;
                this.pickCustomerName = result.cust_name;
              } else {
                this.$message.error("Customer Id Is Not Exists.");
              }
            })
          }
        }
      }

      s_group_id.onKeyPress = ($event) => {
        if ($event.keyCode === 13) {
          let group_id = this.searchFormFields['group_id']
          if (group_id) {
            this.http.get("api/Viat_app_cust_price_group/getPriceGroupByGroupID?group_id=" + group_id.replace(/\s/g, ""), {}, "loading").then(result => {
              if (result != null) {
                this.searchFormFields['pricegroup_dbid'] = result.pricegroup_dbid;
                this.searchFormFields['group_id'] = result.group_id;
                this.searchFormFields['group_name'] = result.group_name;
                this.pickPriceGroupName = result.group_name
              } else {
                this.$message.error("Group Id Is Not Exists.");
              }
            })
          }
        }
      }

      s_prod_id.onKeyPress = ($event) => {
        if ($event.keyCode === 13) {
          let prod_id = this.searchFormFields['prod_id']
          if (prod_id) {
            this.http.get("api/Viat_com_prod/getProdByProdID?prod_id=" + prod_id.replace(/\s/g, ""), {}, "loading").then(result => {
              if (result != null) {
                this.searchFormFields['prod_dbid'] = result.prod_dbid;
                this.searchFormFields['prod_id'] = result.prod_id;
                this.searchFormFields['prod_ename'] = result.prod_ename;
                this.pickProductName = result.prod_ename
              } else {
                this.$message.error("Product Id Is Not Exists.");
              }
            })
          }
        }
      }

      //日期格式化 formatter
      let created_date = this.getColumnsOption("created_date");
      created_date.formatter = (row) => {
        if (!row.created_date) {
          return;
        }
        return row.created_date.substr(0, 10);
      }
      let start_date = this.getColumnsOption("start_date");
      start_date.formatter = (row) => {
        if (!row.start_date) {
          return;
        }
        return row.start_date.substr(0, 10);
      }
      let end_date = this.getColumnsOption("end_date");
      end_date.formatter = (row) => {
        if (!row.end_date) {
          return;
        }
        return row.end_date.substr(0, 10);
      }
      let modified_date = this.getColumnsOption("modified_date");
      modified_date.formatter = (row) => {
        //对单元格的数据格式化处理
        if (!row.modified_date) {
          return;
        }
        return row.modified_date.substr(0, 10);
      }
    },
    /*
     *
     * @param fieldName綁定欄位
     * @param formType 表單類型f-form表單,s-查詢表單
     * @param pageType c-cust,pg-pricegroup
     * @returns {function(*, {row: *, column: *, index: *}): *}
     */
    getFormRender(searchType, formType, body) {//
      return (h, {row, column, index}) => {
        return h("div", {class: "el-input el-input--medium el-input--suffix"}, [
          h(
            "input",
            {
              class: "el-input__inner",
              type: "text",
              style: {width: "65%", "background-color": "#f5f7fb"},
              readonly: "true",
              value: this.getPickName(searchType)
            }
          ),
          h(
            "a",
            {
              props: {},
              style: {
                "color": "#409eff",
                "border-bottom": "1px solid",
                "margin-left": "9px",
                "text-decoration": "none",
                "cursor": "pointer",
                "font-size": "12px"
              },
              onClick: (e) => {
                if (formType === 'f') {
                  if (body === 'header') {
                    this.$refs.gridHeader.openModel(false, "searchCustomer", "");
                  }
                  if (body === 'body') {
                    this.$refs.gridBody.openModel(false, "searchProd", "");
                  }
                  if (body === 'footer') {
                    this.$refs.gridFooter.openModel(false, "searchPriceGroup", "");
                  }
                }
                if (formType === 's') {
                  if (body === 'header') {
                    this.$refs.gridHeader.openModel(false, "editCustomerM", "");
                  }
                  if (body === 'body') {
                    this.$refs.gridBody.openModel(false, "editProdM", "");
                  }
                  if (body === 'footer') {
                    this.$refs.gridFooter.openModel(false, "editGroupM", "");
                  }
                }
              }
            },
            [h("i", {class: "el-icon-zoom-in"})],
            "Pick"
          ),
          h(
            "a",
            {
              props: {},
              style: {
                "color": "red",
                "margin-left": "9px",
                "border-bottom": "1px solid",
                "text-decoration": "none",
                "cursor": "pointer",
                "font-size": "12px"
              },
              onClick: (e) => {
                if (formType === 'f') {
                  if (body === 'header') {
                    this.clearData("f", "header");
                  }
                  if (body === 'body') {
                    this.clearData("f", "body");
                  }
                  if (body === 'footer') {
                    this.clearData("f", "footer");
                  }
                }
                if (formType === 's') {
                  if (body === 'header') {
                    this.clearData("s", "header");
                  }
                  if (body === 'body') {
                    this.clearData("s", "body");
                  }
                  if (body === 'footer') {
                    this.clearData("s", "footer");
                  }
                }
              }
            },
            [h("i", {class: "el-icon-zoom-out"})],
            "Clean"
          ),

        ]);
      };
    },


    clearData(formType, body) {
      if (formType === 'f') {
        if (body === 'header') {
          this.searchFormFields["cust_dbid"] = "";
          this.searchFormFields["cust_id"] = "";
          this.searchFormFields["cust_name"] = "";
          this.searchFormFields["custs"] = [];
          this.pickCustomerName = ""
        }
        if (body === 'body') {
          this.searchFormFields["prod_dbid"] = "";
          this.searchFormFields["prod_id"] = "";
          this.searchFormFields["prod_ename"] = "";
          this.searchFormFields["prods"] = [];
          this.pickProductName = ""
        }
        if (body === 'footer') {
          this.searchFormFields["pricegroup_dbid"] = "";
          this.searchFormFields["group_id"] = "";
          this.searchFormFields["group_name"] = "";
          this.searchFormFields["pricegroups"] = [];
          this.pickPriceGroupName = ""
        }
      }

    },
    getPickName(searchType) {
      switch (searchType) {
        case "searchCustomer":
          return this.pickCustomerName
          break;
        case "searchPriceGroup":
          return this.pickPriceGroupName
          break;
        case "searchProduct":
          return this.pickProductName
          break;
        case "editFormSearchCustomer":
          return this.pickEditFormCustomerName
          break;
        case "editFormSearchPriceGroup":
          return this.pickEditFormPriceGroupName
          break;
        case "editFormSearchProduct":
          return this.pickEditFormProductName
          break;
        default:
          break;
      }
    },

    //选择客户Pick 回填字段
    handleCustomerSelected(flag, rows) {
      if (flag === "editCustomerM") {
        this.clearData("s", "footer");
        let selectrows = [];//将勾选值设置成数组
        rows.forEach(row => {
          selectrows.push({"key": row.cust_id, "value": row.cust_name});
          this.editFormFields.custs.push(row.cust_id)
        })
        this.editFormFields.custs.data = selectrows;
        this.editFormFields.pricegroups = [];
        this.editFormFields.price_channel = "";
      } else {
        this.searchFormFields["cust_dbid"] = rows[0].cust_dbid;
        this.searchFormFields["cust_id"] = rows[0].cust_id;
        this.searchFormFields["cust_name"] = rows[0].cust_name;
        this.pickCustomerName = rows[0].cust_name;
      }
    },
    //选择產品Pick 回填字段
    handleProdSelected(flag, rows) {
      let selectrows = [];//将勾选值设置成数组
      if (flag === "editProdM") {
        rows.forEach(row => {
          selectrows.push({"key": row.prod_id, "value": row.prod_ename});
          this.editFormFields.prods.push(row.prod_id)
        })
        this.editFormFields.prods.data = selectrows;
        this.model = false;
      } else if(flag === "searchProduct") {
        rows.forEach(row => {
          selectrows.push({"key": row.prod_dbid, "value": row.prod_ename});
          this.searchFormFields.prods.push(row.prod_dbid)
        })
        this.getSearchOption("prods").data = selectrows;
      }else {
        this.searchFormFields["prod_dbid"] = rows[0].prod_dbid;
        this.searchFormFields["prod_id"] = rows[0].prod_id;
        this.searchFormFields["prod_ename"] = rows[0].prod_ename;
        this.pickProductName = rows[0].prod_ename;
      }
    },
    //选择group pick回填字段
    handlePriceGroupSelected(flag, rows) {
      if (flag === "editGroupM") {
        this.clearData("s", "header");
        let selectrows = [];//将勾选值设置成数组
        rows.forEach(row => {
          selectrows.push({"key": row.group_id, "value": row.group_name});
          this.editFormFields.pricegroups.push(row.group_id)
        })
        this.editFormFields.pricegroups.data = selectrows;
        this.editFormFields.price_channel = "";
        this.editFormFields.custs = [];
        this.model = false;
      } else {
        this.searchFormFields["pricegroup_dbid"] = rows[0].pricegroup_dbid;
        this.searchFormFields["group_id"] = rows[0].group_id;
        this.searchFormFields["group_name"] = rows[0].group_name;
        this.pickPriceGroupName = rows[0].group_name;
      }
    },

    getSearchOption(field) {
      let option;
      this.searchFormOptions.forEach(x => {
        x.forEach(item => {
          if (item.field === field) {
            option = item;
          }
        })
      })
      return option;
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
      console.log("FORM:" + JSON.stringify(formData));
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

      let custs = this.getEditOption("custs");
      let prods = this.getEditOption("prods");
      let pricegroups = this.getEditOption("pricegroups");
      let s_prods = this.getSearchOption("prods");

      custs = []
      prods = []
      s_prods = []
      pricegroups = []
      custs.data = [];
      prods.data = [];
      s_prods.data = [];
      pricegroups.data = [];
      this.pickEditFormCustomerName = []
      this.pickEditFormProductName = []
      this.pickEditFormPriceGroupName = []
      if (this.currentAction === this.const.ADD) {
        s_prods.hidden = true
        this.getEditOption("custs").extra = {
          icon: "el-icon-zoom-in",
          text: "Pick",
          style: "color:#409eff;font-size: 12px;cursor: pointer;",
          click: item => {
            this.$refs.gridHeader.openModel(false,"editCustomerM");
          }
        }
        this.getEditOption("prods").extra = {
          icon: "el-icon-zoom-in",
          text: "Pick",
          style: "color:#409eff;font-size: 12px;cursor: pointer;",
          click: item => {
            this.$refs.gridBody.openModel(false,"editProdM");
          }
        }
        this.getEditOption("pricegroups").extra = {
          icon: "el-icon-zoom-in",
          text: "Pick",
          style: "color:#409eff;font-size: 12px;cursor: pointer;",
          click: item => {
            this.$refs.gridFooter.openModel(false,"editGroupM");
          }
        }
      } else if (this.currentAction === this.const.EDIT) {
        console.log("editFormFields:" + JSON.stringify(this.editFormFields));
        this.editFormFields.prods = []
        this.editFormFields.pricegroups = ""
        this.editFormFields.custs = ""
        if (this.editFormFields.prod_id !== ""){
          this.editFormFields.prods.push(this.editFormFields.prod_id)
        }
        if (this.editFormFields.group_id !== ""){
          this.editFormFields.pricegroups = []
          this.editFormFields.pricegroups.push(this.editFormFields.group_id)
        }
        if (this.editFormFields.cust_id !== ""){
          this.editFormFields.custs = []
          this.editFormFields.custs.push(this.editFormFields.cust_id)
        }
        this.getEditOption("custs").disabled = true;
        this.getEditOption("prods").disabled = true;
        this.getEditOption("pricegroups").disabled = true;
        this.getEditOption("custs").extra = {};
        this.getEditOption("prods").extra = {};
        this.getEditOption("pricegroups").extra = {};
      }
    }
  }
};
export default extension;
