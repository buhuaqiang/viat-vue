<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/deputy/Viat_sys_deputy.js此处编写
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
    import extend from "@/extension/basic/deputy/Viat_sys_deputy.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'deputy_dbid',
                footer: "Foots",
                cnName: '代理人清單',
                name: 'deputy/Viat_sys_deputy',
                url: "/Viat_sys_deputy/",
                sortName: "created_date"
            });
            const editFormFields = ref({"deputy_dbid":"","dbid":"","user_id":"","deputy_user_id":"","start_date":"","end_date":"","status":""});
            const editFormOptions = ref([[{"title":"PKID","required":true,"field":"deputy_dbid","disabled":true},
                               {"title":"識別碼, PK, Identity","required":true,"field":"dbid","type":"number"},
                               {"title":"用戶表PKI","required":true,"field":"user_id","type":"number"},
                               {"title":"代理人用戶PKID","required":true,"field":"deputy_user_id","type":"number"},
                               {"title":"代理起始日","required":true,"field":"start_date"},
                               {"title":"代理結束日","required":true,"field":"end_date"},
                               {"title":"是否有效,Y:生效/N:未生效or期滿/C:移除","required":true,"field":"status"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'deputy_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'dbid',title:'識別碼, PK, Identity',type:'int',width:110,require:true,align:'left',sort:true},
                       {field:'entity',title:'公司別,舊版SUN_DB',type:'string',width:110,align:'left'},
                       {field:'division',title:'所屬事業單位,01:PH;03:AH;05:CH;06:NU',type:'string',width:110,align:'left'},
                       {field:'user_id',title:'用戶表PKI',type:'int',width:110,require:true,align:'left'},
                       {field:'deputy_user_id',title:'代理人用戶PKID',type:'int',width:110,require:true,align:'left'},
                       {field:'start_date',title:'代理起始日',type:'datetime',width:110,require:true,align:'left',sort:true},
                       {field:'end_date',title:'代理結束日',type:'datetime',width:110,require:true,align:'left',sort:true},
                       {field:'status',title:'是否有效,Y:生效/N:未生效or期滿/C:移除',type:'string',width:110,require:true,align:'left'},
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
