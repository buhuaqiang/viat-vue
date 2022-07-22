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
    gridBody: Viat_com_custModelBody,
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
                  if(searchType=='own_hospital'){
                    this.searchFormFields['own_hospital_cust_id'] = "";
                    this.searchFormFields['own_hospital'] = "";
                    document.getElementById("own_hospital").value=''
                  }
                  if(searchType=='f_med_group'){
                    this.editFormFields['med_group_cust_id'] = "";
                    this.editFormFields['med_group'] = "";
                    document.getElementById("f_med_group").value=''
                  }
                  if(searchType=='med_group'){
                    this.searchFormFields['med_group_cust_id'] = "";
                    this.searchFormFields['med_group'] = "";
                    document.getElementById("med_group").value=''
                  }
                  if(searchType=='f_delv_group'){
                    this.editFormFields['delv_group_cust_id'] = "";
                    this.editFormFields['delv_group'] = "";
                    document.getElementById("f_delv_group").value=''
                  }
                  if(searchType=='delv_group'){
                    this.searchFormFields['delv_group_cust_id'] = "";
                    this.searchFormFields['delv_group'] = "";
                    document.getElementById("delv_group").value=''
                  }

                }
              },
              [h("i",{class:"el-icon-zoom-out"})],
              "Clean"
          ),

        ]);
      };
    },


    getPopShowRender(searchType) {//
      return (h, { row, column, index }) => {
        return h("div", { class:"el-input el-input--medium el-input--suffix" }, [
          h(
              "input",
              {
                class:"el-input__inner",
                type:"text",
                style:{width:"70%","background-color":"#f5f7fb"},
                readonly:"true",
                id:searchType
              }
          )

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
                  let invoiceZipId=this.getOption("invoice_zip_id");
                  if (this.editFormFields.cust_name)
                    this.editFormFields.invoice_name = this.editFormFields.cust_name;
                  debugger
                  if (this.editFormFields.cust_city_name) {
                    let custCity = this.editFormFields.cust_city_name;
                    this.editFormFields.invoice_city_name = custCity;
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

    //选择客户Pick 回填字段
    handleCustomerSelected(flag,rows){
      debugger
      if(flag=='f_own_hospital'){
        this.editFormFields['own_hospital_cust_id'] = rows[0].cust_id;
        this.editFormFields['own_hospital'] = rows[0].cust_dbid;
        document.getElementById("f_own_hospital").value=rows[0].cust_name
      }
      if(flag=='own_hospital'){
        this.searchFormFields['own_hospital_cust_id'] = rows[0].cust_id;
        this.searchFormFields['own_hospital'] = rows[0].cust_dbid;
        this.extend.own_hospital=rows[0].cust_name;
        document.getElementById("own_hospital").value=rows[0].cust_name
      }
      if(flag=='f_delv_group'){
        this.editFormFields['delv_group_cust_id'] = rows[0].cust_id;
        this.editFormFields['delv_group'] = rows[0].cust_dbid;
        document.getElementById("f_delv_group").value=rows[0].cust_name;
      }
      if(flag=='delv_group'){
        this.searchFormFields['delv_group_cust_id'] = rows[0].cust_id;
        this.searchFormFields['delv_group'] = rows[0].cust_dbid;
        document.getElementById("delv_group").value=rows[0].cust_name;
      }
      if(flag=='f_med_group'){
        this.editFormFields['med_group_cust_id'] = rows[0].cust_id;
        this.editFormFields['med_group'] = rows[0].cust_dbid;
        document.getElementById("f_med_group").value=rows[0].cust_name;
      }
      if(flag=='med_group'){
        this.searchFormFields['med_group_cust_id'] = rows[0].cust_id;
        this.searchFormFields['med_group'] = rows[0].cust_dbid;
        document.getElementById("med_group").value=rows[0].cust_name;
      }
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
    parseTime(time,cFormat){
      const format=cFormat||'{y}-{m}-{d} {h}:{i}:{s}'
      let date
      if(typeof time ==='object'){
        date=time
      }else {
        if(typeof time ==='string'){
          if((/^[0-9]+$/.test(time))){
            time=parseInt(time)
          }else{
            time=time.replace(new RegExp(/-/gm),'/')
          }
        }
        if((typeof time==='number') && (time.toString().length)===10){
          time=time*1000
        }
        date=new Date(time)
      }
      const formatObj={
        y:date.getFullYear(),
        m:date.getMonth()+1,
        d:date.getDate(),
        h:date.getHours(),
        i:date.getMinutes(),
        s:date.getSeconds(),
        a:date.getDay()
      }
      const time_str=format.replace(/{([ymdhisa])+}/g,(result,key)=>{
        const value=formatObj[key]
        if(key==='a'){
          return['日','一','二','三','四','五','六'][value]
        }
        return  value.toString().padStart(2,'0')
      })
      return time_str
    },
    resetSearchFormAfter() {
      document.getElementById("med_group").value=''
      document.getElementById("delv_group").value=''
      document.getElementById("own_hospital").value=''
    },
    // onActivated(){
    //   debugger
    //   if(!this.LoadPage){//打開頁面執行查詢後在從其他頁簽返回是執行此操作
    //     this.search();
    //   }
    //
    // },
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
      // this.LoadPage = true;
      this.boxOptions.labelWidth = 250;
      //显示查询全部字段
      //this.setFiexdSearchForm(true);
      //设置查询表单的标签文字宽度
      this.labelWidth = 230;
      //表格设置为单选
      this.single=true;
      //設置初始不加載
      this.load=false;

      //let data = { Variety: '1', AvgPrice: 888 };
      //this.$refs.myform.reset(data);

      //是否自动绑定select/checkboxt等标签的数据源
      //this.loadKey=true;
      if(this.searchBoxShow ){
        document.getElementById("med_group").value=''
        document.getElementById("delv_group").value=''
        document.getElementById("own_hospital").value=''
      }

      // let copyAddress = this.getOption('invoice_name');
      let comCity = this.getOption("cust_city_name");
      let invoiceCity = this.getOption("invoice_city_name");
      let comZipId = this.getOption("cust_zip_id");
      let invoiceZipId = this.getOption("invoice_zip_id");
      let status=this.getOption("status");
      status.onChange=(val, option)=>{
        if(val=='N'){
          let dateStrs=this.parseTime(new Date(),'{y}-{m}-{d}')
          this.editFormFields['inactive_date']=dateStrs;
        }
      }

      comCity.onChange = (val, option) => {
        this.editFormFields.cust_zip_id = '';//清除原來選擇的數據
        this.getCityZoneData(val, comZipId);
      }

      invoiceCity.onChange = (val, option) => {
        this.editFormFields.invoice_zip_id = '';
        this.getCityZoneData(val, invoiceZipId);
      }

      let copyAddress = this.getOption('invoice_name');
      copyAddress.extra = {
        render: this.getCopyAddRender()
      }

      let ownHospital = this.getOption("own_hospital_cust_id");
      ownHospital.extra = {
        render: this.getPopRender("f_own_hospital")
      }

      let med_group = this.getOption("med_group_cust_id");
      med_group.extra = {
        render: this.getPopRender("f_med_group")
      }

      let delv_group = this.getOption("delv_group_cust_id");
      delv_group.extra = {
        render: this.getPopRender("f_delv_group")
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
      let searchdelv_groupname = this.getSearchOption("delv_group_cust_id");
      let searchdelv_group = this.getSearchOption("delv_group");
      searchdelv_group.hidden = true
      searchdelv_groupname.extra = {
        render: this.getPopRender("delv_group")
      }
      searchdelv_groupname.onKeyPress= ($event) => {
        if($event.keyCode==13){
          let  cust_id = this.searchFormFields['delv_group_cust_id']
          if(cust_id) {
            this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.searchFormFields['delv_group'] =reslut.cust_dbid;
                this.searchFormFields['delv_group_cust_id'] =reslut.cust_id ;// reslut.cust_name;
                document.getElementById("delv_group").value=reslut.cust_name;
                return;
              }else{
                this.$message.error("Customer Id Is Not Exists.");
                this.searchFormFields['delv_group_cust_id']=''
                document.getElementById("delv_group").value=''
                return;
              }
            })
          }
        }
      }

      let searchown_hospitalname = this.getSearchOption("own_hospital_cust_id");
      let searchown_hospital = this.getSearchOption("own_hospital");
      searchown_hospital.hidden = true
      searchown_hospitalname.extra = {
        render: this.getPopRender("own_hospital")
      }
      searchown_hospitalname.onKeyPress= ($event) => {
        if($event.keyCode==13){
          let  cust_id = this.searchFormFields['own_hospital_cust_id']
          if(cust_id) {
            this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.searchFormFields['own_hospital'] =reslut.cust_dbid;
                this.searchFormFields['own_hospital_cust_id'] =reslut.cust_id ;//
                document.getElementById("own_hospital").value=reslut.cust_name;
                return;
              }else{
                this.$message.error("Customer Id Is Not Exists.");
                this.searchFormFields['own_hospital_cust_id']=''
                document.getElementById("own_hospital").value=''
                return;
              }
            })
          }
        }
      }
      let searchmed_groupname = this.getSearchOption("med_group_cust_id");
      let searchmed_group = this.getSearchOption("med_group");
      searchmed_group.hidden = true
      searchmed_groupname.extra = {
        render: this.getPopRender("med_group")
      }
      searchmed_groupname.onKeyPress= ($event) => {
        if($event.keyCode==13){
          let  cust_id = this.searchFormFields['med_group_cust_id']
          if(cust_id) {
            this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id.replace(/\s/g,""),{} , "loading").then(reslut => {
              if(reslut !=null){
                this.searchFormFields['med_group'] =reslut.cust_dbid;
                this.searchFormFields['med_group_cust_id'] =reslut.cust_id ;//
                document.getElementById("med_group").value= reslut.cust_name;
                return;
              }else{
                this.$message.error("Customer Id Is Not Exists.");
                this.searchFormFields['med_group_cust_id']=''
                document.getElementById("med_group").value=''
                return;
              }
            })
          }
        }
      }

    },
    onInited() {
      this.detailOptions.columns.forEach(x=>{

      });
      //this.height = this.height-60
      //框架初始化配置后
      //隐藏不需要的按钮
      //如果要配置明细表,在此方法操作
      //this.detailOptions.columns.forEach(column=>{ });
      let detailCityName = this.getDetailColumns("city_name");
      let zip_id = this.getDetailColumns("zip_id");
      let that = this;

      detailCityName.onChange = function (options, row, _columns, status) {
        let orgData = zip_id.bind.data;
        let rowData = that.$refs.detail.rowData;
        let fData = [];
        rowData.forEach(r => {
          orgData.forEach(dd => {
            if (dd.key == r.zip_id) {
              dd.hidden = true;
              fData.push(dd)
            }
          })
        })

        let val = options['city_name'];
        let _index = options['elementIndex'];
        options['zip_id'] = "";
        that.getCityZoneData(val, zip_id.bind, fData);
        // zip_id.bind.data.push(fData);
      }

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
    addRow() {
      debugger
      let index=this.$refs.detail.rowData.length
      this.$refs.detail.addRow({seq_no:index+1});
      this.updateDetailTableSummaryTotal();
      //設置當前行可編輯
      this.$refs.detail.edit.rowIndex = index
    },
    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)
      this.getOption("cust_id").disabled = this.currentAction == this.const.EDIT || this.currentAction==this.const.VIEW;
      this.getOption("cust_id").hidden = this.currentAction ==this.const.ADD;

      let ownHospital = this.getOption("own_hospital_cust_id");
      let delv_group = this.getOption("delv_group_cust_id");
      let med_group = this.getOption("med_group_cust_id");
      let copyAddShell = this.getOption('invoice_name');

      if (this.currentAction ==this.const.ADD){
        this.editFormFields.status='Y';//設置狀態默認值
        this.editFormFields.is_contract='Y';//
        this.editFormFields.is_private='Y';//
        this.editFormFields.own_by_hospital='Y';//
        this.editFormFields.cust_id = "C0000";
        document.getElementById("f_med_group").value=''
        document.getElementById("f_delv_group").value=''
        document.getElementById("f_own_hospital").value=''




      }else  if (this.currentAction ==this.const.EDIT) {
        let comZipId = this.getOption("cust_zip_id");
        let invoiceZipId = this.getOption("invoice_zip_id");
        let cityName1 = this.editFormFields.cust_city_name;
        let cityName2 = this.editFormFields.invoice_city_name;
        //初始化客户地址和发票地址的区域下拉选择
        this.getCityZoneData(cityName1, comZipId);
        this.getCityZoneData(cityName2, invoiceZipId);
        let copyAddress = this.getOption('invoice_name');
        copyAddress.extra = {
          render: this.getCopyAddRender()
        }
        let ownHospital = this.getOption("own_hospital_cust_id");
        ownHospital.extra = {
          render: this.getPopRender("f_own_hospital",row.own_hospital_cust_name)
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
          render: this.getPopRender("f_med_group",row.med_group_cust_name)
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
          render: this.getPopRender("f_delv_group",row.delv_group_cust_name)
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
        //回顯值
        // document.getElementById("f_med_group").value=row.med_group_cust_name;
        // document.getElementById("f_delv_group").value=row.delv_group_cust_name
        // document.getElementById("f_own_hospital").value=row.own_hospital_cust_name
      }else  if (this.currentAction ==this.const.VIEW){
        debugger
        copyAddShell.extra = {
          render: this.getCopyAddRenderText()
        }
        ownHospital.extra = {
          render: this.getPopRenderText("f_own_hospital",row.own_hospital_cust_name)
        }
        med_group.extra = {
          render: this.getPopRenderText("f_med_group",row.med_group_cust_name)
        }
        delv_group.extra = {
          render: this.getPopRenderText("f_delv_group",row.delv_group_cust_name)
        }
        //回顯值
        // document.getElementById("f_med_group").value=row.med_group_cust_name;
        // document.getElementById("f_delv_group").value=row.delv_group_cust_name
        // document.getElementById("f_own_hospital").value=row.own_hospital_cust_name


      }

    }
  }
};
export default extension;
