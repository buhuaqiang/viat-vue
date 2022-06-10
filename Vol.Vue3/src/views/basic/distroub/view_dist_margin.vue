<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/distroub/view_dist_margin.js此处编写
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
    import extend from "@/extension/basic/distroub/view_dist_margin.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'distmargin_dbid',
                footer: "Foots",
                cnName: '經銷商margin查詢視圖',
                name: 'distroub/view_dist_margin',
                url: "/view_dist_margin/",
                sortName: "distmargin_dbid"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({"dist_id":"","margin_value_type":""});
            const searchFormOptions = ref([[{"dataKey":"distributor_Drop","data":[],"title":"Distributor","field":"dist_id","type":"select"},{"dataKey":"Margin_Type","data":[],"title":"Margin Type","field":"margin_value_type","type":"select"}]]);
            const columns = ref([{field:'distmargin_dbid',title:'distmargin_dbid',type:'guid',width:110,require:true,align:'left',sort:true},
                       {field:'dbid',title:'dbid',type:'int',width:110,require:true,align:'left'},
                       {field:'created_user',title:'created_user',type:'int',width:110,align:'left'},
                       {field:'created_client',title:'created_client',type:'int',width:110,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_user',title:'modified_user',type:'int',width:110,align:'left'},
                       {field:'modified_client',title:'modified_client',type:'int',width:110,align:'left'},
                       {field:'modified_date',title:'modified_date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'entity',title:'entity',type:'string',width:110,align:'left'},
                       {field:'division',title:'division',type:'string',width:110,align:'left'},
                       {field:'dist_id',title:'Distributor',type:'string',bind:{ key:'distributor_Drop',data:[]},width:110,require:true,align:'left'},
                       {field:'margin_value_type',title:'Margin Type',type:'int',bind:{ key:'Margin_Type',data:[]},width:110,align:'left'},
                       {field:'margin_value',title:'margin_value',type:'decimal',width:110,align:'left'},
                       {field:'cust_id_dbid',title:'cust_id_dbid',type:'guid',width:110,align:'left'},
                       {field:'mpg_id_dbid',title:'mpg_id_dbid',type:'guid',width:110,align:'left'},
                       {field:'channel',title:'channel',type:'string',width:110,align:'left'},
                       {field:'start_date',title:'start_date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'end_date',title:'end_date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'prod_id_dbid',title:'prod_id_dbid',type:'guid',width:110,align:'left'},
                       {field:'status',title:'status',type:'string',width:110,align:'left'},
                       {field:'cust_id',title:'cust_id',type:'string',width:110,align:'left'},
                       {field:'cust_name',title:'cust_name',type:'string',width:120,align:'left'},
                       {field:'mpg_id',title:'mpg_id',type:'string',width:110,align:'left'},
                       {field:'mpg_name',title:'mpg_name',type:'string',width:110,align:'left'},
                       {field:'prod_id',title:'prod_id',type:'string',width:110,align:'left'},
                       {field:'prod_ename',title:'prod_ename',type:'string',width:110,align:'left'},
                       {field:'sys_value',title:'sys_value',type:'string',width:220,align:'left'},
                       {field:'doh_type_ename',title:'doh_type_ename',type:'string',width:110,align:'left'},
                       {field:'emp_ename',title:'emp_ename',type:'string',width:110,align:'left'}]);
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
