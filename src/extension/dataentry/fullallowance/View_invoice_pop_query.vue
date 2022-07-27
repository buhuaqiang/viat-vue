<template>
    <VolBox
            v-model="model"
            :lazy="true"
            title="Pick Invoice"
            :height="450"
            :width="1000"
            :padding="15"
    >
        <!-- 设置查询条件 -->
        <div style="padding-bottom: 10px">
            <span style="margin-right: 5px">Invoice Nos:</span>
            <el-input
                    placeholder="ID"
                    style="width: 180px"
                    v-model="invoice_no"
            />
            <span style="margin-right: 5px">&nbsp;&nbsp;&nbsp;&nbsp;Customer Ids:</span>
            <el-input
                    placeholder="cust_id"
                    style="width: 180px"
                    v-model="cust_id"
            />
            <span style="margin-right: 5px">&nbsp;&nbsp;&nbsp;&nbsp; Product Ids:</span>
            <el-input
                    placeholder="prod_id"
                    style="width: 180px"
                    v-model="prod_id"
            />
            <el-button
                    type="primary"
                    style="margin-left:10px"
                    size="medium"
                    icon="el-icon-zoom-out"
                    @click="search"
            >搜索</el-button
            >
        </div>

        <!-- vol-table配置的这些属性见VolTable组件api文件 -->
        <vol-table
                ref="invoicePop"
                :loadKey="true"
                :columns="columns"
                :pagination="pagination"
                :pagination-hide="false"
                :max-height="380"
                :url="url"
                :index="true"
                :single=single
                :defaultLoadPage="defaultLoadPage"
                @loadBefore="loadTableBefore"
                @loadAfter="loadTableAfter"
                @rowClick = "rowClick"
        ></vol-table>
        <!-- 设置弹出框的操作按钮 -->
        <template #footer>
            <div>
                <el-button
                        size="mini"
                        type="primary"
                        icon="el-icon-plus"
                        @click="addRow()"
                >确定</el-button
                >
                <el-button size="mini" icon="el-icon-close" @click="model = false"
                >关闭</el-button
                >
            </div>
        </template>
    </VolBox>
</template>
<script>
    import VolBox from "@/components/basic/VolBox.vue";
    import VolTable from "@/components/basic/VolTable.vue";
    export default {
        components: {
            VolBox: VolBox,
            VolTable: VolTable,
        },
        data() {
            return {
                model: false,
                single: true,
                returnType:"",
                flag:"",
                defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
                invoice_no: "", //查询条件字段
                cust_id: "", //查询条件字段
                prod_id: "", //查询条件字段

                url: "api/View_invoice_pop/GetInvoicePageData",//加载数据的接口
                columns: [
                    {field:'invoice_no',title:'Invoice No',type:'string',width:110,align:'left'},
                    {field:'cust_id',title:'Customer Id',type:'string',width:110,align:'left'},
                    {field:'cust_name1',title:'Customer Name',type:'string',width:120,align:'left'},
                    {field:'prod_id',title:'Product Id',type:'string',width:110,align:'left'},
                    {field:'prod_ename',title:'Product Name',type:'string',width:110,align:'left'},
                    {field:'trans_date',title:'Invoice Date',type:'datetime',width:110,align:'left',sort:true},
                    {field:'prod_dbid',title:'列名prod_dbid',type:'guid',width:110,align:'left',hidden:true},
                    {field:'cust_dbid',title:'列名cust_dbid',type:'guid',width:110,align:'left',hidden:true},
                   ],
            };
        },
        methods: {

            openModel(single,flag,returnType) {
                this.single=single;
                this.model = true;
                this.flag = flag;
                this.returnType = returnType
                //打开弹出框时，加载table数据
                this.$nextTick(() => {
                    this.$refs.invoicePop.load();
                });
            },


            addRow() {
                let rows = this.$refs.invoicePop.getSelected();
                if(!rows.length){
                    return this.$message.error("請選擇數據")
                }
                if (!rows || rows.length == 0) {
                    return this.$message.error("請選擇行數據");
                }

                if (this.returnType=="onSelect") {//多層級調用
                    this.$emit("onSelect", this.flag, rows)
                }else{
                    this.$emit('parentCall', $parent => {
                        $parent.handleInvoiceSelected(this.flag, rows);//自定義回調方法處理,在調用頁面聲明
                    })
                }

                this.model=false;

            },

            search() {
                //点击搜索
                this.$refs.invoicePop.load();
            },
            rowClick({ row, column, event }) {
                //查询界面点击行事件
                this.$refs.invoicePop.$refs.table.toggleRowSelection(row);//单击行时选中当前行;
            },
            loadTableBefore(params) {
                //查询前，设置查询条件
                if (this.invoice_no) {
                    params.wheres = [{ name: "invoice_no", value: this.invoice_no }];
                }
                if (this.cust_id) {
                    params.wheres = [{ name: "cust_id", value: this.cust_id }];
                }
                if (this.prod_id) {
                    params.wheres = [{ name: "prod_id", value: this.prod_id }];
                }
                return true;
            },

        },
    };
</script>
