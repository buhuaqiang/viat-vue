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
                cnName: 'Zip City Setting',
                name: 'city/Viat_com_zip_city',
                url: "/Viat_com_zip_city/",
                sortName: "zip_id"
            });
            const editFormFields = ref({"city_id":"","city_name":"","zip_id":"","zip_name":"","status":""});
            const editFormOptions = ref([[{"title":"City ID","required":true,"field":"city_id","type":"number"},
                               {"title":"City Name","required":true,"field":"city_name"}],
                              [{"title":"Zip Code","required":true,"field":"zip_id","type":"number"},
                               {"title":"Area Name","required":true,"field":"zip_name"}],
                              [{"dataKey":"Status_Effect","data":[],"title":"status","required":true,"field":"status","type":"select"}]]);
            const searchFormFields = ref({"zip_name":"","city_name":""});
            const searchFormOptions = ref([[{"title":"Area Name","field":"zip_name","type":"like"},{"title":"City Name","field":"city_name","type":"like"}]]);
            const columns = ref([{field:'zip_id',title:'Zip Code',type:'string',width:110,require:true,align:'left',sort:true},
                       {field:'zip_name',title:'Area Name',type:'string',link:true,width:110,require:true,align:'left'},
                       {field:'city_id',title:'City ID',type:'string',width:110,require:true,align:'left'},
                       {field:'city_name',title:'City Name',type:'string',width:110,require:true,align:'left'},
                       {field:'status',title:'status',type:'string',bind:{ key:'Status_Effect',data:[]},width:110,require:true,align:'left'},
                       {field:'created_user',title:'Created User',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'Created Date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'modified_user',type:'int',width:80,hidden:true,align:'left'},
                       {field:'modified_username',title:'Last Modified',type:'string',width:110,align:'left'},
                       {field:'modified_date',title:'Modified Date',type:'datetime',width:150,align:'left',sort:true},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:80,hidden:true,align:'left'},
                       {field:'zip_dbid',title:'郵區表DBID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
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
