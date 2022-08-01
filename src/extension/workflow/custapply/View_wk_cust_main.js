/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import Viat_com_custApplyModelBody from "./Viat_com_custApplyModelBody";
import Viat_com_custViewModelBody from "./Viat_com_custViewModelBody";
let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: '',
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: Viat_com_custViewModelBody,
    modelBody: Viat_com_custApplyModelBody,
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
      // this.single=true;
      //设置查询表单的标签文字宽度
      this.labelWidth=180;
      //设置编辑表单标签文字宽度
      this.boxOptions.labelWidth=260;
      this.boxOptions.width=1500;
      this.load=false;



      //日期格式化 formatter
      let start_date=this.getColumnsOption("start_date");
      start_date.formatter = (row) => {
        //对单元格的数据格式化处理
        if (!row.start_date) {
          return;
        }
        return row.start_date.substr(0,10);
      }

      //城市 區域 下拉控制
      let comCity = this.getOption("cust_city_name");
      let invoiceCity = this.getOption("invoice_city_name");
      let comZipId = this.getOption("cust_zip_id");
      let invoiceZipId = this.getOption("invoice_zip_id");
      comCity.onChange = (val, option) => {
        this.editFormFields.cust_zip_id = '';//清除原來選擇的數據
        this.getCityZoneData(val, comZipId);
      }
      invoiceCity.onChange = (val, option) => {
        this.editFormFields.invoice_zip_id = '';//清除原來選擇的數據
        this.getCityZoneData(val, invoiceZipId);
      }


      let cust_id = this.getOption("cust_id");
      let custName = this.getOption("cust_name");
      let applyType = this.getOption("apply_type");
      let ownHospital = this.getOption("own_hospital_cust_id");
      //ApplyType下拉框改變時(Add Customer, Edit Customer)對應顯示不同欄位 + 改變為Add Customer時渲染View模糊查詢2字段
      applyType.onChange = (val) => {
        if(val=='01'){//Add Customer
          custName.hidden=false;
          custName.required=true;
          custName.extra={
            render:this.getViewRender("editSearchCust")
          }
          cust_id.required=false;
          cust_id.hidden=true;
        }else if(val=='02'){//Edit Customer
          custName.hidden=true;
          custName.required=false;
          cust_id.required=true;
          cust_id.hidden=false;
        }
      }


      //Edit > Edit Customer時 , 客戶,own Hospital渲染與迴車查詢
      cust_id.extra={
        render:this.getFormRender("editSearchCust")
      }
      cust_id.onKeyPress= ($event) => {
        if($event.keyCode==13){
          let  cust_id = this.editFormFields['cust_id']
          if(cust_id) {
            this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.editFormFields['cust_dbid'] =reslut.cust_dbid;
                this.editFormFields['cust_id'] =reslut.cust_id ;
                this.editFormFields['cust_name'] =reslut.cust_name ;
                this.editFormFields['cust_zip_id'] =reslut.cust_zip_id ;
                this.editFormFields['cust_address'] =reslut.cust_address ;
                this.editFormFields['invoice_name'] =reslut.invoice_name ;
                this.editFormFields['invoice_zip_id'] =reslut.invoice_zip_id ;
                this.editFormFields['invoice_address'] =reslut.invoice_address ;
                this.editFormFields['is_private'] = reslut.is_private;
                this.editFormFields['owner'] = reslut.owner;
                //this.editFormFields['tax_id'] = rows[0].tax_id;
                this.editFormFields['email'] = reslut.email;
                this.editFormFields['fax_no'] = reslut.fax_no;
                this.editFormFields['own_hospital'] = reslut.own_hospital;
                this.editFormFields['ctrl_drug_no'] = reslut.ctrl_drug_no;
                this.editFormFields['ctrl_drug_contact'] = reslut.ctrl_drug_contact;
                this.editFormFields['remarks'] = reslut.remarks;
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

      //自製按鈕Save and Submit
      this.boxButtons.splice(1, 0,{
        name: 'Save and Submit',
        icon: 'el-icon-check',
        type: 'danger',
        disabled: false,
        value: 'save',
        onClick() {
          this.saveSubmit();
        }
      })

      //列表渲染一個欄位
      this.columns.push({
        title: '操作', width: 110, render: (h, { row, column, index }) => {
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
        "sort": "zip_id",
        "order": "asc",
        "wheres": "[]"
      }
      let url = "api/Viat_com_zip_city/GetPageDataForSelect";
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
      if (!row || row.length == 0) {
        return this.$error('Please select the row to submit!');
      }
      let delKeys = row.map((x) => {
        return x[this.table.key];
      });
      if (!delKeys || delKeys.length == 0)
        return this.$error('None Need Submit Data!');
      let status = row.some(x => { return (x.status !='00' && x.status !='02')});
      if (status) {
        this.$message.error('Only Submit Draft Or RollBack Data')
        return false;
      }
      let tigger = false;
      this.$confirm('Are you sure you want to Submit the selected data?', 'Warn', {
        confirmButtonText: 'confirm',
        cancelButtonText: 'Cancel',
        type: 'warning',
        center: true
      }).then(() => {
        if (tigger) return;
        tigger = true;
        let url = "api/View_wk_cust_main/Submit";
        this.http.post(url, row, 'Submit data....').then((x) => {
          if (!x.status) return this.$Message.error(x.message);
          this.$Message.success("Submit Success")
          this.refresh();
        });
      });
    },

    //save and Submit
    saveSubmit(){
      this.$refs.form.validate((result) => {//校验必输字段
        if (result) {
          this.saveSubmitExecute();
        }
      });
      /*debugger
      let formData = this.editFormFields;
      let url = "api/View_wk_cust_main/addSubmit";
       this.http.post(url,  formData , true).then((result) => {
         return result;
       });*/
    },

    saveSubmitExecute(){
      let formData = this.editFormFields;
      let url = "api/View_wk_cust_main/addSubmit";
      let _currentIsAdd = this.currentAction == this.const.ADD;
      this.http.post(url, formData, true).then((x) => {

        if (!x.status) return this.$error(x.message);
        this.$Message.success(x.message?x.message:"Saved successfully!");
        if (this.boxOptions.saveClose) {
          this.boxModel = false;
          //2020.12.27如果是编辑保存后不重置分页页数，刷新页面时还是显示当前页的数据
          this.$refs.table.load(null, _currentIsAdd);
          //this.refresh();
          return;
        }
      });
    },

    //CallBack
    BackData(){
      let rows =  this.getSelectRows();
      var bidmast_dbids=[];
      if (!rows || rows.length == 0) {
        return this.$error('Please select the row to back!');
      }
      let delKeys = rows.map((x) => {
        return x[this.table.key];
      });
      if (!delKeys || delKeys.length == 0)
        return this.$error('None Need RollBack Data!');
      let status = rows.some(x => { return (x.status !='01')});
      if (status) {
        this.$message.error('Only RollBack Approving Data')
        return false;
      }
      let tigger = false;
      this.$confirm('Are you sure you want to RollBack the selected data?', 'Warn', {
        confirmButtonText: 'confirm',
        cancelButtonText: 'Cancel',
        type: 'warning',
        center: true
      }).then(() => {
        if (tigger) return;
        tigger = true;
        let url = "api/View_wk_cust_main/processBack";
        this.http.post(url, delKeys, 'RollBack data....').then((x) => {
          if (!x.status) return this.$Message.error(x.message);
          this.$Message.success("RollBack Success")
          this.refresh();
        });
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
        this.editFormFields['cust_city_name'] = rows[0].cust_city_name;
        this.editFormFields['cust_zip_id'] = rows[0].cust_zip_id;
        this.editFormFields['cust_address'] = rows[0].cust_address;
        this.editFormFields['invoice_name'] = rows[0].invoice_name;
        this.editFormFields['invoice_city_name'] = rows[0].invoice_city_name;
        this.editFormFields['invoice_zip_id'] = rows[0].invoice_zip_id;
        this.editFormFields['invoice_address'] = rows[0].invoice_address;
        this.editFormFields['delivery_contact'] = rows[0].contact;
        this.editFormFields['delivery_tel_no'] = rows[0].tel_no;
        this.editFormFields['doh_type'] = rows[0].doh_type;
        this.editFormFields['doh_institute_no'] = rows[0].doh_institute_no;
        this.editFormFields['is_private'] = rows[0].is_private;
        this.editFormFields['owner'] = rows[0].owner;
        this.editFormFields['tax_id'] = rows[0].tax_id;
        this.editFormFields['email'] = rows[0].email;
        this.editFormFields['fax_no'] = rows[0].fax_no;
        this.editFormFields['own_hospital'] = rows[0].own_hospital;
        this.editFormFields['own_hospital_cust_id'] = rows[0].own_hospital_cust_id;
        this.pickEditFormHospital = rows[0].own_hospital_cust_name;
        this.editFormFields['ctrl_drug_no'] = rows[0].ctrl_drug_no;
        this.editFormFields['ctrl_drug_contact'] = rows[0].ctrl_drug_contact;
        this.editFormFields['remarks'] = rows[0].remarks;
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

    //渲染 殼 View cust_name 模糊查詢
    getViewRenderText(){
      return (h, { row, column, index }) => {
        return h("div", { class:"el-input el-input--medium el-input--suffix" }, [
          h(
              "a",
              {
                props: {},

                style: { "color":"grey","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none","cursor":"pointer","font-size": "12px","pointer-events": "none"},
                onClick: (e) => {

                }
              },
              [h("i",{class:"el-icon-zoom-in"})],
              "View"
          ),
        ]);
      };
    },
    //Pick 殼
    getFormRenderText(sv){
      return (h, { row, column, index }) => {
        return h("div", { class:"el-input el-input--medium el-input--suffix" }, [
          h(
              "input",
              {
                class:"el-input__inner",
                type:"text",
                //id:searchType,
                value:sv,
                style:{width:"70%","background-color":"#f5f7fb"},
                readonly:"true"
              }
          ),
          h(
              "a",
              {
                props: {},

                style: { "color":"grey","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none","cursor":"pointer","font-size": "12px","pointer-events": "none"},
                onClick: (e) => {

                }
              },
              [h("i",{class:"el-icon-zoom-in"})],
              "Pick"
          ),
          h(
              "a",
              {
                props: {},
                style: { "color":"grey","margin-left": "9px", "border-bottom": "1px solid", "text-decoration": "none","cursor":"pointer","font-size": "12px","pointer-events": "none"},
                onClick: (e) => {

                }
              },
              [h("i",{class:"el-icon-zoom-out"})],
              "Clean"
          ),

        ]);
      };
    },

    //渲染 殼 View Copy
    getCopyAddRenderText(){
      return (h, { row, column, index }) => {
        return h("div", { class:"el-input el-input--medium el-input--suffix" }, [
          h(
              "a",
              {
                props: {},

                style: { "color":"grey","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none","cursor":"pointer","font-size": "12px","pointer-events": "none"},
                onClick: (e) => {

                }
              },
              [h("i",{class:"el-icon-zoom-in"})],
              "Copy"
          ),
        ]);
      };
    },

    //渲染 View cust_name前2字段模糊查詢
    getViewRender(searchType) {
      return (h, { row, column, index }) => {
        return h("div", { class:"el-input el-input--medium el-input--suffix" }, [
          h(
              "a",
              {
                props: {},
                style: { "color":"#409eff","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none","cursor":"pointer","font-size": "12px"},
                onClick: (e) => {
                  debugger
                  if(searchType=="editSearchCust"){
                    if (this.editFormFields.cust_name && this.editFormFields.cust_name.length>=2){
                      let custNameView = this.editFormFields.cust_name.substring(0,2);
                      this.$refs.modelHeader.openModel(true,searchType,custNameView);
                    }
                  }
                }
              },
              [h("i",{class:"el-icon-zoom-in"})],
              "View"
          ),
        ]);
      };
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

    //渲染 copy地址
    getCopyAddRender(searchType) {
      return (h, { row, column, index }) => {
        return h("div", { class:"el-input el-input--medium el-input--suffix" }, [
          h(
              "a",
              {
                props: {},

                style: { "color":"#409eff","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none","cursor":"pointer","font-size": "12px"},
                onClick: (e) => {
                  debugger
                  let comCity=this.getOption("cust_zip_id_city_name");
                  let invoiceCity=this.getOption("invoice_zip_id_city_name");
                  let comZipId=this.getOption("cust_zip_id");
                  let invoiceZipId=this.getOption("invoice_zip_id");
                  let deliveryZipId = this.getOption('delivery_zip_id');
                  let apply_type = this.editFormFields.apply_type;
                  if (searchType=='invoiceDeliver' ) {
                    if (apply_type =='02'){
                      if (this.pickEditFormCustomerName){
                       this.editFormFields.invoice_name = this.pickEditFormCustomerName;
                      }
                    }else{
                      if (this.editFormFields.cust_name){
                        this.editFormFields.invoice_name = this.editFormFields.cust_name;
                      }
                  }
                    debugger
                    if (this.editFormFields.cust_city_name) {
                      let custCity = this.editFormFields.cust_city_name;
                      this.editFormFields.invoice_city_name = custCity;
                      this.editFormFields.invoice_zip_id = '';
                      this.getCityZoneData(custCity, invoiceZipId);
                      this.editFormFields.delivery_city_name = custCity;
                      this.editFormFields.delivery_zip_id = '';
                      this.getCityZoneData(custCity, deliveryZipId);
                    }
                    if (this.editFormFields.cust_zip_id) {
                      let custZip = this.editFormFields.cust_zip_id;
                      this.editFormFields.invoice_zip_id = custZip;
                      this.editFormFields.delivery_zip_id = custZip;
                    }
                    if (this.editFormFields.cust_address) {
                      let custAdd = this.editFormFields.cust_address;
                      this.editFormFields.invoice_address = custAdd;
                      this.editFormFields.delivery_addr = custAdd;
                    }
                  }

                }
              },
              [h("i",{class:"el-icon-zoom-in"})],
              "Copy"
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
    getColumnsOption (field) {
      let option;
      this.columns.forEach(x => {
        if (x.field == field) {
          option = x;
        }
      })
      return option;
    },


    searchBefore(param) {
      //界面查询前,可以给param.wheres添加查询参数
      //返回false，则不会执行查询
      let userInfo = this.$store.getters.getUserInfo();
      let userId = userInfo.userId;
      param.wheres.push({ name: "created_user", value: userId});

      let bid_no = this.searchFormFields['bid_no'];
      let cust_name = this.searchFormFields['cust_name'];
      if(bid_no!=""){//设置模糊查询
        for (var i = 0; i < param.wheres.length; i++) {
          if (param.wheres[i].name == 'bid_no') {
            param.wheres[i].displayType = "like"
          }
        }
      }
      if(cust_name!=""){//设置模糊查询
        for (var i = 0; i < param.wheres.length; i++) {
          if (param.wheres[i].name == 'cust_name') {
            param.wheres[i].displayType = "like"
          }
        }
      }
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
    //是否可編輯校驗
    async modelOpenBeforeAsync(row) {
      debugger
      if (this.currentAction==this.const.EDIT){
        if(row.status!='00' && row.status!='02'){
          this.$Message.error(" This row data can not edit.");
          return false;
        }
      }
      return true;
    },

    //是否可刪除校驗
    delBefore(ids, rows) { //查询界面的表删除前 ids为删除的id数组,rows删除的行
      let status = rows.some(x => { return x.status !='00' });
      if (status) {
        this.$message.error('Only delete Draft Data')
        return false;
      }
      //this.$message.success('删除前，选择的Id:' + ids.join(','));
      return true;
    },
    updateBefore(formData) {
      debugger
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
      let cust_id = this.getOption('cust_id');
      let own_hospital = this.getOption('own_hospital_cust_id')
      let custName = this.getOption("cust_name");
      let invoiceName = this.getOption('invoice_name');
      //编辑表单，动态设置下拉框选项禁用状态或者隐藏显示
      this.editFormOptions.forEach((options) => {
        options.forEach((item) => {
          if (item.field == 'apply_type') {
            item.data.forEach((kv) => {
              //根据字典的值判断
              if (kv.key == '03' ||kv.key == '04') {
                kv.hidden = true; //设置选项隐藏
              }
            });
          }
        });
      });
debugger
      if (this.currentAction=='Add'){
        this.editFormFields.apply_type='01';//默認Add
        custName.extra={
          render:this.getViewRender("editSearchCust")
        }
        this.getOption("cust_name").required=true;
        this.getOption("cust_id").required=false;
        this.pickEditFormCustomerName = "";
        this.pickEditFormHospital = "";
        this.getOption("cust_name").hidden=false;
        this.getOption("cust_id").hidden=true;
        this.getOption("apply_type").disabled=false;
        this.getOption("delivery_tel_no").disabled=false;

      }else {
        if(apply_type=='01'){
          this.getOption("cust_name").hidden=false;
          this.getOption("cust_id").hidden=true;
          this.getOption("cust_name").required=true;
          this.getOption("cust_id").required=false;
        }
        if(apply_type=='02'){
          this.getOption("cust_name").hidden=true;
          this.getOption("cust_id").hidden=false;
          this.getOption("cust_name").required=false;
          this.getOption("cust_id").required=true;
        }
        this.getOption("delivery_tel_no").disabled=true;
        this.getOption("apply_type").disabled=true;
        this.pickEditFormHospital = row.own_hospital_cust_name;
        this.pickEditFormCustomerName = row.cust_name;
      }

      if (this.currentAction == this.const.VIEW){
        cust_id.extra = {
          render: this.getFormRenderText(row.cust_id)
        }
        own_hospital.extra = {
          render: this.getFormRenderText(row.own_hospital_cust_id)
        }
        invoiceName.extra = {
          render: this.getCopyAddRenderText()
        }
        if (apply_type =='01') {//Add Customer時才渲染殼
          custName.extra = {
            render: this.getViewRenderText()
          }
        }
        this.boxButtons.forEach(x => {//View時隱藏Save and Submit按鈕
          if (x.name == "Save and Submit") {
            x.hidden=true;
          }
        })
      }else{//其餘時候(New & Edit)放開
        invoiceName.extra = {
          render: this.getCopyAddRender('invoiceDeliver')
        }
        if (apply_type =='01') {//Add Customer時才渲染
          debugger
          custName.extra = {
            render: this.getViewRender("editSearchCust")
          }
        }
        this.boxButtons.forEach(x => {
          if (x.name == "Save and Submit") {
            x.hidden=false;
          }
        })
      }
    }
  }
};
export default extension;
