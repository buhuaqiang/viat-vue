<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/mpg/View_com_local_mpg.js此处编写
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
    import extend from "@/extension/basic/mpg/View_com_local_mpg.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'localmpg_dbid',
                footer: "Foots",
                cnName: 'Local MPG Maintain',
                name: 'mpg/View_com_local_mpg',
                url: "/View_com_local_mpg/",
                sortName: "entity"
            });
            const editFormFields = ref({"globalmpg_dbid":"","mpg_id":"","mpg_name":"","category":"","bu_id":"","ta":"","supervisorUserName":"","maUserName":"","medical_reviewer_name":"","imt_type":"","status":"","pm_id":"","ma_id":"","medical_reviewer_id":""});
            const editFormOptions = ref([[{"title":"Local Mpg ID","required":true,"field":"mpg_id"},
                               {"dataKey":"GlobalMpgSelect","data":[],"title":"Global Mpg","field":"globalmpg_dbid","type":"select"}],
                              [{"title":"Local Mpg Name","field":"mpg_name"},
                               {"dataKey":"LocalMpgCategory","data":[],"title":"Category","field":"category","type":"select"}],
                              [{"dataKey":"LocalBu","data":[],"title":"Bu ID","field":"bu_id","type":"select"},
                               {"dataKey":"LocalTA","data":[],"title":"Ta","required":true,"field":"ta","type":"select"}],
                              [{"title":"PM","field":"supervisorUserName","disabled":true,"colSize":6},
                               {"title":"Ma","field":"maUserName","disabled":true,"colSize":6}],
                              [{"dataKey":"IMT_Type","data":[],"title":"IMT Type","field":"imt_type","type":"select"},
                               {"title":"Medical Reviewer Name","field":"medical_reviewer_name"}],
                              [{"dataKey":"Status_YN","data":[],"title":"status","field":"status","type":"select"}],
                              [{"title":"","field":"pm_id"}],
                              [{"title":"","field":"ma_id"}],
                              [{"title":"","field":"medical_reviewer_id"}]]);
            const searchFormFields = ref({"mpg_id":"","mpg_name":"","bu_id":"","category":"","ta":"","supervisorUserName":"","maUserName":"","medical_reviewer_name":"","status":"","imt_type":"","ma_id":"","pm_id":"","medical_reviewer_id":""});
            const searchFormOptions = ref([[{"title":"Local Mpg ID","field":"mpg_id"},{"title":"Local Mpg Name","field":"mpg_name","type":"like"},{"dataKey":"LocalTA","data":[],"title":"Ta","field":"ta","type":"select"},{"dataKey":"LocalBu","data":[],"title":"Bu ID","field":"bu_id","type":"select"}],[{"title":"Medical Reviewer Name","field":"medical_reviewer_name"},{"dataKey":"LocalMpgCategory","data":[],"title":"Category","field":"category","type":"select"},{"dataKey":"IMT_Type","data":[],"title":"IMT Type","field":"imt_type","type":"select"},{"dataKey":"Status_YN","data":[],"title":"status","field":"status","type":"select"}],[{"title":"Ma","field":"maUserName"},{"title":"PM","field":"supervisorUserName"}],[{"title":"","field":"ma_id"},{"title":"","field":"pm_id"},{"title":"","field":"medical_reviewer_id"}]]);
            const columns = ref([{field:'localmpg_dbid',title:'localmpg_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'globalmpg_dbid',title:'Global Mpg',type:'guid',bind:{ key:'GlobalMpgSelect',data:[]},width:110,hidden:true,align:'left'},
                       {field:'entity',title:'Entity',type:'string',width:110,align:'left',sort:true},
                       {field:'mpg_id',title:'Local Mpg ID',type:'string',link:true,width:110,require:true,align:'left'},
                       {field:'mpg_name',title:'Local Mpg Name',type:'string',width:110,align:'left'},
                       {field:'bu_id',title:'Bu ID',type:'string',bind:{ key:'LocalBu',data:[]},width:110,align:'left'},
                       {field:'category',title:'Category',type:'string',bind:{ key:'LocalMpgCategory',data:[]},width:110,align:'left'},
                       {field:'ta',title:'Ta',type:'string',bind:{ key:'LocalTA',data:[]},width:110,require:true,align:'left'},
                       {field:'supervisorUserName',title:'PM',type:'string',width:110,readonly:true,align:'left'},
                       {field:'maUserName',title:'Ma',type:'string',width:110,readonly:true,align:'left'},
                       {field:'medical_reviewer_name',title:'Medical Reviewer Name',type:'string',width:110,align:'left'},
                       {field:'sort',title:'sort',type:'int',width:110,hidden:true,align:'left'},
                       {field:'globalMpgName',title:'Global Mpg Name',type:'string',width:110,require:true,align:'left'},
                       {field:'status',title:'status',type:'string',bind:{ key:'Status_YN',data:[]},width:110,align:'left'},
                       {field:'main_prod',title:'main_prod',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_user',title:'created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'imt_type',title:'IMT Type',type:'string',bind:{ key:'IMT_Type',data:[]},width:110,align:'left'},
                       {field:'modified_username',title:'Last Modified',type:'string',width:110,align:'left'},
                       {field:'modified_client',title:'modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'Modified Date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'ma_id',title:'ma_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'pm_id',title:'pm_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'old_mpg_id',title:'old_mpg_id',type:'string',width:110,align:'left'},
                       {field:'medical_reviewer_id',title:'medical_reviewer_id',type:'string',width:110,hidden:true,align:'left'}]);
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
