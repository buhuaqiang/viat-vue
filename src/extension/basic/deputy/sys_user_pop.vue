<template>
    <VolBox
            v-model="model"
            :lazy="true"
            title="登錄人"
            :height="600"
            :width="1000"
            :padding="15"
    >
        <!-- 设置查询条件 -->
        <div style="padding-bottom: 10px">
            <span style="margin-right: 5px">UserName:</span>
            <el-input
                    placeholder="ID"
                    style="width: 180px"
                    v-model="UserName"
            />
            <span style="margin-right: 5px">&nbsp;&nbsp;&nbsp;&nbsp;UserTrueName:</span>
            <el-input
                    placeholder="UserTrueName"
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
                ref="userPop"
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
                @rowClick="rowClick"
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
                UserName: "", //查询条件字段
                UserTrueName: "", //查询条件字段
                formType:"f",//弹框打开的form类型,f-editFormFields  s-searchFormFields

                url: "api/Sys_User/GetPageData",//加载数据的接口
                columns: [
                    {field:'UserName',title:'帐号',type:'string',width:110,readonly:true,require:true,align:'left'},
                    {field:'User_Id',title:'User_Id',type:'int',width:90,hidden:true,readonly:true,require:true,align:'left'},
                    {field:'Gender',title:'性别',type:'int',bind:{ key:'gender',data:[]},width:100,align:'left'},
                    {field:'Role_Id',title:'角色',type:'int',bind:{ key:'roles',data:[]},width:100,require:true,align:'left'},
                    {field:'UserTrueName',title:'真实姓名',type:'string',width:120,require:true,align:'left'}
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
                    this.$refs.userPop.load();
                });
            },
            addRow() {
                let rows = this.$refs.userPop.getSelected();
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
            /*open(fieldName,formType) {
                this.model = true;
                //this.fieldName = fieldName
                this.fieldName=fieldName;
                if(formType)this.formType=formType;
                //打开弹出框时，加载table数据
                this.$nextTick(() => {
                    this.$refs.userPop.load();
                });
            },*/
            /*clearData(fieldName,formType) {

                this.$emit("parentCall", ($parent) => {
                    if(this.formType=='f'){
                        $parent.editFormFields[fieldName] = '';
                        $parent.editFormFields[fieldName+'name'] = '';
                    }else if(this.formType=='s'){
                        $parent.searchFormFields[fieldName] = '';
                        $parent.searchFormFields[fieldName+'name'] ='';
                    }
                })
            },*/

            /*addRow() {
                let selectrow = this.$refs.userPop.getSelected();
                if(!selectrow.length){
                    return this.$message.error("請選擇數據")
                }
                // //将选取的数据赋值到父页面
                /!* this.$emit('parentCall', $parent => {
                     $parent.editFormFields.user_name2 = selectrow[0].UserName+;
                     $parent.editFormFields.UserTrueName = selectrow[0].UserTrueName;
                     $parent.editFormFields.user_id = selectrow[0].User_Id;
                     this.model=false;
                 })*!/

                //回写数据到表单
                this.$emit("parentCall", ($parent) => {
                    //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)
                    if(this.formType=='f'){
                        $parent.editFormFields[this.fieldName] = selectrow[0].User_Id;
                        $parent.editFormFields[this.fieldName+'name'] = selectrow[0].UserName+" "+selectrow[0].UserTrueName;
                        //$parent.editFormFields.user_id = selectrow[0].User_Id;
                        //$parent.editFormFields.UserTrueName = selectrow[0].UserTrueName;
                    }

                });
                this.model=false;

            },*/
            search() {
                //点击搜索
                this.$refs.userPop.load();
            },
            rowClick({ row, column, event }) {
                //查询界面点击行事件
                this.$refs.userPop.$refs.table.toggleRowSelection(row);//单击行时选中当前行;
            },
            loadTableBefore(params) {
                //查询前，设置查询条件
                if (this.UserName) {
                    params.wheres = [{ name: "UserName", value: this.UserName }];
                }
                if (this.UserTrueName) {
                    params.wheres = [{ name: "UserTrueName", value: this.UserTrueName }];
                }
                return true;
            },

        },
    };
</script>
