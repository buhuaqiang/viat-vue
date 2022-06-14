<template>
  <div style="padding: 0 4px;border-top: 10px solid #eee;">
    <h3 >
      <i class="ivu-icon ivu-icon-ios-information-circle-outline"></i>價格群組客戶列表
    </h3>
    <div style="padding:10px;background: white;padding-top: 0;">
      <vol-table ref="tableList"
                 :loadKey="true"
                 :columns="columns"
                 :pagination-hide="true"
                 :height="210"
                 :defaultLoadPage="false"
                 @loadBefore="loadBefore"
                 url="/api/View_cust_custgroup_pricegroup/GetPageData"
                 :row-index="true"
                 :index="false"></vol-table>
    </div>
  </div>
</template>

<script>
import VolTable from "@/components/basic/VolTable.vue";
export default {
  components: {
    VolTable
  },
  methods: {
    loadBefore (params, callback) {

      return callback(true);
    },

  },
  data () {
    return {
      tableData: [],
      //从生成的代码sellorder2.vue里面把明细配置复制过来就能用
      columns:  [
        {field:'cust_id',title:'cust_id',type:'string',width:110,align:'left',sort:true},
        {field:'cust_name',title:'trans_date',type:'datetime',width:150,require:true,align:'left',sort:true},
        {field:'status',title:'status',type:'string',bind:{ key:'Status_YN',data:[]},width:110,align:'left'},
        {field:'custGroupStatus',title:'custGroupStatus',type:'string',bind:{ key:'Status_YN',data:[]},width:110,align:'left'}
        ]
    }
  }
}
</script>
<style scoped>
 h3{
     font-weight: 500;
    padding-left: 10px;
    background: white;
    margin-top: 8px;
    padding-bottom: 5px;
 }
</style>
