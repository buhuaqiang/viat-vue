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
        <el-form-item id="0" v-show="groupShowFlag" label="Group:" style="width: 40%">
          <el-input v-model="invalidModel.group_id" style="width:120px;" @keyup.enter="groupKeyPress"></el-input>
          <el-input v-model="invalidModel.group_name" style="width:200px;padding-left: 2px"  :disabled="true"></el-input>
          <el-input v-model="invalidModel.pricegroup_dbid" type="hidden" style="width:0px;" :disabled="true"></el-input>
          <a @click="openPriceGroup(0)" class="a-pop"><i class="el-icon-zoom-in"></i>Pick</a>&nbsp;<a class="a-clear" @click="clearPop(0)"><i class="el-icon-zoom-out"></i>Clean</a>

        </el-form-item>
        <el-form-item id="1" v-show="custShowFlag" label="Customer:" style="width: 40%;">
          <el-input v-model="invalidModel.cust_id" style="width:120px;" @keyup.enter="custKeyPress"></el-input>
          <el-input v-model="invalidModel.cust_name" style="width:200px;padding-left: 2px"  :disabled="true"></el-input>
          <el-input v-model="invalidModel.cust_dbid" type="hidden" style="width:0px;" :disabled="true"></el-input>
          <a @click="openPriceGroup(1)" class="a-pop"><i class="el-icon-zoom-in"></i>Pick</a>&nbsp;<a class="a-clear" @click="clearPop(1)"><i class="el-icon-zoom-out"></i>Clean</a>

        </el-form-item>
        <el-form-item v-show="channelShowFlag" label="Channel:" style="width: 40%">
          <el-select v-model="invalidModel.channelValue">
            <el-option
                    v-for="item in channelData"
                    :key="item.key"
                    :label="item.value"
                    :value="item.key"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-show="prodShowFlag" label="Product:" style="width: 40%">
          <el-input v-model="invalidModel.prod_id" style="width:120px;" @keyup.enter="prodKeyPress"></el-input>
          <el-input v-model="invalidModel.prod_ename" style="width:200px;padding-left: 2px"  :disabled="true"></el-input>
          <el-input v-model="invalidModel.prod_dbid"  type="hidden" style="width:0px;" :disabled="true"></el-input>
          <a @click="openPriceGroup(2)" class="a-pop"><i class="el-icon-zoom-in"></i>Pick</a>&nbsp;<a class="a-clear" @click="clearPop(2)"><i class="el-icon-zoom-out"></i>Clean</a>

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
              v-show="groupShowFlag || custShowFlag || channelShowFlag"
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
              v-show="groupShowFlag || custShowFlag || channelShowFlag"
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
            :url="url2"
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
      prodShowFlag:true,
      channelShowFlag:false,
      channelData:[],
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
      group_id:"",
      cust_id:"",
      product_id:"",
      invalid_date:"",
      selectType:"",
      remark:"",
      fieldName:"",//編輯字段,用於回傳設置值
      formType:"f",//弹框打开的form类型,f-editFormFields  s-searchFormFields
      url: "api/View_cust_price/GetGroupInvalidPageData",//group加载数据的接口
      url2:"api/View_cust_price_detail/GetCustInvalidPageData",//customer加载数据的接口
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
    this.getChannel();
  },
  methods: {
    getChannel(){
      //健保渠道
      this.http.post('/api/Sys_Dictionary/GetVueDictionary', ['Channel']).then((dic) => {
         this.channelData=dic[0].data;
       });
    },
    groupKeyPress(){
      let  group_id = this.invalidModel.group_id
      if(group_id) {
        this.http.get("api/Viat_app_cust_price_group/getPriceGroupByGroupID?group_id="+group_id,{} , "loading").then(reslut => {
          if(reslut!==null){
            this.invalidModel.pricegroup_dbid=reslut.pricegroup_dbid;
            this.invalidModel.group_id=reslut.group_id;
            this.invalidModel.group_name=reslut.group_name;
          }else {
            this.$message.error("Group Id Is Not Exists.");
            this.invalidModel.pricegroup_dbid='';
            this.invalidModel.group_id='';
            this.invalidModel.group_name='';
          }

          return;
        })
      }
    },
    custKeyPress(){
      let  cust_id = this.invalidModel.cust_id
      if(cust_id) {
        this.http.get("api/Viat_com_cust/getCustByCustID?cust_id="+cust_id,{} , "loading").then(reslut => {
          if(reslut!==null){
            this.invalidModel.cust_dbid=reslut.cust_dbid;
            this.invalidModel.cust_id=reslut.cust_id;
            this.invalidModel.cust_name=reslut.cust_name;
          }else {
            this.$message.error("Customer Id Is Not Exists.");
            this.invalidModel.cust_dbid='';
            this.invalidModel.cust_id='';
            this.invalidModel.cust_name='';
          }

          return;
        })
      }
    },
    prodKeyPress(){
      let  prod_id = this.invalidModel.prod_id
      if(prod_id) {
        this.http.get("api/Viat_com_prod/getProdByProdID?prod_id="+prod_id,{} , "loading").then(reslut => {
          if(reslut!==null){
            this.invalidModel.prod_dbid=reslut.prod_dbid;
            this.invalidModel.prod_id=reslut.prod_id;
            this.invalidModel.prod_ename=reslut.prod_ename;
          }else {
            this.$message.error("Product Id Is Not Exists.");
            this.invalidModel.prod_dbid='';
            this.invalidModel.prod_id='';
            this.invalidModel.prod_ename='';
          }
          return;
        })
      }
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
    },
    onSelectPop(fieldName,rows){
        debugger
        if(rows.length!=1){
          return this.$message.error("Please select a record first.");
        }
        if(fieldName=='pricegroup_dbid'){
          this.invalidModel.group_id=rows[0].group_id
          this.invalidModel.group_name=rows[0].group_name
          this.invalidModel.pricegroup_dbid=rows[0].pricegroup_dbid
        }else if(fieldName=='cust_dbid'){
          this.invalidModel.cust_dbid=rows[0].cust_dbid
          this.invalidModel.cust_id=rows[0].cust_id
          this.invalidModel.cust_name=rows[0].cust_name
        }else if(fieldName=='prod_dbid'){
          this.invalidModel.prod_dbid=rows[0].prod_dbid
          this.invalidModel.prod_id=rows[0].prod_id
          this.invalidModel.prod_ename=rows[0].prod_ename
        }

    },
    clearPop(val){
      if(val==0){
        this.invalidModel.group_id="";
        this.invalidModel.group_name="";
        this.invalidModel.pricegroup_dbid="";
      }else if(val==1){
        this.invalidModel.cust_id="";
        this.invalidModel.cust_name="";
        this.invalidModel.cust_dbid="";
      }else if(val==2){
        this.invalidModel.prod_ename="";
        this.invalidModel.prod_dbid="";
        this.invalidModel.prod_id="";
      }

    },


    search() {
      //点击搜索
      if (this.custShowFlag ) {
        if(this.invalidModel.cust_dbid){
            this.$refs.table2.load();
        }else{
           this.$message.error("Please input Customer.");
        }
      }
      if (this.channelShowFlag ) {
        if(this.invalidModel.channelValue){
          this.$refs.table2.load();
        }else{
          this.$message.error("Please select a channel.");
        }
      }
      if (this.groupShowFlag  ) {
        if(this.invalidModel.pricegroup_dbid){
          this.$refs.mytable.load();
        }else{
          this.$message.error("Please input Group.");
          return  false
        }

      }

    },

    hideType(val){
      if(val==0){
        this.custShowFlag=false;
        this.groupShowFlag=true;
        this.channelShowFlag=false
      }else if (val==1){
        this.custShowFlag=true;
        this.groupShowFlag=false;
        this.channelShowFlag=false
      }else if (val==2){
        this.custShowFlag=false;
        this.groupShowFlag=false;
        this.channelShowFlag=false
      }else if(val==3){
        this.channelShowFlag=true
        this.custShowFlag=false;
        this.groupShowFlag=false;
      }

      this.invalidModel.group_id="";
      this.invalidModel.group_name="";
      this.invalidModel.pricegroup_dbid="";

      this.invalidModel.cust_id="";
      this.invalidModel.cust_name="";
      this.invalidModel.cust_dbid="";

      this.invalidModel.prod_ename="";
      this.invalidModel.prod_dbid="";
      this.invalidModel.prod_id="";

      this.invalidModel.channelValue=''

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
          return this.$message.error("Please select a record first.");
        }
      }
      this.checkData();
      this.invalidModel.rows=rows;
      this.invalidModel.isAll=0;
      this.$confirm('Are you sure invalid price ?', 'warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'CANCEL',
        type: 'warning',
        center: true
      }).then(() => {
        this.http.post("api/View_cust_price/invalidData",  this.invalidModel, true)
                .then((x) => {
                  if (!x.status) {
                    this.$Message.error(x.message);
                    return;
                  }else{
                    this.search();
                    this.$Message.success("Save Completed!");
                  }
                });
      });

    },
    addAll() {
      this.checkData();
      this.invalidModel.isAll=1;

      this.$confirm('Are you sure invalid price ?', 'warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'CANCEL',
        type: 'warning',
        center: true
      }).then(() => {
        this.http.post("api/View_cust_price/invalidData",  this.invalidModel, true)
                .then((x) => {
                        this.http.post("api/View_cust_price/invalidData", this.invalidModel, true)
                          .then((x) => {
                            if (!x.status) {
                              this.$Message.error(x.message);
                              return;
                            }else{
                              this.search();
                              this.$Message.success("Save Completed!");
                            }
                          });
                });
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
      if(this.channelShowFlag ){
        if(!this.invalidModel.channelValue){
          return this.$message.error("Please select channel.");
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
      if(this.channelShowFlag){
        if(this.invalidModel.channelValue){
          params.wheres.push({ name: "channelValue", value: this.invalidModel.channelValue });
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
  .el-form-item--medium .el-form-item__content{
    line-height: 0px;
  }
</style>
