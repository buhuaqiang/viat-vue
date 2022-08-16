<template>
    <VolBox
            :width="1500"
            :height="800"
            v-model="modifyOptions.model"
            title="Approve Page"
    >
       <wkCustomerApprove v-if="modifyOptions.cust_model" ref="wkCustomerApprove"></wkCustomerApprove>
        <wkApproveMainSubmit v-if="modifyOptions.approve_model" ref="wkApproveMainSubmit"></wkApproveMainSubmit>
        <wkBidPriceApprove v-if="modifyOptions.bidprice_model" ref="wkBidPriceApprove"></wkBidPriceApprove>
        <template #footer>
            <div style="text-align: right;">
                <el-button
                        type="success"
                        size="mini"
                        icon="el-icon-circle-check"
                        @click="toSubmit('Agree')"
                >Agree</el-button>
                <el-button
                        type="danger"
                        size="mini"
                        icon="el-icon-circle-close"
                        @click="toSubmit('Reject')"
                >Reject</el-button>
                <el-button
                        type="primary"
                        size="mini"
                        icon="el-icon-close"
                        @click="doCancel()"
                >Close</el-button>
            </div>
        </template>
    </VolBox>

</template>
<script>
    import VolForm from "@/components/basic/VolForm.vue";
    import VolBox from "@/components/basic/VolBox.vue";
    import wkCustomerApprove from "./wk_customer_approve";
    import wkApproveMainSubmit from "./wk_approve_main_submit";
    import wkBidPriceApprove from "./wk_bid_price_approve";
    export default {
        components: {
            VolForm,
            VolBox,
            wkCustomerApprove,
            wkApproveMainSubmit,
            wkBidPriceApprove
        },
        methods: {

            openModel(apply_type,bid_no) {
                this.modifyOptions.model = true;
                if(apply_type=="01" || apply_type=='02'){

                    this.modifyOptions.cust_model=true;
                    this.modifyOptions.bidprice_model = false;
                    this.$nextTick(() => {
                        this.$refs.wkCustomerApprove.initForm(bid_no);
                    });
                }else if(apply_type=="03"){
                    this.modifyOptions.bidprice_model = true;
                    this.modifyOptions.cust_model=false;
                    this.$nextTick(() => {
                        this.$refs.wkBidPriceApprove.initForm(bid_no);
                    });
                }
            },
            toSubmit(approve_status){
                this.modifyOptions.approve_model = true;
                this.$nextTick(() => {
                    this.$refs.wkApproveMainSubmit.openModel(approve_status);
                });
            },
            doCancel(){
                this.modifyOptions.model = false;
            }

        },
        created() {

        },
        data() {
            return {
                modifyOptions: {
                    model: false,
                    cust_model:false,
                    bidprice_model :false,
                    approve_model:false

                },

            };
        },
    };
</script>


