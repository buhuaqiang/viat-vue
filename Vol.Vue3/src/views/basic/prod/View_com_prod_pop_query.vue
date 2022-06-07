<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/prod/View_com_prod_pop_query.js此处编写
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
    import extend from "@/extension/basic/prod/View_com_prod_pop_query.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'prod_dbid',
                footer: "Foots",
                cnName: '產品pop框查詢',
                name: 'prod/View_com_prod_pop_query',
                url: "/View_com_prod_pop_query/",
                sortName: "created_date1"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({"prod_id":"","prod_ename":"","prod_sname":""});
            const searchFormOptions = ref([[{"title":"ID","field":"prod_id","type":"like"},{"title":"EnglishName","field":"prod_ename"},{"title":"ChineseName","field":"prod_sname","type":"like"}]]);
            const columns = ref([{field:'mpg_id',title:'Mpg',type:'string',width:90,align:'left',sort:true},
                       {field:'localmpg_dbid',title:'localmpg_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'prod_id',title:'PID',type:'string',width:90,require:true,align:'left'},
                       {field:'prod_ename',title:'E-Name',type:'string',width:130,align:'left'},
                       {field:'prod_cname',title:'prod_cname',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_sname',title:'C-Name',type:'string',width:130,align:'left'},
                       {field:'nhi_price',title:'NHI Price',type:'decimal',width:90,align:'left'},
                       {field:'pack_size',title:'Pack Size',type:'decimal',width:90,align:'left'},
                       {field:'globalmpg_dbid',title:'globalmpg_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'created_date1',title:'created_date1',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'prod_dbid',title:'prod_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'}]);
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
        methods: {

        },
    });
</script>
