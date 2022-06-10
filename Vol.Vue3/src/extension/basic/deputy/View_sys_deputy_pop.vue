<template>
    <VolBox
            v-model="model"
            :lazy="true"
            title="代理人"
            :height="400"
            :width="1000"
            :padding="15"
    >
        <!-- 设置查询条件 -->
        <div style="padding-bottom: 10px">
            <span style="margin-right: 5px">UserName:</span>
            <el-input
                    placeholder="ID"
                    style="width: 180px"
                    v-model="user_name"
            />
            <span style="margin-right: 5px">&nbsp;&nbsp;&nbsp;&nbsp;EnglishName:</span>
            <el-input
                    placeholder="EnglishName"
                    style="width: 180px"
                    v-model="emp_ename"
            />
            <span style="margin-right: 5px">&nbsp;&nbsp;&nbsp;&nbsp; ChineseName:</span>
            <el-input
                    placeholder="ChineseName"
                    style="width: 180px"
                    v-model="emp_cname"
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
                ref="deputyPop"
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
                single:true,
                model: false,
                defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
                fieldName:"", // 自定義邏輯字段
                user_name: "", //查询条件字段
                emp_ename: "", //查询条件字段
                emp_cname: "", //查询条件字段

                url: "api/View_sys_deputy_pop/GetPageData",//加载数据的接口
                columns: [
                    {field:'user_id',title:'user_id',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                    {field:'user_name',title:'UserName',type:'string',width:110,readonly:true,require:true,align:'left',sort:true},
                    {field:'dept_name',title:'Department Name',type:'string',width:220,readonly:true,align:'left'},
                    {field:'emp_ename',title:'E-Name',type:'string',width:110,readonly:true,align:'left'},
                    {field:'emp_cname',title:'C-Name',type:'string',width:110,readonly:true,align:'left'},
                    {field:'CreateDate',title:'CreateDate',type:'datetime',width:110,hidden:true,align:'left',sort:true}],
            };
        },
        methods: {
            open(fieldName) {
                this.model = true;
                this.fieldName = fieldName
                //打开弹出框时，加载table数据
                this.$nextTick(() => {
                    this.$refs.deputyPop.load();
                });
            },

            addRow() {
                debugger;
                let selectrow = this.$refs.deputyPop.getSelected();
                if(!selectrow.length){
                    return this.$message.error("请选择数据")
                }
                // //将选取的数据赋值到父页面
                 this.$emit('parentCall', $parent => {
                     $parent.editFormFields.emp_ename = selectrow[0].emp_ename;
                     $parent.editFormFields.emp_cname = selectrow[0].emp_cname;
                     $parent.editFormFields.deputy_user_id = selectrow[0].user_id;
                     this.model=false;
                 })



                /*  if (!selectrow || selectrow.length == 0) {
                      return this.$message.error("请选择行数据");
                  }
                  let path =this.$route.path;
                  if(path=='/View_app_power_contract_main'){//多導則調用
                      this.$emit("onSelect",this.fieldName,selectrow)
                  }else{
                      this.$emit("parentCall", ($parent) => {
                          //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)
                          $parent.editFormFields[this.fieldName] = selectrow[0].cust_id;
                      });
                  }*/
                this.model=false;

            },
            search() {
                //点击搜索
                this.$refs.deputyPop.load();
            },
            loadTableBefore(params) {
                //查询前，设置查询条件
                if (this.user_name) {
                    params.wheres = [{ name: "user_name", value: this.user_name }];
                }
                if (this.emp_ename) {
                    params.wheres = [{ name: "emp_ename", value: this.emp_ename }];
                }
                if (this.emp_cname) {
                    params.wheres = [{ name: "emp_cname", value: this.emp_cname }];
                }
                return true;
            },

        },
    };
</script>
