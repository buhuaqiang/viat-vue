<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/price/View_cust_price.js此处编写
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
    import extend from "@/extension/price/price/View_cust_price.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'custprice_dbid',
                footer: "Foots",
                cnName: 'Group Price Book',
                name: 'price/View_cust_price',
                url: "/View_cust_price/",
                sortName: "bid_no"
            });
            const editFormFields = ref({"bid_no":"","status":"","group_id":"","prod_id":"","prod_dbid":"","pricegroup_dbid":"","start_date":"","end_date":"","nhi_price":"","invoice_price":"","net_price":"","min_qty":"","remarks":""});
            const editFormOptions = ref([[{"title":"Bid NO","field":"bid_no"},
                               {"dataKey":"Status_YN","data":[],"title":"Status","required":true,"field":"status","type":"select"}],
                              [{"title":"Group Id","field":"group_id"},
                               {"title":"Product Id","field":"prod_id"}],
                              [{"title":"","field":"prod_dbid"},
                               {"title":"","field":"pricegroup_dbid"}],
                              [{"title":"Start Date","required":true,"field":"start_date","type":"date"},
                               {"title":"End Date","required":true,"field":"end_date","type":"date"}],
                              [{"title":"NHI Price","field":"nhi_price","disabled":true,"type":"decimal"},
                               {"title":"Invoice Price","field":"invoice_price","type":"decimal"}],
                              [{"title":"Net Price","field":"net_price","type":"decimal"},
                               {"title":"Min Qty","field":"min_qty","type":"number"}],
                              [{"title":"Remarks","field":"remarks","colSize":10,"type":"textarea"}]]);
            const searchFormFields = ref({"group_id":"","pricegroup_dbid":"","start_date":"","end_date":"","modified_date":"","prods":[],"QueryStatus":""});
            const searchFormOptions = ref([[{"title":"Group Id","field":"group_id"},{"dataKey":"mul_select_for_pop","data":[],"title":"Products","field":"prods","type":"selectList"}],[{"dataKey":"price_book_query_status","data":[],"title":"Status","field":"QueryStatus","type":"select"},{"title":"Modified Date","field":"modified_date","type":"date"}],[{"title":"Start Date","field":"start_date","type":"date"},{"title":"End Date","field":"end_date","type":"date"}],[{"title":"","field":"pricegroup_dbid"}]]);
            const columns = ref([{field:'group_id',title:'Group Id',type:'string',link:true,width:110,align:'left',sort:true},
                       {field:'group_name',title:'Group Name',type:'string',width:120,align:'left'},
                       {field:'prod_id',title:'Product Id',type:'string',width:110,align:'left'},
                       {field:'prod_ename',title:'Product Name',type:'string',width:110,align:'left'},
                       {field:'custprice_dbid',title:'custprice_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'division',title:'division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'bid_no',title:'Bid NO',type:'string',width:110,hidden:true,align:'left'},
                       {field:'requestor',title:'requestor',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_dbid',title:'prod_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'pricegroup_dbid',title:'pricegroup_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'nhi_price',title:'NHI Price',type:'decimal',width:110,readonly:true,align:'left'},
                       {field:'invoice_price',title:'Invoice Price',type:'decimal',width:110,align:'left'},
                       {field:'net_price',title:'Net Price',type:'decimal',width:110,align:'left'},
                       {field:'min_qty',title:'Min Qty',type:'int',width:90,align:'left'},
                       {field:'start_date',title:'Start Date',type:'datetime',width:110,require:true,align:'left',sort:true},
                       {field:'end_date',title:'End Date',type:'datetime',width:110,require:true,align:'left',sort:true},
                       {field:'status',title:'Status',type:'string',bind:{ key:'Status_YN',data:[]},width:110,require:true,align:'left'},
                       {field:'is_used',title:'is_used',type:'string',width:110,hidden:true,align:'left'},
                       {field:'source',title:'source',type:'string',width:110,hidden:true,align:'left'},
                       {field:'nhi_id',title:'nhi_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'remarks',title:'Remarks',type:'string',width:220,align:'left'},
                       {field:'sys_end_date',title:'sys_end_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'org_start_date',title:'org_start_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'org_end_date',title:'org_end_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'updated_user',title:'updated_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'updated_date',title:'updated_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'created_user',title:'created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'Modified Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'pricegroup_dbidname',title:'pricegroup_dbidname',type:'string',width:180,hidden:true,require:true,align:'left'},
                       {field:'entity',title:'entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_cname',title:'prod_cname',type:'string',width:110,hidden:true,align:'left'},
                       {field:'pack_size_pri',title:'pack_size_pri',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'state',title:'state',type:'string',width:110,hidden:true,align:'left'},
                       {field:'C1',title:'C1',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_dbidname',title:'Product',type:'string',width:120,hidden:true,require:true,align:'left'},
                       {field:'prods',title:'Products',type:'string',bind:{ key:'mul_select_for_pop',data:[]},width:110,hidden:true,require:true,align:'left'},
                       {field:'QueryStatus',title:'Status',type:'string',bind:{ key:'price_book_query_status',data:[]},width:110,hidden:true,require:true,align:'left'}]);
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
