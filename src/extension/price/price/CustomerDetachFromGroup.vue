<template>
  <div  id="vol-main" >
    <div style="padding:20px 2px;">
      <el-form :inline="true"  label-width="150px" :model="formModel">
        <ul>
          <li>
            <el-form-item style="padding-left: 150px;">
              <el-checkbox v-model="formModel.show_invalid"   label="Show Invalid products" key="1" size="small" style="padding-left: 10px"/>
            </el-form-item>
          </li>
          <li>
            <el-form-item  label="Customer:" style="width: 40%;">
              <el-input v-model="formModel.cust_id" @keyup.enter="custKeyPress" style="width:120px;" ></el-input>
              <el-input v-model="formModel.cust_name" style="width:300px;padding-left: 2px" :disabled="true"></el-input>
              <el-input v-model="formModel.cust_dbid" type="hidden" style="width:0px;" :disabled="true"></el-input>
              <a @click="openPriceGroup(1)" class="a-pop"><i class="el-icon-zoom-in"></i>Pick</a>&nbsp;<a class="a-clear" @click="clearPop(1)"><i class="el-icon-zoom-out"></i>Clean</a>

            </el-form-item>
            <el-form-item label="Detach Start Date:" style="width: 40%">
              <el-date-picker
                      suffix-icon="el-icon-date"
                      v-model="formModel.detach_date"
                      type="date"
                      placeholder="" >
              </el-date-picker>
            </el-form-item>
          </li>
          <li>
            <el-form-item  label="Product:" style="width: 40%">
              <el-input v-model="formModel.prod_id" @keyup.enter="prodKeyPress" style="width:120px;" ></el-input>
              <el-input v-model="formModel.prod_ename" style="width:300px;padding-left: 2px" :disabled="true"></el-input>
              <el-input v-model="formModel.prod_dbid" type="hidden" style="width:0px;" :disabled="true"></el-input>
              <a @click="openPriceGroup(2)" class="a-pop"><i class="el-icon-zoom-in"></i>Pick</a>&nbsp;<a class="a-clear" @click="clearPop(2)"><i class="el-icon-zoom-out"></i>Clean</a>

            </el-form-item>
            <el-form-item label="Remark:" style="width: 40%">
              <el-input type="textarea" v-model="formModel.remark" style="width:250px;"></el-input>
            </el-form-item>
          </li>
        </ul>


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
      >Detach Selected</el-button >
      <el-button
              type="primary"
              icon="el-icon-refresh"
              @click="resetForm"
      >Clean</el-button >

    </div>
    <div class="view-header" v-show="tipsShow">Select all just only for this page. Note: "脫離Group後的新價為健保價"</div>
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

    <!-- 设置弹出框的操作按钮 -->
    <viat_com_cust-model-body ref="Viat_com_custModelBody" @onSelect="onSelectPop"></viat_com_cust-model-body>
    <view_com_prod_pop_query  ref="View_com_prod_pop_query" @onSelect="onSelectPop"></view_com_prod_pop_query>
  </div>
</template>
<script>
import VolTable from "@/components/basic/VolTable.vue";
import Viat_com_custModelBody from "../../basic/cust/Viat_com_custModelBody";
import View_com_prod_pop_query from "../../basic/prod/View_com_prod_pop_query.vue";
export default {
  components: {
    View_com_prod_pop_query,
    Viat_com_custModelBody,
    VolTable: VolTable,
  },
  data() {
    return {
      model: false,
      tipsShow:false,
      formModel:{
        show_invalid:false,
        detach_date:new Date()
      },
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
      fieldName:"",//編輯字段,用於回傳設置值
      formType:"f",//弹框打开的form类型,f-editFormFields  s-searchFormFields
      url: "api/View_cust_price/getCustomerProducts",//加载数据的接口(需要重新寫)
      columns: [
        {field:'custgroup_dbid',title:'custgroup_dbid',type:'string',width:90,require:true,align:'left', hidden: true},
        {field:'group_id',title:'Group ID',type:'string',width:90,require:true,align:'left'},
        {field:'group_name',title:'Group Name',type:'string',width:130,align:'left'},
        {field:'prod_id',title:'Product ID',type:'string',width:90,require:true,align:'left'},
        {field:'prod_ename',title:'Product Name',type:'string',width:130,align:'left'},
        {field:'nhi_price',title:'NHI Price',type:'decimal',width:90,align:'right'},
        {field:'invoice_price',title:'Invoice Price',type:'decimal',width:90,align:'right'},
        {field:'net_price',title:'Net Price',type:'decimal',width:90,align:'right'},
        {field:'start_date',title:'Start Date',type:'date',width:90,align:'left'},
        {field:'end_date',title:'End Date',type:'date',width:90,align:'left'},
        {field:'status',title:'Status',type:'string',bind:{ key:'Status_YN',data:[]},width:80,align:'left'},
        ],

      pagination: {}, //分页配置，见voltable组件api
    };
  },
  created() {
    //this.invalidModel.pricegroup_dbidname.render = this.getRender("pricegroup_dbid", 'pg')
    //新打開的頁面把緩存數據清理掉

    this.labelWidth = 180;
  },
  methods: {
    custKeyPress(){
      let  cust_id = this.formModel.cust_id
      if(cust_id) {
        this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id,{} , "loading").then(reslut => {
          if(reslut!==null){
            this.formModel.cust_dbid=reslut.cust_dbid;
            this.formModel.cust_id=reslut.cust_id
            this.formModel.cust_name=reslut.cust_name;
          }else {
            this.$message.error("Customer Id Is Not Exists.");
            this.formModel.cust_id=''
            this.formModel.cust_dbid=''
            this.formModel.cust_name=''
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
            this.formModel.prod_id=reslut.prod_id
            this.formModel.prod_ename=reslut.prod_ename;
          }else {
            this.$message.error("Product Id Is Not Exists.");
            this.formModel.prod_dbid=''
            this.formModel.prod_id=''
            this.formModel.prod_ename=''
          }

          return;
        })
      }
    },
    resetForm(){
        this.formModel={
          detach_date:new Date(),
          show_invalid:false,
        }
      this.$refs.mytable.rowData=[];

    },
    openPriceGroup(val){
      if(val==2){
        this.$refs.View_com_prod_pop_query.openModel(true,"prod_dbid","onSelect")
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
        if(fieldName=='prod_dbid'){
          this.formModel.prod_id=rows[0].prod_id
          this.formModel.prod_ename=rows[0].prod_ename;
          this.formModel.prod_dbid=rows[0].prod_dbid
        }else if(fieldName=='cust_dbid'){
          this.formModel.cust_id=rows[0].cust_id
          this.formModel.cust_name=rows[0].cust_name;
          this.formModel.cust_dbid=rows[0].cust_dbid
        }

    },
    clearPop(val){
      if(val==2){
        this.formModel.prod_id="";
        this.formModel.prod_ename="";
        this.formModel.prod_dbid="";
      }else if(val==1){
        this.formModel.cust_id="";
        this.formModel.cust_name="";
        this.formModel.cust_dbid="";
      }

    },


    search() {
      //点击搜索
      if(this.formModel.cust_dbid){

      }else{
        this.$message.error("Please input Customer.");
        return false;
      }
      this.$refs.mytable.load();
      this.tipsShow=true;

    },

    addRow() {
      let checkPassed=this.checkData();
      if(checkPassed){
        let rows =  this.$refs.mytable.getSelected()
        if (!rows || rows.length == 0) {
          return this.$message.error("Please select a record first.");
        }
        let detachKeys=[]
        rows.forEach(x => {
          detachKeys.push(x.custgroup_dbid);
        })
        this.formModel.detachKeys=detachKeys.join(",")
        this.http.post("api/View_cust_price/excuteCustomerDetachGroup", { mainData: this.formModel }, true)
                .then((x) => {
                  this.$Message.success("success");
                  this.search();
                });
      }

    },


    checkData(){
      debugger
      if(!this.formModel.cust_dbid){
         this.$message.error("Please input Customer.");
        return false
      }
      if(!this.formModel.detach_date){
         this.$message.error("Please input Detach Start Date.");
        return false
      }
      let now=this.parseTime(new Date(),'{y}-{m}-{d}')
      let date1_unix=Date.parse(now)
      let date2_unix=Date.parse(this.parseTime(this.formModel.detach_date,'{y}-{m}-{d}'))
      if(date1_unix>date2_unix){
        this.$message.error("Detach date must be greater than or equal to today");
        return false;
      }
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
      if(this.formModel.cust_dbid){
        params.wheres.push({ name: "cust_dbid", value: this.formModel.cust_dbid });
      }else{
        //return  this.$message.error("Please input Customer.");;
      }

      if(this.formModel.show_invalid){
        params.wheres.push({ name: "show_invalid", value: "1"});
      }
      if(this.formModel.prod_dbid){
        params.wheres.push({ name: "prod_dbid", value: this.formModel.prod_dbid });
      }else{

      }


      return true;
    },
  },
};
</script>
<style lang="less" scoped>
  li{
    list-style:none;
  }
  .a-pop {
    color:#0c83ff;border-bottom: 1px solid;margin-left: 9px;font-size:12px;text-decoration:none;cursor: pointer
  }
  .a-clear{
    font-size:12px;text-decoration:none;color:red;border-bottom: 1px solid;margin-left: 9px;text-decoration:none;cursor: pointer
  }
  .el-form-item {
    margin-bottom: 10px;
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
