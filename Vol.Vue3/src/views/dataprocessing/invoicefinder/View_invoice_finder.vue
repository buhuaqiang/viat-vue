<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/invoicefinder/View_invoice_finder.js此处编写
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
    import extend from "@/extension/dataprocessing/invoicefinder/View_invoice_finder.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'invoice_dbid',
                footer: "Foots",
                cnName: 'view_invoice_finder',
                name: 'invoicefinder/View_invoice_finder',
                url: "/View_invoice_finder/",
                sortName: "created_date"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({"entity":"","dividion":"","distributor":"","invoice_start_date":"","invoice_end_date":"","pay_ment_date":"","allw_account_code":"","allw_so_type":"","select_file":""});
            const searchFormOptions = ref([[{"dataKey":"InvoiceFinderEntity","data":[],"title":"Entity","field":"entity","type":"select"},{"dataKey":"division","data":[],"title":"Dividion","field":"dividion","type":"select"}],[{"title":"Distributor","field":"distributor"}],[{"title":"Invoice Start Date","field":"invoice_start_date","type":"date"},{"title":"Invoice End Date","field":"invoice_end_date","type":"date"}],[{"title":"Payment Date","field":"pay_ment_date","type":"date"}],[{"dataKey":"AllwOSType","data":[],"title":"Allw.SOType","field":"allw_so_type","type":"select"},{"title":"Allw.Account Code","field":"allw_account_code","disabled":true}],[{"title":"CSV File","field":"select_file","type":"file"}],]);
            const columns = ref([{field:'invoice_dbid',title:'列名invoice_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'entity',title:'列名entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'dividion',title:'列名dividion',type:'string',width:110,hidden:true,align:'left'},
                       {field:'distributor',title:'列名distributor',type:'string',width:110,hidden:true,align:'left'},
                       {field:'invoice_start_date',title:'列名invoice_start_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'invoice_end_date',title:'列名invoice_end_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'pay_ment_date',title:'列名pay_ment_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'allw_account_code',title:'列名allw_account_code',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_id',title:'Prod Id',type:'string',width:110,align:'left',sort:true},
                       {field:'prod_ename',title:'Prod Name',type:'string',width:110,align:'left'},
                       {field:'amount',title:'Amount',type:'int',width:110,align:'left'},
                       {field:'allw_so_type',title:'Allw.SOType',type:'string',width:110,align:'left'},
                       {field:'allw_type',title:'Allw.Type',type:'string',width:110,align:'left'},
                       {field:'est_invoice',title:'Est.Invoice',type:'string',width:110,align:'left'},
                       {field:'est_invoice_date',title:'Est.Invoice.Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'final_invoice',title:'Final.Invoice',type:'string',width:110,align:'left'},
                       {field:'final_invoice_date',title:'Final.Invoice.Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'select_file',title:'CSVFile',type:'file',width:110,align:'left',hidden:true},
                       {field:'created_date',title:'列名created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true}]);
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
