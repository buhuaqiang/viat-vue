<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/sftp/Viat_sftp_export.js此处编写
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
    import extend from "@/extension/dataentry/sftp/Viat_sftp_export.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'sftp_ex_dbid',
                footer: "Foots",
                cnName: 'Viat_sftp_export',
                name: 'sftp/Viat_sftp_export',
                url: "/Viat_sftp_export/",
                sortName: "modified_date"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({"type":"","dist_id":"","transfer_date":""});
            const searchFormOptions = ref([[{"dataKey":"Export Type","data":[],"title":"Type","field":"type","type":"select"}],[{"dataKey":"Distributor with key","data":[],"title":"Distributor","field":"dist_id","type":"select"},{"title":"Date","field":"transfer_date","type":"date"}]]);
            const columns = ref([{field:'type',title:'Type',type:'string',bind:{ key:'Export Type',data:[]},width:110,hidden:true,align:'left'},
                       {field:'dist_id',title:'Distributor',type:'string',bind:{ key:'Distributor with key',data:[]},width:110,hidden:true,align:'left'},
                       {field:'transfer_date',title:'Date',type:'datetime',sort:true,width:110,hidden:true,align:'left',sort:true},
                       {field:'file_name',title:'File Name',type:'string',width:220,align:'left',sort:true},
                       {field:'modified_date',title:'Update Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'file_size',title:'Size',type:'decimal',width:110,align:'left'},
                       {field:'sftp_ex_dbid',title:'sftp_ex_dbid',type:'guid',width:110,require:true,hidden:true,align:'left'}]);
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
