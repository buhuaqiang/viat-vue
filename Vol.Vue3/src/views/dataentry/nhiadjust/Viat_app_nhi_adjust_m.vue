<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/nhiadjust/Viat_app_nhi_adjust_m.js此处编写
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
    import extend from "@/extension/dataentry/nhiadjust/Viat_app_nhi_adjust_m.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'nhiadjustm_dbid',
                footer: "Foots",
                cnName: '健保價調整主表一',
                name: 'nhiadjust/Viat_app_nhi_adjust_m',
                url: "/Viat_app_nhi_adjust_m/",
                sortName: "created_date"
            });
            const editFormFields = ref({"nhi_batch":"","start_date":"","remarks":"","nhiadjustm_dbid":""});
            const editFormOptions = ref([[{"title":"Batch No","required":true,"field":"nhi_batch","type":"text"},
                               {"title":"Base Date","field":"start_date","type":"date"},
                               {"title":"Note","field":"remarks","type":"text"}],
                              [{"title":"PKID","required":true,"field":"nhiadjustm_dbid","disabled":true,"type":"text"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'nhiadjustm_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'nhi_batch',title:'Batch No',type:'int',width:110,hidden:true,require:true,align:'left'},
                       {field:'start_date',title:'Base Date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'status',title:'是否有效,Y:生效/N:未生效/C:移除',type:'string',width:110,hidden:true,align:'left'},
                       {field:'apply_allw',title:'是否申請庫存價差',type:'string',width:110,hidden:true,align:'left'},
                       {field:'remarks',title:'Note',type:'string',width:220,hidden:true,align:'left'},
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
