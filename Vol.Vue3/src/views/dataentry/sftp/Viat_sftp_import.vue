<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/sftp/Viat_sftp_import.js此处编写
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
    import extend from "@/extension/dataentry/sftp/Viat_sftp_import.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'sftp_dbid',
                footer: "Foots",
                cnName: 'Viat_sftp_import',
                name: 'sftp/Viat_sftp_import',
                url: "/Viat_sftp_import/",
                sortName: "file_path"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({"dist_id":"","source":""});
            const searchFormOptions = ref([[{"dataKey":"distributor_Drop","data":[],"title":"","field":"dist_id","type":"select"},{"dataKey":"SFTP_Import_Source","data":[],"title":"","field":"source","type":"select"}]]);
            const columns = ref([{field:'sftp_dbid',title:'sftp_dbid',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'file_name',title:'file_name',type:'string',width:220,align:'left',sort:true},
                       {field:'file_path',title:'file_path',type:'string',width:220,align:'left'},
                       {field:'upload_date',title:'upload_date',type:'datetime',width:110,align:'left',sort:true}]);
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
