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
                key: 'cust_dbid',
                footer: "Foots",
                cnName: '客戶基本信息',
                name: 'cust/Viat_com_cust',
                url: "/Viat_com_cust/",
                sortName: "CreateDate"
            });
            const editFormFields = ref({"cust_id":"","cust_name":"","cust_address":"","zip_id":"","invoice_name":"","invoice_address":"","bmp_zip_id":"","owner":"","tax_id":"","contact":"","tel_no":"","fax_no":"","email":"","territory_id":"","doh_institute_no":"","ctrl_drug_no":"","ctrl_drug_contact":"","margin_type":"","is_contract":"","doh_type":"","is_private":"","own_by_hospital":"","own_hospital":"","inactive_date":"","status":"","med_group":"","delv_group":"","new_cust_id":"","remarks":""});
            const editFormOptions = ref([[{"title":"客戶編號","required":true,"field":"cust_id"}],
                              [{"title":"客戶名稱","field":"cust_name","type":"text"}],
                              [{"dataKey":"viat_city_zone","data":[],"title":"客戶地址郵區代碼","field":"zip_id","type":"select"},
                               {"title":"客戶地址","field":"cust_address","colSize":6,"type":"text"}],
                              [{"title":"發票抬頭","field":"invoice_name","type":"text"}],
                              [{"dataKey":"viat_city_zone","data":[],"title":"郵寄郵區代碼","field":"bmp_zip_id","type":"select"},
                               {"title":"發票地址","field":"invoice_address","colSize":6}],
                              [{"title":"負責人","field":"owner"},
                               {"title":"統一編號","field":"tax_id"}],
                              [{"title":"聯絡人","field":"contact"},
                               {"title":"電話號碼","field":"tel_no"}],
                              [{"title":"傳真號碼","field":"fax_no"},
                               {"title":"電子郵箱","field":"email"}],
                              [{"title":"預設業代分區","field":"territory_id"}],
                              [{"title":"健保機構代碼","field":"doh_institute_no"},
                               {"title":"管制藥品認證代碼","field":"ctrl_drug_no"}],
                              [{"title":"管制藥品聯絡人","field":"ctrl_drug_contact"}],
                              [{"dataKey":"doh_type","data":[],"title":"毛利類別","field":"margin_type","type":"select"},
                               {"dataKey":"Status_YN","data":[],"title":"是否為合約客戶","field":"is_contract","type":"select"},
                               {"dataKey":"doh_type","data":[],"title":"健保類別","field":"doh_type","type":"select"}],
                              [{"dataKey":"Status_YN","data":[],"title":"是否為私立","field":"is_private","type":"select"},
                               {"dataKey":"Status_YN","data":[],"title":"是否為門前藥局/診所","field":"own_by_hospital","type":"select"},
                               {"title":"隸屬醫院代碼","field":"own_hospital"}],
                              [{"title":"失效日期","field":"inactive_date","type":"date"},
                               {"dataKey":"Status2","data":[],"title":"是否有效","field":"status","type":"select"}],
                              [{"title":"隸書體系主院代碼","field":"med_group"},
                               {"title":"統一寄送至醫院代碼","field":"delv_group"}],
                              [{"title":"新客戶代碼","field":"new_cust_id"}],
                              [{"title":"備註","field":"remarks","colSize":10,"type":"textarea"}]]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'cust_id',title:'客戶編號',type:'string',link:true,width:110,require:true,align:'left',sort:true},
                       {field:'cust_name',title:'客戶名稱',type:'string',width:120,align:'left'},
                       {field:'cust_address',title:'客戶地址',type:'string',width:180,align:'left'},
                       {field:'invoice_name',title:'發票抬頭',type:'string',width:120,hidden:true,align:'left'},
                       {field:'invoice_address',title:'發票地址',type:'string',width:180,hidden:true,align:'left'},
                       {field:'owner',title:'負責人',type:'string',width:120,hidden:true,align:'left'},
                       {field:'tax_id',title:'統一編號',type:'string',width:110,hidden:true,align:'left'},
                       {field:'contact',title:'聯絡人',type:'string',width:120,hidden:true,align:'left'},
                       {field:'tel_no',title:'電話號碼',type:'string',width:110,align:'left'},
                       {field:'fax_no',title:'傳真號碼',type:'string',width:110,hidden:true,align:'left'},
                       {field:'email',title:'電子郵箱',type:'string',width:110,hidden:true,align:'left'},
                       {field:'territory_id',title:'預設業代分區',type:'string',width:110,align:'left'},
                       {field:'doh_institute_no',title:'健保機構代碼',type:'string',width:110,hidden:true,align:'left'},
                       {field:'ctrl_drug_no',title:'管制藥品認證代碼',type:'string',width:110,hidden:true,align:'left'},
                       {field:'ctrl_drug_contact',title:'管制藥品聯絡人',type:'string',width:120,hidden:true,align:'left'},
                       {field:'margin_type',title:'毛利類別',type:'string',bind:{ key:'doh_type',data:[]},width:110,align:'left'},
                       {field:'is_contract',title:'是否為合約客戶',type:'string',bind:{ key:'Status_YN',data:[]},width:110,hidden:true,align:'left'},
                       {field:'is_private',title:'是否為私立',type:'string',bind:{ key:'Status_YN',data:[]},width:110,hidden:true,align:'left'},
                       {field:'own_by_hospital',title:'是否為門前藥局/診所',type:'string',bind:{ key:'Status_YN',data:[]},width:110,hidden:true,align:'left'},
                       {field:'own_hospital',title:'隸屬醫院代碼',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'med_group',title:'隸書體系主院代碼',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'delv_group',title:'統一寄送至醫院代碼',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'new_cust_id',title:'新客戶代碼',type:'string',width:110,hidden:true,align:'left'},
                       {field:'inactive_date',title:'失效日期',type:'datetime',width:110,hidden:true,align:'left',sort:true},
                       {field:'status',title:'是否有效',type:'string',bind:{ key:'Status2',data:[]},width:110,align:'left'},
                       {field:'remarks',title:'備註',type:'string',width:220,hidden:true,align:'left'},
                       {field:'source',title:'資料來源',type:'string',width:110,hidden:true,align:'left'},
                       {field:'accnt_code',title:'accnt_code',type:'string',width:110,hidden:true,align:'left'},
                       {field:'doh_type',title:'健保類別',type:'string',bind:{ key:'doh_type',data:[]},width:110,align:'left'},
                       {field:'zip_id',title:'客戶地址郵區代碼',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,align:'left'},
                       {field:'bmp_zip_id',title:'郵寄郵區代碼',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:150,align:'left',sort:true},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:80,align:'left'},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:80,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:150,align:'left',sort:true},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:80,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:80,align:'left'},
                       {field:'cust_dbid',title:'主鍵',type:'guid',width:110,hidden:true,require:true,align:'left'}]);
            const detail = ref({
                cnName: "客戶送貨資訊",
                table: "Viat_com_cust_delivery",
                columns: [{field:'delivery_dbid',title:'ID',type:'guid',width:110,hidden:true,readonly:true,require:true,align:'left'},
                       {field:'cust_dbid',title:'客戶代碼',type:'guid',width:110,hidden:true,align:'left'},
                       {field:'zip_id',title:'郵區代碼',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,edit:{type:'select'},align:'left',sort:true},
                       {field:'seq_no',title:'序號',type:'decimal',width:110,edit:{type:'number'},align:'left'},
                       {field:'delivery_name',title:'送貨抬頭',type:'string',width:120,edit:{type:''},align:'left'},
                       {field:'delivery_contact',title:'聯絡人',type:'string',width:120,edit:{type:''},align:'left'},
                       {field:'delivery_tel_no',title:'聯絡人電話',type:'string',width:110,edit:{type:''},align:'left'},
                       {field:'delivery_addr',title:'送貨地址',type:'string',width:180,edit:{type:''},align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:110,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:110,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:110,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:110,hidden:true,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:110,align:'left',sort:true}],
                sortName: "created_date",
                key: "delivery_dbid"
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
