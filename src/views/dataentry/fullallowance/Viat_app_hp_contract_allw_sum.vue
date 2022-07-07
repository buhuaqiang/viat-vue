<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/fullallowance/Viat_app_hp_contract_allw_sum.js此处编写
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
    import extend from "@/extension/dataentry/fullallowance/Viat_app_hp_contract_allw_sum.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'allw_sum_dbid',
                footer: "Foots",
                cnName: '全額折讓分配交易',
                name: 'fullallowance/Viat_app_hp_contract_allw_sum',
                url: "/Viat_app_hp_contract_allw_sum/",
                sortName: "created_date"
            });
            const editFormFields = ref({"action_type":"","allw_type":"","year":"","period":"","hpcont_dbid":"","prod_dbid":"","cust_dbid":"","dist_id":"","invoice_date":"","invoice_no":"","trans_date":"","qty":"","amount":"","remarks":""});
            const editFormOptions = ref([[{"title":"折讓類別(1:By Amount;2:By Qty)","field":"allw_type","type":"number"},
                               {"title":"年度","field":"year","type":"number"},
                               {"title":"Period","field":"period","type":"number"},
                               {"title":"PKID","field":"hpcont_dbid"},
                               {"title":"產品代碼,舊版ITEM_CODE","field":"prod_dbid"},
                               {"title":"客戶PKID","field":"cust_dbid"},
                               {"title":"經銷商代碼","field":"dist_id"},
                               {"title":"發票日期","field":"invoice_date"},
                               {"title":"發票號碼","field":"invoice_no"},
                               {"title":"銷售數量","field":"qty","type":"decimal"},
                               {"title":"金額","field":"amount","type":"decimal"},
                               {"title":"備註","field":"remarks"},
                               {"title":"動作類別 (1: Sharing 2:Reverse 3:Adjust)","required":true,"field":"action_type"},
                               {"title":"交易日期","required":true,"field":"trans_date"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'allw_sum_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'entity',title:'公司別',type:'string',width:110,align:'left',sort:true},
                       {field:'division',title:'所屬事業單位,01:PH;03:AH;05:CH;06:NU',type:'string',width:110,align:'left'},
                       {field:'action_type',title:'動作類別 (1: Sharing 2:Reverse 3:Adjust)',type:'string',width:110,require:true,align:'left'},
                       {field:'allw_type',title:'折讓類別(1:By Amount;2:By Qty)',type:'int',width:110,align:'left'},
                       {field:'year',title:'年度',type:'int',width:110,align:'left'},
                       {field:'period',title:'Period',type:'int',width:110,align:'left'},
                       {field:'hpcont_dbid',title:'PKID',type:'guid',width:110,align:'left'},
                       {field:'prod_dbid',title:'產品代碼,舊版ITEM_CODE',type:'guid',width:110,align:'left'},
                       {field:'cust_dbid',title:'客戶PKID',type:'guid',width:110,align:'left'},
                       {field:'dist_id',title:'經銷商代碼',type:'string',width:110,align:'left'},
                       {field:'invoice_date',title:'發票日期',type:'datetime',width:110,align:'left',sort:true},
                       {field:'invoice_no',title:'發票號碼',type:'string',width:110,align:'left'},
                       {field:'trans_date',title:'交易日期',type:'datetime',width:110,require:true,align:'left',sort:true},
                       {field:'qty',title:'銷售數量',type:'decimal',width:110,align:'left'},
                       {field:'amount',title:'金額',type:'decimal',width:110,align:'left'},
                       {field:'remarks',title:'備註',type:'string',width:220,align:'left'},
                       {field:'status',title:'是否結案,True:結案/False:未結案',type:'string',width:110,align:'left'},
                       {field:'o_contract_no',title:'LocalAddon Contractno',type:'int',width:110,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:110,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:110,align:'left',sort:true}]);
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
