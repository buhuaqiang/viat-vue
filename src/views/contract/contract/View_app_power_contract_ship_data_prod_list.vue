<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/contract/View_app_power_contract_ship_data_prod_list.js此处编写
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
    import extend from "@/extension/contract/contract/View_app_power_contract_ship_data_prod_list.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'salestransfer_dbid',
                footer: "Foots",
                cnName: '發票商品明細',
                name: 'contract/View_app_power_contract_ship_data_prod_list',
                url: "/View_app_power_contract_ship_data_prod_list/",
                sortName: "trans_date"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({"invoice_no":"","powercont_dbid":""});
            const searchFormOptions = ref([[{"title":"","field":"invoice_no"},{"title":"","field":"powercont_dbid"}]]);
            const columns = ref([{field:'invoice_no',title:'invoice_no',type:'string',width:110,align:'left',sort:true},
                       {field:'trans_date',title:'trans_date',type:'datetime',width:150,require:true,align:'left',sort:true},
                       {field:'custId',title:'custId',type:'string',width:110,align:'left'},
                       {field:'cust_name',title:'cust_name',type:'string',width:120,hidden:true,align:'left'},
                       {field:'custName',title:'custName',type:'string',width:110,align:'left'},
                       {field:'prod_id',title:'prod_id',type:'string',width:110,align:'left'},
                       {field:'prod_ename',title:'prod_ename',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_cname',title:'prod_cname',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_sname',title:'prod_sname',type:'string',width:110,align:'left'},
                       {field:'powercont_dbid',title:'powercont_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'qty',title:'qty',type:'decimal',width:110,align:'left'},
                       {field:'salestransfer_dbid',title:'salestransfer_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'net_price',title:'net_price',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'prod_source',title:'prod_source',type:'string',width:110,hidden:true,align:'left'},
                       {field:'trans_class1',title:'trans_class1',type:'string',width:110,hidden:true,align:'left'},
                       {field:'year',title:'year',type:'int',width:80,hidden:true,align:'left'},
                       {field:'period',title:'period',type:'int',width:80,hidden:true,align:'left'},
                       {field:'price_dist',title:'price_dist',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'created_user',title:'created_user',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'modified_user',type:'int',width:80,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'modified_client',type:'int',width:80,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'modified_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'nhi_price',title:'nhi_price',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'created_client',type:'int',width:80,hidden:true,align:'left'},
                       {field:'share_yn',title:'share_yn',type:'string',width:110,hidden:true,align:'left'},
                       {field:'margin_rate',title:'margin_rate',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'entity',title:'entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'division',title:'division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'trans_type',title:'trans_type',type:'string',width:110,hidden:true,require:true,align:'left'},
                       {field:'trans_class',title:'trans_class',type:'string',width:110,hidden:true,align:'left'},
                       {field:'cust_order_no',title:'cust_order_no',type:'string',width:120,hidden:true,align:'left'},
                       {field:'order_no',title:'order_no',type:'string',width:110,hidden:true,align:'left'},
                       {field:'dist_cust_id',title:'dist_cust_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'margin_amt',title:'margin_amt',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'dist_prod_id',title:'dist_prod_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'cust_dbid',title:'cust_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'lot_no',title:'lot_no',type:'string',width:110,hidden:true,align:'left'},
                       {field:'price',title:'price',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'free_qty',title:'free_qty',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'amt',title:'amt',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'tax',title:'tax',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'ai_basedate',title:'ai_basedate',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'dist_id',title:'dist_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_dbid',title:'prod_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'dbid',title:'dbid',type:'int',width:80,hidden:true,require:true,align:'left'}]);
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
