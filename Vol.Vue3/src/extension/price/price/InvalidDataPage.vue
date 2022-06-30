<template>
  <VolBox
    v-model="model"
    :lazy="true"
    title="Invalid Cache"
    :height="700"
    :width="1500"
    :padding="15"
  >
    <div style="padding-bottom: 10px">
      <el-form :inline="true" label-position="left" label-width="100px" :model="invalidModel">
        <el-form-item label="Type:" style="width: 100%">
          <el-radio-group v-model="invalidModel.selectType" >
            <el-radio :label="0" @change="hideType(0)">By Group</el-radio>
            <el-radio :label="1" @change="hideType(1)">By Customer</el-radio>
            <el-radio :label="2" @change="hideType(2)">By Product</el-radio>
            <el-radio :label="3" @change="hideType(3)">By Channel</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item id="0" v-show="groupShowFlag" label="Group:" style="width: 35%">
          <el-input v-model="invalidModel.pricegroup_dbidname" style="width:150px;" :disabled="true"></el-input>
          <a @click="openPriceGroup(0)" class="a-pop"><i class="el-icon-zoom-in"></i>Pick</a>&nbsp;<a class="a-clear" @click="clearPop(0)"><i class="el-icon-zoom-out"></i>Clean</a>
          <el-input v-model="invalidModel.pricegroup_dbid" type="hidden" style="width:150px;" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item id="1" v-show="custShowFlag" label="Customer:" style="width: 35%;">
          <el-input v-model="invalidModel.cust_dbidname" style="width:150px;" :disabled="true"></el-input>
          <a @click="openPriceGroup(1)" class="a-pop"><i class="el-icon-zoom-in"></i>Pick</a>&nbsp;<a class="a-clear" @click="clearPop(1)"><i class="el-icon-zoom-out"></i>Clean</a>
          <el-input v-model="invalidModel.cust_dbid" type="hidden" style="width:150px;" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="Product:" style="width: 35%">
          <el-input v-model="invalidModel.prod_dbidname" style="width:150px;" :disabled="true"></el-input>
          <a @click="openPriceGroup(2)" class="a-pop"><i class="el-icon-zoom-in"></i>Pick</a>&nbsp;<a class="a-clear" @click="clearPop(2)"><i class="el-icon-zoom-out"></i>Clean</a>
          <el-input v-model="invalidModel.prod_dbid"  type="hidden" style="width:150px;" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="Invalid Date:" style="width: 30%">
          <el-date-picker
                  suffix-icon="el-icon-date"
                  v-model="invalidModel.invalid_date"
                  type="date"
                  placeholder="" >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Remark:" style="width: 60%">
          <el-input type="textarea" v-model="invalidModel.remark" style="width:250px;"></el-input>
        </el-form-item>
      </el-form>
      <el-button
              v-show="groupShowFlag || custShowFlag"
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
      >Invalid</el-button
      >
      <el-button
              v-show="groupShowFlag || custShowFlag"
              type="warning"
              icon="el-icon-document-checked"
              @click="addAll()"
      >Invalid All</el-button
      >
    </div>

    <!-- vol-table配置的这些属性见VolTable组件api文件 -->
    <vol-table
            v-show="groupShowFlag"
      ref="mytable"
      :loadKey="true"
      :columns="columns"
      :pagination="pagination"
      :pagination-hide="false"
      :height="440"
      :url="url"
      :index="true"
      :single="false"
      :defaultLoadPage="false"
      @loadBefore="loadTableBefore"
      @loadAfter="loadTableAfter"
      @rowClick = "rowClick"
    ></vol-table>

    <vol-table
            v-show="custShowFlag"
            ref="table2"
            :loadKey="true"
            :clickEdit="false"
            :columns="tableColumns2"
            :pagination-hide="false"
            :single="false"
            :height="300"
            :url="url"
            :defaultLoadPage="false"
            @loadBefore="loadTableBefore"
            :index="true"
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
      invalidModel:{
        selectType:0,
        invalid_date:new Date()
      },
      groupShowFlag:true,
      custShowFlag:false,
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
      group_id:"",
      cust_id:"",
      product_id:"",
      invalid_date:"",
      selectType:"",
      remark:"",
      fieldName:"",//編輯字段,用於回傳設置值
      formType:"f",//弹框打开的form类型,f-editFormFields  s-searchFormFields
      url: "api/View_cust_price/GetPopPageData",//加载数据的接口
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
      tableColumns2:[
        { field: "custprice_dbid", title: "主键ID", type: "guid", width: 80, hidden: true ,isKey: true},
        {field:'cust_id',title:'Cust Id',type:'string',width:110,require:true,align:'left',sort:true},
        {field:'cust_name',title:'Cust Name',type:'string',width:120,align:'left'},
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
    //this.invalidModel.pricegroup_dbidname.render = this.getRender("pricegroup_dbid", 'pg')
  },
  methods: {
    openPriceGroup(val){
      if(val==0){
        this.$refs.PriceGroupModelBody.openDemo("pricegroup_dbid","ext")
      }else if(val==1){
        this.$refs.Viat_com_custModelBody.openDemo("cust_dbid","ext")
      }else if(val==2){
        this.$refs.View_com_prod_pop_query.openDemo("prod_dbid","ext")
      }

    },

    openDemo() {
      this.model = true;
    },
    onSelectPop(fieldName,rows){
        debugger
        if(rows.length!=1){
          return this.$message.error("請選擇數據");
        }
        if(fieldName=='pricegroup_dbid'){
          this.invalidModel.pricegroup_dbidname=rows[0].group_id+" "+rows[0].group_name;
          this.invalidModel.pricegroup_dbid=rows[0].pricegroup_dbid
        }else if(fieldName=='cust_dbid'){
          this.invalidModel.cust_dbidname=rows[0].cust_id+" "+rows[0].cust_name;
          this.invalidModel.cust_dbid=rows[0].cust_dbid
        }else if(fieldName=='prod_dbid'){
          this.invalidModel.prod_dbidname=rows[0].prod_id+" "+rows[0].prod_ename;
          this.invalidModel.prod_dbid=rows[0].prod_dbid
        }

    },
    clearPop(val){
      if(val==0){
        this.invalidModel.pricegroup_dbidname="";
        this.invalidModel.pricegroup_dbid="";
      }else if(val==1){
        this.invalidModel.cust_dbidname="";
        this.invalidModel.cust_dbid="";
      }else if(val==2){
        this.invalidModel.prod_dbidname="";
        this.invalidModel.prod_dbid="";
      }

    },


    search() {
      //点击搜索
      if(this.groupShowFlag){
        this.$refs.mytable.load();
      }
      if(this.custShowFlag){
        this.$refs.table2.load();
      }
    },

    hideType(val){
      if(val==0){
        this.custShowFlag=false;
        this.groupShowFlag=true;
      }else if (val==1){
        this.custShowFlag=true;
        this.groupShowFlag=false;
      }else if (val==2){
        this.custShowFlag=false;
        this.groupShowFlag=false;
      }

      this.invalidModel.pricegroup_dbidname="";
      this.invalidModel.pricegroup_dbid="";

      this.invalidModel.cust_dbidname="";
      this.invalidModel.cust_dbid="";

      this.invalidModel.prod_dbidname="";
      this.invalidModel.prod_dbid="";

    },
    addRow() {
      let rows = [];
      if(this.custShowFlag || this.groupShowFlag){
        if(this.groupShowFlag){
          rows=this.$refs.mytable.getSelected()
        }
        if(this.custShowFlag){
          rows=this.$refs.table2.getSelected()
        }
        if(!this.invalidModel.invalid_date){
          return this.$message.error("Invalid date is empty.");
        }
        if (!rows || rows.length == 0) {
          return this.$message.error("請選擇數據");
        }
      }
      this.checkData();
      this.invalidModel.rows=rows;
      this.invalidModel.isAll=0;
      this.http.post("api/View_cust_price/invalidData", { mainData: this.invalidModel }, true)
              .then((x) => {
                if (!x.status) {
                  this.$Message.error(x.message);
                  return;
                }
              });
    },
    addAll() {
      this.checkData();
      this.invalidModel.isAll=1;
      this.http.post("api/View_cust_price/invalidData", { mainData: this.invalidModel }, true)
              .then((x) => {
                if (!x.status) {
                  this.$Message.error(x.message);
                  return;
                }
              });
    },

    checkData(){
      if(!this.invalidModel.invalid_date){
        return this.$message.error("Invalid date is empty.");
      }
      if(this.groupShowFlag ){
        if(!this.invalidModel.pricegroup_dbid){
          return this.$message.error("Please input Group.");
        }
      }
      if(this.custShowFlag ){
        if(!this.invalidModel.cust_dbid){
          return this.$message.error("Please input Customer.");
        }
      }
      if(!this.custShowFlag && !this.groupShowFlag){
        if(!this.invalidModel.prod_dbid){
          return this.$message.error("Please input Product.");
        }
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
      params.wheres.push({ name: "selectType", value: this.invalidModel.selectType });
      if (this.custShowFlag ) {
        if(this.invalidModel.cust_dbid){
          params.wheres.push({ name: "cust_dbid", value: this.invalidModel.cust_dbid });
        }else{
          return  this.$message.error("Please input Customer.");;
        }

      }
      if (this.groupShowFlag  ) {
        if(this.invalidModel.pricegroup_dbid){
          params.wheres.push({ name: "pricegroup_dbid", value: this.invalidModel.pricegroup_dbid });
        }else{
          return  this.$message.error("Please input Group.");;
        }

      }
      if(this.invalidModel.prod_dbid){
        params.wheres.push({ name: "prod_dbid", value: this.invalidModel.prod_dbid });
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

  .el-form-item {
    margin-bottom: 10px;
  }
</style>
