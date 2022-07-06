<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/dohtype/Viat_com_doh_type.js此处编写
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
    import extend from "@/extension/basic/dohtype/Viat_com_doh_type.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'doh_dbid',
                footer: "Foots",
                cnName: '健保類別',
                name: 'dohtype/Viat_com_doh_type',
                url: "/Viat_com_doh_type/",
                sortName: "dbid"
            });
            const editFormFields = ref({"doh_type":"","doh_type_name":"","doh_type_ename":"","report_type":"","status":"","doh_map_type":""});
            const editFormOptions = ref([[{"title":"健保局類別名稱","field":"doh_type_name"},
                               {"title":"健保類別","required":true,"field":"doh_type"}],
                              [{"title":"健保局類別英文名稱","field":"doh_type_ename"},
                               {"title":"報表顯示類別","field":"report_type"}],
                              [{"dataKey":"Status_Effect","data":[],"title":"是否有效","field":"status","type":"select"},
                               {"title":"健保類別對照碼","field":"doh_map_type"}]]);
            const searchFormFields = ref({"doh_type":"","doh_type_name":"","doh_type_ename":"","status":""});
            const searchFormOptions = ref([[{"title":"健保類別","field":"doh_type","type":"like"},{"title":"健保局類別名稱","field":"doh_type_name","type":"like"}],[{"title":"健保局類別英文名稱","field":"doh_type_ename","type":"like"},{"dataKey":"Status_Effect","data":[],"title":"是否有效","field":"status","type":"select"}]]);
            const columns = ref([{field:'doh_dbid',title:'ID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'dbid',title:'ID',type:'int',width:110,hidden:true,require:true,align:'left'},
                       {field:'entity',title:'公司別',type:'string',width:110,hidden:true,align:'left'},
                       {field:'division',title:'所屬事業單位',type:'string',width:110,hidden:true,align:'left'},
                       {field:'doh_type',title:'健保類別',type:'string',link:true,width:110,require:true,align:'left',sort:true},
                       {field:'doh_type_name',title:'健保局類別名稱',type:'string',width:110,align:'left'},
                       {field:'doh_type_ename',title:'健保局類別英文名稱',type:'string',width:110,align:'left'},
                       {field:'report_type',title:'報表顯示類別',type:'string',width:110,align:'left'},
                       {field:'status',title:'是否有效',type:'string',bind:{ key:'Status_Effect',data:[]},width:110,align:'left'},
                       {field:'doh_map_type',title:'健保類別對照碼',type:'string',width:110,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:110,align:'left',sort:true},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'}]);
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
