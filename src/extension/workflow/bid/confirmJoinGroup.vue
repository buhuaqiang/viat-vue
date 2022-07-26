<template>
  <VolBox
    v-model="model"
    :lazy="true"
    title="Join Price Group"
    :height="600"
    :width="1500"
    :padding="15"
  >
    <!-- 设置查询条件 -->


    <!-- vol-table配置的这些属性见VolTable组件api文件 -->
    <vol-table
      ref="mytable"
      :loadKey="true"
      :tableData="selectedData"
      :columns="columns"
      :pagination="pagination"
      :pagination-hide="true"
      :max-height="420"
      :index="true"
      :single="single"
      :defaultLoadPage="defaultLoadPage"
      @loadBefore="loadTableBefore"
    ></vol-table>
    <template #footer>
      <div>
        <el-button
                size="mini"
                type="primary"
                icon="el-icon-plus"
                @click="confirmJoinGroup()"
        >Confirm Join</el-button
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
      single: false,//默認單選
      selectedData:[],//被選中的數據
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
      url: "",//加载数据的接口GetPriceDataForTransfer
      columns: [
        {field:'cust_dbid',title:'Cust ID',type:'string',width:110,require:true,align:'left',hidden:true},
        {field:'status',title:'Is Join',bind:{ key:'Status3',data:[]},type:'string',width:110,align:'left',edit: { type: "select",keep:true }},
        {field:'cust_id',title:'Cust ID',type:'string',width:110,require:true,align:'left',sort:true},
        {field:'cust_name',title:'Cust Name',type:'string',width:120,align:'left'},
        {field:'prod_id',title:'Product ID',type:'string',width:110,require:true,align:'left',sort:true},
        {field:'prod_ename',title:'Product Name',type:'string',width:120,align:'left'},
        {field:'invoice_price',title:'Invoice Price',type:'decimal',width:120,align:'right'},
        {field:'net_price',title:'Net Price',type:'decimal',width:120,align:'right'},
        {field:'min_qty',title:'Min Qty',type:'decimal',width:120,align:'right'},
        {field:'start_date',title:'Start Date',type:'date',width:120,align:'center'},
        {field:'end_date',title:'End Date',type:'date',width:120,align:'center'},
        {field:'status',title:'Status',type:'string',bind:{ key:'Status_YN',data:[]},align:'left'},
        ],
      pagination: {}, //分页配置，见voltable组件api
    };
  },
  methods: {
    openModel(data) {
      debugger
      this.model = true;
      //打开弹出框时，加载table数据
      this.selectedData=data;
    },

    confirmJoinGroup(){
      /*this.$emit('parentCall', $parent => {
        $parent.handleConfirmJoinGroup(this.$refs.mytable.rowData);//自定義回調方法處理,在調用頁面聲明
      })*/
      this.$confirm("Are you sure to join group?", "Confirm", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning",
        center: true,
      }).then(() => {
        let $parent;
        this.$emit("parentCall", ($this) => {
          $parent = $this;
        });
        $parent.joinGroupList=this.$refs.mytable.getSelected();
        $parent.save();
        this.model = false
      });

    },
  },
};
</script>
