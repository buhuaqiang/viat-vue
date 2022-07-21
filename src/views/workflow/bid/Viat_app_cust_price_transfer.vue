<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/bid/Viat_app_cust_price_transfer.js此处编写
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
    import extend from "@/extension/workflow/bid/Viat_app_cust_price_transfer.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'price_transfer_dbid',
                footer: "Foots",
                cnName: '價格暫存',
                name: 'bid/Viat_app_cust_price_transfer',
                url: "/Viat_app_cust_price_transfer/",
                sortName: "created_date"
            });
            const editFormFields = ref({"division":"","bid_no":"","requestor":"","requestor_name":"","pricegroup_dbid":"","cust_dbid":"","prod_dbid":"","nhi_price":"","bmp_cust_id":"","net_price_ebms":"","invoice_price":"","net_price":"","cust_id_ebms":"","prod_id_ebms":"","min_qty_ebms":"","min_qty":"","price_list":"","price_bid":"","price_close":"","discount":"","final_discount":"","final_fg":"","territory_id":"","start_date":"","end_date":"","add_group":"","state":"","note":"","transfer_date":"","created_user":""});
            const editFormOptions = ref([[{"title":"所屬事業單位,01:PH;03:AH;05:CH;06:NU","field":"division"},
                               {"title":"議價決標單號","field":"bid_no"},
                               {"title":"申請人(系统表pkid)","field":"requestor","type":"number"},
                               {"title":"申请人姓名","field":"requestor_name"},
                               {"title":"群組代碼","field":"pricegroup_dbid"},
                               {"title":"cust_dbid","field":"cust_dbid"},
                               {"title":"PKID","field":"prod_dbid"},
                               {"title":"健保價格","field":"nhi_price","type":"decimal"},
                               {"title":"客戶代碼","field":"bmp_cust_id"},
                               {"title":"銷售淨價(盒價)","field":"net_price_ebms","type":"decimal"},
                               {"title":"發票價(盒價)","field":"invoice_price","type":"decimal"},
                               {"title":"銷售淨價(盒價)","field":"net_price","type":"decimal"},
                               {"title":"cust_id_ebms","field":"cust_id_ebms"},
                               {"title":"產品代碼","field":"prod_id_ebms"},
                               {"title":"最低訂購量","field":"min_qty_ebms","type":"number"},
                               {"title":"最低訂購量","field":"min_qty","type":"number"},
                               {"title":"原供應價","field":"price_list","type":"decimal"},
                               {"title":"擬供應價","field":"price_bid","type":"decimal"},
                               {"title":"決標價","field":"price_close","type":"decimal"},
                               {"title":"discount","field":"discount","type":"decimal"},
                               {"title":"final_discount","field":"final_discount","type":"decimal"},
                               {"title":"final_fg","field":"final_fg","type":"decimal"},
                               {"title":"業務分區","field":"territory_id"},
                               {"title":"生效日","field":"start_date"},
                               {"title":"結束日","field":"end_date"},
                               {"title":"群組狀態,Y:加入,N:不加入","field":"add_group"},
                               {"title":"處理狀態,0:待處理,1:匯入,2:不匯入;3:匯出","field":"state"},
                               {"title":"處理說明","field":"note"},
                               {"title":"轉入日期","field":"transfer_date"},
                               {"title":"建立用戶","field":"created_user","type":"number"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'price_transfer_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'division',title:'所屬事業單位,01:PH;03:AH;05:CH;06:NU',type:'string',width:110,align:'left',sort:true},
                       {field:'bid_no',title:'議價決標單號',type:'string',width:110,align:'left'},
                       {field:'requestor',title:'申請人(系统表pkid)',type:'int',width:110,align:'left'},
                       {field:'requestor_name',title:'申请人姓名',type:'string',width:110,align:'left'},
                       {field:'pricegroup_dbid',title:'群組代碼',type:'guid',width:110,align:'left'},
                       {field:'cust_dbid',title:'cust_dbid',type:'guid',width:110,align:'left'},
                       {field:'prod_dbid',title:'PKID',type:'guid',width:110,align:'left'},
                       {field:'nhi_price',title:'健保價格',type:'decimal',width:110,align:'left'},
                       {field:'bmp_cust_id',title:'客戶代碼',type:'string',width:110,align:'left'},
                       {field:'net_price_ebms',title:'銷售淨價(盒價)',type:'decimal',width:110,align:'left'},
                       {field:'invoice_price',title:'發票價(盒價)',type:'decimal',width:110,align:'left'},
                       {field:'net_price',title:'銷售淨價(盒價)',type:'decimal',width:110,align:'left'},
                       {field:'cust_id_ebms',title:'cust_id_ebms',type:'string',width:110,align:'left'},
                       {field:'prod_id_ebms',title:'產品代碼',type:'string',width:110,align:'left'},
                       {field:'min_qty_ebms',title:'最低訂購量',type:'int',width:110,align:'left'},
                       {field:'min_qty',title:'最低訂購量',type:'int',width:110,align:'left'},
                       {field:'price_list',title:'原供應價',type:'decimal',width:110,align:'left'},
                       {field:'price_bid',title:'擬供應價',type:'decimal',width:110,align:'left'},
                       {field:'price_close',title:'決標價',type:'decimal',width:110,align:'left'},
                       {field:'discount',title:'discount',type:'decimal',width:110,align:'left'},
                       {field:'final_discount',title:'final_discount',type:'decimal',width:110,align:'left'},
                       {field:'final_fg',title:'final_fg',type:'decimal',width:110,align:'left'},
                       {field:'territory_id',title:'業務分區',type:'string',width:110,align:'left'},
                       {field:'start_date',title:'生效日',type:'datetime',width:110,align:'left',sort:true},
                       {field:'end_date',title:'結束日',type:'datetime',width:110,align:'left',sort:true},
                       {field:'add_group',title:'群組狀態,Y:加入,N:不加入',type:'string',width:110,align:'left'},
                       {field:'state',title:'處理狀態,0:待處理,1:匯入,2:不匯入;3:匯出',type:'string',width:110,align:'left'},
                       {field:'note',title:'處理說明',type:'string',width:220,align:'left'},
                       {field:'transfer_date',title:'轉入日期',type:'datetime',width:110,align:'left',sort:true},
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
