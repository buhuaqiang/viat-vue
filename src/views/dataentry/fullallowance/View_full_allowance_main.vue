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
                key: 'hpcont_dbid',
                footer: "Foots",
                cnName: 'Full Allowance Main',
                name: 'fullallowance/View_full_allowance_main',
                url: "/View_full_allowance_main/",
                sortName: "created_date"
            });
            const editFormFields = ref({"contract_no":"","hpcont_dbid":""});
            const editFormOptions = ref([[{"title":"Contract No","field":"contract_no","readonly":"true"}],
                [ { "title": "Remark", "field": "contract_term", type: "textarea","readonly":"true"}],
                [{"title":"Contract No","field":"contract_no",hidden:true}],[{"title":"Contract No","field":"contract_no",hidden:true}]]);
            const searchFormFields = ref({"contract_no":"","start_date":"","end_date":"","state":"","pricegroup_dbid":"","group_id":"","cust_dbid":"","cust_id":"","p_prod_id":"","p_prod_dbid":"","f_prod_id":"","f_prod_dbid":""});
            const searchFormOptions = ref([[{"title":"Contract No","field":"contract_no","type":"like","colSize":6},{"title":"Effective Date","field":"start_date","type":"date","colSize":3},{"title":"","field":"end_date","type":"date","colSize":2}],[{"title":"Group","field":"group_id","colSize":6},{"title":"Customer","field":"cust_id","colSize":6}],[{"title":"Contract Product","field":"p_prod_id","colSize":6},{"title":"FG Product","field":"f_prod_id","colSize":6}],[{"dataKey":"Contract_State","data":[],"title":"Contract Status","field":"state","type":"select","colSize":6}]]);
            const columns = ref([{field:'hpcont_dbid',title:'列名hpcont_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                        {field:'contract_no',title:'Contract No',type:'string',width:110,require:true,align:'left',sort:true},
                        {field:'group_id',title:'GroupId',type:'string',width:110,align:'left'},
                        {field:'group_name',title:'GroupName',type:'string',width:120,align:'left'},
                        {field:'cust_id',title:'CustId',type:'string',width:110,align:'left'},
                        {field:'cust_name',title:'CustName',type:'string',width:110,align:'left'},
                        {field:'prod_id',title:'FG Product Code',type:'string',width:110,align:'left'},
                        {field:'prod_ename',title:'FG Prouduct Name',type:'string',width:110,align:'left'},
                        {field:'start_date',title:'Effective Date',type:'datetime',width:150,align:'left',sort:true},
                        {field:'end_date',title:'End Date',type:'datetime',width:150,align:'left',sort:true},
                        {field:'C1',title:'Accrue Amount',type:'decimal',width:110,align:'left'},
                        {field:'C2',title:'Reverse Amount',type:'decimal',width:110,align:'left'},
                        {field:'C3',title:'Adjustment Amount',type:'decimal',width:110,align:'left'},
                        {field:'state',title:'Status',type:'string',bind:{ key:'Contract_State',data:[]},width:110,align:'left'},
                        {field:'entity',title:'列名entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'division',title:'列名division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'pricegroup_dbid',title:'列名pricegroup_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'allw_type',title:'Allw Type',type:'int',width:80,hidden:true,align:'left'},
                       {field:'est_months',title:'列名est_months',type:'int',width:80,hidden:true,align:'left'},
                       {field:'accrue_amt',title:'列名accrue_amt',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'accrue_price',title:'列名accrue_price',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'accrue_start_date',title:'列名accrue_start_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'contract_term',title:'列名contract_term',type:'string',width:110,hidden:true,align:'left'},
                       {field:'o_contract_no',title:'列名o_contract_no',type:'int',width:80,hidden:true,align:'left'},
                       {field:'bu_id',title:'列名bu_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'cust_dbid',title:'列名cust_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'prod_dbid',title:'列名prod_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'p_prod_dbid',title:'列名p_prod_dbid',type:'',width:80,hidden:true,align:'left'},
                       {field:'f_prod_dbid',title:'列名f_prod_dbid',type:'string',width:80,hidden:true,align:'left'},
                       {field:'modified_username',title:'列名modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'列名modified_client',type:'int',width:80,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'列名modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'列名modified_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'列名modified_user',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_date',title:'列名created_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'created_clientusername',title:'列名created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'列名created_client',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_user',title:'列名created_user',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_username',title:'列名created_username',type:'string',width:110,hidden:true,align:'left'}]);
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
