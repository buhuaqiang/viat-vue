<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/bid/View_wk_bid_price_apply_main.js此处编写
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
    import extend from "@/extension/workflow/bid/View_wk_bid_price_apply_main.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'bidmast_dbid',
                footer: "Foots",
                cnName: 'BidPrice Apply',
                name: 'bid/View_wk_bid_price_apply_main',
                url: "/View_wk_bid_price_apply_main/",
                sortName: "BID_NO"
            });
            const editFormFields = ref({"bidmast_dbid":"","bid_no":"","contstret_dbid":"","cont_stretagy_id":"","cont_stretagy_name":"","apply_type":"","cust_id":"","cust_name":"","group_id":"","group_name":"","cust_dbid":"","pricegroup_dbid":"","isgroup":"","bid_date":"","start_date":"","end_date":"","upload":"","remarks":"","cust_exists_group_id":"","cust_exists_group_name":""});
            const editFormOptions = ref([[ {"dataKey":"ApprovalType","data":[],"title":"Apply Type","required":true,"field":"apply_type","type":"select"},
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
            const searchFormFields = ref({"bid_no":"","cust_dbid":"","pricegroup_dbid":"","created_date":"","status":""});
            const searchFormOptions = ref([[{"title":"Bid NO","field":"bid_no","type":"text"}],
                [{"title":"Customer ID","field":"cust_id","type":"text"},
                    { title: "", field: "cust_dbid",hidden:true},
                    {"title":"Group ID","field":"group_id","type":"text"},
                    { title: "", field: "pricegroup_dbid",hidden: true },],
                [{"dataKey":"ApprovalStatus","data":[],"title":"Approval Status","field":"status","type":"select"},{"title":"Apply Date","field":"created_date","type":"date"}]]);
            const columns = ref([{field:'bid_no',title:'Bid NO',type:'string',sort:true,width:120,require:true,align:'left',sort:true,link: true},
                       {field:'cust_id',title:'Customer ID',type:'string',width:90,align:'left'},
                       {field:'cust_name',title:'Customer Name',type:'string',width:110,align:'left'},
                       {field:'group_id',title:'Group ID',type:'string',width:110,align:'left'},
                       {field:'group_name',title:'Group Name',type:'string',width:120,align:'left'},
                       {field:'cust_dbid',title:'主鍵',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'pricegroup_dbid',title:'主鍵',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'approval_username',title:'Current Approval User',type:'string',width:110,align:'left'},
                       {field:'apply_type',title:'Apply Type',type:'string',bind:{ key:'ApprovalType',data:[]},width:110,readonly:true,require:true,align:'left'},
                       {field:'status',title:'Approval Status',type:'string',bind:{ key:'ApprovalStatus',data:[]},width:110,align:'left'},
                       {field:'created_username',title:'Requestor',type:'string',width:110,align:'left',hidden: true},
                       {field:'bid_date',title:'Bid Date',type:'datetime',width:80,require:true,align:'left',sort:true},
                       {field:'start_date',title:'Start Date',type:'datetime',width:90,require:true,align:'left',sort:true},
                       {field:'end_date',title:'End Date',type:'datetime',width:80,require:true,align:'left',sort:true},
                       {field:'created_date',title:'Created Date',type:'datetime',width:150,align:'left',sort:true},
                       {field:'bidmast_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:80,hidden:true,align:'left'},
                       {field:'modified_username',title:'最後修改用戶',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'建立者的委託人',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:80,hidden:true,align:'left'},
                       {field:'approval_user',title:'當前審批人ID',type:'int',width:80,hidden:true,align:'left'},
                       {field:'upload',title:'Attachments',type:'file',width:220,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'最後修改者的委託人',type:'string',width:110,hidden:true,align:'left'},
                       {field:'remarks',title:'Remark',type:'string',width:110,align:'left',hidden:true},
                       {field:'shipto_address',title:'預留',type:'string',width:220,hidden:true,align:'left'},
                       {field:'invoice_type',title:'預留',type:'string',width:110,hidden:true,align:'left'},
                       {field:'order_date',title:'預留',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'territory_id',title:'territory_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'contstret_dbid',title:'contstret_dbid ',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'po_no',title:'預留',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'isgroup',title:'Is Group',type:'string',bind:{ key:'CustomerType',data:[]},width:110,require:true,align:'left',hidden:true}]);
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
