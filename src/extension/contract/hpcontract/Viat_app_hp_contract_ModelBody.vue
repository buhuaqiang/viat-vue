<template>
  <div v-if="showFlag" class="vol-tabs">
    <el-tabs
      type="border-card"
      style="
        min-height: 370px;
        box-shadow: none;
        border-bottom: 0;
        border-top: 10px solid #eee;
      "
    >
      <el-tab-pane>
        <template #label>
          <span><i class="el-icon-date"></i>合約客戶List</span>
        </template>
        <!-- 显示操作按钮 -->
        <div>

          <el-button
            type="success"
            icon="el-icon-plus"
            size="mini"
            ghost
            @click="addCustList"
            >添加客戶</el-button
          >
          <el-button
                type="primary"
                icon="el-icon-close"
                size="mini"
                ghost
                @click="delTable1"
        >删除行</el-button
        >
    <!--      <el-button
            type="warning"
            icon="el-icon-check"
            size="mini"
            ghost
            @click="getRows"
            >获取选中的行</el-button
          >-->
          <el-button
            type="info"
            icon="el-icon-refresh"
            size="mini"
            @click="$refs.table1.load()"
            >刷新</el-button
          >
        </div>
       <!-- <el-alert
          title="双击行可以编辑,或者可以根据菜单： table使用->table编辑(二)在行上配置操作,完整文档见:组件api->voltable"
          type="warning"
          style="margin: 10px 0"
          show-icon
        >
        </el-alert>-->
        <!-- :defaultLoadPage="false"打开窗口禁用默认加载数据 -->
        <vol-table
          ref="table1"
          :clickEdit="true"
          :loadKey="true"
          :columns="tableColumns1"
          :pagination-hide="false"
          :height="320"
          :url="table1Url"
          :index="true"
          :defaultLoadPage="true"
          @loadBefore="loadTableBefore1"
          @loadAfter="loadTableAfter1"
        ></vol-table>
      </el-tab-pane>

      <!-- 从表2 -->
      <el-tab-pane :lazy="false" label="合約贈送產品List">
        <template #label>
          <span><i class="el-icon-date"></i> 合約贈送產品List</span>
        </template>
        <div style="padding-bottom: 10px">
          <el-button
                  type="success"
                  icon="el-icon-plus"
                  size="mini"
                  ghost
                  @click="addProdListForFree"
          >添加產品</el-button
          >
          <el-button
                  type="primary"
                  icon="el-icon-close"
                  size="mini"
                  ghost
                  @click="delTable2"
          >删除行</el-button
          >
          <el-button
                  icon="el-icon-refresh"
                  size="mini"
                  type="info"
                  ghost
                  @click="$refs.table2.load()"
          >刷新</el-button
          >
        </div>
        <vol-table
                ref="table2"
                :loadKey="true"
                :clickEdit="true"
                :columns="tableColumns2"
                :pagination-hide="false"
                :height="300"
                :url=table2Url
                :defaultLoadPage="true"
                @loadBefore="loadTableBefore2"
                :index="true"
        ></vol-table>
      </el-tab-pane>

      <!-- 从表3 -->
      <el-tab-pane :lazy="false" label="ShareTable List">
        <template #label>
          <span><i class="el-icon-date"></i> ShareTableList</span>
        </template>
        <div style="padding-bottom: 10px">
          <el-button
                  type="success"
                  icon="el-icon-plus"
                  size="mini"
                  ghost
                  @click="SearchShareTable"
          >查询</el-button>
        </div>
        <vol-table
                ref="table3"
                :loadKey="true"
                :clickEdit="true"
                :columns="tableColumns3"
                :pagination-hide="false"
                :height="300"
                url="/api/View_app_hp_share_table/getPageData"
                :defaultLoadPage="true"
                @loadBefore="loadTableBefore3"
                :index="true"
        ></vol-table>
      </el-tab-pane>

    </el-tabs>
  </div>
  <custmModelBody @onSelect="onSelectByCust" ref="custmModelBody"></custmModelBody>
  <prodModelBody  @onSelect="onSelectByProd_purchase" ref="prodModelBody"></prodModelBody>
  <price-group-model-body @onSelect="onSelectByPriceGroup" ref="PriceGroupModelBody"></price-group-model-body>
</template>
<script>
//开发一对多从表需要参照voltable与viewgrid组件api
import VolTable from "@/components/basic/VolTable.vue";
import custmModelBody from  '../../basic/cust/Viat_com_custModelBody.vue'; //'@/extension/basic/cust/Viat_com_custModelBody'
import prodModelBody from   "../../basic/prod/View_com_prod_pop_query.vue";
import PriceGroupModelBody from "@/extension/price/price/PriceGroupModelBody.vue";
export default {
  components: {PriceGroupModelBody, VolTable ,custmModelBody,prodModelBody},
  data() {
    return {
      hpcontcust_dbid:"",
      showFlag:true,
      table1RowData:"",
      table2RowData:"",
      table3RowData:"",
      calcuateResult:"",
      //从表1 this.$parent.editFormFields.hpcont_dbid
      table1Url: "api/Viat_app_hp_contract_cust/GetPageData" , //table1获取数据的接口
      table2Url: "api/Viat_app_hp_contract_free_prod/GetPageData" , //table2获取数据的接口 待補充
      //表配置的字段注意要与后台返回的查询字段大小写一致
      tableColumns1: [
        { field: "hpcontcust_dbid", title: "主键ID", type: "guid", width: 80, hidden: true },
        { field: "hpcont_dbid", title: "外鍵ID", type: "guid", width: 80, hidden: true },
        {
          field: "territory_id",
          title: "zone code",
          type: "string",
          width: 100,
        },
        { field: "cust_dbid", title: "cust_dbid", type: "string", hidden:true },
        { field: "cust_id", title: "cust code", type: "string", width: 170 },
        {
          field: "cust_name",
          title: "cust name",
          type: "string",
          width: 120,
        },

        {
          field: "create_date",
          title: "create date",
          type: "datetime",
          width: 150,
          readonly: true,
        },
      ],
      //从表2
      //表配置的字段注意要与后台返回的查询字段大小写一致   prod_id,prod_ename,qty,amt
      tableColumns2: [
        { field: "hpcontfreeprod_dbid", title: "主键ID", type: "guid", width: 80, hidden: true },
        { field: "hpcont_dbid", title: "外鍵ID", type: "guid", width: 80, hidden: true },
        {
          field: "prod_dbid",title: "prod_dbid",  width: 120,hidden: true},
        {
          field: "prod_id",
          title: "prod_id",
          width: 120,
        },
        {
          field: "prod_ename",
          title: "prod ename",
          width: 150,
        },
        {
          field: "qty",
          title: "Qty",
          width: 150,
        },
        {
          field: "amt",
          title: "Amt",
          width: 150,
        },

        {
          field: "createDate",
          title: "创建时间",
          type: "text",
          readonly: true,
          width: 150,
        },

      ],
      //从表3
      //表配置的字段注意要与后台返回的查询字段大小写一致   prod_id,prod_ename,qty,amt
      tableColumns3: [
        {
          field: "cust_id",
          title: "Cust ID",
          width: 120,
        },
        {
          field: "cust_name",
          title: "Cust Name",
          width: 150,
        },
        {
          field: "prod_id",
          title: "Prod ID",
          width: 150,
        },
        {
          field: "prod_ename",
          title: "Prod Name",
          width: 150,
        },

        {
          field: "percent",
          title: "Sharing %",
          width: 150,
        },
      ],
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

      this.hpcont_dbid= $parent.editFormFields.hpcont_dbid;
      this.table1Url = this.table1Url+this.hpcont_dbid;
      this.table2Url = this.table2Url+this.hpcont_dbid;
      //当前如果是新建重置两个表格数据
      if ($parent.currentAction == "Add") {
        this.showFlag = false;
        $parent.boxOptions.height=400;
        $parent.boxOptions.width=1200;
        //this.$refs.table1.reset();
        //this.$refs.table2.reset();

      } else {
        $parent.boxOptions.height=800;
        $parent.boxOptions.width=1200;
        this.showFlag = true;
        //如果是编辑，添加两个表格的数据
        this.clear();
        this.$refs.table1.load();
        this.$refs.table2.load();
      }
    },
    //shareTable查询显示
    SearchShareTable(){
      let $parent = null;
      this.$emit("parentCall", ($this) => {
        $parent = $this;
      });
      //獲取查詢條件hpcont_dbid
      let hpcont_dbid = $parent.currentRow.hpcont_dbid;
      let rows =this.$refs.table3.load({ wheres: [{"name":"hpcont_dbid","value":hpcont_dbid}]})
      rows.forEach(item=>{
        this.$refs.table3.rowData.push(item);
      })
      this.table3RowData = this.$refs.table3.rowData;
    },
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
      let hpcont_dbid = $parent.currentRow.hpcont_dbid;
      //添加从表的查询参数(条件)
      //将当前选中的行主键传到后台用于查询(后台在GetTable2Data(PageDataOptions loadData)会接收到此参数)
      param.wheres.push({ name: "hpcont_dbid", value: hpcont_dbid });
      callBack(true);
    },
    //从表2加载数据数前(操作与上面一样的,增加查询条件)
    /*loadTableBefore2(param, callBack) {
      callBack(true);
    },*/
    //从后台加载从表1数据后
    loadTableAfter1(data, callBack) {
      return true;
    },
    // 選擇客戶后的回調方法, table1 多選, 主表單選
    onSelectByCust(fieldName,rows){
      if(fieldName =='table1'){

        //返回指定字段
        let _rows = rows.map((row)=>{
          return{
            hpcont_dbid:this.hpcont_dbid,
            cust_dbid:row.cust_dbid,
            territory_id:row.territory_id,
            cust_id:row.cust_id,
            cust_name:row.cust_name
          }
        })

        //this.$refs.table1.rowData.push(..._rows);
        //push的时候去除已经选择的客户
        _rows.forEach(x => {
         let idx =  this.$refs.table1.rowData.some(item => {
            // 判断项应为获取的变量
            if(item.cust_dbid == x.cust_dbid) {
              return true;
            }
          })
          if(!idx){
             this.$refs.table1.rowData.push(x);
           }
        })

        this.table1RowData = this.$refs.table1.rowData;
      }else {
        this.$emit("parentCall", ($parent) => {
          //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)
          let row = rows[0];
          $parent.editFormFields[fieldName] = row.cust_id + " " + row.cust_name;
          $parent.editFormFields['cust_dbid'] = row.cust_dbid;
        });
      }
    },

    onSelectByPriceGroup(fieldName,rows){
      this.$emit("parentCall", ($parent) => {
        //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)
        let row = rows[0];
        $parent.editFormFields[fieldName+'name'] = row.group_id + " " + row.group_name;
        $parent.editFormFields['pricegroup_dbid'] = row.pricegroup_dbid;
      });
    },
    //合約產品計算
    doCalculate(){
      this.$Message.info("doCalculate");
    },
   //合約產品initial
    doInitial(){
      this.$Message.info("doInitial");
    },

    // 從表選擇 合約產品 回調處理
    onSelectByProd_purchase(fieldName,rows){
     if(fieldName =='table2'){
        //返回指定字段  prod_id,prod_ename,qty,amt
        let _rows = rows.map((row)=>{
          return{
            hpcont_dbid:this.hpcont_dbid,
            prod_dbid:row.prod_dbid,
            prod_id:row.prod_id,
            prod_ename:row.prod_ename,
            qty:row.qty,
            amt:row.amt
          }
        })

        //push的时候去除已经选择的产品   this.$refs.table2.rowData.push(..._rows);
        _rows.forEach(x => {
          let idx =  this.$refs.table2.rowData.some(item => {
            // 判断项应为获取的变量
            if(item.prod_dbid == x.prod_dbid) {
              return true;
            }
          })
          if(!idx){
            this.$refs.table2.rowData.push(x);
          }
        })
        this.table2RowData = this.$refs.table2.rowData;
      }
      else {
        this.$emit("parentCall", ($parent) => {
          //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)
          let row = rows[0];
          $parent.editFormFields[fieldName] = row.cust_id + " " + row.cust_name;
          $parent.editFormFields['cust_dbid'] = row.cust_dbid;
        });
      }
    },

   // 主表選擇單一客戶
    openCustmModelBody(fieldName){
      this.$refs.custmModelBody.openDemo(fieldName);
      this.$refs.custmModelBody.signal = true;
    },
    /**
     *
     * @param fieldName
     * @param formType 表單類型f-form表單,s-查詢表單
     * @param pageType c-cust,pg-pricegroup
     */
    clearData(fieldName,pageType){
      this.$emit("parentCall", ($parent) => {
        //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)
        $parent.editFormFields[fieldName] = '';
        $parent.editFormFields[fieldName+'name'] = '';

      });
    },
    openPriceGroupModelBody(fieldName){
      this.$refs.PriceGroupModelBody.openDemo(fieldName);
      this.$refs.PriceGroupModelBody.signal = true;
    },
    delTable1() {
      let rows = this.$refs.table1.getSelected();
      if (rows.length == 0) {
        return this.$Message.error("请先选中行");
      }
      this.$refs.table1.delRow();
      //可以this.http.post调用后台实际执行查询
    },
    /*delTable2() {
      let rows = this.$refs.table2.getSelected();
      if (rows.length == 0) {
        return this.$Message.error("请先选中行");
      }
      this.$refs.table2.delRow();
      //可以this.http.post调用后台实际执行查询
    },*/
    delTable2() {
      let rows = this.$refs.table2.getSelected();
      if (rows.length == 0) {
        return this.$Message.error("请先选中行");
      }
      this.$refs.table2.delRow();
      //可以this.http.post调用后台实际执行查询
    },
    clear() {
      this.$refs.table1.reset();
      this.$refs.table2.reset();
      this.$refs.table3.reset();
    },
    //添加客戶
    addCustList() {
      this.$refs.custmModelBody.openDemo("table1");
      this.$refs.custmModelBody.single = false;
    },

    //添加合約產品
    /*addProdListForpurchase(){
      this.$refs.prodModelBody.openDemo("table2");
      this.$refs.prodModelBody.single = false;
    },*/

    //添加 合約贈送產品
    addProdListForFree(){
      this.$refs.prodModelBody.openDemo("table2");
      this.$refs.prodModelBody.single = false;
    },


    getRows() {
      //获取选中的行
      let rows = this.$refs.table1.getSelected();
      if (rows.length == 0) {
        return this.$Message.error("请先选中行");
      }
      this.$Message.error(JSON.stringify(rows));
    },
  },
};
</script>
<style lang="less" scoped>
.vol-tabs {
  background: white;
}
</style>
