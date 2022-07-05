<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/fullallowance/View_full_allowance_main.js此处编写
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
    import extend from "@/extension/dataentry/fullallowance/View_full_allowance_main.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'allw_accrue_dbid',
                footer: "Foots",
                cnName: 'Full Allowance Reverse',
                name: 'fullallowance/View_full_allowance_main',
                url: "/View_full_allowance_main/",
                sortName: "created_date"
            });
            const editFormFields = ref({"contract_no":""});
            const editFormOptions = ref([[{"title":"Contract No","field":"contract_no","readonly":"true"}],
               [ { title: "Remark", field: "contract_term", type: "textarea","readonly":"true"}],
                [{"title":"Contract No","field":"contract_no",hidden:true}],[{"title":"Contract No","field":"contract_no",hidden:true}]]);
            const searchFormFields = ref({"contract_no":"","start_date":"","end_date":"","status":"","pricegroup_dbidname":"","pricegroup_dbid":"","cust_dbidname":"","cust_dbid":"","cf_prod_dbidname":"","cf_prod_dbid":"","cp_prod_dbidname":"","cp_prod_dbid":""});
            const searchFormOptions = ref([[{"title":"Contract No","field":"contract_no","colSize":6},{"title":"Effective Date","field":"start_date","colSize":3},{"title":"","field":"end_date","colSize":2}],[{"title":"Group","field":"pricegroup_dbidname","colSize":6},{"title":"pricegroup_dbid","field":"pricegroup_dbid",hidden:true},{"title":"Customer","field":"cust_dbidname","colSize":6},{"title":"cust_dbid","field":"cust_dbid",hidden:true}],[{"title":"Contract Product","field":"cp_prod_dbidname","colSize":6},{"title":"cp_prod_dbid","field":"cp_prod_dbid",hidden:true},{"title":"FG Product","field":"cf_prod_dbidname","colSize":6},{"title":"cf_prod_dbid","field":"cf_prod_dbid",hidden:true}],[{"dataKey":"Contract_State","data":[],"title":"Contract Status","field":"status","type":"select","colSize":6}]]);
            const columns = ref([{field:'contract_no',title:'Contract No',type:'string',link:true,width:110,align:'left',sort:true},
                       {field:'group_id',title:'Group',type:'string',width:110,align:'left'},
                       {field:'group_name',title:'GroupName',type:'string',width:110,align:'left'},
                       {field:'cust_id',title:'CustID',type:'string',width:110,align:'left'},
                       {field:'cust_name',title:'CustName',type:'string',width:110,align:'left'},
                       {field:'cf_prod_dbid',title:'cf_prod_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'cf_prod_id',title:'FG Product Code',type:'string',width:110,align:'left'},
                       {field:'cf_prod_name',title:'FG Product Name',type:'string',width:110,align:'left'},
                       {field:'cp_prod_dbid',title:'cp_prod_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'cp_prod_id',title:'cp_prod_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'cp_prod_name',title:'cp_prod_name',type:'string',width:110,hidden:true,align:'left'},
                       {field:'start_date',title:'Effective Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'end_date',title:'End Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'accrue_amt',title:'Accrue Amount',type:'decimal',width:110,align:'left'},
                       {field:'c2',title:'Reverse Amount',type:'decimal',width:110,align:'left'},
                       {field:'c3',title:'Adjustment Amount',type:'decimal',width:110,align:'left'},
                       {field:'status',title:'Status',type:'string',bind:{ key:'Contract_State',data:[]},width:110,align:'left'},
                       {field:'pricegroup_dbid',title:'pricegroup_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'cust_dbid',title:'cust_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'allw_accrue_dbid',title:'列allw_accrue_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'列created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true}]);
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
