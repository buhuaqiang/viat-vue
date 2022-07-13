<template>
  <div v-if="showFlag" class="vol-tabs">
    <el-tabs
            type="border-card"
            style="
        min-height: 370px;
        box-shadow: none;
        border-bottom: 0;
        border-top: 1px solid #eee;
      "
    >
      <!-- 从表1 -->
      <el-tab-pane :lazy="false" label="Stretagy Product">
        <template #label>
          <span><i class="el-icon-date"></i> Stretagy Product</span>
        </template>
        <!-- 从表1配置 ,双击可以开启编辑-->
        <div style="padding-bottom: 5px">
          <el-button
                  type="success"
                  icon="el-icon-plus"
                  size="mini"
                  ghost
                  @click="addStretagyProdList"
          >Add</el-button
          >
          <el-button
                  type="primary"
                  icon="el-icon-close"
                  size="mini"
                  ghost
                  @click="delTable1"
          >Delete</el-button
          >
        </div>
        <vol-table
                ref="table1"
                :loadKey="true"
                :clickEdit="true"
                :columns="tableColumns1"
                :pagination-hide="false"
                :height="300"
                :url=table1Url
                :defaultLoadPage="true"
                @loadBefore="loadTableBefore1"
                @loadAfter="loadTableAfter1"
                :index="true"
        ></vol-table>
      </el-tab-pane>
    </el-tabs>
  </div>
  <prodModelBody  @onSelect="onSelectByProd" ref="prodModelBody"></prodModelBody>
</template>
<script>
  //开发一对多从表需要参照voltable与viewgrid组件api
  import VolTable from "@/components/basic/VolTable.vue";
  import prodModelBody from   "../../basic/prod/View_com_prod_pop_query.vue";
  export default {
    components: {VolTable ,prodModelBody},
    data() {
      return {
        powercont_dbid:"",
        showFlag:true,
        table1RowData:"",
        delTable1RowData:[],
        calcuateResult:"",
        //从表1 this.$parent.editFormFields.powercont_dbid
       // table1Url: "api/Viat_app_power_contract_purchase_prod/GetPageData",//?powercont_dbid=" , //table1获取数据的接口 待補充
        table1Url:"api/Viat_wk_cont_stretagy_detail/GetPageData",
        //表配置的字段注意要与后台返回的查询字段大小写一致
        //从表2
        //表配置的字段注意要与后台返回的查询字段大小写一致   prod_id,prod_ename,qty,amt
        tableColumns1: [
          { field: "contstretail_dbid", title: "主键ID", type: "guid", width: 80, hidden: true },
          { field: "contstret_dbid", title: "外鍵ID", type: "guid", width: 80, hidden: true },
          { field: "prod_dbid", title: "外鍵ID", type: "guid", width: 80, hidden: true },

          {field:'prod_id',title:'產品ID',type:'string',width:90,align:'left',sort:true},
          {field:'prod_ename',title:'產品名稱',type:'string',width:150,align:'left',sort:true},
          {field:'nhi_price',title:'NHI',type:'decimal',width:110,align:'left'},
          {field:'invoice_price',title:'發票價',type:'decimal',width:110,edit: { type: "decimal" },align:'left'},
          {field:'net_price',title:'實售價',type:'decimal',width:110,edit: { type: "decimal" },align:'left'},
          {field:'min_qty',title:'最低數量',type:'int',width:110,edit: { type: "number" },align:'left'},
          {field:'prod_type',title:'類別',type:'string',width:110,align:'left'}

        ]
      };
    },
    methods: {
      //如果要获取页面的参数请使用 this.$emit("parentCall",见下面的使用方法
      modelOpen() {
        let $parent;
        //获取生成页面viewgrid的对象
        this.$emit("parentCall", ($this) => {
          $parent = $this;
        });

        this.contstret_dbid= $parent.editFormFields.contstret_dbid;

        this.table1Url = this.table1Url;//+this.powercont_dbid;

        //当前如果是新建重置两个表格数据
        if ($parent.currentAction == "Add") {
          this.showFlag = true;
          $parent.boxOptions.height=800;
          $parent.boxOptions.width=1400;
          this.clear();

        } else {
          $parent.boxOptions.height=800;
          $parent.boxOptions.width=1400;
          this.showFlag = true;
          //如果是编辑，添加两个表格的数据
          this.clear();

          this.$refs.table1.load();

        }
      },

      //从表2加载数据数前(操作与上面一样的,增加查询条件)
      loadTableBefore1(param, callBack) {
        let $parent = null;
        //当前是子页面，获取查询viewgrid页面的对象()
        this.$emit("parentCall", ($this) => {
          $parent = $this;
        });
        //如果是新建功能，禁止刷新操作
        if ($parent.currentAction == "Add") {
          return callBack(false);
        }
        //获取当前编辑主键id值
        let contstret_dbid = $parent.currentRow.contstret_dbid;
        //添加从表的查询参数(条件)
        //将当前选中的行主键传到后台用于查询(后台在GetTable2Data(PageDataOptions loadData)会接收到此参数)
        param.wheres.push({ name: "contstret_dbid", value: contstret_dbid });
        callBack(true);
      },

      //从后台加载从表1数据后
      loadTableAfter1(data, callBack) {

        //数据加载后，赋给对像，用于编辑用
        this.table1RowData = data;
        this.delTable1RowData= [];
        return true;
      },
      // 從表選擇 合約產品 回調處理
      onSelectByProd(fieldName,rows){
        if(fieldName =='table1'){
          //返回指定字段  prod_id,prod_ename,qty,amt
          let _rows = rows.map((row)=>{
            return{
              contstret_dbid:this.contstret_dbid,
              prod_id:row.prod_id,
              prod_dbid:row.prod_dbid,
              prod_ename:row.prod_ename,
              prod_type:row.prod_type,
              nhi_price:row.nhi_price,
              invoice_price:row.invoice_price,
              net_price:row.net_price,
              min_qty:row.min_qty
            }
          })
          //push的时候去除已经选择的产品   this.$refs.table2.rowData.push(..._rows);
          _rows.forEach(x => {
            let idx =  this.$refs.table1.rowData.some(item => {
              // 判断项应为获取的变量
              if(item.prod_dbid == x.prod_dbid) {
                return true;
              }
            })
            if(!idx){
              this.$refs.table1.rowData.push(x);
            }
          })
          this.table1RowData = this.$refs.table1.rowData;
        }
      },
      delTable1() {
        let rows = this.$refs.table1.getSelected();
        if (rows.length == 0) {
          return this.$Message.error("请先选中行");
        }
        //数据记录
        //数据记录
        rows.forEach(x=>{
          this.delTable1RowData.push(x);
        })

        this.$refs.table1.delRow();
        //可以this.http.post调用后台实际执行查询
      },
      RefreshTable1()
      {
        $refs.table1.load();
        $refs.delTable1Rowdata.reset();
      },
      clear() {
        this.$refs.table1.reset();
      },
      //添加合約產品
      addStretagyProdList(){
        this.$refs.prodModelBody.openModel(false,"table1","onSelect");
      },
    },
  };
</script>
<style lang="less" scoped>
  .vol-tabs {
    background: white;
  }
</style>
