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

      <el-select v-model="contstretagyValue" placeholder="Select price stretagy" style="width: 200px; padding-left: 5px">
        <el-option
                v-for="item in contstretagyData"
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
      :single=single
      :defaultLoadPage=defaultLoadPage
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
import {ref} from "vue";
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
      contstretagyValue:"",
      contstretagyData:[],
      url: "api/View_wk_cont_stretagy_detail_main/GetPageData",//加载数据的接口
      columns : [
        {field:'cont_stretagy_id',title:'Stretagy ID',type:'string',width:110,require:true,align:'left',sort:true},
        {field:'cont_stretagy_name',title:'Stretagy Name',type:'string',width:110,require:true,align:'left',sort:true},
        {field:'prod_id',title:'列名prod_id',type:'string',width:110,require:true,align:'left',sort:true},
        {field:'prod_ename',title:'Product Ename',type:'string',width:110,align:'left'},
        {field:'prod_cname',title:'Product Cname ',type:'string',width:120,align:'left'},
        {field:'nhi_price',title:'NHI Price',type:'decimal',width:110,align:'left'},
        {field:'invoice_price',title:'Invoice Price',type:'decimal',width:110,align:'left'},
        {field:'net_price',title:'Net Price',type:'decimal',width:110,align:'left'},
        {field:'min_qty',title:'Min Qty',type:'int',width:110,align:'left'},
        {field:'prod_type',title:'Product Type',type:'string',width:110,align:'left'},
        {field:'contstretail_dbid',title:'列名contstretail_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
        {field:'modified_date',title:'列名modified_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
        {field:'modified_clientusername',title:'列名modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
        {field:'modified_client',title:'列名modified_client',type:'int',width:110,hidden:true,align:'left'},
        {field:'modified_username',title:'列名modified_username',type:'string',width:110,hidden:true,align:'left'},
        {field:'modified_user',title:'列名modified_user',type:'int',width:110,hidden:true,align:'left'},
        {field:'created_date',title:'列名created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
        {field:'created_client',title:'列名created_client',type:'int',width:110,hidden:true,align:'left'},
        {field:'created_username',title:'列名created_username',type:'string',width:110,hidden:true,align:'left'},
        {field:'created_user',title:'列名created_user',type:'int',width:110,hidden:true,align:'left'},
        {field:'prod_dbid',title:'列名prod_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
        {field:'contstret_dbid',title:'列名contstret_dbid',type:'guid',bind:{ key:'Viat_wk_contract_stretagy',data:[]},width:110,hidden:true,require:true,align:'left'},
        {field:'created_clientusername',title:'列名created_clientusername',type:'string',width:110,hidden:true,align:'left'}],


      pagination: {}, //分页配置，见voltable组件api
    };
  },
  methods: {
    getPricestretagyData(){
      //健保渠道
      this.http.post('/api/Sys_Dictionary/GetVueDictionary', ['Viat_wk_contract_stretagy']).then((dic) => {
        this.contstretagyData=dic[0].data;
      });
    },
    openModel(single,flag,returnType) {
      this.getPricestretagyData();
      this.single=single;
      this.model = true;
      this.flag = flag;
      this.returnType = returnType
     /* //打开弹出框时，加载table数据
      this.$nextTick(() => {
        this.$refs.mytable.load();
      });*/

    },

    search() {
      if(!this.contstretagyValue){
        this.$Message.error("Please Select contract stretagy")
        return false;
      }
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
      if(this.contstretagyValue){
        params.wheres.push({ name: "contstret_dbid", value: this.contstretagyValue });
        return true;
      }else{
        this.$Message.error("Please Select contract stretagy")
        return false;
      }

    },
  },
};
</script>
