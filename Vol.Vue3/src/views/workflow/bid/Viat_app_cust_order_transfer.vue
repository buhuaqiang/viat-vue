<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/bid/Viat_app_cust_order_transfer.js此处编写
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
    import extend from "@/extension/workflow/bid/Viat_app_cust_order_transfer.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'order_transfer_dbid',
                footer: "Foots",
                cnName: '訂單暫存',
                name: 'bid/Viat_app_cust_order_transfer',
                url: "/Viat_app_cust_order_transfer/",
                sortName: "created_date"
            });
            const editFormFields = ref({"division":"","bid_no":"","requestor":"","requestor_name":"","order_no":"","cust_dbid":"","prod_dbid":"","qty":"","territory_id":"","state":"","note":"","transfer_date":"","created_user":""});
            const editFormOptions = ref([[{"title":"所屬事業單位,01:PH;03:AH;05:CH;06:NU","field":"division"},
                               {"title":"議價決標單號","field":"bid_no"},
                               {"title":"申請人(系统用户表pkid)","field":"requestor","type":"number"},
                               {"title":"申请人姓名","field":"requestor_name"},
                               {"title":"訂單號碼","field":"order_no"},
                               {"title":"客戶PKID","field":"cust_dbid"},
                               {"title":"?品PKID","field":"prod_dbid"},
                               {"title":"訂單數量","field":"qty","type":"decimal"},
                               {"title":"業務分區","field":"territory_id"},
                               {"title":"處理狀態,0:待處理;1:匯入;2:不匯入;3:匯出","field":"state"},
                               {"title":"處理說明","field":"note"},
                               {"title":"轉入日期","field":"transfer_date"},
                               {"title":"建立用戶","field":"created_user","type":"number"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'order_transfer_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'division',title:'所屬事業單位,01:PH;03:AH;05:CH;06:NU',type:'string',width:110,align:'left',sort:true},
                       {field:'bid_no',title:'議價決標單號',type:'string',width:110,align:'left'},
                       {field:'requestor',title:'申請人(系统用户表pkid)',type:'int',width:110,align:'left'},
                       {field:'requestor_name',title:'申请人姓名',type:'string',width:110,align:'left'},
                       {field:'order_no',title:'訂單號碼',type:'string',width:110,align:'left'},
                       {field:'cust_dbid',title:'客戶PKID',type:'guid',width:110,align:'left'},
                       {field:'prod_dbid',title:'?品PKID',type:'guid',width:110,align:'left'},
                       {field:'qty',title:'訂單數量',type:'decimal',width:110,align:'left'},
                       {field:'territory_id',title:'業務分區',type:'string',width:110,align:'left'},
                       {field:'state',title:'處理狀態,0:待處理;1:匯入;2:不匯入;3:匯出',type:'string',width:110,align:'left'},
                       {field:'note',title:'處理說明',type:'string',width:220,align:'left'},
                       {field:'transfer_date',title:'轉入日期',type:'datetime',width:110,align:'left',sort:true},
                       {field:'created_user',title:'建立用戶',type:'int',width:110,align:'left'},
                       {field:'created_username',title:'建立用戶',type:'string',width:110,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,align:'left'},
                       {field:'created_clientusername',title:'建立者的委託人',type:'string',width:110,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,align:'left'},
                       {field:'modified_username',title:'最後修改用戶',type:'string',width:110,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,align:'left'},
                       {field:'modified_clientusername',title:'最後修改者的委託人',type:'string',width:110,align:'left'},
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
