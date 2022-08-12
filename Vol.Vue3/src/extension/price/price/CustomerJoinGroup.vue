<template>
  <div  id="vol-main" >
    <div style="padding:20px 2px;">
      <el-form :inline="true"  label-width="100px"  :model="formModel">

        <el-form-item  label="Group:" style="width: 40%;">
          <el-input clearable v-model="formModel.group_id" @keyup.enter="groupKeyPress" style="width:120px;" ></el-input>
          <el-input v-model="formModel.group_name" style="width:300px;padding-left: 2px" :disabled="true"></el-input>
          <el-input v-model="formModel.pricegroup_dbid" type="hidden" style="width:0px;" :disabled="true"></el-input>
          <a @click="openPriceGroup(0)" class="a-pop"><i class="el-icon-zoom-in"></i>Pick</a>&nbsp;<a class="a-clear" @click="clearPop(0)"><i class="el-icon-zoom-out"></i>Clean</a>

        </el-form-item>
        <el-form-item label="Start Date:" style="width: 35%">
          <el-date-picker
                  suffix-icon="el-icon-date"
                  v-model="formModel.start_date"
                  type="date"
                  placeholder="" >
          </el-date-picker>
        </el-form-item>
        <el-form-item  label="Customer:" style="width: 40%;">
          <el-input clearable v-model="formModel.cust_id" @keyup.enter="custKeyPress" style="width:120px;" ></el-input>
          <el-input v-model="formModel.cust_name" style="width:300px;padding-left: 2px" :disabled="true"></el-input>
          <el-input v-model="formModel.cust_dbid" type="hidden" style="width:0px;" :disabled="true"></el-input>
          <a @click="openPriceGroup(1)" class="a-pop"><i class="el-icon-zoom-in"></i>Pick</a>&nbsp;<a class="a-clear" @click="clearPop(1)"><i class="el-icon-zoom-out"></i>Clean</a>

        </el-form-item>

        <el-form-item label="End Date:" style="width: 35%">
          <el-date-picker
                  suffix-icon="el-icon-date"
                  v-model="formModel.end_date"
                  type="date"
                  placeholder="" >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Remark:" style="width: 60%">
          <el-input type="textarea" v-model="formModel.remark" style="width:250px;"></el-input>
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        style="margin-left:10px"
        size="medium"
        icon="el-icon-zoom-in"
        @click="search"
        >Inquire</el-button
      >
      <el-button
              type="primary"
              icon="el-icon-document-add"
              @click="addRow()"
      >Execute</el-button >
      <el-button
              type="primary"
              icon="el-icon-refresh"
              @click="resetForm"
      >Clean</el-button >

    </div>
    <div class="view-header" >Select all just only for this page. </div>
    <div  class="box">

      <div class="left">
        <div class="header">Group Price</div>
        <vol-table
                ref="mytable"
                title="table1"
                :loadKey="true"
                :columns="columns"
                :tableData="[]"
                :pagination="pagination"
                :pagination-hide="false"
                :height="500"
                :url="url"
                :index="true"
                :single="false"
                :defaultLoadPage="false"
                @loadBefore="loadTableBefore"
                @loadAfter="loadTableAfter"
                @rowClick = "rowClick"
        ></vol-table>
      </div>
      <div class="main">
        <p @click="allChoose()"> &gt;&gt; </p>
        <p @click="selected()"> &gt; </p>
        <p @click="cancelSelected()"> &lt; </p>
        <p @click="cancelAll()"> &lt;&lt; </p>

      </div>
      <!--<div style="display:inline;width: 2%;">

      </div>-->
      <div class="right">
          <div class="header">Add to Group Price</div>
          <vol-table
                  ref="table2"
                  title="table2"
                  :tableData="selectedData"
                  :loadKey="true"
                  :clickEdit="false"
                  :columns="tableColumns2"
                  :pagination-hide="true"
                  :single="false"
                  :height="500"
                  :defaultLoadPage="false"
                  @loadBefore="loadTableBefore2"
                  :index="true"
                  @rowClick = "rowClick1"
          ></vol-table>
      </div>
    </div>
    <!-- 设置弹出框的操作按钮 -->
    <price-group-model-body ref="PriceGroupModelBody" @onSelect="onSelectPop"></price-group-model-body>
    <viat_com_cust-model-body ref="Viat_com_custModelBody" @onSelect="onSelectPop"></viat_com_cust-model-body>
  </div>
</template>
<script>
import VolTable from "@/components/basic/VolTable.vue";
import PriceGroupModelBody from "./PriceGroupModelBody";
import Viat_com_custModelBody from "../../basic/cust/Viat_com_custModelBody";

export default {
  components: {
    Viat_com_custModelBody,
    PriceGroupModelBody,
    VolTable: VolTable,
  },
  data() {
    return {
      model: false,
      formModel:{
        start_date:new Date(),
        end_date:new Date('2099-12-31')
      },
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
      selectedData:[],//被選中的數據
      custprice_dbids:[],//被選中的價格群組商品custprice_dbid
      fieldName:"",//編輯字段,用於回傳設置值
      formType:"f",//弹框打开的form类型,f-editFormFields  s-searchFormFields
      url: "api/View_cust_price/getPriceGroupProducts",//加载数据的接口(需要重新寫)
      columns: [
        {field:'prod_dbid',title:'Product ID',type:'string',width:90,require:true,align:'left', hidden: true},
        {field:'prod_id',title:'Product ID',type:'string',width:90,require:true,align:'left'},
        {field:'prod_ename',title:'Product Name',type:'string',width:130,align:'left'},
        {field:'nhi_price',title:'NHI Price',type:'decimal',width:90,align:'right'},
        {field:'invoice_price',title:'Invoice Price',type:'decimal',width:90,align:'right'},
        {field:'net_price',title:'Net Price',type:'decimal',width:90,align:'right'},
        {field:'min_qty',title:'Min Qty',type:'decimal',width:90,align:'right'},
        {field:'state',title:'Status',type:'string',bind:{ key:'prod_status',data:[]},width:80,align:'left'},
        ],
      tableColumns2:[
        {field:'prod_dbid',title:'Product ID',type:'string',width:90,require:true,align:'left', hidden: true},
        {field:'prod_id',title:'Product ID',type:'string',width:90,require:true,align:'left'},
        {field:'prod_ename',title:'Product Name',type:'string',width:130,align:'left'},
        {field:'nhi_price',title:'NHI Price',type:'decimal',width:90,align:'right'},
        {field:'invoice_price',title:'Invoice Price',type:'decimal',width:90,align:'right'},
        {field:'net_price',title:'Net Price',type:'decimal',width:90,align:'right'},
        {field:'min_qty',title:'Min Qty',type:'decimal',width:90,align:'right'},
      ],
      pagination: {size :120}, //分页配置，见voltable组件api
    };
  },
  created() {
    //this.invalidModel.pricegroup_dbidname.render = this.getRender("pricegroup_dbid", 'pg')
    //新打開的頁面把緩存數據清理掉
    this.selectedData=[]
    this.custprice_dbids=[]
  },
  methods: {
    groupKeyPress(){

      this.$refs.mytable.rowData=[];
      this.selectedData=[];
      this.custprice_dbids=[];

      let  group_id = this.formModel.group_id
      if(group_id) {
        this.http.get("api/Viat_app_cust_price_group/getPriceGroupByGroupID?group_id="+group_id,{} , "loading").then(reslut => {
          if(reslut!==null){
            this.formModel.pricegroup_dbid=reslut.pricegroup_dbid;
            this.formModel.group_id=reslut.group_id ;
            this.formModel.group_name=reslut.group_name;
          }else {
            this.$message.error("Group Id Is Not Exists.");
            this.formModel.group_id=''
            this.formModel.group_name=''
          }

          return;
        })
      }
    },
    custKeyPress(){
      let  cust_id = this.formModel.cust_id
      if(cust_id) {
        this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id,{} , "loading").then(reslut => {
          if(reslut!==null){
            this.formModel.cust_dbid=reslut.cust_dbid;
            this.formModel.cust_dbidname=reslut.cust_id
            this.formModel.cust_name=reslut.cust_name;
          }else {
            this.$message.error("Customer Id Is Not Exists.");
            this.formModel.cust_id=''
            this.formModel.cust_name=''
          }

          return;
        })
      }
    },
    resetForm(){
        this.formModel={
          start_date:new Date(),
          end_date:new Date('2099-12-31')
        }
      this.$refs.mytable.rowData=[];
      this.selectedData=[];
      this.custprice_dbids=[];

    },
    allChoose(){
      let table1Data=this.$refs.mytable.rowData;
      //this.selectedData=[];//這一步是為了避免重複數據
      this.custprice_dbids=[];
      this.selectedData=table1Data;
      table1Data.forEach(x=>{
        this.custprice_dbids.push(x.custprice_dbid)
      })
      //重新加載查詢表的數據
      this.search();
    },
    selected(){

      let rows= this.$refs.mytable.getSelected()
      if(rows.length==0){
        return this.$message.error("Please select a record first.");
      }
      console.log("start",new Date())
      rows.forEach(x=>{
        console.log(1)
        let dbids = this.custprice_dbids.find((f) => f == x.custprice_dbid);
        console.log(2)
        if(!dbids){
          this.selectedData.push(x);
          console.log("selected",this.selectedData)
          this.custprice_dbids.push(x.custprice_dbid)
          console.log("dbids",this.custprice_dbids)
        }
        console.log(3)
        console.log("-------------------")
      })
      console.log("end",new Date())

      //重新加載查詢表的數據
      //this.search();
    },
    cancelSelected(){
      let rows= this.$refs.table2.getSelected()
      if(rows.length==0){
        return this.$message.error("Please select a record first.");
      }
      rows.forEach(x=>{
        let index=this.custprice_dbids.findIndex((f) => f == x.custprice_dbid);
        let index2=this.selectedData.findIndex((f) => f.custprice_dbid == x.custprice_dbid);
        this.selectedData.splice(index2,1);
        this.custprice_dbids.splice(index,1)
      })
      //重新加載查詢表的數據
      this.search();
    },
    cancelAll(){
      this.selectedData=[];
      this.custprice_dbids=[];
      //重新加載查詢表的數據
      this.search();
    },
    openPriceGroup(val){
      if(val==0){
        this.$refs.PriceGroupModelBody.openModel(true,"pricegroup_dbid","onSelect")
      }else if(val==1){
        this.$refs.Viat_com_custModelBody.openModel(true,"cust_dbid","onSelect")
      }

    },

    openDemo() {
      this.model = true;
    },
    onSelectPop(fieldName,rows){
        if(rows.length!=1){
          return this.$message.error("Please select a record first.");
        }
        if(fieldName=='pricegroup_dbid'){
          this.formModel.group_id=rows[0].group_id
          this.formModel.group_name=rows[0].group_name;
          this.formModel.pricegroup_dbid=rows[0].pricegroup_dbid
        }else if(fieldName=='cust_dbid'){
          this.formModel.cust_id=rows[0].cust_id
          this.formModel.cust_name=rows[0].cust_name;
          this.formModel.cust_dbid=rows[0].cust_dbid
        }

    },
    clearPop(val){
      if(val==0){
        this.formModel.group_id="";
        this.formModel.group_name="";
        this.formModel.pricegroup_dbid="";
      }else if(val==1){
        this.formModel.cust_id="";
        this.formModel.cust_name="";
        this.formModel.cust_dbid="";
      }

    },


    search() {
      console.log("search")
      //点击搜索
      if(this.formModel.pricegroup_dbid){

      }else{
        this.$message.error("Please input Group.");
        return false;
      }
      this.$refs.mytable.load();
      console.log("search end")
    },

    addRow() {
      let isCheckPass=this.checkData();
      if(isCheckPass){
        let rows =  this.selectedData;//
        if (!rows || rows.length == 0) {
           this.$message.error("Please select a record first");
          return;
        }
        let detailData = [
          {
            key: "selectedJoinRowData",
            value: rows,
          }]
        this.http.post("api/View_cust_price/excuteCustomerJoinGroup", { mainData: this.formModel,detailData:detailData }, true)
                .then((x) => {
                  if(x.status){
                    this.$Message.success("Save Completed.");
                  }else{
                    this.$Message.error(x.message);
                  }
                  this.cancelAll()
                });
      }
    },


    checkData(){
      if(!this.formModel.pricegroup_dbid){
         this.$message.error("Please input Group.");
         return false
      }
      if(!this.formModel.cust_dbid){
         this.$message.error("Please input Customer.");
        return false
      }
      if(!this.formModel.start_date){
         this.$message.error("Please input Start Date.");
        return false
      }
      if(!this.formModel.end_date){
         this.$message.error("Please input End Date.");
        return false
      }
      let date1_unix=Date.parse(this.formModel.start_date)
      let date2_unix=Date.parse(this.formModel.end_date)
      if(date1_unix>date2_unix){
        this.$message.error("Start date should <= end date");
        return false;
      }
      //设置提交日期格式
      this.formModel.start_date=this.parseTime(this.formModel.start_date,'{y}-{m}-{d}')
      this.formModel.end_date=this.parseTime(this.formModel.end_date,'{y}-{m}-{d}')
      return true
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
    //这里是从api查询后返回数据的方法
    loadTableAfter(row) {
      console.log("load after")
      //   let url="";
      // this.http.get(url, params, true).then((result) => {
      //     this.da
      // });
    },
    rowClick({ row, column, event }) {
      //查询界面点击行事件
      this.$refs.mytable.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
    },
    rowClick1({ row, column, event }) {
      //查询界面点击行事件
      this.$refs.table2.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
    },
    loadTableBefore(params) {
      //查询前，设置查询条件
      if(this.custprice_dbids.length>0){
        params.wheres.push({ name: "custprice_dbids", value: this.custprice_dbids.join(","),displayType:'not in' });
      }
      if(this.formModel.cust_dbid){
        params.wheres.push({ name: "cust_dbid", value: this.formModel.cust_dbid });
      }else{
        //return  this.$message.error("Please input Customer.");;
      }

      if(this.formModel.pricegroup_dbid){
        params.wheres.push({ name: "pricegroup_dbid", value: this.formModel.pricegroup_dbid });
      }else{

      }
      console.log("search params ",params)

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

  .header{
    background-color:#d0d0d0;
    height: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }
  .box {
    //margin: 10px 2px;
    border: 1px solid ;
    height: 590px;
    position: relative;
    overflow: hidden;
  }
  .main {
    position: absolute;
    left: 48%;
    right: 48%;
    top: 0px;
    bottom: 0px;
    height: 100%;
  }
  .main p{
      text-align: center;
      cursor: pointer;
      font-size: large;
      font-weight: bold;
  }
  .left {
    float: left;
    width: 48%;
    height: 100%;
  }
  .right {
    float: right;
    width: 48%;
    height: 100%;
  }
  .view-header{
    background-color:#d0d0d0;
    height: 30px;
    color:red;
    font-weight: bold;
    display: flex;
    align-items: center;
    padding-left: 10px;
  }

</style>
