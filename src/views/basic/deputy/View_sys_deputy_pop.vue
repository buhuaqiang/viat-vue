<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/deputy/View_sys_deputy_pop.js此处编写
 -->
<template>
    <view-grid ref="grid"
               :columns="columns"
               :detail="detail"
               :editFormFields="editFormFields"
               :editFormOptions="editFormOptions"
               :searchFormFields="searchFormFields"
               :searchFormOptions="searchFormOptions"
               :table="table"
               :extend="extend">
    </view-grid>
</template>
<script>
    import extend from "@/extension/basic/deputy/View_sys_deputy_pop.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'User_Id',
                footer: "Foots",
                cnName: '代理人pop框',
                name: 'deputy/View_sys_deputy_pop',
                url: "/View_sys_deputy_pop/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({"emp_ename2":"","user_name2":"","emp_cname2":""});
            const searchFormOptions = ref([[{"title":"E-name","field":"emp_ename2","type":"like"},{"title":"UserName","field":"user_name2","type":"like"},{"title":"C-Name","field":"emp_cname2","type":"like"}]]);
            const columns = ref([{field:'CreateDate',title:'列名CreateDate',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'emp_ename2',title:'E-name',type:'string',width:110,align:'left',sort:true},
                       {field:'dept_name2',title:'Department Name',type:'string',width:220,align:'left'},
                       {field:'user_name2',title:'UserName',type:'string',width:110,require:true,align:'left'},
                       {field:'emp_dbid',title:'列名emp_dbid',type:'guid',width:110,align:'left'},
                       {field:'OrderNo',title:'列名OrderNo',type:'int',width:80,align:'left'},
                       {field:'UserTrueName',title:'列名UserTrueName',type:'string',width:110,require:true,align:'left'},
                       {field:'UserPwd',title:'列名UserPwd',type:'string',width:220,align:'left'},
                       {field:'UserName',title:'列名UserName',type:'string',width:110,require:true,align:'left'},
                       {field:'Tel',title:'列名Tel',type:'string',width:110,align:'left'},
                       {field:'Remark',title:'列名Remark',type:'string',width:220,align:'left'},
                       {field:'PhoneNo',title:'列名PhoneNo',type:'string',width:110,align:'left'},
                       {field:'RoleName',title:'列名RoleName',type:'string',width:220,require:true,align:'left'},
                       {field:'Role_Id',title:'列名Role_Id',type:'int',width:80,require:true,align:'left'},
                       {field:'emp_cname2',title:'C-Name',type:'string',width:120,align:'left'},
                       {field:'Token',title:'列名Token',type:'string',width:220,align:'left'},
                       {field:'ModifyID',title:'列名ModifyID',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Modifier',title:'列名Modifier',type:'string',width:130,align:'left'},
                       {field:'Address',title:'列名Address',type:'string',width:220,align:'left'},
                       {field:'AppType',title:'列名AppType',type:'int',width:80,align:'left'},
                       {field:'AuditDate',title:'列名AuditDate',type:'datetime',width:150,align:'left',sort:true},
                       {field:'AuditStatus',title:'列名AuditStatus',type:'int',width:80,align:'left'},
                       {field:'Auditor',title:'列名Auditor',type:'string',width:220,align:'left'},
                       {field:'CreateID',title:'列名CreateID',type:'int',width:80,hidden:true,align:'left'},
                       {field:'Creator',title:'列名Creator',type:'string',width:130,align:'left'},
                       {field:'DeptName',title:'列名DeptName',type:'string',width:220,align:'left'},
                       {field:'Dept_Id',title:'列名Dept_Id',type:'int',width:80,align:'left'},
                       {field:'Email',title:'列名Email',type:'string',width:110,align:'left'},
                       {field:'Enable',title:'列名Enable',type:'byte',width:110,require:true,align:'left'},
                       {field:'Gender',title:'列名Gender',type:'int',width:80,align:'left'},
                       {field:'HeadImageUrl',title:'列名HeadImageUrl',type:'string',width:220,align:'left'},
                       {field:'IsRegregisterPhone',title:'列名IsRegregisterPhone',type:'int',width:80,require:true,align:'left'},
                       {field:'LastLoginDate',title:'列名LastLoginDate',type:'datetime',width:150,align:'left',sort:true},
                       {field:'LastModifyPwdDate',title:'列名LastModifyPwdDate',type:'datetime',width:150,align:'left',sort:true},
                       {field:'Mobile',title:'列名Mobile',type:'string',width:110,align:'left'},
                       {field:'ModifyDate',title:'列名ModifyDate',type:'datetime',width:150,align:'left',sort:true},
                       {field:'User_Id',title:'列名User_Id',type:'int',width:80,require:true,align:'left'}]);
            const detail = ref({
                cnName: "#detailCnName",
                table: "#detailTable",
                columns: [],
                sortName: "",
                key: ""
            });
            return {
                table,
                extend,
                editFormFields,
                editFormOptions,
                searchFormFields,
                searchFormOptions,
                columns,
                detail,
            };
        },
    });
</script>
