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
                    v-model="user_name2"
            />
            <span style="margin-right: 5px">&nbsp;&nbsp;&nbsp;&nbsp;EnglishName:</span>
            <el-input
                    placeholder="EnglishName"
                    style="width: 180px"
                    v-model="emp_ename2"
            />
            <span style="margin-right: 5px">&nbsp;&nbsp;&nbsp;&nbsp; ChineseName:</span>
            <el-input
                    placeholder="ChineseName"
                    style="width: 180px"
                    v-model="emp_cname2"
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
                single:true,
                model: false,
                defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
                fieldName:"", // 自定義邏輯字段
                user_name2: "", //查询条件字段
                emp_ename2: "", //查询条件字段
                emp_cname2: "", //查询条件字段
                framePath: "",//弹框路径
                formType:"f",//弹框打开的form类型,f-editFormFields  s-searchFormFields

                url: "api/View_sys_deputy_pop/GetDeputyPopPageData",//加载数据的接口
                columns: [
                    {field:'User_Id',title:'user_id',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                    {field:'user_name2',title:'UserName',type:'string',width:110,readonly:true,require:true,align:'left',sort:true},
                    {field:'dept_name2',title:'Department Name',type:'string',width:220,readonly:true,align:'left'},
                    {field:'emp_ename2',title:'E-Name',type:'string',width:110,readonly:true,align:'left'},
                    {field:'emp_cname2',title:'C-Name',type:'string',width:110,readonly:true,align:'left'},
                    {field:'CreateDate',title:'CreateDate',type:'datetime',width:110,hidden:true,align:'left',sort:true}],
            };
        },
        methods: {
            open(fieldName,formType) {//代理人弹框
                //代理人弹框
                this.framePath = "deputy"
                this.single = true;
                this.model = true;
                this.fieldName = fieldName;
                if(formType)this.formType=formType;
                //打开弹出框时，加载table数据
                this.$nextTick(() => {
                    this.$refs.deputyPop.load();
                });
            },
            clearData(fieldName,formType) {

                this.$emit("parentCall", ($parent) => {
                    if(this.formType=='f'){
                        $parent.editFormFields[fieldName] = '';
                        $parent.editFormFields[fieldName+'name'] = '';
                    }else if(this.formType=='s'){
                        $parent.searchFormFields[fieldName] = '';
                        $parent.searchFormFields[fieldName+'name'] ='';
                    }
                })
            },
            openBulletin(fieldName){//消息发送弹框
                //代理人弹框
                this.framePath = "bullentin"
                this.single = false;//多选
                this.model = true;
                this.fieldName = fieldName
                //打开弹出框时，加载table数据
                this.$nextTick(() => {
                    this.$refs.deputyPop.load();
                });
            },

            addRow() {
                let selectrow = this.$refs.deputyPop.getSelected();
                if(!selectrow.length){
                    return this.$message.error("請選擇數據")
                }

                // //将选取的数据赋值到父页面
                if(this.framePath =="deputy"){//代理人弹框赋值
                    //回写数据到表单
                    this.$emit("parentCall", ($parent) => {
                        //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)
                        if(this.formType=='f'){
                            $parent.editFormFields[this.fieldName] = selectrow[0].emp_ename2;
                            $parent.editFormFields[this.fieldName+'name'] = selectrow[0].emp_ename2+" "+selectrow[0].emp_cname2;
                            $parent.editFormFields.deputy_user_id = selectrow[0].User_Id;
                        }

                    });


                }
                if(this.framePath =="bullentin"){//消息发送弹框赋值
                    let selectrows = [];//将勾选值设置成数组
                    let selectusers = [];//存储勾选的用户
                    let users = "";
                    let userValue = "";
                    selectrow.forEach(row=>{
                        selectrows.push({"key":row.User_Id,"value":row.emp_ename2});
                        //selectusers.push(row.emp_ename2);
                    })
                    this.$emit('parentCall', $parent => {//選擇數據後賦值
                        $parent.editFormOptions.forEach(x => {
                            x.forEach(item => {
                                if (item.field == 'users') {
                                    item.data = selectrows;//將選中的數據賦值到下拉框的數組中
                                    item.data.forEach(a=>{//將值回顯到頁面，push(key)會將頁面顯示的值在多選框中標識出來，push(value)不會
                                        $parent.editFormFields.users.push(a.key)
                                    })
                                }
                            })
                        })
                       // $parent.editFormFields.users = selectusers;
                        //$parent.editFormFields.emp_cname = selectrow[0].emp_cname;
                        //$parent.editFormFields.deputy_user_id = selectrow[0].user_id;
                        this.model=false;
                    })
                }

                /*  if (!selectrow || selectrow.length == 0) {
                      return this.$message.error("請選擇行數據");
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
            rowClick({ row, column, event }) {
                //查询界面点击行事件
                this.$refs.deputyPop.$refs.table.toggleRowSelection(row);//单击行时选中当前行;
            },
            loadTableBefore(params) {
                //查询前，设置查询条件
                if (this.user_name2) {
                    params.wheres = [{ name: "user_name2", value: this.user_name2 }];
                }
                if (this.emp_ename2) {
                    params.wheres = [{ name: "emp_ename2", value: this.emp_ename2 }];
                }
                if (this.emp_cname2) {
                    params.wheres = [{ name: "emp_cname2", value: this.emp_cname2 }];
                }
                return true;
            },

        },
    };
</script>
