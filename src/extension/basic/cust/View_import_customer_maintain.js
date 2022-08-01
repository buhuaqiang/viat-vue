/*****************************************************************************************
**  Author:jxx 2022
**  QQ:283591387
**完整文档见：http://v2.volcore.xyz/document/api 【代码生成页面ViewGrid】
**常用示例见：http://v2.volcore.xyz/document/vueDev
**后台操作见：http://v2.volcore.xyz/document/netCoreDev
*****************************************************************************************/
//此js文件是用来自定义扩展业务代码，可以扩展一些自定义页面或者重新配置生成的代码
import Viat_com_custModelBody from "./Viat_com_custModelBody";
import Viat_com_cust_importViewModelBody from  "./Viat_com_cust_importViewModelBody";

let extension = {
  components: {
    //查询界面扩展组件
    gridHeader: '',
    gridBody: Viat_com_custModelBody,
    gridFooter: '',
    //新建、编辑弹出框扩展组件
    modelHeader: Viat_com_cust_importViewModelBody,
    modelBody: Viat_com_custModelBody,
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
debugger
      let data=[];
      let params= {
        "page": 1,
        "rows": 30,
        "sort": "zip_id",
        "order": "asc",
        "wheres": "[]"
      }
      let url="api/Viat_com_zip_city/GetPageDataForSelect";
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

    //渲染 View 只有外殼
    getPopRenderText(searchType,sv){
      return (h, { row, column, index }) => {
        return h("div", { class:"el-input el-input--medium el-input--suffix" }, [
          h(
              "input",
              {
                class:"el-input__inner",
                type:"text",
                id:searchType,
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
    //View 渲染 殼 invoic name
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
    //渲染 copy地址
    getCopyAddRender() {
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
                  if (this.editFormFields.cust_name)
                    this.editFormFields.invoice_name = this.editFormFields.cust_name;
                  debugger
                  if (this.editFormFields.cust_zip_id_city_name) {
                    let custCity = this.editFormFields.cust_zip_id_city_name;
                    this.editFormFields.invoice_zip_id_city_name = custCity;
                      this.editFormFields.invoice_zip_id = '';
                      this.getCityZoneData(custCity,invoiceZipId);
                  }
                  if (this.editFormFields.cust_zip_id){
                    let custZip = this.editFormFields.cust_zip_id;
                    this.editFormFields.invoice_zip_id = custZip;
                  }
                  if (this.editFormFields.cust_address){
                    let custAdd = this.editFormFields.cust_address;
                    this.editFormFields.invoice_address = custAdd;
                  }
                }
              },
              [h("i",{class:"el-icon-zoom-in"})],
              "Copy"
          ),
        ]);
      };
    },
    //渲染 編輯 & 查詢時
    getPopRender(searchType,sv) {//
      return (h, { row, column, index }) => {
        return h("div", { class:"el-input el-input--medium el-input--suffix" }, [
          h(
              "input",
              {
                class:"el-input__inner",
                type:"text",
                id:searchType,
                value:sv,
                style:{width:"70%","background-color":"#f5f7fb"},
                readonly:"true"
              }
          ),
          h(
              "a",
              {
                props: {},
                style: { "color":"#409eff","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none","cursor":"pointer","font-size": "12px"},
                onClick: (e) => {
                  if(searchType.startsWith('f')){
                    this.$refs.modelBody.openModel(true, searchType)
                  }else{
                    this.$refs.gridBody.openModel(true,searchType)
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
                  if(searchType=='f_own_hospital'){
                    this.editFormFields['own_hospital_cust_id'] = "";
                    this.editFormFields['own_hospital'] = "";
                    document.getElementById("f_own_hospital").value=''
                  }
                  if(searchType=='f_med_group'){
                    this.editFormFields['med_group_cust_id'] = "";
                    this.editFormFields['med_group'] = "";
                    document.getElementById("f_med_group").value=''
                  }
                  if(searchType=='f_delv_group'){
                    this.editFormFields['delv_group_cust_id'] = "";
                    this.editFormFields['delv_group'] = "";
                    document.getElementById("f_delv_group").value=''
                  }
                }
              },
              [h("i",{class:"el-icon-zoom-out"})],
              "Clean"
          ),

        ]);
      };
    },

    // onActivated(){
    //
    //   this.search();
    //
    // },
    // copyAdd(){
    //   if (this.editFormFields.cust_name)
    //   this.editFormFields.invoice_name = this.editFormFields.cust_name;
    // },
    //选择客户Pick 回填字段
    handleCustomerSelected(flag,rows){
      debugger
      if(flag=='f_own_hospital'){
        this.editFormFields['own_hospital_cust_id'] = rows[0].cust_id;
        this.editFormFields['own_hospital'] = rows[0].cust_dbid;
        document.getElementById("f_own_hospital").value=rows[0].cust_name
      }
      if(flag=='f_med_group'){
        this.editFormFields['med_group_cust_id'] = rows[0].cust_id;
        this.editFormFields['med_group'] = rows[0].cust_dbid;
        document.getElementById("f_med_group").value=rows[0].cust_name;
      }
      if(flag=='f_delv_group'){
        this.editFormFields['delv_group_cust_id'] = rows[0].cust_id;
        this.editFormFields['delv_group'] = rows[0].cust_dbid;
        document.getElementById("f_delv_group").value=rows[0].cust_name;
      }
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
      this.boxOptions.labelWidth=250;
      //显示查询全部字段
      this.setFiexdSearchForm(true);
      //设置查询表单的标签文字宽度
      this.labelWidth=180;
      //默認不查詢
      this.load=false;
      //表格设置为单选
      this.single=true;
      //編輯時只讀
      var custID = this.getFormOption('cust_id');
      custID.readonly =true;
      var createdUser = this.getFormOption('created_username');
      createdUser.readonly = true;
      var updateUser = this.getFormOption('modified_username');
      updateUser.readonly=true;
      var updateDate = this.getFormOption('modified_date');
      updateDate.readonly=true;
      var createdDate = this.getFormOption('created_date');
      createdDate.readonly=true;

      //一進入Search畫面兩個按鈕隱藏
      this.buttons.forEach(x => {
        if (x.name == "Edit" || x.name == "Ignore") {
          x.hidden=true;
        }
      })
      // if(this.searchBoxShow ){
      //   debugger
      //   alert('Nice!~!!')
      // }
      //渲染 copy地址
      let copyAddress = this.getOption('invoice_name');
      copyAddress.extra ={
        render: this.getCopyAddRender()
      }

//城市 地區 連動下拉
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

//迴車 查出cust_name 彈窗
      let ownHospital = this.getOption("own_hospital_cust_id");
      ownHospital.extra = {
        render: this.getPopRender("f_own_hospital")
      }
      ownHospital.onKeyPress= ($event) => {
        if($event.keyCode==13){
          let  cust_id = this.editFormFields['own_hospital_cust_id']
          if(cust_id) {
            this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.editFormFields['own_hospital'] =reslut.cust_dbid;
                this.editFormFields['own_hospital_cust_id'] =reslut.cust_id ;
                document.getElementById("f_own_hospital").value=reslut.cust_name;
                return;
              }else{
                this.$message.error("Customer Id Is Not Exists.");
                this.editFormFields['own_hospital_cust_id']=''
                document.getElementById("f_own_hospital").value=''
                return;
              }
            })
          }
        }
      }

      let med_group = this.getOption("med_group_cust_id");
      med_group.extra = {
        render: this.getPopRender("f_med_group")
      }
      med_group.onKeyPress= ($event) => {
        if($event.keyCode==13){
          let  cust_id = this.editFormFields['med_group_cust_id']
          if(cust_id) {
            this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.editFormFields['med_group'] =reslut.cust_dbid;
                this.editFormFields['med_group_cust_id'] =reslut.cust_id ;//
                document.getElementById("f_med_group").value=reslut.cust_name;
                return;
              }else{
                this.$message.error("Customer Id Is Not Exists.");
                this.editFormFields['med_group_cust_id']=''
                document.getElementById("f_med_group").value=''
                return;
              }
            })
          }
        }
      }

      let delv_group = this.getOption("delv_group_cust_id");
      delv_group.extra = {
        render: this.getPopRender("f_delv_group")
      }
      delv_group.onKeyPress= ($event) => {
        if($event.keyCode==13){
          let  cust_id = this.editFormFields['delv_group_cust_id']
          if(cust_id) {
            this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.editFormFields['delv_group'] =reslut.cust_dbid;
                this.editFormFields['delv_group_cust_id'] =reslut.cust_id ;//
                document.getElementById("f_delv_group").value= reslut.cust_name;
                return;
              }else{
                this.$message.error("Customer Id Is Not Exists.");
                this.editFormFields['delv_group_cust_id']=''
                document.getElementById("f_delv_group").value=''
                return;
              }
            })
          }
        }
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
    getFormOption (field) {
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
      //新增時在按完save按鈕 , 加入查詢條件 , 將剛剛新增好的數據查出來
      updateAfter(x){
        debugger
          let cust_name=this.editFormFields.cust_name;
          this.searchFormFields.cust_name=cust_name;
          return true

      },
    updateBefore(formData) {
      //编辑保存前formData为对象，包括明细表、删除行的Id
      return true;
    },
    rowClick({ row, column, event }) {
      //查询界面点击行事件
      this.$refs.table.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
      //沒選到任何數據時隱藏Edit, Ignore 顯示View按鈕
      if (!this.$refs.table.getSelected()[0] ){
        this.buttons.forEach(x => {
          if (x.name == "Edit" || x.name == "Ignore") {
            x.hidden=true;
          }
          if (x.name == "View"){
            x.hidden=false;
          }
        })
      }else{
        //有選到數據時作以下判斷
        let rowState = this.$refs.table.getSelected()[0].state;
        if (rowState == '0'){
          this.buttons.forEach(x => {
            if (x.name == "Edit") {
              x.hidden=false;
            }
            if (x.name == "View"){
              x.hidden=true;
            }
            if (x.name == "Ignore") {
              x.hidden=false;
            }
          })
        }else {
          this.buttons.forEach(x => {
            if (x.name == "Edit") {
              x.hidden=true;
            }
            if (x.name == "View"){
              x.hidden=false;
            }
            if (x.name == "Ignore") {
              x.hidden=true;
            }
          })
        }
      }
    },
    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)
      debugger
      let ownHospital = this.getOption("own_hospital_cust_id");
      let delv_group = this.getOption("delv_group_cust_id");
      let med_group = this.getOption("med_group_cust_id");
      let invoiceNmae = this.getOption('invoice_name');
      let custName = this.getOption('cust_name');
      let custNameShell = this.getOption('cust_name');

      if (this.currentAction ==this.const.EDIT){
        debugger
        this.editFormFields.own_by_hospital='N';
        let comZipId = this.getOption("cust_zip_id");
        let invoiceZipId = this.getOption("invoice_zip_id");
        let cityName1 = this.editFormFields.cust_zip_id_city_name;
        let cityName2 = this.editFormFields.invoice_zip_id_city_name;
        //初始化客户地址和发票地址的区域下拉选择
        this.getCityZoneData(cityName1, comZipId);
        this.getCityZoneData(cityName2, invoiceZipId);
          custName.extra = {
              render: this.getViewRender("editSearchCust")
          }
          invoiceNmae.extra = {
              render: this.getCopyAddRender()
          }
          ownHospital.extra = {
              render: this.getPopRender("f_own_hospital",row.own_hospital_custname)
          }
          ownHospital.onKeyPress= ($event) => {
              if($event.keyCode==13){
                  let  cust_id = this.editFormFields['own_hospital_cust_id']
                  if(cust_id) {
                      this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id.replace(/\s/g,""),{} , "loading").then(reslut => {
                          if(reslut !=null){
                              this.editFormFields['own_hospital'] =reslut.cust_dbid;
                              this.editFormFields['own_hospital_cust_id'] =reslut.cust_id ;
                              document.getElementById("f_own_hospital").value=reslut.cust_name;
                              return;
                          }else{
                              this.$message.error("Customer Id Is Not Exists.");
                              this.editFormFields['own_hospital_cust_id']=''
                              document.getElementById("f_own_hospital").value=''
                              return;
                          }
                      })
                  }
              }
          }


          med_group.extra = {
              render: this.getPopRender("f_med_group",row.med_group_custname)
          }
          med_group.onKeyPress= ($event) => {
              if($event.keyCode==13){
                  let  cust_id = this.editFormFields['med_group_cust_id']
                  if(cust_id) {
                      this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id.replace(/\s/g,""),{} , "loading").then(reslut => {
                          if(reslut !=null){
                              this.editFormFields['med_group'] =reslut.cust_dbid;
                              this.editFormFields['med_group_cust_id'] =reslut.cust_id ;//
                              document.getElementById("f_med_group").value=reslut.cust_name;
                              return;
                          }else{
                              this.$message.error("Customer Id Is Not Exists.");
                              this.editFormFields['med_group_cust_id']=''
                              document.getElementById("f_med_group").value=''
                              return;
                          }
                      })
                  }
              }
          }


          delv_group.extra = {
              render: this.getPopRender("f_delv_group",row.delv_group_custname)
          }
          delv_group.onKeyPress= ($event) => {
              if($event.keyCode==13){
                  let  cust_id = this.editFormFields['delv_group_cust_id']
                  if(cust_id) {
                      this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id.replace(/\s/g,""),{} , "loading").then(reslut => {
                          if(reslut !=null){
                              this.editFormFields['delv_group'] =reslut.cust_dbid;
                              this.editFormFields['delv_group_cust_id'] =reslut.cust_id ;//
                              document.getElementById("f_delv_group").value= reslut.cust_name;
                              return;
                          }else{
                              this.$message.error("Customer Id Is Not Exists.");
                              this.editFormFields['delv_group_cust_id']=''
                              document.getElementById("f_delv_group").value=''
                              return;
                          }
                      })
                  }
              }
          }
        // document.getElementById("f_med_group").value=row.own_hospital_custname;
        // document.getElementById("f_delv_group").value=row.med_group_custname
        // document.getElementById("f_own_hospital").value=row.delv_group_custname
      }else if (this.currentAction ==this.const.VIEW){
        debugger
        // this.editFormFields.own_hospital_cust_id = this.editFormFields.own_hospital_cust_id;
        custName.extra = {
          render: this.getViewRenderText()
        }
        invoiceNmae.extra = {
          render: this.getCopyAddRenderText()
        }
        ownHospital.extra = {
          render: this.getPopRenderText("f_own_hospital",row.own_hospital_custname)
        }
        med_group.extra = {
          render: this.getPopRenderText("f_med_group",row.med_group_custname)
        }
        delv_group.extra = {
          render: this.getPopRenderText("f_delv_group",row.delv_group_custname)
        }
      }
    }
  }
};
export default extension;
