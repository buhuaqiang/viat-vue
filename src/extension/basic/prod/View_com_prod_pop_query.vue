<template>
    <VolBox
            v-model="model"
            :lazy="true"
            title="产品pop框"
            :height="450"
            :width="1000"
            :padding="15"
    >
        <!-- 设置查询条件 -->
        <div style="padding-bottom: 10px">
            <span style="margin-right: 5px">ID:</span>
            <el-input
                    placeholder="ID"
                    style="width: 180px"
                    v-model="prod_id"
            />
            <span style="margin-right: 5px">&nbsp;&nbsp;&nbsp;&nbsp;EnglishName:</span>
            <el-input
                    placeholder="EnglishName"
                    style="width: 180px"
                    v-model="prod_ename"
            />
            <span style="margin-right: 5px">&nbsp;&nbsp;&nbsp;&nbsp; ChineseName:</span>
            <el-input
                    placeholder="ChineseName"
                    style="width: 180px"
                    v-model="prod_sname"
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
                ref="prodPop"
                :loadKey="true"
                :columns="columns"
                :pagination="pagination"
                :pagination-hide="false"
                :max-height="380"
                :url="url"
                :index="true"
                :single="true"
                :defaultLoadPage="defaultLoadPage"
                @loadBefore="loadTableBefore"
                @loadAfter="loadTableAfter"
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
                defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
                prod_id: "", //查询条件字段
                prod_ename: "", //查询条件字段
                prod_sname: "", //查询条件字段

                url: "api/View_com_prod_pop_query/getPageData",//加载数据的接口
                columns: [
                    {field:'mpg_id',title:'Mpg',type:'string',width:90,align:'left',sort:true},
                    {field:'localmpg_dbid',title:'localmpg_dbid',type:'guid',width:110,hidden:true,align:'left'},
                    {field:'prod_id',title:'PID',type:'string',width:90,require:true,align:'left'},
                    {field:'prod_ename',title:'E-Name',type:'string',width:130,align:'left'},
                    {field:'prod_cname',title:'prod_cname',type:'string',width:110,hidden:true,align:'left'},
                    {field:'prod_sname',title:'C-Name',type:'string',width:130,align:'left'},
                    {field:'nhi_price',title:'NHI Price',type:'decimal',width:90,align:'left'},
                    {field:'pack_size',title:'Pack Size',type:'decimal',width:90,align:'left'},
                    {field:'globalmpg_dbid',title:'globalmpg_dbid',type:'guid',width:110,hidden:true,align:'left'},
                    {field:'created_date1',title:'created_date1',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                    {field:'prod_dbid',title:'prod_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'}],
            };
        },
        methods: {
            open() {
                this.model = true;

                //打开弹出框时，加载table数据
                this.$nextTick(() => {
                    this.$refs.prodPop.load();
                });
            },

            addRow() {
                let selectrow = this.$refs.prod.$refs.grid.getSelectRows();
                if(!selectrow.length){
                    return this.$message.error("请选择数据")
                }
                //将选取的数据赋值到父页面
                this.$emit('parentCall', $parent => {
                    $parent.editFormFields.prod_sname = selectrow[0].prod_sname;
                    this.model=false;
                })

            },
            search() {
                //点击搜索
                this.$refs.prodPop.load();
            },
            loadTableBefore(params) {
                //查询前，设置查询条件
                if (this.prod_id) {
                    params.wheres = [{ name: "prod_id", value: this.prod_id }];
                }
                if (this.prod_ename) {
                    params.wheres = [{ name: "prod_ename", value: this.prod_ename }];
                }
                if (this.prod_sname) {
                    params.wheres = [{ name: "prod_sname", value: this.prod_sname }];
                }
                return true;
            },

        },
    };
</script>
