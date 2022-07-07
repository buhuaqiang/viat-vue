<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/sysvalue/Viat_com_system_value.js此处编写
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
    import extend from "@/extension/basic/sysvalue/Viat_com_system_value.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'sysval_dbid',
                footer: "Foots",
                cnName: 'System Parameter Setting',
                name: 'sysvalue/Viat_com_system_value',
                url: "/Viat_com_system_value/",
                sortName: "category_id"
            });
            const editFormFields = ref({"category_id":"","seqno":"","sys_key":"","sys_value":"","status":"","remarks":""});
            const editFormOptions = ref([[{"title":"Category ID","required":true,"field":"category_id"},
                               {"title":"Sort Order","required":true,"field":"seqno","type":"number"}],
                              [{"title":"Key","required":true,"field":"sys_key"},
                               {"title":"Value","required":true,"field":"sys_value"}],
                              [{"dataKey":"Status_Effect","data":[],"title":"Status","required":true,"field":"status","type":"select"},
                               {"title":"Remark","field":"remarks","type":"textarea"}]]);
            const searchFormFields = ref({"category_id":"","sys_key":"","status":""});
            const searchFormOptions = ref([[{"title":"Key","field":"sys_key","type":"like"},{"dataKey":"Status_Effect","data":[],"title":"Status","field":"status","type":"select"},{"title":"Category ID","field":"category_id","type":"like"}]]);
            const columns = ref([{field:'sysval_dbid',title:'ID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'category_id',title:'Category ID',type:'string',link:true,width:220,require:true,align:'left',sort:true},
                       {field:'sys_key',title:'Key',type:'string',width:220,require:true,align:'left'},
                       {field:'sys_value',title:'Value',type:'string',width:220,require:true,align:'left'},
                       {field:'seqno',title:'Sort Order',type:'decimal',width:110,require:true,align:'left'},
                       {field:'status',title:'Status',type:'string',bind:{ key:'Status_Effect',data:[]},width:110,require:true,align:'left'},
                       {field:'remarks',title:'Remark',type:'string',width:220,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'Last Modified',type:'string',width:110,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'Modified Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'}]);
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
