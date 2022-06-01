<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/cust/Viat_com_cust.js此处编写
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
    import extend from "@/extension/basic/cust/Viat_com_cust.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'cust_id',
                footer: "Foots",
                cnName: '客戶基本信息',
                name: 'cust/Viat_com_cust',
                url: "/Viat_com_cust/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"cust_code":"","cust_name":"","cust_address":"","invoice_name":"","invoice_address":"","owner":"","tax_id":"","contact":"","tel_no":"","fax_no":"","email":"","territory_id":"","doh_institute_no":"","ctrl_drug_no":"","ctrl_drug_contact":"","doh_type":"","margin_type":"","is_contract":"","is_private":"","own_by_hospital":"","own_hospital":"","inactive_date":"","status":"","med_group":"","delv_group":"","new_cust_id":"","remarks":"","Creator":"","CreateDate":"","ModifyDate":"","Modifier":""});
            const editFormOptions = ref([[{"title":"客戶編碼","required":true,"field":"cust_code","disabled":true,"type":"text"}],
                              [{"title":"客戶名稱","required":true,"field":"cust_name","type":"text"}],
                              [{"title":"客戶地址","required":true,"field":"cust_address","colSize":10,"type":"text"}],
                              [{"title":"發票抬頭","required":true,"field":"invoice_name","type":"text"}],
                              [{"title":"發票地址","required":true,"field":"invoice_address","colSize":10}],
                              [{"title":"負責人","required":true,"field":"owner"},
                               {"title":"統一編號","field":"tax_id"}],
                              [{"title":"聯絡人","field":"contact"},
                               {"title":"電話號碼","required":true,"field":"tel_no"}],
                              [{"title":"傳真號碼","field":"fax_no"},
                               {"title":"電子郵箱","field":"email"}],
                              [{"title":"預設業代分區","field":"territory_id"}],
                              [{"title":"健保機構代碼","field":"doh_institute_no"},
                               {"title":"管制藥品認證代碼","field":"ctrl_drug_no"}],
                              [{"dataKey":"doh_type","data":[],"title":"健保類別","required":true,"field":"doh_type","type":"select"},
                               {"title":"管制藥品聯絡人","field":"ctrl_drug_contact"}],
                              [{"dataKey":"doh_type","data":[],"title":"毛利類別","field":"margin_type","type":"select"},
                               {"dataKey":"Status3","data":[],"title":"是否為合約客戶","field":"is_contract","type":"select"}],
                              [{"dataKey":"Status3","data":[],"title":"是否為私立","field":"is_private","type":"select"},
                               {"dataKey":"Status3","data":[],"title":"是否為門前藥局/診所","field":"own_by_hospital","type":"select"},
                               {"title":"隸屬醫院代碼","field":"own_hospital"}],
                              [{"title":"失效日期","field":"inactive_date","type":"date"},
                               {"dataKey":"status","data":[],"title":"是否有效","field":"status","type":"select"}],
                              [{"title":"隸書體系主院代碼","field":"med_group"},
                               {"title":"統一寄送至醫院代碼","field":"delv_group"}],
                              [{"title":"新客戶代碼","field":"new_cust_id"}],
                              [{"title":"備註","field":"remarks","colSize":10,"type":"textarea"}],
                              [{"title":"Created user","field":"Creator"},
                               {"title":"Created date","field":"CreateDate","type":"datetime"}],
                              [{"title":"Updated user","field":"Modifier"},
                               {"title":"Updated date","field":"ModifyDate","type":"datetime"}]]);
            const searchFormFields = ref({"cust_code":""});
            const searchFormOptions = ref([[{"title":"客戶編碼","field":"cust_code","type":"like"}]]);
            const columns = ref([{field:'cust_id',title:'客戶id',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'cust_code',title:'客戶編碼',type:'string',link:true,width:110,readonly:true,require:true,align:'left',sort:true},
                       {field:'cust_name',title:'客戶名稱',type:'string',width:120,require:true,align:'left'},
                       {field:'cust_address',title:'客戶地址',type:'string',width:180,require:true,align:'left'},
                       {field:'invoice_name',title:'發票抬頭',type:'string',width:120,hidden:true,require:true,align:'left'},
                       {field:'invoice_address',title:'發票地址',type:'string',width:180,hidden:true,require:true,align:'left'},
                       {field:'owner',title:'負責人',type:'string',width:120,hidden:true,require:true,align:'left'},
                       {field:'tax_id',title:'統一編號',type:'string',width:110,hidden:true,align:'left'},
                       {field:'contact',title:'聯絡人',type:'string',width:120,hidden:true,align:'left'},
                       {field:'tel_no',title:'電話號碼',type:'string',width:110,require:true,align:'left'},
                       {field:'fax_no',title:'傳真號碼',type:'string',width:110,hidden:true,align:'left'},
                       {field:'email',title:'電子郵箱',type:'string',width:110,hidden:true,align:'left'},
                       {field:'territory_id',title:'預設業代分區',type:'string',width:110,align:'left'},
                       {field:'doh_institute_no',title:'健保機構代碼',type:'string',width:110,hidden:true,align:'left'},
                       {field:'ctrl_drug_no',title:'管制藥品認證代碼',type:'string',width:110,hidden:true,align:'left'},
                       {field:'ctrl_drug_contact',title:'管制藥品聯絡人',type:'string',width:120,hidden:true,align:'left'},
                       {field:'doh_type',title:'健保類別',type:'string',bind:{ key:'doh_type',data:[]},width:110,require:true,align:'left'},
                       {field:'zip_id',title:'郵區代碼',type:'string',width:110,hidden:true,align:'left'},
                       {field:'bmp_zip_id',title:'郵區代碼',type:'string',width:110,hidden:true,align:'left'},
                       {field:'margin_type',title:'毛利類別',type:'string',bind:{ key:'doh_type',data:[]},width:110,align:'left'},
                       {field:'is_contract',title:'是否為合約客戶',type:'bool',bind:{ key:'Status3',data:[]},width:110,hidden:true,align:'left'},
                       {field:'is_private',title:'是否為私立',type:'bool',bind:{ key:'Status3',data:[]},width:110,hidden:true,align:'left'},
                       {field:'own_by_hospital',title:'是否為門前藥局/診所',type:'bool',bind:{ key:'Status3',data:[]},width:110,hidden:true,align:'left'},
                       {field:'own_hospital',title:'隸屬醫院代碼',type:'string',width:110,hidden:true,align:'left'},
                       {field:'med_group',title:'隸書體系主院代碼',type:'string',width:110,hidden:true,align:'left'},
                       {field:'delv_group',title:'統一寄送至醫院代碼',type:'string',width:110,hidden:true,align:'left'},
                       {field:'new_cust_id',title:'新客戶代碼',type:'string',width:110,hidden:true,align:'left'},
                       {field:'inactive_date',title:'失效日期',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'status',title:'是否有效',type:'string',bind:{ key:'status',data:[]},width:110,align:'left'},
                       {field:'remarks',title:'備註',type:'string',width:220,hidden:true,align:'left'},
                       {field:'source',title:'資料來源',type:'string',width:110,hidden:true,align:'left'},
                       {field:'accnt_code',title:'accnt_code',type:'string',width:110,hidden:true,align:'left'},
                       {field:'ModifierClient',title:'ModifierClient',type:'string',width:220,hidden:true,align:'left'},
                       {field:'CreateClient',title:'CreateClient',type:'string',width:220,hidden:true,align:'left'},
                       {field:'CreateClientID',title:'CreateClientID',type:'int',width:80,hidden:true,align:'left'},
                       {field:'ModifyID',title:'ModifyID',type:'int',width:80,hidden:true,align:'left'},
                       {field:'ModifyDate',title:'Updated date',type:'datetime',width:150,align:'left',sort:true},
                       {field:'Modifier',title:'Updated user',type:'string',width:130,hidden:true,align:'left'},
                       {field:'Creator',title:'Created user',type:'string',width:130,hidden:true,align:'left'},
                       {field:'CreateID',title:'CreateID',type:'int',width:80,hidden:true,align:'left'},
                       {field:'ModifierClientID',title:'ModifierClientID',type:'int',width:80,hidden:true,align:'left'},
                       {field:'CreateDate',title:'Created date',type:'datetime',width:150,hidden:true,align:'left',sort:true}]);
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
