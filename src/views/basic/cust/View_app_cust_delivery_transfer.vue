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
                cnName: 'Import Customer Maintain Detail',
                name: 'cust/View_app_cust_delivery_transfer',
                url: "/View_app_cust_delivery_transfer/",
                sortName: "seq_no"
            });
            const editFormFields = ref({"delivery_addr":"","delivery_zip_id":"","delivery_tel_no":"","delivery_contact":"","delivery_name":"","seq_no":""});
            const editFormOptions = ref([[{"title":"Delivery Address","field":"delivery_addr"}],
                              [{"title":"Zip","field":"delivery_zip_id"}],
                              [{"title":"Telephone","field":"delivery_tel_no"}],
                              [{"title":"Delivery Contact","field":"delivery_contact"}],
                              [{"title":"Delivery Name","field":"delivery_name"}],
                              [{"title":"SeqNo","field":"seq_no","type":"decimal"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'seq_no',title:'SeqNo',type:'decimal',width:110,align:'left',sort:true},
                       {field:'delivery_name',title:'Delivery Name',type:'string',width:120,align:'left'},
                       {field:'delivery_zip_id',title:'Zip',type:'string',width:110,align:'left'},
                       {field:'delivery_addr',title:'Delivery Address',type:'string',width:180,align:'left'},
                       {field:'delivery_contact',title:'Delivery Contact',type:'string',width:120,align:'left'},
                       {field:'delivery_tel_no',title:'Telephone',type:'string',width:110,align:'left'},
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
