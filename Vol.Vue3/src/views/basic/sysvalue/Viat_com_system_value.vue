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
                cnName: '系統參數設置',
                name: 'sysvalue/Viat_com_system_value',
                url: "/Viat_com_system_value/",
                sortName: "dbid"
            });
            const editFormFields = ref({"category_id":"","sys_key":"","sys_value":"","seqno":"","status":"","remarks":""});
            const editFormOptions = ref([[{"title":"類別代碼","required":true,"field":"category_id"}],
                              [{"title":"參數值","field":"sys_value"},
                               {"title":"參數名稱","required":true,"field":"sys_key"}],
                              [{"title":"順序","field":"seqno","type":"number"},
                               {"dataKey":"Status2","data":[],"title":"是否有效","field":"status","type":"select"}],
                              [{"title":"備註","field":"remarks","type":"textarea"}]]);
            const searchFormFields = ref({"category_id":"","sys_key":"","status":""});
            const searchFormOptions = ref([[{"title":"參數名稱","field":"sys_key","type":"like"},{"dataKey":"Status2","data":[],"title":"是否有效","field":"status","type":"select"},{"title":"類別代碼","field":"category_id","type":"like"}]]);
            const columns = ref([{field:'sysval_dbid',title:'ID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'category_id',title:'類別代碼',type:'string',link:true,width:220,require:true,align:'left',sort:true},
                       {field:'sys_key',title:'參數名稱',type:'string',width:220,require:true,align:'left'},
                       {field:'sys_value',title:'參數值',type:'string',width:220,align:'left'},
                       {field:'seqno',title:'順序',type:'decimal',width:110,align:'left'},
                       {field:'status',title:'是否有效',type:'string',bind:{ key:'Status2',data:[]},width:110,align:'left'},
                       {field:'remarks',title:'備註',type:'string',width:220,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:110,align:'left',sort:true},
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
