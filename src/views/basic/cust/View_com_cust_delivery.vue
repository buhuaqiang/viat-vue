<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/cust/View_com_cust_delivery.js此处编写
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
    import extend from "@/extension/basic/cust/View_com_cust_delivery.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'delivery_dbid',
                footer: "Foots",
                cnName: '客戶送貨地址信息',
                name: 'cust/View_com_cust_delivery',
                url: "/View_com_cust_delivery/",
                sortName: "seq_no"
            });
            const editFormFields = ref({"delivery_name":"","city_name":"","zip_id":"","delivery_addr":"","delivery_contact":"","delivery_tel_no":"","seq_no":""});
            const editFormOptions = ref([[{"title":"","field":"delivery_name"}],
                              [{"dataKey":"viat_city","data":[],"title":"","field":"city_name","type":"select"},
                               {"dataKey":"viat_city_zone","data":[],"title":"","field":"zip_id","type":"select"}],
                              [{"title":"","field":"delivery_addr"}],
                              [{"title":"","field":"delivery_contact"}],
                              [{"title":"","field":"delivery_tel_no"}],
                              [{"title":"","field":"seq_no","type":"number"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'delivery_dbid',title:'delivery_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'dbid',title:'dbid',type:'decimal',width:110,hidden:true,require:true,align:'left'},
                       {field:'entity',title:'entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'division',title:'division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'cust_dbid',title:'cust_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'seq_no',title:'seq_no',type:'decimal',width:110,align:'left',sort:true},
                       {field:'city_name',title:'city_name',type:'string',bind:{ key:'viat_city',data:[]},width:110,align:'left'},
                       {field:'zip_id',title:'zip_id',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,align:'left'},
                       {field:'delivery_name',title:'delivery_name',type:'string',width:120,align:'left'},
                       {field:'delivery_contact',title:'delivery_contact',type:'string',width:120,align:'left'},
                       {field:'delivery_tel_no',title:'delivery_tel_no',type:'string',width:110,align:'left'},
                       {field:'delivery_addr',title:'delivery_addr',type:'string',width:180,align:'left'},
                       {field:'created_user',title:'created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'modified_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'zip_name',title:'zip_name',type:'string',width:110,hidden:true,align:'left'}]);
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
