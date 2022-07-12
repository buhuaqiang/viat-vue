<template>
  <invalid-data-page ref="InvalidDataPage"></invalid-data-page>
  <bath-insert-cust-price ref="BathInsertCustPrice" ></bath-insert-cust-price>
  <BathInsertCustPriceDetail ref="BathInsertCustPriceDetail"></BathInsertCustPriceDetail>
</template>
<script>
//开发一对多从表需要参照voltable与viewgrid组件api
import VolTable from "@/components/basic/VolTable.vue";
import custmModelBody from  '../../basic/cust/Viat_com_custModelBody.vue'; //'@/extension/basic/cust/Viat_com_custModelBody'
import prodModelBody from   "../../basic/prod/View_com_prod_pop_query.vue";
import PriceGroupModelBody from "../../price/price/PriceGroupModelBody";
import InvalidDataPage from "./InvalidDataPage";
import BathInsertCustPrice from "./BathInsertCustPrice";
import BathInsertCustPriceDetail from "./BathInsertCustPriceDetail";
export default {
  components: {
    BathInsertCustPriceDetail,
    BathInsertCustPrice, InvalidDataPage, PriceGroupModelBody, VolTable ,custmModelBody,prodModelBody},
  data() {
    return {
    };
  },
  methods: {
   openInvalidPage(){
     this.$refs.InvalidDataPage.openDemo();
   },
    openBathAddCustPage(){
      this.$refs.BathInsertCustPrice.openDemo();
    },
    openBathAddCustDetailPage(){
      this.$refs.BathInsertCustPriceDetail.openDemo();
    },
    custPriceSearch(){

    },

  },
};
</script>
<style lang="less" scoped>
.vol-tabs {
  background: white;
}
</style>
