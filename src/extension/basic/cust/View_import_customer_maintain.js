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
    modelFooter: ''
  },
  tableAction: '', //指定某张表的权限(这里填写表名,默认不用填写)
  buttons: { view: [], box: [], detail: [] }, //扩展的按钮
  methods: {
     //下面这些方法可以保留也可以删除
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
    getDetailColumns(field) {
      let row;
      this.detailOptions.columns.forEach(x => {
        if (x.field == field) {
          row = x;
        }
      })
      return row;
    },

    //根據城市名稱獲取區域列表
    async getCityZoneData(cityName,comZipId,extData){

      let data=[];
      let params= {
        "page": 1,
        "rows": 30,
        "sort": "dbid",
        "order": "desc",
        "wheres": "[]"
      }
      let url="api/Viat_com_zip_city/getPageData";
      params.wheres ="[{\"name\":\"city_name\",\"value\":\""+cityName+"\",\"displayType\":\"=\"}]" ;
      let _result = await this.http.post(url,params, true).then((result) => {
        return result;
      });
      _result.rows.forEach(d=>{
        data.push({"key":d.zip_id,"value":d.zip_id+" "+d.zip_name})
      })

      if(extData!=undefined && extData.length>0){
        extData.forEach(s=>{
          data.push(s);
        })

      }
      comZipId.data=data;
      return data;
    },
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
      // this.boxOptions.labelWidth = 150;
      this.buttons.splice(3, 0, {
        name: "Ignore",
        value: 'ignore',
        icon: 'el-icon-delete',
        type: 'warning',
        // color: '＃1E90FF',
        onClick: function () {
          // this.$Message.info("Import New NHIP");
          this.ignore();
        }
      })
      this.boxOptions.labelWidth=235;
      //显示查询全部字段
      this.setFiexdSearchForm(true);
      //设置查询表单的标签文字宽度
      this.labelWidth=180;
      //默認不查詢
      this.load=false;
      //表格设置为单选
      this.single=true;

      this.buttons.forEach(x => {
        if (x.name == "edit" || x.name == "ignore") {
          x.hidden=true
        }
      })




      let comCity=this.getOption("cust_zip_id_city_name");
      let invoiceCity=this.getOption("invoice_zip_id_city_name");
      let comZipId=this.getOption("cust_zip_id");
      let invoiceZipId=this.getOption("invoice_zip_id");

      comCity.onChange = (val, option) => {
        this.editFormFields.cust_zip_id = '';//清除原來選擇的數據
        this.getCityZoneData(val,comZipId);
      }

      invoiceCity.onChange = (val, option) => {
        this.editFormFields.invoice_zip_id = '';
        this.getCityZoneData(val,invoiceZipId);
      }

        //示例：设置修改新建、编辑弹出框字段标签的长度
        // this.boxOptions.labelWidth = 150;
    },
    ignore(){
      let _rows =  this.getSelectRows();
      if (!_rows || _rows.length ==0) {
        return this.$message.error("請至少選擇一條數據");
      }

      let ids=[];
      _rows.forEach(r=>{
        ids.push(r.custtransfer_dbid);
      })
      this.$confirm('確認要Ignore選擇的數據嗎?', '警告', {
        confirmButtonText: '確定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
            this.http.post("api/View_import_customer_maintain/ignore", ids, "Ignoreing").then(reslut => {
              this.$refs.table.load();
              this.$Message.success("Ignore success")
              return;
            })
          }
      )
    },
    onInited() {
      //框架初始化配置后
      //如果要配置明细表,在此方法操作
      //this.detailOptions.columns.forEach(column=>{ });
      this.detailOptions.buttons.forEach(but => {
        if (but.value == 'import' || but.value == 'export') {
          but.hidden = true;
        }
      })
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
      debugger
// if (this.$refs.table.getSelected()){
//
// }

      this.$refs.table.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
      let rowState = this.$refs.table.getSelected()[0].state;
      if (rowState == '0'){
        this.buttons[3].hidden =true;
        this.buttons[2].hidden =false;//edit active
      }else {
        this.buttons[2].hidden =true;
        this.buttons[3].hidden =false;
      }
      if (rowState != '2'){
        this.buttons[4].hidden =false;
      }else{
        this.buttons[4].hidden =true;
      }

    },
    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      debugger

      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)
    }
  }
};
export default extension;
