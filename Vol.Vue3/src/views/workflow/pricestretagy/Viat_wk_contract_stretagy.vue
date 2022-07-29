<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/pricestretagy/Viat_wk_contract_stretagy.js此处编写
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
    import extend from "@/extension/workflow/pricestretagy/Viat_wk_contract_stretagy.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'contstret_dbid',
                footer: "Foots",
                cnName: 'Price strategy contract',
                name: 'pricestretagy/Viat_wk_contract_stretagy',
                url: "/Viat_wk_contract_stretagy/",
                sortName: "created_date"
            });
            const editFormFields = ref({"cont_stretagy_type":"","cont_stretagy_id":"","cont_stretagy_name":"","amount":"","status":""});
            const editFormOptions = ref([[{"dataKey":"entity","data":[],"title":"Stretagy Type","field":"cont_stretagy_type","required":true,"type":"select"},
                               {"title":"Stretagy ID","field":"cont_stretagy_id","required":true,},
                               {"title":"Stretagy Name","field":"cont_stretagy_name","required":true,}],
                              [{"title":"Rang","required":true,"field":"amount","type":"decimal"},
                               {"dataKey":"Status_YN","data":[],"title":"Status","field":"status","type":"select","required":true,}]]);
            const searchFormFields = ref({"cont_stretagy_id":"","cont_stretagy_name":""});
            const searchFormOptions = ref([[{"title":"Stretagy ID","field":"cont_stretagy_id"},{"title":"Stretagy Name","field":"cont_stretagy_name"}]]);
            const columns = ref([{field:'contstret_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'cont_stretagy_type',title:'Stretagy Type',link:true,type:'string',bind:{ key:'entity',data:[]},width:110,align:'left',sort:true},
                       {field:'cont_stretagy_id',title:'Stretagy ID',type:'string',width:110,align:'left'},
                       {field:'cont_stretagy_name',title:'Stretagy Name',type:'string',width:120,align:'left'},
                       {field:'amount',title:'Rang',type:'decimal',width:110,require:true,align:'left'},
                       {field:'status',title:'Status',type:'string',bind:{ key:'Status_YN',data:[]},width:110,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'列created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'列created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'列modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'列modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
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
