<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/contract/Viat_app_power_contract_ship_data.js此处编写
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
    import extend from "@/extension/contract/contract/Viat_app_power_contract_ship_data.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'powercontship_dbid',
                footer: "Foots",
                cnName: 'GP合約發票',
                name: 'contract/Viat_app_power_contract_ship_data',
                url: "/Viat_app_power_contract_ship_data/",
                sortName: "serial_no"
            });
            const editFormFields = ref({"invoice_no":"","remarks":"","status":"","powercont_dbid":""});
            const editFormOptions = ref([[{"title":"發票號碼","field":"invoice_no"}],
                              [{"title":"備註","field":"remarks"}],
                              [{"dataKey":"Status_YN","data":[],"title":"是否有效,","field":"status","type":"select"}],
                              [{"title":"GP合約主鍵","required":true,"field":"powercont_dbid"}]]);
            const searchFormFields = ref({"invoice_no":""});
            const searchFormOptions = ref([[{"title":"發票號碼","field":"invoice_no","type":"like"}]]);
            const columns = ref([{field:'powercontship_dbid',title:'主鍵',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'entity',title:'公司別,舊版SUN_DB',type:'string',width:110,hidden:true,align:'left'},
                       {field:'division',title:'所屬事業單位,01:PH;03:AH;05:CH;06:NU',type:'string',width:110,hidden:true,align:'left'},
                       {field:'serial_no',title:'序號',type:'decimal',width:110,hidden:true,require:true,align:'left'},
                       {field:'invoice_no',title:'發票號碼',type:'string',link:true,width:110,align:'left',sort:true},
                       {field:'remarks',title:'備註',type:'string',width:220,align:'left'},
                       {field:'status',title:'是否有效,',type:'string',bind:{ key:'Status_YN',data:[]},width:110,hidden:true,align:'left'},
                       {field:'powercont_dbid',title:'GP合約主鍵',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:110,hidden:true,align:'left',sort:true}]);
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
