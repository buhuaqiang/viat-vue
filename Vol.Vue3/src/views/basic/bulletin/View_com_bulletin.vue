<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/bulletin/View_com_bulletin.js此处编写
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
    import extend from "@/extension/basic/bulletin/View_com_bulletin.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'bulletin_dbid',
                footer: "Foots",
                cnName: '系統訊息設置',
                name: 'bulletin/View_com_bulletin',
                url: "/View_com_bulletin/",
                sortName: "created_date"
            });
            const editFormFields = ref({"subject":"","content":"","start_date":"","end_date":"","send":"","users":"","user":"","SelectUsers":"","modified_date":"","emp_ename":""});
            const editFormOptions = ref([[{"title":"Subject","field":"subject","required":true},{"title":"Content","field":"content","required":true,"type":"textarea"}],
                              //[{"title":"Content","field":"content","required":true,"type":"textarea"}],
                              [{"title":"Publish Date","field":"start_date","type":"date","required":true},
                               {"title":"","field":"end_date","type":"date"}],
                              [{"dataKey":"SendTo","data":[],"title":"Send To","required":true,"field":"send","type":"radio"}],
                              [{"dataKey":"SendTo","data":[],"title":"Users","field":"users","type":"selectList","colSize":10},
                               {"title":"Users","field":"user","disabled":true,"colSize":10}],
                              [{"title":"SelectUsers","field":"SelectUsers",hidden:true}],
                              [{"title":"Last Modified","field":"emp_ename","disabled":true},
                               {"title":"Modified Date","field":"modified_date","disabled":true}]]);
            const searchFormFields = ref({"start_date":"","end_date":""});
            const searchFormOptions = ref([[{"title":"Start Date","field":"start_date"},{"title":"End Date","field":"end_date"}]]);
            const columns = ref([{field:'bulletin_dbid',title:'列名bulletin_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
                       {field:'created_user',title:'列名created_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_client',title:'列名created_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'列名created_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'modified_user',title:'列名modified_user',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_client',title:'列名modified_client',type:'int',width:110,hidden:true,align:'left'},
                       {field:'entity',title:'列名entity',type:'string',width:110,hidden:true,align:'left'},
                       {field:'subject',title:'Subject',type:'string',link:true,width:120,align:'left'},
                       {field:'content',title:'Content',type:'string',width:220,align:'left'},
                       {field:'start_date',title:'Start Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'end_date',title:'End Date',type:'datetime',width:110,align:'left',sort:true},
                       {field:'created_username',title:'Creator',type:'string',width:110,align:'left'},
                       {field:'users',title:'Users',type:'string',width:110,align:'left'},
                       {field:'type',title:'列名type',type:'string',width:110,hidden:true,align:'left'},
                       {field:'emp_cname',title:'列名emp_cname',type:'string',width:110,hidden:true,align:'left'},
                       {field:'emp_ename',title:'Last Modified',type:'string',width:110,readonly:true,align:'left'},
                       {field:'modified_date',title:'Modified Date',type:'datetime',width:110,readonly:true,align:'left',sort:true},
                       {field:'user_id1',title:'列名user_id1',type:'int',width:110,hidden:true,align:'left'},
                       {field:'r_user_id',title:'列名r_user_id',type:'int',width:80,hidden:true,align:'left'},
                       {field:'modified_clientusername',title:'列名modified_clientusername',hidden:true,type:'string',width:110,align:'left'},
                       {field:'modified_username',title:'列名modified_username',type:'string',hidden:true,width:110,align:'left'},
                       {field:'created_clientusername',title:'列名created_clientusername',type:'string',hidden:true,width:110,align:'left'},
                       {field:'r_status',title:'列名r_status',type:'string',width:110,hidden:true,align:'left'},
                       {field:'dbid',title:'列名dbid',type:'long',width:80,require:true,hidden:true,align:'left'}]);
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
