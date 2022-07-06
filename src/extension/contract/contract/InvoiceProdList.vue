<template>
  <div style="padding: 0 4px;border-top: 10px solid #eee;">
    <div class="desc-text" style="height: 40px;padding-top: 10px;">
      <i class="el-icon-s-grid"></i> Shipping Product List
    </div>
    <div style="padding:10px;background: white;padding-top: 0;">
      <vol-table ref="tableList"
                 :loadKey="true"
                 :columns="columns"
                 :pagination-hide="true"
                 :height="210"
                 :defaultLoadPage="false"
                 @loadBefore="loadBefore"
                 url="/api/View_app_power_contract_ship_data_prod_list/GetPageData"
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
      debugger
      //this.$refs.tableList.load();
      //return true;
      return callback(true);
    },

  },
  data () {
    return {
      tableData: [],
      //从生成的代码sellorder2.vue里面把明细配置复制过来就能用
      columns:  [{field:'invoice_no',title:'invoice_no',type:'string',width:110,align:'left',sort:true},
        {field:'trans_date',title:'trans_date',type:'datetime',width:150,require:true,align:'left',sort:true},
        {field:'custId',title:'custId',type:'string',width:120,align:'left'},
        {field:'custName',title:'custName',type:'string',width:120,align:'left'},
        {field:'prod_id',title:'prod_id',type:'string',width:110,align:'left'},
        {field:'prod_ename',title:'prod_ename',type:'string',width:110,hidden:true,align:'left'},
        {field:'prod_cname',title:'prod_cname',type:'string',width:110,hidden:true,align:'left'},
        {field:'prod_sname',title:'prod_sname',type:'string',width:110,align:'left'},
        {field:'qty',title:'qty',type:'decimal',width:110,align:'left'}
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
