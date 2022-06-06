<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/contract/Viat_app_power_contract_cust.js此处编写
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
    import extend from "@/extension/contract/contract/Viat_app_power_contract_cust.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'powercontcust_dbid',
                footer: "Foots",
                cnName: 'GP合約客戶子表',
                name: 'contract/Viat_app_power_contract_cust',
                url: "/Viat_app_power_contract_cust/",
                sortName: "dbid"
            });
            const editFormFields = ref({"division":"","serial_no":"","cust_dbid":""});
            const editFormOptions = ref([[{"title":"所屬事業單位,01:PH;03:AH;05:CH;06:NU","field":"division"},
                               {"title":"序號","required":true,"field":"serial_no","type":"decimal"},
                               {"title":"客戶表主鍵","field":"cust_dbid"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'dbid',title:'識別碼, PK, Identity',type:'int',width:110,require:true,align:'left',sort:true},
                       {field:'division',title:'所屬事業單位,01:PH;03:AH;05:CH;06:NU',type:'string',width:110,align:'left'},
                       {field:'serial_no',title:'序號',type:'decimal',width:110,require:true,align:'left'},
                       {field:'powercont_dbid',title:'GP合約表主鍵',type:'guid',width:110,require:true,align:'left'},
                       {field:'cust_dbid',title:'客戶表主鍵',type:'guid',width:110,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:110,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'powercontcust_dbid',title:'主鍵',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'}]);
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
