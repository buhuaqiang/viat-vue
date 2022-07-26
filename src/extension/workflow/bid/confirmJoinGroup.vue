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
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
      url: "",//加载数据的接口GetPriceDataForTransfer
      columns: [
        {field:'cust_dbid',title:'Cust ID',type:'string',width:110,require:true,align:'left',hidden:true},
        {field:'cust_id',title:'Cust ID',type:'string',width:110,require:true,align:'left',sort:true},
        {field:'cust_name',title:'Cust Name',type:'string',width:120,align:'left'},
        {field:'status',title:'Is Join',type:'string',bind:{ key:'Status3',data:[]},align:'left',edit: { type: "radio",keep:true }},
        ],
      pagination: {}, //分页配置，见voltable组件api
    };
  },
  methods: {
    openModel(data) {
      debugger
      this.model = true;
      //打开弹出框时，加载table数据
      this.$refs.mytable.rowData=data;
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
        $parent.joinGroupList=this.$refs.mytable.rowData;
        this.model = false

      });

    },
  },
};
</script>
