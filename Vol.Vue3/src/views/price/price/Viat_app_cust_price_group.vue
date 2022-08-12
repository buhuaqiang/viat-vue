<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/price/Viat_app_cust_price_group.js此处编写
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
    import extend from "@/extension/price/price/Viat_app_cust_price_group.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'pricegroup_dbid',
                footer: "Foots",
                cnName: 'Price Group',
                name: 'price/Viat_app_cust_price_group',
                url: "/Viat_app_cust_price_group/",
                sortName: "group_id"
            });
            const editFormFields = ref({"group_id":"","group_name":"","status":"","group_type":"","cust_type":"","pricing_field":"","remarks":""});
            const editFormOptions = ref([[{"title":"Group ID","required":true,"field":"group_id"}],
                              [{"title":"Group Name","required":true,"field":"group_name"}],
                              [{"dataKey":"group_price_channel","data":[],"title":"Price Group Channel","field":"group_type","type":"select"}],
                              [{"title":"Gov/Private","field":"cust_type","dataKey":"price_group_cust_type","data":[],"type":"select"}],
                              [{"title":"Pricing Field","field":"pricing_field",hidden:true}],
                                [{"title":"Pricing Field","field":"pricing_manager_name"}],
                                [{"dataKey":"Status_YN","data":[],"title":"Status","field":"status","type":"select"}],
                              [{"title":"Remarks","field":"remarks","type":"textarea"}]]);
            const searchFormFields = ref({"group_id":"","group_name":"","status":"","pricing_field":"","cust_type":"","group_type":"","pricing_manager_name":""});
            const searchFormOptions = ref([
                [{"title":"Group ID","field":"group_id","type":"like"},
                    {"title":"Group Name","field":"group_name","type":"like"},
                    {"dataKey":"Status_YN","data":[],"title":"Status","field":"status","type":"select"}],
                [{"title":"Price Group Channel","field":"group_type","type":"select","dataKey":"group_price_channel","data":[]},
                    {"title":"Gov/Private","field":"cust_type","dataKey":"price_group_cust_type","data":[],"type":"select"},
                    {"title":"Pricing Field","field":"pricing_manager_name"}],
                [{"title":"Pricing Field","field":"pricing_field",hidden:true}]
            ]);
            const columns = ref([{field:'pricegroup_dbid',title:'主鍵',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'entity',title:'公司別,舊版SUN_DB',type:'string',width:110,hidden:true,align:'left'},
                       {field:'division',title:'所屬事業單位,01:PH;03:AH;05:CH;06:NU',type:'string',width:110,hidden:true,align:'left'},
                       {field:'group_id',title:'Group ID',type:'string',link:true,width:110,require:true,align:'left',sort:true},
                       {field:'group_name',title:'Group Name',type:'string',width:120,require:true,align:'left'},
                       {field:'group_type',title:'Price Group Channel',type:'string',bind:{ key:'group_price_channel',data:[]},width:110,align:'left'},
                       {field:'cust_type',title:'Gov/Private',type:'string',bind:{ key:'price_group_cust_type',data:[]},width:110,align:'left'},
                       {field:'created_user',title:'Created User',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                        {field:'pricing_manager_name',title:'Pricing Field',type:'string',width:110,align:'left'},
                        {field:'created_date',title:'Created Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_date',title:'Modified Date',type:'datetime',width:110,align:'left',sort:true},
                        {field:'status',title:'Status',type:'string',bind:{ key:'Status_YN',data:[]},width:110,align:'left'},
                       {field:'remarks',title:'Remarks',type:'string',width:220,align:'left'}]);
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
