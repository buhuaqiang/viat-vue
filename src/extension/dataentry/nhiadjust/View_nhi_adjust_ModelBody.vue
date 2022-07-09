<template>
  <div v-if="showFlag" class="vol-tabs">
    <el-tabs type="border-card" style="
        min-height: 370px;
        box-shadow: none;
        border-bottom: 0;
        border-top: 1px solid #eee;
      ">
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-date"></i> NHIAdjustDetail</span>
        </template>
        <vol-table ref="table1">
        <nhi-adjust-detail ref="nhiAdjustDetail"></nhi-adjust-detail>
        </vol-table>
      </el-tab-pane>
    </el-tabs>
  </div>


</template>
<script>
//开发一对多从表需要参照voltable与viewgrid组件api
import VolTable from "@/components/basic/VolTable.vue";
import custmModelBody from  '../../basic/cust/Viat_com_custModelBody.vue'; //'@/extension/basic/cust/Viat_com_custModelBody'
import nhiAdjustDetail from   "@/views/dataentry/nhiadjust/View_nhi_adjust_detail.vue";

export default {
  components: {nhiAdjustDetail,},
  data() {
    return{
      nhiadjustm_dbid:"",
      showFlag:true,
      table1RowData:"",
      // delTable1RowData:[],
    }

  },
  methods: {
    //如果要获取页面的参数请使用 this.$emit("parentCall",见下面的使用方法
    //shareTable查询显示
    loadBefore(params, callback) {
      //设置查询 条件
      var _row;
      //获取主表选中的行
      alert("11")
      //设置查询条件，用主表id加载明细表数据(如果是自己定义的接口，这里条件自己处理)
      params.value =$parent.editFormFields.nhiadjustm_dbid;
      return callback(true);
    },

    modelOpen() {
      let $parent;
      //获取生成页面viewgrid的对象
      this.$emit("parentCall", ($this) => {
        $parent = $this;
      });
      if ($parent.currentAction == "Add") {
        this.showFlag = false;
        $parent.boxOptions.height=400;
        $parent.boxOptions.width=1400;
      }else{
        let aa =$parent.editFormFields.nhiadjustm_dbid;
        this.showFlag = true;
        $parent.boxOptions.height=800;
        $parent.boxOptions.width=1400;
        //写入缓存对象(xxx为全局缓存的唯一key)
        this.nhiadjustm_dbid = $parent.editFormFields.nhiadjustm_dbid;
        this.$store.getters.data().nhiadjustm_dbid=this.nhiadjustm_dbid;
        //執行查詢
        this.$refs.nhiAdjustDetail.$refs.grid.search();

      }

      //this.nhiadjustm_dbid = $parent.editFormFields.nhiadjustm_dbid;

      //写入缓存对象(xxx为全局缓存的唯一key)
      //this.$store.getters.data().nhiadjustm_dbid=this.nhiadjustm_dbid;

      // this.$refs.table2.load();
    },
   /* parentCall(pid){
      return this.nhiadjustm_dbid
    },*/
  },
};
</script>
<style lang="less" scoped>
.vol-tabs {
  background: white;
}
.view-header .desc-text{
  display: none;
}

</style>
