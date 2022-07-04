<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/nhiadjust/Viat_app_nhi_adjust.js此处编写
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
    import extend from "@/extension/dataentry/nhiadjust/Viat_app_nhi_adjust.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'nhiadjust_dbid',
                footer: "Foots",
                cnName: '健保價調整主表二',
                name: 'nhiadjust/Viat_app_nhi_adjust',
                url: "/Viat_app_nhi_adjust/",
                sortName: "created_date"
            });
            const editFormFields = ref({"prod_dbid":"","old_nhi_price":"","new_nhi_price":"","nhi_id":""});
            const editFormOptions = ref([[{"title":"Product","field":"prod_dbid"},
                               {"title":"Old NHI Price","field":"old_nhi_price","type":"decimal"}],
                              [{"title":"New NHI Price","field":"new_nhi_price","type":"decimal"},
                               {"title":"NHI Code","field":"nhi_id"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'nhiadjust_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'dbid',title:'識別碼, PK, Identity',type:'int',width:110,hidden:true,require:true,align:'left'},
                       {field:'division',title:'所屬事業單位,01:PH;03:AH;05:CH;06:NU',type:'string',width:110,hidden:true,align:'left'},
                       {field:'nhiadjustm_dbid',title:'nhiadjustm_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'prod_dbid',title:'Product',type:'guid',width:110,align:'left',sort:true},
                       {field:'old_nhi_price',title:'Old NHI Price',type:'decimal',width:110,align:'left'},
                       {field:'new_nhi_price',title:'New NHI Price',type:'decimal',width:110,align:'left'},
                       {field:'nhi_id',title:'NHI Code',type:'string',width:110,align:'left'},
                       {field:'state',title:'狀態,0:草稿 1:轉EBMS',type:'string',width:110,hidden:true,align:'left'},
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
