<template>

    <div style="padding:10px;20px;">
        <VolForm
                ref="pwd"
                :formRules="editFormOptions"
                :formFields="editFormFields"
                labelWidth="180"
        ></VolForm>
    </div>
  <bathInsertBidPrice ref="bathInsertBidPrice" @parentCall="parentCall"></bathInsertBidPrice>


</template>
<script>
    import VolForm from "@/components/basic/VolForm.vue";
    import VolBox from "@/components/basic/VolBox.vue";
    import  bathInsertBidPrice from "../bid/BathInsertBidPrice"
    import {ref} from "vue";
    export default {
        components: {
            VolForm,
            VolBox,
            bathInsertBidPrice,
        },
        methods: {

            initForm(bid_no) {
                let url = "api/View_wk_bid_price_apply_main/getPageData";
                let params = {
                    order: "desc",
                    page: 1,
                    rows: 30,
                    wheres: "[{\"name\":\"bid_no\",\"value\":\""+bid_no+"\",\"displayType\":\"text\"}]"
                }

                this.http.post(url,  params,true).then((x) => {
                    if (x.rows.length==0) {
                        return this.$message(x.message);
                    }
                    let bidprice = x.rows[0];

                    this.editFormOptions.forEach((option) => {
                        option.forEach((x) => {
                            let field = x.field
                            let value = bidprice[field]
                            this.editFormFields[field]=value;
                            x.disabled = true
                        });
                    });
                    this.$refs.bathInsertBidPrice.openModel()

                });
            },
            parentCall(fun) {
                if (typeof fun != 'function') {
                    return console.log('扩展组件需要传入一个回调方法才能获取父级Vue对象');
                }
                fun(this);
            },


        },
        created() {

        },


        data() {
            return {
                modifyOptions: {
                    model: false,
                },
                currentAction:"view",
                binging: [{}],
                editFormFields :{"bidmast_dbid":"","bid_no":"","contstret_dbid":"","cont_stretagy_id":"","cont_stretagy_name":"","apply_type":"","cust_id":"","cust_name":"","group_id":"","group_name":"","cust_dbid":"","pricegroup_dbid":"","isgroup":"","bid_date":"","start_date":"","end_date":"","upload":"","remarks":"","cust_exists_group_id":"","cust_exists_group_name":"","territory_id":""},
                editFormOptions :[[ {"dataKey":"ApprovalType","data":[],"title":"Apply Type","required":true,"field":"apply_type","type":"select"},
                    {"title":"Bid NO","field":"bid_no","type":"text",readonly:true},
                    {"title":"bidmast dbid","field":"bidmast_dbid",hidden:true},
                    {"title":"contstret_dbid","field":"contstret_dbid",hidden:true},
                    {"title":"cont_stretagy_id","field":"cont_stretagy_id",hidden:true},
                    {"title":"cont_stretagy_name","field":"cont_stretagy_name",hidden:true}],
                    [{"dataKey":"CustomerType","data":[],"title":"Apply Option ","required":true,"field":"isgroup","type":"radio"},
                        {"title":"Customer DBID","field":"cust_dbid","type":"text",hidden:true},
                        {"title":"Customer ID","field":"cust_id","type":"text"},
                        { title: "Customer Name", field: "cust_name", align: "left",hidden: true},
                        {"title":"Group DBID","field":"pricegroup_dbid","type":"text",hidden:true},
                        {"title":"Group ID","field":"group_id","type":"text"},
                        { title: "Group Name", field: "group_name", align: "left",hidden: true}],
                    [{"title":"Customer In Group ID ","field":"cust_exists_group_id","type":"input",readonly: true,hidden: true},
                        {"title":"Customer In Group Name","field":"cust_exists_group_name","type":"input",readonly: true,hidden: true}],
                    [{"title":"Bid Date","required":true,"field":"bid_date","type":"date",readonly: true},{"dataKey":"Territory","data":[],"title":"Territory Code","field":"territory_id","type":"select"}],
                    [{"title":"Start Date","required":true,"field":"start_date","type":"date"},
                        {"title":"End Date","required":true,"field":"end_date","type":"date"}],
                    [{"title":"Attachments","field":"upload","type":"file"}],
                    [{"title":"Remark","field":"remarks","type":"textarea"}]],


    };
        },
    };
</script>


