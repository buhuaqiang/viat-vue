/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import Viat_com_custModelBody from "@/extension/basic/cust/Viat_com_custModelBody";
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
  data() {
    return {
      editSearchHospital: "editSearchHospital",
      editSearchCust: "editSearchCust",
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
      //显示所有查询字段
      this.setFiexdSearchForm(true)
      //表格设置为单选
      this.single=true;
      //设置编辑表单标签文字宽度
      this.boxOptions.labelWidth=260;
      this.boxOptions.width=1200;




      let comCity = this.getOption("cust_city_name");
      let invoiceCity = this.getOption("invoice_city_name");
      let delivery = this.getOption("delivery_city_name");
      let comZipId = this.getOption("cust_zip_id");
      let invoiceZipId = this.getOption("invoice_zip_id");
      let deliveryZipId = this.getOption("delivery_zip_id");

      comCity.onChange = (val, option) => {
        this.editFormFields.cust_zip_id = '';//清除原來選擇的數據
        this.getCityZoneData(val, comZipId);
      }
      invoiceCity.onChange = (val, option) => {
        this.editFormFields.invoice_zip_id = '';//清除原來選擇的數據
        this.getCityZoneData(val, invoiceZipId);
      }
      delivery.onChange = (val, option) => {
        this.editFormFields.delivery_zip_id = '';//清除原來選擇的數據
        this.getCityZoneData(val, deliveryZipId);
      }
      //let editFromCust = this.getOption("cust_id");
      let custTitle = this.getOption1("Customer");
      let custCode = this.getOption1("Cust Code");
      let custName = this.getOption("cust_name");
      let applyType = this.getOption("apply_type");
      applyType.onChange = (val) => {

        if(val=='01'){
          custName.hidden=false;
          custCode.hidden=true;
          custTitle.hidden=true;
          //editFromCust.hidden = true
        }else if(val=='02'){
          custName.hidden=true;
          custCode.hidden=true;
          custTitle.hidden=false;
        }

      }



      custTitle.extra={
        render:this.getFormRender("editSearchCust")
      }
      custTitle.onKeyPress= ($event) => {
        if($event.keyCode==13){
          let  cust_id = this.editFormFields['cust_id']
          if(cust_id) {
            this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.editFormFields['cust_dbid'] =reslut.cust_dbid;
                this.editFormFields['cust_id'] =reslut.cust_id ;
                this.editFormFields['cust_name'] =reslut.cust_name ;
                this.pickEditFormCustomerName = reslut.cust_name;
                return;
              }else{
                this.$message.error("Customer Id Is Not Exists.");
                this.editFormFields['cust_id']=''
                this.pickEditFormCustomerName = ''
                return;
              }
            })
          }
        }
      }
      let ownHospital = this.getOption("own_hospital_cust_id");
      ownHospital.extra={
        render:this.getFormRender("editSearchHospital")
      }
      ownHospital.onKeyPress= ($event) => {
        if($event.keyCode==13){
          let  cust_id = this.editFormFields['own_hospital_cust_id']
          if(cust_id) {
            this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.editFormFields['own_hospital'] =reslut.cust_dbid;
                this.editFormFields['own_hospital_cust_id'] =reslut.cust_id ;
                this.pickEditFormHospital = reslut.cust_name;
                return;
              }else{
                this.$message.error("Customer Id Is Not Exists.");
                this.editFormFields['own_hospital_cust_id']=''
                this.pickEditFormHospital = ''
                return;
              }
            })
          }
        }
      }

      this.boxButtons.splice(1, 0,{
        name: 'Save and Submit',
        icon: 'el-icon-check',
        type: 'danger',
        disabled: false,
        value: 'save',
        onClick() {
          this.save();
        }
      })

      this.columns.push({
        title: '操作', width: 165, render: (h, { row, column, index }) => {
          return h(
              "div",
              { style: {} },
              [
                h(
                    "Button",
                    {
                      props: { type: "success", size: "small" },
                      style: {},
                      on: {
                        click: (e) => {
                          e.stopPropagation()
                          //弹出框编辑
                          this.linkData(row, column);
                        }
                      }
                    },
                    "審批日誌"
                )
              ]
          );
        }
      })


    },
    onInited() {
      //框架初始化配置后
      //如果要配置明细表,在此方法操作
    },
    //根據城市名稱獲取區域列表
    async getCityZoneData(cityName, comZipId, extData) {

      let data = [];
      let params = {
        "page": 1,
        "rows": 30,
        "sort": "dbid",
        "order": "desc",
        "wheres": "[]"
      }
      let url = "api/Viat_com_zip_city/getPageData";
      params.wheres = "[{\"name\":\"city_name\",\"value\":\"" + cityName + "\",\"displayType\":\"=\"}]";
      let _result = await this.http.post(url, params, true).then((result) => {
        return result;
      });
      _result.rows.forEach(d => {
        data.push({ "key": d.zip_id, "value": d.zip_id + " " + d.zip_name })
      })

      if (extData != undefined && extData.length > 0) {
        extData.forEach(s => {
          data.push(s);
        })

      }
      comZipId.data = data;
      return data;
    },
    //Submit
    SubmitData(){
      let row = this.$refs.table.getSelected();
      if (row.length == 0) {
        return this.$error('Please select the row to submit!');
      }
      let url = "api/View_wk_cust_main/Submit";
      this.http.post(url,  row , true).then((result) => {
        return result;
      });
    },
    //Back
    BackData(){
      let row = this.$refs.table.getSelected();
      if (row.length == 0) {
        return this.$error('Please select the row to back!');
      }
      let url = "api/View_wk_cust_main/processBack";
      this.http.post(url,  row , true).then((result) => {
        return result;
      });
    },
    //选择客户Pick 回填字段
    handleCustomerSelected(flag,rows){
      if(flag=='editSearchHospital'){
        this.editFormFields['own_hospital_cust_id'] = rows[0].cust_id;
        this.editFormFields['own_hospital'] = rows[0].cust_dbid;
        this.pickEditFormHospital = rows[0].cust_name
      }
      if(flag=='editSearchCust'){
        this.editFormFields['cust_id'] = rows[0].cust_id;
        this.editFormFields['cust_dbid'] = rows[0].cust_dbid;
        this.editFormFields['cust_name'] = rows[0].cust_name;
        this.pickEditFormCustomerName = rows[0].cust_name
      }

    },
    getPickName(searchType){
      if(searchType=="editSearchHospital"){
        return this.pickEditFormHospital
      }
      if(searchType=="editSearchCust"){
        return this.pickEditFormCustomerName
      }

    },
    getFormRender(searchType) {//
      return (h, { row, column, index }) => {
        return h("div", { class:"el-input el-input--medium el-input--suffix" }, [
          h(
              "input",
              {
                class:"el-input__inner",
                type:"text",
                style:{width:"70%","background-color":"#f5f7fb"},
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
                  if(searchType=="editSearchHospital" || searchType=="editSearchCust"){
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
                  if(searchType=='editSearchHospital'){
                    this.editFormFields['own_hospital_cust_id'] = "";
                    this.editFormFields['own_hospital'] = "";
                    this.pickEditFormHospital = "";
                  }
                  if(searchType=='editSearchCust'){
                    this.editFormFields['cust_id'] = "";
                    this.editFormFields['cust_dbid'] = "";
                    this.editFormFields['cust_name'] = "";
                    this.pickEditFormCustomerName = "";
                  }
                }
              },
              [h("i",{class:"el-icon-zoom-out"})],
              "Clean"
          ),

        ]);
      };
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
    getOption1(field) {//獲取編輯字段的titile用於區分相同的field
      let option;
      this.editFormOptions.forEach(x => {
        x.forEach(item => {
          if (item.title == field) {
            option = item;
          }
        })
      })
      return option;
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
      var apply_type  = this.editFormFields.apply_type;

      if (this.currentAction=='Add'){
        //this.editFormFields.apply_type='01';
        this.pickEditFormCustomerName = "";
        this.pickEditFormHospital = "";
        //this.getOption("cust_dbid").hidden=true;
        this.getOption1("Cust Code").hidden=true;
        this.getOption1("Customer").hidden=true;
        this.getOption("apply_type").disabled=false;
        this.getOption("delivery_tel_no").disabled=false;

      }else {
        if(apply_type=='01'){
          this.getOption("cust_name").hidden=false;
          this.getOption1("Cust Code").hidden=false;
          this.getOption1("Cust Code").disabled=true;
          this.getOption1("Customer").hidden=true;
         // this.getOption("cust_dbid").hidden=true;
        }
        if(apply_type=='02'){
          this.getOption("cust_name").hidden=true;
          this.getOption1("Cust Code").hidden=true;
          this.getOption1("Customer").hidden=false;
        }
        this.getOption("delivery_tel_no").disabled=true;
        this.getOption("apply_type").disabled=true;
        this.pickEditFormHospital = row.own_hospital_cust_name;
        this.pickEditFormCustomerName = row.cust_name;
      }
    }
  }
};
export default extension;
