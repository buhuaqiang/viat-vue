<template>
<div style="padding-left: 5px;">
  <el-form :inline="true" label-position="right" label-width="110px" :model="formModel">

      <div class=" view-header">
        <div class="desc-text" ><i class="el-icon-s-grid"></i>
          <span class="el-submenu__title">Bid Price Transfer</span></div>
      </div>
        <!-- vol-table配置的这些属性见VolTable组件api文件 -->
        <vol-table
                ref="priceTable"
                :loadKey="true"
                :clickEdit="false"
                :columns="columns"
                :pagination-hide="true"
                :single="false"
                :max-height="400"
                :url=table1Url
                :defaultLoadPage="true"
                @loadBefore="loadTableBefore1"
                @loadAfter="loadTableAfter1"
                :index="true"
                @rowClick = "priceRowClick"
        ></vol-table>

      <el-form-item   label="Price Note:" style="padding-top:10px;width: 50%">
        <el-input type="textarea" v-model="formModel.price_note"  ></el-input>
      </el-form-item>
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
              @loadAfter="loadTableAfter2"
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
        price_note:"",
        order_note:""
      },
      fieldName:"",//編輯字段,用於回傳設置值
      formType:"f",//弹框打开的form类型,f-editFormFields  s-searchFormFields
      url: "",//加载数据的接口
      table1Url: "api/View_cust_price_transfer/GetPageData",//?bidmast_dbid=" , //table1获取数据的接口
      table2Url: "api/view_cust_order_transfer/getOrderDataByBidNo",//?bidmast_dbid=" , //table1获取数据的接口 待補充

      priceTableRowData:"",
      orderTableRowData:"",
      columns: [
        { field: "price_transfer_dbid", title: "PKID", type: "guid", width: 80, hidden: true,isKey: true },
        {field:'state',title:'Status',type:'string',bind:{ key:'transfer_status',data:[]},width:70,align:'left',edit: { type: "select",keep:true }},
        {field:'prod_id',title:'Product Id',type:'string',width:80,require:true,align:'left'},
        {field:'prod_ename',title:'Product Name',type:'string',width:120,align:'left'},
        {field:'nhi_price',title:'NHI Price',type:'decimal',width:80,readonly:true,require:true,align:'right'},
        {field:'invoice_price',title:'Invoice Price',edit: { type: "decimal",keep:true },width:80,require:true,align:'right'},
        {field:'net_price',title:'Old Price',width:80,require:true,align:'right'},
        {field:'price_bid',title:'Apply Price',width:80,require:true,align:'right'},
        {field:'min_qty',title:'Min Qty',edit: { type: "number",keep:true },width:80,require:true,align:'right'},
        {field:'price_close',title:'Approved Price',width:80,require:true,align:'right'},
        {field:'final_fg',title:'FG%',type:'decimal',width:50,align:'right'},
        {field:'final_discount',title:'DIS%',type:'decimal',width:50,align:'right'},
      ],
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

    openModel(param_bid_no) {
        debugger
      this.ck=false
      let $parent;
      //获取生成页面viewgrid的对象
      this.$emit("parentCall", ($this) => {
        $parent = $this;
      });
      this.bid_no= param_bid_no

      this.clear();
      //当前如果是新建重置两个表格数据
      if ($parent.currentAction == "Add") {
        //add 默認不查詢
      } else {
        this.$refs.priceTable.load();
        this.$refs.orderTable.load();
      }

      //onInited方法设置从表编辑时实时计算值
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
        // this.orderTableRowData = this.$refs.orderTable.rowData;
        // this.priceTableRowData=this.$refs.priceTable.rowData;
    },
    openPrice(cust_id,prod_id){
      this.$refs.ShowPrice.openModel(true,cust_id,prod_id);
    },
    handleProdFormSelected(rows){

    },

    loadTableBefore1(param, callBack) {
        debugger
      //获取当前编辑主键id值
      param.rows=100
        if(this.bid_no){
            param.wheres.push({ name: "bid_no", value: this.bid_no });
            callBack(true);
        }else {
            callBack(false);
        }

    },
    //从表2加载数据数前(操作与上面一样的,增加查询条件)
    loadTableBefore2(param, callBack) {
      //添加从表的查询参数(条件)
      param.rows=100
        if(this.bid_no){
            param.wheres.push({ name: "bid_no", value: this.bid_no });
            callBack(true);
        }else {
            callBack(false);
        }
    },

      loadTableAfter2(data, callBack) {
          //数据加载后，赋给对像，用于编辑用
          this.orderTableRowData = data;
          return true;
      },
      loadTableAfter1(data, callBack) {
          //数据加载后，赋给对像，用于编辑用

          this.priceTableRowData = data;
          return true;
      },

    clear() {
      this.$refs.priceTable.reset();
      this.$refs.orderTable.reset();
    },
    //这里是从api查询后返回数据的方法
    loadTableAfter(row) {
      //   let url="";
      // this.http.get(url, params, true).then((result) => {
      //     this.da
      // });
    },
    priceRowClick({ row, column, event }) {
      //查询界面点击行事件
      this.$refs.priceTable.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
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
