/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import  stretagyModelBody from "./Viat_wk_cont_stretagy_ModelBody";
import contractStretagyImport from "./contractStretagyImport";
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: contractStretagyImport,
    gridBody: '',
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: stretagyModelBody,
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
        // this.boxOptions.labelWidth = 150;
      //设置编辑表单标签文字宽度
      this.boxOptions.labelWidth=150;
      this.labelWidth=150;
      this.boxOptions.height=600;
      this.boxOptions.width=1500;
      //显示查询全部字段
      this.setFiexdSearchForm(true);
      this.single=true;//设置单选

      this.buttons.push({  //也可以用push或者splice方法来修改buttons数组
        name: 'Import', //按钮名称
        icon: 'el-icon-upload2', //按钮图标vue2版本见iview文档icon，vue3版本见element ui文档icon(注意不是element puls文档)
        type: 'success', //按钮样式vue2版本见iview文档button，vue3版本见element ui文档button
        value:'import',
        onClick: function () {
          this.doImport();
        }
      });
    },
    doImport(){
      this.$refs.gridHeader.openModel();
      /*let $parent;
      this.$emit("parentCall", ($this) => {
        $parent = $this;
      });*/

     /* this.cust_dbid = $parent.editFormFields.cust_dbid;
      this.cust_id = $parent.editFormFields.cust_id;
      this.edit_pricegroup_dbid = $parent.editFormFields.pricegroup_dbid;
      if(!this.cust_dbid && !this.edit_pricegroup_dbid){
        this.$Message.error("Please Select Customer Apply Option Value");
        return false;
      }
      let rows = this.$refs.priceTable.rowData;
      if(rows.length>0){
        this.$Message.error("Please Delete All Price Date,Then Do Import");
        return false;
      }else{
        this.$nextTick(
            ()=> {
              this.$refs.bidPriceDetailImport.openModel(this.cust_id,this.edit_pricegroup_dbid);
            }
        )
      }*/

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
      let table1RowData = this.$refs.modelBody.table1RowData;
      let detailData = [
        {
          key: "table1RowData",
          value: table1RowData,
        }
      ]
      formData.detailData = detailData;
      return true;
    },
    updateBefore(formData) {
      //编辑保存前formData为对象，包括明细表、删除行的Id
      let table1RowData = this.$refs.modelBody.table1RowData;
      //删除数据回传
      let delTable1RowData = this.$refs.modelBody.delTable1RowData;

      let detailData = [
        {
          key: "table1RowData",
          value: table1RowData,
        },
        {
          key: "delTable1RowData",
          value: delTable1RowData,
        }
      ]
      formData.detailData = detailData;
      return true;
    },

   /* importExcelBefore(formData) {
      //上传完成后处理
      debugger
      alert("111")
    },*/

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
        this.editFormFields.status="Y"
      }
      this.$refs.modelBody.modelOpen();

    }
  }
};
export default extension;
