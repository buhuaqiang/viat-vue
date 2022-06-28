<template>
  <VolBox
    v-model="model"
    :lazy="true"
    title="選擇客戶數據"
    :height="600"
    :width="1252"
    :padding="15"
  >
    <!-- 设置查询条件 -->
    <div style="padding-bottom: 10px">
      <span style="margin-right: 20px">请选择数据</span>
      <el-input placeholder="客戶編號" style="width: 200px" v-model="cust_id" />
      <el-input
        placeholder="客戶名稱"
        style="width: 200px; padding-left: 5px"
        v-model="cust_name"
      />
      <el-input

              placeholder="郵區代碼"
              style="width: 200px"
              v-model="zip_id"
      />
      <el-button
        type="primary"
        style="margin-left: 10px"
        size="medium"
        icon="el-icon-zoom-out"
        @click="search"
        >搜索</el-button
      >
    </div>

    <!-- vol-table配置的这些属性见VolTable组件api文件 -->
    <vol-table
      ref="mytable"
      :loadKey="true"
      :columns="columns"
      :pagination="pagination"
      :pagination-hide="false"
      :max-height="420"
      :url="url"
      :index="true"
      :single="single"
      :defaultLoadPage="defaultLoadPage"
      @loadBefore="loadTableBefore"
      @loadAfter="loadTableAfter"
      @rowClick="rowClick"
    ></vol-table>
    <!-- 设置弹出框的操作按钮 -->
    <template #footer>
      <div>
        <el-button
          size="mini"
          type="primary"
          icon="el-icon-plus"
          @click="addRow()"
          >添加选择的数据</el-button
        >
        <el-button size="mini" icon="el-icon-close" @click="model = false"
          >关闭</el-button
        >
      </div>
    </template>
  </VolBox>
</template>
<script>
import VolBox from "@/components/basic/VolBox.vue";
import VolTable from "@/components/basic/VolTable.vue";
export default {
  components: {
    VolBox: VolBox,
    VolTable: VolTable,
  },
  data() {
    return {
      model: false,
      single: true,
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
      cust_name: "", //查询条件字段
      cust_id:"",
      zip_id: "",
      fieldName:"",//編輯字段,用於回傳設置值
      formType:"f",//弹框打开的form类型,f-editFormFields  s-searchFormFields,ext-自定義擴展(价格群组invalid调用页面)
      url: "api/View_com_cust/GetPopPageData",//加载数据的接口
      columns: [
        {
          field: "cust_id",
          title: "客戶編號",
          type: "string",
          width: 110,
          require: true,
          align: "left",
          sort: true,
        },
        {
          field: "cust_name",
          title: "客戶名",
          type: "string",
          link: true,
          width: 120,
          align: "left",
        },
        {
          field: "cust_address",
          title: "客戶地址",
          type: "string",
          width: 180,
          align: "left",
        },
        {
          field: "tel_no",
          title: "聯繫電話",
          type: "string",
          width: 110,
          align: "left",
        },
        {field:'zip_id',title:'郵區代碼',type:'string',width:110,align:'left',sort:true},
        {
          field: "territory_id",
          title: "默認區域",
          type: "string",
          width: 110,
          align: "left",
        },
        {
          field: "doh_type",
          title: "健保類別",
          type: "string",
          bind: { key: "doh_type", data: [] },
          width: 110,
          align: "left",
        },
        {
          field: "margin_type",
          title: "毛利類別",
          type: "string",
          bind: { key: "doh_type", data: [] },
          width: 110,
          align: "left",
        },
        {
          field: "status",
          title: "status",
          type: "string",
          bind: { key: "Status2", data: [] },
          width: 110,
          align: "left",
        },
        {
          field: "modified_date",
          title: "最后修改时间",
          type: "datetime",
          width: 150,
          align: "left",
          sort: true,
        },
      ],

      pagination: {}, //分页配置，见voltable组件api
    };
  },
  methods: {
    openMulity(fieldName, formType){
      this.single=false;
      this.openDemo(fieldName,formType);
    },
    openDemo(fieldName, formType) {
      this.model = true;
      this.fieldName = fieldName;
      if (formType) this.formType = formType;


      //打开弹出框时，加载table数据
      this.$nextTick(() => {
        this.$refs.mytable.load();
      });
    },
    clearData(fieldName, formType) {
      this.$emit("parentCall", ($parent) => {
        debugger;
        if (formType == "f") {
          $parent.editFormFields[fieldName] = "";
          $parent.editFormFields[fieldName + "name"] = "";
        } else if (formType == "s") {
          $parent.searchFormFields[fieldName] = "";
          $parent.searchFormFields[fieldName + "name"] = "";
        }
      });
    },
    search() {
      //点击搜索
      this.$refs.mytable.load();
    },
    addRow() {
      var rows = this.$refs.mytable.getSelected();
      if (!rows || rows.length == 0) {
        return this.$message.error("請選擇數據");
      }

      let path = this.$route.path;
      if(path =="/view_dist_margin"  && this.formType=='mf'){//
        let selectrows = [];//将勾选值设置成数组
        rows.forEach(row=>{
          selectrows.push({"key":row.cust_dbid,"value":row.cust_name});
        })
        this.$emit('parentCall', $parent => {//選擇數據後賦值
          $parent.editFormOptions.forEach(x => {
            x.forEach(item => {
              if (item.field == 'custs') {
                item.data = selectrows;//將選中的數據賦值到下拉框的數組中
                item.data.forEach(a=>{//將值回顯到頁面，push(key)會將頁面顯示的值在多選框中標識出來，push(value)不會
                  $parent.editFormFields.custs.push(a.key)
                })
              }
            })
          })
          this.model=false;
        })
      }
      else if ((path == '/View_app_power_contract_main' && this.formType == 'f') || this.formType=='ext' || (path == '/View_app_hp_contract')){//多層級調用
        this.$emit("onSelect", this.fieldName, rows)
      }else if (path === '/view_com_dist' && this.formType === 'f'){
        this.$emit("parentCall", ($parent) => {
          if(this.formType=='f'){
            $parent.editFormFields['cust_id'] = rows[0].cust_id;
            $parent.editFormFields['cust_dbid'] = rows[0].cust_dbid;
          }
        });
      }else{
        //回写数据到表单
        this.$emit("parentCall", ($parent) => {
          //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)
          if (this.formType == "f") {
            $parent.editFormFields[this.fieldName] = rows[0].cust_dbid;
            $parent.editFormFields[this.fieldName + "name"] =
              rows[0].cust_id + " " + rows[0].cust_name;
            $parent.handleFormSelected(rows);//自定義回調方法處理,在調用頁面聲明
          } else if (this.formType == "s") {
            $parent.searchFormFields[this.fieldName] = rows[0].cust_dbid;
            $parent.searchFormFields[this.fieldName + "name"] =
              rows[0].cust_id + " " + rows[0].cust_name;
          }

        });
        //this.$emit("handleSelected",rows);
      }

      //关闭当前窗口
      this.model = false;
    },
    rowClick({ row, column, event }) {
      //查询界面点击行事件
      this.$refs.mytable.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
    },
    //这里是从api查询后返回数据的方法
    loadTableAfter(row) {
      //   let url="";
      // this.http.get(url, params, true).then((result) => {
      //     this.da
      // });
    },
    loadTableBefore(params) {
      //查询前，设置查询条件
      if (this.cust_name) {
        params.wheres.push({
          name: "cust_name",
          value: this.cust_name,
          displayType: "like",
        });
      }
      if (this.cust_id) {
        params.wheres.push({
          name: "cust_id",
          value: this.cust_id,
          displayType: "like",
        });
      }
      if (this.zip_id) {
        params.wheres.push({ name: "zip_id", value: this.zip_id,displayType:'like' });
      }
      return true;
    },
  },
};
</script>
