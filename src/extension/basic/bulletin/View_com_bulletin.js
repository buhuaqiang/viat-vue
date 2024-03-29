/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import userPop from "../deputy/View_sys_deputy_pop.vue";
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: '',
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: '',
    modelFooter: userPop
  },
  userDatas:[],//储存选择的用户
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
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
      this.single=true;//设置单选
      //显示查询全部字段
      this.setFiexdSearchForm(true);
      this.boxOptions.labelWidth = 150;
      //選擇发送人
      let empcname=this.getOption("users");
      empcname.extra = {
        icon: "el-icon-zoom-out",
        text: "選擇",
        style: "color:#409eff;font-size: 12px;cursor: pointer;",
        click: item => {
          this.$refs.modelFooter.openBulletin();
        }
      }

      var users = this.getOption("users");
      var user = this.getOption("user");
      var send = this.getOption("send");
      users.hidden = true;
      user.hidden = false;
      send.onChange = (val) => {
        if(val=='0'){//勾选用户
          users.hidden=false;
          user.hidden=true;
        }else if(val=='1'){//所有用户
          users.hidden=true;
          user.hidden=false;
        }
      }

      let startDates=this.getSearch("start_date");
      startDates.onChange = (val, option) => {
        this.startDate = val;
      }
      let endDates=this.getSearch("end_date");
      endDates.onChange = (val, option) => {
        this.endDate = val;
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
      this.height = this.height-60
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

     // this.editFormFields.users = [];


      this.editFormOptions.forEach(x => {
        x.forEach(item => {
          if (item.field == 'users') {
            item.data = [];
            //測試
            /*let users = [{key:1111,value:"lable111"},{key:222,value:"lable222"}]
            item.data=users;
            this.userDatas = users*/

            //this.editFormFields.users = [item.data[0].value,item.data[1].value];
            //item=users[0].key;
          }
        })
      })


    },
    //獲取顯示欄字段
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
    searchBefore(param) {
      //界面查询前,可以给param.wheres添加查询参数
      //返回false，则不会执行查询
      param.wheres = [
        { name: "start_date", value: this.startDate, displayType: "thanorequal" },//>=
        { name: "end_date", value: this.endDate, displayType: "lessorequal" },//<=
      ];
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
      //下拉設置默認值
      //let users = this.userDatas;
      //this.editFormFields.users = [users[0].key,users[1].key];

      this.getOption("users").data=[];

      //新增時不顯示
      if(this.currentAction=='Add'){
        this.getOption("emp_ename").hidden=true;
        this.getOption("modified_date").hidden=true;
      }else{//編輯時顯示
        this.getOption("emp_ename").hidden=false;
        this.getOption("modified_date").hidden=false;
      }

    }
  }
};
export default extension;
