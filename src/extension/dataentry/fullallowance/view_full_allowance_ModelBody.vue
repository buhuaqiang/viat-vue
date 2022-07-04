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
          <span><i class="el-icon-date"></i> Sharing</span>
        </template>
        <allowance-sharing ref="allowanceSharing"></allowance-sharing>
       <!-- <div>
          <allowance-sharing ref="allowanceSharing"></allowance-sharing>
        </div>-->
       <!-- <vol-table ref="table1">
          <allowance-sharing ref="allowanceSharing"></allowance-sharing>
        </vol-table>-->
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-date"></i> Reverse</span>
        </template>

        <!--<div>
          <allowance-reverse ref="allowanceReverse"></allowance-reverse>
        </div>-->

        <vol-table ref="table2">
          <allowance-reverse ref="allowanceReverse"></allowance-reverse>
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
export default {
  components: {allowanceSharing,allowanceReverse},
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
      this.$refs.table1.load();
      this.$refs.table2.load();
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
