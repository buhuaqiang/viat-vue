<template>

    <div style="padding-left: 10px;">
      <el-form>
        <div class=" view-header">
          <div class="desc-text" ><i class="el-icon-s-grid"></i>
            <span class="el-submenu__title">Bid Order Transfer</span></div>
        </div>
        <!-- vol-table配置的这些属性见VolTable组件api文件 -->
        <vol-table
                ref="orderTable"
                :loadKey="true"
                :clickEdit="true"
                :columns="orderTableColumns"
                :pagination-hide="true"
                :single="false"
                :max-height="400"
                :url=table2Url
                :defaultLoadPage="false"
                @loadBefore="loadTableBefore2"
                @loadAfter="loadTableAfter"
                :index="true"
                @rowClick = "orderRowClick"
        ></vol-table>
    <el-form-item   label="Order Note:" style="padding-top:10px;width: 50%">
      <el-input type="textarea" v-model="formModel.order_note"  ></el-input>
    </el-form-item>
  </el-form>
  </div>
  <show-price ref="ShowPrice"></show-price>
</template>

<script>
import VolBox from "@/components/basic/VolBox.vue";
import VolTable from "@/components/basic/VolTable.vue";
import ShowPrice from "./showPrice";

export default {
  components: {
    ShowPrice,
    VolBox: VolBox,
    VolTable: VolTable,
  },
  props: {

  },
  data() {
    return {
      model: false,
      bid_no:"",
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
      formModel:{
        order_note:""
      },
      fieldName:"",//編輯字段,用於回傳設置值
      formType:"f",//弹框打开的form类型,f-editFormFields  s-searchFormFields
      url: "",//加载数据的接口

      table2Url: "api/view_cust_order_transfer/getOrderDataByBidNo",//?bidmast_dbid=" , //table1获取数据的接口 待補充
      orderTableRowData:"",
      orderTableColumns: [
        { field: "order_transfer_dbid", title: "主键ID", type: "guid", width: 80, hidden: true,isKey: true },
        {field:'state',title:'Status',type:'string',bind:{ key:'transfer_status',data:[]},width:110,align:'left',edit: { type: "select",keep:true }},
        {field:'prod_id',title:'Product Id',type:'string',width:110,require:true,align:'left',readonly:true},
        {field:'prod_ename',title:'Product Name',type:'string',width:110,align:'left',readonly:true},
        {field:'qty',title:'Qty', edit: { type: "number" ,keep:true},width:110,require:true,align:'left'},
        {field:'oper',title:''},
      ],

      pagination: {}, //分页配置，见voltable组件api
    };
  },
  created() {

  },
  methods: {

    openModel() {
      this.model = true;
      this.ck=false
      let $parent;
      //获取生成页面viewgrid的对象
      this.$emit("parentCall", ($this) => {
        $parent = $this;
      });
      this.bid_no= $parent.editFormFields.bid_no;

      this.clear();
      //当前如果是新建重置两个表格数据
      if ($parent.currentAction == "Add") {
        //add 默認不查詢
      } else {
        this.$refs.orderTable.load();
      }
      this.orderTableColumns.forEach(x => {
        if (x.field == 'oper') {
          //将eidt设置为null不开启编辑
          x.formatter = (row) => {
            return "<a style='cursor:pointer;color: #409eff'>Price</a>"
          }
          x.click = (row, column, event) => {
            this.openPrice(row.cust_id,row.prod_id);
          };
        }

      })
      this.orderTableRowData = this.$refs.orderTable.rowData;
    },
    openPrice(cust_id,prod_id){
      this.$refs.ShowPrice.openModel(true,cust_id,prod_id);
    },

    handleProdFormSelected(rows){

    },

    loadTableBefore2(param, callBack) {
      //添加从表的查询参数(条件)
      param.rows=100
      param.wheres.push({ name: "bid_no", value: this.bid_no });
      callBack(true);
    },


    clear() {
      this.$refs.orderTable.reset();
    },
    //这里是从api查询后返回数据的方法
    loadTableAfter(row) {
        this.orderTableRowData = row;
        return true;
    },

    orderRowClick({ row, column, event }) {
      //查询界面点击行事件
      this.$refs.orderTable.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
    },
    loadTableBefore(params) {
      //查询前，设置查询条件

      return true;
    },
  },
};
</script>
<style lang="less" scoped>
  .a-pop {
    color:#0c83ff;border-bottom: 1px solid;margin-left: 9px;font-size:12px;text-decoration:none;cursor: pointer
  }
  .a-clear{
    font-size:12px;text-decoration:none;color:red;border-bottom: 1px solid;margin-left: 9px;text-decoration:none;cursor: pointer
  }

  .el-form-item {
    margin-bottom: 10px;
  }

  .el-tag {
    --el-tag-font-size: 20px;
    --el-tag-border-radius: 4px;
    --el-tag-padding: 0 10px;
  }

</style>
