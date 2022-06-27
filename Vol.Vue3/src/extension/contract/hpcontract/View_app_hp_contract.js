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
      //表格设置为单选
      this.single=true;

      this.price_dbid = this.getSearch("pricegroup_dbid");
      var costomer_type = this.getOption("costomer_type");
      var group_id = this.getOption("pricegroup_dbidname");
      group_id.hidden = true;
      costomer_type.onChange = (val) => {
        if(val=='0'){//選擇產品組價格
          group_id.hidden=false;
        }else if(val=='1'){//選擇產品價格
          group_id.hidden=true;
        }
      }
      //编辑页面
      let pricegroup_dbidname=this.getOption("pricegroup_dbidname");
      pricegroup_dbidname.extra = {
        render:this.getFormRender("pricegroup_dbid","f")
      }
      //查询页面
      let search_pricegroup_dbidname=this.getSearch("pricegroup_dbidname");
      search_pricegroup_dbidname.extra = {
        render:this.getFormRender("pricegroup_dbid","s")
      }
      let cust_dbidname=this.getSearch("cust_dbid2name");
      cust_dbidname.extra = {
        render:this.getFormRender("cust_dbid2","s")
      }
      let pu_prod_dbidname=this.getSearch("pu_prod_dbidname");
      pu_prod_dbidname.extra = {
        render:this.getFormRender("pu_prod_dbid","s")
      }
      let cf_prod_dbidname=this.getSearch("cf_prod_dbidname");
      cf_prod_dbidname.extra = {
        render:this.getFormRender("cf_prod_dbid","s")
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
      this.buttons.splice(2, 0, {
        name: "Edit Share Table",
        icon: 'el-icon-edit-outline',
        type: 'primary',
        onClick: function () {
          this.openEditShareTable()
        }
      })

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
     * @returns {function(*, {row: *, column: *, index: *}): *}
     */
    getFormRender(fieldName,formType) {
      return (h, { row, column, index }) => {
        return h("div", { style: { color: '#0c83ff', 'font-size': '12px', cursor: 'pointer',"text-decoration": "none"} }, [
          h(
              "a",
              {
                props: {},
                style: { "color":"","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none"},
                onClick: (e) => {
                  if(formType=="f"){
                    if(fieldName=="pricegroup_dbid"){
                      this.$refs.modelBody.openPriceGroupModelBody(fieldName)
                    }
                  }else{
                    if(fieldName=="pricegroup_dbid"){
                      this.$refs.gridBody.openPriceGroupModelBody(fieldName)
                    }
                    if(fieldName=="cust_dbid2"){
                      this.$refs.gridBody.CustomersModelBody(fieldName)
                    }
                    if(fieldName=="pu_prod_dbid"){
                      this.$refs.gridBody.prodModelBody(fieldName)
                    }
                    if(fieldName=="cf_prod_dbid"){
                      this.$refs.gridBody.prodModelBody(fieldName)
                    }
                  }

                }
              },
              [h("i",{class:"el-icon-zoom-in"})],
              "選擇"
          ),
          h(
              "a",
              {
                props: {},
                style: { "color":"red","margin-left": "9px", "border-bottom": "1px solid", "text-decoration": "none"},
                onClick: (e) => {
                  if(formType=="f"){
                    if(fieldName=="pricegroup_dbid"){
                      this.$refs.modelBody.clearData(fieldName,formType)
                    }
                  }else{
                    if(fieldName=="pricegroup_dbid"){
                      this.$refs.gridBody.clearData(fieldName,formType)
                    }
                    if(fieldName=="cust_dbid2"){
                      this.$refs.gridBody.clearData(fieldName,formType)
                    }
                    if(fieldName=="pu_prod_dbid"){
                      this.$refs.gridBody.clearData(fieldName,formType)
                    }
                    if(fieldName=="cf_prod_dbid"){
                      this.$refs.gridBody.clearData(fieldName,formType)
                    }
                  }

                }
              },
              [h("i",{class:"el-icon-zoom-out"})],
              "清除"
          ),

        ]);
      };
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
      //新建保存前formData为对象，包括明细表，可以给给表单设置值，自己输出看formData的值
      return true;
    },
    updateBefore(formData) {
      //编辑保存前formData为对象，包括明细表、删除行的Id

      //選擇客戶List table1
      let table1RowData = this.$refs.modelBody.table1RowData;

      //table3數據回填到 formData 贈送產品
      let table2RowData = this.$refs.modelBody.table2RowData;

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
      }else{
        this.getOption("contract_no").hidden=false;
        this.getOption("allw_type").disabled=true;
        this.getOption("state").disabled=false;
        this.editFormFields.pricegroup_dbidname = this.editFormFields.group_id+" "+this.editFormFields.group_name;
      }

      let pricegroup_dbidname =this.getOption("pricegroup_dbidname");
      var costomer_type  = this.editFormFields.costomer_type;
      if(costomer_type=='1'){
        pricegroup_dbidname.hidden=true
      }else if(costomer_type=='0'){
        pricegroup_dbidname.hidden=false
      }else{
        pricegroup_dbidname.hidden=true
      }

      this.$refs.modelBody.modelOpen();
    }
  }
};
export default extension;
