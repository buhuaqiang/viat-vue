<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/price/Viat_app_dist_mapping.js此处编写
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
    import extend from "@/extension/price/price/Viat_app_dist_mapping.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'distmapping_dbid',
                footer: "Foots",
                cnName: '經銷商映射主表',
                name: 'price/Viat_app_dist_mapping',
                url: "/Viat_app_dist_mapping/",
                sortName: "dbid"
            });
            const editFormFields = ref({"prod_dbid":"","pricegroup_dbid":"","cust_dbid":"","i_dist_id":"","start_date":"","e_dist_id":"","end_date":"","status":"","modified_date":"","remarks":""});
            const editFormOptions = ref([[{"title":"產品表PKID","field":"prod_dbid","type":"text"}],
                              [{"title":"pricegroup主鍵","field":"pricegroup_dbid","type":"text"}],
                              [{"title":"客戶表PKID","field":"cust_dbid","type":"text"}],
                              [{"dataKey":"distributor_Drop","data":[],"title":"歸屬經銷商","required":true,"field":"i_dist_id","type":"select"},
                               {"title":"生效日","required":true,"field":"start_date","type":"datetime"}],
                              [{"dataKey":"distributor_Drop","data":[],"title":"原始經銷商","field":"e_dist_id","type":"select"},
                               {"title":"結束日","required":true,"field":"end_date","type":"datetime"}],
                              [{"title":"是否有效,Y:生效;N:未生效or期滿;C:移除","required":true,"field":"status"},
                               {"title":"最後修改時間","field":"modified_date","type":"datetime"}],
                              [{"title":"備註","field":"remarks"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'distmapping_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'division',title:'所屬事業單位,01:PH;03:AH;05:CH;06:NU',type:'string',width:110,align:'left',sort:true},
                       {field:'prod_dbid',title:'產品表PKID',type:'guid',width:110,align:'left'},
                       {field:'cust_dbid',title:'客戶表PKID',type:'guid',width:110,align:'left'},
                       {field:'pricegroup_dbid',title:'pricegroup主鍵',type:'guid',width:110,align:'left'},
                       {field:'e_dist_id',title:'原始經銷商',type:'string',bind:{ key:'distributor_Drop',data:[]},width:110,align:'left'},
                       {field:'i_dist_id',title:'歸屬經銷商',type:'string',bind:{ key:'distributor_Drop',data:[]},width:110,require:true,align:'left'},
                       {field:'start_date',title:'生效日',type:'datetime',width:110,require:true,align:'left',sort:true},
                       {field:'end_date',title:'結束日',type:'datetime',width:110,require:true,align:'left',sort:true},
                       {field:'status',title:'是否有效,Y:生效;N:未生效or期滿;C:移除',type:'string',width:110,require:true,align:'left'},
                       {field:'entity',title:'公司別,舊版SUN_DB',type:'string',width:110,align:'left'},
                       {field:'remarks',title:'備註',type:'string',width:220,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:110,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:110,align:'left',sort:true}]);
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
