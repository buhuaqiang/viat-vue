<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/fullallowance/View_full_allowance_sharing.js此处编写
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
    import extend from "@/extension/dataentry/fullallowance/View_full_allowance_sharing.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'prod_dbid',
                footer: "Foots",
                cnName: 'Full Allowance Sharing',
                name: 'fullallowance/View_full_allowance_sharing',
                url: "/View_full_allowance_sharing/",
                sortName: "cust_id"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'cust_id',title:'Customer ID',type:'string',width:110,align:'left',sort:true},
                       {field:'cust_name',title:'Customer',type:'string',width:120,align:'left'},
                       {field:'prod_id',title:'Product ID',type:'string',width:110,align:'left'},
                       {field:'prod_ename',title:'Product',type:'string',width:110,align:'left'},
                        {field:'',title:'Sharing Amount W/T',type:'decimal',width:110,align:'right'},
                       {field:'amount',title:'Sharing amount',type:'decimal',width:110,align:'right'},
                       {field:'percent',title:'Sharing %',type:'decimal',width:110,align:'right'},
                       {field:'state',title:'state',type:'string',width:110,hidden:true,align:'left'},
                       {field:'status',title:'status',type:'string',width:110,hidden:true,align:'left'},
                       {field:'A1',title:'A1',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'prod_dbid',title:'prod_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'cust_dbid',title:'cust_dbid',type:'guid',width:110,hidden:true,align:'left'}]);
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
