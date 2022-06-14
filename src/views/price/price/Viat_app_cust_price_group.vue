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
                cnName: '價格群組',
                name: 'price/Viat_app_cust_price_group',
                url: "/Viat_app_cust_price_group/",
                sortName: "group_id"
            });
            const editFormFields = ref({"group_id":"","group_name":"","status":"","remarks":"","group_type":""});
            const editFormOptions = ref([[{"title":"群組代碼","required":true,"field":"group_id"}],
                              [{"title":"群組名稱","field":"group_name"}],
                              [{"dataKey":"Status_YN","data":[],"title":"是否有效","field":"status","type":"select"}],
                              [{"title":"備註","field":"remarks","type":"textarea"}],
                              [{"dataKey":"doh_type","data":[],"title":"群組類別","field":"group_type","type":"select"}]]);
            const searchFormFields = ref({"group_id":"","group_name":"","status":""});
            const searchFormOptions = ref([[{"title":"群組代碼","field":"group_id"},{"title":"群組名稱","field":"group_name","type":"like"}],[{"dataKey":"Status_YN","data":[],"title":"是否有效","field":"status","type":"select"}]]);
            const columns = ref([{field:'pricegroup_dbid',title:'主鍵',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'entity',title:'公司別,舊版SUN_DB',type:'string',width:110,hidden:true,align:'left'},
                       {field:'division',title:'所屬事業單位,01:PH;03:AH;05:CH;06:NU',type:'string',width:110,hidden:true,align:'left'},
                       {field:'group_id',title:'群組代碼',type:'string',link:true,width:110,require:true,align:'left',sort:true},
                       {field:'group_name',title:'群組名稱',type:'string',width:120,align:'left'},
                       {field:'group_type',title:'群組類別',type:'string',bind:{ key:'doh_type',data:[]},width:110,align:'left'},
                       {field:'status',title:'是否有效',type:'string',bind:{ key:'Status_YN',data:[]},width:110,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:110,align:'left',sort:true},
                       {field:'remarks',title:'備註',type:'string',width:220,align:'left'}]);
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
