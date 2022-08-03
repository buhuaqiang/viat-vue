<template>
<div style="padding-left: 5px;">
  <el-form :inline="true" label-position="right" label-width="110px" :model="formModel">

      <div class=" view-header">
        <div class="desc-text" ><i class="el-icon-s-grid"></i>
          <span class="el-submenu__title">Bid Price Transfer</span>
            <span class="el-tag el-tag--success" v-show="stretagyShow" >Strategy Name:{{strategyName}}</span>
        </div>
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

      <el-form-item   label="Price Note:" style="padding-top:10px;width: 48%">
        <el-input type="textarea" v-model="formModel.price_note"  :disabled="!isEdit"></el-input>
      </el-form-item>
      <el-form-item   label="Remarks" style="padding-top:10px;width: 48%">
          <el-input type="textarea" v-model="remarks"  disabled></el-input>
      </el-form-item>
      <div class=" view-header">
        <div class="desc-text" ><i class="el-icon-s-grid"></i>
          <span class="el-submenu__title">Bid Order Transfer</span></div>
      </div>
      <!-- vol-table配置的这些属性见VolTable组件api文件 -->
      <vol-table
              ref="orderTable"
              :loadKey="true"
              :clickEdit="false"
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
    <el-form-item   label="Order Note:" style="padding-top:10px;width: 48%">
      <el-input type="textarea" v-model="formModel.order_note"  :disabled="!isEdit"></el-input>
    </el-form-item>
  </el-form>
</div>
  <show-price ref="ShowPrice"></show-price>
    <view_com_prod_pop_query ref="View_com_prod_pop_query" @onSelect="changeProduct"></view_com_prod_pop_query>
</template>

<script>
import VolBox from "@/components/basic/VolBox.vue";
import VolTable from "@/components/basic/VolTable.vue";
import ShowPrice from "./showPrice";
import View_com_prod_pop_query from "../../basic/prod/View_com_prod_pop_query.vue";

export default {
  components: {
      View_com_prod_pop_query,
    ShowPrice,
    VolBox: VolBox,
    VolTable: VolTable,
  },
  props: {

  },
  data() {
    return {
      model: false,
        isEdit:true,//是否是编辑,控制列表输入框标识
        currentOrderRow:{},
      bid_no:"",
        stretagyShow:false,
        strategyDBID:"",
        strategyName:"",//價格策略名稱
       remarks:"",//viat_wk_master.Remark
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
        {field:'net_price',title:'Current Price',width:80,require:true,align:'right'},
        {field:'price_bid',title:'Bid Price',width:80,require:true,align:'right'},
        {field:'price_close',title:'Approved Price',width:80,require:true,align:'right'},
          {field:'reserv_price',title:'Reserve Price',width:80,require:true,align:'right',edit: { type: "decimal",keep:true }},
          {field:'min_qty',title:'Min Qty',edit: { type: "number",keep:true },width:80,require:true,align:'right'},
        {field:'final_fg',title:'FG%',type:'decimal',width:50,align:'right'},
        {field:'final_discount',title:'DIS%',type:'decimal',width:50,align:'right'},
      ],
      orderTableColumns: [
        { field: "order_transfer_dbid", title: "主键ID", type: "guid", width: 80, hidden: true,isKey: true },
        {field:'state',title:'Status',type:'string',bind:{ key:'transfer_status',data:[]},width:110,align:'left',edit: { type: "select",keep:true }},
        {field:'prod_id',title:'Product Id',type:'string',width:110,require:true,align:'left',readonly:true},
        {field:'prod_ename',title:'Product Name',type:'string',width:110,align:'left',readonly:true},
          {field:'pick',title:'',type:'string',width:50,align:'center',readonly:true},
        {field:'qty',title:'Qty', edit: { type: "number" ,keep:true},width:110,require:true,align:'right'},
        {field:'oper',title:''},
      ],

      pagination: {}, //分页配置，见voltable组件api
    };
  },
  created() {
  },
  methods: {
    initProductRender(){
        let _column = this.orderTableColumns.find(x => { return x.field == "pick" });
        _column.hidden=!this.isEdit;
        _column.render = (h, { row, column, index }) => {
            return h("div", { style: {} },
                [
                    h("i", {
                        class: ["el-icon-zoom-in"],
                        style: {
                            cursor: "pointer",
                            "margin-right": "8px",
                            color: "#409eff",
                        },
                        onClick: (e) => {
                            this.currentOrderRow=row
                            this.$refs.View_com_prod_pop_query.openModel(true,"prod","onSelect")
                        },
                    }),
                ], row.Remark)
        };
    },
      changeProduct(fieldName,rows){
          if(rows.length!=1){
              return this.$message.error("Please select a record first.");
          }
          //给当前行设置选中的产品值
          this.currentOrderRow.prod_id = rows[0].prod_id;
          this.currentOrderRow.prod_ename = rows[0].prod_ename;
          this.currentOrderRow.prod_dbid = rows[0].prod_dbid;
          this.model = false;
      },
      //禁用页面编辑框
      disabledEdit(){
          let _column1 = this.orderTableColumns.find(x => { return x.field == "qty" });
          let _column2= this.orderTableColumns.find(x => { return x.field == "state" });
          let _column3= this.columns.find(x => { return x.field == "state" });
          let _column4= this.columns.find(x => { return x.field == "invoice_price" });
          let _column5= this.columns.find(x => { return x.field == "reserv_price" });
          let _column6= this.columns.find(x => { return x.field == "min_qty" });

          if(this.isEdit){
              _column1.edit= { type: "decimal" ,keep:true}
              _column2.edit=  { type: "select",keep:true }
              _column3.edit=  { type: "select",keep:true }
              _column4.edit= { type: "decimal" ,keep:true}
              _column5.edit= { type: "decimal" ,keep:true}
              _column6.edit= { type: "decimal" ,keep:true}
          }else{
              _column1.edit= null
              _column2.edit= null
              _column3.edit= null
              _column4.edit= null
              _column5.edit= null
              _column6.edit= null
          }

      },
    openModel(param_bid_no) {
      this.ck=false
      let $parent;
        this.formModel.price_note=""
        this.formModel.order_note=""
      //获取生成页面viewgrid的对象
      this.$emit("parentCall", ($this) => {
        $parent = $this;
      });
      this.bid_no= param_bid_no
      this.isEdit= ($parent.currentAction == "update")
      this.clear();
      //当前如果是新建重置两个表格数据
      if ($parent.currentAction == "Add") {
        //add 默認不查詢
      } else {
        this.$refs.priceTable.load();
        this.$refs.orderTable.load();
      }

      //渲染订单产品弹框
        this.initProductRender()
        //处理页面编辑框
        this.disabledEdit()
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
        //加載viat_wk_master.Remark ，viat_wk_master.Stretagy Name
        this.http.get("api/View_wk_bid_price_apply_main/getWkApplyMainByBidNO?bid_no="+param_bid_no,{} , "loading").then(reslut => {
            if (reslut !== null) {
                if(reslut.contstret_dbid){
                    this.stretagyShow=true
                    this.strategyName=reslut.cont_stretagy_name
                    this.strategyDBID=reslut.contstret_dbid

                }else{
                    this.stretagyShow=false
                    this.strategyName=""
                    this.strategyDBID=""
                }
                $parent.editFormFields['approved_date']=reslut.approved_date
                this.remarks=reslut.remarks
            } else {
                this.stretagyShow=false
                this.strategyName=""
                this.remarks=""
                this.strategyDBID=""
            }
        })
    },
    openPrice(cust_id,prod_id){
      this.$refs.ShowPrice.openModel(true,cust_id,prod_id);
    },
    handleProdFormSelected(rows){

    },

    loadTableBefore1(param, callBack) {
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
