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
                key: 'user_id',
                footer: "Foots",
                cnName: '代理人pop框',
                name: 'deputy/View_sys_deputy_pop',
                url: "/View_sys_deputy_pop/",
                sortName: "view_sys_deputy_pop"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({"user_name":"","emp_ename":"","emp_cname":""});
            const searchFormOptions = ref([[{"title":"UserName","field":"user_name","type":"like"},{"title":"E-Name","field":"emp_ename","type":"like"},{"title":"C-Name","field":"emp_cname","type":"like"}]]);
            const columns = ref([{field:'user_id',title:'user_id',type:'int',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'user_name',title:'UserName',type:'string',width:110,readonly:true,require:true,align:'left',sort:true},
                       {field:'dept_name',title:'Department Name',type:'string',width:220,readonly:true,align:'left'},
                       {field:'emp_ename',title:'E-Name',type:'string',width:110,readonly:true,align:'left'},
                       {field:'emp_cname',title:'C-Name',type:'string',width:110,readonly:true,align:'left'},
                       {field:'CreateDate',title:'CreateDate',type:'datetime',width:110,hidden:true,align:'left',sort:true}]);
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
