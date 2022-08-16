<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/approve/View_wk_need_approve_main.js此处编写
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
    import extend from "@/extension/workflow/approve/View_wk_need_approve_main.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'bidmast_dbid',
                footer: "Foots",
                cnName: 'Work Flow Need Approve',
                name: 'approve/View_wk_need_approve_main',
                url: "/View_wk_need_approve_main/",
                sortName: "bid_no"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({"bid_no":"","apply_type":"","created_username":"","created_date":""});
            const searchFormOptions = ref([[{"dataKey":"ApprovalType","data":[],"title":"Apply Type","field":"apply_type","type":"select"},{"title":"BId No","field":"bid_no","type":"text"}],[{"title":"Approve Date","field":"created_date","type":"date"},{"title":"Requestor","field":"created_username","type":"text"}]]);
            const columns = ref([{field:'bid_no',title:'BId No',type:'string',link:true,sort:true,width:110,require:true,align:'left',sort:true},
                       {field:'apply_type',title:'Apply Type',type:'string',bind:{ key:'ApprovalType',data:[]},sort:true,width:110,require:true,align:'left'},
                       {field:'territory_id',title:'Territoy ID',type:'string',width:80,align:'left'},
                       {field:'cust_id',title:'Customer ID',type:'string',width:80,align:'left'},
                       {field:'cust_name',title:'Customer Name',type:'string',width:120,align:'left'},
                       {field:'group_id',title:'Group Id',type:'string',width:110,align:'left'},
                       {field:'group_name',title:'Group Name',type:'string',width:120,align:'left'},
                       {field:'bidmast_dbid',title:'bidmast_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'contstret_dbid',title:'contstret_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'pricegroup_dbid',title:'pricegroup_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'cust_dbid',title:'cust_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'bid_date',title:'bid_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'start_date',title:'start_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'end_date',title:'end_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'order_date',title:'order_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'invoice_type',title:'invoice_type',type:'string',width:110,hidden:true,align:'left'},
                       {field:'shipto_address',title:'shipto_address',type:'string',width:220,hidden:true,align:'left'},
                       {field:'po_no',title:'po_no',type:'string',width:110,hidden:true,align:'left'},
                       {field:'remarks',title:'Remarks',type:'string',width:110,hidden:true,align:'left'},
                       {field:'upload',title:'upload',type:'string',width:220,hidden:true,align:'left'},
                       {field:'status',title:'Status',type:'string',bind:{ key:'ApprovalStatus',data:[]},width:110,align:'left'},
                       {field:'approval_user',title:'approval_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'approval_username',title:'approval_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'approved_date',title:'approved_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'created_user',title:'created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'Requestor',type:'string',width:110,align:'left'},
                       {field:'created_client',title:'created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'Create Date',type:'datetime',sort:true,width:110,align:'left',sort:true},
                       {field:'modified_user',title:'modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'modified_date',type:'datetime',width:110,hidden:true,align:'left',sort:true}]);
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
