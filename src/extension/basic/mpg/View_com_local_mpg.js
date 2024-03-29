/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import employPop from "../../system/Sys_User/sys_employ_pop.vue";

let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: employPop,
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: employPop,
    modelFooter: ''
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
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
      this.boxOptions.width=1500;
      //显示查询全部字段
      this.setFiexdSearchForm(true);
      //设置查询表单的标签文字宽度
      this.labelWidth=180;
      //表格设置为单选
      this.single=true;
      //設置初始不加載
      this.load=false;

      this.getOption("medical_reviewer_id").hidden = true;
      this.getOption("pm_id").hidden = true;
      this.getOption("ma_id").hidden = true;
      this.getSearchOption("medical_reviewer_id").hidden = true;
      this.getSearchOption("ma_id").hidden = true;
      this.getSearchOption("pm_id").hidden = true;
      this.getSearchOption("medical_reviewer_name").extra = {
        render:this.getSearchFormRender("medical_reviewer_id1","s")
      }
      this.getSearchOption("maUserName").extra = {
        render:this.getSearchFormRender("ma_id1","s")
      }
      this.getSearchOption("supervisorUserName").extra = {
        render:this.getSearchFormRender("pm_id1","s")
      }

      let medical_reviewer_name=this.getOption("medical_reviewer_name");
      medical_reviewer_name.extra = {
        render:this.getSearchFormRender("medical_reviewer_id","f")
      }
      let maUserName=this.getOption("maUserName");
      maUserName.extra = {
        render:this.getSearchFormRender("ma_id","f")
      }
      let supervisorUserName=this.getOption("supervisorUserName");
      supervisorUserName.extra = {
        render:this.getSearchFormRender("pm_id","f")
      }

    },
    getSearchFormRender(fieldName,formType) {//
      return (h, { row, column, index }) => {
        return h("div", { style: { color: '#0c83ff', 'font-size': '12px', cursor: 'pointer',"text-decoration": "none"} }, [
          h(
            "a",
            {
              props: {},
              style: { "color":"","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none"},
              onClick: (e) => {
                if(formType=='s'){
                  this.$refs.gridBody.open(fieldName,formType)
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
                if(formType=='f'){
                  if (fieldName == 'medical_reviewer_id'){
                    this.editFormFields['medical_reviewer_id'] = '';
                    this.editFormFields['medical_reviewer_name'] = '';
                  }
                  if (fieldName == 'ma_id'){
                    this.editFormFields['ma_id'] = '';
                    this.editFormFields['maUserName'] = '';
                  }
                  if (fieldName == 'pm_id'){
                    this.editFormFields['pm_id'] = '';
                    this.editFormFields['supervisorUserName'] = '';
                  }
                }else if(formType=='s'){
                  if (fieldName == 'medical_reviewer_id1'){
                    this.searchFormFields['medical_reviewer_id'] = '';
                    this.searchFormFields['medical_reviewer_name'] = '';
                  }
                  if (fieldName == 'ma_id1'){
                    this.searchFormFields['ma_id'] = '';
                    this.searchFormFields['maUserName'] = '';
                  }
                  if (fieldName == 'pm_id1'){
                    this.searchFormFields['pm_id'] = '';
                    this.searchFormFields['supervisorUserName'] = '';
                  }
                }

              }
            },
            [h("i",{class:"el-icon-zoom-out"})],
            "Clean"
          ),
        ]);
      };
    },
    //選擇員工後
    handleEmpSelected(fieldName,selectrow){
      if (fieldName === 'medical_reviewer_id'){
        this.editFormFields['medical_reviewer_id'] = selectrow[0].emp_id;
        this.editFormFields['medical_reviewer_name'] = selectrow[0].emp_ename;
      }
      if (fieldName === 'ma_id'){
        this.editFormFields['ma_id'] = selectrow[0].emp_id;
        this.editFormFields['maUserName'] = selectrow[0].emp_ename;
      }
      if (fieldName === 'pm_id'){
        this.editFormFields['pm_id'] = selectrow[0].emp_id;
        this.editFormFields['supervisorUserName'] = selectrow[0].emp_ename;
      }

      if (fieldName === 'medical_reviewer_id1'){
        this.searchFormFields['medical_reviewer_id'] = selectrow[0].emp_id;
        this.searchFormFields['medical_reviewer_name'] = selectrow[0].emp_ename;
      }
      if (fieldName === 'ma_id1'){
        this.searchFormFields['ma_id'] = selectrow[0].emp_id;
        this.searchFormFields['maUserName'] = selectrow[0].emp_ename;
      }
      if (fieldName === 'pm_id1'){
        this.searchFormFields['pm_id'] = selectrow[0].emp_id;
        this.searchFormFields['supervisorUserName'] = selectrow[0].emp_ename;
      }

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
      this.$refs.table.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
    },
    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)

      this.getOption("mpg_id").disabled=this.currentAction=='update';


    }
  }
};
export default extension;
