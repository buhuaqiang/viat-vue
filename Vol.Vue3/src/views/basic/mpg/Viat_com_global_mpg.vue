<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/mpg/Viat_com_global_mpg.js此处编写
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
    import extend from "@/extension/basic/mpg/Viat_com_global_mpg.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'globalmpg_dbid',
                footer: "Foots",
                cnName: 'Global MPG Maintain',
                name: 'mpg/Viat_com_global_mpg',
                url: "/Viat_com_global_mpg/",
                sortName: "created_date"
            });
            const editFormFields = ref({"global_mpg":"","mpg_name":"","bu_id":"","status":"","category":"","ta":"","imt_type":"","remarks":""});
            const editFormOptions = ref([[{"title":"Global Mpg ID","required":true,"field":"global_mpg","disabled":true},
                               {"title":"Global Mpg Name","field":"mpg_name","disabled":true}],
                              [{"dataKey":"Bu","data":[],"title":"Bu ID","field":"bu_id","type":"select"},
                               {"dataKey":"Status_YN","data":[],"title":"Status","field":"status","type":"select"}],
                              [{"dataKey":"Category","data":[],"title":"Category","field":"category","type":"select"},
                               {"dataKey":"LocalTA","data":[],"title":"Ta","field":"ta","type":"select"}],
                              [{"dataKey":"IMT_Type","data":[],"title":"IMT Type","field":"imt_type","type":"select"}],
                              [{"title":"HFM Description","field":"remarks","colSize":8}]]);
            const searchFormFields = ref({"global_mpg":"","bu_id":"","mpg_name":"","category":"","ta":"","imt_type":"","status":""});
            const searchFormOptions = ref([[{"title":"Global Mpg ID","field":"global_mpg","type":"like"},{"dataKey":"Bu","data":[],"title":"Bu ID","field":"bu_id","type":"select"}],[{"title":"Global Mpg Name","field":"mpg_name","type":"like"},{"dataKey":"Status_YN","data":[],"title":"Status","field":"status","type":"select"}],[{"dataKey":"LocalTA","data":[],"title":"Ta","field":"ta","type":"select"},{"dataKey":"IMT_Type","data":[],"title":"IMT Type","field":"imt_type","type":"select"}],[{"dataKey":"Category","data":[],"title":"Category","field":"category","type":"select"}]]);
            const columns = ref([{field:'globalmpg_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'entity',title:'公司別',type:'string',width:110,hidden:true,align:'left'},
                       {field:'division',title:'所屬事業單位,01:PH;03:AH;05:CH;06:NU',type:'string',width:110,hidden:true,align:'left'},
                       {field:'global_mpg',title:'Global Mpg ID',type:'string',link:true,width:110,readonly:true,require:true,align:'left',sort:true},
                       {field:'bu_id',title:'Bu ID',type:'string',bind:{ key:'Bu',data:[]},width:110,align:'left'},
                       {field:'mpg_name',title:'Global Mpg Name',type:'string',width:110,readonly:true,align:'left'},
                       {field:'category',title:'Category',type:'string',bind:{ key:'Category',data:[]},width:110,align:'left'},
                       {field:'ta',title:'Ta',type:'string',bind:{ key:'LocalTA',data:[]},width:110,align:'left'},
                       {field:'imt_type',title:'IMT Type',type:'string',bind:{ key:'IMT_Type',data:[]},width:110,align:'left'},
                       {field:'remarks',title:'HFM Description',type:'string',width:220,hidden:true,align:'left'},
                       {field:'sort',title:'排序  for finance report HFM',type:'int',width:110,hidden:true,align:'left'},
                       {field:'status',title:'Status',type:'string',bind:{ key:'Status_YN',data:[]},width:110,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'Last Modified',type:'string',width:110,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'Modified Date',type:'datetime',width:110,align:'left',sort:true}]);
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
