<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/hpcontract/View_app_hp_share_table.js此处编写
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
    import extend from "@/extension/contract/hpcontract/View_app_hp_share_table.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'hpcontshare_dbid',
                footer: "Foots",
                cnName: 'shareTable',
                name: 'hpcontract/View_app_hp_share_table',
                url: "/View_app_hp_share_table/",
                sortName: "created_date"
            });
            const editFormFields = ref({"cust_dbidname":"","cust_dbid":"","cust_id":"","cust_name":"","prod_dbidname":"","prod_dbid":"","prod_id":"","prod_ename":"","hpcont_dbid":"","percent":"","status":""});
            const editFormOptions = ref([[{"title":"Cust ID","required":true,"field":"cust_dbidname"},{"title":"cust_dbid","field":"cust_dbid","hidden":true},
                               {"title":"Prod ID","required":true,"field":"prod_dbidname"},{"title":"prod_dbid","field":"prod_dbid","hidden":true}],
                            [{"title":"cust_id","field":"cust_id","hidden":true},{"title":"cust_name","field":"cust_name","hidden":true}],
                            [{"title":"prod_id","field":"prod_id","hidden":true},{"title":"prod_ename","field":"prod_ename","hidden":true}],
                            [{"title":"hpcont_dbid","field":"hpcont_dbid","hidden":true}],
                            [{"title":"Sharing %","field":"percent","type":"decimal"},
                               {"dataKey":"Status2","data":[],"title":"Status","field":"status","type":"select"}]]);
            const searchFormFields = ref({"cust_dbidname":"","prod_dbidname":"","contract_no":"","summary":""});
            const searchFormOptions = ref([
                [{"title":"Contract No","field":"contract_no","disabled":true},{"title":"Cust ID","field":"cust_dbidname"},{"title":"","field":"cust_dbid","hidden":true}],
                [{"title":"Prod ID","field":"prod_dbidname"},{"title":"","field":"prod_dbid","hidden":true},{"title":"Summary","field":"summary"}]
            ]);
            const columns = ref([{field:'hpcontshare_dbid',title:'列名hpcontshare_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'division',title:'列名division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'hpcont_dbid',title:'列名hpcont_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'prod_dbid',title:'列名prod_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'cust_dbid',title:'列名cust_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'serial_no',title:'列名serial_no',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'cust_id',title:'Cust ID',"link":true,type:'string',width:110,require:true,align:'left',sort:true},
                       {field:'cust_name',title:'Cust Name',type:'string',width:120,align:'left'},
                       {field:'prod_id',title:'Prod ID',type:'string',width:110,require:true,align:'left'},
                       {field:'prod_ename',title:'Prod Name',type:'string',width:110,align:'left'},
                       {field:'percent',title:'Sharing %',type:'decimal',width:110,align:'left'},
                       {field:'status',title:'Status',type:'bool',bind:{ key:'Status2',data:[]},width:110,align:'left'},
                       {field:'modified_date',title:'Update Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_user',title:'Update User',type:'int',width:110,align:'left'},
                       {field:'o_contract_no',title:'列名o_contract_no',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_user',title:'列名created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'列名created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'列名created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'列名created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'列名created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_username',title:'列名modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'列名modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'列名modified_clientusername',type:'string',width:110,hidden:true,align:'left'}]);
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
