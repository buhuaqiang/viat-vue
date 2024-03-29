/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import deputyPop from "./View_sys_deputy_pop.vue";
import sysPop from "./sys_user_pop.vue";
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: '',
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: sysPop,
    modelFooter: ''
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
  data() {
    return {
      deputyDate: "", //查询条件字段
      startDate:"",//输入的开始时间
      endDate:"",//輸入結束時間
      editFormSearchLoginUser: "editFormSearchLoginUser",
      editFormSearchDeputyUser: "editFormSearchDeputyUser",
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
         this.boxOptions.labelWidth = 150;
      this.single=true;//设置单选

      //显示查询全部字段
      this.setFiexdSearchForm(true);
      //選擇代理人
     /* let empcname=this.getOption("emp_ename");
      empcname.extra = {
        icon: "el-icon-zoom-out",
        text: "選擇",
        style: "color:#409eff;font-size: 12px;cursor: pointer;",
        click: item => {
          this.$refs.modelHeader.open();
        }
      }*/
      let editform_user_id=this.getOption("user_id");
      editform_user_id.extra = {
        render:this.getFormRender("editFormSearchLoginUser")
      }
      //選擇登錄人
     /* let UserTrueName=this.getOption("user_name2");
      UserTrueName.extra = {
        icon: "el-icon-zoom-out",
        text: "選擇",
        style: "color:#409eff;font-size: 12px;cursor: pointer;",
        click: item => {
          this.$refs.modelBody.open();
        }
      }*/

      let userName=this.getOption("deputy_user_id");
      userName.extra = {
        render:this.getFormRender("editFormSearchDeputyUser")
      }

      //不同查询条件下修改输入框
      /*let deputyDate=this.getDeputy("deputyDate");
      deputyDate.onChange = (val, option) => {
      //return this.$message.error(val)
        this.deputyDate = val;
       if(val==1 || val==0 ){//条件为between或者为空
         this.getDeputy("end_date").hidden=false;
       }else{
         this.getDeputy("end_date").hidden=true;
       }
      }
      let startDates=this.getDeputy("start_date");
      startDates.onChange = (val, option) => {
      this.startDate = val;
      }*/
      let startDates=this.getDeputy("start_date");
      startDates.onChange = (val, option) => {
        this.startDate = val;
      }
      let endDates=this.getDeputy("end_date");
      endDates.onChange = (val, option) => {
        this.endDate = val;
      }


    },
    onInited() {
      //框架初始化配置后
      //如果要配置明细表,在此方法操作
      //this.detailOptions.columns.forEach(column=>{ });
      this.height = this.height-60
      //单日期查询
      this.searchFormOptions.forEach(x => {
        x.forEach(item => {
          if (item.field == "start_date") {
            //设置单个日期查询
            item.range = false;
            //设置查询类型(默认为datetime)
            item.type = "datetime";
          }
          if (item.field == "end_date") {
            //设置单个日期查询
            item.range = false;
            //设置查询类型(默认为datetime)
            item.type = "datetime";
          }
        })
      })


    },


    getFormRender(searchType) {//
      return (h, { row, column, index }) => {
        return h("div", { class:"el-input el-input--medium el-input--suffix"}, [
          h(
              "input",
              {
                class:"el-input__inner",
                type:"text",
                style:{width:"65%","background-color":"#f5f7fb"},
                readonly:"true",
                value:this.getPickName(searchType)
              }
          ),
          h(
              "a",
              {
                props: {},
                style: { "color":"#409eff","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none","cursor":"pointer","font-size": "12px"},
                onClick: (e) => {
                  if(searchType=="editFormSearchLoginUser" || searchType=="editFormSearchDeputyUser"){
                    this.$refs.modelBody.openModel(true,searchType);
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
                style: { "color":"red","margin-left": "9px", "border-bottom": "1px solid", "text-decoration": "none","cursor":"pointer","font-size": "12px"},
                onClick: (e) => {
                  if(searchType=="editFormSearchLoginUser"){
                    this.editFormFields['user_id'] = "";
                    this.pickEditFormLoginUser="";
                  }
                  if(searchType=="editFormSearchDeputyUser"){
                    this.editFormFields['deputy_user_id'] = "";
                    this.pickEditFormDeputyUser="";
                  }
                }
              },
              [h("i",{class:"el-icon-zoom-out"})],
              "Clean"
          ),

        ]);
      };
    },

    //product Pick 回填字段
    handleProdSelected(flag,rows){
      if(flag=="editFormSearchLoginUser"){
        this.editFormFields['user_id'] = rows[0].User_Id;
        this.pickEditFormLoginUser=rows[0].UserName;
      }else if(flag=="editFormSearchDeputyUser"){
        this.editFormFields['deputy_user_id'] = rows[0].User_Id;
        this.pickEditFormDeputyUser=rows[0].UserName;
      }
    },

    getPickName(searchType){
      if(searchType=="editFormSearchLoginUser"){
        return this.pickEditFormLoginUser
      }else if(searchType=="editFormSearchDeputyUser"){
        return this.pickEditFormDeputyUser
      }

    },

    /**
     *
     * @param fieldName綁定欄位
     * @param formType 表單類型f-form表單,s-查詢表單
     * @returns {function(*, {row: *, column: *, index: *}): *}
     */
    /*getFormRender(fieldName,formType) {//
      return (h, { row, column, index }) => {
        return h("div", { style: { color: '#0c83ff', 'font-size': '12px', cursor: 'pointer',"text-decoration": "none"} }, [
          h(
              "a",
              {
                props: {},
                style: { "color":"","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none"},
                onClick: (e) => {
                  if(fieldName=="user_id"){
                    this.$refs.modelBody.open(fieldName,formType)
                  }
                  if(fieldName=="deputy_user_id"){
                    this.$refs.modelBody.open(fieldName,formType)
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
                  if(fieldName=="user_id"){
                    this.$refs.modelBody.clearData(fieldName,formType)
                  }
                  if(fieldName=="deputy_user_id"){
                    this.$refs.modelBody.clearData(fieldName,formType)
                  }
                  //this.$refs.modelBody.clearData(fieldName,formType);
                }
              },
              [h("i",{class:"el-icon-zoom-out"})],
              "清除"
          ),

        ]);
      };
    },*/
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
    getDeputy(field) {
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

    searchBefore(param) {
      param.wheres = [
          { name: "start_date", value: this.startDate, displayType: "thanorequal" },//>=
        { name: "end_date", value: this.endDate, displayType: "lessorequal" },//<=
        ];


      //查询前，设置查询条件
     /* if (this.deputyDate==3) {//less equal
         param.wheres = [ { name: "start_date", value: this.startDate, displayType: "LessOrequal" }];
      }
      if (this.deputyDate==4) {//greater equal
        param.wheres = [ { name: "start_date", value: this.startDate, displayType: "ThanOrEqual" }];
      }
      if (this.deputyDate==5) {//less than
        param.wheres = [ { name: "start_date", value: this.startDate, displayType: "LT" }];
      }
      if (this.deputyDate==6) {//equal to
        param.wheres = [ { name: "start_date", value: this.startDate, displayType: "Equal" }];
      }
      if (this.deputyDate==7) {//greater than
        param.wheres = [ { name: "start_date", value: this.startDate, displayType: "GT" }];
      }*/
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

      //var editform_user_id = this.getFormOption("user_id");
      //var editform_deputy_user_id = this.getFormOption("deputy_user_id");
      this.editFormFields.user_id= this.editFormFields.user_id;
      this.editFormFields.deputy_user_id= this.editFormFields.deputy_user_id;
      this.pickEditFormLoginUser=this.editFormFields.UserName1;
      this.pickEditFormDeputyUser=this.editFormFields.UserName2;


     // this.editFormFields.user_idname = this.editFormFields.UserName1+" "+this.editFormFields.UserTrueName1;
     // this.editFormFields.deputy_user_idname = this.editFormFields.UserName2+" "+this.editFormFields.UserTrueName2;

    }
  }
};
export default extension;
