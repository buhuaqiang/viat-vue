<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/nhiadjust/View_nhi_adjust.js此处编写
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
    import extend from "@/extension/dataentry/nhiadjust/View_nhi_adjust.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'nhiadjustm_dbid',
                footer: "Foots",
                cnName: 'NHI Adjustment',
                name: 'nhiadjust/View_nhi_adjust',
                url: "/View_nhi_adjust/",
                sortName: "created_date"
            });
            const editFormFields = ref({"nhi_batch":"","start_date":"","remarks":""});
            const editFormOptions = ref([[{"title":"Batch No","required":true,"field":"nhi_batch","type":"text"},
                               {"title":"Base Date","field":"start_date","type":"date"}],
                              [{"title":"Note","field":"remarks","type":"text"}]]);
            const searchFormFields = ref({"nhiadjustm_dbid":"","start_date":"","prod_id":""});
            const searchFormOptions = ref([[{"dataKey":"nhiAdjust","data":[],"title":"Batch No","field":"nhiadjustm_dbid","type":"select"},{"title":"Base Date","field":"start_date","type":"date"}],[{"title":"Product","field":"prod_id","type":"text"}]]);
            const columns = ref([{field:'nhiadjustm_dbid',title:'Batch No',type:'guid',bind:{ key:'nhiAdjust',data:[]},width:110,hidden:true,require:true,align:'left'},
                       {field:'nhi_batch',title:'Batch No',type:'int',link:true,width:110,require:true,align:'left',sort:true},
                       {field:'start_date',title:'Base Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'status',title:'Status',type:'string',width:110,align:'left'},
                       {field:'apply_allw',title:'apply_allw',type:'string',width:110,hidden:true,align:'left'},
                       {field:'remarks',title:'Note',type:'string',width:220,align:'left'},
                       {field:'created_user',title:'created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'modified_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'prod_dbid',title:'prod_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'dbid',title:'dbid',type:'int',width:80,hidden:true,require:true,align:'left'},
                       {field:'prod_id',title:'Product',type:'string',width:110,hidden:true,require:true,align:'left'},
                       {field:'prod_ename',title:'prod_ename',type:'string',width:110,hidden:true,align:'left'}]);
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
