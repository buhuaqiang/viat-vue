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
                cnName: '客戶基本信息',
                name: 'cust/View_com_cust',
                url: "/View_com_cust/",
                sortName: "cust_id"
            });
            const editFormFields = ref({"cust_id":"","cust_name":"","cust_address":"","cust_city_name":"","cust_zip_id":"","invoice_name":"","invoice_address":"","invoice_city_name":"","invoice_zip_id":"","owner":"","tax_id":"","contact":"","tel_no":"","fax_no":"","email":"","territory_id":"","doh_institute_no":"","ctrl_drug_no":"","ctrl_drug_contact":"","doh_type":"","margin_type":"","is_contract":"","is_private":"","own_by_hospital":"","own_hospitalname":"","med_groupname":"","delv_groupname":"","new_cust_id":"","inactive_date":"","status":"","remarks":""});
            const editFormOptions = ref([[{"title":"列名cust_id","required":true,"field":"cust_id"}],
                              [{"title":"列名cust_name","required":true,"field":"cust_name"}],
                              [{"dataKey":"viat_city","data":[],"title":"客戶城市","required":true,"field":"cust_city_name","type":"select"},
                               {"dataKey":"viat_city_zone","data":[],"title":"客戶地區","required":true,"field":"cust_zip_id","type":"select"},
                               {"title":"列名cust_address","required":true,"field":"cust_address"}],
                              [{"title":"列名invoice_name","required":true,"field":"invoice_name"}],
                              [{"dataKey":"viat_city","data":[],"title":"列名invoice_city_name","required":true,"field":"invoice_city_name","type":"select"},
                               {"dataKey":"viat_city_zone","data":[],"title":"列名invoice_zip_id","required":true,"field":"invoice_zip_id","type":"select"},
                               {"title":"列名invoice_address","required":true,"field":"invoice_address"}],
                              [{"title":"列名owner","required":true,"field":"owner"},
                               {"title":"列名tax_id","field":"tax_id"}],
                              [{"title":"列名contact","field":"contact"},
                               {"title":"列名tel_no","required":true,"field":"tel_no"}],
                              [{"title":"列名fax_no","field":"fax_no"},
                               {"title":"列名email","field":"email"}],
                              [{"title":"列名territory_id","required":true,"field":"territory_id"}],
                              [{"title":"列名doh_institute_no","field":"doh_institute_no"},
                               {"title":"列名ctrl_drug_no","field":"ctrl_drug_no"}],
                              [{"title":"列名ctrl_drug_contact","field":"ctrl_drug_contact"}],
                              [{"dataKey":"doh_type","data":[],"title":"列名doh_type","required":true,"field":"doh_type","type":"select"},
                               {"dataKey":"doh_type","data":[],"title":"列名margin_type","required":true,"field":"margin_type","type":"select"}],
                              [{"dataKey":"Status_YN","data":[],"title":"列名is_contract","field":"is_contract","type":"select"}],
                              [{"dataKey":"Status_YN","data":[],"title":"列名is_private","field":"is_private","type":"select"}],
                              [{"dataKey":"Status_YN","data":[],"title":"列名own_by_hospital","required":true,"field":"own_by_hospital","type":"select"},
                               {"title":"列名own_hospitalname","field":"own_hospitalname","disabled":true}],
                              [{"title":"列名med_groupname","field":"med_groupname","disabled":true},
                               {"title":"列名delv_groupname","field":"delv_groupname","disabled":true}],
                              [{"title":"列名new_cust_id","field":"new_cust_id"},
                               {"title":"列名inactive_date","field":"inactive_date","type":"date"}],
                              [{"dataKey":"Status2","data":[],"title":"列名status","field":"status","type":"select"}],
                              [{"title":"列名remarks","field":"remarks","colSize":8,"type":"textarea"}]]);
            const searchFormFields = ref({"cust_id":"","entity":"","division":"","cust_name":"","territory_id":"","owner":"","tax_id":"","contact":"","cust_address":"","tel_no":"","doh_institute_no":"","doh_type":"","own_hospital":"","med_group":"","delv_group":"","status":"","cust_zip_id":"","modified_date":"","own_hospitalname":"","med_groupname":"","delv_groupname":""});
            const searchFormOptions = ref([[{"title":"列名cust_id","field":"cust_id","type":"like"},{"dataKey":"viat_city_zone","data":[],"title":"客戶地區","field":"cust_zip_id","type":"select"}],[{"title":"列名owner","field":"owner","type":"like"},{"title":"列名cust_name","field":"cust_name","type":"like"},{"title":"列名contact","field":"contact"},{"title":"列名tel_no","field":"tel_no"}],[{"title":"列名cust_address","field":"cust_address","type":"like"},{"title":"列名tax_id","field":"tax_id"},{"title":"列名territory_id","field":"territory_id"}],[{"title":"列名doh_institute_no","field":"doh_institute_no"},{"dataKey":"doh_type","data":[],"title":"列名doh_type","field":"doh_type","type":"select"},{"dataKey":"Status2","data":[],"title":"列名status","field":"status","type":"select"}],[{"title":"列名med_groupname","field":"med_groupname"},{"title":"列名delv_groupname","field":"delv_groupname"},{"title":"列名own_hospitalname","field":"own_hospitalname"}],[{"dataKey":"entity","data":[],"title":"列名entity","field":"entity","type":"select"},{"dataKey":"division","data":[],"title":"列名division","field":"division","type":"select"}],[{"title":"列名own_hospital","field":"own_hospital"},{"title":"列名med_group","field":"med_group"},{"title":"列名delv_group","field":"delv_group"}],[{"title":"列名modified_date","field":"modified_date","type":"date"}]]);
            const columns = ref([{field:'cust_id',title:'列名cust_id',type:'string',link:true,width:110,require:true,align:'left',sort:true},
                       {field:'cust_name',title:'列名cust_name',type:'string',width:120,require:true,align:'left'},
                       {field:'territory_id',title:'列名territory_id',type:'string',width:110,hidden:true,require:true,align:'left'},
                       {field:'invoice_name',title:'列名invoice_name',type:'string',width:120,require:true,align:'left'},
                       {field:'invoice_address',title:'列名invoice_address',type:'string',width:180,hidden:true,require:true,align:'left'},
                       {field:'owner',title:'列名owner',type:'string',width:120,hidden:true,require:true,align:'left'},
                       {field:'tax_id',title:'列名tax_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'contact',title:'列名contact',type:'string',width:120,hidden:true,align:'left'},
                       {field:'fax_no',title:'列名fax_no',type:'string',width:110,hidden:true,align:'left'},
                       {field:'email',title:'列名email',type:'string',width:110,hidden:true,align:'left'},
                       {field:'cust_address',title:'列名cust_address',type:'string',width:180,require:true,align:'left'},
                       {field:'tel_no',title:'列名tel_no',type:'string',width:110,require:true,align:'left'},
                       {field:'doh_institute_no',title:'列名doh_institute_no',type:'string',width:110,hidden:true,align:'left'},
                       {field:'ctrl_drug_no',title:'列名ctrl_drug_no',type:'string',width:110,hidden:true,align:'left'},
                       {field:'ctrl_drug_contact',title:'列名ctrl_drug_contact',type:'string',width:120,hidden:true,align:'left'},
                       {field:'doh_type',title:'列名doh_type',type:'string',bind:{ key:'doh_type',data:[]},width:110,require:true,align:'left'},
                       {field:'margin_type',title:'列名margin_type',type:'string',bind:{ key:'doh_type',data:[]},width:110,require:true,align:'left'},
                       {field:'is_contract',title:'列名is_contract',type:'string',bind:{ key:'Status_YN',data:[]},width:110,hidden:true,align:'left'},
                       {field:'is_private',title:'列名is_private',type:'string',bind:{ key:'Status_YN',data:[]},width:110,hidden:true,align:'left'},
                       {field:'own_by_hospital',title:'列名own_by_hospital',type:'string',bind:{ key:'Status_YN',data:[]},width:110,hidden:true,require:true,align:'left'},
                       {field:'own_hospital',title:'列名own_hospital',type:'guid',width:110,hidden:true,readonly:true,align:'left'},
                       {field:'med_group',title:'列名med_group',type:'guid',width:110,hidden:true,readonly:true,align:'left'},
                       {field:'delv_group',title:'列名delv_group',type:'guid',width:110,hidden:true,readonly:true,align:'left'},
                       {field:'new_cust_id',title:'列名new_cust_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'inactive_date',title:'列名inactive_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'status',title:'列名status',type:'string',bind:{ key:'Status2',data:[]},width:110,align:'left'},
                       {field:'remarks',title:'列名remarks',type:'string',width:220,hidden:true,align:'left'},
                       {field:'source',title:'列名source',type:'string',width:110,hidden:true,align:'left'},
                       {field:'accnt_code',title:'列名accnt_code',type:'string',width:110,hidden:true,align:'left'},
                       {field:'invoice_type',title:'列名invoice_type',type:'string',width:110,hidden:true,align:'left'},
                       {field:'invoice_zip_name',title:'列名invoice_zip_name',type:'string',width:110,hidden:true,align:'left'},
                       {field:'invoice_city_name',title:'列名invoice_city_name',type:'string',bind:{ key:'viat_city',data:[]},width:110,hidden:true,require:true,align:'left'},
                       {field:'cust_city_name',title:'客戶城市',type:'string',bind:{ key:'viat_city',data:[]},width:120,hidden:true,require:true,align:'left'},
                       {field:'cust_zip_id',title:'客戶地區',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,hidden:true,require:true,align:'left'},
                       {field:'cust_zip_name',title:'cust_zip_name',type:'string',width:120,hidden:true,align:'left'},
                       {field:'invoice_zip_id',title:'列名invoice_zip_id',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,hidden:true,require:true,align:'left'},
                       {field:'modified_date',title:'列名modified_date',type:'datetime',width:150,align:'left',sort:true},
                       {field:'modified_client',title:'列名modified_client',type:'int',width:80,hidden:true,align:'left'},
                       {field:'modified_user',title:'列名modified_user',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_date',title:'列名created_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'created_client',title:'列名created_client',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_user',title:'列名created_user',type:'int',width:80,hidden:true,align:'left'},
                       {field:'cust_dbid',title:'列名cust_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'created_username',title:'列名created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'own_hospitalname',title:'列名own_hospitalname',type:'string',width:110,hidden:true,readonly:true,align:'left'},
                       {field:'med_groupname',title:'列名med_groupname',type:'string',width:110,hidden:true,readonly:true,align:'left'},
                       {field:'delv_groupname',title:'列名delv_groupname',type:'string',width:110,hidden:true,readonly:true,align:'left'},
                       {field:'C1',title:'列名C1',type:'string',width:180,hidden:true,require:true,align:'left'},
                       {field:'last_deal_date',title:'last_deal_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'}]);
            const detail = ref({
                cnName: "客戶送貨地址信息",
                table: "View_com_cust_delivery",
                columns: [{field:'delivery_dbid',title:'delivery_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'dbid',title:'dbid',type:'decimal',width:110,hidden:true,require:true,align:'left'},
                       {field:'entity',title:'entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'division',title:'division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'cust_dbid',title:'cust_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'seq_no',title:'seq_no',type:'decimal',width:110,edit:{type:'number'},align:'left',sort:true},
                       {field:'city_name',title:'city_name',type:'string',bind:{ key:'viat_city',data:[]},width:110,edit:{type:'select'},align:'left'},
                       {field:'zip_id',title:'zip_id',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,edit:{type:'select'},align:'left'},
                       {field:'delivery_name',title:'delivery_name',type:'string',width:120,edit:{type:''},align:'left'},
                       {field:'delivery_contact',title:'delivery_contact',type:'string',width:120,edit:{type:''},align:'left'},
                       {field:'delivery_tel_no',title:'delivery_tel_no',type:'string',width:110,edit:{type:''},align:'left'},
                       {field:'delivery_addr',title:'delivery_addr',type:'string',width:180,edit:{type:''},align:'left'},
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
