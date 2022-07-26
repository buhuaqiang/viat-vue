<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/mpg/Viat_com_local_mpg.js此处编写
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
    import extend from "@/extension/basic/mpg/Viat_com_local_mpg.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'localmpg_dbid',
                footer: "Foots",
                cnName: '本地產品群組實體表',
                name: 'mpg/Viat_com_local_mpg',
                url: "/Viat_com_local_mpg/",
                sortName: "created_date"
            });
            const editFormFields = ref({"globalmpg_dbid":"","mpg_id":"","mpg_name":"","category":"","bu_id":"","ta":"","status":""});
            const editFormOptions = ref([[{"title":"Mpg代碼","field":"mpg_id","disabled":true},
                               {"dataKey":"GlobalMpgSelect","data":[],"title":"PKID","field":"globalmpg_dbid","type":"select"}],
                              [{"title":"Mpg名稱","field":"mpg_name"},
                               {"dataKey":"LocalMpgCategory","data":[],"title":"category","field":"category","type":"select"}],
                              [{"dataKey":"LocalBu","data":[],"title":"Bu","field":"bu_id","type":"select"},
                               {"dataKey":"LocalTA","data":[],"title":"ta","field":"ta","type":"select"}],
                              [{"dataKey":"Status_YN","data":[],"title":"是否有效,True:生效;False:失效","field":"status","type":"select"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'localmpg_dbid',title:'ID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'globalmpg_dbid',title:'PKID',type:'guid',bind:{ key:'GlobalMpgSelect',data:[]},width:110,align:'left',sort:true},
                       {field:'entity',title:'公司別',type:'string',width:110,align:'left'},
                       {field:'mpg_id',title:'Mpg代碼',type:'string',link:true,width:110,readonly:true,align:'left'},
                       {field:'mpg_name',title:'Mpg名稱',type:'string',width:110,align:'left'},
                       {field:'category',title:'category',type:'string',bind:{ key:'LocalMpgCategory',data:[]},width:110,align:'left'},
                       {field:'bu_id',title:'Bu',type:'string',bind:{ key:'LocalBu',data:[]},width:110,align:'left'},
                       {field:'ta',title:'ta',type:'string',bind:{ key:'LocalTA',data:[]},width:110,align:'left'},
                       {field:'sort',title:'排序  for finance report',type:'int',width:110,align:'left'},
                       {field:'status',title:'是否有效,True:生效;False:失效',type:'string',bind:{ key:'Status_YN',data:[]},width:110,align:'left'},
                       {field:'main_prod',title:'是否主要產品,True:主要;False:非主要',type:'string',width:110,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:110,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:110,align:'left',sort:true},
                       {field:'ma_id',title:'助理代碼(預留欄位)',type:'string',width:110,align:'left'},
                       {field:'dbid',title:'識別碼, PK, Identity',type:'int',width:80,require:true,align:'left'},
                       {field:'pm_id',title:'主管代碼(預留)',type:'string',width:110,align:'left'},
                       {field:'ma_name',title:'ma_name',type:'string',width:120,align:'left'},
                       {field:'pm_name',title:'pm_name',type:'string',width:120,align:'left'},
                       {field:'medical_reviewe_id',title:'medical_reviewe_id',type:'string',width:110,align:'left'},
                       {field:'medical_reviewe_name',title:'medical_reviewe_name',type:'string',width:120,align:'left'}]);
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
