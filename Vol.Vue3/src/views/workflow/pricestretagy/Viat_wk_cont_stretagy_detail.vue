<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/pricestretagy/Viat_wk_cont_stretagy_detail.js此处编写
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
    import extend from "@/extension/workflow/pricestretagy/Viat_wk_cont_stretagy_detail.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'contstretail_dbid',
                footer: "Foots",
                cnName: '價格策略合約產品信息',
                name: 'pricestretagy/Viat_wk_cont_stretagy_detail',
                url: "/Viat_wk_cont_stretagy_detail/",
                sortName: "created_date"
            });
            const editFormFields = ref({"contstret_dbid":"","prod_dbid":"","min_qty":"","invoice_price":"","net_price":""});
            const editFormOptions = ref([[{"title":"FK","required":true,"field":"contstret_dbid"},
                               {"title":"產品表主鍵","required":true,"field":"prod_dbid"},
                               {"title":"最低數量","field":"min_qty","type":"number"},
                               {"title":"發票價","field":"invoice_price","type":"decimal"},
                               {"title":"實售價","field":"net_price","type":"decimal"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'contstretail_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'contstret_dbid',title:'FK',type:'guid',width:110,require:true,align:'left',sort:true},
                       {field:'prod_dbid',title:'產品表主鍵',type:'guid',width:110,require:true,align:'left'},
                       {field:'min_qty',title:'最低數量',type:'int',width:110,align:'left'},
                       {field:'invoice_price',title:'發票價',type:'decimal',width:110,align:'left'},
                       {field:'net_price',title:'實售價',type:'decimal',width:110,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:110,align:'left'},
                       {field:'created_username',title:'列created_username',type:'string',width:110,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,align:'left'},
                       {field:'created_clientusername',title:'列created_clientusername',type:'string',width:110,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,align:'left'},
                       {field:'modified_username',title:'列modified_username',type:'string',width:110,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,align:'left'},
                       {field:'modified_clientusername',title:'列modified_clientusername',type:'string',width:110,align:'left'},
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
