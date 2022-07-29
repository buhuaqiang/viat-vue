<template>
    <VolBox
            v-model="model"
            :lazy="true"
            title="productPop"
            :height="800"
            :width="1200"
            :padding="15"
    >
        <!-- 设置查询条件 -->
        <div style="padding-bottom: 10px">
            <span style="margin-right: 5px">Entity:</span>
           <!-- <el-input
                    placeholder="Entity"
                    style="width: 180px"
                    v-model="entity"
            />-->
            <el-select
                placeholder="Entity"
                style="width: 180px"
                v-model="entity"
            >
                <el-option
                    v-for="item in entitys"
                    :key="item.key"
                    :label="item.value"
                    :value="item.key"
                >
                </el-option>
            </el-select>
            <span style="margin-right: 5px">&nbsp;&nbsp;&nbsp;&nbsp;ID:</span>
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
                    icon="el-icon-search"
                    @click="search"
            >Inquire</el-button
            >
        </div>

        <!-- vol-table配置的这些属性见VolTable组件api文件 -->
        <vol-table
                ref="prodPop"
                :loadKey="true"
                :columns="columns"
                :pagination="pagination"
                :pagination-hide="false"
                :max-height="650"
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
                >Add Row</el-button
                >
                <el-button size="mini" icon="el-icon-close" @click="model = false"
                >Close</el-button
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
                entity:"",//查询条件字段
                prod_id: "", //查询条件字段
                prod_ename: "", //查询条件字段
                prod_sname: "", //查询条件字段
                path1:"",
                entitys:[{"key":'TWD',"value":'TWD'},{"key":'WAL',"value":'WAL'},{"key":'WTC',"value":'WTC'},{"key":'5U1',"value":'5U1'},{"key":'5U2',"value":'5U2'}],
                url: "api/View_com_prod_pop_query/GetProdPageData",//加载数据的接口
                columns: [
                    {field:'entity',title:'Entity',type:'string',width:90,align:'left',sort:true},
                    //{field:'mpg_id',title:'Mpg',type:'string',width:90,align:'left',sort:true},
                    {field:'global_mpg',title:'Global Mpg',type:'string',width:110,hidden:true,align:'left',sort:true},
                    {field:'localmpg_dbid',title:'localmpg_dbid',type:'guid',width:110,hidden:true,align:'left'},
                    {field:'prod_id',title:'PID',type:'string',width:90,require:true,align:'left'},
                    {field:'prod_ename',title:'E-Name',type:'string',width:130,align:'left'},
                    {field:'prod_cname',title:'prod_cname',type:'string',width:110,hidden:true,align:'left'},
                    {field:'prod_sname',title:'C-Name',type:'string',width:130,align:'left'},
                    {field:'nhi_price',title:'NHI Price',type:'decimal',width:90,align:'left'},
                    {field:'pack_size',title:'Pack Size',type:'decimal',width:90,align:'left'},
                    {field:'prod_type',title:'Prod Type',type:'string',width:90,hidden:true,align:'left'},
                    {field:'globalmpg_dbid',title:'globalmpg_dbid',type:'guid',width:110,hidden:true,align:'left'},
                    {field:'created_date',title:'created_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                    {field:'prod_dbid',title:'prod_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'}],
            };
        },
        methods: {

            openModel(single,flag,returnType) {
                this.single=single;
                this.model = true;
                this.flag = flag;
                this.returnType = returnType
                //打開頁面將查詢條件設為空
                this.entity = ""
                this.prod_ename = ""
                this.prod_id = ""
                this.prod_sname = ""
                this.path1 = this.$route.path;
                //打开弹出框时，加载table数据
                this.$nextTick(() => {
                    this.$refs.prodPop.load();
                });
            },


            addRow() {
                let rows = this.$refs.prodPop.getSelected();
                if(!rows.length){
                    return this.$message.error("Please select row data")
                }
                if (!rows || rows.length == 0) {
                    return this.$message.error("Please select row data");
                }

                if (this.returnType=="onSelect") {//多層級調用
                    this.$emit("onSelect", this.flag, rows)
                }else{
                    this.$emit('parentCall', $parent => {
                        $parent.handleProdSelected(this.flag, rows);//自定義回調方法處理,在調用頁面聲明
                    })
                }

                this.model=false;

            },

            search() {
                //点击搜索
                this.$refs.prodPop.load();
            },
            rowClick({ row, column, event }) {
                //查询界面点击行事件
                this.$refs.prodPop.$refs.table.toggleRowSelection(row);//单击行时选中当前行;
            },
            loadTableBefore(params) {


                if (!params.sort) {//設置排序
                    params.sort = "created_date";
                    //params.sort = "prod_ename,created_date";
                }
                if(this.path1!="/View_prod_entity_period"){//过滤掉状态未上市的产品
                    params.wheres.push({ name: "state", value: "1"});
                }
                if(this.entity){
                    params.wheres.push({ name: "entity", value: this.entity});
                }
                if (this.prod_id) {
                    params.wheres.push({ name: "prod_id", value: this.prod_id , displayType:'like'});
                }
                if (this.prod_ename) {
                    params.wheres.push({ name: "prod_ename", value: this.prod_ename , displayType:'like'});
                }
                if (this.prod_sname) {
                    params.wheres.push({ name: "prod_sname", value: this.prod_sname , displayType:'like'});
                }


                //查询前，设置查询条件
                /*if (this.prod_id) {
                    params.wheres = [{ name: "prod_id", value: this.prod_id }];
                }
                if (this.prod_ename) {
                    params.wheres = [{ name: "prod_ename", value: this.prod_ename }];
                }
                if (this.prod_sname) {
                    params.wheres = [{ name: "prod_sname", value: this.prod_sname }];
                }*/
                return true;
            },

        },
    };
</script>
