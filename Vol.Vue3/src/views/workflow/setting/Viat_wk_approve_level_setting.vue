<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/setting/Viat_wk_approve_level_setting.js此处编写
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
    import extend from "@/extension/workflow/setting/Viat_wk_approve_level_setting.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'levelsetting_dbid',
                footer: "Foots",
                cnName: '流程審批等級配置',
                name: 'setting/Viat_wk_approve_level_setting',
                url: "/Viat_wk_approve_level_setting/",
                sortName: "Grade"
            });
            const editFormFields = ref({"biz_type":"","grade":"","condition":"","approve_pos":"","remark":"","status":""});
            const editFormOptions = ref([[{"dataKey":"ApprovalType","data":[],"title":"Flow Type","required":true,"field":"biz_type","type":"select"},
                               {"title":"Grade","required":true,"field":"grade","type":"number"}],
                              [{"dataKey":"SYS_USER_PROFESSION_TYPE","data":[],"title":"Approve pos","required":true,"field":"approve_pos","type":"select"},
                               {"title":"Condition","required":true,"field":"condition","type":"number"}],
                              [{"dataKey":"Status_YN","data":[],"title":"Status","required":true,"field":"status","type":"select"},
                               {"title":"Remark","required":true,"field":"remark"}]]);
            const searchFormFields = ref({"biz_type":"","approve_pos":""});
            const searchFormOptions = ref([[{"dataKey":"ApprovalType","data":[],"title":"Flow Type","field":"biz_type","type":"select"},{"dataKey":"SYS_USER_PROFESSION_TYPE","data":[],"title":"Approve pos","field":"approve_pos","type":"select"}]]);
            const columns = ref([{field:'levelsetting_dbid',title:'levelsetting_dbid',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'biz_type',title:'Flow Type',type:'string',bind:{ key:'ApprovalType',data:[]},width:110,require:true,align:'left',sort:true},
                       {field:'grade',title:'Grade',type:'int',width:110,require:true,align:'left'},
                       {field:'condition',title:'Condition',type:'int',width:110,require:true,align:'left'},
                       {field:'approve_pos',title:'Approve pos',type:'string',bind:{ key:'SYS_USER_PROFESSION_TYPE',data:[]},width:110,require:true,align:'left'},
                       {field:'remark',title:'Remark',type:'string',width:220,require:true,align:'left'},
                       {field:'status',title:'Status',type:'string',bind:{ key:'Status_YN',data:[]},width:110,require:true,align:'left'},
                       {field:'created_user',title:'Created User',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'Created UserName',type:'string',width:110,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'Created Date',type:'datetime',width:110,align:'left',sort:true},
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
