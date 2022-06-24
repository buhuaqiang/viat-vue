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
                formType:"",//弹框打开的form类型,f-editFormFields  s-searchFormFields,ext-自定義擴展
                prod_id: "", //查询条件字段
                prod_ename: "", //查询条件字段
                prod_sname: "", //查询条件字段

                url: "api/View_com_prod_pop_query/GetProdPageData",//加载数据的接口
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
                    {field:'created_date',title:'created_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
                    {field:'prod_dbid',title:'prod_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'}],
            };
        },
        methods: {
            /**
             *
             * @param fieldName
             * @param formType  表單類型 f-form表單,s-查詢表單 ,mf-多选表单,ms-多选查询表单
             */
            openMulity(fieldName, formType){
                this.single=false;
                this.openDemo(fieldName,formType);
            },
            openDemo(fieldName,formType) {
                this.model = true;
                this.fieldName = fieldName
                this.formType = formType
                //打开弹出框时，加载table数据
                this.$nextTick(() => {
                    this.$refs.prodPop.load();
                });
            },
            clearData(fieldName,formType) {

                this.$emit("parentCall", ($parent) => {
                    debugger
                    if(this.formType=='f'){
                        $parent.editFormFields[fieldName] = '';
                        $parent.editFormFields[fieldName+'name'] = '';
                    }else if(this.formType=='s'){
                        $parent.searchFormFields[fieldName] = '';
                        $parent.searchFormFields[fieldName+'name'] ='';
                    }
                })
            },

            addRow() {
                let selectrow = this.$refs.prodPop.getSelected();
                if(!selectrow.length){
                    return this.$message.error("请选择数据")
                }
                // //将选取的数据赋值到父页面
                // this.$emit('parentCall', $parent => {
                //     $parent.editFormFields.prod_sname = selectrow[0].prod_sname;
                //     this.model=false;
                // })



                if (!selectrow || selectrow.length == 0) {
                    return this.$message.error("请选择行数据");
                }
                let path =this.$route.path;
                if(path =="/view_dist_margin"   && this.formType=='mf'){//
                    let selectrows = [];//将勾选值设置成数组
                    selectrow.forEach(row=>{
                        selectrows.push({"key":row.prod_dbid,"value":row.prod_ename});
                    })
                    this.$emit('parentCall', $parent => {//選擇數據後賦值
                        $parent.editFormOptions.forEach(x => {
                            x.forEach(item => {
                                if (item.field == 'prods') {
                                    item.data = selectrows;//將選中的數據賦值到下拉框的數組中
                                    item.data.forEach(a=>{//將值回顯到頁面，push(key)會將頁面顯示的值在多選框中標識出來，push(value)不會
                                        $parent.editFormFields.prods.push(a.key)
                                    })
                                }
                            })
                        })
                        this.model=false;
                    })
                }else if( (path =="/View_cust_price" || path =="/View_cust_price_detail") && this.formType=='ms'){//
                    let selectrows = [];//将勾选值设置成数组
                    selectrow.forEach(row=>{
                        selectrows.push({"key":row.prod_dbid,"value":row.prod_ename});
                    })
                    this.$emit('parentCall', $parent => {//選擇數據後賦值
                        $parent.searchFormOptions.forEach(x => {
                            x.forEach(item => {
                                if (item.field == 'prods') {
                                    item.data = selectrows;//將選中的數據賦值到下拉框的數組中
                                    item.data.forEach(a=>{//將值回顯到頁面，push(key)會將頁面顯示的值在多選框中標識出來，push(value)不會
                                        $parent.searchFormFields.prods.push(a.key)
                                    })
                                }
                            })
                        })
                        this.model=false;
                    })
                }
                else  if((path=='/View_app_power_contract_main') || this.formType=='ext'){//多導則調用
                    this.$emit("onSelect",this.fieldName,selectrow)
                }else{
                    //回写数据到表单
                    this.$emit("parentCall", ($parent) => {
                        //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)

                        if(this.formType=='f'){
                            if (selectrow[0].prod_dbid) {
                                $parent.editFormFields[this.fieldName] = selectrow[0].prod_dbid;
                                $parent.editFormFields[this.fieldName + 'name'] = selectrow[0].prod_id + " " + selectrow[0].prod_ename;

                                if (path =='/View_cust_price' || path =='/View_cust_price_detail'){
                                    $parent.editFormFields['nhi_price'] = selectrow[0].nhi_price;
                                }
                            }
                        }else if(this.formType=='s'){
                            if (selectrow[0].prod_dbid){
                                $parent.searchFormFields[this.fieldName] =  selectrow[0].prod_dbid;
                                $parent.searchFormFields[this.fieldName+'name'] = selectrow[0].prod_id+" "+selectrow[0].prod_ename;
                            }
                        }


                    });
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
