<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/fullallowance/View_invoice_pop.js此处编写
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
    import extend from "@/extension/dataentry/fullallowance/View_invoice_pop.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'salestransfer_dbid',
                footer: "Foots",
                cnName: 'invoicePop框',
                name: 'fullallowance/View_invoice_pop',
                url: "/View_invoice_pop/",
                sortName: "created_date"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'salestransfer_dbid',title:'列名salestransfer_dbid',type:'guid',width:110,require:true,align:'left',sort:true},
                       {field:'entity',title:'列名entity',type:'string',width:110,align:'left'},
                       {field:'division',title:'列名division',type:'string',width:110,align:'left'},
                       {field:'trans_type',title:'列名trans_type',type:'string',width:110,require:true,align:'left'},
                       {field:'trans_class',title:'列名trans_class',type:'string',width:110,align:'left'},
                       {field:'trans_date',title:'Invoice Date',type:'datetime',width:110,require:true,align:'left',sort:true},
                       {field:'invoice_no',title:'Invoice No',type:'string',width:110,align:'left'},
                       {field:'cust_order_no',title:'列名cust_order_no',type:'string',width:120,align:'left'},
                       {field:'order_no',title:'列名order_no',type:'string',width:110,align:'left'},
                       {field:'dist_cust_id',title:'列名dist_cust_id',type:'string',width:110,align:'left'},
                       {field:'cust_name',title:'列名cust_name',type:'string',width:110,align:'left'},
                       {field:'dist_prod_id',title:'列名dist_prod_id',type:'string',width:110,align:'left'},
                       {field:'prod_dbid',title:'列名prod_dbid',type:'guid',width:110,align:'left'},
                       {field:'cust_dbid',title:'列名cust_dbid',type:'guid',width:110,align:'left'},
                       {field:'lot_no',title:'列名lot_no',type:'string',width:110,align:'left'},
                       {field:'price',title:'列名price',type:'decimal',width:110,align:'left'},
                       {field:'qty',title:'列名qty',type:'decimal',width:110,align:'left'},
                       {field:'free_qty',title:'列名free_qty',type:'decimal',width:110,align:'left'},
                       {field:'amt',title:'列名amt',type:'decimal',width:110,align:'left'},
                       {field:'tax',title:'列名tax',type:'decimal',width:110,align:'left'},
                       {field:'ai_basedate',title:'列名ai_basedate',type:'datetime',width:110,align:'left',sort:true},
                       {field:'dist_id',title:'列名dist_id',type:'string',width:110,align:'left'},
                       {field:'margin_rate',title:'列名margin_rate',type:'decimal',width:110,align:'left'},
                       {field:'margin_amt',title:'列名margin_amt',type:'decimal',width:110,align:'left'},
                       {field:'share_yn',title:'列名share_yn',type:'string',width:110,align:'left'},
                       {field:'nhi_price',title:'列名nhi_price',type:'decimal',width:110,align:'left'},
                       {field:'net_price',title:'列名net_price',type:'decimal',width:110,align:'left'},
                       {field:'prod_source',title:'列名prod_source',type:'string',width:110,align:'left'},
                       {field:'trans_class1',title:'列名trans_class1',type:'string',width:110,align:'left'},
                       {field:'year',title:'列名year',type:'int',width:110,align:'left'},
                       {field:'period',title:'列名period',type:'int',width:110,align:'left'},
                       {field:'price_dist',title:'列名price_dist',type:'decimal',width:110,align:'left'},
                       {field:'created_user',title:'列名created_user',type:'int',width:110,align:'left'},
                       {field:'created_username',title:'列名created_username',type:'string',width:110,align:'left'},
                       {field:'created_client',title:'列名created_client',type:'int',width:110,align:'left'},
                       {field:'created_clientusername',title:'列名created_clientusername',type:'string',width:110,align:'left'},
                       {field:'created_date',title:'列名created_date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_user',title:'列名modified_user',type:'int',width:110,align:'left'},
                       {field:'modified_username',title:'列名modified_username',type:'string',width:110,align:'left'},
                       {field:'modified_client',title:'列名modified_client',type:'int',width:110,align:'left'},
                       {field:'modified_clientusername',title:'列名modified_clientusername',type:'string',width:110,align:'left'},
                       {field:'modified_date',title:'列名modified_date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'prod_id',title:'Product Id',type:'string',width:110,align:'left'},
                       {field:'prod_ename',title:'Product Name',type:'string',width:110,align:'left'},
                       {field:'cust_id',title:'Customer Id',type:'string',width:110,align:'left'},
                       {field:'cust_name1',title:'Customer Name',type:'string',width:120,align:'left'},
                       {field:'unit_price',title:'unit_price',type:'decimal',width:110,align:'left'}]);
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
