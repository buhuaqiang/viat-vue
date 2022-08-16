/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import wk_approve_main from "./wk_approve_main";
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: wk_approve_main,
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: "",
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
      this.labelWidth=180;
      this.setFiexdSearchForm(true);

      //在指定的City列后面手动增加一列
      for (let index = 0; index < this.columns.length; index++) {
        const row = this.columns[index];
        if (row.field != 'created_date') { continue; }
        //参数配置见文档VolTable组件中columns的属性
        let options = {
          field: 'oper', title: 'Operate',
          type: 'text', width: 100,
          //返回一个标签
          formatter: (row) => {
            return '<span style=" cursor: pointer;padding: 3px 7px;'+
                'border-radius:3px;background-color: #f0f9eb;color: #6fd23e;'+
                'font-size: 13px;border: 1px solid #9bea74;">Approved Logs</span>'
          },
          //触发事件,可以在此事件再打开一个弹出框等操作
          click: (row, column, event) => {
            this.$Message.info("触发事件");
          }
        };
        //在Title(标题)列后添加一行
        this.columns.splice(index + 1, 0, options)
      }

    },

    //是否可編輯校驗
    async modelOpenBeforeAsync(row) {
      if (this.currentAction==this.const.EDIT){
          this.$refs.gridBody.openModel(row.apply_type,row.bid_no);
      }
      return false;
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
    rowClick({ row, column, event }) {
      //查询界面点击行事件
      // this.$refs.table.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
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
};
export default extension;
