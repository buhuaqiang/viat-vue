/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import PriceGroupCustList from "./PriceGroupCustList";
import sys_employ_pop from "../../system/Sys_User/sys_employ_pop";
import {h, resolveComponent} from "vue";
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: sys_employ_pop,
    gridBody: {
      render() {
        return [
          h(resolveComponent('el-alert'), {
            style: { 'margin-bottom': '12px' },
            'show-icon': true, type: 'success',
            closable: false, title: 'Note:\t1.Group 有效，Customer無效: Customer 自動脫離Group，不另增設一筆新價(健保價)\n' +
                '2.Group 無效，Customer 有效: Group Price 自動無效(end date = modified date);\n' +
                'Customer 自動脫離\n' +
                '3.Group 改回有效: Group Price 需重新申請, 先前已自動脫離之Customer，需重新Join Group\n' +
                '4.Group type僅供藥價調整分類使用，與Customer type無關'
          }, ''),
        ]
      }
    },
    gridFooter: PriceGroupCustList,
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: sys_employ_pop,
    modelFooter: ''
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
  methods: {
    getFormOption(field) {
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
      this.boxOptions.labelWidth=180;
      this.boxOptions.height=500
      //显示查询全部字段
      this.setFiexdSearchForm(true);
      //设置查询表单的标签文字宽度
      this.labelWidth=180;
      //表格设置为单选
      this.single=true;
      //設置初始不加載
      this.load=false;

      this.searchFormFields['status']='Y'
      //----------渲染 emp pick框
      let Semp_dbidname=this.getSearchOption("pricing_manager_name");
      Semp_dbidname.extra = {
        render:this.getFormRender("pricing_field_s","s")
      }

      let emp_dbidname=this.getFormOption("pricing_manager_name");
      emp_dbidname.extra = {
        render:this.getFormRender("pricing_field","f")
      }
    },
    handleEmpSelected(flag,rows){
      if(flag=='pricing_field'){
        this.editFormFields.pricing_field=rows[0].emp_dbid
        this.editFormFields.pricing_manager_name=rows[0].emp_ename
      }else if(flag=='pricing_field_s'){
        this.searchFormFields.pricing_field=rows[0].emp_dbid
        this.searchFormFields.pricing_manager_name=rows[0].emp_ename
      }
    },
    getFormRender(fieldName,formType) {//
      return (h, { row, column, index }) => {
        return h("div", { style: { color: '#0c83ff', 'font-size': '12px', cursor: 'pointer',"text-decoration": "none"} }, [
          h(
              "a",
              {
                props: {},
                style: { "color":"","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none"},
                onClick: (e) => {
                  if(formType=='s'){
                    this.$refs.gridHeader.open(fieldName,formType)
                  }else if(formType=='f'){
                    this.$refs.modelBody.open(fieldName,formType)
                  }

                }
              },
              [h("i",{class:"el-icon-zoom-in"})],
              "Select"
          ),
          h(
              "a",
              {
                props: {},
                style: { "color":"red","margin-left": "9px", "border-bottom": "1px solid", "text-decoration": "none"},
                onClick: (e) => {
                  if(fieldName=='pricing_field'){
                    this.editFormFields.pricing_field=''
                    this.editFormFields.pricing_manager_name=''
                  }else if(fieldName=='pricing_field_s'){
                    this.searchFormFields.pricing_field=''
                    this.searchFormFields.pricing_manager_name=''
                  }


                }
              },
              [h("i",{class:"el-icon-zoom-out"})],
              "Clean"
          ),

        ]);
      };
    },
    onInited() {
      this.height = this.height/2
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
      this.$refs.gridFooter.clearDATA();
      return true;
    },
    addBefore(formData) {
      //新建保存前formData为对象，包括明细表，可以给给表单设置值，自己输出看formData的值
      // delete formData.mainData.pricing_manager_name//
      let creg = /^C[0-9]{1,}$/gi;
      let nreg = /^[0-9]{1,}$/g;
      if (creg.test(formData.mainData.group_id) || nreg.test(formData.mainData.group_id)) {
        this.$message.error("Group ID first letter can’t be 'C' + 'number'");
        return false;
      }
      return true;
    },
    updateBefore(formData) {
      //编辑保存前formData为对象，包括明细表、删除行的Id

      // delete formData.mainData.pricing_manager_name
      return true;
    },
    rowClick({ row, column, event }) {
      //查询界面点击行事件
      this.$refs.table.$refs.table.toggleRowSelection(row);
      if (this.$refs.gridFooter && this.$refs.gridFooter.$refs.tableList) {
        //load方法可参照voltable组件api文档

        this.$refs.gridFooter.$refs.tableList.load({ wheres: [{"name":"group_id","value":row.group_id},{"name":"status","value":this.searchFormFields.status}] })
      }
    },
    async modelOpenBeforeAsync(row) {
      if (this.currentAction==this.const.EDIT){
        if(row.status=='N'){
          this.$Message.error(" Invalid record can’t edit.");
          return false;
        }
      }
      return true;
    },
    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)
      this.getFormOption("group_id").disabled=!(this.currentAction==this.const.ADD)
      if (this.currentAction==this.const.ADD){
        this.editFormFields.status='Y';
      }
    }
  }
};
export default extension;
