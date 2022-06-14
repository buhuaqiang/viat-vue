<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/price/View_cust_custgroup_pricegroup.js此处编写
 -->
<template>
    <view-grid ref="grid"
               :columns="columns"
               :detail="detail"
               :editFormFields="editFormFields"
               :editFormOptions="editFormOptions"
               :searchFormFields="searchFormFields"
               :searchFormOptions="searchFormOptions"
               :table="table"
               :extend="extend">
    </view-grid>
</template>
<script>
    import extend from "@/extension/price/price/View_cust_custgroup_pricegroup.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'cust_dbid',
                footer: "Foots",
                cnName: '價格群組對應客戶',
                name: 'price/View_cust_custgroup_pricegroup',
                url: "/View_cust_custgroup_pricegroup/",
                sortName: "cust_id"
            });
            const editFormFields = ref({"status":"","custGroupStatus":""});
            const editFormOptions = ref([[{"dataKey":"Status_YN","data":[],"title":"","field":"status","type":"select"},
                               {"dataKey":"Status_YN","data":[],"title":"","field":"custGroupStatus","type":"select"}]]);
            const searchFormFields = ref({"priceGroudId":""});
            const searchFormOptions = ref([[{"title":"","field":"priceGroudId"}]]);
            const columns = ref([{field:'cust_dbid',title:'cust_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'cust_id',title:'cust_id',type:'string',width:110,require:true,align:'left',sort:true},
                       {field:'dbid',title:'dbid',type:'int',width:110,hidden:true,require:true,align:'left'},
                       {field:'entity',title:'entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'division',title:'division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'cust_name',title:'cust_name',type:'string',width:120,align:'left'},
                       {field:'cust_address',title:'cust_address',type:'string',width:180,hidden:true,align:'left'},
                       {field:'invoice_name',title:'invoice_name',type:'string',width:120,hidden:true,align:'left'},
                       {field:'invoice_address',title:'invoice_address',type:'string',width:180,hidden:true,align:'left'},
                       {field:'owner',title:'owner',type:'string',width:120,hidden:true,align:'left'},
                       {field:'tax_id',title:'tax_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'contact',title:'contact',type:'string',width:120,hidden:true,align:'left'},
                       {field:'tel_no',title:'tel_no',type:'string',width:110,hidden:true,align:'left'},
                       {field:'fax_no',title:'fax_no',type:'string',width:110,hidden:true,align:'left'},
                       {field:'email',title:'email',type:'string',width:110,hidden:true,align:'left'},
                       {field:'territory_id',title:'territory_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'doh_institute_no',title:'doh_institute_no',type:'string',width:110,hidden:true,align:'left'},
                       {field:'ctrl_drug_no',title:'ctrl_drug_no',type:'string',width:110,hidden:true,align:'left'},
                       {field:'ctrl_drug_contact',title:'ctrl_drug_contact',type:'string',width:120,hidden:true,align:'left'},
                       {field:'cust_zip_id',title:'cust_zip_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'invoice_zip_id',title:'invoice_zip_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'doh_type',title:'doh_type',type:'string',width:110,hidden:true,align:'left'},
                       {field:'margin_type',title:'margin_type',type:'string',width:110,hidden:true,align:'left'},
                       {field:'is_contract',title:'is_contract',type:'string',width:110,hidden:true,align:'left'},
                       {field:'is_private',title:'is_private',type:'string',width:110,hidden:true,align:'left'},
                       {field:'own_by_hospital',title:'own_by_hospital',type:'string',width:110,hidden:true,align:'left'},
                       {field:'own_hospital',title:'own_hospital',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'med_group',title:'med_group',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'delv_group',title:'delv_group',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'new_cust_id',title:'new_cust_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'inactive_date',title:'inactive_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'status',title:'status',type:'string',bind:{ key:'Status_YN',data:[]},width:110,align:'left'},
                       {field:'remarks',title:'remarks',type:'string',width:220,hidden:true,align:'left'},
                       {field:'source',title:'source',type:'string',width:110,hidden:true,align:'left'},
                       {field:'accnt_code',title:'accnt_code',type:'string',width:110,hidden:true,align:'left'},
                       {field:'invoice_type',title:'invoice_type',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_user',title:'created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'modified_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'last_deal_date',title:'last_deal_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'custGroupStatus',title:'custGroupStatus',type:'string',bind:{ key:'Status_YN',data:[]},width:110,align:'left'},
                       {field:'priceGroudId',title:'priceGroudId',type:'string',width:110,hidden:true,align:'left'}]);
            const detail = ref({
                cnName: "#detailCnName",
                table: "#detailTable",
                columns: [],
                sortName: "",
                key: ""
            });
            return {
                table,
                extend,
                editFormFields,
                editFormOptions,
                searchFormFields,
                searchFormOptions,
                columns,
                detail,
            };
        },
    });
</script>
