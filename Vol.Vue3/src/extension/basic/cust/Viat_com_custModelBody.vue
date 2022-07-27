<template>
  <VolBox
    v-model="model"
    :lazy="true"
    title="Pick Customer Data"
    :height="600"
    :width="1252"
    :padding="15"
  >
    <!-- 设置查询条件 -->
    <div style="padding-bottom: 10px">
      <span style="margin-right: 20px"></span>
      <el-input placeholder="Input Customer Code" style="width: 200px" v-model="cust_id" />
      <el-input
        placeholder="Input Customer Name"
        style="width: 200px; padding-left: 5px"
        v-model="cust_name"
      />
      <el-input

              placeholder="Input Zip Code"
              style="width: 200px; padding-left: 5px"
              v-model="zip_id"
      />
      <!--<el-select v-model="channelValue" placeholder="Select channel" style="width: 200px; padding-left: 5px">
        <el-option
                v-for="item in channelData"
                :key="item.key"
                :label="item.value"
                :value="item.key"
        >
        </el-option>
      </el-select>-->
      <el-select v-model="dohValue" placeholder="Select DOH Type" style="width: 200px; padding-left: 5px">
        <el-option
                v-for="item in dohData"
                :key="item.key"
                :label="item.value"
                :value="item.key"
        >
        </el-option>
      </el-select>
      <el-button
        type="primary"
        style="margin-left: 10px"
        size="medium"
        icon="el-icon-zoom-in"
        @click="search"
        >Inquire</el-button
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
          >Add Row</el-button
        >
        <el-button size="mini" icon="el-icon-close" @click="model = false"
          >Close</el-button
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
      returnType:"",
      flag:"",
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
      cust_name: "", //查询条件字段
      cust_id:"",
      zip_id: "",
      channelValue:"",
      dohValue:"",
      channelData:[],
      dohData:[],
      url: "api/View_com_cust/GetPopPageData",//加载数据的接口
      columns: [
        {
          field: "cust_id",
          title: "Customer Code",
          type: "string",
          width: 110,
          require: true,
          align: "left",
          sort: true,
        },
        {
          field: "cust_name",
          title: "Customer Name",
          type: "string",
          link: true,
          width: 120,
          align: "left",
        },
        {
          field: "cust_address",
          title: "Customer Address",
          type: "string",
          width: 180,
          align: "left",
        },
        {
          field: "tel_no",
          title: "Telephone",
          type: "string",
          width: 110,
          align: "left",
          hidden: true,
        },
        {field:'cust_zip_id',title:'Zip ID',type:'string',width:110,align:'left',sort:true},
        {
          field: "territory_id",
          title: "Default Zone",
          type: "string",
          width: 110,
          align: "left",
        },
        {
          field: "doh_type",
          title: "DOH Type",
          type: "string",
          bind: { key: "doh_type", data: [] },
          width: 110,
          align: "left",
        },
        {
          field: "margin_type",
          title: "Margin Type",
          type: "string",
          bind: { key: "doh_type", data: [] },
          width: 110,
          align: "left",
          hidden: true,
        },
        // {
        //   field: "status",
        //   title: "status",
        //   type: "string",
        //   bind: { key: "Status_YN", data: [] },
        //   width: 110,
        //   align: "left",
        // },
        {
          field: "modified_date",
          title: "Modified Date",
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
    getChannel(){
      //健保渠道
      this.http.post('/api/Sys_Dictionary/GetVueDictionary', ['Channel']).then((dic) => {
        this.channelData=dic[0].data;
      });
    },
    getDoh(){
      //健保渠道
      this.http.post('/api/Sys_Dictionary/GetVueDictionary', ['doh_type']).then((dic) => {
        this.dohData=dic[0].data;
      });
    },
    openModel(single,flag,returnType) {
      // this.getChannel();
      this.getDoh();
      this.single=single;
      this.model = true;
      this.flag = flag;
      this.cust_id = "";
      this.cust_name ="";
      this.zip_id = "";
      this.dohValue = "";

      this.returnType = returnType
      //打开弹出框时，加载table数据
      this.$nextTick(() => {
        this.$refs.mytable.load();
      });

    },
    /*clearData(fieldName_dbid,fieldName_id, formType) {
      this.$emit("parentCall", ($parent) => {
        if (formType == "f") {
          $parent.editFormFields[fieldName_dbid] = "";
          $parent.editFormFields[fieldName_id] = "";
        } else if (formType == "s") {
          $parent.searchFormFields[fieldName_dbid] = "";
          $parent.searchFormFields[fieldName_id] = "";
        }
        $parent.pickCustomerName="";
      });
    },*/
    search() {
      //点击搜索
      this.$refs.mytable.load();
    },
    addRow() {
      var rows = this.$refs.mytable.getSelected();
      if (!rows || rows.length == 0) {
        return this.$message.error("Please select a record first.");
      }

      if (this.returnType=="onSelect") {//多層級調用
        this.$emit("onSelect", this.flag, rows)
      }else{
        this.$emit('parentCall', $parent => {
          $parent.handleCustomerSelected(this.flag, rows);//自定義回調方法處理,在調用頁面聲明
        })
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
        params.wheres.push({ name: "cust_zip_id", value: this.zip_id,displayType:'like' });
      }
      params.wheres.push({ name: "status", value: 'Y' });
      if(this.channelValue){
        params.wheres.push({ name: "channelValue", value: this.channelValue });
      }
      if(this.dohValue){
        params.wheres.push({ name: "doh_type", value: this.dohValue });
      }
      return true;
    },
  },
};
</script>
