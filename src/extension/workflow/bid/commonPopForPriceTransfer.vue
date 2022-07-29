<template>
  <price-group-model-body ref="PriceGroupModelBody" @onSelect="onSelectPop"></price-group-model-body>
  <viat_com_cust-model-body ref="Viat_com_custModelBody" @onSelect="onSelectPop"></viat_com_cust-model-body>
</template>
<script>

  import PriceGroupModelBody from "../../price/price/PriceGroupModelBody";
  import Viat_com_custModelBody from "../../basic/cust/Viat_com_custModelBody";
  export default {
    components: {
      Viat_com_custModelBody,
      PriceGroupModelBody},
    data() {
      return {
      };
    },
    methods: {
      openPriceGroup(){
        this.$refs.PriceGroupModelBody.openModel(true,"pricegroup_dbid","onSelect")
      },
      openCustPop(){
        this.$refs.Viat_com_custModelBody.openModel(true,"cust_dbid","onSelect")
      },
      onSelectPop(fieldName,rows){
        if(rows.length!=1){
          return this.$message.error("Please select a record first.");
        }
        this.$emit("parentCall", ($parent) => {
          if(fieldName=='pricegroup_dbid'){
            $parent.editFormFields['group_id']=rows[0].group_id
            $parent.editFormFields['pricegroup_dbid']=rows[0].pricegroup_dbid
            $parent.pickEditFormPriceGroupName=rows[0].group_name;
          }else if(fieldName=='cust_dbid'){
            $parent.editFormFields['cust_id']=rows[0].cust_id
            $parent.editFormFields['cust_dbid']=rows[0].cust_dbid
            $parent.pickEditFormCustomerName=rows[0].cust_name;
            //
            $parent.initCustomerGroupInfo(rows[0].cust_dbid);
          }
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
