
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
    modelBody: '',
    modelFooter: '',
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
  LoadPage: false,//定義參數判斷是否是第一次打開頁面
  methods: {
    onActivated(){
      if(!this.LoadPage){//打開頁面執行查詢後在從其他頁簽返回是執行此操作
        this.search();
      }

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
      //第一次打開頁面
     this.LoadPage = true;
        //示例：设置修改新建、编辑弹出框字段标签的长度
        // this.boxOptions.labelWidth = 150;
      //显示查询全部字段
      this.setFiexdSearchForm(true);
      //设置查询表单的标签文字宽度
      this.labelWidth=200;
      //设置编辑表单标签文字宽度
      this.boxOptions.labelWidth=200;

     // this.boxOptions.width=1600;
      this.single=true;//设置单选

      //設置初始不加載
      this.load=false;

      /*this.editFormOptions.forEach((option)=>{
        option.forEach((item)=>{
          if(item.title=='NHI Price'){
            item.extra={
              icon: "ios-search", //显示图标
              text: "選擇", //显示文本
              //触发事件
              click: (item) => {
                this.$refs.modelBody.open();
                //this.$refs.modelHeader.open();
              },
            }
          }
        })
      })*/

    },
    onInited() {
      this.height = this.height-180
      //框架初始化配置后
      //如果要配置明细表,在此方法操作
      //this.detailOptions.columns.forEach(column=>{ });


    },
    searchBefore(param) {
      this.LoadPage = false;//執行查詢改變值，可以使數據從其他頁簽返回時再次執行查詢
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

    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)
      debugger
      let path =this.$route.path;
      if(path!="/View_com_prod_main"){
        this.getOption("entity").disabled=true;
        this.getOption("prod_id").disabled=true;
        this.getOption("prod_sname").disabled=true;
        this.getOption("prod_ename").disabled=true;
        this.getOption("unit_stock").disabled=true;
        this.getOption("unit_sale").disabled=true;
        this.getOption("global_mpg").disabled=true;
        this.getOption("localmpg_dbid").disabled=true;
        this.getOption("nhi_id").disabled=true;
        this.getOption("pack_size").disabled=true;
        this.getOption("pack_size_pri").disabled=true;
        this.getOption("nhi_price").disabled=true;
        this.getOption("division").disabled=true;
        this.getOption("status_stock_viat").disabled=true;
      }
      if(path=="/View_com_prod_main" && this.currentAction=='Add'){
        this.getOption("prod_id").disabled=false;
      }
      if(this.currentAction=='update'){
        this.getOption("prod_id").disabled=true;
      }

    }
  }
};
export default extension;
