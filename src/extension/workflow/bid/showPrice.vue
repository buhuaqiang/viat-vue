<template>
  <VolBox
    v-model="model"
    :lazy="true"
    title="View Price"
    :height="600"
    :width="1500"
    :padding="15"
  >
    <!-- 设置查询条件 -->


    <!-- vol-table配置的这些属性见VolTable组件api文件 -->
    <vol-table
      ref="mytable"
      :loadKey="true"
      :columns="columns"
      :pagination="pagination"
      :pagination-hide="false"
      :max-height="420"
      :url="url"
      :index="true"
      :single="single"
      :defaultLoadPage="defaultLoadPage"
      @loadBefore="loadTableBefore"
    ></vol-table>

  </VolBox>
</template>
<script>
import VolBox from "@/components/basic/VolBox.vue";
import VolTable from "@/components/basic/VolTable.vue";
export default {
  components: {
    VolBox: VolBox,
    VolTable: VolTable,
  },
  data() {
    return {
      model: false,
      single: true,//默認單選
      returnType:"",//調用類型,多層級調用onSelect,handlePriceGroupSelected父頁面必須要重寫定義的方法
      flag:"",//字段欄位標識
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
      cust_id:"",
      prod_id:"",
      fieldName:"",//編輯字段,用於回傳設置值
      formType:"f",//弹框打开的form类型,f-editFormFields  s-searchFormFields,ext-自定義擴展
      url1: "api/View_cust_price_detail/GetPriceDataForTransfer",//加载数据的接口GetPriceDataForTransfer
      url2: "api/View_wk_bid_price_apply_main/GetPriceDataForApply",//加载数据的接口GetPriceDataForApply
      columns: [
        {field:'group_id',title:'Group ID',type:'string',width:110,require:true,align:'left',sort:true},
        {field:'group_name',title:'Group Name',type:'string',width:120,align:'left'},
        {field:'cust_id',title:'Cust ID',type:'string',width:110,require:true,align:'left',sort:true},
        {field:'cust_name',title:'Cust Name',type:'string',width:120,align:'left'},
        {field:'prod_id',title:'Prod ID',type:'string',width:110,align:'left',sort:true},
        {field:'prod_ename',title:'Prod Name',type:'string',width:160,align:'left'},
        {field:'nhi_price',title:'NHI Price',type:'string',width:110,align:'right'},
        {field:'invoice_price',title:'Invoice Price',type:'string',width:110,align:'right'},
        {field:'min_qty',title:'Min Qty',type:'string',width:80,align:'right'},
        {field:'start_date',title:'Start Date',type:'date',width:120,align:'left'},
        {field:'end_date',title:'End Date',type:'date',width:120,align:'left'},
        {field:'status',title:'Status',type:'string',bind:{ key:'Status_YN',data:[]},align:'left'},
        ],
      pagination: {}, //分页配置，见voltable组件api
    };
  },
  methods: {
    openModel(single,cust_id,prod_id) {
      debugger
      this.single=single;
      this.model = true;
      this.cust_id=cust_id
      this.prod_id=prod_id
      let path =this.$route.path;
      if(path=="/View_wk_bid_price_apply_main"){//從申請入口查詢
        this.url = this.url2
      }else{//從transfer入口查詢
        this.url = this.url1
      }


      //打开弹出框时，加载table数据
      this.$nextTick(() => {
        this.$refs.mytable.load();
      });
    },

    search() {
      //点击搜索
      this.$refs.mytable.load();
    },

    loadTableBefore(params) {
      let path =this.$route.path;
      if(path=="/View_wk_bid_price_apply_main"){//order申請時查詢個人訂單信息
        let userInfo = this.$store.getters.getUserInfo();
        let userId = userInfo.userId;
        params.wheres.push({ name: "created_user", value: userId});
      }
      //查询前，设置查询条件
      params.wheres.push({ name: "status", value: 'Y' });
      if(this.prod_id){
        params.wheres.push({ name: "prod_id", value: this.prod_id });
      }
      if(this.cust_id){
        params.wheres.push({ name: "cust_id", value: this.cust_id });
      }
      return false;
    },
  },
};
</script>
