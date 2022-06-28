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

    /**
     *
     * @param fieldName綁定欄位
     * @param formType 表單類型f-form表單,s-查詢表單
     * @returns {function(*, {row: *, column: *, index: *}): *}
     */
    getFormRender(fieldName, formType) {//
      return (h, { row, column, index }) => {
        return h("div", { style: { color: '#0c83ff', 'font-size': '12px', cursor: 'pointer', "text-decoration": "none" } }, [
          h(
            "a",
            {
              props: {},
              style: { "color": "", "border-bottom": "1px solid", "margin-left": "9px", "text-decoration": "none" },
              onClick: (e) => {
                this.$refs.modelBody.openDemo(fieldName, formType)
              }
            },
            [h("i", { class: "el-icon-zoom-in" })],
            "選擇"
          ),
          h(
            "a",
            {
              props: {},
              style: { "color": "red", "margin-left": "9px", "border-bottom": "1px solid", "text-decoration": "none" },
              onClick: (e) => {
                this.$refs.modelBody.clearData(fieldName, formType);
              }
            },
            [h("i", { class: "el-icon-zoom-out" })],
            "清除"
          ),

        ]);
      };
    },
    /**
     *
     * @param fieldName綁定欄位
     * @param formType 表單類型f-form表單,s-查詢表單
     * @param pageType c-cust,pg-pricegroup
     * @returns {function(*, {row: *, column: *, index: *}): *}
     */
    getSearchRender(fieldName, formType) {//
      return (h, { row, column, index }) => {
        return h("div", { style: { color: '#0c83ff', 'font-size': '12px', cursor: 'pointer', "text-decoration": "none" } }, [
          h(
            "a",
            {
              props: {},
              style: { "color": "", "border-bottom": "1px solid", "margin-left": "9px", "text-decoration": "none" },
              onClick: (e) => {
                this.$refs.gridBody.openDemo(fieldName, formType);
              }
            },
            [h("i", { class: "el-icon-zoom-in" })],
            "選擇"
          ),
          h(
            "a",
            {
              props: {},
              style: { "color": "red", "margin-left": "9px", "border-bottom": "1px solid", "text-decoration": "none" },
              onClick: (e) => {
                this.$refs.gridBody.clearData(fieldName, formType);
              }
            },
            [h("i", { class: "el-icon-zoom-out" })],
            "清除"
          ),

        ]);
      };
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
      this.boxOptions.labelWidth = 180;
      //显示查询全部字段
      //this.setFiexdSearchForm(true);
      //设置查询表单的标签文字宽度
      this.labelWidth = 180;
      //表格设置为单选
      this.single=true;

      //let data = { Variety: '1', AvgPrice: 888 };
      //this.$refs.myform.reset(data);

      //是否自动绑定select/checkboxt等标签的数据源
      //this.loadKey=true;

      let comCity = this.getOption("cust_city_name");
      let invoiceCity = this.getOption("invoice_city_name");
      let comZipId = this.getOption("cust_zip_id");
      let invoiceZipId = this.getOption("invoice_zip_id");


      comCity.onChange = (val, option) => {
        this.editFormFields.cust_zip_id = '';//清除原來選擇的數據
        this.getCityZoneData(val, comZipId);
      }

      invoiceCity.onChange = (val, option) => {
        this.editFormFields.invoice_zip_id = '';
        this.getCityZoneData(val, invoiceZipId);
      }

      let ownHospital = this.getOption("own_hospitalname");
      ownHospital.extra = {
        render: this.getFormRender("own_hospital", 'f')
      }

      let med_group = this.getOption("med_groupname");
      med_group.extra = {
        render: this.getFormRender("med_group", 'f')

      }

      let delv_group = this.getOption("delv_groupname");
      delv_group.extra = {
        render: this.getFormRender("delv_group", 'f')
      }


      let searchdelv_groupname = this.getSearchOption("delv_groupname");
      let searchdelv_group = this.getSearchOption("delv_group");
      searchdelv_group.hidden = true
      searchdelv_groupname.readonly = true
      searchdelv_groupname.extra = {
        render: this.getSearchRender("delv_group", "s", "c")
      }

      let searchown_hospitalname = this.getSearchOption("own_hospitalname");
      let searchown_hospital = this.getSearchOption("own_hospital");
      searchown_hospital.hidden = true
      searchown_hospitalname.readonly = true
      searchown_hospitalname.extra = {
        render: this.getSearchRender("own_hospital", "s", "c")
      }

      let searchmed_groupname = this.getSearchOption("med_groupname");
      let searchmed_group = this.getSearchOption("med_group");
      searchmed_groupname.readonly = true
      searchmed_group.hidden = true
      searchmed_groupname.extra = {
        render: this.getSearchRender("med_group", "s", "c")
      }

    },
    onInited() {
      //this.height = this.height-60
      //框架初始化配置后
      //隐藏不需要的按钮
      this.detailOptions.buttons.forEach(but => {
        if (but.value == 'import' || but.value == 'export') {
          but.hidden = true;
        }
      })
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
    modelOpenAfter(row) {
      //点击编辑、新建按钮弹出框后，可以在此处写逻辑，如，从后台获取数据
      //(1)判断是编辑还是新建操作： this.currentAction=='Add';
      //(2)给弹出框设置默认值
      //(3)this.editFormFields.字段='xxx';
      //如果需要给下拉框设置默认值，请遍历this.editFormOptions找到字段配置对应data属性的key值
      //看不懂就把输出看：console.log(this.editFormOptions)
      this.getOption("cust_id").disabled = this.currentAction == this.const.EDIT || this.currentAction==this.const.VIEW;
      this.getOption("cust_id").hidden = this.currentAction == this.const.ADD;
      this.getOption("cust_id").required = this.currentAction == this.const.EDIT;
      this.getOption("cust_id").cust_id = "C0000";

      let ownHospital = this.getOption("own_hospitalname");
      let med_group = this.getOption("med_groupname");
      let delv_group = this.getOption("delv_groupname");
      ownHospital.disabled=true;
      med_group.disabled=true;
      delv_group.disabled=true;

      if (this.currentAction == 'update') {
        let comZipId = this.getOption("cust_zip_id");
        let invoiceZipId = this.getOption("invoice_zip_id");
        // let test=comZipId.data;
        // let test1=invoiceZipId.data;
        // this.comData=test.filter(t=>t.key==row.cust_zip_id)
        // this.invoiceData=test1.filter(t=>t.key==row.invoice_zip_id)
        let cityName1 = this.editFormFields.cust_city_name;
        let cityName2 = this.editFormFields.invoice_city_name;
        //初始化客户地址和发票地址的区域下拉选择
        this.getCityZoneData(cityName1, comZipId);
        this.getCityZoneData(cityName2, invoiceZipId);
        /*this.http.post('/api/Sys_Dictionary/GetVueDictionary', ['viat_city_zone']).then((dic) => {
          let data1=dic[0].data;
          comZipId.data=data1;
          invoiceZipId.data=data1;
        });*/
      }

    }
  }
};
export default extension;
