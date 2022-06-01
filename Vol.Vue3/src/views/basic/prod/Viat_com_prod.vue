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
                key: 'dbid',
                footer: "Foots",
                cnName: '產品設置',
                name: 'prod/Viat_com_prod',
                url: "/Viat_com_prod/",
                sortName: "dbid"
            });
            const editFormFields = ref({"entity":"","division":"","prod_id":"","prod_ename":"","prod_cname":"","unit_stock":"","unit_sale":"","nhi_id":"","prod_type":""});
            const editFormOptions = ref([[{"dataKey":"city","data":[],"title":"公司別","field":"entity","type":"select"},
                               {"title":"所屬事業單位","field":"division"}],
                              [{"title":"產品id","required":true,"field":"prod_id"}],
                              [{"title":"英文名稱","field":"prod_ename"},
                               {"title":"中文名稱","field":"prod_cname"}],
                              [{"dataKey":"prod_unit","data":[],"title":"最小庫存單位","field":"unit_stock","type":"select"},
                               {"dataKey":"prod_unit","data":[],"title":"最小銷售單位","field":"unit_sale","type":"select"}],
                              [{"title":"產品保健代碼","field":"nhi_id"},
                               {"title":"產品類別","field":"prod_type"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'dbid',title:'ID',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'entity',title:'公司別',type:'string',bind:{ key:'city',data:[]},width:110,align:'left',sort:true},
                       {field:'division',title:'所屬事業單位',type:'string',width:110,align:'left'},
                       {field:'prod_id',title:'產品id',type:'string',width:110,require:true,align:'left'},
                       {field:'prod_ename',title:'英文名稱',type:'string',width:110,align:'left'},
                       {field:'prod_cname',title:'中文名稱',type:'string',width:110,align:'left'},
                       {field:'prod_sname',title:'中文名稱',type:'string',width:110,align:'left'},
                       {field:'std_cost',title:'標準成本',type:'decimal',width:110,align:'left'},
                       {field:'unit_stock',title:'最小庫存單位',type:'string',bind:{ key:'prod_unit',data:[]},width:110,align:'left'},
                       {field:'unit_sale',title:'最小銷售單位',type:'string',bind:{ key:'prod_unit',data:[]},width:110,align:'left'},
                       {field:'global_mpg',title:'全球產品群組',type:'string',width:110,align:'left'},
                       {field:'nhi_id',title:'產品保健代碼',type:'string',width:110,align:'left'},
                       {field:'prod_type',title:'產品類別',type:'string',width:110,align:'left'},
                       {field:'inv_type',title:'庫存類別',type:'string',width:110,align:'left'},
                       {field:'pack_size',title:'盒裝數',type:'decimal',width:110,align:'left'},
                       {field:'pack_size_pri',title:'包裝係數',type:'decimal',width:110,align:'left'},
                       {field:'new_prod_id',title:'新產品代碼',type:'string',width:110,align:'left'},
                       {field:'is_ctrl_drug',title:'是否為管制藥品',type:'bool',width:110,align:'left'},
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
                       {field:'Modifier',title:'最後修改人',type:'string',width:130,align:'left'},
                       {field:'ModifyDate',title:'修改時間',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ModifyID',title:'最後修改人id',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Modifier_client',title:'最後修改者的委託人',type:'string',width:110,align:'left'},
                       {field:'ModifyClientID',title:'最後修改者的委託人ID',type:'int',width:110,align:'left'}]);
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
