import Viat_app_power_contract_ModelBody from "./Viat_app_power_contract_ModelBody";



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
    gridBody: '',
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: Viat_app_power_contract_ModelBody,
    modelFooter: '',
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
      this.labelWidth=180;
      //设置编辑表单标签文字宽度
      this.boxOptions.labelWidth=150;      //开启固定显示查询功能，true=页面加载时查询表单也显示出来，false=点击查询时才会显示表单
      // this.boxOptions.height=10000;
      // this.boxOptions.width=10000;

      this.setFiexdSearchForm(true);

      var cust_name = this.getFormOption("cust_name");
      var group_name = this.getFormOption("group_name");
      cust_name.hidden = false;
      group_name.hidden = false;
      //获取订单类型select配置，当前订单类型select改变值时，动态设置Remark,SellNo两个字段是否显示
      var isgroup = this.getFormOption("isgroup");
      isgroup.onChange = (val) => {

        if(val=='0'){
          cust_name.hidden=false;
          group_name.hidden = true;
        }else if(val=='1'){
          cust_name.hidden=true;
          group_name.hidden = false;
        }

      }


      cust_name.extra = {
        icon: "el-icon-zoom-out",
        text: "选择",
        style: "color:red;font-size: 12px;cursor: pointer;",
        click: item => {
          this.$refs.modelBody.openCustmModelBody("cust_name");
        }
      }



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
      //選擇客戶List table1
      let table1RowData = this.$refs.modelBody.table1RowData;

      //table2數據回填到 formData
      let table2RowData = this.$refs.modelBody.table2RowData;

      //table3數據回填到 formData 贈送產品
      let table3RowData = this.$refs.modelBody.table3RowData;

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
        {
          key: "table3RowData",
          value: table3RowData,
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
      var cust_name = this.getFormOption("cust_name");
      var group_name = this.getFormOption("group_name");
      //var isgroup = this.getFormOption("isgroup").valueOf();

      var isgroup  = this.editFormFields.isgroup;
      if(isgroup=='0'){
        cust_name.hidden=false;
        group_name.hidden = true;
      }else if(isgroup=='1'){
        cust_name.hidden=true;
        group_name.hidden = false;
      }else{
        cust_name.hidden=true;
        group_name.hidden = true;
      }

      this.$refs.modelBody.modelOpen();


    }
  }
};
export default extension;
