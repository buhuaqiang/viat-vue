<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/Sys_Role.js此处编写
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
    import extend from "@/extension/system/Sys_Role.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'Role_Id',
                footer: "Foots",
                cnName: 'Role List',
                name: 'Sys_Role',
                url: "/Sys_Role/",
                sortName: "Role_Id"
            });
            const editFormFields = ref({"ParentId":[],"RoleName":"","DeptName":"","Enable":"","Creator":"","CreateDate":"","Modifier":"","ModifyDate":""});
            const editFormOptions = ref([[{"dataKey":"tree_roles","data":[],"title":"Parent Role ID","required":true,"field":"ParentId","type":"cascader"},
                               {"title":"Role Name","required":true,"field":"RoleName"}],
                              [{"title":"Department","field":"DeptName"},
                               {"dataKey":"enable","data":[],"title":"Enable","field":"Enable","type":"switch"}],

                              [{"title":"Creator","field":"Creator","readonly":true},
                               {"title":"Create Date","field":"CreateDate","readonly":true,"type":"datetime"}],
                              [{"title":"Modifier","field":"Modifier","readonly":true},
                               {"title":"Modify Date","field":"ModifyDate","readonly":true}]


            ]);
            const searchFormFields = ref({"RoleName":"","DeptName":"","Enable":"","CreateDate":"","ModifyDate":""});
            const searchFormOptions = ref([[{"title":"Role Name","field":"RoleName","type":"text"},
                {"title":"Department","field":"DeptName","type":"text"},
                {"dataKey":"enable","data":[],"title":"Enable","field":"Enable","type":"select"}],
                /*[{"title":"创建时间","field":"CreateDate","type":"datetime"},{"title":"修改时间","field":"ModifyDate","type":"datetime"}]*/
            ]);
            const columns = ref([{field:'Role_Id',title:'Role ID',type:'int',width:70,readonly:true,require:true,align:'left',sortable:true},
                       {field:'ParentId',title:'Parent Role ID',type:'int',bind:{ key:'tree_roles',data:[]},width:70,require:true,align:'left'},
                       {field:'RoleName',title:'Role Name',type:'string',link:true,width:90,require:true,align:'left'},
                       {field:'Dept_Id',title:'部门ID',type:'int',width:90,hidden:true,align:'left'},
                       {field:'DeptName',title:'Department',type:'string',width:90,align:'left'},
                       {field:'Enable',title:'Enable',type:'byte',bind:{ key:'enable',data:[]},width:90,align:'left'},
                       {field:'OrderNo',title:'排序',type:'int',width:90,hidden:true,align:'left'},
                       {field:'Creator',title:'Creator',type:'string',width:130,readonly:true,align:'left'},
                       {field:'CreateDate',title:'Create Date',type:'datetime',width:90,readonly:true,align:'left',sortable:true},
                       {field:'Modifier',title:'Modifier',type:'string',width:130,readonly:true,align:'left'},
                       {field:'ModifyDate',title:'Modify Date',type:'datetime',width:90,readonly:true,align:'left',sortable:true}]);
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
