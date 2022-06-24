<!--
*Author：jxx
 *Contact：283591387@qq.com
 *代码由框架生成,任何更改都可能导致被代码生成器覆盖
 *业务请在@/extension/system/contract/View_app_power_contract_main.js此处编写
 -->
<template>
  <view-grid
    ref="grid"
    :columns="columns"
    :detail="detail"
    :editFormFields="editFormFields"
    :editFormOptions="editFormOptions"
    :searchFormFields="searchFormFields"
    :searchFormOptions="searchFormOptions"
    :table="table"
    :extend="extend"
  >
  </view-grid>
</template>
<script>
import extend from "@/extension/contract/contract/View_app_power_contract_main.js";
import { ref, defineComponent } from "vue";
export default defineComponent({
  setup() {
    const table = ref({
      key: "powercont_dbid",
      footer: "Foots",
      cnName: "GP合约主页面",
      name: "contract/View_app_power_contract_main",
      url: "/View_app_power_contract_main/",
      sortName: "contract_no",
    });
    const editFormFields = ref({
      contract_no: "",
      contract_type: "",
      accrue_amt: "",
      contract_term: "",
      rate: "",
      isgroup:"",
      pricegroup_dbid: "",
      cust_dbid: "",
      cust_id:"",
      group_id: "",
      start_date: "",
      end_date: "",
      close_date: "",
      allw_type: "",
      state: "",
    });
    const editFormOptions = ref([
      [
        {
          title: "列contract_no",
          //required: true,
          field: "contract_no",
          type: "text",
          disabled: true,

        },
        { title: "列accrue_amt", required: true,field: "accrue_amt", type: "decimal"},
        { title: "列rate", required: true,field: "rate", type: "decimal" },
        {
          dataKey: "GPDS_Contract_Type",
          required: true,
          data: [],
          title: "列contract_type",
          field: "contract_type",
          type: "select",
        },
      ],
      [
        { title: "列start_date",required: true, field: "start_date", type: "date" },

        { title: "列end_date", required: true,field: "end_date", type: "date" },
        { title: "列close_date" , field: "close_date", type: "date" },
      ],
      [
        {
          dataKey: "enable",
          data: [],
          title: "列名isgroup",
          field: "isgroup",
          type: "radio",
          required: true
        },
        { title: "pricegroup_dbid", field: "pricegroup_dbid" , align: "left",hidden: true},
        { title: "pricegroup", field: "group_name",readonly:true ,colSize:6, align: "left",required: true},
        { title: "cust_dbid", field: "cust_dbid" , align: "left",hidden: true},
        { title: "cust_id", field: "cust_id" , align: "left",hidden: true},
        { title: "custname", field: "cust_name", readonly:true,colSize:6,align: "left",required: true},
      ],
      [

        {
          dataKey: "FullAllwType",
          required: true,
          data: [],
          title: "列allw_type",
          field: "allw_type",
          type: "select",
        },
        {
          dataKey: "Contract_State",
          required: true,
          data: [],
          title: "列Contract_State",
          field: "state",
          type: "select",
        },
        { title: "列contract_term", field: "contract_term", type: "textarea", colSize:6 },
      ],
    ]);
    const searchFormFields = ref({
      contract_type: "",
      end_date: "",
      cust_id: "",
      territory_id: "",
      allw_type: "",
      close_date: "",
      state: "",
      pricegroup_dbid: "",
    });
    const searchFormOptions = ref([
      [
        { title: "列close_date", field: "close_date", type: "date" },
        { title: "列end_date", field: "end_date", type: "date" },
        { title: "列territory_id", field: "territory_id" },
      ],
      [
        {
          dataKey: "FullAllwType",
          data: [],
          title: "列allw_type",
          field: "allw_type",
          type: "select",
        },
        {
          dataKey: "GPDS_Contract_Type",
          data: [],
          title: "列contract_type",
          field: "contract_type",
          type: "select",
        },
        {
          dataKey: "Contract_State",
          data: [],
          title: "列Contract_State",
          field: "state",
          type: "select",
        },
      ],
      [
        { title: "列cust_id", field: "cust_dbidname" ,readonly:true},
        { title: "", field: "cust_dbid",hidden:true },
        { title: "列名pricegroup_dbid", field: "pricegroup_dbidname" ,readonly:true},
        { title: "", field: "pricegroup_dbid",hidden: true },
      ],
    ]);
    const columns = ref([
      {
        field: "dbid",
        title: "列dbid",
        type: "int",
        width: 110,
        hidden: true,
        require: true,
        align: "left",
      },
      {
        field: "entity",
        title: "列entity",
        type: "string",
        width: 110,
        hidden: true,
        align: "left",
      },
      {
        field: "division",
        title: "列division",
        type: "string",
        width: 110,
        hidden: true,
        align: "left",
      },
      {
        field: "C1",
        title: "Achieve",
        type: "string",
        width: 110,
        require: true,
        align: "left",
      },
      {
        field: "contract_no",
        title: "列contract_no",
        type: "string",
        link: true,
        width: 110,
        require: true,
        align: "left",
        sort: true,
      },
      {
        field: "start_date",
        title: "列start_date",
        type: "datetime",
        width: 110,
        align: "left",
        sort: true,
      },
      {
        field: "end_date",
        title: "列end_date",
        type: "datetime",
        width: 110,
        align: "left",
        sort: true,
      },
      {
        field: "cust_id",
        title: "列cust_id",
        type: "string",
        width: 110,
        align: "left",
      },
      {
        field: "cust_name",
        title: "列cust_name",
        type: "string",
        width: 120,
        align: "left",
      },
      {
        field: "territory_id",
        title: "列territory_id",
        type: "string",
        width: 110,
        align: "left",
      },
      {
        field: "contract_type",
        title: "列contract_type",
        type: "string",
        bind: { key: "GPDS_Contract_Type", data: [] },
        width: 110,
        align: "left",
      },
      {
        field: "allw_type",
        title: "列allw_type",
        type: "int",
        bind: { key: "FullAllwType", data: [] },
        width: 110,
        align: "left",
      },
      {
        field: "est_months",
        title: "列est_months",
        type: "int",
        width: 110,
        hidden: true,
        align: "left",
      },
      {
        field: "accrue_amt",
        title: "列accrue_amt",
        type: "decimal",
        width: 110,
        hidden: true,
        align: "left",
      },
      {
        field: "sales_amt",
        title: "列sales_amt",
        type: "decimal",
        width: 110,
        hidden: true,
        align: "left",
      },
      {
        field: "contract_term",
        title: "列contract_term",
        type: "string",
        width: 110,
        hidden: true,
        align: "left",
      },
      {
        field: "state",
        title: "列Contract_State",
        type: "string",
        bind: { key: "Contract_State", data: [] },
        width: 220,
        align: "left",
      },
      {
        field: "close_date",
        title: "列close_date",
        type: "datetime",
        width: 110,
        align: "left",
        sort: true,
        // formatter: (row) => {
        //   //对单元格的数据格式化处理
        //   if (!row.FormatString) {
        //     return;
        //   }
        //   return row.FormatString.replace(/-/g, "-");
        // },
      },
      {
        field: "close_date2",
        title: "列close_date2",
        type: "datetime",
        width: 110,
        hidden: true,
        align: "left",
        sort: true,
      },
      {
        field: "trans_start_date",
        title: "列trans_start_date",
        type: "datetime",
        width: 110,
        hidden: true,
        align: "left",
        sort: true,
      },
      {
        field: "trans_end_date",
        title: "列trans_end_date",
        type: "datetime",
        width: 110,
        hidden: true,
        align: "left",
        sort: true,
      },
      {
        field: "rate",
        title: "列rate",
        type: "decimal",
        width: 110,
        hidden: true,
        align: "left",
      },
      {
        field: "total_fg_amount",
        title: "列total_fg_amount",
        type: "decimal",
        width: 110,
        hidden: true,
        align: "left",
      },
      {
        field: "group_name",
        title: "列group_name",
        type: "string",
        width: 120,
        hidden: true,
        align: "left",
      },
      {
        field: "modified_date",
        title: "列名modified_date",
        type: "datetime",
        width: 150,
        hidden: true,
        align: "left",
        sort: true,
      },
      {
        field: "modified_client",
        title: "列名modified_client",
        type: "int",
        width: 80,
        hidden: true,
        align: "left",
      },
      {
        field: "modified_user",
        title: "列名modified_user",
        type: "int",
        width: 80,
        hidden: true,
        align: "left",
      },
      {
        field: "created_date",
        title: "列名created_date",
        type: "datetime",
        width: 150,
        align: "left",
        sort: true,
      },
      {
        field: "created_client",
        title: "列名created_client",
        type: "int",
        width: 80,
        hidden: true,
        align: "left",
      },
      {
        field: "created_user",
        title: "列名created_user",
        type: "int",
        width: 80,
        hidden: true,
        align: "left",
      },
      {
        field: "pricegroup_dbid",
        title: "列名pricegroup_dbid",
        type: "guid",
        width: 110,
        hidden: true,
        align: "left",
      },
      {
        field: "cust_dbid",
        title: "列名cust_dbid",
        type: "guid",
        width: 110,
        hidden: true,
        readonly: true,
        align: "left",
      },
      {
        field: "group_id",
        title: "列名group_id",
        type: "string",
        bind: { key: "enable", data: [] },
        width: 110,
        hidden: true,
        align: "left",
      },
      {
        field: "isgroup",
        title: "列名isgroup",
        type: "string",
        bind: { key: "enable", data: [] },
        width: 110,
        hidden: true,
        align: "left",
      },
      {
        field: "powercont_dbid",
        title: "列名powercont_dbid",
        type: "guid",
        width: 110,
        hidden: true,
        require: true,
        align: "left",
      },
      {
        field: "Contract_State",
        title: "Contract_State",
        type: "string",
        width: 220,
        hidden: true,
        align: "left",
      },
      {
        field: "GPDS_Contract_Type",
        title: "GPDS_Contract_Type",
        type: "string",
        width: 220,
        hidden: true,
        align: "left",
      },
    ]);
    const detail = ref({
      cnName: "#detailCnName",
      table: "#detailTable",
      columns: [],
      sortName: "",
      key: "",
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
