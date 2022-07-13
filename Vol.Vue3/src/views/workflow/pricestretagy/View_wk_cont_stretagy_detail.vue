<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/pricestretagy/View_wk_cont_stretagy_detail.js此处编写
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
    import extend from "@/extension/workflow/pricestretagy/View_wk_cont_stretagy_detail.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'contstretail_dbid',
                footer: "Foots",
                cnName: '價格策略合約產品',
                name: 'pricestretagy/View_wk_cont_stretagy_detail',
                url: "/View_wk_cont_stretagy_detail/",
                sortName: "created_date"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'prod_enameid',title:'產品',type:'string',width:120,align:'left',sort:true},
                       {field:'nhi_price',title:'NHI',type:'decimal',width:110,align:'left'},
                       {field:'invoice_price',title:'發票價',type:'decimal',width:110,align:'left'},
                       {field:'net_price',title:'實售價',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'min_qty',title:'最低數量',type:'int',width:110,align:'left'},
                       {field:'inv_type',title:'類別',type:'string',width:110,align:'left'},
                       {field:'contstretail_dbid',title:'列名contstretail_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'contstret_dbid',title:'列名contstret_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'prod_dbid',title:'列名prod_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'created_user',title:'列名created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'列名created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'列名created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'列名created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'列名created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'列名modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'列名modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'列名modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'列名modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'列名modified_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'prod_id',title:'列名prod_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_ename',title:'列名prod_ename',type:'string',width:110,hidden:true,align:'left'}]);
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
