<template>
    <VolBox
            v-model="model"
            :lazy="true"
            title="代理选择"
            :height="400"
            :width="1000"
            :padding="15"
    >
        <!-- 设置查询条件 -->
        <div style="padding-bottom: 10px" hidden="true">
            <span style="margin-right: 5px">UserName:</span>
            <el-input
                    placeholder="UserName"
                    style="width: 180px"
                    v-model="user_name2"
            />
            <span style="margin-right: 5px">&nbsp;&nbsp;&nbsp;&nbsp;userTrueName:</span>
            <el-input
                    placeholder="userTrueName"
                    style="width: 180px"
                    v-model="UserTrueName"
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
                ref="deputyInfoSelect"
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
        ></vol-table>
        <!-- 设置弹出框的操作按钮 -->
        <template #footer>
            <div>
                <el-button
                        size="mini"
                        type="primary"
                        icon="el-icon-plus"
                        @click="selectRowData()"
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
    import store from "../../../store";
    export default {
        name: "deputyInfoSelectPop",
        components: {
            VolBox: VolBox,
            VolTable: VolTable,
        },
        methods: {
            open(fieldName) {
                this.model = true;
                this.fieldName = fieldName
                //打开弹出框时，加载table数据
                this.$nextTick(() => {
                    this.$refs.deputyInfoSelect.load();
                    return "3";
                });
            },
            selectRowData() {
                let selectrow = this.$refs.deputyInfoSelect.getSelected();
                if (!selectrow.length) {
                    return this.$message.error("请选择数据")
                }
                    this.$parent.SelectedUserNew(selectrow[0].user_name2);
                this.model = false;
            },
            search() {
                //点击搜索
                this.$refs.deputyInfoSelect.load();
            },
            loadTableBefore(params) {
                //查询前，设置查询条件
                if (this.user_name2) {
                    params.wheres = [{name: "user_name2", value: this.user_name2}];
                }
                if (this.UserTrueName) {
                    params.wheres = [{name: "UserTrueName", value: this.UserTrueName}];
                }
                return true;
            },
        }
        ,
        data() {
            return {
                single: true,
                model: false,
                defaultLoadPage: true, //第一次打开时不加载table数据，openDemo手动调用查询table数据
                fieldName: "", // 自定義邏輯字段
                user_name2: "", //查询条件字段
                UserTrueName: "", //查询条件字段

                url: "api/View_sys_deputy/GetPageDataByDeputy",//加载数据的接口
                columns: [
                    {
                        field: 'userid1',
                        title: 'user_id',
                        type: 'int',
                        width: 110,
                        hidden: true,
                        readonly: true,
                        require: true,
                        align: 'left'
                    },
                    {
                        field: 'UserName2',
                        title: 'UserName',
                        type: 'string',
                        width: 110,
                        readonly: true,
                        require: true,
                        align: 'left',
                        sort: true
                    },
                    {
                        field: 'UserTrueName2',
                        title: 'UserTrueName',
                        type: 'string',
                        width: 220,
                        readonly: true,
                        align: 'left'
                    },
                    {
                        field: 'emp_ename2',
                        title: 'emp_ename',
                        type: 'string',
                        width: 220,
                        readonly: true,
                        align: 'left'
                    },
                    {
                        field: 'emp_cname2',
                        title: 'emp_cname',
                        type: 'string',
                        width: 220,
                        readonly: true,
                        align: 'left'
                    }],
            };
        },
    };
</script>

<style scoped>

</style>
