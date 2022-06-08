<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/prod/Viat_com_prod.js此处编写
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
    import extend from "@/extension/basic/prod/Viat_com_prod.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'prod_dbid',
                footer: "Foots",
                cnName: '產品基本資料',
                name: 'prod/Viat_com_prod',
                url: "/Viat_com_prod/",
                sortName: "created_date"
            });
            const editFormFields = ref({"prod_id":"","license_no":"","license_name":"","safty_stock":"","state":"","status_sample":"","status_bid":"","status_stock_pfizer":"","status_stock_dist":"","default_dist_id":""});
            const editFormOptions = ref([[{"title":"產品id","required":true,"field":"prod_id"},
                               {"title":"許可證字號","field":"license_no"},
                               {"title":"許可證名稱","field":"license_name"},
                               {"title":"安全庫存量","field":"safty_stock","type":"number"},
                               {"title":"狀態","field":"state"},
                               {"title":"是否可申請樣品","field":"status_sample"},
                               {"title":"是否可申請議價決標單","field":"status_bid"},
                               {"title":"輝瑞庫存狀態","field":"status_stock_pfizer"},
                               {"title":"經銷商庫存狀態","field":"status_stock_dist"},
                               {"title":"預設所屬經銷商","field":"default_dist_id"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'prod_dbid',title:'PKID',type:'guid',width:110,require:true,align:'left',sort:true},
                       {field:'dbid',title:'ID',type:'int',width:110,hidden:true,require:true,align:'left'},
                       {field:'entity',title:'公司別',type:'string',width:110,align:'left'},
                       {field:'localmpg_dbid',title:'本地產品組DBID',type:'guid',width:110,align:'left'},
                       {field:'division',title:'所屬事業單位',type:'string',width:110,align:'left'},
                       {field:'prod_id',title:'產品id',type:'string',width:110,require:true,align:'left'},
                       {field:'prod_ename',title:'英文名稱',type:'string',width:110,align:'left'},
                       {field:'prod_cname',title:'中文名稱',type:'string',width:110,align:'left'},
                       {field:'prod_sname',title:'中文名稱',type:'string',width:110,align:'left'},
                       {field:'std_cost',title:'標準成本',type:'decimal',width:110,align:'left'},
                       {field:'unit_stock',title:'最小庫存單位',type:'string',width:110,align:'left'},
                       {field:'unit_sale',title:'最小銷售單位',type:'string',width:110,align:'left'},
                       {field:'global_mpg',title:'全球產品群組',type:'string',width:110,align:'left'},
                       {field:'nhi_id',title:'產品保健代碼',type:'string',width:110,align:'left'},
                       {field:'prod_type',title:'產品類別',type:'string',width:110,align:'left'},
                       {field:'inv_type',title:'庫存類別',type:'string',width:110,align:'left'},
                       {field:'pack_size',title:'盒裝數',type:'decimal',width:110,align:'left'},
                       {field:'pack_size_pri',title:'包裝係數',type:'decimal',width:110,align:'left'},
                       {field:'new_prod_id',title:'新產品代碼',type:'string',width:110,align:'left'},
                       {field:'is_ctrl_drug',title:'是否為管制藥品',type:'string',width:110,align:'left'},
                       {field:'nhi_price',title:'健保價',type:'decimal',width:110,align:'left'},
                       {field:'license_no',title:'許可證字號',type:'string',width:110,align:'left'},
                       {field:'license_name',title:'許可證名稱',type:'string',width:110,align:'left'},
                       {field:'stock_market',title:'stock_market',type:'int',width:110,align:'left'},
                       {field:'stock_pfizer',title:'stock_pfizer',type:'int',width:110,align:'left'},
                       {field:'safty_stock',title:'安全庫存量',type:'int',width:110,align:'left'},
                       {field:'state',title:'狀態',type:'string',width:110,align:'left'},
                       {field:'status_sample',title:'是否可申請樣品',type:'string',width:110,align:'left'},
                       {field:'status_bid',title:'是否可申請議價決標單',type:'string',width:110,align:'left'},
                       {field:'status_stock_pfizer',title:'輝瑞庫存狀態',type:'string',width:110,align:'left'},
                       {field:'status_stock_dist',title:'經銷商庫存狀態',type:'string',width:110,align:'left'},
                       {field:'default_dist_id',title:'預設所屬經銷商',type:'string',width:110,align:'left'},
                       {field:'prod_short_name',title:'產品簡稱',type:'string',width:110,align:'left'},
                       {field:'prod_category',title:'產品屬性-產品大類',type:'string',width:110,align:'left'},
                       {field:'prod_form',title:'產品屬性-產品劑型(膠囊/針劑/藥丸)',type:'string',width:110,align:'left'},
                       {field:'prod_strength',title:'產品屬性-產品劑量',type:'string',width:110,align:'left'},
                       {field:'prod_packed',title:'產品屬性-劑量單位',type:'string',width:110,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:80,align:'left'},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:80,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:150,align:'left',sort:true},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:80,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:80,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:150,align:'left',sort:true},
                       {field:'created_username',title:'建立用戶賬號',type:'string',width:110,align:'left'},
                       {field:'created_clientusername',title:'建立者的委託人賬號',type:'string',width:110,align:'left'},
                       {field:'modified_username',title:'最後修改用戶賬號',type:'string',width:110,align:'left'},
                       {field:'modified_clientusername',title:'最後修改的委託人賬號',type:'string',width:110,align:'left'}]);
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
