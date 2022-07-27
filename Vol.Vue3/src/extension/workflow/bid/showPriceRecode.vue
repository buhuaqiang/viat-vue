<template>
  <VolBox
    v-model="model"
    :lazy="true"
    title="View Price Recode"
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
      cust_dbid:"",
      pricegroup_dbid:"",
      prod_dbid:"",
      fieldName:"",//編輯字段,用於回傳設置值
      formType:"f",//弹框打开的form类型,f-editFormFields  s-searchFormFields,ext-自定義擴展
      url:"",
      //url: "api/View_wk_bid_price_apply_main/RecentOrder?prod_dbid="+ this.prod_dbid+"&cust_dbid="+this.cust_dbid+"&pricegroup_dbid="+this.pricegroup_dbid,//加载数据的接口GetPriceDataForTransfer
      columns: [
        {field:'order_dbid',title:'order_dbid',type:'string',width:110,hidden:true,align:'left',sort:true},
        {field:'cust_id',title:'Cust ID',type:'string',width:110,require:true,align:'left'},
        {field:'cust_name',title:'Cust Name',type:'string',width:120,align:'left'},
        {field:'prod_id',title:'Prod ID',type:'string',width:110,align:'left',sort:true},
        {field:'prod_ename',title:'Prod Name',type:'string',width:160,align:'left'},
        {field:'order_no',title:'order_no',type:'string',width:110,align:'right'},
        {field:'qty',title:'qty',type:'decimal',width:110,align:'right'},
        ],
      pagination: {}, //分页配置，见voltable组件api
    };
  },
  methods: {
    openModel(single,cust_dbid,pricegroup_dbid,prod_dbid) {
      debugger
      this.single=single;
      this.model = true;
      this.cust_dbid = cust_dbid==""? null:cust_dbid;
      this.pricegroup_dbid = pricegroup_dbid==""? null:pricegroup_dbid;
      //this.cust_dbid = cust_dbid;
      //this.pricegroup_dbid = pricegroup_dbid;
      this.prod_dbid = prod_dbid;

      //this.cust_id=cust_id
      //this.prod_id=prod_id
      //this.url = "api/View_wk_bid_price_apply_main/RecentOrder?prod_dbid="+ this.prod_dbid+"cust_dbid="+this.cust_dbid+"pricegroup_dbid"+this.pricegroup_dbid;
      this.url = "api/View_wk_bid_price_apply_main/RecentOrder?prod_dbid="+ this.prod_dbid+"&cust_dbid="+this.cust_dbid+"&pricegroup_dbid="+this.pricegroup_dbid;
      this.http.get(this.url,{} , "loading").then(reslut => {
        if(reslut !=null){
          let _rows = reslut.map((row)=>{
            return{
              order_dbid:row.order_dbid,
              cust_id:row.cust_id,
              cust_name:row.cust_name,
              prod_id:row.prod_id,
              prod_ename:row.prod_ename,
              order_no:row.order_no,
              qty:row.qty
            }
          })
          debugger
          this.$refs.mytable.rowData =[];
          _rows.forEach(item => {
            let idx =  this.$refs.mytable.rowData.some(x => {
              // 判断项应为获取的变量
              if(x.order_dbid == item.order_dbid) {
                return true;
              }
            })
            if(!idx){
              this.$refs.mytable.rowData.push(item);
            }
          })
          this.$refs.mytable.load();
        }

        return;
      })
      //打开弹出框时，加载table数据
      /*this.$nextTick(() => {
        this.$refs.mytable.load();
      });*/
    },

    search() {
      //点击搜索
      this.$refs.mytable.load();
    },

    loadTableBefore(params) {

      //查询前，设置查询条件
     /* params.wheres.push({ name: "status", value: 'Y' });
      if(this.prod_id){
        params.wheres.push({ name: "prod_id", value: this.prod_id });
      }
      if(this.cust_id){
        params.wheres.push({ name: "cust_id", value: this.cust_id });
      }*/
      return true;
    },
  },
};
</script>
