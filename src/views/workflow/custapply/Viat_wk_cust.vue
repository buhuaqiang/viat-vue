<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/custapply/Viat_wk_cust.js此处编写
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
    import extend from "@/extension/workflow/custapply/Viat_wk_cust.js";
    import { ref, defineComponent } from "vue";
    export default defineComponent({
        setup() {
            const table = ref({
                key: 'wkcust_dbid',
                footer: "Foots",
                cnName: 'viat_wk_cust_合約客戶',
                name: 'custapply/Viat_wk_cust',
                url: "/Viat_wk_cust/",
                sortName: "created_date"
            });
            const editFormFields = ref({});
            const editFormOptions = ref([]);
            const searchFormFields = ref({});
            const searchFormOptions = ref([]);
            const columns = ref([{field:'wkcust_dbid',title:'主鍵',type:'guid',width:110,require:true,align:'left',sort:true},
                       {field:'email',title:'電子郵箱',type:'string',width:110,align:'left'},
                       {field:'fax_no',title:'傳真號碼',type:'string',width:110,align:'left'},
                       {field:'remarks',title:'備註',type:'string',width:220,align:'left'},
                       {field:'source',title:'資料來源,0:EBMS;1:Distributor;2:Manual',type:'string',width:110,align:'left'},
                       {field:'accnt_code',title:'accnt_code',type:'string',width:110,align:'left'},
                       {field:'own_hospital',title:'門前藥局/診所隸屬醫院代碼',type:'guid',width:110,align:'left'},
                       {field:'med_group',title:'隸屬體系主院代碼',type:'guid',width:110,align:'left'},
                       {field:'own_by_hospital',title:'是否為門前藥局/診所',type:'string',width:110,align:'left'},
                       {field:'delv_group',title:'統一寄送至醫院代碼',type:'guid',width:110,align:'left'},
                       {field:'is_contract',title:'是否為合約客戶',type:'string',width:110,align:'left'},
                       {field:'created_user',title:'建立用戶',type:'int',width:80,align:'left'},
                       {field:'created_username',title:'建立用戶',type:'string',width:110,align:'left'},
                       {field:'created_client',title:'建立者的委託人',type:'int',width:80,align:'left'},
                       {field:'created_clientusername',title:'建立者的委託人',type:'string',width:110,align:'left'},
                       {field:'created_date',title:'建立時間',type:'datetime',width:150,align:'left',sort:true},
                       {field:'modified_user',title:'最後修改用戶',type:'int',width:80,align:'left'},
                       {field:'modified_username',title:'最後修改用戶',type:'string',width:110,align:'left'},
                       {field:'modified_client',title:'最後修改者的委託人',type:'int',width:80,align:'left'},
                       {field:'ctrl_drug_contact',title:'管制藥品聯絡人',type:'string',width:120,align:'left'},
                       {field:'ctrl_drug_no',title:'管制藥品認證代碼',type:'string',width:110,align:'left'},
                       {field:'delivery_addr',title:'送貨地址',type:'string',width:220,align:'left'},
                       {field:'delivery_zip_id',title:'送貨地址郵區',type:'string',width:110,align:'left'},
                       {field:'bidmast_dbid',title:'bidmast_dbid',type:'guid',width:110,align:'left'},
                       {field:'ctype',title:'ctype',type:'string',width:110,align:'left'},
                       {field:'cust_id',title:'客戶代碼',type:'string',width:110,align:'left'},
                       {field:'territory_id',title:'預設業代區域',type:'string',width:110,align:'left'},
                       {field:'cust_name',title:'客戶名稱',type:'string',width:110,align:'left'},
                       {field:'cust_zip_id',title:'客戶地址郵區',type:'string',width:110,align:'left'},
                       {field:'cust_address',title:'客戶地址',type:'string',width:220,align:'left'},
                       {field:'owner',title:'負責人',type:'string',width:120,align:'left'},
                       {field:'tax_id',title:'統一編號',type:'string',width:110,align:'left'},
                       {field:'modified_clientusername',title:'最後修改者的委託人',type:'string',width:110,align:'left'},
                       {field:'doh_type',title:'健保類別',type:'string',width:110,align:'left'},
                       {field:'is_private',title:'是否為私立',type:'string',width:110,align:'left'},
                       {field:'invoice_type',title:'category: InvoiceType  2 聯  3 聯',type:'string',width:110,align:'left'},
                       {field:'invoice_zip_id',title:'(發票地址郵區)',type:'string',width:110,align:'left'},
                       {field:'invoice_name',title:'發票抬頭',type:'string',width:110,align:'left'},
                       {field:'invoice_address',title:'發票地址',type:'string',width:220,align:'left'},
                       {field:'contact',title:'聯絡人',type:'string',width:120,align:'left'},
                       {field:'tel_no',title:'電話號碼',type:'string',width:110,align:'left'},
                       {field:'delivery_contact',title:'聯絡人',type:'string',width:110,align:'left'},
                       {field:'delivery_tel_no',title:'聯絡人電話',type:'string',width:110,align:'left'},
                       {field:'doh_institute_no',title:'健保機構代碼',type:'string',width:110,align:'left'},
                       {field:'modified_date',title:'最後修改時間',type:'datetime',width:150,align:'left',sort:true}]);
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
