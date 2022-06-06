<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/delivery/Viat_com_cust_delivery.js此处编写
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
    import extend from "@/extension/basic/delivery/Viat_com_cust_delivery.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'delivery_dbid',
                footer: "Foots",
                cnName: '客戶送貨資訊',
                name: 'delivery/Viat_com_cust_delivery',
                url: "/Viat_com_cust_delivery/",
                sortName: "created_date"
            });
            const editFormFields = ref({"delivery_name":"","zip_id":"","delivery_addr":"","delivery_contact":"","delivery_tel_no":"","seq_no":""});
            const editFormOptions = ref([[{"title":"送貨抬頭","field":"delivery_name"}],
                              [{"dataKey":"viat_city_zone","data":[],"title":"郵區代碼","field":"zip_id","type":"select"}],
                              [{"title":"送貨地址","field":"delivery_addr"}],
                              [{"title":"聯絡人","field":"delivery_contact"}],
                              [{"title":"聯絡人電話","field":"delivery_tel_no"}],
                              [{"title":"序號","field":"seq_no","type":"number"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'delivery_dbid',title:'ID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'cust_dbid',title:'客戶代碼',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'zip_id',title:'郵區代碼',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,align:'left',sort:true},
                       {field:'seq_no',title:'序號',type:'decimal',width:110,align:'left'},
                       {field:'delivery_name',title:'送貨抬頭',type:'string',width:120,align:'left'},
                       {field:'delivery_contact',title:'聯絡人',type:'string',width:120,align:'left'},
                       {field:'delivery_tel_no',title:'聯絡人電話',type:'string',width:110,align:'left'},
                       {field:'delivery_addr',title:'送貨地址',type:'string',width:180,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:110,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:110,align:'left',sort:true}]);
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
