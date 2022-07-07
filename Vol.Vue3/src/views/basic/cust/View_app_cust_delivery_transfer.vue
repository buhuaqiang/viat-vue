<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/cust/View_app_cust_delivery_transfer.js此处编写
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
    import extend from "@/extension/basic/cust/View_app_cust_delivery_transfer.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'custdeltransfer_dbid',
                footer: "Foots",
                cnName: '客戶運送轉移',
                name: 'cust/View_app_cust_delivery_transfer',
                url: "/View_app_cust_delivery_transfer/",
                sortName: "seq_no"
            });
            const editFormFields = ref({"delivery_addr":"","delivery_zip_id":"","delivery_tel_no":"","delivery_contact":"","delivery_name":"","seq_no":""});
            const editFormOptions = ref([[{"title":"","field":"delivery_addr"}],
                              [{"dataKey":"viat_city_zone","data":[],"title":"","field":"delivery_zip_id","type":"select"}],
                              [{"title":"","field":"delivery_tel_no"}],
                              [{"title":"","field":"delivery_contact"}],
                              [{"title":"","field":"delivery_name"}],
                              [{"title":"","field":"seq_no","type":"decimal"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'seq_no',title:'seq_no',type:'decimal',width:110,align:'left',sort:true},
                       {field:'delivery_name',title:'delivery_name',type:'string',width:120,align:'left'},
                       {field:'delivery_zip_id',title:'delivery_zip_id',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,align:'left'},
                       {field:'delivery_addr',title:'delivery_addr',type:'string',width:180,align:'left'},
                       {field:'delivery_contact',title:'delivery_contact',type:'string',width:120,align:'left'},
                       {field:'delivery_tel_no',title:'delivery_tel_no',type:'string',width:110,align:'left'},
                       {field:'custdeltransfer_dbid',title:'custdeltransfer_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'dbid',title:'dbid',type:'int',width:110,hidden:true,require:true,align:'left'},
                       {field:'entity',title:'entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'emp_id',title:'emp_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'bid_no',title:'bid_no',type:'string',width:110,hidden:true,align:'left'},
                       {field:'division',title:'division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'cust_id',title:'cust_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_user',title:'created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'modified_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'custtransfer_dbid',title:'custtransfer_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'}]);
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
