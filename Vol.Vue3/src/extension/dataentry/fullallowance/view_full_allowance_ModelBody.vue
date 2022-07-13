<template>
  <div class="vol-tabs">
    <el-tabs type="border-card" style="
        min-height: 370px;
        box-shadow: none;
        border-bottom: 0;
        border-top: 1px solid #eee;
      ">
      <el-tab-pane ref="table1">
        <template #label>
          <span><i class="el-icon-date"></i> Sharing</span>
        </template>
        <allowance-sharing ref="allowanceSharing"></allowance-sharing>
      </el-tab-pane>

      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-date"></i> Reverse</span>
        </template>
        <vol-table ref="table2">
          <allowance-reverse ref="allowanceReverse"></allowance-reverse>
        </vol-table>
      </el-tab-pane>

      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-date"></i> Adjustment</span>
        </template>
        <vol-table ref="table3">
          <allowance-adjustment ref="allowanceAdjustment"></allowance-adjustment>
        </vol-table>
      </el-tab-pane>

      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-date"></i> Summary</span>
        </template>
        <vol-table ref="table4">
         <allowance-summary ref="allowanceSummary"></allowance-summary>
        </vol-table>
      </el-tab-pane>
    </el-tabs>
  </div>


</template>
<script>
//开发一对多从表需要参照voltable与viewgrid组件api
import VolTable from "@/components/basic/VolTable.vue";
import custmModelBody from  '../../basic/cust/Viat_com_custModelBody.vue'; //'@/extension/basic/cust/Viat_com_custModelBody'
import allowanceSharing from   "@/views/dataentry/fullallowance/View_full_allowance_sharing.vue";
import allowanceReverse from "@/views/dataentry/fullallowance/View_full_allowance_reverse.vue";
import allowanceAdjustment from "@/views/dataentry/fullallowance/View_full_allowance_adjustment.vue";
import allowanceSummary from "@/views/dataentry/fullallowance/View_full_allowance_summary.vue";
export default {
  components: {allowanceSharing,allowanceReverse,allowanceAdjustment,allowanceSummary},
  data() {

  },
  methods: {
    //如果要获取页面的参数请使用 this.$emit("parentCall",见下面的使用方法
    //shareTable查询显示

    modelOpen() {
      let $parent;
      //获取生成页面viewgrid的对象
      this.$emit("parentCall", ($this) => {
        $parent = $this;
      });
      $parent.boxOptions.height=600;
      $parent.boxOptions.width=1500;
      //this.$refs.table1.load();
      //this.$refs.table2.load();
    }

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
