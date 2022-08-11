<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/Sys_User.js此处编写
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
    import extend from "@/extension/system/Sys_User.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'User_Id',
                footer: "Foots",
                cnName: 'User List',
                name: 'Sys_User',
                url: "/Sys_User/",
                sortName: "User_Id"
            });
            const editFormFields = ref({"UserName":"","UserTrueName":"","Role_Id":"","IsRegregisterPhone":"","Gender":"","Enable":"","CreateDate":"","Creator":"","Remark":"","HeadImageUrl":"","emp_dbidname":"","emp_dbidname1":"","emp_dbid":""});
            const editFormOptions = ref([[{"title":"user account","required":true,"field":"UserName","disabled":true},
                               {"title":"User Name","required":true,"field":"UserTrueName","type":"text","disabled":true}],
                              [{"dataKey":"roles","data":[],"title":"Role","required":true,"field":"Role_Id","type":"select"},
                                  {"dataKey":"gender","data":[],"title":"Sex","field":"Gender","type":"select"}
                               //{"dataKey":"isphone","data":[],"title":"手机用户","required":true,"field":"IsRegregisterPhone","type":"select"}
                               ],
                              [
                               {"dataKey":"enable","data":[],"title":"Status","required":true,"field":"Enable","type":"select"},
                                  {"title":"employee","field":"emp_dbidname","required":true},{"title":"employee","field":"emp_dbidname1","hidden":true}
                               ],
                               [
                                {"dataKey":"SYS_USER_PROFESSION_TYPE","data":[],"title":"Profession Type","required":false,"field":"profession_type","type":"select"},

                               ],
                [{"dataKey":"VIAT_ORG_LEVEL_DETAIL","data":[],"title":"SA Deputy Zone","required":false,"field":"deputy_zone_sa","type":"cascader"}, {"dataKey":"SYS_USER_DEPUTY_ZONE","data":[],"title":"Sales Deputy Zone","required":false,"field":"deputy_zone","type":"selectList"},],
                              /*[{"title":"注册时间","field":"CreateDate","disabled":true},
                               {"title":"创建人","field":"Creator","disabled":true}],*/
                              [{"title":"用戶識別碼","field":"emp_dbid",hidden:true}],
                              [{"title":"Remark","field":"Remark","colSize":12,"type":"textarea"}],
                              [{"title":"HeadImage","required":false,"field":"HeadImageUrl","type":"img"}]]);
            const searchFormFields = ref({"UserName":"","Gender":"","DeptName":"","Role_Id":"","Token":"","AppType":[],"UserTrueName":"","CreateDate":"","IsRegregisterPhone":"","PhoneNo":"","Enable":"","LastLoginDate":"","Address":"","Email":""});
            const searchFormOptions = ref([[{"title":"User Account","field":"UserName"},
               /* {"dataKey":"gender","data":[],"title":"性别","field":"Gender","type":"select"},*/
                {"title":"User Name","field":"UserTrueName"}],
                /*
                [{"title":"部门","field":"DeptName"},
                    {"dataKey":"roles","data":[],"title":"角色","field":"Role_Id","type":"select"},
                    {"title":"Token","field":"Token"}
                    ],

                [{"dataKey":"ut","data":[],"title":"登陆设备类型","field":"AppType","type":"selectList"},
                {"dataKey":"isphone","data":[],"title":"手机用户","field":"IsRegregisterPhone","type":"select"},
                {"title":"手机号","field":"PhoneNo"}],[{"dataKey":"enable","data":[],"title":"是否可用","field":"Enable","type":"select"},


                {"title":"地址","field":"Address"},

                {"title":"Email","field":"Email"}],
                 */
                [{"title":"Create Date","field":"CreateDate","type":"datetime"},
                    {"title":"Last Login Date","field":"LastLoginDate","type":"datetime"}]]);
            const columns = ref([{field:'UserName',title:'User Account',type:'string',link:true,width:110,readonly:true,require:true,align:'left',sortable:true},
                       {field:'User_Id',title:'User_Id',type:'int',width:90,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'Gender',title:'Sex',type:'int',bind:{ key:'gender',data:[]},width:100,align:'left'},
                       {field:'HeadImageUrl',title:'HeadImage',type:'img',width:90,require:true,align:'left'},
                       {field:'Dept_Id',title:'Dept_Id',type:'int',width:90,hidden:true,align:'left'},
                       {field:'DeptName',title:'Department',type:'string',width:150,hidden:true,align:'left'},
                       {field:'Role_Id',title:'Role',type:'int',bind:{ key:'roles',data:[]},width:100,require:true,align:'left'},
                       {field:'RoleName',title:'RoleName',type:'string',width:90,hidden:true,require:true,align:'left'},
                       {field:'Token',title:'Token',type:'string',width:180,hidden:true,align:'left'},
                       {field:'AppType',title:'AppType',type:'int',bind:{ key:'ut',data:[]},width:150,hidden:true,align:'left'},
                       {field:'UserTrueName',title:'User Name',type:'string',width:120,require:true,align:'left'},
                       {field:'profession_type',title:'Profession Type',type:'string',bind:{ key:'SYS_USER_PROFESSION_TYPE',data:[]},width:120,require:false,align:'left'},
                       {field:'CreateDate',title:'CreateDate',type:'datetime',width:150,readonly:true,align:'left',sortable:true},
                       {field:'IsRegregisterPhone',title:'手机用户',type:'int',bind:{ key:'isphone',data:[]},width:120,hidden:true,align:'left'},
                       {field:'PhoneNo',title:'Phone',type:'string',width:150,hidden:true,require:true,align:'left'},
                       {field:'Tel',title:'Tel',type:'string',width:90,hidden:true,align:'left'},
                       {field:'CreateID',title:'CreateID',type:'int',width:90,hidden:true,align:'left'},
                       {field:'Creator',title:'Creator',type:'string',width:130,readonly:true,align:'left'},
                       {field:'Enable',title:'Enable',type:'byte',bind:{ key:'enable',data:[]},width:90,require:true,align:'left'},
                       {field:'ModifyID',title:'ModifyID',type:'int',width:90,hidden:true,align:'left'},
                       {field:'Modifier',title:'Modifier',type:'string',width:130,hidden:true,readonly:true,align:'left'},
                       {field:'ModifyDate',title:'ModifyDate',type:'datetime',width:90,readonly:true,align:'left',sortable:true},
                       {field:'AuditStatus',title:'AuditStatus',type:'int',bind:{ key:'audit',data:[]},width:90,hidden:true,align:'left'},
                       {field:'Auditor',title:'Auditor',type:'string',width:90,hidden:true,align:'left'},
                       {field:'AuditDate',title:'AuditDate',type:'datetime',width:150,hidden:true,align:'left',sortable:true},
                       {field:'LastLoginDate',title:'LastLoginDate',type:'datetime',width:150,hidden:true,align:'left',sortable:true},
                       {field:'LastModifyPwdDate',title:'LastModifyPwdDate',type:'datetime',width:150,hidden:true,align:'left',sortable:true},
                       {field:'Address',title:'Address',type:'string',width:190,hidden:true,align:'left'},
                       {field:'Mobile',title:'Mobile',type:'string',width:140,hidden:true,align:'left'},
                       {field:'Email',title:'Email',type:'string',width:140,hidden:true,align:'left'},
                      {field:'emp_dbid',title:'employee',type:'guid',width:180,hidden:true,align:'left'},
                       {field:'Remark',title:'Remark',type:'string',width:180,hidden:true,align:'left'},
                       {field:'OrderNo',title:'OrderNo',type:'int',width:90,hidden:true,align:'left'}]);
            const detail = ref({
                cnName: "#detailCnName",
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
