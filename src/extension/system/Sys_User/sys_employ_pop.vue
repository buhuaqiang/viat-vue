<template>
    <VolBox
            v-model="model"
            :lazy="true"
            title="Employee"
            :height="600"
            :width="1200"
            :padding="15"
    >
        <!-- 设置查询条件 -->
        <div style="padding-bottom: 10px">
            <span style="margin-right: 5px">Employee Code:</span>
            <el-input
                    placeholder="emp_id"
                    style="width: 180px"
                    v-model="emp_id"
            />
            <span style="margin-right: 5px">&nbsp;&nbsp;&nbsp;&nbsp;Employee Ename:</span>
            <el-input
                    placeholder="emp_ename"
                    style="width: 180px"
                    v-model="emp_ename"
            />
            <span style="margin-right: 5px">&nbsp;&nbsp;&nbsp;&nbsp;Employee Cname:</span>
            <el-input
                    placeholder="emp_cname"
                    style="width: 180px"
                    v-model="emp_cname"
            />
            <el-button
                    type="primary"
                    style="margin-left:10px"
                    size="medium"
                    icon="el-icon-search"
                    @click="search"
            >inquire</el-button
            >
        </div>

        <!-- vol-table配置的这些属性见VolTable组件api文件 -->
        <vol-table
                ref="empolyPop"
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
                >OK</el-button
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
                single:true,
                model: false,
                defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
                fieldName:"", // 自定義邏輯字段
                emp_ename: "", //查询条件字段
                emp_id: "",
                emp_cname: "", //查询条件字段
                formType:"f",//弹框打开的form类型,f-editFormFields  s-searchFormFields

                url: "api/Viat_com_employee/GetEmployData",//加载数据的接口
                columns: [
                    {field:'emp_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                    {field:'emp_id',title:'Employee Code',type:'string',width:110,require:true,align:'left',sort:true},
                    {field:'entity',title:'entity',type:'string',width:110,align:'left',hidden:true},
                    {field:'division',title:'division',type:'string',width:110,align:'left',hidden:true},
                    {field:'user_name',title:'AD登入 name',type:'string',width:110,require:true,align:'left',hidden:true},
                    {field:'user_domain',title:'AD登入 domain',type:'string',width:110,require:true,align:'left',hidden:true},
                    {field:'emp_global_id',title:'emp_global_id',type:'string',width:110,align:'left',hidden:true},
                    {field:'emp_ename',title:'Employee Ename',type:'string',width:110,align:'left'},
                    {field:'emp_cname',title:'Employee Cname',type:'string',width:110,align:'left'},
                    {field:'email',title:'Mail',type:'string',width:120,align:'left',hidden:true},
                    {field:'dept_id',title:'部門代碼',type:'string',width:110,align:'left',hidden:true},
                    {field:'dept_name',title:'Department',type:'string',width:220,align:'left'},
                    {field:'mobile',title:'mobile',type:'string',width:110,align:'left',hidden:true},
                    {field:'address',title:'address',type:'string',width:120,align:'left',hidden:true}
                  ],
            };
        },
        methods: {
            open(fieldName,formType) {
                this.model = true;
                //this.fieldName = fieldName
                this.fieldName=fieldName;
                if(formType)this.formType=formType;
                //打开弹出框时，加载table数据
                this.$nextTick(() => {
                    this.$refs.empolyPop.load();
                });
            },

            clearData(fieldName,formType) {
              let path =this.$route.path;
              this.fieldName=fieldName;
                this.$emit("parentCall", ($parent) => {

                  if (path === '/View_com_local_mpg' && this.formType === 'f'){
                    if (this.fieldName == 'medical_reviewer_id'){
                      $parent.editFormFields['medical_reviewer_id'] = '';
                      $parent.editFormFields['medical_reviewer_name'] = '';
                    }
                    if (this.fieldName == 'ma_id'){
                      $parent.editFormFields['ma_id'] = '';
                      $parent.editFormFields['maUserName'] = '';
                    }
                    if (this.fieldName == 'pm_id'){
                      $parent.editFormFields['pm_id'] = '';
                      $parent.editFormFields['supervisorUserName'] = '';
                    }
                  }else if (path === '/View_com_local_mpg' && this.formType === 's'){
                    if (this.fieldName == 'ma_id1'){
                      $parent.searchFormFields['ma_id'] = '';
                      $parent.searchFormFields['maUserName'] = '';
                    }
                    if (this.fieldName == 'pm_id1'){
                      $parent.searchFormFields['pm_id'] = '';
                      $parent.searchFormFields['supervisorUserName'] = '';
                    }
                    if (this.fieldName == 'medical_reviewer_id1'){
                      $parent.searchFormFields['medical_reviewer_id'] = '';
                      $parent.searchFormFields['medical_reviewer_name'] = '';
                    }
                  }else{
                    if(this.formType=='f'){
                      $parent.editFormFields[fieldName] = '';
                      $parent.editFormFields[fieldName+'name'] = '';
                    }else if(this.formType=='s'){
                      $parent.searchFormFields[fieldName] = '';
                      $parent.searchFormFields[fieldName+'name'] ='';
                    }
                  }

                })
            },

            addRow() {
                let selectrow = this.$refs.empolyPop.getSelected();
                if(!selectrow.length){
                    return this.$message.error("請選擇數據")
                }
                // //将选取的数据赋值到父页面
                /* this.$emit('parentCall', $parent => {
                     $parent.editFormFields.user_name2 = selectrow[0].UserName+;
                     $parent.editFormFields.UserTrueName = selectrow[0].UserTrueName;
                     $parent.editFormFields.user_id = selectrow[0].User_Id;
                     this.model=false;
                 })*/
                let path =this.$route.path;
                //回写数据到表单
                this.$emit("parentCall", ($parent) => {
                    //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)

                    $parent.handleEmpSelected(this.fieldName,selectrow);


                 /* if (path === '/View_com_local_mpg' && this.formType === 'f'){
                    if (this.fieldName === 'medical_reviewer_id'){
                      $parent.editFormFields['medical_reviewer_id'] = selectrow[0].emp_id;
                      $parent.editFormFields['medical_reviewer_name'] = selectrow[0].emp_ename;
                    }
                    if (this.fieldName === 'ma_id'){
                      $parent.editFormFields['ma_id'] = selectrow[0].emp_id;
                      $parent.editFormFields['maUserName'] = selectrow[0].emp_ename;
                    }
                    if (this.fieldName === 'pm_id'){
                      $parent.editFormFields['pm_id'] = selectrow[0].emp_id;
                      $parent.editFormFields['supervisorUserName'] = selectrow[0].emp_ename;
                    }
                  }else if (path === '/View_com_local_mpg' && this.formType === 's'){
                    if (this.fieldName === 'ma_id'){
                      $parent.searchFormFields['ma_id'] = selectrow[0].emp_id;
                      $parent.searchFormFields['maUserName'] = selectrow[0].emp_ename;
                    }
                    if (this.fieldName === 'pm_id'){
                      $parent.searchFormFields['pm_id'] = selectrow[0].emp_id;
                      $parent.searchFormFields['supervisorUserName'] = selectrow[0].emp_ename;
                    }
                  }else if(this.formType==='f'){
                        $parent.editFormFields[this.fieldName] = selectrow[0].emp_dbid;
                        $parent.editFormFields[this.fieldName+'name'] =selectrow[0].emp_ename;
                        $parent.editFormFields.UserTrueName = selectrow[0].emp_ename;
                    }else{

                  }*/

                });
                this.model=false;
            },
            search() {
                //点击搜索
                this.$refs.empolyPop.load();
                //this.$refs.userPop.load();
            },
            rowClick({ row, column, event }) {
                //查询界面点击行事件
                this.$refs.empolyPop.$refs.table.toggleRowSelection(row);//单击行时选中当前行;
            },
            loadTableBefore(params) {
                //查询前，设置查询条件  params.wheres.push({ name: "group_name", value: this.group_name,displayType:'like' });
                if (this.emp_ename) {
                    params.wheres.push({ name: "emp_ename", value: this.emp_ename,displayType:'like' });
                }
                if (this.emp_id) {
                    params.wheres.push({ name: "emp_id", value: this.emp_id,displayType:'like' });
                }
                if (this.emp_cname) {
                    params.wheres.push({ name: "emp_cname", value: this.emp_cname,displayType:'like' });
                }
                if(this.fieldName=='pricing_field' ){//價格群組頁面的彈框
                    params.wheres.push({ name: "profession_type", value: 'PM' });
                }
                return true;
            },

        },
    };
</script>
