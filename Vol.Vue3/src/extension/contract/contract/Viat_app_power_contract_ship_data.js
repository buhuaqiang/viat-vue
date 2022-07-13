/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
    import InvoiceProdList from "./InvoiceProdList";

let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: '',
    gridFooter:InvoiceProdList,
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: '',
    modelFooter: ''
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
  methods: {
    onActivated(){//禁用頁面緩存，每次进入页面查询数据
      this.table.cnName="GP合約發票-"+this.$route.query.contract_no;
      this.search()
    },
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
      //let contract_no_val  = this.$route.query.contract_no;
      //this.searchFormFields.contract_no=contract_no_val;
      //this.searchFormFields.contract_no.readonly=true;
      //表格设置为单选
      this.single=true;



    },
    onInited() {
      //框架初始化配置后
      //如果要配置明细表,在此方法操作
      //this.detailOptions.columns.forEach(column=>{ });
      this.height = this.height/2
    },
    searchBefore(param) {
      //界面查询前,可以给param.wheres添加查询参数
      //返回false，则不会执行查询   query: {"powercont_dbid":_rows[0].powercont_dbid,"contract_no":contract_no},
      let powercont_dbid  = this.$route.query.powercont_dbid;
      param.wheres.push({name:'powercont_dbid',value:powercont_dbid})
      return true;
    },
    searchAfter(rows) {
      debugger
      //查询后，result返回的查询数据,可以在显示到表格前处理表格的值
      if (rows.length) {
        // this.$nextTick(() => {
        this.$refs.gridFooter.$refs.tableList.load({ wheres: [{"name":"powercont_dbid","value":rows[0].powercont_dbid}], sort: "trans_date" })
        // })
      } else {
        //没有数据时，清空明细数据
        this.$refs.gridFooter.$refs.tableList.rowData.splice(0)
      }
      return true;
    },
    addBefore(formData) {
      //新建保存前formData为对象，包括明细表，可以给给表单设置值，自己输出看formData的值
      alert("接口查詢發票編號是否合規")
      return true;
    },
    updateBefore(formData) {
      //编辑保存前formData为对象，包括明细表、删除行的Id
      return true;
    },
    rowClick({ row, column, event }) {
      //查询界面点击行事件
      //取消其他行选中
      this.$refs.table.$refs.table.clearSelection();
      //设置选中当前行
      this.$refs.table.$refs.table.toggleRowSelection(row);
      if (this.$refs.gridFooter && this.$refs.gridFooter.$refs.tableList) {
        //load方法可参照voltable组件api文档
        this.$refs.gridFooter.$refs.tableList.load({ wheres: [{"name":"invoice_no","value":row.invoice_no},{"name":"powercont_dbid","value":row.powercont_dbid}], sort: "trans_date" })
      }
    },
    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)
      debugger
      let powercont_dbid=this.getOption("powercont_dbid");
      powercont_dbid.hidden=true;
      let powercont_dbid_val=this.$route.query.powercont_dbid;
      this.editFormFields.powercont_dbid =powercont_dbid_val;
    }
  }
};
export default extension;
