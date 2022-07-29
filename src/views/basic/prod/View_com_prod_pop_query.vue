<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/prod/View_com_prod_pop_query.js此处编写
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
    import extend from "@/extension/basic/prod/View_com_prod_pop_query.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'prod_dbid',
                footer: "Foots",
                cnName: 'ProductPop',
                name: 'prod/View_com_prod_pop_query',
                url: "/View_com_prod_pop_query/",
                sortName: "created_date"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'prod_dbid',title:'prod_dbid',type:'guid',width:110,require:true,align:'left',sort:true},
                       {field:'localmpg_dbid',title:'localmpg_dbid',type:'guid',width:110,align:'left'},
                       {field:'prod_id',title:'prod_id',type:'string',width:110,require:true,align:'left'},
                       {field:'prod_ename',title:'prod_ename',type:'string',width:110,align:'left'},
                       {field:'dbid',title:'dbid',type:'int',width:110,require:true,align:'left'},
                       {field:'entity',title:'entity',type:'string',width:110,align:'left'},
                       {field:'prod_cname',title:'prod_cname',type:'string',width:110,align:'left'},
                       {field:'prod_sname',title:'prod_sname',type:'string',width:110,align:'left'},
                       {field:'division',title:'division',type:'string',width:110,align:'left'},
                       {field:'pack_size',title:'pack_size',type:'decimal',width:110,align:'left'},
                       {field:'nhi_price',title:'nhi_price',type:'decimal',width:110,align:'left'},
                       {field:'std_cost',title:'std_cost',type:'decimal',width:110,align:'left'},
                       {field:'unit_stock',title:'unit_stock',type:'string',width:110,align:'left'},
                       {field:'unit_sale',title:'unit_sale',type:'string',width:110,align:'left'},
                       {field:'global_mpg',title:'global_mpg',type:'string',width:110,align:'left'},
                       {field:'nhi_id',title:'nhi_id',type:'string',width:110,align:'left'},
                       {field:'prod_type',title:'prod_type',type:'string',width:110,align:'left'},
                       {field:'inv_type',title:'inv_type',type:'string',width:110,align:'left'},
                       {field:'pack_size_pri',title:'pack_size_pri',type:'decimal',width:110,align:'left'},
                       {field:'new_prod_id',title:'new_prod_id',type:'string',width:110,align:'left'},
                       {field:'is_ctrl_drug',title:'is_ctrl_drug',type:'string',width:110,align:'left'},
                       {field:'license_no',title:'license_no',type:'string',width:110,align:'left'},
                       {field:'license_name',title:'license_name',type:'string',width:110,align:'left'},
                       {field:'stock_market',title:'stock_market',type:'int',width:110,align:'left'},
                       {field:'stock_pfizer',title:'stock_pfizer',type:'int',width:110,align:'left'},
                       {field:'safty_stock',title:'safty_stock',type:'int',width:110,align:'left'},
                       {field:'state',title:'state',type:'string',width:110,align:'left'},
                       {field:'status_sample',title:'status_sample',type:'string',width:110,align:'left'},
                       {field:'status_bid',title:'status_bid',type:'string',width:110,align:'left'},
                       {field:'status_stock_pfizer',title:'status_stock_pfizer',type:'string',width:110,align:'left'},
                       {field:'status_stock_dist',title:'status_stock_dist',type:'string',width:110,align:'left'},
                       {field:'default_dist_id',title:'default_dist_id',type:'string',width:110,align:'left'},
                       {field:'prod_short_name',title:'prod_short_name',type:'string',width:110,align:'left'},
                       {field:'prod_category',title:'prod_category',type:'string',width:110,align:'left'},
                       {field:'prod_form',title:'prod_form',type:'string',width:110,align:'left'},
                       {field:'prod_strength',title:'prod_strength',type:'string',width:110,align:'left'},
                       {field:'prod_packed',title:'prod_packed',type:'string',width:110,align:'left'},
                       {field:'created_user',title:'created_user',type:'int',width:110,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,align:'left'},
                       {field:'created_client',title:'created_client',type:'int',width:110,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,align:'left'},
                       {field:'created_date',title:'created_date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_user',title:'modified_user',type:'int',width:110,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,align:'left'},
                       {field:'modified_client',title:'modified_client',type:'int',width:110,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,align:'left'},
                       {field:'modified_date',title:'modified_date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'globalmpg_dbid2',title:'globalmpg_dbid2',type:'guid',width:110,align:'left'},
                       {field:'lmpg_mpg_id',title:'lmpg_mpg_id',type:'string',width:110,align:'left'},
                        {field:'category',title:'category',type:'string',width:110,align:'left'}]);
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
