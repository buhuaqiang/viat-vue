<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/cust/View_com_cust.js此处编写
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
    import extend from "@/extension/basic/cust/View_com_cust.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'cust_dbid',
                footer: "Foots",
                cnName: 'Customer Maintain',
                name: 'cust/View_com_cust',
                url: "/View_com_cust/",
                sortName: "created_date"
            });
            const editFormFields = ref({"cust_id":"","cust_name":"","cust_zip_id":"","cust_city_name":"","cust_address":"","invoice_name":"","tax_id":"","invoice_city_name":"","invoice_zip_id":"","invoice_address":"","territory_id":"","owner":"","contact":"","tel_no":"","fax_no":"","email":"","doh_institute_no":"","ctrl_drug_no":"","doh_type":"","margin_type":"","ctrl_drug_contact":"","is_contract":"","is_private":"","status":"","own_by_hospital":"","own_hospital_cust_id":"","med_group_cust_id":"","delv_group_cust_id":"","new_cust_id":"","inactive_date":"","remarks":""});
            const editFormOptions = ref([[{"title":"Customer  Code","required":true,"field":"cust_id"},
                               {"title":"Customer name","required":true,"field":"cust_name"}],
                              [{"dataKey":"viat_city","data":[],"title":"Customer City Name","required":true,"field":"cust_city_name","type":"select"},
                               {"dataKey":"viat_city_zone","data":[],"title":"Customer Zip Code","required":true,"field":"cust_zip_id","type":"select"}],
                              [{"title":"Customer address","required":true,"field":"cust_address"}],
                              [{"title":"Invoice name","required":true,"field":"invoice_name"},
                               {"title":"Tax ID","field":"tax_id"}],
                              [{"dataKey":"viat_city","data":[],"title":"Invoice City Name","required":true,"field":"invoice_city_name","type":"select"},
                               {"dataKey":"viat_city_zone","data":[],"title":"Invoice Zip Id","required":true,"field":"invoice_zip_id","type":"select"}],
                              [{"title":"Invoice address","required":true,"field":"invoice_address"}],
                              [{"title":"Owner","required":true,"field":"owner"},
                               {"title":"Default Zone","required":true,"field":"territory_id"}],
                              [{"title":"Contact","field":"contact"},
                               {"title":"Telephone","required":true,"field":"tel_no"}],
                              [{"title":"Fax","field":"fax_no"},
                               {"title":"Email","field":"email"}],
                              [{"title":"NHI Institute no","field":"doh_institute_no"},
                               {"title":"Controlled Medicine Certificate NO","field":"ctrl_drug_no"}],
                              [{"dataKey":"doh_type","data":[],"title":"DOH Type","required":true,"field":"doh_type","type":"select"},
                               {"dataKey":"doh_type","data":[],"title":"Margin Type","required":true,"field":"margin_type","type":"select"}],
                              [{"title":"Controlled Medicine Contact","field":"ctrl_drug_contact"},
                               {"dataKey":"Status3","data":[],"title":"Is contracted","field":"is_contract","type":"select"}],
                              [{"dataKey":"PublicPrivate","data":[],"title":"Public/Private","field":"is_private","type":"select"},
                               {"dataKey":"Status_YN","data":[],"title":"Status","field":"status","type":"select"}],
                              [{"dataKey":"Status3","data":[],"title":"Is Hospital Owned Drug Store","required":true,"field":"own_by_hospital","type":"select"},
                               {"title":"Owned Hospital","field":"own_hospital_cust_id"}],
                              [{"title":"Medical Group","field":"med_group_cust_id"},
                               {"title":"Price Group","field":"delv_group_cust_id"}],
                              [{"title":"New Customer","field":"new_cust_id"},
                               {"title":"End Date","field":"inactive_date","type":"date"}],
                              [{"title":"Remarks","field":"remarks","colSize":8,"type":"textarea"}]]);
            const searchFormFields = ref({"cust_id":"","cust_name":"","territory_id":"","cust_zip_id":"","owner":"","tax_id":"","contact":"","cust_address":"","tel_no":"","doh_institute_no":"","doh_type":"","own_by_hospital":"","own_hospital":"","med_group":"","delv_group":"","status":"","modified_date":"","own_hospital_cust_id":"","med_group_cust_id":"","delv_group_cust_id":""});
            const searchFormOptions = ref([[{"title":"Customer  Code","field":"cust_id","type":"like"},{"title":"Owner","field":"owner","type":"like"}],[{"title":"Customer name","field":"cust_name","type":"like"},{"title":"Contact","field":"contact"}],[{"dataKey":"viat_city_zone","data":[],"title":"Customer Zip Code","field":"cust_zip_id","type":"select"},{"title":"Telephone","field":"tel_no"}],[{"title":"Customer address","field":"cust_address","type":"like"},{"title":"Medical Group","field":"med_group_cust_id"}],[{"title":"Tax ID","field":"tax_id"},{"title":"Price Group","field":"delv_group_cust_id"}],[{"title":"Default Zone","field":"territory_id"},{"dataKey":"doh_type","data":[],"title":"DOH Type","field":"doh_type","type":"select"}],[{"title":"NHI Institute no","field":"doh_institute_no"},{"dataKey":"Status_YN","data":[],"title":"Status","field":"status","type":"select"}],[{"dataKey":"Status3","data":[],"title":"Is Hospital Owned Drug Store","field":"own_by_hospital","type":"select"},{"title":"Owned Hospital","field":"own_hospital_cust_id"}],[{"title":"Owned Hospital","field":"own_hospital"},{"title":"Medical Group","field":"med_group"},{"title":"Price Group","field":"delv_group"},{"title":"Modified Date","field":"modified_date","type":"date"}]]);
            const columns = ref([{field:'cust_id',title:'Customer  Code',type:'string',link:true,width:110,require:true,align:'left',sort:true},
                       {field:'cust_name',title:'Customer name',type:'string',width:120,require:true,align:'left'},
                       {field:'territory_id',title:'Default Zone',type:'string',width:110,require:true,align:'left'},
                       {field:'invoice_name',title:'Invoice name',type:'string',width:120,hidden:true,require:true,align:'left'},
                       {field:'cust_zip_id',title:'Customer Zip Code',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,require:true,align:'left'},
                       {field:'invoice_address',title:'Invoice address',type:'string',width:180,hidden:true,require:true,align:'left'},
                       {field:'owner',title:'Owner',type:'string',width:120,hidden:true,require:true,align:'left'},
                       {field:'tax_id',title:'Tax ID',type:'string',width:110,hidden:true,align:'left'},
                       {field:'contact',title:'Contact',type:'string',width:120,hidden:true,align:'left'},
                       {field:'fax_no',title:'Fax',type:'string',width:110,hidden:true,align:'left'},
                       {field:'email',title:'Email',type:'string',width:110,hidden:true,align:'left'},
                       {field:'cust_address',title:'Customer address',type:'string',width:180,require:true,align:'left'},
                       {field:'tel_no',title:'Telephone',type:'string',width:110,require:true,align:'left'},
                       {field:'doh_institute_no',title:'NHI Institute no',type:'string',width:110,hidden:true,align:'left'},
                       {field:'ctrl_drug_no',title:'Controlled Medicine Certificate NO',type:'string',width:110,hidden:true,align:'left'},
                       {field:'ctrl_drug_contact',title:'Controlled Medicine Contact',type:'string',width:120,hidden:true,align:'left'},
                       {field:'doh_type',title:'DOH Type',type:'string',bind:{ key:'doh_type',data:[]},width:110,require:true,align:'left'},
                       {field:'margin_type',title:'Margin Type',type:'string',bind:{ key:'doh_type',data:[]},width:110,require:true,align:'left'},
                       {field:'is_contract',title:'Is contracted',type:'string',bind:{ key:'Status3',data:[]},width:110,hidden:true,align:'left'},
                       {field:'is_private',title:'Public/Private',type:'string',bind:{ key:'PublicPrivate',data:[]},width:110,hidden:true,align:'left'},
                       {field:'own_by_hospital',title:'Is Hospital Owned Drug Store',type:'string',bind:{ key:'Status3',data:[]},width:110,hidden:true,require:true,align:'left'},
                       {field:'own_hospital',title:'Owned Hospital',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'med_group',title:'Medical Group',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'delv_group',title:'Price Group',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'new_cust_id',title:'New Customer',type:'string',width:110,hidden:true,align:'left'},
                       {field:'inactive_date',title:'End Date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'status',title:'Status',type:'string',bind:{ key:'Status_YN',data:[]},width:110,align:'left'},
                       {field:'remarks',title:'Remarks',type:'string',width:220,hidden:true,align:'left'},
                       {field:'source',title:'Source',type:'string',width:110,hidden:true,align:'left'},
                       {field:'accnt_code',title:'列名accnt_code',type:'string',width:110,hidden:true,align:'left'},
                       {field:'invoice_type',title:'Invoice Type',type:'string',width:110,hidden:true,align:'left'},
                       {field:'invoice_zip_name',title:'Invoice Zip Name',type:'string',width:110,hidden:true,align:'left'},
                       {field:'invoice_city_name',title:'Invoice City Name',type:'string',bind:{ key:'viat_city',data:[]},width:110,hidden:true,require:true,align:'left'},
                       {field:'cust_city_name',title:'Customer City Name',type:'string',bind:{ key:'viat_city',data:[]},width:120,hidden:true,require:true,align:'left'},
                       {field:'cust_zip_name',title:'cust_zip_name',type:'string',width:120,hidden:true,align:'left'},
                       {field:'invoice_zip_id',title:'Invoice Zip Id',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,hidden:true,require:true,align:'left'},
                       {field:'modified_date',title:'Modified Date',type:'datetime',width:150,align:'left',sort:true},
                       {field:'modified_client',title:'列名modified_client',type:'int',width:80,hidden:true,align:'left'},
                       {field:'modified_user',title:'列名modified_user',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_date',title:'Created Date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'created_client',title:'列名created_client',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_user',title:'列名created_user',type:'int',width:80,hidden:true,align:'left'},
                       {field:'cust_dbid',title:'列名cust_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'created_username',title:'Created User',type:'string',width:110,hidden:true,align:'left'},
                       {field:'own_hospitalname',title:'own_hospitalname',type:'string',width:110,hidden:true,require:true,align:'left'},
                       {field:'med_groupname',title:'med_groupname',type:'string',width:110,hidden:true,require:true,align:'left'},
                       {field:'delv_groupname',title:'delv_groupname',type:'string',width:110,hidden:true,require:true,align:'left'},
                       {field:'C1',title:'列名C1',type:'string',width:180,hidden:true,require:true,align:'left'},
                       {field:'last_deal_date',title:'last_deal_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'created_clientusername',title:'Created Client',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'Modified User',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'Modified Client',type:'string',width:110,hidden:true,align:'left'},
                       {field:'delv_group_cust_name',title:'delv_group_cust_name',type:'string',width:110,hidden:true,align:'left'},
                       {field:'own_hospital_cust_id',title:'Owned Hospital',type:'string',width:110,hidden:true,align:'left'},
                       {field:'own_hospital_cust_name',title:'Owned Hospital Name',type:'string',width:110,hidden:true,align:'left'},
                       {field:'med_group_cust_id',title:'Medical Group',type:'string',width:110,hidden:true,align:'left'},
                       {field:'med_group_cust_name',title:'med_group_cust_name',type:'string',width:110,hidden:true,align:'left'},
                       {field:'delv_group_cust_id',title:'Price Group',type:'string',width:110,hidden:true,align:'left'}]);
            const detail = ref({
                cnName: "Delivery Address",
                table: "View_com_cust_delivery",
                columns: [{field:'delivery_dbid',title:'delivery_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'dbid',title:'dbid',type:'decimal',width:110,hidden:true,require:true,align:'left'},
                       {field:'entity',title:'entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'division',title:'division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'cust_dbid',title:'cust_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'seq_no',title:'Seq NO',type:'decimal',width:110,edit:{type:'number'},align:'left',sort:true},
                       {field:'city_name',title:'City Name',type:'string',bind:{ key:'viat_city',data:[]},width:110,edit:{type:'select'},align:'left'},
                       {field:'zip_id',title:'Zip',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,edit:{type:'select'},align:'left'},
                       {field:'delivery_name',title:'Delivery Name',type:'string',width:120,edit:{type:''},align:'left'},
                       {field:'delivery_contact',title:'Contact',type:'string',width:120,edit:{type:''},align:'left'},
                       {field:'delivery_tel_no',title:'Telephone',type:'string',width:110,edit:{type:''},align:'left'},
                       {field:'delivery_addr',title:'Delivery Address',type:'string',width:180,edit:{type:''},align:'left'},
                       {field:'created_user',title:'created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'modified_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'zip_name',title:'zip_name',type:'string',width:110,hidden:true,align:'left'}],
                sortName: "seq_no",
                key: "delivery_dbid"
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
