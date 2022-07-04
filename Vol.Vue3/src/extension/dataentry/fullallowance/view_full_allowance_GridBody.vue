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

            openPriceGroupModelBody(fieldName){
                this.$refs.PriceGroupModelBody.openDemo(fieldName,"s");
                this.$refs.PriceGroupModelBody.signal = true;
            },
            CustomersModelBody(fieldName){
                this.$refs.CustomersModelBody.openDemo(fieldName,"s");
                this.$refs.CustomersModelBody.signal = true;
            },
            prodModelBody(fieldName){
                this.$refs.prodModelBody.openDemo(fieldName,"s");
                this.$refs.prodModelBody.signal = true;
            },
            onSelectByPriceGroup(fieldName,rows){
                this.$emit("parentCall", ($parent) => {
                    //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)
                    let row = rows[0];
                    $parent.searchFormFields[fieldName+'name'] = row.group_id + " " + row.group_name;
                    $parent.searchFormFields[fieldName] = row.pricegroup_dbid;
                });
            },
            onSelectByCustomers(fieldName,rows){
                this.$emit("parentCall", ($parent) => {
                    //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)
                    let row = rows[0];
                    $parent.searchFormFields[fieldName+'name'] = row.cust_id + " " + row.cust_name;
                    $parent.searchFormFields[fieldName] = row.cust_dbid;
                });
            },
            onSelectByProdPop(fieldName,rows){
                this.$emit("parentCall", ($parent) => {
                    //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)
                    let row = rows[0];
                    $parent.searchFormFields[fieldName+'name'] = row.prod_id + " " + row.prod_ename;
                    $parent.searchFormFields[fieldName] = row.prod_dbid;
                });
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
