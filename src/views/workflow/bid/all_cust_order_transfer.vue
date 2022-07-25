<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/bid/View_cust_order_transfer.js此处编写
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
    import extend from "@/extension/workflow/bid/all_cust_order_transfer.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'order_transfer_dbid',
                footer: "Foots",
                cnName: 'All Bid Order',
                name: 'bid/View_cust_order_transfer',
                url: "/View_cust_order_transfer/GetAllPageData",
                sortName: "created_date"
            });
            const editFormFields = ref({"bid_no":"","state":"","cust_id":"","modified_date":"","created_date":""});
            const editFormOptions = ref([[{"title":"Bid NO","field":"bid_no","disabled":true},
                               {"dataKey":"transfer_status","data":[],"title":"Status","field":"state","type":"select"}],
                              [{"title":"Cust ID","field":"cust_id","disabled":true}],
                              [{"title":"Apply Date","field":"created_date","disabled":true,"type":"date"},
                               {"title":"Modified Date","field":"modified_date","disabled":true,"type":"date"}]]);
            const searchFormFields = ref({"bid_no":"","state":"","modified_date":"","created_date":"","cust_id":"","requestor_name":"","cust_dbid":"","transfer_date":"","mpg_name":""});
            const searchFormOptions = ref([[{"title":"Bid NO","field":"bid_no","type":"like"},{"title":"Cust ID","field":"cust_id"}],[{"title":"Apply Date","field":"created_date","type":"date"},{"dataKey":"LocalMpgCategory","data":[],"title":"Mpg","field":"mpg_name","type":"select"}],[{"title":"Modified Date","field":"modified_date","type":"date"},{"title":"Requstor","field":"requestor_name","type":"like"}],[{"title":"Transfer Date","field":"transfer_date","type":"date"},{"dataKey":"transfer_status","data":[],"title":"Status","field":"state","type":"select"}],[{"title":"","field":"cust_dbid"}]]);
            const columns = ref([{field:'bid_no',title:'Bid NO',type:'string',link:true,width:110,readonly:true,align:'left',sort:true},
                       {field:'state',title:'Status',type:'string',bind:{ key:'transfer_status',data:[]},width:110,align:'left'},
                       {field:'modified_date',title:'Modified Date',type:'datetime',width:120,readonly:true,align:'left',sort:true},
                       {field:'created_date',title:'Apply Date',type:'datetime',width:120,readonly:true,align:'left',sort:true},
                       {field:'cust_id',title:'Cust ID',type:'string',width:110,readonly:true,align:'left'},
                       {field:'cust_name',title:'Cust Name',type:'string',width:120,readonly:true,align:'left'},
                       {field:'prod_id',title:'Prod ID',type:'string',width:110,align:'left'},
                       {field:'prod_ename',title:'Prod Name',type:'string',width:110,align:'left'},
                       {field:'qty',title:'Qty',type:'decimal',width:110,align:'left'},
                       {field:'note',title:'Note',type:'string',width:120,align:'left'},
                       {field:'requestorName',title:'Requstor',type:'string',width:180,align:'left'}]);
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
