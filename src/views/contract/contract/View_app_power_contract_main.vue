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
    :load="false"
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
      cnName: "GP/DS Master",
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
      bu_id:""
    });
    const editFormOptions = ref([
      [
        {
          title: "Contract No",
          //required: true,
          field: "contract_no",
          type: "text",
          disabled: true,

        },
        { title: "Accrue Amt", required: true,field: "accrue_amt", type: "decimal"},
        { title: "Rate", required: true,field: "rate", type: "decimal" },
        {
          dataKey: "GPDS_Contract_Type",
          required: true,
          data: [],
          title: "Contract Type",
          field: "contract_type",
          type: "select",
        },
      ],
      [
        { title: "Start Date",required: true, field: "start_date", type: "date" },

        { title: "End Date", required: true,field: "end_date", type: "date" },
        { title: "Close Date" , field: "close_date", type: "date" },
        {dataKey:"LocalBu","data":[],title:"Bu ID",field:"bu_id",type:"select"}
      ],
      [
        {
          dataKey: "CustomerType",
          data: [],
          title: "Customer Type",
          field: "isgroup",
          type: "radio",
          required: true
        },
        { title: "pricegroup_dbid", field: "pricegroup_dbid" , align: "left",hidden: true},
        { title: "Group ID", field: "group_id",colSize:6, align: "left",required: true},
        { title: "Group Name", field: "group_name", align: "left",hidden: true},
        { title: "cust_dbid", field: "cust_dbid" , align: "left",hidden: true},
        { title: "Customer ID", field: "cust_id",colSize:6,align: "left",required: true},
        { title: "Customer Name", field: "cust_name", align: "left",hidden: true},
      ],
      [

        {
          dataKey: "FullAllwType",
          required: true,
          data: [],
          title: "Allowance Type",
          field: "allw_type",
          type: "select",
        },
        {
          dataKey: "Contract_State",
          required: true,
          data: [],
          title: "Contract State",
          field: "state",
          type: "select",
        },
        { title: "Remark", field: "contract_term", type: "textarea", colSize:6 },
      ],
    ]);
    const searchFormFields = ref({
      contract_type: "",
      end_date: "",
      cust_dbid: "",
      territory_id: "",
      allw_type: "",
      close_date: "",
      state: "",
      pricegroup_dbid: "",
      bu_id:""
    });
    const searchFormOptions = ref([
      [
        { title: "Close Date", field: "close_date", type: "date" },
        { title: "End Date", field: "end_date", type: "date" },


      ],[
        { title: "Zone", field: "territory_id" },
        {
          dataKey: "Contract_State",
          data: [],
          title: "Contract State",
          field: "state",
          type: "select",
        },
      ],
      [ {
        dataKey: "FullAllwType",
        data: [],
        title: "Allowance Type",
        field: "allw_type",
        type: "select",
        },  {
        dataKey: "GPDS_Contract_Type",
        data: [],
        title: "Contract Type",
        field: "contract_type",
        type: "select",
       },
      ],
      [
        { title: "Customer", field: "cust_id"},
        { title: "", field: "cust_dbid",hidden:true},
        { title: "Group", field: "group_id" },
        { title: "", field: "pricegroup_dbid",hidden: true },
      ],
        [
          {dataKey:"LocalBu",data:[],title:"Bu ID",field:"bu_id",type:"select"}
        ]

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
        title: "Entity",
        type: "string",
        width: 110,
        hidden: true,
        align: "left",
      },
      {
        field: "division",
        title: "Division",
        type: "string",
        width: 110,
        hidden: true,
        align: "left",
      },
      {
        field: "C1",
        title: "Achieve",
        type: "string",
        width: 80,
        require: true,
        align: "left",
      },
      {
        field: "contract_no",
        title: "Contract no",
        type: "string",
        link: true,
        width: 110,
        require: true,
        align: "left",
        sort: true,
      },
      {
        field: "start_date",
        title: "Start date",
        type: "datetime",
        width: 80,
        align: "left",
        sort: true,
      },
      {
        field: "end_date",
        title: "End date",
        type: "datetime",
        width: 80,
        align: "left",
        sort: true,
      },
      {
        field: "cust_id",
        title: "Cust Id",
        type: "string",
        width: 110,
        align: "left",
      },
      {
        field: "cust_name",
        title: "Customer Name",
        type: "string",
        width: 120,
        align: "left",
      },
      {
        field: "territory_id",
        title: "Zone",
        type: "string",
        width: 110,
        align: "left",
      },
      {
        field: "contract_type",
        title: "Contract Type",
        type: "string",
        bind: { key: "GPDS_Contract_Type", data: [] },
        width: 110,
        align: "left",
      },
      {
        field: "allw_type",
        title: "Allowance Type",
        type: "int",
        bind: { key: "FullAllwType", data: [] },
        width: 110,
        align: "left",
      },
      {
        field: "est_months",
        title: "Est Months",
        type: "int",
        width: 110,
        hidden: true,
        align: "left",
      },
      {
        field: "accrue_amt",
        title: "Accrue Amt",
        type: "decimal",
        width: 110,
        hidden: true,
        align: "right",
      },
      {
        field: "sales_amt",
        title: "Sales Amt",
        type: "decimal",
        width: 110,
        hidden: true,
        align: "right",
      },
      {
        field: "contract_term",
        title: "Contract term",
        type: "string",
        width: 110,
        hidden: true,
        align: "left",
      },
      {
        field: "state",
        title: "Contract State",
        type: "string",
        bind: { key: "Contract_State", data: [] },
        width: 110,
        align: "left",
      },
      {
        field: "close_date",
        title: "Close Date",
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
        title: "Rate",
        type: "decimal",
        width: 110,
        hidden: true,
        align: "right",
      },
      {
        field: "total_fg_amount",
        title: "列total_fg_amount",
        type: "decimal",
        width: 110,
        hidden: true,
        align: "right",
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
        title: "Created Date",
        type: "datetime",
        width: 150,
        align: "left",
        sort: true,
      },
      {
        field: "created_client",
        title: "Created Client",
        type: "int",
        width: 80,
        hidden: true,
        align: "left",
      },
      {
        field: "created_user",
        title: "Created User",
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
      {
        field:'bu_id',
        title:'Bu ID',
        type:'string',
        bind:{ key:'LocalBu',data:[]},
        width:110,
        align:'left'},
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
