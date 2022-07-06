<template>
  <div class="vol-tabs">
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
        <nhi-adjust-detail ref="nhiAdjustDetail" @parentCall="parentCall"></nhi-adjust-detail>
        </vol-table>
       <!-- <div>
          <allowance-sharing ref="allowanceSharing"></allowance-sharing>
        </div>-->
       <!-- <vol-table ref="table1">
          <allowance-sharing ref="allowanceSharing"></allowance-sharing>
        </vol-table>-->
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

    modelOpen() {
      debugger
      let $parent;
      //获取生成页面viewgrid的对象
      this.$emit("parentCall", ($this) => {
        $parent = $this;
      });
      debugger
      $parent.boxOptions.height=1600;
      $parent.boxOptions.width=1500;
      this.nhiadjustm_dbid = $parent.editFormFields.nhiadjustm_dbid;

      //写入缓存对象(xxx为全局缓存的唯一key)
      this.$store.getters.data().nhiadjustm_dbid=this.nhiadjustm_dbid;
      debugger
      // this.$refs.table2.load();
    },
    parentCall(pid){
      debugger
      return this.nhiadjustm_dbid
    },
    // modelOpenAfter(row) {
    //   debugger
    //   this.$emit("parentCall", ($parent) => {
    //     $parent = $this;
    //     let test = $parent.editFormFields.nhiadjustm_dbid;
    //     this.editFormFields.nhiadjustm_dbid = test;
    //     let a = 0;
    //   });
    // }
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
