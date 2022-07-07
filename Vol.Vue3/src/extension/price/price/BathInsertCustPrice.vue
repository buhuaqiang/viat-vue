<template>
  <VolBox
    v-model="model"
    :lazy="true"
    title="Create [Cust Price]"
    :height="700"
    :width="1500"
    :padding="15"
  >
    <div style="padding-bottom: 10px">
      <el-form :inline="true" label-position="left" label-width="110px" :model="formModel">
        <el-form-item id="0" label="Group:" style="width: 40%">
          <el-input v-model="formModel.group_id" style="width:120px;" @keyup.enter="groupKeyPress"></el-input>
          <el-input v-model="formModel.group_name" style="width:200px;padding-left: 2px" :disabled="true"></el-input>
          <a @click="openPriceGroup(0)" class="a-pop"><i class="el-icon-zoom-in"></i>Pick</a>&nbsp;<a class="a-clear" @click="clearPop(0)"><i class="el-icon-zoom-out"></i>Clean</a>
          <el-input v-model="formModel.pricegroup_dbid" type="hidden"></el-input>
        </el-form-item>
        <el-form-item label="Product:" style="width: 40%">
          <el-input v-model="formModel.prod_id" style="width:120px;" @keyup.enter="prodKeyPress"></el-input>
          <el-input v-model="formModel.prod_ename" style="width:200px;padding-left: 2px" :disabled="true"></el-input>
          <a @click="openPriceGroup(2)" class="a-pop"><i class="el-icon-zoom-in"></i>Pick</a>&nbsp;<a class="a-clear" @click="clearPop(2)"><i class="el-icon-zoom-out"></i>Clean</a>
          <el-input v-model="formModel.prod_dbid"  type="hidden"></el-input>
        </el-form-item>
        <el-form-item label="Start Date:" style="width: 35%">
          <el-date-picker
                  suffix-icon="el-icon-date"
                  v-model="formModel.start_date"
                  type="date"
                  placeholder="" >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="End Date:" style="width: 35%">
          <el-date-picker
                  suffix-icon="el-icon-date"
                  v-model="formModel.end_date"
                  type="date"
                  placeholder="" >
          </el-date-picker>
        </el-form-item>
        <el-form-item   label="NHI Price:" style="width: 35%">
          <el-input v-model="formModel.nhi_price" style="width:200px;" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item   label="Invoice Price:" style="width: 35%">
          <el-input v-model="formModel.invoice_price" style="width:200px;" ></el-input>
        </el-form-item>
        <el-form-item   label="Net Price:" style="width: 35%">
          <el-input v-model="formModel.net_price" style="width:200px;" ></el-input>
        </el-form-item>
        <el-form-item   label="Min Qty:" style="width: 35%">
          <el-input-number v-model="formModel.min_qty"  style="width:200px;" ></el-input-number>
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
        @click="add()"
        >Add Draft</el-button>
      <el-button
              type="primary"
              icon="el-icon-document-add"
              @click="addRow()"
      >Save</el-button>
      <el-button
              type="danger"
              icon="el-icon-delete"
              @click="deleteRow()"
      >Delete</el-button>
      <el-button
              type="warning"
              icon="el-icon-close"
              @click="model = false"
      >Close</el-button>
    </div>

    <!-- vol-table配置的这些属性见VolTable组件api文件 -->
    <vol-table
            ref="mytable"
            :tableData="pushData"
            :loadKey="true"
            :clickEdit="false"
            :columns="columns"
            :pagination-hide="false"
            :single="false"
            :height="400"
            :defaultLoadPage="false"
            :index="true"
            @rowClick = "rowClick"
    ></vol-table>

    <!-- 设置弹出框的操作按钮 -->
    <template #footer>
      <div>
        <el-button size="mini" icon="el-icon-close" @click="model = false"
          >关闭</el-button
        >
      </div>
    </template>
    <price-group-model-body ref="PriceGroupModelBody" @onSelect="onSelectPop"></price-group-model-body>
    <viat_com_cust-model-body ref="Viat_com_custModelBody" @onSelect="onSelectPop"></viat_com_cust-model-body>
    <view_com_prod_pop_query ref="View_com_prod_pop_query" @onSelect="onSelectPop"></view_com_prod_pop_query>
  </VolBox>
</template>
<script>
import VolBox from "@/components/basic/VolBox.vue";
import VolTable from "@/components/basic/VolTable.vue";
import PriceGroupModelBody from "./PriceGroupModelBody";
import Viat_com_custModelBody from "../../basic/cust/Viat_com_custModelBody";
import View_com_prod_pop_query from "../../basic/prod/View_com_prod_pop_query.vue";

export default {
  components: {
    View_com_prod_pop_query,
    Viat_com_custModelBody,
    PriceGroupModelBody,
    VolBox: VolBox,
    VolTable: VolTable,
  },
  data() {
    return {
      model: false,
      pushData:[],
      formModel:{
        group_id:'',
        group_name:'',
        pricegroup_dbid:'',
        prod_id:'',
        prod_ename:'',
        prod_dbid:'',
        nhi_price:'',
        invoice_price:'',
        net_price:'',
        status:'Y',
        min_qty:1,
        start_date:new Date(),
        end_date:new Date('2099-12-31')
      },
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据

      fieldName:"",//編輯字段,用於回傳設置值
      formType:"f",//弹框打开的form类型,f-editFormFields  s-searchFormFields
      url: "",//加载数据的接口
      columns: [
        { field: "custprice_dbid", title: "主键ID", type: "guid", width: 80, hidden: true,isKey: true },
        {field:'group_id',title:'Group Id',type:'string',width:110,require:true,align:'left',sort:true},
        {field:'group_name',title:'Group Name',type:'string',width:120,align:'left'},
        {field:'prod_id',title:'Product Id',type:'string',width:110,require:true,align:'left'},
        {field:'prod_ename',title:'Product Name',type:'string',width:110,align:'left'},,
        {field:'nhi_price',title:'NHI Price',type:'decimal',width:110,readonly:true,require:true,align:'left'},
        {field:'invoice_price',title:'Invoice Price',type:'decimal',width:110,require:true,align:'left'},
        {field:'net_price',title:'Net Price',type:'decimal',width:110,require:true,align:'left'},
        {field:'min_qty',title:'Min Qty',type:'int',width:110,require:true,align:'left'},
        {field:'start_date',title:'Start Date',type:'date',width:110,require:true,align:'left',sort:true},
        {field:'end_date',title:'End Date',type:'date',width:110,require:true,align:'left',sort:true},
        ],

      pagination: {}, //分页配置，见voltable组件api
    };
  },
  created() {

  },
  methods: {
    groupKeyPress(){
      let  group_id = this.formModel.group_id
      if(group_id) {
        this.http.get("api/Viat_app_cust_price_group/getPriceGroupByGroupID?group_id="+group_id,{} , "loading").then(reslut => {
          if(reslut!==null){
            this.formModel.pricegroup_dbid=reslut.pricegroup_dbid;
            this.formModel.group_id=reslut.group_id;
            this.formModel.group_name=reslut.group_name;
            this.formModel.pricegroup_dbidname=reslut.group_id + " " + reslut.group_name;
          }else {
            this.$message.error("Group Id Is Not Exists.");
            this.formModel.pricegroup_dbidname=''
          }

          return;
        })
      }
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
          }else {
            this.$message.error("Product Id Is Not Exists.");
            this.formModel.prod_dbidname=''
          }
          return;
        })
      }
    },
    handleProdFormSelected(rows){

    },
    openPriceGroup(val){
      if(val==0){
        this.$refs.PriceGroupModelBody.openModel(true,"pricegroup_dbid","onSelect")
      }else if(val==1){
        this.$refs.Viat_com_custModelBody.openModel(true,"cust_dbid","onSelect")
      }else if(val==2){
        this.$refs.View_com_prod_pop_query.openModel(true,"prod_dbid","onSelect")
      }

    },

    openDemo() {
      this.model = true;
      this.pushData=[];
    },
    onSelectPop(fieldName,rows){
        if(rows.length!=1){
          return this.$message.error("Please select a record first.");
        }
        if(fieldName=='pricegroup_dbid'){
          this.formModel.group_id=rows[0].group_id;
          this.formModel.group_name=rows[0].group_name;
          this.formModel.pricegroup_dbid=rows[0].pricegroup_dbid
        }else if(fieldName=='cust_dbid'){

        }else if(fieldName=='prod_dbid'){
          this.formModel.prod_dbid=rows[0].prod_dbid
          this.formModel.nhi_price=rows[0].nhi_price;
          this.formModel.prod_id=rows[0].prod_id;
          this.formModel.prod_ename=rows[0].prod_ename;
          this.formModel.invoice_price='';
          this.formModel.net_price='';
        }

    },
    clearPop(val){
      if(val==0){
        this.formModel.pricegroup_dbid="";
        this.formModel.group_id='';
        this.formModel.group_name='';
      }else if(val==1){
        this.formModel.cust_id="";
        this.formModel.cust_dbid="";
        this.formModel.cust_name="";
      }else if(val==2){
        this.formModel.prod_id="";
        this.formModel.prod_dbid="";
        this.formModel.prod_ename="";
      }

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
    add(){
      //頁面數據校驗
      if(this.formModel.pricegroup_dbid){

      }else {
        this.$message.error("Please input group.");
        return false;
      }
      if(this.formModel.prod_dbid){

      }else {
        this.$message.error("Please input product.");
        return false;
      }
      if(this.formModel.start_date){
        let s=this.parseTime(this.formModel.start_date,'{y}-{m}-{d}')
        this.formModel.start_date=s
      }else {
        this.$message.error("Start date can't be empty.");
        return false;
      }
      if(this.formModel.end_date){
        let s=this.parseTime(this.formModel.end_date,'{y}-{m}-{d}')
        this.formModel.end_date=s
      }else {
        this.$message.error("End date can't be empty.");
        return false;
      }
      if(this.formModel.invoice_price){

      }else {
        this.$message.error("Invoice price can't be empty.");
        return false;
      }
      if(this.formModel.net_price){

      }else {
        this.$message.error("Net price can't be empty.");
        return false;
      }
      if(!this.formModel.start_date<=this.formModel.end_date){
        this.$message.error("start date should <= end date");
        return false;
      }
      let message="";
      let pass=true;
      if(this.formModel.invoice_price<this.formModel.net_price){
        message="Invoice Price < Net Price,";
        if(this.formModel.invoice_price>this.formModel.nhi_price){
          message+="Invoice Price >NHI Price,";
        }
        message+="can’t be saved. Please check."
        this.$message.error(message);
        return false;
      }else{
        if(this.formModel.invoice_price>this.formModel.nhi_price){
          pass=false;
          message="Invoice Price > NHI Price";
          if(this.formModel.invoice_price==this.formModel.net_price){
            message+="Invoice Price ≠ Nhi Price but  Invoice Price = Net Price."
          }
          message+="Do you want to add?"

        }
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
      let index=this.pushData.findIndex((f) => f.pricegroup_dbid==this.formModel.pricegroup_dbid && f.prod_dbid==this.formModel.prod_dbid);
      if(index<0){
        //先要通過接口校驗
        this.http.post("api/View_cust_price/checkCustPriceData", { mainData: this.formModel }, true)
                .then((x) => {
                  let addData={
                    group_id:this.formModel.group_id,
                    group_name:this.formModel.group_name,
                    pricegroup_dbid:this.formModel.pricegroup_dbid,
                    prod_id:this.formModel.prod_id,
                    prod_ename:this.formModel.prod_ename,
                    prod_dbid:this.formModel.prod_dbid,
                    nhi_price:this.formModel.nhi_price,
                    invoice_price:this.formModel.invoice_price,
                    net_price:this.formModel.net_price,
                    status:'Y',
                    min_qty:this.formModel.min_qty,
                    start_date:this.formModel.start_date,
                    end_date:this.formModel.end_date
                  }
                  this.pushData.push(addData);
                  //清除form數據
                 /* this.formModel.prod_id=''
                  this.formModel.prod_ename=''
                  this.formModel.prod_dbid=''
                  this.formModel.nhi_price=''
                  this.formModel.invoice_price=''
                  this.formModel.net_price=''
                  this.formModel.status='Y'
                  this.formModel.min_qty='1'
                  this.formModel.start_date=new Date()
                  this.formModel.end_date=new Date('2099-12-31')*/
                  this.formModel.prod_id=''
                  this.formModel.prod_ename=''
                  this.formModel.nhi_price=''
                  this.formModel.invoice_price=''
                  this.formModel.net_price=''
                });

      }else{
        this.$message.error("Group and Product already exist.");
        return false;
      }
    },
    addRow() {
      debugger
      let rows = this.pushData;
      if(rows.length==0){
        this.$message.error("draft cache is empty.");
      }else{
        this.http.post("api/View_cust_price/bathSaveCustPrice", { mainData: rows }, true)
                .then((x) => {
                  this.$message.success('success');
                  this.model=false;
                });
      }

    },
    deleteRow(){
      debugger
      let rows = this.$refs.mytable.getSelected();
      if(rows.length>0){
        rows.forEach(x=>{
          this.pushData.splice(x.elementIndex,1)
        })
      }

    },


    //这里是从api查询后返回数据的方法
    loadTableAfter(row) {
      //   let url="";
      // this.http.get(url, params, true).then((result) => {
      //     this.da
      // });
    },
    rowClick({ row, column, event }) {
      //查询界面点击行事件
      this.$refs.mytable.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
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
</style>
