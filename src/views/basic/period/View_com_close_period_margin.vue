<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/period/View_com_close_period_margin.js此处编写
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
    import extend from "@/extension/basic/period/View_com_close_period_margin.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'period_dbid',
                footer: "Foots",
                cnName: 'Margin Period Close',
                name: 'period/View_com_close_period_margin',
                url: "/View_com_close_period_margin/",
                sortName: "year"
            });
            const editFormFields = ref({"year":"","period":"","m_start_date":"","m_end_date":""});
            const editFormOptions = ref([[{"title":"Year","required":true,"field":"year","disabled":true,"type":"text"},
                               {"dataKey":"Period","data":[],"title":"Period","required":true,"field":"period","disabled":true,"type":"select"}],
                              [{"title":"m_Start_Date","field":"m_start_date","type":"date"},
                               {"title":"m_End_Date","field":"m_end_date","type":"date"}]]);
            const searchFormFields = ref({"year":"","period":""});
            const searchFormOptions = ref([[{"title":"Year","field":"year","type":"text"},{"dataKey":"Period","data":[],"title":"Period","field":"period","type":"select"}]]);
            const columns = ref([{field:'year',title:'Year',type:'int',sort:true,width:80,readonly:true,require:true,align:'left',sort:true},
                       {field:'period',title:'Period',type:'int',bind:{ key:'Period',data:[]},width:80,readonly:true,require:true,align:'left'},
                       {field:'start_date',title:'Start Date',type:'datetime',width:150,align:'left',sort:true},
                       {field:'end_date',title:'End Date',type:'datetime',width:150,align:'left',sort:true},
                       {field:'m_start_date',title:'m_Start_Date',type:'datetime',width:150,align:'left',sort:true},
                       {field:'m_end_date',title:'m_End_Date',type:'datetime',width:150,align:'left',sort:true},
                       {field:'period_dbid',title:'PKID',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:80,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:80,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'sales_end_date',title:'Sales 會計帳結束日期',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'sales_start_date',title:'Sales 會計帳起始日期',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'entity',title:'公司別,舊版SUN_DB',type:'string',width:110,hidden:true,align:'left'},
                       {field:'dbid',title:'識別碼, PK, Identity',type:'int',width:80,hidden:true,require:true,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:150,hidden:true,align:'left',sort:true}]);
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
