<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/prod/View_com_prod.js此处编写
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
    import extend from "@/extension/basic/prod/View_com_prod.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'prod_dbid',
                footer: "Foots",
                cnName: 'Product',
                name: 'prod/View_com_prod',
                url: "/View_com_prod/",
                sortName: "created_date"
            });
            const editFormFields = ref({"entity":"","prod_id":"","prod_sname":"","prod_ename":"","unit_stock":"","unit_sale":"","lmpg_mpg_id":"","global_mpg":"","nhi_id":"","default_dist_id":"","pack_size":"","pack_size_pri":"","nhi_price":"","division":"","prod_short_name":"","license_no":"","license_name":"","prod_form":"","prod_strength":"","is_ctrl_drug":"","prod_packed":"","safty_stock":"","state":"","status_sample":"","status_bid":"","status_stock_pfizer":"","status_stock_dist":""});
            const editFormOptions = ref([[{"dataKey":"entity","data":[],"title":"Entity","field":"entity","disabled":true},
                {"title":"Item Code","field":"prod_id","disabled":true}],
                [{"title":"Item Description(Chinese)","field":"prod_sname","disabled":true},
                    {"title":"Item Description(English)","field":"prod_ename","disabled":true}],
                [{"title":"Unit Of Stock","field":"unit_stock","disabled":true},
                    {"title":"Unit Of Sale","field":"unit_sale","disabled":true}],
                [{"dataKey":"finance_mpg","data":[],"title":"Finance MPG","field":"global_mpg","disabled":true},
                    {"dataKey":"sales_mpg","data":[],"title":"Sales MPG","field":"lmpg_mpg_id","disabled":true}],
                [{"title":"NHI Product Code","field":"nhi_id","disabled":true},
                    {"dataKey":"distributor","data":[],"title":"Default Distributor","field":"default_dist_id","type":"select"}],
                [{"title":"NHI Fact/Dis Percent","field":"pack_size","disabled":true,"type":"decimal"},
                    {"title":"Pack Size(Pricing)","field":"pack_size_pri","disabled":true,"type":"decimal"}],
                [{"title":"NHI Price","field":"nhi_price","disabled":true,"type":"decimal"}],
                [{"dataKey":"division","data":[],"title":"Division","field":"division","disabled":true},
                    {"title":"Product Short Name","field":"prod_short_name"}],
                [{"title":"License Product Name","field":"license_name"},
                    {"title":"License Product No","field":"license_no"}],
                [{"title":"Form","field":"prod_form"},
                    {"title":"Strength","field":"prod_strength"}],
                [{"title":"Packed","field":"prod_packed"},
                    {"dataKey":"SunLocalPerform","data":[],"title":"Is Control Drug","field":"is_ctrl_drug","type":"select"}],
                [{"title":"Sample Safty Stock","field":"safty_stock","type":"number"},
                    {"dataKey":"prod_status","data":[],"title":"Status","field":"state","type":"select"}],
                [{"dataKey":"SunLocalPerform","data":[],"title":"Samples Prohibited","field":"status_sample","type":"select"},
                    {"dataKey":"SunLocalPerform","data":[],"title":"Bids Prohibited","field":"status_bid","type":"select"}],
                [{"dataKey":"SunLocalPerform","data":[],"title":"No Stock(Pfizer)","field":"status_stock_pfizer","disabled":true,"type":"radio"},
                    {"dataKey":"SunLocalPerform","data":[],"title":"No Stock(Dist)","field":"status_stock_dist","type":"radio"}]]);
            const searchFormFields = ref({"entity":"","division":"","lmpg_mpg_id":"","global_mpg":"","prod_id":"","prod_sname":"","prod_ename":"","inv_type":"","state":""});
            //const searchFormOptions = ref([[{"dataKey":"entity","data":[],"title":"Entity","field":"entity","type":"select"},{"dataKey":"division","data":[],"title":"Division","field":"division","type":"select"}],[{"title":"Item Description(Chinese)","field":"prod_sname","type":"like"},{"title":"Item Description(English)","field":"prod_ename","type":"like"}],[{"title":"Item Code","field":"prod_id","type":"like"},{"dataKey":"prod_status","data":[],"title":"Status","field":"state","type":"select"}],[{"dataKey":"sales_mpg","data":[],"title":"Sales MPG","field":"lmpg_mpg_id","type":"select"},{"dataKey":"finance_mpg","data":[],"title":"Finance MPG","field":"global_mpg","type":"select"}],[{"dataKey":"inv_type","data":[],"title":"Inv Type","field":"inv_type","type":"select"}]]);
            const searchFormOptions = ref([[{"dataKey":"entity","data":[],"title":"Entity","field":"entity","type":"select"},{"dataKey":"division","data":[],"title":"Division","field":"division","type":"select"},{"title":"Item Description(Chinese)","field":"prod_sname","type":"like"},{"title":"Item Description(English)","field":"prod_ename","type":"like"}],[{"title":"Item Code","field":"prod_id","type":"like"},{"dataKey":"prod_status","data":[],"title":"Status","field":"state","type":"select"},{"dataKey":"sales_mpg","data":[],"title":"Sales MPG","field":"lmpg_mpg_id","type":"select"},{"dataKey":"finance_mpg","data":[],"title":"Finance MPG","field":"global_mpg","type":"select"}],[{"dataKey":"inv_type","data":[],"title":"Inv Type","field":"inv_type","type":"select"}]]);
            const columns = ref([{field:'dbid',title:'列名dbid',type:'int',width:110,hidden:true,require:true,align:'left'},
                       {field:'entity',title:'Entity',type:'string',bind:{ key:'entity',data:[]},link:true,width:80,readonly:true,align:'left',sort:true},
                       {field:'division',title:'Division',type:'string',bind:{ key:'division',data:[]},width:80,readonly:true,align:'left'},
                       {field:'lmpg_mpg_id',title:'Sales MPG',type:'string',bind:{ key:'sales_mpg',data:[]},width:80,readonly:true,require:true,align:'left'},
                       {field:'global_mpg',title:'Global MPG',type:'string',bind:{ key:'finance_mpg',data:[]},width:80,readonly:true,align:'left'},
                       {field:'prod_id',title:'Item Code',type:'string',width:90,readonly:true,require:true,align:'left'},
                       {field:'prod_sname',title:'Item Description(Chinese)',type:'string',width:130,readonly:true,align:'left'},
                       {field:'prod_ename',title:'Item Description(English)',type:'string',width:130,readonly:true,align:'left'},
                       {field:'prod_cname',title:'列名prod_cname',type:'string',width:130,hidden:true,align:'left'},
                       {field:'std_cost',title:'列名std_cost',type:'decimal',width:110,hidden:true,align:'left'},
                       {field:'unit_stock',title:'Unit Of Stock',type:'string',width:110,hidden:true,readonly:true,align:'left'},
                       {field:'unit_sale',title:'Unit Of Sale',type:'string',width:110,hidden:true,readonly:true,align:'left'},
                       {field:'nhi_id',title:'NHI Product Code',type:'string',width:110,hidden:true,readonly:true,align:'left'},
                       {field:'prod_type',title:'列名prod_type',type:'string',width:110,hidden:true,align:'left'},
                       {field:'inv_type',title:'Inv Type',type:'string',bind:{ key:'inv_type',data:[]},width:110,hidden:true,align:'left'},
                       {field:'pack_size',title:'Pack Size',type:'decimal',width:90,readonly:true,hidden:true,align:'left'},
                       {field:'pack_size_pri',title:'Pack Size(Pricing)',type:'decimal',width:110,hidden:true,readonly:true,align:'left'},
                       {field:'new_prod_id',title:'列名new_prod_id',type:'string',width:110,hidden:true,align:'left'},
                       {field:'is_ctrl_drug',title:'Is Control Drug',type:'string',bind:{ key:'SunLocalPerform',data:[]},width:110,hidden:true,align:'left'},
                       {field:'nhi_price',title:'NHI Price',type:'decimal',width:90,readonly:true,hidden:true,align:'left'},
                       {field:'license_no',title:'License Product No',type:'string',width:110,hidden:true,align:'left'},
                       {field:'license_name',title:'License Product Name',type:'string',width:110,hidden:true,align:'left'},
                       {field:'stock_market',title:'列名stock_market',type:'int',width:110,hidden:true,align:'left'},
                       {field:'stock_pfizer',title:'列名stock_pfizer',type:'int',width:110,hidden:true,align:'left'},
                       {field:'safty_stock',title:'Sample Safty Stock',type:'int',width:110,hidden:true,align:'left'},
                       {field:'state',title:'Status',type:'string',bind:{ key:'prod_status',data:[]},width:80,align:'left'},
                       {field:'status_sample',title:'Samples Prohibited',type:'string',bind:{ key:'SunLocalPerform',data:[]},width:110,align:'left'},
                       {field:'status_bid',title:'Bids Prohibited',type:'string',bind:{ key:'SunLocalPerform',data:[]},width:80,align:'left'},
                       {field:'status_stock_pfizer',title:'No Stock(Pfizer)',type:'string',bind:{ key:'SunLocalPerform',data:[]},width:110,hidden:true,readonly:true,align:'left'},
                       {field:'status_stock_dist',title:'No Stock(Dist)',type:'string',bind:{ key:'SunLocalPerform',data:[]},width:110,hidden:true,align:'left'},
                       {field:'default_dist_id',title:'Default Distributor',type:'string',bind:{ key:'distributor',data:[]},width:110,hidden:true,align:'left'},
                       {field:'prod_short_name',title:'Product Short Name',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_category',title:'列名prod_category',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_form',title:'Form',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_strength',title:'Strength',type:'string',width:110,hidden:true,align:'left'},
                       {field:'prod_packed',title:'Packed',type:'string',width:110,hidden:true,align:'left'},
                       {field:'lmpg_dbid',title:'列名lmpg_dbid',type:'int',width:110,hidden:true,require:true,align:'left'},
                       {field:'lmpg_entity',title:'列名lmpg_entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'localmpg_dbid',title:'localmpgid',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'列名modified_client',type:'int',width:80,hidden:true,align:'left'},
                       {field:'modified_user',title:'列名modified_user',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_date',title:'列名created_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'created_client',title:'列名created_client',type:'int',width:80,hidden:true,align:'left'},
                       {field:'created_user',title:'列名created_user',type:'int',width:80,hidden:true,align:'left'},
                       {field:'modified_date',title:'列名modified_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                       {field:'prod_dbid',title:'列名prod_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'}]);
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
