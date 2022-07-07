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
                cnName: 'Delivery Address',
                name: 'cust/View_com_cust_delivery',
                url: "/View_com_cust_delivery/",
                sortName: "seq_no"
            });
            const editFormFields = ref({"delivery_name":"","city_name":"","zip_id":"","delivery_addr":"","delivery_contact":"","delivery_tel_no":"","seq_no":""});
            const editFormOptions = ref([[{"title":"Delivery Name","field":"delivery_name"}],
                              [{"dataKey":"viat_city","data":[],"title":"City Name","field":"city_name","type":"select"},
                               {"dataKey":"viat_city_zone","data":[],"title":"Zip","field":"zip_id","type":"select"}],
                              [{"title":"Delivery Address","field":"delivery_addr"}],
                              [{"title":"Contact","field":"delivery_contact"}],
                              [{"title":"Telephone","field":"delivery_tel_no"}],
                              [{"title":"Seq NO","field":"seq_no","type":"number"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'delivery_dbid',title:'delivery_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'dbid',title:'dbid',type:'decimal',width:110,hidden:true,require:true,align:'left'},
                       {field:'entity',title:'entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'division',title:'division',type:'string',width:110,hidden:true,align:'left'},
                       {field:'cust_dbid',title:'cust_dbid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'seq_no',title:'Seq NO',type:'decimal',width:110,align:'left',sort:true},
                       {field:'city_name',title:'City Name',type:'string',bind:{ key:'viat_city',data:[]},width:110,align:'left'},
                       {field:'zip_id',title:'Zip',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,align:'left'},
                       {field:'delivery_name',title:'Delivery Name',type:'string',width:120,align:'left'},
                       {field:'delivery_contact',title:'Contact',type:'string',width:120,align:'left'},
                       {field:'delivery_tel_no',title:'Telephone',type:'string',width:110,align:'left'},
                       {field:'delivery_addr',title:'Delivery Address',type:'string',width:180,align:'left'},
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
