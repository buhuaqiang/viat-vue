<template>
    <customers @onSelect="onSelectByCustomers" ref="CustomersModelBody"></customers>
    <price-group @onSelect="onSelectByPriceGroup" ref="PriceGroupModelBody"></price-group>
    <prod-pop @onSelect="onSelectByProdPop" ref="prodModelBody"></prod-pop>
</template>
<script>
    import VolBox from "@/components/basic/VolBox.vue";
    import VolTable from "@/components/basic/VolTable.vue";
    import customers from "@/extension/basic/cust/Viat_com_custModelBody"
    import priceGroup from "@/extension/price/price/PriceGroupModelBody"
    import prodPop from "@/extension/basic/prod/View_com_prod_pop_query.vue"
    export default {
        components: {
            VolBox: VolBox,
            VolTable: VolTable,
            customers: customers,
            priceGroup: priceGroup,
            prodPop: prodPop,
        },
        data() {
            return {
                single:true,
                model: false,
                defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
                fieldName:"", // 自定義邏輯字段
                formType:"",
            };
        },
        methods: {

            openPriceGroupModelBody(searchType){
                this.$refs.PriceGroupModelBody.openModel(true,"pricegroup_dbid","onSelect");
                this.$refs.PriceGroupModelBody.signal = true;
            },
            CustomersModelBody(searchType){
                this.$refs.CustomersModelBody.openModel(true,"cust_dbid","onSelect");
                this.$refs.CustomersModelBody.signal = true;
            },
            puProdModelBody(fieldName){
                this.$refs.prodModelBody.openModel(true,"p_prod_dbid","onSelect");
                this.$refs.prodModelBody.signal = true;
            },
            fuProdModelBody(fieldName){
                this.$refs.prodModelBody.openModel(true,"f_prod_dbid","onSelect");
                this.$refs.prodModelBody.signal = true;
            },
            onSelectByPriceGroup(fieldName,rows){
                this.$emit("parentCall", ($parent) => {
                    //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)
                    // $parent.handlePriceGroupSelected("searchPriceGroup",rows);
                    $parent.searchFormFields["pricegroup_dbid"] = rows[0].pricegroup_dbid;
                    $parent.searchFormFields["group_id"] =rows[0].group_id;
                    $parent.pickPriceGroupName=rows[0].group_name;
                });
            },
            onSelectByCustomers(fieldName,rows){
                this.$emit("parentCall", ($parent) => {
                    //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)
                    // $parent.handlePriceGroupSelected("searchPriceGroup",rows);
                    $parent.searchFormFields["cust_dbid"] = rows[0].cust_dbid;
                    $parent.searchFormFields["cust_id"] =rows[0].cust_id;
                    $parent.pickCustomerName=rows[0].cust_name;
                });
            },
            onSelectByProdPop(fieldName,rows){
                if(fieldName=='p_prod_dbid'){
                    this.$emit("parentCall", ($parent) => {
                        //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的
                        $parent.searchFormFields["p_prod_dbid"] = rows[0].prod_dbid;
                        $parent.searchFormFields["p_prod_id"] =rows[0].prod_id;
                        $parent.pickPuProdName=rows[0].prod_ename;
                    });
                }
                if(fieldName=='f_prod_dbid'){
                    this.$emit("parentCall", ($parent) => {
                        $parent.searchFormFields["f_prod_dbid"] = rows[0].prod_dbid;
                        $parent.searchFormFields["f_prod_id"] =rows[0].prod_id;
                        $parent.pickFuProdName=rows[0].prod_ename;
                    });
                }

            },
            clearData(fieldName,pageType){
                this.$emit("parentCall", ($parent) => {
                    //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)
                    $parent.searchFormFields[fieldName] = '';
                    $parent.searchFormFields[fieldName+'name'] = '';
                });
            },

            search() {
            },
            rowClick({ row, column, event }) {
                //查询界面点击行事件
                //this.$refs.prodPop.$refs.table.toggleRowSelection(row);//单击行时选中当前行;
            },
            loadTableBefore(params) {

            },

        },
    };
</script>
