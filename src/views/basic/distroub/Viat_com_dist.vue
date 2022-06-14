<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/distroub/Viat_com_dist.js此处编写
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
    import extend from "@/extension/basic/distroub/Viat_com_dist.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'dist_dbid',
                footer: "Foots",
                cnName: '經銷商客戶對應主表',
                name: 'distroub/Viat_com_dist',
                url: "/Viat_com_dist/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"entity":"","cust_dbid":"","status":"","dist_id":""});
            const editFormOptions = ref([[{"title":"公司別,舊版SUN_DB","required":true,"field":"entity","type":"text"}],
                              [{"title":"Viatris Customer dbid","required":true,"field":"cust_dbid","type":"text"}],
                              [{"dataKey":"狀態測試","data":[],"title":"是否有效,Y: 是 ; N:否","required":true,"field":"status","type":"radio"}],
                              [{"title":"經銷商代碼","required":true,"field":"dist_id","type":"text"}]]);
            const searchFormFields = ref({"dist_id":""});
            const searchFormOptions = ref([[{"title":"經銷商代碼","field":"dist_id"}]]);
            const columns = ref([{field:'dist_id',title:'經銷商代碼',type:'string',width:110,hidden:true,require:true,align:'left'},
                       {field:'dbid',title:'識別碼',type:'int',width:110,require:true,align:'left',sort:true},
                       {field:'division',title:'所屬事業單位,01:PH;03:AH;05:CH;06:NU',type:'string',width:110,align:'left'},
                       {field:'status',title:'是否有效,Y: 是 ; N:否',type:'string',bind:{ key:'狀態測試',data:[]},width:110,require:true,align:'left'},
                       {field:'entity',title:'公司別,舊版SUN_DB',type:'string',width:110,require:true,align:'left'},
                       {field:'dist_dbid',title:'主鍵',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:150,align:'left',sort:true},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:80,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,align:'left'},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:80,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:150,align:'left',sort:true},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:80,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:80,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,align:'left'},
                       {field:'cust_dbid',title:'Viatris Customer dbid',type:'string',width:110,require:true,align:'left'}]);
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
