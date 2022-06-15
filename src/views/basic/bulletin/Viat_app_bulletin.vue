<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/bulletin/Viat_app_bulletin.js此处编写
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
    import extend from "@/extension/basic/bulletin/Viat_app_bulletin.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'bulletin_dbid',
                footer: "Foots",
                cnName: '系統訊息',
                name: 'bulletin/Viat_app_bulletin',
                url: "/Viat_app_bulletin/",
                sortName: "created_date"
            });
            const editFormFields = ref({"entity":"","start_date":"","end_date":"","subject":"","content":"","type":"","modified_user":"","modified_date":""});
            const editFormOptions = ref([[{"title":"公司別,舊版SUN_DB","field":"entity"},
                               {"title":"預計公告日","field":"start_date"},
                               {"title":"預計結束日","field":"end_date"},
                               {"title":"主旨","field":"subject"},
                               {"title":"內容","field":"content"},
                               {"title":"訊息發送對象,1: 所有用戶 ;2:指定用戶","field":"type"},
                               {"title":"最後修改用戶","field":"modified_user","type":"number"},
                               {"title":"最後修改時間","field":"modified_date"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'bulletin_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'entity',title:'公司別,舊版SUN_DB',type:'string',width:110,align:'left',sort:true},
                       {field:'start_date',title:'預計公告日',type:'datetime',width:110,align:'left',sort:true},
                       {field:'end_date',title:'預計結束日',type:'datetime',width:110,align:'left',sort:true},
                       {field:'subject',title:'主旨',type:'string',width:120,align:'left'},
                       {field:'content',title:'內容',type:'string',width:220,align:'left'},
                       {field:'type',title:'訊息發送對象,1: 所有用戶 ;2:指定用戶',type:'string',width:110,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:110,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:110,align:'left',sort:true}]);
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
