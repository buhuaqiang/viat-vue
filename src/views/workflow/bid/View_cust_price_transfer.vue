<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/bid/View_cust_price_transfer.js此处编写
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
    import extend from "@/extension/workflow/bid/View_cust_price_transfer.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'price_transfer_dbid',
                footer: "Foots",
                cnName: 'Import Bid Price ',
                name: 'bid/View_cust_price_transfer',
                url: "/View_cust_price_transfer/",
                sortName: "created_date"
            });
            const editFormFields = ref({"bid_no":"","state":"","cust_id":"","group_id":"","add_group":[],"start_date":"","end_date":"","modified_date":"","created_date":"","pricegroup_dbid":""});
            const editFormOptions = ref([[{"title":"Bid NO","field":"bid_no","disabled":true},
                               {"dataKey":"transfer_status","data":[],"title":"Status","field":"state","type":"select"}],
                              [{"title":"Cust ID","field":"cust_id"},{"title":"Cust In Group","field":"cust_in_id","disabled":true}],
                              [{"title":"Group ID","field":"group_id"},
                                {"dataKey":"Status3","data":[],"title":"Group Import","field":"add_group","type":"radio"}
                               ],
                              [{"title":"Start Date","field":"start_date","type":"date"},
                               {"title":"End Date","field":"end_date","type":"date"}],
                              [{"title":"Applied Date","field":"created_date","disabled":true,"type":"date"},
                               {"title":"Modified Date","field":"modified_date","disabled":true,"type":"date"}],
                              [{"title":"","field":"pricegroup_dbid"}]]);
            const searchFormFields = ref({"bid_no":"","state":"","modified_date":"","created_date":"","requestor_name":"","group_id":"","cust_id":"",
                "pricegroup_dbid":"","cust_dbid":"","transfer_date":"","mpg_name":"","prod_id":"","prod_dbid":"","requestor":""});
            const searchFormOptions = ref([[{"title":"Bid NO","field":"bid_no","type":"like"},{"title":"Cust ID","field":"cust_id"}],
                [{"title":"Applied Date","field":"created_date","type":"date"},{"title":"Group ID","field":"group_id"}],
                [{"title":"Modified Date","field":"modified_date","type":"date"},
                    {"title":"Product ID","field":"prod_id"}
                   ],
                [{"title":"Requestor","field":"requestor","dataKey":"sysUserList","data":[],"type":"select"},{"dataKey":"transfer_status","data":[],"title":"Status","field":"state","type":"select"}],
                [{"title":"","field":"pricegroup_dbid"},{"title":"","field":"cust_dbid"},{"title":"","field":"prod_dbid"}]]);
            const columns = ref([{field:'price_transfer_dbid',title:'price_transfer_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'division',title:'division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'bid_no',title:'Bid NO',type:'string',link:true,width:120,readonly:true,align:'left',sort:true},
                       {field:'state',title:'Status',type:'string',bind:{ key:'transfer_status',data:[]},width:80,align:'left',sort:true},
                       {field:'modified_date',title:'Modified Date',type:'datetime',width:110,readonly:true,align:'left',sort:true},
                       {field:'created_date',title:'Applied Date',type:'datetime',width:110,readonly:true,align:'left',sort:true},
                       {field:'requestor_name',title:'Requestor',type:'string',width:110,hidden:true,align:'left',sort:true},
                       {field:'requestorName',title:'Requestor',type:'string',width:80,align:'left',sort:true},
                       {field:'requestor',title:'Requestor',type:'int',width:110,hidden:true,align:'left',sort:true},
                       {field:'group_id',title:'Group ID',type:'string',width:80,align:'left',sort:true},
                       {field:'group_name',title:'Group Name',type:'string',width:120,align:'left',sort:true},
                       {field:'cust_id',title:'Cust ID',type:'string',width:110,readonly:true,align:'left',sort:true},
                       {field:'cust_name',title:'Cust Name',type:'string',width:120,align:'left',sort:true},
                       {field:'prod_id',title:'Prod ID',type:'string',width:100,align:'left',sort:true},
                       {field:'pricegroup_dbid',title:'pricegroup_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'prod_ename',title:'Prod Name',type:'string',width:110,align:'left',sort:true},
                       {field:'cust_dbid',title:'cust_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'prod_dbid',title:'prod_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'nhi_price',title:'nhi_price',type:'decimal',width:110,hidden:true,align:'right',sort:true},
                       {field:'bmp_cust_id',title:'bmp_cust_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'net_price_ebms',title:'net_price_ebms',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'invoice_price',title:'invoice_price',type:'decimal',width:110,hidden:true,align:'right',sort:true},
                       {field:'net_price',title:'net_price',type:'decimal',width:110,hidden:true,align:'right',sort:true},
                       {field:'cust_id_ebms',title:'cust_id_ebms',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_id_ebms',title:'prod_id_ebms',type:'string',width:110,hidden:true,align:'left'},
                       {field:'min_qty_ebms',title:'min_qty_ebms',type:'int',width:110,hidden:true,align:'left'},
                       {field:'min_qty',title:'min_qty',type:'int',width:110,hidden:true,align:'right',sort:true},
                       {field:'price_list',title:'price_list',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'price_bid',title:'price_bid',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'price_close',title:'price_close',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'discount',title:'discount',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'final_discount',title:'final_discount',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'final_fg',title:'final_fg',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'territory_id',title:'territory_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'start_date',title:'Start Date',type:'datetime',width:110,hidden:true,readonly:true,align:'left',sort:true},
                       {field:'end_date',title:'End Date',type:'datetime',width:110,hidden:true,readonly:true,align:'left',sort:true},
                       {field:'add_group',title:'Group Import',type:'string',bind:{ key:'mul_select_for_pop',data:[]},width:110,hidden:true,align:'left'},
                       {field:'note',title:'Bid Note',type:'string',width:120,align:'left',sort:true},
                       {field:'transfer_date',title:'Transfer Date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'created_user',title:'created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_user',title:'modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'pendingReason',title:'Pending Reason',type:'string',width:200,align:'left',sort:true},
                       {field:'mpg_name',title:'MPG',type:'string',bind:{ key:'LocalMpgCategory',data:[]},width:120,hidden:true,align:'left'},
                       {field:'reserv_price',title:'reserv_price',type:'decimal',width:110,hidden:true,align:'left'}]);
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
