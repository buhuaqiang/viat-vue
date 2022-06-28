<template>
  <div  id="vol-main" >
    <div style="padding:20px 2px;">
      <el-form :inline="true"  label-width="150px" :model="formModel">
        <el-form-item  label="Customer:" style="width: 35%;">
          <el-input v-model="formModel.cust_dbidname" style="width:150px;" ></el-input>
          <a @click="openPriceGroup(1)" class="a-pop"><i class="el-icon-zoom-in"></i>選擇</a>&nbsp;<a class="a-clear" @click="clearPop(1)"><i class="el-icon-zoom-out"></i>清除</a>
          <el-input v-model="formModel.cust_dbid" type="hidden" style="width:150px;" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="Detach Start Date:" style="width: 60%">
          <el-date-picker
                  suffix-icon="el-icon-date"
                  v-model="formModel.detach_date"
                  type="date"
                  placeholder="" >
          </el-date-picker>
        </el-form-item>
        <el-form-item  label="Product:" style="width: 35%">
          <el-input v-model="formModel.prod_dbidname" style="width:150px;" ></el-input>
          <a @click="openPriceGroup(2)" class="a-pop"><i class="el-icon-zoom-in"></i>選擇</a>&nbsp;<a class="a-clear" @click="clearPop(2)"><i class="el-icon-zoom-out"></i>清除</a>
          <el-input v-model="formModel.prod_dbid" type="hidden" style="width:150px;" :disabled="true"></el-input>
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
        detach_date:new Date()
      },
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
      fieldName:"",//編輯字段,用於回傳設置值
      formType:"f",//弹框打开的form类型,f-editFormFields  s-searchFormFields
      url: "api/View_cust_price/getPriceGroupProducts",//加载数据的接口(需要重新寫)
      columns: [
        {field:'custprice_dbid',title:'custprice_dbid',type:'string',width:90,require:true,align:'left', hidden: true},
        {field:'group_id',title:'Group ID',type:'string',width:90,require:true,align:'left'},
        {field:'group_name',title:'Group Name',type:'string',width:130,align:'left'},
        {field:'prod_id',title:'Product ID',type:'string',width:90,require:true,align:'left'},
        {field:'prod_ename',title:'Product Name',type:'string',width:130,align:'left'},
        {field:'nhi_price',title:'NHI Price',type:'decimal',width:90,align:'left'},
        {field:'invoice_price',title:'Invoice Price',type:'decimal',width:90,align:'left'},
        {field:'net_price',title:'Net Price',type:'decimal',width:90,align:'left'},
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
    resetForm(){
        this.formModel={
          detach_date:new Date(),
        }
      this.$refs.mytable.rowData=[];

    },
    openPriceGroup(val){
      if(val==2){
        this.$refs.View_com_prod_pop_query.openDemo("prod_dbid","ext")
      }else if(val==1){
        this.$refs.Viat_com_custModelBody.openDemo("cust_dbid","ext")
      }
    },

    openDemo() {
      this.model = true;
    },
    onSelectPop(fieldName,rows){
        if(rows.length!=1){
          return this.$message.error("請選擇數據");
        }
        if(fieldName=='prod_dbid'){
          this.formModel.prod_dbidname=rows[0].prod_id+" "+rows[0].prod_ename;
          this.formModel.prod_dbid=rows[0].prod_dbid
        }else if(fieldName=='cust_dbid'){
          this.formModel.cust_dbidname=rows[0].cust_id+" "+rows[0].cust_name;
          this.formModel.cust_dbid=rows[0].cust_dbid
        }

    },
    clearPop(val){
      if(val==2){
        this.formModel.prod_dbidname="";
        this.formModel.prod_dbid="";
      }else if(val==1){
        this.formModel.cust_dbidname="";
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
      let rows =  this.$refs.mytable.getSelected()
      if (!rows || rows.length == 0) {
        return this.$message.error("請選擇數據");
      }
      this.checkData();
      this.formModel.rows=rows;
      this.http.post("api/View_cust_price/excuteCustomerDetachGroup", { mainData: this.formModel }, true)
              .then((x) => {
                this.$Message.success("success");
                if (!x.status) {
                  this.$Message.error(x.message);
                  return;
                }
              });
    },


    checkData(){
      if(!this.formModel.cust_dbid){
        return this.$message.error("Please input Customer.");
      }

      if(!this.formModel.detach_date){
        return this.$message.error("Please input Detach Start Date.");
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

      if(this.formModel.cust_dbid){
        params.wheres.push({ name: "cust_dbid", value: this.formModel.cust_dbid });
      }else{
        //return  this.$message.error("Please input Customer.");;
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
  .a-pop {
    color:#0c83ff;border-bottom: 1px solid;margin-left: 9px;font-size:12px;text-decoration:none;cursor: pointer
  }
  .a-clear{
    font-size:12px;text-decoration:none;color:red;border-bottom: 1px solid;margin-left: 9px;text-decoration:none;cursor: pointer
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
