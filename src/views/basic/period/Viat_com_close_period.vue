<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/period/Viat_com_close_period.js此处编写
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
    import extend from "@/extension/basic/period/Viat_com_close_period.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'period_dbid',
                footer: "Foots",
                cnName: 'Account Period',
                name: 'period/Viat_com_close_period',
                url: "/Viat_com_close_period/",
                sortName: "year"
            });
            const editFormFields = ref({"year":"","period":"","start_date":"","end_date":"","sales_start_date":"","sales_end_date":""});
            const editFormOptions = ref([[{"title":"Year","required":true,"field":"year","type":"number"},
                               {"dataKey":"Period","data":[],"title":"Period","required":true,"field":"period","type":"select"}],
                              [{"title":"Start Date","field":"start_date","type":"date"},
                               {"title":"End Date","field":"end_date","type":"date"}],
                              [{"title":"Sales Start Date","field":"sales_start_date","type":"date"},
                               {"title":"Sales End Date","field":"sales_end_date","type":"date"}]]);
            const searchFormFields = ref({"year":"","period":""});
            const searchFormOptions = ref([[{"title":"Year","field":"year","type":"text"},{"dataKey":"Period","data":[],"title":"Period","field":"period","type":"select"}]]);
            const columns = ref([{field:'period_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'entity',title:'公司別,舊版SUN_DB',type:'string',width:110,hidden:true,align:'left'},
                       {field:'year',title:'Year',type:'int',width:110,require:true,align:'left',sort:true},
                       {field:'period',title:'Period',type:'int',bind:{ key:'Period',data:[]},width:110,require:true,align:'left'},
                       {field:'start_date',title:'Start Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'end_date',title:'End Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'sales_start_date',title:'Sales Start Date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'sales_end_date',title:'Sales End Date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'m_start_date',title:'Margin Start Date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'m_end_date',title:'Margin End Date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
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
