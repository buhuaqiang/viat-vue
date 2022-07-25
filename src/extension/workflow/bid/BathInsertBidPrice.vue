<template>
<div v-if="showPriceDiv">
  <div class=" view-header">
    <div class="desc-text" ><i class="el-icon-s-grid"></i>
      <span class="el-submenu__title">Bid Price Apply</span></div>
  </div>
    <div style="padding-bottom: 10px;padding-left:45px;">
      <el-form :inline="true" label-position="right" label-width="110px" :model="formModel">


        <el-form-item label="Product:" style="width: 50%">
          <el-input v-model="formModel.prod_id" style="width:120px;" @keyup.enter="prodKeyPress"></el-input>
          <el-input v-model="formModel.prod_ename" style="width:300px;padding-left: 2px" :disabled="true"></el-input>
          <el-input v-model="formModel.prod_dbid"  type="hidden" style="width: 0px"></el-input>
          <a @click="openProdModel()" class="a-pop"><i class="el-icon-zoom-in"></i>Pick</a>&nbsp;<a class="a-clear" @click="clearPop(2)"><i class="el-icon-zoom-out"></i>Clean</a>

        </el-form-item>

        <el-form-item   label="NHI Price:" style="width: 35%">
          <el-input v-model="formModel.nhi_price" style="width:200px;" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item   label="Net Price:" style="width: 50%">
          <el-input v-model="formModel.net_price" style="width:200px;" ></el-input>
        </el-form-item>
        <el-form-item   label="FG%:" style="width: 35%">
          <el-input v-model="formModel.fg" style="width:200px;" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item   label="DIS%:" style="width: 50%">
          <el-input v-model="formModel.dis" style="width:200px;" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item   label="Invoice Price:" style="width: 35%">
          <el-input v-model="formModel.invoice_price" style="width:200px;" ></el-input>
        </el-form-item>
        <el-form-item   label="Min Qty:" style="width: 50%">
          <el-input-number v-model="formModel.min_qty"  style="width:200px;" ></el-input-number>
        </el-form-item>
        <el-form-item   label="Bid Price:" style="width: 35%">
          <el-input v-model="formModel.bid_price" style="width:200px;" @change="caculator()"></el-input>
        </el-form-item>
        <el-form-item   label="Reserve Price:" style="width: 50%">
          <el-input v-model="formModel.reserv_price" style="width:200px;" ></el-input>
        </el-form-item>

      </el-form>
      <el-button
              type="primary"
        style="margin-left:10px"
        size="medium"
        icon="el-icon-zoom-in"
        @click="addPrice()"
        >Add</el-button>

      <el-button
              type="danger"
              icon="el-icon-delete"
              @click="deletePriceRow()"
      >Delete</el-button>
      <el-button
              type="warning"
              icon="el-icon-zoom-in"
              @click="openPriceStretageModel()"
      >Add By contract stretagy</el-button>
      <el-tag type="success" size="medium" style="padding-left: 10px;" v-if="cont_stretagy_id">Contract Stretagy Name:{{cont_stretagy_name}}</el-tag>
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
            :defaultLoadPage="false"
            @loadBefore="loadTableBefore1"
            @loadAfter="loadTableAfter1"
            :index="true"
            @rowClick = "priceRowClick"
    ></vol-table>
</div>

  <div class=" view-header">
    <div class="desc-text" ><i class="el-icon-s-grid"></i>
      <span class="el-submenu__title">Bid Order Apply</span></div>
  </div>
  <div style="padding-bottom: 10px;padding-left:45px;">

    <el-button
            type="primary"
            style="margin-left:10px"
            size="medium"
            icon="el-icon-zoom-in"
            @click="addOrder()"
    >Add </el-button>

    <el-button
            type="danger"
            icon="el-icon-delete"
            @click="deleteOrderRow()"
    >Delete</el-button>
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

    <price-recode ref="priceRecode"></price-recode>
    <view_com_prod_pop_query ref="View_com_prod_pop_query" @onSelect="onSelectPop"></view_com_prod_pop_query>
    <Viat_wk_cont_stretagy_detail_pickup ref="Viat_wk_cont_stretagy_detail_pickup" @onSelect="onSelectPriceStretagyPop"></Viat_wk_cont_stretagy_detail_pickup>
</template>
<script>
import VolBox from "@/components/basic/VolBox.vue";
import VolTable from "@/components/basic/VolTable.vue";
import View_com_prod_pop_query from "../../basic/prod/View_com_prod_pop_query.vue";
import Viat_wk_cont_stretagy_detail_pickup from "../pricestretagy/Viat_wk_cont_stretagy_detail_pickup";
import priceRecode from "./showPriceRecode";

export default {
  components: {
    Viat_wk_cont_stretagy_detail_pickup,
    View_com_prod_pop_query,
    VolBox: VolBox,
    VolTable: VolTable,
    priceRecode: priceRecode,
  },
  data() {
    return {
      model: false,
      bidmast_dbid:"",
      contstret_dbid:"",
      cont_stretagy_id:"",
      cont_stretagy_name:"",
      cust_dbid:"",
      edit_pricegroup_dbid:"",
      formModel:{
        bid_no:'',
        group_id:'',
        group_name:'',
        pricegroup_dbid:'',
        prod_id:'',
        prod_ename:'',
        prod_dbid:'',
        nhi_price:'',
        bid_price:'',
        invoice_price:'',
        net_price:'',
        status:'Y',
        min_qty:1,
        fg:'',
        dis:'',
        nhi_id:'',
        start_date:new Date(),
        end_date:new Date('2099-12-31'),
        reserv_price:'',
        remarks:""
      },
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
      showPriceDiv:true,
      fieldName:"",//編輯字段,用於回傳設置值
      formType:"f",//弹框打开的form类型,f-editFormFields  s-searchFormFields
      url: "",//加载数据的接口
      table1Url: "api/Viat_wk_bid_detail/GetPageData",//?bidmast_dbid=" , //table1获取数据的接口
      table2Url: "api/Viat_wk_ord_detail/GetPageData",//?bidmast_dbid=" , //table1获取数据的接口 待補充

      priceTableRowData:[],
      orderTableRowData:[],
      delPriceTableRowData:[],
      delOrderTableRowData:[],
      columns: [
        { field: "bidetail_dbid", title: "主键ID", type: "guid", width: 80, hidden: true,isKey: true },
        { field: "bidmast_dbid", title: "外键ID", type: "guid", width: 80, hidden: true,isKey: true },
        { field: "prod_dbid", title: "prod_dbid", type: "guid", width: 80, hidden: true },
        {field:'prod_id',title:'Product Id',type:'string',width:110,require:true,align:'left'},
        {field:'prod_ename',title:'Product Name',type:'string',width:220,align:'left'},
        {field:'nhi_price',title:'NHI Price',type:'decimal',width:100,readonly:true,require:true,align:'right'},
        {field:'invoice_price',title:'Invoice Price',edit: { type: "number",keep:true },width:100,require:true,align:'right'},
        {field:'net_price',title:'Net Price',type:'decimal',width:100,require:true,align:'right'},
        {field:'bid_price',title:'Bid Price',edit: { type: "number" ,keep:true},width:100,require:true,align:'right'},
        {field:'reserv_price',title:'Reser Price',edit: { type: "number",keep:true },require:true,width:100,align:'right'},
        {field:'fg',title:'FG%',type:'decimal',width:50,align:'left'},
        {field:'dis',title:'DIS%',type:'decimal',width:50,align:'left'},
        {field:'min_qty',title:'Min Qty',edit: { type: "number",keep:true },width:80,require:true,align:'left'},
        {field:'record',title:'record',width:50,align:'left'},
        ],

      orderTableColumns: [
        { field: "ordetail_dbid", title: "主键ID", type: "guid", width: 80, hidden: true,isKey: true },
        { field: "bidmast_dbid", title: "外键ID", type: "guid", width: 80, hidden: true,isKey: true },
        {field:'prod_dbid',title:'Product dbId',type:'string', hidden: true},
        {field:'prod_id',title:'Product Id',type:'string',width:110,require:true,align:'left',readonly:true},
        {field:'prod_ename',title:'Product Name',type:'string',width:110,align:'left',readonly:true},
        {field:'qty',title:'Qty', edit: { type: "number" ,keep:true},width:110,require:true,align:'left'},

      ],

      pagination: {}, //分页配置，见voltable组件api
    };
  },
  created() {

  },
  methods: {

    openModel() {
      this.model = true;
      this.formModel.prod_id=''
      this.formModel.prod_ename=''
      this.formModel.prod_dbid=''
      this.formModel.nhi_price=''
      this.formModel.invoice_price=''
      this.formModel.net_price=''
      this.formModel.bid_price=''
      this.formModel.min_qty=1
      this.formModel.fg=1
      this.formModel.ds=1
      let $parent;
      //获取生成页面viewgrid的对象
      this.$emit("parentCall", ($this) => {
        $parent = $this;
      });
      this.bidmast_dbid= $parent.editFormFields.bidmast_dbid;
      this.cont_stretagy_id= $parent.editFormFields.cont_stretagy_id;
      this.cont_stretagy_name= $parent.editFormFields.cont_stretagy_name;
      this.cust_dbid = $parent.editFormFields.cust_dbid;
      this.edit_pricegroup_dbid = $parent.editFormFields.pricegroup_dbid;
      let apply_type = $parent.editFormFields.apply_type;

      if(apply_type=='03'){
        this.$refs.priceTable.reset();
      }
      this.$refs.orderTable.reset();
      //当前如果是新建重置两个表格数据
      if ($parent.currentAction == "Add") {
        //add 默認不查詢
      } else {
        if(apply_type=='03'){
          this.$refs.priceTable.load();
        }
        this.$refs.orderTable.load();
      }



      //onInited方法设置从表编辑时实时计算值
      this.columns.forEach(x => {
        //設定可編輯狀態打開，不用雙擊
        if (x.field == 'fg') {
          //将eidt设置为null不开启编辑
          x.edit = null;
          x.formatter = (row) => {
            let bid_price=row.bid_price;
            let nhi_price=row.nhi_price;
            let dis = (100-(bid_price-nhi_price)/nhi_price*100).toFixed(2);
            let fg = (100-dis).toFixed(2);
            return fg
          }
        }
        if (x.field == 'dis') {
          //将eidt设置为null不开启编辑
          x.edit = null;
          x.formatter = (row) => {
            let bid_price=row.bid_price;
            let nhi_price=row.nhi_price;
            let dis = (100-(bid_price-nhi_price)/nhi_price*100).toFixed(2);
            return dis;
          }
        }

        if (x.field == 'record') {//查看近一年的记录
          //将eidt设置为null不开启编辑
          x.formatter = (row) => {
            return "<a style='cursor:pointer;color: #409eff'>record</a>"
          }
          x.click = (row, column, event) => {
            this.openRecord(row.prod_dbid);
          };
        }


      })

    },
    openRecord(prod_dbid){
      this.$refs.priceRecode.openModel(true,this.cust_dbid,this.edit_pricegroup_dbid,prod_dbid);
    },

    caculator(){
      let bid_price=this.formModel.bid_price;
      let nhi_price=this.formModel.nhi_price;
      let dis = (100-(bid_price-nhi_price)/nhi_price*100).toFixed(2);
      let fg = 100-dis;
      this.formModel.dis=dis;
      this.formModel.fg=fg;
    },



    prodKeyPress(){
      let  prod_id = this.formModel.prod_id
      if(prod_id) {
        this.http.get("api/Viat_com_prod/getProdByProdID?prod_id="+prod_id,{} , "loading").then(reslut => {
          if(reslut!==null){
            this.formModel.prod_dbid=reslut.prod_dbid;
            this.formModel.prod_id=reslut.prod_id;
            this.formModel.prod_ename=reslut.prod_ename;
            this.formModel.nhi_price=reslut.nhi_price;
            this.formModel.prod_dbidname=reslut.prod_id + " " + reslut.prod_ename;
            this.initCurrentPrice(reslut.prod_dbid,reslut.prod_id);
          }else {
            this.$message.error("Product Id Is Not Exists.");
            this.formModel.prod_id="";
            this.formModel.prod_dbid="";
            this.formModel.prod_ename="";
          }
          return;
        })
      }
    },
    handleProdFormSelected(rows){

    },
    initCurrentPrice(prod_dbid,prod_id){
      let $parent;
      this.$emit("parentCall", ($this) => {
        $parent = $this;
      });

      let cust_id = $parent.editFormFields.cust_id;
      let pricegroup_dbid = $parent.editFormFields.pricegroup_dbid;
      if(cust_id) {
       let params ={
          "page": 1,
                "rows": 30,
                "order": "desc",
                "wheres": "[{\"name\":\"status\",\"value\":\"Y\"},{\"name\":\"prod_id\",\"value\":\""+prod_id+"\"},{\"name\":\"cust_id\",\"value\":\""+cust_id+"\"}]"
        }
        let url = "api/View_cust_price_detail/GetPriceDataForTransfer";
        this.http.post(url, params, 'Get data....').then((x) => {
          if (!x) return;
          if (x.rows.length > 0) {
            this.formModel.net_price = x.rows[0].net_price;
          } else {
            this.formModel.net_price = "";
          }
        });
      }
      if(pricegroup_dbid){
        let url = "api/View_wk_bid_price_apply_main/ProductPrice?pricegroup_dbid="+pricegroup_dbid+"&prod_dbid="+prod_dbid;
        this.http.get(url, {}, 'Get data....').then((x) => {
          if (!x) return;
          this.formModel.net_price = x.net_price;
        });
      }
    },
    openProdModel(val){
      this.$refs.View_com_prod_pop_query.openModel(true,"prod_dbid","onSelect")
    },

    openPriceStretageModel(val){
      let rows = this.$refs.priceTable.rowData;
      if(rows.length>0){
        this.$Message.error("Please Delete All Price Date");
        return false;
      }else{
        this.$refs.Viat_wk_cont_stretagy_detail_pickup.openModel(true,"stretagy","onSelect")
      }

    },

    onSelectPop(fieldName,rows){
        if(fieldName=='prod_dbid'){
          if(rows.length!=1){
            return this.$message.error("Please select a record first.");
          }
          this.formModel.prod_dbid=rows[0].prod_dbid
          this.formModel.nhi_price=rows[0].nhi_price;
          this.formModel.prod_id=rows[0].prod_id;
          this.formModel.prod_ename=rows[0].prod_ename;
          this.formModel.invoice_price='';
          this.formModel.net_price='';
          this.formModel.bid_price='';
          this.formModel.reserv_price='';
          this.formModel.dis='';
          this.formModel.fg='';
          this.initCurrentPrice(rows[0].prod_dbid,rows[0].prod_id);
        }else if(fieldName=='AddOrders'){

          //返回指定字段  prod_id,prod_ename,qty,amt
          let _rows = rows.map((row)=>{
            return{
              powercont_dbid:this.powercont_dbid,
              prod_id:row.prod_id,
              prod_dbid:row.prod_dbid,
              prod_ename:row.prod_ename,
              qty:1
            }
          })

          //push的时候去除已经选择的产品   this.$refs.table2.rowData.push(..._rows);
          _rows.forEach(x => {
            let idx =  this.$refs.orderTable.rowData.some(item => {
              // 判断项应为获取的变量
              if(item.prod_dbid == x.prod_dbid) {
                return true;
              }
            })
            if(!idx){
              this.$refs.orderTable.rowData.push(x);
            }
          })
        }

    },

    onSelectPriceStretagyPop(fieldName,rows){
      let _rows = rows.map((row)=>{
        return{
          bidetail_dbid:this.bidetail_dbid,
          contstretail_dbid:row.contstretail_dbid,
          prod_id:row.prod_id,
          prod_dbid:row.prod_dbid,
          prod_ename:row.prod_ename,
          min_qty:row.min_qty,
          nhi_price:row.nhi_price,
          invoice_price:row.invoice_price,
          net_price:row.net_price,
          bid_price:row.net_price,
          reserv_price:row.net_price,
          contstret_dbid:row.contstret_dbid,
          cont_stretagy_id:row.cont_stretagy_id,
          cont_stretagy_name:row.cont_stretagy_name

        }
      })

      _rows.forEach(x => {
        let idx =  this.$refs.priceTable.rowData.some(item => {
          // 判断项应为获取的变量
          if(item.prod_dbid == x.prod_dbid) {
            return true;
          }
        })
        if(!idx){
          this.$refs.priceTable.rowData.push(x);
        }
      })
      this.contstret_dbid  =_rows[0].contstret_dbid;
      this.cont_stretagy_id = _rows[0].cont_stretagy_id;
      this.cont_stretagy_name = _rows[0].cont_stretagy_name;
      let $parent;
      this.$emit("parentCall", ($this) => {
        $parent = $this;
      });
      $parent.editFormFields.contstret_dbid =this.contstret_dbid;
      $parent.editFormFields.cont_stretagy_id=this.cont_stretagy_id;
      $parent.editFormFields.cont_stretagy_name=this.cont_stretagy_name;
    },

    getPriceTableRowData(){
      return this.$refs.priceTable.rowData
    },
    getOrderTableRowData(){
      return this.$refs.orderTable.rowData
    },
    clearTableDetail(){
      this.$refs.priceTable.rowData=[]
      this.$refs.orderTable.rowData=[]
    },
    clearPop(val){
        this.formModel.prod_id="";
        this.formModel.prod_dbid="";
        this.formModel.prod_ename="";
    },
    loadTableBefore1(param, callBack) {
      //获取当前编辑主键id值
      debugger;
      param.wheres.push({ name: "bidmast_dbid", value: this.bidmast_dbid });
      callBack(true);
    },
    //从表2加载数据数前(操作与上面一样的,增加查询条件)
    loadTableBefore2(param, callBack) {
      //添加从表的查询参数(条件)
      param.wheres.push({ name: "bidmast_dbid", value: this.bidmast_dbid });
      callBack(true);
    },

    //从后台加载从表1数据后
    loadTableAfter1(data, callBack) {
      //数据加载后，赋给对像，用于编辑用
      this.priceTableRowData = data;
      this.delPriceTableRowData=[];
      return true;
    },
    //从后台加载从表1数据后
    loadTableAfter2(data, callBack) {
      //数据加载后，赋给对像，用于编辑用
      this.orderTableRowData = data;
      this.delOrderTableRowData= [];
      return true;
    },
    parseTime(time,cFormat){
      const format=cFormat||'{y}-{m}-{d} {h}:{i}:{s}'
      let date
      if(typeof time ==='object'){
        date=time
      }else {
        if(typeof time ==='string'){
          if((/^[0-9]+$/.test(time))){
            time=parseInt(time)
          }else{
            time=time.replace(new RegExp(/-/gm),'/')
          }
        }
        if((typeof time==='number') && (time.toString().length)===10){
          time=time*1000
        }
        date=new Date(time)
      }
      const formatObj={
        y:date.getFullYear(),
        m:date.getMonth()+1,
        d:date.getDate(),
        h:date.getHours(),
        i:date.getMinutes(),
        s:date.getSeconds(),
        a:date.getDay()
      }
      const time_str=format.replace(/{([ymdhisa])+}/g,(result,key)=>{
        const value=formatObj[key]
        if(key==='a'){
          return['日','一','二','三','四','五','六'][value]
        }
        return  value.toString().padStart(2,'0')
      })
      return time_str
    },
    isDecimal(val) {
      return /(^[\-0-9][0-9]*(.[0-9]+)?)$/.test(val);
    },
    isNumber(val) {
      return /(^[\-0-9][0-9]*([0-9]+)?)$/.test(val);
    },
    addPrice(){
      //頁面數據校驗
      if(this.cont_stretagy_id){
        this.$message.error("The Contract stretagy has been selected, So a single product price cannot be added. You can Click [Delete all] Then try again");
        return false;
      }
      if(!this.formModel.prod_dbid){
        this.$message.error("Please input product.");
        return false;
      }
      if(this.formModel.invoice_price){
        if(this.isDecimal(this.formModel.invoice_price) || this.isNumber(this.formModel.invoice_price)){

        }else{
          this.$message.error("Invoice price invalid.");
          return false;
        }
      }else {
        this.$message.error("Invoice price can't be empty.");
        return false;
      }
      if(this.formModel.net_price){
        if(this.isDecimal(this.formModel.net_price) || this.isNumber(this.formModel.net_price)){

        }else{
          this.$message.error("Net price invalid.");
          return false;
        }
      }else {
        this.$message.error("Net price can't be empty.");
        return false;
      }
      if(this.formModel.bid_price){
        if(this.isDecimal(this.formModel.bid_price) || this.isNumber(this.formModel.bid_price)){

        }else{
          this.$message.error("Bid price invalid.");
          return false;
        }
      }else {
        this.$message.error("Bid  price can't be empty.");
        return false;
      }
      if(this.formModel.reserv_price){
        if(this.isDecimal(this.formModel.reserv_price) || this.isNumber(this.formModel.reserv_price)){

        }else{
          this.$message.error("Reserv price invalid.");
          return false;
        }
      }else {
        this.$message.error("Reserv price can't be empty.");
        return false;
      }

      let message="";
      let pass=true;

      if(this.formModel.invoice_price<this.formModel.bid_price){
        message="Invoice Price < Net Price,";
        if(this.formModel.invoice_price>this.formModel.nhi_price){
          message+="Invoice Price >NHI Price,";
        }
        message+="can’t be saved. Please check."
        this.$message.error(message);
        return false;
      } else if (this.formModel.invoice_price > this.formModel.nhi_price ||
              (this.formModel.nhi_price != this.formModel.net_price && this.formModel.bid_price == this.formModel.invoice_price)) {
        message = "";
        if (this.formModel.invoice_price > this.formModel.nhi_price){
          message += "Invoice Price > NHI Price. ";
        }
        if ((this.formModel.nhi_price != this.formModel.invoice_price && this.formModel.bid_price == this.formModel.invoice_price)) {
          message += "Invoice Price ≠ NHI Price but Invoice Price = Bid Price.";
        }
        message +="Do you want to add?."
        pass=false;
      }
      if(pass){
        this.checkData();
      }else{
        this.$confirm(message, "Confirm", {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "warning",
          center: true,
        }).then(() => {
          this.checkData();
        });
      }
    },

    checkData(){
      //重複判斷 group+prod 判斷
      let index=this.$refs.priceTable.rowData.findIndex((f) =>  f.prod_dbid==this.formModel.prod_dbid);
      if(index<0){

        let addData={
          prod_id:this.formModel.prod_id,
          prod_ename:this.formModel.prod_ename,
          prod_dbid:this.formModel.prod_dbid,
          nhi_price:this.formModel.nhi_price,
          invoice_price:this.formModel.invoice_price,
          net_price:this.formModel.net_price,
          status:'Y',
          min_qty:this.formModel.min_qty,
          bid_price:this.formModel.bid_price,
          reserv_price:this.formModel.reserv_price,
          fg:this.formModel.fg,
          dis:this.formModel.dis,
        }
        this.$refs.priceTable.rowData.push(addData);

        this.formModel.prod_id=''
        this.formModel.prod_ename=''
        this.formModel.nhi_price=''
        this.formModel.invoice_price=''
        this.formModel.net_price=''
        this.formModel.bid_price=''
        this.formModel.reserv_price=''
        this.formModel.min_qry=1
        this.formModel.fg=1
        this.formModel.dis=1

      }else{
        this.$message.error("Product Price is already exist in draft.");
        return false;
      }
    },

    deletePriceRow(){
      let rows = this.$refs.priceTable.getSelected();
      if (rows.length == 0) {
        return this.$Message.error("Please Select need Delete Rows");
      }
      //数据记录
      rows.forEach(x=>{
        if(x.bidetail_dbid){
          this.delPriceTableRowData.push(x);
        }
      })

      let $parent;
      //获取生成页面viewgrid的对象
      this.$emit("parentCall", ($this) => {
        $parent = $this;
      });
      this.$refs.priceTable.delRow();
      rows =  this.$refs.priceTable.rowData;
      if(rows.length==0){
        this.contstret_dbid="";
        this.cont_stretagy_id="";
        this.cont_stretagy_name="";
       $parent.editFormFields.contstret_dbid="";
       $parent.editFormFields.cont_stretagy_id="";
       $parent.editFormFields.cont_stretagy_name="";
      }
    },

    deleteOrderRow(){
      let rows = this.$refs.orderTable.getSelected();
      if (rows.length == 0) {
        return this.$Message.error("Please Select need Delete Rows");
      }
      //数据记录
      rows.forEach(x=>{
        if(x.ordetail_dbid){
          this.delOrderTableRowData.push(x);
        }
      })
      this.$refs.orderTable.delRow();

    },

  addOrder(){
    this.$refs.View_com_prod_pop_query.openModel(false,"AddOrders","onSelect");
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
