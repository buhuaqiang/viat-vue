<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/distroub/view_dist_margin.js此处编写
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
    import extend from "@/extension/basic/distroub/view_dist_margin.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'distmargin_dbid',
                footer: "Foots",
                cnName: 'Dustibutor Margin Rate Maintain',
                name: 'distroub/view_dist_margin',
                url: "/view_dist_margin/",
                sortName: "distmargin_dbid"
            });
            const editFormFields = ref({"dist_id":"","margin_value":"","channel":"","margin_value_type":"","start_date":"","end_date":"","custs":[],"prods":[],"prod_id":"","cust_id":"","prod_dbid":"","cust_dbid":"","status":""});
            const editFormOptions = ref([[{"dataKey":"distributor_Drop","data":[],"title":"Distributor","required":true,"field":"dist_id","type":"select"},
                               {"title":"Margin Rate/Price","field":"margin_value","type":"decimal"}],
                              [{"dataKey":"Channel-Distributor2","data":[],"title":"Channel","field":"channel","type":"select"},
                               {"dataKey":"Margin_Type","data":[],"title":"Margin Type","field":"margin_value_type","type":"select"}],
                              [{"title":"Start Date","field":"start_date","type":"date"},
                               {"title":"End Date","field":"end_date","type":"date"}],
                              [{"dataKey":"mul_select_for_pop","data":[],"title":"Products","required":true,"field":"prods","type":"selectList"},
                               {"dataKey":"mul_select_for_pop","data":[],"title":"Customers","required":true,"field":"custs","type":"selectList"}],
                              [{"title":"Prod ID","field":"prod_id","type":"text"},
                               {"title":"Cust ID","field":"cust_id","type":"text"}],
                              [{"title":"","field":"prod_dbid"},
                               {"title":"","field":"cust_dbid"}],
                              [{"dataKey":"Status_YN","data":[],"title":"Status","field":"status","type":"select"}]]);
            const searchFormFields = ref({"dist_id":"","prod_dbid":"","prod_id":"","channel":"","cust_dbid":"","cust_id":"","margin_value_type":"","start_date":"","end_date":"","status":""});
            const searchFormOptions = ref([[{"dataKey":"distributor_Drop","data":[],"title":"Distributor","field":"dist_id","type":"select"},{"title":"","field":"prod_dbid","type":"text"},{"title":"","field":"cust_dbid","type":"text"},{"dataKey":"Margin_Type","data":[],"title":"Margin Type","field":"margin_value_type","type":"select"}],[{"title":"Start Date","field":"start_date","type":"date"},{"title":"End Date","field":"end_date","type":"date"}],[{"title":"Prod ID","field":"prod_id"},{"title":"Cust ID","field":"cust_id"}],[{"dataKey":"Channel-Distributor2","data":[],"title":"Channel","field":"channel","type":"select"},{"dataKey":"Status_YN","data":[],"title":"Status","field":"status","type":"select"}]]);
            const columns = ref([{field:'dist_id',title:'Distributor',type:'string',width:110,require:true,align:'left',sort:true},
                       {field:'sys_value',title:'Dist Name',type:'string',link:true,width:90,align:'left'},
                       {field:'prod_dbid',title:'prod_dbid',type:'guid',width:40,hidden:true,align:'left'},
                       {field:'prod_id',title:'Prod ID',type:'string',width:70,align:'left'},
                       {field:'prod_ename',title:'Prod Name',type:'string',width:90,align:'left'},
                       {field:'prod_dbidname',title:'Product',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'cust_dbidname',title:'Customer',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'channel',title:'Channel',type:'string',bind:{ key:'Channel-Distributor2',data:[]},width:90,align:'left'},
                       {field:'doh_type_ename',title:'Channel Description',type:'string',width:160,align:'left'},
                       {field:'cust_dbid',title:'cust_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'cust_id',title:'Cust ID',type:'string',width:110,align:'left'},
                       {field:'cust_name',title:'Cust Name',type:'string',width:100,align:'left'},
                       {field:'margin_value_type',title:'Margin Type',type:'int',bind:{ key:'Margin_Type',data:[]},width:100,align:'left'},
                       {field:'margin_value',title:'Margin Rate/Price',type:'decimal',width:140,align:'left'},
                       {field:'start_date',title:'Start Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'end_date',title:'End Date',type:'datetime',width:120,align:'left',sort:true},
                       {field:'modified_date',title:'Modified Date',type:'datetime',width:140,align:'left',sort:true},
                       {field:'status',title:'Status',type:'string',bind:{ key:'Status_YN',data:[]},width:70,align:'left'},
                       {field:'mpg_id',title:'mpg_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'mpg_name',title:'mpg_name',type:'string',width:110,hidden:true,align:'left'},
                       {field:'emp_ename',title:'emp_ename',type:'string',width:110,hidden:true,align:'left'},
                       {field:'division',title:'division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'entity',title:'entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_user',title:'modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'created_client',title:'created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_user',title:'created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'distmargin_dbid',title:'distmargin_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'remarks',title:'remarks',type:'string',width:220,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'custs',title:'Customers',type:'string',bind:{ key:'mul_select_for_pop',data:[]},width:110,hidden:true,require:true,align:'left'},
                       {field:'prods',title:'Products',type:'string',bind:{ key:'mul_select_for_pop',data:[]},width:110,hidden:true,require:true,align:'left'},
                       {field:'dbid',title:'dbid',type:'int',width:80,hidden:true,require:true,align:'left'},
                       {field:'localmpg_dbid',title:'localmpg_dbid',type:'guid',width:110,hidden:true,align:'left'}]);
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
