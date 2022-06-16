<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/hpcontract/Viat_app_hp_contract.js此处编写
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
    import extend from "@/extension/contract/hpcontract/Viat_app_hp_contract.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'hpcont_dbid',
                footer: "Foots",
                cnName: 'HP合約主表',
                name: 'hpcontract/Viat_app_hp_contract',
                url: "/Viat_app_hp_contract/",
                sortName: "contract_no"
            });
            const editFormFields = ref({"entity":"","division":"","contract_no":"","pricegroup_id":"","start_date":"","end_date":"","allw_type":"","est_months":"","accrue_amt":"","contract_term":"","state":"","o_contract_no":""});
            const editFormOptions = ref([[{"title":"公司別,舊版SUN_DB","field":"entity"},
                               {"title":"所屬事業單位,01:PH;03:AH;05:CH;06:NU","field":"division"},
                               {"title":"主鍵","field":"pricegroup_id"},
                               {"title":"生效日","field":"start_date"},
                               {"title":"結束日","field":"end_date"},
                               {"title":"折讓類別(1:By Amount;2:By Qty)","field":"allw_type","type":"number"},
                               {"title":"預估參考月數","field":"est_months","type":"number"},
                               {"title":"預估金額","field":"accrue_amt","type":"decimal"},
                               {"title":"合約條款","field":"contract_term"},
                               {"title":"合約狀態,Y:Valid;N:Invalid;C:Over period still active;A:Not Achieve","field":"state"},
                               {"title":"LocalAddon Contractno","field":"o_contract_no","type":"number"},
                               {"title":"合約號碼(案號)","required":true,"field":"contract_no"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'hpcont_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'entity',title:'公司別,舊版SUN_DB',type:'string',width:110,align:'left',sort:true},
                       {field:'division',title:'所屬事業單位,01:PH;03:AH;05:CH;06:NU',type:'string',width:110,align:'left'},
                       {field:'contract_no',title:'合約號碼(案號)',type:'string',width:110,require:true,align:'left'},
                       {field:'pricegroup_id',title:'主鍵',type:'guid',width:110,align:'left'},
                       {field:'start_date',title:'生效日',type:'datetime',width:110,align:'left',sort:true},
                       {field:'end_date',title:'結束日',type:'datetime',width:110,align:'left',sort:true},
                       {field:'allw_type',title:'折讓類別(1:By Amount;2:By Qty)',type:'int',width:110,align:'left'},
                       {field:'est_months',title:'預估參考月數',type:'int',width:110,align:'left'},
                       {field:'accrue_amt',title:'預估金額',type:'decimal',width:110,align:'left'},
                       {field:'contract_term',title:'合約條款',type:'string',width:110,align:'left'},
                       {field:'state',title:'合約狀態,Y:Valid;N:Invalid;C:Over period still active;A:Not Achieve',type:'string',width:110,align:'left'},
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
