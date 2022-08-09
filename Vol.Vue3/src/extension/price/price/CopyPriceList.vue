<template>
  <div  id="vol-main" >
    <div style="padding:20px 2px;">
      <el-form :inline="true"  label-width="200px" :model="formModel">
        <ul>
          <li>
            <el-form-item label="Type:" style="width: 100%">
              <el-radio-group v-model="formModel.selectType" >
                <el-radio :label="0" @change="hideType(0)">Cust</el-radio>
                <el-radio :label="1" @change="hideType(1)">Group</el-radio>
              </el-radio-group>
            </el-form-item>
          </li>
          <li>
            <el-form-item v-show="custShowFlag" label="Original Customer ID:" style="width: 40%">
              <el-input v-model="formModel.org_cust_id" @keyup.enter="custKeyPress(0)" style="width:120px;" ></el-input>
              <el-input v-model="formModel.org_cust_name" style="width:200px;padding-left: 2px" :disabled="true"></el-input>
              <el-input v-model="formModel.org_cust_dbid" type="hidden"  style="width:0px;line-height: 0px;"></el-input>
              <a @click="openPriceGroup(0,'org_cust_dbid')" class="a-pop"><i class="el-icon-zoom-in"></i>Pick</a>&nbsp;<a class="a-clear" @click="clearPop(0,'org_cust_dbid')"><i class="el-icon-zoom-out"></i>Clean</a>

            </el-form-item>

            <el-form-item v-show="custShowFlag" label="Copy to New Customer ID:" style="width: 40%">
              <el-input v-model="formModel.new_cust_id" @keyup.enter="custKeyPress(1)" style="width:120px;" ></el-input>
              <el-input v-model="formModel.new_cust_name" style="width:200px;padding-left: 2px" :disabled="true"></el-input>
              <el-input v-model="formModel.new_cust_dbid" type="hidden" style="width:0px;line-height: 0px;"></el-input>
              <a @click="openPriceGroup(0,'new_cust_dbid')" class="a-pop"><i class="el-icon-zoom-in"></i>Pick</a>&nbsp;<a class="a-clear" @click="clearPop(0,'new_cust_dbid')"><i class="el-icon-zoom-out"></i>Clean</a>

            </el-form-item>
          </li>
          <li>
            <el-form-item v-show="groupShowFlag" label="Original Group ID:" style="width: 40%">
              <el-input v-model="formModel.org_group_id" @keyup.enter="groupKeyPress(0)" style="width:120px;" ></el-input>
              <el-input v-model="formModel.org_group_name" style="width:200px;padding-left: 2px" :disabled="true"></el-input>
              <el-input v-model="formModel.org_pricegroup_dbid" type="hidden" style="width:0px;" :disabled="true"></el-input>
              <a @click="openPriceGroup(1,'org_pricegroup_dbid')" class="a-pop"><i class="el-icon-zoom-in"></i>Pick</a>&nbsp;<a class="a-clear" @click="clearPop(1,'org_pricegroup_dbid')"><i class="el-icon-zoom-out"></i>Clean</a>

            </el-form-item>

            <el-form-item v-show="groupShowFlag" label="Copy to New Group ID:" style="width: 40%">
              <el-input v-model="formModel.new_group_id" @keyup.enter="groupKeyPress(1)" style="width:120px;" ></el-input>
              <el-input v-model="formModel.new_group_name" style="width:200px;padding-left: 2px" :disabled="true"></el-input>
              <el-input v-model="formModel.new_pricegroup_dbid" type="hidden" style="width:0px;" :disabled="true"></el-input>
              <a @click="openPriceGroup(1,'new_pricegroup_dbid')" class="a-pop"><i class="el-icon-zoom-in"></i>Pick</a>&nbsp;<a class="a-clear" @click="clearPop(1,'new_pricegroup_dbid')"><i class="el-icon-zoom-out"></i>Clean</a>

            </el-form-item>
          </li>
          <li>
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
          </li>
          <li>
            <el-form-item label="Remark:" style="width: 60%">
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
        <div class="header">From Original</div>
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
          <div class="header">To New</div>
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
      custShowFlag:true,
      groupShowFlag:false,
      formModel:{
        selectType:0,
        start_date:new Date(),
        end_date:new Date('2099-12-31')
      },
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
      selectedData:[],//被選中的數據
      selected_dbids:[],//被選中的dbid
      fieldName:"",//編輯字段,用於回傳設置值
      formType:"f",//弹框打开的form类型,f-editFormFields  s-searchFormFields
      url: "api/View_cust_price/getOrginalDataFromCustOrGroup",//加载数据的接口(需要重新寫)
      columns: [
        {field:'prod_id',title:'Product ID',type:'string',width:90,require:true,align:'left'},
        {field:'prod_ename',title:'Product Name',type:'string',width:130,align:'left'},
        {field:'group_id',title:'Group ID',type:'string',width:90,require:true,align:'left'},
        {field:'group_name',title:'Group Name',type:'string',width:130,align:'left'},
        {field:'nhi_price',title:'NHI Price',type:'decimal',width:90,align:'left'},
        {field:'invoice_price',title:'Invoice Price',type:'decimal',width:90,align:'left'},
        {field:'net_price',title:'Net Price',type:'decimal',width:90,align:'left'},
        {field:'min_qty',title:'Min Qty',type:'decimal',width:90,align:'left'},
        {field:'start_date',title:'Start Date',type:'date',width:90,align:'left'},
        {field:'end_date',title:'End Date',type:'date',width:90,align:'left'},
        {field:'status',title:'Status',type:'string',bind:{ key:'Status_YN',data:[]},width:80,align:'left'},
        ],
      tableColumns2:[
        {field:'prod_id',title:'Product ID',type:'string',width:90,require:true,align:'left'},
        {field:'prod_ename',title:'Product Name',type:'string',width:130,align:'left'},
        {field:'nhi_price',title:'NHI Price',type:'decimal',width:90,align:'left'},
        {field:'invoice_price',title:'Invoice Price',type:'decimal',width:90,align:'left'},
        {field:'net_price',title:'Net Price',type:'decimal',width:90,align:'left'},
        {field:'min_qty',title:'Min Qty',type:'decimal',width:90,align:'left'},
      ],
      pagination: {size:120}, //分页配置，见voltable组件api
    };
  },
  created() {
    //this.invalidModel.pricegroup_dbidname.render = this.getRender("pricegroup_dbid", 'pg')
    //新打開的頁面把緩存數據清理掉
    this.selectedData=[]
    this.selected_dbids=[]
  },
  methods: {
    groupKeyPress(flag){
      let  group_id = ''
      if(flag==0){
        group_id = this.formModel.org_group_id
      }else if(flag==1){
        group_id = this.formModel.new_group_id
      }
      if(group_id) {
        this.http.get("api/Viat_app_cust_price_group/getPriceGroupByGroupID?group_id="+group_id,{} , "loading").then(reslut => {
          if(reslut!==null){
            if(flag==0){
              this.formModel.org_pricegroup_dbid=reslut.pricegroup_dbid;
              this.formModel.org_group_id=reslut.group_id
              this.formModel.org_group_name=reslut.group_name;
            }else if(flag==1){
              this.formModel.new_pricegroup_dbid=reslut.pricegroup_dbid;
              this.formModel.new_group_id=reslut.group_id ;
              this.formModel.new_group_name=reslut.group_name;
            }
          }else {
            this.$message.error("Group Id Is Not Exists.");
            if(flag==0){
              this.formModel.org_pricegroup_dbid='';
              this.formModel.org_group_id=''
              this.formModel.org_group_name=''
            }else if(flag==1){
              this.formModel.new_pricegroup_dbid='';
              this.formModel.new_group_id='' ;
              this.formModel.new_group_name='';
            }

          }

          return;
        })
      }
    },
    custKeyPress(flag){
      let  cust_id = ''
      if(flag==0){
        cust_id = this.formModel.org_cust_id
      }else if(flag==1){
        cust_id = this.formModel.new_cust_id
      }
      if(cust_id) {
        this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id,{} , "loading").then(reslut => {
          if(reslut!==null){

            if(flag==0){
              this.formModel.org_cust_dbid=reslut.cust_dbid;
              this.formModel.org_cust_id=reslut.cust_id
              this.formModel.org_cust_name=reslut.cust_name;
            }else if(flag==1){
              this.formModel.new_cust_dbid=reslut.cust_dbid;
              this.formModel.new_cust_id=reslut.cust_id
              this.formModel.new_cust_name=reslut.cust_name;
            }
          }else {
            this.$message.error("Customer Id Is Not Exists.");
            if(flag==0){
              this.formModel.org_cust_dbid='';
              this.formModel.org_cust_id=''
              this.formModel.org_cust_name=''
            }else if(flag==1){
              this.formModel.new_cust_dbid=''
              this.formModel.new_cust_id=''
              this.formModel.new_cust_name=''
            }

          }

          return;
        })
      }
    },

    hideType(val){
      if(val==0){
        this.custShowFlag=true;
        this.groupShowFlag=false;
      }else if (val==1){
        this.custShowFlag=false;
        this.groupShowFlag=true;
      }

      this.formModel.org_group_id="";
      this.formModel.org_group_name="";
      this.formModel.org_pricegroup_dbid="";
      this.formModel.new_group_id="";
      this.formModel.new_group_name="";
      this.formModel.new_pricegroup_dbid="";

      this.formModel.org_cust_id="";
      this.formModel.org_cust_name="";
      this.formModel.org_cust_dbid="";
      this.formModel.new_cust_id="";
      this.formModel.new_cust_name="";
      this.formModel.new_cust_dbid="";

    },

    resetForm(){
        this.formModel={
          selectType: 0,
          start_date:new Date(),
          end_date:new Date('2099-12-31')
        }
      this.$refs.mytable.rowData=[];
      this.selectedData=[];
      this.selected_dbids=[];

    },
    allChoose(){
      let table1Data=this.$refs.mytable.rowData;
      this.selectedData=[];//這一步是為了避免重複數據
      this.selected_dbids=[];
      this.selectedData=table1Data;
      table1Data.forEach(x=>{
        this.selected_dbids.push(x.custprice_dbid)
      })
      //重新加載查詢表的數據
      this.search();
    },
    selected(){
      let rows= this.$refs.mytable.getSelected()
      if(rows.length==0){
        return this.$message.error("Please select a row");
      }
      rows.forEach(x=>{
        let dbids = this.selected_dbids.find((f) => f == x.custprice_dbid);
        if(!dbids){
          this.selectedData.push(x);
          this.selected_dbids.push(x.custprice_dbid)
        }

      })
      //重新加載查詢表的數據
      this.search();
    },
    cancelSelected(){
      let rows= this.$refs.table2.getSelected()
      if(rows.length==0){
        return this.$message.error("Please select a row");
      }
      rows.forEach(x=>{
        let index=this.selected_dbids.findIndex((f) => f == x.custprice_dbid);
        let index2=this.selectedData.findIndex((f) => f.custprice_dbid == x.custprice_dbid);
        this.selectedData.splice(index2,1);
        this.selected_dbids.splice(index,1)
      })
      //重新加載查詢表的數據
      this.search();
    },
    cancelAll(){
      this.selectedData=[];
      this.selected_dbids=[];
      //重新加載查詢表的數據
      this.search();
    },
    openPriceGroup(val,fieldName){
      if(val==0){
        this.$refs.Viat_com_custModelBody.openModel(true,fieldName,"onSelect")
      }else if(val==1){
        this.$refs.PriceGroupModelBody.openModel(true,fieldName,"onSelect")
      }

    },

    openDemo() {
      this.model = true;
    },
    onSelectPop(fieldName,rows){
        if(rows.length!=1){
          return this.$message.error("Please select a record first.");
        }
        if(fieldName=='org_pricegroup_dbid'){
          this.formModel.org_group_id=rows[0].group_id
          this.formModel.org_group_name=rows[0].group_name;
          this.formModel.org_pricegroup_dbid=rows[0].pricegroup_dbid
        }else if(fieldName=='new_pricegroup_dbid'){
          this.formModel.new_group_id=rows[0].group_id
          this.formModel.new_group_name=rows[0].group_name;
          this.formModel.new_pricegroup_dbid=rows[0].pricegroup_dbid
        }else if(fieldName=='new_cust_dbid'){
          this.formModel.new_cust_id=rows[0].cust_id
          this.formModel.new_cust_name=rows[0].cust_name;
          this.formModel.new_cust_dbid=rows[0].cust_dbid
        }else if(fieldName=='org_cust_dbid'){
          this.formModel.org_cust_id=rows[0].cust_id
          this.formModel.org_cust_name=rows[0].cust_name;
          this.formModel.org_cust_dbid=rows[0].cust_dbid
        }

    },
    clearPop(val,fieldName){
      if(fieldName=='org_pricegroup_dbid'){
        this.formModel.org_group_id="";
        this.formModel.org_group_name="";
        this.formModel.org_pricegroup_dbid=""
      }else if(fieldName=='new_pricegroup_dbid'){
        this.formModel.new_group_id="";
        this.formModel.new_group_name="";
        this.formModel.new_pricegroup_dbid=""
      }else if(fieldName=='new_cust_dbid'){
        this.formModel.new_cust_id=""
        this.formModel.new_cust_name=""
        this.formModel.new_cust_dbid=""
      }else if(fieldName=='org_cust_dbid'){
        this.formModel.org_cust_id=""
        this.formModel.org_cust_name=""
        this.formModel.org_cust_dbid=""
      }

    },


    search() {
      //点击搜索
      if(this.formModel.selectType==0){
        if(this.formModel.org_cust_dbid){

        }else{
          this.$message.error("Please input Original Customer.");
          return false;
        }

      }else if (this.formModel.selectType==1){
        if(this.formModel.org_pricegroup_dbid){

        }else{
          this.$message.error("Please input Original Group.");
          return false;
        }
      }

      this.$refs.mytable.load();
    },

    addRow() {
      let rows =  this.$refs.table2.getSelected()
      if (!rows || rows.length == 0) {
        return this.$message.error("Please select a row");
      }
      this.checkData();
      this.formModel.rows=rows;
      this.http.post("api/View_cust_price/copyPriceList", { mainData: this.formModel }, true)
              .then((x) => {
                this.$Message.success("success");
                if (!x.status) {
                  this.$Message.error(x.message);
                  return;
                }
              });
    },


    checkData(){
      if(this.formModel.selectType==0){
        if(!this.formModel.org_cust_dbid){
          return this.$message.error("Please input Original Customer.");
        }
        if(!this.formModel.new_cust_dbid){
          return this.$message.error("Please input New Customer.");
        }
      }else if (this.formModel.selectType==1){
        if(!this.formModel.org_pricegroup_dbid){
          return this.$message.error("Please input Original Group.");
        }
        if(!this.formModel.new_pricegroup_dbid){
          return this.$message.error("Please input New Group.");
        }
      }

      if(!this.formModel.start_date){
        return this.$message.error("Please input Start Date.");
      }
      if(!this.formModel.end_date){
        return this.$message.error("Please input End Date.");
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
    rowClick1({ row, column, event }) {
      //查询界面点击行事件
      this.$refs.table2.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
    },
    loadTableBefore(params) {
      //查询前，设置查询条件
      if(this.selected_dbids.length>0){
        params.wheres.push({ name: "selected_dbids", value: this.selected_dbids,displayType:'not in' });
      }
      if(this.formModel.org_cust_dbid){
        params.wheres.push({ name: "org_cust_dbid", value: this.formModel.org_cust_dbid });
      }else{

      }

      if(this.formModel.org_pricegroup_dbid){
        params.wheres.push({ name: "org_pricegroup_dbid", value: this.formModel.org_pricegroup_dbid });
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
  .el-form-item--medium .el-form-item__content{
    line-height: 0px;
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
    height: 600px;
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
