<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/price/View_cust_custgroup_pricegroup.js此处编写
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
    import extend from "@/extension/price/price/View_cust_custgroup_pricegroup.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'cust_dbid',
                footer: "Foots",
                cnName: '價格群組對應客戶',
                name: 'price/View_cust_custgroup_pricegroup',
                url: "/View_cust_custgroup_pricegroup/",
                sortName: "cust_id"
            });
            const editFormFields = ref({"status":"","custGroupStatus":""});
            const editFormOptions = ref([[{"dataKey":"Status_YN","data":[],"title":"","field":"status","type":"select"},
                               {"dataKey":"Status_YN","data":[],"title":"","field":"custGroupStatus","type":"select"}]]);
            const searchFormFields = ref({"group_id":""});
            const searchFormOptions = ref([[{"title":"","field":"group_id"}]]);
            const columns = ref([{field:'cust_dbid',title:'cust_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                         {field:'cust_id',title:'cust_id',type:'string',width:110,require:true,align:'left',sort:true},
                         {field:'cust_name',title:'cust_name',type:'string',width:120,align:'left'},
                         {field:'status',title:'Status',type:'string',bind:{ key:'Status_YN',data:[]},width:110,align:'left'},
                         {field:'custStatus',title:'Cust Status',type:'string',bind:{ key:'Status_YN',data:[]},width:110,align:'left'},
                         {field:'group_id',title:'Group Id',type:'string',width:110,hidden:true,align:'left'}]);
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
