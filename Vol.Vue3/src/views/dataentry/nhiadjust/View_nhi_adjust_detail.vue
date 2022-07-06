<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/nhiadjust/View_nhi_adjust_detail.js此处编写
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
    import extend from "@/extension/dataentry/nhiadjust/View_nhi_adjust_detail.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'nhiadjust_dbid',
                footer: "Foots",
                cnName: '健保價調整明細',
                name: 'nhiadjust/View_nhi_adjust_detail',
                url: "/View_nhi_adjust_detail/",
                sortName: "created_date"
            });
            const editFormFields = ref({"prod_id":"","nhi_id":"","old_nhi_price":"","new_nhi_price":"","prod_dbid":"","nhiadjustm_dbid":""});
            const editFormOptions = ref([[{"title":"Product_id","required":true,"field":"prod_id","type":"text"},
                               {"title":"NHI Code","field":"nhi_id","type":"text"}],
                              [{"title":"Old NHI Price","field":"old_nhi_price","type":"text"},
                               {"title":"New NHI Price","field":"new_nhi_price","type":"text"}],
                              [{"title":"Product","field":"prod_dbid","type":"text"}],
                              [{"title":"m主鍵","field":"nhiadjustm_dbid","type":"text"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'prod_id',title:'Product_id',type:'string',width:110,require:true,align:'left',sort:true},
                       {field:'prod_ename',title:'prod_ename',type:'string',width:110,align:'left'},
                       {field:'nhi_id',title:'NHI Code',type:'string',width:110,align:'left'},
                       {field:'old_nhi_price',title:'Old NHI Price',type:'decimal',width:110,align:'left'},
                       {field:'new_nhi_price',title:'New NHI Price',type:'decimal',width:110,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:150,align:'left',sort:true},
                       {field:'nhiadjust_dbid',title:'nhiadjust_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'prod_dbid',title:'Product',type:'guid',width:110,align:'left'},
                       {field:'nhiadjustm_dbid',title:'m主鍵',type:'guid',width:110,align:'left'}]);
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
