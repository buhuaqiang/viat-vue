<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/city/Viat_com_zip_city.js此处编写
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
    import extend from "@/extension/basic/city/Viat_com_zip_city.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'zip_dbid',
                footer: "Foots",
                cnName: '地區信息',
                name: 'city/Viat_com_zip_city',
                url: "/Viat_com_zip_city/",
                sortName: "city_id"
            });
            const editFormFields = ref({"city_id":"","city_name":"","zip_id":"","zip_name":"","status":""});
            const editFormOptions = ref([[{"title":"城市代碼","field":"city_id","type":"number"},
                               {"title":"城市名稱","field":"city_name"}],
                              [{"title":"地區編碼","field":"zip_id","type":"number"},
                               {"title":"地區名稱","field":"zip_name"}],
                              [{"dataKey":"Status2","data":[],"title":"是否有效","field":"status","type":"select"}]]);
            const searchFormFields = ref({"zip_name":"","city_name":""});
            const searchFormOptions = ref([[{"title":"地區名稱","field":"zip_name","type":"like"},{"title":"城市名稱","field":"city_name","type":"like"}]]);
            const columns = ref([{field:'zip_id',title:'地區編碼',type:'string',width:110,hidden:true,align:'left'},
                       {field:'zip_name',title:'地區名稱',type:'string',link:true,width:110,align:'left',sort:true},
                       {field:'city_id',title:'城市代碼',type:'string',width:110,align:'left'},
                       {field:'city_name',title:'城市名稱',type:'string',width:110,align:'left'},
                       {field:'status',title:'是否有效',type:'string',bind:{ key:'Status2',data:[]},width:110,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:80,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:150,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:80,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:150,align:'left',sort:true},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:80,hidden:true,align:'left'},
                       {field:'zip_dbid',title:'郵區表DBID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,align:'left'}]);
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
