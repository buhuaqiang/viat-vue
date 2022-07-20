<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/fullallowance/View_full_allowance_reverse.js此处编写
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
    import extend from "@/extension/dataentry/fullallowance/View_full_allowance_reverse.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'hpallw_dbid',
                footer: "Foots",
                cnName: '',
                name: 'fullallowance/View_full_allowance_reverse',
                url: "/View_full_allowance_reverse/",
                sortName: "created_date"
            });
            const editFormFields = ref({"cust_id":"","prod_id":"","trans_date":"","invoice_no":"","qty":"","amount":"","remarks":"","action_type":"","hpcont_dbid":""});
            const editFormOptions = ref([[{"title":"Customer ID","field":"cust_id","required":true}],
                              [{"title":"Product ID","field":"prod_id","required":true},
                               {"title":"TransDate","required":true,"field":"trans_date","type":"date"}],
                              [{"title":"Invoice No","field":"invoice_no","required":true}],
                              [{"title":"Qty","field":"qty","type":"decimal"}],
                              [{"title":"Amount","field":"amount","type":"decimal","required":true}],
                              [{"title":"Remarks","field":"remarks"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'cust_id',title:'Customer ID',type:'string',width:110,align:'left',sort:true},
                       {field:'cust_name',title:'Customer',type:'string',width:120,align:'left'},
                       {field:'prod_id',title:'Product ID',type:'string',width:110,align:'left'},
                       {field:'prod_ename',title:'Product',type:'string',width:110,align:'left'},
                       {field:'amount',title:'Amount',type:'decimal',width:110,align:'left'},
                       {field:'qty',title:'Qty',type:'decimal',width:110,align:'left'},
                       {field:'invoice_date',title:'Invoice Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'invoice_no',title:'Invoice No',type:'string',width:110,align:'left'},
                       {field:'remarks',title:'Remarks',type:'string',width:220,align:'left'},
                       {field:'modified_user',title:'Modify_user',type:'int',width:110,align:'left'},
                       {field:'entity',title:'列名entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'division',title:'列名division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'action_type',title:'列名action_type',type:'string',width:110,hidden:true,align:'left'},
                       {field:'allw_type',title:'列名allw_type',type:'int',width:110,hidden:true,align:'left'},
                       {field:'year',title:'列名year',type:'int',width:110,hidden:true,align:'left'},
                       {field:'period',title:'列名period',type:'int',width:110,hidden:true,align:'left'},
                       {field:'hpcont_dbid',title:'列名hpcont_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'prod_dbid',title:'列名prod_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'cust_dbid',title:'列名cust_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'dist_id',title:'列名dist_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'trans_date',title:'TransDate',type:'datetime',width:110,require:true,align:'left',sort:true},
                       {field:'status',title:'列名status',type:'string',width:110,hidden:true,align:'left'},
                       {field:'o_contract_no',title:'列名o_contract_no',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_user',title:'列名created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'列名created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'列名created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'列名created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'列名created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_username',title:'列名modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'列名modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'列名modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'percent',title:'列名percent',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'hpallw_dbid',title:'hpallw_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'}]);
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
