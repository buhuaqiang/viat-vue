<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/bid/View_order_apply.js此处编写
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
    import extend from "@/extension/workflow/bid/View_order_apply.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'bidmast_dbid',
                footer: "Foots",
                cnName: 'All Bid Order Apply',
                name: 'bid/View_order_apply',
                url: "/View_order_apply/",
                sortName: "created_date"
            });
            const editFormFields = ref({"bid_no":"","apply_type":"","cust_id":"","isgroup":"","bid_date":"","cust_exists_group_id":"","cust_exists_group_name":"","group_id":""});
            const editFormOptions = ref([[{"dataKey":"ApprovalType","data":[],"title":"Apply Type","required":true,"field":"apply_type","type":"select"},
                {"title":"Bid NO","field":"bid_no","type":"text",readonly:true},
                {"title":"bidmast dbid","field":"bidmast_dbid",hidden:true},
                {"title":"contstret_dbid","field":"contstret_dbid",hidden:true},
                {"title":"cont_stretagy_id","field":"cont_stretagy_id",hidden:true},
                {"title":"cont_stretagy_name","field":"cont_stretagy_name",hidden:true}],
                [{"dataKey":"CustomerType","data":[],"title":"Apply Option ","required":true,"field":"isgroup","type":"radio"},
                    {"title":"Customer DBID","field":"cust_dbid","type":"text",hidden:true},
                    {"title":"Customer ID","field":"cust_id","type":"text"},
                    { title: "Customer Name", field: "cust_name", align: "left",hidden: true},
                    {"title":"Group DBID","field":"pricegroup_dbid","type":"text",hidden:true},
                    {"title":"Group ID","field":"group_id","type":"text"},
                    { title: "Group Name", field: "group_name", align: "left",hidden: true},],
                [{"title":"Customer In Group ID ","field":"cust_exists_group_id","type":"input",readonly: true,hidden: true},
                    {"title":"Customer In Group Name","field":"cust_exists_group_name","type":"input",readonly: true,hidden: true}],
                [{"title":"Bid Date","required":true,"field":"bid_date","type":"date",readonly: true}],
                [{"title":"Start Date","required":true,"field":"start_date","type":"date"},
                    {"title":"End Date","required":true,"field":"end_date","type":"date"}],
                [{"title":"Attachments","field":"upload","type":"file"}],
                [{"title":"Remark","field":"remarks","type":"textarea"}]]);
            const searchFormFields = ref({"bid_no":"","start_date":"","status":"","cust_id":""});
            const searchFormOptions = ref([[{"title":"Bid No","field":"bid_no","type":"like"},{"title":"Cust Id","field":"cust_id"}],[{"title":"Start Date","field":"start_date","type":"date"},{"dataKey":"ApprovalStatus","data":[],"title":"Status","field":"status","type":"select"}]]);
            const columns = ref([{field:'bidmast_dbid',title:'列名bidmast_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'bid_no',title:'Bid No',type:'string',width:110,align:'left',sort:true,link: true},
                {field:'status',title:'Status',type:'string',bind:{ key:'ApprovalStatus',data:[]},width:110,align:'left'},
                {field:'apply_type',title:'Apply Type',type:'string',bind:{ key:'ApprovalType',data:[]},width:110,require:true,align:'left'},
                {field:'cust_id',title:'Cust Id',type:'string',width:110,align:'left'},
                {field:'cust_name',title:'Cust Name',type:'string',width:120,align:'left'},
                {field:'prod_id',title:'Prod Id',type:'string',width:110,align:'left'},
                {field:'prod_ename',title:'Prod Name',type:'string',width:110,align:'left'},
                {field:'qty',title:'Qty',type:'int',width:110,align:'left'},
                       {field:'bid_date',title:'Bid Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'start_date',title:'Start Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'end_date',title:'End Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'remarks',title:'Remarks',type:'string',width:110,align:'left',hidden:true},
                       {field:'upload',title:'Upload',type:'string',width:220,align:'left',hidden:true},
                       {field:'isgroup',title:'Is group',type:'string',bind:{ key:'CustomerType',data:[]},width:110,require:true,align:'left',hidden:true},
                       {field:'ordetail_dbid',title:'列名ordetail_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'cont_stretagy_name',title:'列名cont_stretagy_name',type:'string',width:120,hidden:true,align:'left'},
                       {field:'cont_stretagy_id',title:'列名cont_stretagy_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'group_name',title:'列名group_name',type:'string',width:120,hidden:true,align:'left'},
                       {field:'group_id',title:'列名group_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'approved_date',title:'列名approved_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_date',title:'列名modified_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_clientusername',title:'列名modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'列名modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'列名modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_user',title:'列名modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'列名created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'created_clientusername',title:'列名created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'列名created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'列名created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_user',title:'列名created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'approval_username',title:'列名approval_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'approval_user',title:'列名approval_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'po_no',title:'列名po_no',type:'string',width:110,hidden:true,align:'left'},
                       {field:'shipto_address',title:'列名shipto_address',type:'string',width:220,hidden:true,align:'left'},
                       {field:'invoice_type',title:'列名invoice_type',type:'string',width:110,hidden:true,align:'left'},
                       {field:'order_date',title:'列名order_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'territory_id',title:'列名territory_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'cust_dbid',title:'列名cust_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'pricegroup_dbid',title:'列名pricegroup_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'contstret_dbid',title:'列名contstret_dbid',type:'guid',width:110,hidden:true,align:'left'}]);
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
