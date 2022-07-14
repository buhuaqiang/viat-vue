<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/hpcontract/Viat_app_hp_contract_purchase_prod.js此处编写
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
    import extend from "@/extension/contract/hpcontract/Viat_app_hp_contract_purchase_prod.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'hpcontpurprod_dbid',
                footer: "Foots",
                cnName: 'HP合約採購',
                name: 'hpcontract/Viat_app_hp_contract_purchase_prod',
                url: "/Viat_app_hp_contract_purchase_prod/",
                sortName: "created_date"
            });
            const editFormFields = ref({"division":"","serial_no":"","hpcont_dbid":"","prod_dbid":"","net_price":"","status":"","created_user":""});
            const editFormOptions = ref([[{"title":"所屬事業單位,01:PH;03:AH;05:CH;06:NU","field":"division"},
                               {"title":"序號","required":true,"field":"serial_no","type":"decimal"},
                               {"title":"HP 合約主表PKID","field":"hpcont_dbid"},
                               {"title":"產品代碼,舊版ITEM_CODE","field":"prod_dbid"},
                               {"title":"售價","field":"net_price","type":"decimal"},
                               {"title":"是否有效,Y / N","field":"status"},
                               {"title":"建立用戶","field":"created_user","type":"number"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'hpcontpurprod_dbid',title:'hpcontpurprod_dbid',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'division',title:'所屬事業單位,01:PH;03:AH;05:CH;06:NU',type:'string',width:110,align:'left',sort:true},
                       {field:'serial_no',title:'序號',type:'decimal',width:110,require:true,align:'left'},
                       {field:'hpcont_dbid',title:'HP 合約主表PKID',type:'guid',width:110,align:'left'},
                       {field:'prod_dbid',title:'產品代碼,舊版ITEM_CODE',type:'guid',width:110,align:'left'},
                       {field:'net_price',title:'售價',type:'decimal',width:110,align:'left'},
                       {field:'status',title:'是否有效,Y / N',type:'string',width:110,align:'left'},
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
