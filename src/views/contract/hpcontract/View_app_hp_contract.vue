<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/hpcontract/View_app_hp_contract.js此处编写
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
    import extend from "@/extension/contract/hpcontract/View_app_hp_contract.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'hpcont_dbid',
                footer: "Foots",
                cnName: 'HP合約設置',
                name: 'hpcontract/View_app_hp_contract',
                url: "/View_app_hp_contract/",
                sortName: "created_date"
            });
            const editFormFields = ref({"contract_no":"","start_date":"","end_date":"","costomer_type":"","pricegroup_dbidname":"","group_id":"","pricegroup_dbid":"","group_name":"","allw_type":"","accrue_amt":"","state":"","contract_term":""});
            const editFormOptions = ref([[{"title":"Contract No","field":"contract_no","disabled":true}],
                              [{"title":"Effective Date","required":true,"field":"start_date","type":"date"},
                               {"title":"End Date","required":true,"field":"end_date","type":"date"}],
                              [{"dataKey":"hp_costomer_type","data":[],"title":"Customer Type","required":true,"field":"costomer_type","type":"radio"},{"title":"Group ID","field":"pricegroup_dbidname"}],
                              [{"title":"group_id","field":"group_id",hidden:true},{"titile":"pricegroup_dbid","field":"pricegroup_dbid",hidden:true},{"titile":"group_name","field":"group_name",hidden:true}],
                              [{"dataKey":"Allowance_type","data":[],"title":"Allowance Type","required":true,"field":"allw_type","type":"select"},
                                  {"dataKey":"Contract_State","data":[],"title":"Contract Status","field":"state","type":"select","disabled":true}],
                              [{"title":"Accrue Amount","required":true,"field":"accrue_amt","type":"decimal"},{"title":"Contract Term","field":"contract_term","type":"textarea"}],
                              ]);
            const searchFormFields = ref({"contract_no":"","pricegroup_dbid":"","pricegroup_dbidname":"","start_date":"","end_date":"","state":"","cust_dbid2":"","cust_dbid2name":"","cf_prod_dbid":"","cf_prod_dbidname":"","pu_prod_dbid":"","pu_prod_dbidname":""});
            const searchFormOptions = ref([[{"title":"Contract No","field":"contract_no","colSize":6},{"title":"Effective Date","field":"start_date","type":"date","colSize":3},{"title":"","field":"end_date","type":"date","colSize":2}],[{"title":"GroupId","field":"pricegroup_dbidname","colSize":6},{"title":"","field":"pricegroup_dbid","hidden":true},{"title":"Customer","field":"cust_dbid2name","colSize":6},{"title":"","field":"cust_dbid2","hidden":true}],[{"title":"Contract Product","field":"pu_prod_dbidname","colSize":6},{"title":"","field":"pu_prod_dbid","hidden":true},{"title":"FG Product","field":"cf_prod_dbidname","colSize":6},{"title":"","field":"cf_prod_dbid","hidden":true}],[{"dataKey":"Contract_State","data":[],"title":"Contract Status","field":"state","type":"select","colSize":6}]]);
            const columns = ref([{field:'hpcont_dbid',title:'列名hpcont_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'entity',title:'列名entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'division',title:'列名division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'allw_type',title:'Allowance Type',type:'int',bind:{ key:'Allowance_type',data:[]},width:90,require:true,align:'left',sort:true},
                       {field:'contract_no',title:'Contract No',"link":true,type:'string',width:90,align:'left'},
                       {field:'group_id',title:'GroupId',type:'string',width:90,align:'left'},
                       {field:'group_name',title:'GroupName',type:'string',width:120,align:'left'},
                       {field:'g_cust_id',title:'CustID',type:'string',width:90,align:'left'},
                       {field:'g_cust_name',title:'CustName',type:'string',width:110,align:'left'},
                       {field:'prod_id',title:'FG Product Code',type:'string',width:110,align:'left'},
                       {field:'prod_ename',title:'FG Product Name',type:'string',width:110,align:'left'},
                       {field:'start_date',title:'Effective Date',type:'datetime',width:110,require:true,align:'left',sort:true},
                       {field:'end_date',title:'End Date',type:'datetime',width:110,require:true,align:'left',sort:true},
                       {field:'accrue_amt',title:'Accrue Amount(Per Month)',type:'decimal',width:110,require:true,align:'left'},
                       {field:'C1',title:'Accrue Amount',type:'decimal',width:110,align:'left'},
                       {field:'C2',title:'Reverse Amount',type:'decimal',width:110,align:'left'},
                       {field:'modified_date',title:'modified_date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'contract_term',title:'Contract Term',type:'string',width:110,hidden:true,align:'left'},
                       {field:'est_months',title:'列名est_months',type:'int',width:110,hidden:true,align:'left'},
                       {field:'state',title:'Status',type:'string',bind:{ key:'Contract_State',data:[]},width:110,align:'left'},
                       {field:'o_contract_no',title:'列名o_contract_no',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_user',title:'列名created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'列名created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'列名created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'列名created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'列名created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'列名modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'列名modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'列名modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'列名modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'C3',title:'列名C3',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'cust_dbid2',title:'列名cust_dbid2',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'cust_dbid',title:'列名cust_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'cust_id',title:'列名cust_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'cust_name',title:'列名cust_name',type:'string',width:120,hidden:true,align:'left'},
                       {field:'prod_dbid',title:'列名prod_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'cf_prod_dbid',title:'列名cf_prod_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'pu_prod_dbid',title:'列名pu_prod_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'pricegroup_dbid',title:'列名pricegroup_dbid',type:'guid',width:110,hidden:true,align:'left'}]);
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
