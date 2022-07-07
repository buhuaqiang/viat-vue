import {  defineAsyncComponent } from "vue";
import employPop from "./Sys_User/sys_employ_pop.vue";
let extension = {
    components: { //动态扩充组件或组件路径
        //表单header、content、footer对应位置扩充的组件
        gridHeader: defineAsyncComponent(() =>
            import("./Sys_User/Sys_UserGridHeader.vue")),
        gridBody: '',
        gridFooter: '',
        //弹出框(修改、编辑、查看)header、content、footer对应位置扩充的组件
        modelHeader: '',
        modelBody: employPop,
        modelFooter: ''
    },
    text: "Can only see all accounts under the current role",
    buttons: [], //扩展的按钮
    methods: { //事件扩展
        onInit() {
            this.boxOptions.height = 530;
            this.boxOptions.labelWidth=180;
            this.columns.push({
                title: 'operate',
                hidden: false,
                align: "center",
                fixed: 'right',
                width: 120,
                render: (h, { row, column, index }) => {
                    return h(
                        "div", { style: { 'font-size': '13px', 'cursor': 'pointer', 'color': '#409eff' } }, [
                        h(
                            "a", {
                            style: { 'margin-right': '15px' },
                            onClick: (e) => {
                                e.stopPropagation()
                                this.$refs.gridHeader.open(row);
                            }
                        }, "Change Password"
                        ),
                        h(
                            "a", {
                            style: {},
                            onClick: (e) => {
                                e.stopPropagation()
                                this.edit(row);
                            }
                        },
                            "Edit"
                        ),
                    ])
                }
            })
            this.labelWidth=180;
            this.setFiexdSearchForm(true);
            this.load=false;
            let emp_dbidname=this.getOption("emp_dbidname");
            emp_dbidname.extra = {
                render:this.getFormRender("emp_dbid","f")
            }
        },
        onInited() { },

        getFormRender(fieldName,formType) {//
            return (h, { row, column, index }) => {
                return h("div", { style: { color: '#0c83ff', 'font-size': '12px', cursor: 'pointer',"text-decoration": "none"} }, [
                    h(
                        "a",
                        {
                            props: {},
                            style: { "color":"","border-bottom": "1px solid","margin-left": "9px" ,"text-decoration": "none"},
                            onClick: (e) => {
                                    this.$refs.modelBody.open(fieldName,formType)
                            }
                        },
                        [h("i",{class:"el-icon-zoom-in"})],
                        "Select"
                    ),
                    h(
                        "a",
                        {
                            props: {},
                            style: { "color":"red","margin-left": "9px", "border-bottom": "1px solid", "text-decoration": "none"},
                            onClick: (e) => {
                                    this.$refs.modelBody.clearData(fieldName,formType)
                            }
                        },
                        [h("i",{class:"el-icon-zoom-out"})],
                        "Clean"
                    ),

                ]);
            };
        },
        addAfter(result) { //用户新建后，显示随机生成的密码
            if (!result.status) {
                return true;
            }
            //显示新建用户的密码
            //2020.08.28优化新建成后提示方式
            this.$confirm(result.message, 'Add user succeeded', {
                confirmButtonText: 'Confirm',
                type: 'success',
                center: true
            }).then(() => { })

            this.boxModel = false;
            this.refresh();
            return false;
        },
        //获取编辑页面字段
        getOption(field) {
            let option;
            this.editFormOptions.forEach(x => {
                x.forEach(item => {
                    if (item.field == field) {
                        option = item;
                    }
                })
            })
            return option;
        },
        modelOpenAfter() {
            //点击弹出框后，如果是编辑状态，禁止编辑用户名，如果新建状态，将用户名字段设置为可编辑
            let isEDIT = this.currentAction == this.const.EDIT;
            this.editFormOptions.forEach(item => {
                item.forEach(x => {
                    if (x.field == "UserName") {
                        x.disabled=isEDIT;
                    }
                })
                //不是新建，性别默认值设置为男
                if (!isEDIT) {
                    this.editFormFields.Gender = "0";
                }
            })

            this.editFormFields.emp_dbidname =this.editFormFields.UserTrueName;
            this.editFormFields.emp_dbidname1 =this.editFormFields.UserTrueName;
            if(this.currentAction=='update'){
                this.getOption("Gender").disabled=true;
                this.getOption("emp_dbidname1").disabled=true;
                this.getOption("emp_dbidname1").hidden=false;
                this.getOption("emp_dbidname").hidden=true;
            }else{
                this.getOption("Gender").disabled=false;
                //this.getOption("emp_dbidname").disabled=false;
                this.getOption("emp_dbidname1").hidden=true;
                this.getOption("emp_dbidname").hidden=false;
            }
        }


    }
};
export default extension;
