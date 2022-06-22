<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/price/Viat_app_cust_price.js此处编写
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
    import extend from "@/extension/price/price/Viat_app_cust_price.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'custprice_dbid',
                footer: "Foots",
                cnName: '群組價格主表',
                name: 'price/Viat_app_cust_price',
                url: "/Viat_app_cust_price/",
                sortName: "bid_no"
            });
            const editFormFields = ref({"bid_no":"","requestor":"","prod_dbid":"","pricegroup_dbid":"","nhi_price":"","invoice_price":"","net_price":"","min_qty":"","start_date":"","end_date":"","status":"","is_used":"","source":"","nhi_id":"","remarks":"","sys_end_date":"","org_start_date":"","org_end_date":""});
            const editFormOptions = ref([[{"title":"議價決標單號","field":"bid_no"},
                               {"title":"申請人員工編號","field":"requestor"},
                               {"title":"產品表PKID","field":"prod_dbid"},
                               {"title":"pricegroup主鍵","field":"pricegroup_dbid"},
                               {"title":"健保價格","field":"nhi_price","type":"decimal"},
                               {"title":"發票價(盒價)","field":"invoice_price","type":"decimal"},
                               {"title":"銷售淨價(盒價)","field":"net_price","type":"decimal"},
                               {"title":"最低訂購量","field":"min_qty","type":"number"},
                               {"title":"作廢否,True:作廢;False:不作廢","field":"is_used"},
                               {"title":"資料來源(0:EBMS,1:Manual,2:Copy,3:Detach)","field":"source"},
                               {"title":"產品健保代碼,舊版ANAL_I4","field":"nhi_id"},
                               {"title":"備註","field":"remarks"},
                               {"title":"系統結束日","field":"sys_end_date"},
                               {"title":"原生效日","field":"org_start_date"},
                               {"title":"原結束日","field":"org_end_date"},
                               {"title":"生效日","required":true,"field":"start_date"},
                               {"title":"結束日","required":true,"field":"end_date"},
                               {"title":"是否有效,True:生效;False:失效","required":true,"field":"status"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'custprice_dbid',title:'PKID',type:'guid',width:110,require:true,align:'left',sort:true},
                       {field:'division',title:'所屬事業單位,01:PH;03:AH;05:CH;06:NU',type:'string',width:110,align:'left'},
                       {field:'bid_no',title:'議價決標單號',type:'string',width:110,align:'left'},
                       {field:'requestor',title:'申請人員工編號',type:'string',width:110,align:'left'},
                       {field:'prod_dbid',title:'產品表PKID',type:'guid',width:110,align:'left'},
                       {field:'pricegroup_dbid',title:'pricegroup主鍵',type:'guid',width:110,align:'left'},
                       {field:'nhi_price',title:'健保價格',type:'decimal',width:110,align:'left'},
                       {field:'invoice_price',title:'發票價(盒價)',type:'decimal',width:110,align:'left'},
                       {field:'net_price',title:'銷售淨價(盒價)',type:'decimal',width:110,align:'left'},
                       {field:'min_qty',title:'最低訂購量',type:'int',width:110,align:'left'},
                       {field:'start_date',title:'生效日',type:'datetime',width:110,require:true,align:'left',sort:true},
                       {field:'end_date',title:'結束日',type:'datetime',width:110,require:true,align:'left',sort:true},
                       {field:'status',title:'是否有效,True:生效;False:失效',type:'string',width:110,require:true,align:'left'},
                       {field:'is_used',title:'作廢否,True:作廢;False:不作廢',type:'string',width:110,align:'left'},
                       {field:'source',title:'資料來源(0:EBMS,1:Manual,2:Copy,3:Detach)',type:'string',width:110,align:'left'},
                       {field:'nhi_id',title:'產品健保代碼,舊版ANAL_I4',type:'string',width:110,align:'left'},
                       {field:'remarks',title:'備註',type:'string',width:220,align:'left'},
                       {field:'sys_end_date',title:'系統結束日',type:'datetime',width:110,align:'left',sort:true},
                       {field:'org_start_date',title:'原生效日',type:'datetime',width:110,align:'left',sort:true},
                       {field:'org_end_date',title:'原結束日',type:'datetime',width:110,align:'left',sort:true},
                       {field:'updated_user',title:'修改人',type:'int',width:110,align:'left'},
                       {field:'updated_date',title:'修改時間',type:'datetime',width:110,align:'left',sort:true},
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
