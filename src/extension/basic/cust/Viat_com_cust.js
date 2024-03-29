/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import Viat_com_custModelBody from "./Viat_com_custModelBody";
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: '',
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: '',
    modelBody: Viat_com_custModelBody,
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

      /*var opts;
      var option;

      var opts1;
      var option1;
      this.editFormOptions.forEach(x => {
        x.forEach(item => {
          if (item.field == "zip_id") {
           opts=x;
           option=item;
           option.title="";
          }else if (item.field == "bmp_zip_id") {
            opts1=x;
            option1=item;
            option1.title="";
          }
        })
      })

      var data2={"dataKey":"viat_city_zone","data":[],"title":"客戶郵區編號","field":"","type":"select","required":true};
      opts.unshift(data2);


      var data3={"dataKey":"viat_city","data":[],"title":"發票地址郵區編碼","field":"bmp_zip_id","type":"select","required":true};

      opts1.unshift(data3);


        let params= {
          "page": 1,
            "rows": 30,
            "sort": "dbid",
            "order": "desc",
            "wheres": "[]"
        }
        option.onChange = (val, option) => {
        data2.data=[];
        this.editFormFields.zip_id = '';//清除原來選擇的數據
        let url="api/Viat_com_zip_city/getPageData";
        params.wheres ="[{\"name\":\"city_name\",\"value\":\""+val+"\",\"displayType\":\"=\"}]" ;
        this.http.post(url,params, true).then((result) => {
          result.rows.forEach(d=>{
            data2.data.push({"key":d.zip_code,"value":d.zip_code+" "+d.zip_name})
          })
        });
      }

        option1.onChange = (val, option) => {
        data3.data=[];
        this.editFormFields.bmp_zip_id = '';
        let url="api/Viat_com_zip_city/getPageData";
        params.wheres ="[{\"name\":\"city_name\",\"value\":\""+val+"\",\"displayType\":\"=\"}]" ;
        this.http.post(url,params , true).then((result) => {
          result.rows.forEach(d=>{
            data3.data.push({"key":d.zip_code,"value":d.zip_code+" "+d.zip_name})
          })
        });
      }
*/

      let ownHospital=this.getOption("own_hospital");
      ownHospital.extra = {
        icon: "el-icon-zoom-out",
        text: "选择隸屬醫院",
        style: "color:red;font-size: 12px;cursor: pointer;",
        click: item => {
          this.$refs.modelBody.openDemo("own_hospital");
        }
      }

        let med_group=this.getOption("med_group");
        med_group.extra = {
          icon: "el-icon-zoom-out",
          text: "选择主院代碼",
          style: "color:red;font-size: 12px;cursor: pointer;",
          click: item => {
            this.$refs.modelBody.openDemo("med_group");
          }
        }

        let delv_group=this.getOption("delv_group");
        delv_group.extra = {
          icon: "el-icon-zoom-out",
          text: "選擇數據",
          style: "color:red;font-size: 12px;cursor: pointer;",
          click: item => {
            this.$refs.modelBody.openDemo("delv_group");
          }
        }
        //示例：设置修改新建、编辑弹出框字段标签的长度
        // this.boxOptions.labelWidth = 150;
    },
    dataChange(value){
      alert(value)
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
