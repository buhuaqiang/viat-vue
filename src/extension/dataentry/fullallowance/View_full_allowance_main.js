/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import view_full_allowance_GridBody from "./view_full_allowance_GridBody";
import view_full_allowance_ModelBody from "./view_full_allowance_ModelBody";
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: view_full_allowance_GridBody,
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: view_full_allowance_ModelBody,
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

        //示例：设置修改新建、编辑弹出框字段标签的长度
        // this.boxOptions.labelWidth = 150;
      //设置查询表单的标签文字宽度
      this.labelWidth=180;
      //this.boxOptions.height=600;
      //this.boxOptions.width=1500;
      //显示查询全部字段
      this.setFiexdSearchForm(true);
      //表格设置为单选
      this.single=true;

      //查询页面
      let search_pricegroup_dbidname=this.getSearch("pricegroup_dbidname");
      search_pricegroup_dbidname.extra = {
        render:this.getFormRender("pricegroup_dbid","s")
      }
      //查詢條件快捷回填
      search_pricegroup_dbidname.onKeyPress=($event)=>{
        if($event.keyCode == 13){
          let  group_id = this.searchFormFields['pricegroup_dbidname']
          if(group_id) {
            this.http.get("api/Viat_app_cust_price_group/getPriceGroupByGroupID?group_id="+group_id,{} , "loading").then(reslut => {
              console.log(reslut)
              this.searchFormFields['pricegroup_dbid'] =reslut.pricegroup_dbid;
              this.searchFormFields['pricegroup_dbidname'] =reslut.group_id + " " + reslut.group_name;
              return;
            })
          }
        }
      }

      let cust_dbidname=this.getSearch("cust_dbidname");
      cust_dbidname.extra = {
        render:this.getFormRender("cust_dbid","s")
      }
      //查詢條件快捷回填
      cust_dbidname.onKeyPress=($event)=>{
        if($event.keyCode == 13){
          let  cust_id = this.searchFormFields['cust_dbidname']
          if(cust_id) {
            this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id,{} , "loading").then(reslut => {
              console.log(reslut)
              this.searchFormFields['cust_dbid'] =reslut.cust_dbid;
              this.searchFormFields['cust_dbidname'] =reslut.cust_id + " " + reslut.cust_name;
              return;
            })
          }
        }
      }

      let cp_prod_dbidname=this.getSearch("cp_prod_dbidname");
      cp_prod_dbidname.extra = {
        render:this.getFormRender("cp_prod_dbid","s")
      }
      //查詢條件快捷回填
      cp_prod_dbidname.onKeyPress=($event)=>{
        if($event.keyCode == 13){
          let  prod_id = this.searchFormFields['cp_prod_dbidname']
          if(prod_id) {
            this.http.get("api/Viat_com_prod/getProdByProdID?prod_id="+prod_id,{} , "loading").then(reslut => {
              console.log(reslut)
              this.searchFormFields['cp_prod_dbid'] =reslut.prod_dbid;
              this.searchFormFields['cp_prod_dbidname'] =reslut.prod_id + " " + reslut.prod_ename;
              return;
            })
          }
        }
      }
      let cf_prod_dbidname=this.getSearch("cf_prod_dbidname");
      cf_prod_dbidname.extra = {
        render:this.getFormRender("cf_prod_dbid","s")
      }
      //查詢條件快捷回填
      cf_prod_dbidname.onKeyPress=($event)=>{
        if($event.keyCode == 13){
          let  prod_id = this.searchFormFields['cf_prod_dbidname']
          if(prod_id) {
            this.http.get("api/Viat_com_prod/getProdByProdID?prod_id="+prod_id,{} , "loading").then(reslut => {
              console.log(reslut)
              this.searchFormFields['cf_prod_dbid'] =reslut.prod_dbid;
              this.searchFormFields['cf_prod_dbidname'] =reslut.prod_id + " " + reslut.prod_ename;
              return;
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
    getColumnsOption (field) {
      let option;
      this.columns.forEach(x => {
        if (x.field == field) {
          option = x;
        }
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
                    if(fieldName=="pricegroup_dbid"){
                      this.$refs.gridBody.openPriceGroupModelBody(fieldName)
                    }
                    if(fieldName=="cust_dbid"){
                      this.$refs.gridBody.CustomersModelBody(fieldName)
                    }
                    if(fieldName=="cp_prod_dbid"){
                      this.$refs.gridBody.prodModelBody(fieldName)
                    }
                    if(fieldName=="cf_prod_dbid"){
                      this.$refs.gridBody.prodModelBody(fieldName)
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
                style: { "color":"red","margin-left": "9px", "border-bottom": "1px solid", "text-decoration": "none"},
                onClick: (e) => {
                    if(fieldName=="pricegroup_dbid"){
                      this.$refs.gridBody.clearData(fieldName,formType)
                    }
                    if(fieldName=="cust_dbid"){
                      this.$refs.gridBody.clearData(fieldName,formType)
                    }
                    if(fieldName=="cp_prod_dbid"){
                      this.$refs.gridBody.clearData(fieldName,formType)
                    }
                    if(fieldName=="cf_prod_dbid"){
                      this.$refs.gridBody.clearData(fieldName,formType)
                    }
                  }
              },
              [h("i",{class:"el-icon-zoom-out"})],
              "Clean"
          ),

        ]);
      };
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
      this.$refs.modelBody.modelOpen();
    }
  }
};
export default extension;
