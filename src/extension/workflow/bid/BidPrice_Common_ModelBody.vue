<template>
  <bath-insert-bid-price ref="BathInsertBidPrice" @onSave="saveCustPrice"></bath-insert-bid-price>
</template>
<script>
//开发一对多从表需要参照voltable与viewgrid组件api
import VolTable from "@/components/basic/VolTable.vue";
import prodModelBody from   "../../basic/prod/View_com_prod_pop_query.vue";
import BathInsertBidPrice from "./BathInsertBidPrice";
export default {
  components: {
    BathInsertBidPrice, VolTable ,prodModelBody},
  data() {
    return {
    };
  },
  methods: {

    openBathAddCustPage(){
      this.$refs.BathInsertBidPrice.openDemo();
    },

    saveCustPriceDetail(){
      this.$emit("parentCall", ($parent) => {
        $parent.search();
      });
    },
    saveCustPrice(){
      this.$emit("parentCall", ($parent) => {
        $parent.search();
      });
    },

  },
};
</script>
<style lang="less" scoped>
.vol-tabs {
  background: white;
}
</style>
