<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/notify/View_com_notify_template.js此处编写
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
    import extend from "@/extension/basic/notify/View_com_notify_template.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'notifytemp_dbid',
                footer: "Foots",
                cnName: '消息模板設置',
                name: 'notify/View_com_notify_template',
                url: "/View_com_notify_template/",
                sortName: "created_date"
            });
            const editFormFields = ref({"notify_id":"","sender":"","subject":"","cc":"","bcc":"","content":"","remarks":"","emp_ename":"","modified_date":""});
            const editFormOptions = ref([[{"title":"Notify Id","required":true,"field":"notify_id"},
                               {"title":"Sender","required":true,"field":"sender"}],
                              [{"title":"Subject","required":true,"field":"subject"},{"title":"Recipient","field":"recipient"}],
                              //[{"title":"Recipient","field":"recipient"}],
                              [{"title":"Cc","field":"cc"},{"title":"Bcc","field":"bcc"}],
                              //[{"title":"Bcc","field":"bcc"}],
                              [{"title":"Content","field":"content","type":"textarea"},{"title":"Remarks","field":"remarks"}],
                              //[{"title":"Remarks","field":"remarks"}],
                              [{"title":"Last Modified","field":"emp_ename","disabled":true},
                               {"title":"Modified Date","field":"modified_date","disabled":true}]]);
            const searchFormFields = ref({"notify_id":"","subject":""});
            const searchFormOptions = ref([[{"title":"Notify Id","field":"notify_id","type":"like"},{"title":"Subject","field":"subject","type":"like"}]]);
            const columns = ref([{field:'notifytemp_dbid',title:'列名notifytemp_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'created_date',title:'列名created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'列名modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'notify_id',title:'Notify Id',type:'string',link:true,width:90,require:true,align:'left',sort:true},
                       {field:'sender',title:'Sender',type:'string',width:150,align:'left'},
                       {field:'subject',title:'Subject',type:'string',width:150,align:'left'},
                       {field:'entity',title:'列名entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'recipient',title:'Recipient',type:'string',width:180,align:'left'},
                       {field:'cc',title:'Cc',type:'string',width:110,align:'left'},
                       {field:'bcc',title:'Bcc',type:'string',width:110,align:'left'},
                       {field:'remarks',title:'Remarks',type:'string',width:180,align:'left'},
                       {field:'emp_ename',title:'Last Modified',type:'string',width:110,readonly:true,align:'left'},
                       {field:'modified_username',title:'列名modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'Modified Date',type:'datetime',width:130,readonly:true,align:'left',sort:true},
                       {field:'function_id',title:'列名function_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'content',title:'列名content',type:'string',width:220,hidden:true,align:'left'},
                       {field:'emp_cname',title:'列名emp_cname',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_user',title:'列名created_user',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_username',title:'列名created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'列名created_client',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'列名created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'列名modified_client',type:'int',width:80,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'列名modified_clientusername',type:'string',width:110,hidden:true,align:'left'}]);
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
