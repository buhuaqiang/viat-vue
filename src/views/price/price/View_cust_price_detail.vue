<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/price/View_cust_price_detail.js此处编写
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
    import extend from "@/extension/price/price/View_cust_price_detail.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'pricedetail_dbid',
                footer: "Foots",
                cnName: 'Cust Price Book',
                name: 'price/View_cust_price_detail',
                url: "/View_cust_price_detail/",
                sortName: "cust_id"
            });
            const editFormFields = ref({"status":"","bid_no":"","cust_id":"","prod_id":"","start_date":"","end_date":"","nhi_price":"","invoice_price":"","net_price":"","min_qty":"","gross_price":"","remarks":"","prod_dbid":"","cust_dbid":""});
            const editFormOptions = ref([[{"title":"Bid NO","field":"bid_no"},
                               {"dataKey":"Status_YN","data":[],"title":"status","required":true,"field":"status","type":"select"}],
                              [{"title":"Cust ID","field":"cust_id"},
                               {"title":"Product ID","field":"prod_id"}],
                              [{"title":"Start Date","field":"start_date","type":"date"},
                               {"title":"End Date","field":"end_date","type":"date"}],
                              [{"title":"NHI Price","field":"nhi_price","type":"decimal"},
                               {"title":"Invoice Price","field":"invoice_price","type":"decimal"}],
                              [{"title":"Net Price","field":"net_price","type":"decimal"},
                               {"title":"Min Qty","field":"min_qty","type":"number"}],
                              [{"title":"Gross Price","field":"gross_price","type":"decimal"}],
                              [{"title":"Remarks","field":"remarks","colSize":8}],
                              [{"title":"","field":"prod_dbid"},
                               {"title":"","field":"cust_dbid"}]]);
            const searchFormFields = ref({"cust_id":"","start_date":"","end_date":"","modified_date":"","prods":[],"cust_dbid":"","QueryStatus":""});
            const searchFormOptions = ref([[{"title":"Cust ID","field":"cust_id"},{"dataKey":"mul_select_for_pop","data":[],"title":"Products","field":"prods","type":"selectList"}],[{"title":"","field":"cust_dbid"},{"dataKey":"price_book_query_status","data":[],"title":"Status","field":"QueryStatus","type":"select"},{"title":"Modified Date","field":"modified_date","type":"date"}],[{"title":"Start Date","field":"start_date","type":"date"},{"title":"End Date","field":"end_date","type":"date"}]]);
            const columns = ref([{field:'pricedetail_dbid',title:'pricedetail_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'cust_id',title:'Cust ID',type:'string',link:true,width:110,align:'left',sort:true},
                       {field:'cust_name',title:'Cust Name',type:'string',width:120,align:'left'},
                       {field:'source_type',title:'source_type',type:'string',width:110,hidden:true,require:true,align:'left'},
                       {field:'group_id',title:'Group ID',type:'string',width:110,require:true,align:'left'},
                       {field:'group_name',title:'Group Name',type:'string',width:120,align:'left'},
                       {field:'cust_dbidname',title:'Cust',type:'string',width:180,hidden:true,require:true,align:'left'},
                       {field:'prod_id',title:'Product ID',type:'string',width:110,align:'left'},
                       {field:'prod_ename',title:'Product Name',type:'string',width:110,align:'left'},
                       {field:'prod_dbidname',title:'Product',type:'string',width:120,hidden:true,require:true,align:'left'},
                       {field:'nhi_price',title:'NHI Price',type:'decimal',width:110,align:'left'},
                       {field:'invoice_price',title:'Invoice Price',type:'decimal',width:110,align:'left'},
                       {field:'net_price',title:'Net Price',type:'decimal',width:110,align:'left'},
                       {field:'gross_price',title:'Gross Price',type:'decimal',width:110,align:'left'},
                       {field:'min_qty',title:'Min Qty',type:'int',width:80,align:'left'},
                       {field:'status',title:'status',type:'string',bind:{ key:'Status_YN',data:[]},width:80,require:true,align:'left'},
                       {field:'start_date',title:'Start Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'end_date',title:'End Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_date',title:'Modified Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'remarks',title:'Remarks',type:'string',width:220,align:'left'},
                       {field:'state',title:'state',type:'string',width:110,hidden:true,align:'left'},
                       {field:'cust_group_status',title:'cust_group_status',type:'string',width:110,hidden:true,align:'left'},
                       {field:'emp_ename',title:'emp_ename',type:'string',width:110,hidden:true,align:'left'},
                       {field:'custStatus',title:'custStatus',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prods',title:'Products',type:'string',bind:{ key:'mul_select_for_pop',data:[]},width:110,hidden:true,require:true,align:'left'},
                       {field:'bid_no',title:'Bid NO',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_dbid',title:'prod_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'cust_dbid',title:'cust_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'QueryStatus',title:'Status',type:'string',bind:{ key:'price_book_query_status',data:[]},width:110,require:true,align:'left'}]);
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
