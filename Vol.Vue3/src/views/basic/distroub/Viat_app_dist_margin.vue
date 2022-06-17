<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/distroub/Viat_app_dist_margin.js此处编写
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
    import extend from "@/extension/basic/distroub/Viat_app_dist_margin.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'distmargin_dbid',
                footer: "Foots",
                cnName: '經銷商margin設定',
                name: 'distroub/Viat_app_dist_margin',
                url: "/Viat_app_dist_margin/",
                sortName: "distmargin_dbid"
            });
            const editFormFields = ref({"dist_id":"","margin_value_type":"","margin_value":"","start_date":"","end_date":"","status":"","channel":"","cust_dbid":"","prod_dbid":""});
            const editFormOptions = ref([[{"dataKey":"distributor_Drop","data":[],"title":"經銷商代碼","required":true,"field":"dist_id","type":"select"}],
                              [{"dataKey":"Margin_Type","data":[],"title":"毛利類別,0: Fix Rate ;1:Fix Price","field":"margin_value_type","type":"select"}],
                              [{"title":"毛利值,Rate or 固定金額","field":"margin_value","type":"text"}],
                              [{"title":"起始日期","field":"start_date","type":"datetime"}],
                              [{"title":"結束日期","field":"end_date","type":"datetime"}],
                              [{"dataKey":"status-Dist2","data":[],"title":"Y:是,N：否","field":"status","type":"select"}],
                              [{"dataKey":"Channel-Distributor2","data":[],"title":"通路","field":"channel","type":"select"}],
                              [{"title":"客戶代碼","field":"cust_dbid","type":"text"}],
                              [{"title":"產品代碼,舊版ITEM_CODE","field":"prod_dbid","type":"text"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'distmargin_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'dbid',title:'識別碼,  Identity',type:'int',width:110,require:true,align:'left',sort:true},
                       {field:'entity',title:'公司別',type:'string',width:110,align:'left'},
                       {field:'division',title:'所屬事業單位,01:PH;03:AH;05:CH;06:NU',type:'string',width:110,align:'left'},
                       {field:'dist_id',title:'經銷商代碼',type:'string',bind:{ key:'distributor_Drop',data:[]},width:110,require:true,align:'left'},
                       {field:'margin_value_type',title:'毛利類別,0: Fix Rate ;1:Fix Price',type:'int',bind:{ key:'Margin_Type',data:[]},width:110,align:'left'},
                       {field:'margin_value',title:'毛利值,Rate or 固定金額',type:'decimal',width:110,align:'left'},
                       {field:'prod_dbid',title:'產品代碼,舊版ITEM_CODE',type:'guid',width:110,align:'left'},
                       {field:'cust_dbid',title:'客戶代碼',type:'guid',width:110,align:'left'},
                       {field:'local_mpg_dbid',title:'Local MPG ID',type:'guid',width:110,align:'left'},
                       {field:'channel',title:'通路',type:'string',bind:{ key:'Channel-Distributor2',data:[]},width:110,align:'left'},
                       {field:'start_date',title:'起始日期',type:'datetime',width:110,align:'left',sort:true},
                       {field:'end_date',title:'結束日期',type:'datetime',width:110,align:'left',sort:true},
                       {field:'remarks',title:'備註',type:'string',width:220,align:'left'},
                       {field:'status',title:'Y:是,N：否',type:'string',bind:{ key:'status-Dist2',data:[]},width:110,align:'left'},
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
