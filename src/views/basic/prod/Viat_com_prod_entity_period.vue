<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/prod/Viat_com_prod_entity_period.js此处编写
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
    import extend from "@/extension/basic/prod/Viat_com_prod_entity_period.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'period_dbid',
                footer: "Foots",
                cnName: '產品幣別',
                name: 'prod/Viat_com_prod_entity_period',
                url: "/Viat_com_prod_entity_period/",
                sortName: "created_date"
            });
            const editFormFields = ref({"prod_dbid":"","entity":"","start_date":"","end_date":"","status":""});
            const editFormOptions = ref([[{"title":"產品PKID,舊版ITEM_CODE","required":true,"field":"prod_dbid","type":"text"}],
                              [{"dataKey":"entity","data":[],"title":"公司別,舊版SUN_DB","field":"entity","type":"select"}],
                              [{"title":"生效日","required":true,"field":"start_date","type":"date"}],
                              [{"title":"終止日  default : 2099/12/31","required":true,"field":"end_date","type":"date"}],
                              [{"dataKey":"duputy_status","data":[],"title":"是否有效,Y:生效;N:未生效or期滿;C:移除","field":"status","type":"select"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'period_dbid',title:'ID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'prod_dbid',title:'產品PKID,舊版ITEM_CODE',type:'guid',width:110,require:true,align:'left',sort:true},
                       {field:'entity',title:'公司別,舊版SUN_DB',type:'string',bind:{ key:'entity',data:[]},width:110,align:'left'},
                       {field:'division',title:'所屬事業單位,01:PH;03:AH;05:CH;06:NU',type:'string',width:110,align:'left'},
                       {field:'start_date',title:'生效日',type:'datetime',width:110,require:true,align:'left',sort:true},
                       {field:'end_date',title:'終止日  default : 2099/12/31',type:'datetime',width:110,require:true,align:'left',sort:true},
                       {field:'status',title:'是否有效,Y:生效;N:未生效or期滿;C:移除',type:'string',bind:{ key:'duputy_status',data:[]},width:110,align:'left'},
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
