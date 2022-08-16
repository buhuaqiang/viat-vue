<template>

        <div style="padding:10px;20px;">
            <VolForm
                    ref="pwd"
                    :formRules="editFormOptions"
                    :formFields="editFormFields"
                    labelWidth="180"
            ></VolForm>
        </div>



</template>
<script>
    import VolForm from "@/components/basic/VolForm.vue";
    import VolBox from "@/components/basic/VolBox.vue";
    export default {
        components: {
            VolForm,
            VolBox,
        },
        methods: {

            initForm(bid_no) {
                let url = "api/View_wk_cust_main/getPageData";
                let params = {
                    order: "desc",
                    page: 1,
                    rows: 30,
                    wheres: "[{\"name\":\"bid_no\",\"value\":\""+bid_no+"\",\"displayType\":\"like\"}]"
                }

                this.http.post(url,  params,true).then((x) => {
                    if (x.rows.length==0) {
                        return this.$message(x.message);
                    }
                    let customer = x.rows[0];

                    this.editFormOptions.forEach((option) => {
                        option.forEach((x) => {
                            let field = x.field
                            let value = customer[field]
                            this.editFormFields[field]=value;
                            x.disabled = true
                        });
                    });

                });
            },


        },
        created() {

        },


        data() {
            return {
                modifyOptions: {
                    model: false,
                },
                binging: [{}],
                customer: {},
                editFormFields: {"bid_no":"","apply_type":"","cust_name":"","cust_id":"","cust_dbid":"","cust_city_name":"","cust_zip_id":"","cust_address":"","invoice_name":"","invoice_city_name":"","invoice_zip_id":"","invoice_address":"","delivery_city_name":"","delivery_zip_id":"","delivery_addr":"","delivery_contact":"","delivery_tel_no":"","doh_type":"","doh_institute_no":"","is_private":"","owner":"","tax_id":"","email":"","fax_no":"","own_hospital_cust_id":"","own_hospital":"","ctrl_drug_no":"","ctrl_drug_contact":"","remarks":"","bidmast_dbid":"","wkcust_dbid":"","created_username":"","created_date":"","modified_username":"","modified_date":"","status":""},
                editFormOptions: [[{"title":"Bid No","field":"bid_no",type:'guid',width:110,hidden:true}
                    ,{"title":"Bid No","field":"bid_no","disabled":true},
                    {"dataKey":"ApprovalType","data":[],"title":"Apply Type","field":"apply_type","type":"select","required":true}],
                    [{"title":"Cust Name","field":"cust_name","required":true}],
                    [{"dataKey":"viat_city","data":[],"title":"Cust City Name","field":"cust_city_name","type":"select","required":true},
                        {"dataKey":"viat_city_zone","data":[],"title":"Cust Zip Name","field":"cust_zip_id","type":"select","required":true}],
                    [{"title":"Cust Address","field":"cust_address","colSize":8,"required":true}],
                    [{"title":"Invoice Name","field":"invoice_name","required":true}],
                    [{"dataKey":"viat_city","data":[],"title":"Invoice City Name","field":"invoice_city_name","type":"select","required":true},
                        {"dataKey":"viat_city_zone","data":[],"title":"Invoice Zip Id","field":"invoice_zip_id","type":"select","required":true}],
                    [{"title":"Invoice Address","field":"invoice_address","colSize":8,"required":true}],
                    [{"dataKey":"viat_city","data":[],"title":"Delivery City Name","field":"delivery_city_name","type":"select","required":true},
                        {"dataKey":"viat_city_zone","data":[],"title":"Delivery Zip Id","field":"delivery_zip_id","type":"select","required":true}],
                    [{"title":"Delivery Addr","field":"delivery_addr","colSize":8,"required":true}],
                    [{"title":"Delivery Contact","field":"delivery_contact"},
                        {"title":"Delivery Tel","field":"delivery_tel_no","required":true}],
                    [{"dataKey":"doh_type","data":[],"title":"Doh Type","field":"doh_type","type":"select","required":true},
                        {"title":"NHI Institute No","field":"doh_institute_no"}],
                    [{"dataKey":"PublicPrivate","data":[],"title":"Public/Private","field":"is_private","type":"select"}],
                    [{"title":"Owner","field":"owner","required":true},
                        {"title":"Tax ID","field":"tax_id"}],
                    [{"title":"Email","field":"email"},
                        {"title":"Fax NO","field":"fax_no"}],
                    [{"title":"Own Hospital","field":"own_hospital_cust_id",colSize: 8},{"title":"own_hospital","field":"own_hospital",hidden:true}],
                    [{"title":"Controlled  Mdicine Certificate NO","field":"ctrl_drug_no"},
                        {"title":"Controlled  Medicine Contact","field":"ctrl_drug_contact"}],
                    [{"title":"Remark","field":"remarks","colSize":8,"type":"textarea"}],
                    [{"title":"Creator","field":"created_username","disabled":true},
                        {"title":"Created Date","field":"created_date","disabled":true}],
                    [{"title":"Modifier","field":"modified_username","disabled":true},
                        {"title":"Modified Date","field":"modified_date","disabled":true}]],
            };
        },
    };
</script>


