<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/fullallowance/View_full_allowance_summary.js此处编写
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
    import extend from "@/extension/dataentry/fullallowance/View_full_allowance_summary.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'cust_dbid',
                footer: "Foots",
                cnName: '',
                name: 'fullallowance/View_full_allowance_summary',
                url: "/View_full_allowance_summary/",
                sortName: "created_date"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'action_type',title:'Tepy Desc',type:'string',width:110,require:true,align:'left',sort:true},
                       {field:'cust_id',title:'Customer ID',type:'string',width:110,require:true,align:'left'},
                       {field:'cust_name',title:'Customer',type:'string',width:120,align:'left'},
                       {field:'prod_id',title:'Product ID',type:'string',width:110,require:true,align:'left'},
                       {field:'prod_ename',title:'Product',type:'string',width:110,align:'left'},
                       {field:'amount',title:'Amount W/T',type:'decimal',width:110,align:'right'},
                       {field:'cust_dbid',title:'cust_dbid',type:'guid',width:110,require:true,hidden:true,align:'left'}]);
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
