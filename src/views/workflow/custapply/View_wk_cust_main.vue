<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/custapply/View_wk_cust_main.js此处编写
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
    import extend from "@/extension/workflow/custapply/View_wk_cust_main.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'bidmast_dbid',
                footer: "Foots",
                cnName: 'Customer Apply',
                name: 'custapply/View_wk_cust_main',
                url: "/View_wk_cust_main/",
                sortName: "created_date"
            });
            const editFormFields = ref({"bid_no":"","apply_type":"","cust_name":"","cust_id":"","cust_dbid":"","cust_city_name":"","cust_zip_id":"","cust_address":"","invoice_name":"","invoice_city_name":"","invoice_zip_id":"","invoice_address":"","delivery_city_name":"","delivery_zip_id":"","delivery_addr":"","delivery_contact":"","delivery_tel_no":"","doh_type":"","doh_institute_no":"","is_private":"","owner":"","tax_id":"","email":"","fax_no":"","own_hospital_cust_id":"","own_hospital":"","ctrl_drug_no":"","ctrl_drug_contact":"","remarks":"","bidmast_dbid":"","wkcust_dbid":"","created_username":"","created_date":"","modified_username":"","modified_date":"","status":""});
            const editFormOptions = ref([[{"title":"Bid No","field":"bid_no","disabled":true},
                               {"dataKey":"ApprovalType","data":[],"title":"Apply Type","field":"apply_type","type":"select","required":true}],
                              [{"title":"Cust Name","field":"cust_name","required":true}],
                                [{"title":"Cust Name","field":"cust_id","colSize":8,"required":true}],
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
                               {"title":"Modified Date","field":"modified_date","disabled":true}]]);
            const searchFormFields = ref({"bid_no":"","cust_name":"","start_date":"","status":""});
            const searchFormOptions = ref([[{"title":"Bid No","field":"bid_no"},{"title":"Cust Name","field":"cust_name"}],[{"dataKey":"ApprovalStatus","data":[],"title":"Status","field":"status","type":"select"},{"title":"Apply Date","field":"start_date","type":"date"}]]);
            const columns = ref([{field:'bid_no',title:'Bid No',"link":true,type:'string',width:110,align:'left',sort:true},
                       {field:'cust_name',title:'Cust Name',type:'string',width:120,align:'left'},
                       {field:'cust_id',title:'Cust ID',type:'string',width:110,align:'left'},
                       {field:'apply_type',title:'Apply Type',type:'string',bind:{ key:'ApprovalType',data:[]},width:110,align:'left'},
                       {field:'start_date',title:'Apply Date',type:'datetime',width:90,align:'left',sort:true},
                        {field:'created_username',title:'Creator',type:'string',width:110,align:'left'},
                       {field:'cust_city_name',title:'Cust City Name',type:'string',bind:{ key:'viat_city',data:[]},width:110,hidden:true,align:'left'},
                       {field:'cust_zip_id',title:'Cust Zip Name',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,hidden:true,align:'left'},
                       {field:'cust_address',title:'Cust Address',type:'string',width:180,hidden:true,align:'left'},
                       {field:'invoice_name',title:'Invoice Name',type:'string',width:120,hidden:true,align:'left'},
                       {field:'invoice_city_name',title:'Invoice City Name',type:'string',bind:{ key:'viat_city',data:[]},width:110,hidden:true,align:'left'},
                       {field:'invoice_zip_id',title:'Invoice Zip Id',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,hidden:true,align:'left'},
                       {field:'invoice_address',title:'Invoice Address',type:'string',width:180,hidden:true,align:'left'},
                       {field:'delivery_city_name',title:'Delivery City Name',type:'string',bind:{ key:'viat_city',data:[]},width:110,hidden:true,align:'left'},
                       {field:'delivery_zip_id',title:'Delivery Zip Id',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,hidden:true,align:'left'},
                       {field:'delivery_addr',title:'Delivery Addr',type:'string',width:180,hidden:true,align:'left'},
                       {field:'delivery_contact',title:'Delivery Contact',type:'string',width:120,hidden:true,align:'left'},
                       {field:'delivery_tel_no',title:'Delivery Tel',type:'string',width:110,hidden:true,align:'left'},
                       {field:'doh_type',title:'Doh Type',type:'string',bind:{ key:'doh_type',data:[]},width:110,hidden:true,align:'left'},
                       {field:'doh_institute_no',title:'NHI Institute No',type:'string',width:110,hidden:true,align:'left'},
                       {field:'is_private',title:'Public/Private',type:'string',bind:{ key:'PublicPrivate',data:[]},width:110,hidden:true,align:'left'},
                       {field:'owner',title:'Owner',type:'string',width:120,hidden:true,align:'left'},
                       {field:'tax_id',title:'Tax ID',type:'string',width:110,hidden:true,align:'left'},
                       {field:'email',title:'Email',type:'string',width:110,hidden:true,align:'left'},
                       {field:'fax_no',title:'Fax NO',type:'string',width:110,hidden:true,align:'left'},
                       {field:'own_hospital_cust_id',title:'Own Hospital Cust_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'ctrl_drug_no',title:'Controlled  Mdicine Certificate NO',type:'string',width:110,hidden:true,align:'left'},
                       {field:'ctrl_drug_contact',title:'Controlled  Medicine Contact',type:'string',width:120,hidden:true,align:'left'},
                       {field:'remarks',title:'Remark',type:'string',width:220,align:'left'},

                       {field:'created_date',title:'Created Date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_username',title:'Modifier',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'Modified Date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'wkcust_dbid',title:'列名wkcust_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                        {field:'cust_dbid',title:'列名cust_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'bidmast_dbid',title:'列名bidmast_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'ctype',title:'列名ctype',type:'string',width:110,hidden:true,align:'left'},
                       {field:'territory_id',title:'列名territory_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'cust_zip_name',title:'Cust Zip Name',type:'string',width:110,hidden:true,align:'left'},
                       {field:'invoice_type',title:'列名invoice_type',type:'string',width:110,hidden:true,align:'left'},
                       {field:'invoice_zip_name',title:'Invoice Zip Name',type:'string',width:110,hidden:true,align:'left'},
                       {field:'contact',title:'列名contact',type:'string',width:120,hidden:true,align:'left'},
                       {field:'tel_no',title:'列名tel_no',type:'string',width:110,hidden:true,align:'left'},
                       {field:'delivery_zip_name',title:'Delivery Zip Name',type:'string',width:110,hidden:true,align:'left'},
                       {field:'source',title:'列名source',type:'string',width:110,hidden:true,align:'left'},
                       {field:'accnt_code',title:'列名accnt_code',type:'string',width:110,hidden:true,align:'left'},
                       {field:'dbid',title:'列名dbid',type:'int',width:110,hidden:true,require:true,align:'left'},
                       {field:'own_hospital',title:'列名own_hospital',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'med_group',title:'列名med_group',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'own_by_hospital',title:'列名own_by_hospital',type:'string',width:110,hidden:true,align:'left'},
                       {field:'delv_group',title:'列名delv_group',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'is_contract',title:'列名is_contract',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_user',title:'列名created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'列名created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'列名created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_user',title:'列名modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'列名modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'列名modified_clientusername',type:'string',width:110,hidden:true,align:'left'},

                       {field:'end_date',title:'列名end_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'status',title:'Status',type:'string',bind:{ key:'ApprovalStatus',data:[]},width:90,align:'left'},
                       {field:'own_hospital_cust_name',title:'Own Hospital Cust_name',type:'string',width:120,hidden:true,align:'left'}]);
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
