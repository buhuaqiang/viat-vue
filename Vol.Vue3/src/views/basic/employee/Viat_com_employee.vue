<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/employee/Viat_com_employee.js此处编写
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
    import extend from "@/extension/basic/employee/Viat_com_employee.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'emp_dbid',
                footer: "Foots",
                cnName: '員工設置',
                name: 'employee/Viat_com_employee',
                url: "/Viat_com_employee/",
                sortName: "employee"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'emp_dbid',title:'PKID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'emp_id',title:'員工編號',type:'string',width:110,require:true,align:'left',sort:true},
                       {field:'entity',title:'entity',type:'string',width:110,align:'left'},
                       {field:'division',title:'division',type:'string',width:110,align:'left'},
                       {field:'zip_id',title:'郵區代碼',type:'string',width:110,align:'left'},
                       {field:'user_name',title:'AD登入 name',type:'string',width:110,require:true,align:'left'},
                       {field:'user_domain',title:'AD登入 domain',type:'string',width:110,require:true,align:'left'},
                       {field:'emp_global_id',title:'emp_global_id',type:'string',width:110,align:'left'},
                       {field:'emp_ename',title:'員工英文姓名',type:'string',width:110,align:'left'},
                       {field:'emp_cname',title:'員工中文姓名',type:'string',width:110,align:'left'},
                       {field:'email',title:'電子郵箱',type:'string',width:120,align:'left'},
                       {field:'dept_id',title:'部門代碼',type:'string',width:110,align:'left'},
                       {field:'dept_name',title:'部門名稱',type:'string',width:220,align:'left'},
                       {field:'mobile',title:'手機',type:'string',width:110,align:'left'},
                       {field:'address',title:'地址',type:'string',width:120,align:'left'},
                       {field:'mvmnt_type',title:'moving type for sun systems',type:'string',width:110,align:'left'},
                       {field:'dept_type',title:'部門類別',type:'string',width:110,align:'left'},
                       {field:'dept_ename',title:'英文部門',type:'string',width:120,align:'left'},
                       {field:'jposition',title:'中文職稱',type:'string',width:120,align:'left'},
                       {field:'ejposition',title:'英文職稱',type:'string',width:120,align:'left'},
                       {field:'quite_time',title:'離職日',type:'datetime',width:110,align:'left',sort:true},
                       {field:'created_user',title:'建立用戶',type:'int',width:110,align:'left'},
                       {field:'created_username',title:'created_username',type:'string',width:110,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,align:'left'},
                       {field:'created_clientusername',title:'created_clientusername',type:'string',width:110,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,align:'left'},
                       {field:'modified_username',title:'modified_username',type:'string',width:110,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,align:'left'},
                       {field:'modified_clientusername',title:'modified_clientusername',type:'string',width:110,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:110,align:'left',sort:true}]);
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
