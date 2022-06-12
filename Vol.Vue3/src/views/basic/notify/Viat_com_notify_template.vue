<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/notify/Viat_com_notify_template.js此处编写
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
    import extend from "@/extension/basic/notify/Viat_com_notify_template.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'notifytemp_dbid',
                footer: "Foots",
                cnName: '消息模板',
                name: 'notify/Viat_com_notify_template',
                url: "/Viat_com_notify_template/",
                sortName: "created_date"
            });
            const editFormFields = ref({"entity":"","notify_id":"","sender":"","recipient":"","bcc":"","cc":"","subject":"","content":"","remarks":"","modified_user":"","modified_username":"","modified_date":""});
            const editFormOptions = ref([[{"title":"公司別,舊版SUN_DB","field":"entity"},
                               {"title":"範本自訂代碼","required":true,"field":"notify_id"},
                               {"title":"寄件者","field":"sender"},
                               {"title":"收件者","field":"recipient"},
                               {"title":"密件收件者","field":"bcc"},
                               {"title":"副本收件者","field":"cc"},
                               {"title":"主旨","field":"subject"},
                               {"title":"內容","field":"content"},
                               {"title":"備註","field":"remarks"},
                               {"title":"最後修改用戶","field":"modified_user","type":"number"},
                               {"title":"","field":"modified_username"},
                               {"title":"最後修改時間","field":"modified_date"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'notifytemp_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'entity',title:'公司別,舊版SUN_DB',type:'string',width:110,align:'left',sort:true},
                       {field:'notify_id',title:'範本自訂代碼',type:'string',width:110,require:true,align:'left'},
                       {field:'function_id',title:'模組自訂代碼',type:'string',width:110,align:'left'},
                       {field:'sender',title:'寄件者',type:'string',width:180,align:'left'},
                       {field:'recipient',title:'收件者',type:'string',width:180,align:'left'},
                       {field:'bcc',title:'密件收件者',type:'string',width:180,align:'left'},
                       {field:'cc',title:'副本收件者',type:'string',width:180,align:'left'},
                       {field:'subject',title:'主旨',type:'string',width:180,align:'left'},
                       {field:'content',title:'內容',type:'string',width:220,align:'left'},
                       {field:'remarks',title:'備註',type:'string',width:220,align:'left'},
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
