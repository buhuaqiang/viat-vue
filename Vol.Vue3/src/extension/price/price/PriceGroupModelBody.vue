<template>
  <VolBox
    v-model="model"
    :lazy="true"
    title="選擇價格群組數據"
    :height="600"
    :width="1250"
    :padding="15"
  >
    <!-- 设置查询条件 -->
    <div style="padding-bottom: 10px">
      <span style="margin-right: 20px">請選擇數據</span>
      <el-input
              placeholder="群組代碼"
              style="width: 200px"
              v-model="group_id"
      />
      <el-input
        placeholder="群組名稱"
        style="width: 200px;padding-left: 5px"
        v-model="group_name"
      />
      <el-button
        type="primary"
        style="margin-left:10px"
        size="medium"
        icon="el-icon-zoom-out"
        @click="search"
        >搜索</el-button
      >
    </div>

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
      :single="true"
      :defaultLoadPage="defaultLoadPage"
      @loadBefore="loadTableBefore"
      @loadAfter="loadTableAfter"
      @rowClick = "rowClick"
    ></vol-table>
    <!-- 设置弹出框的操作按钮 -->
    <template #footer>
      <div>
        <el-button
          size="mini"
          type="primary"
          icon="el-icon-plus"
          @click="addRow()"
          >添加选择的数据</el-button
        >
        <el-button size="mini" icon="el-icon-close" @click="model = false"
          >关闭</el-button
        >
      </div>
    </template>
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
      single: true,
      returnType:"",
      flag:"",
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
      group_name: "", //查询条件字段
      group_id:"",
      fieldName:"",//編輯字段,用於回傳設置值
      formType:"f",//弹框打开的form类型,f-editFormFields  s-searchFormFields,ext-自定義擴展
      url: "api/Viat_app_cust_price_group/GetPopPageData",//加载数据的接口
      columns: [
        {field:'group_id',title:'群組代碼',type:'string',link:true,width:110,require:true,align:'left',sort:true},
        {field:'group_name',title:'群組名稱',type:'string',width:120,align:'left'}
        ],
      pagination: {}, //分页配置，见voltable组件api
    };
  },
  methods: {
    openModel(single,flag,returnType) {
      this.single=single;
      this.model = true;
      this.flag = flag;
      this.returnType = returnType

      //打开弹出框时，加载table数据
      this.$nextTick(() => {
        this.$refs.mytable.load();
      });
    },

    search() {
      //点击搜索
      this.$refs.mytable.load();
    },
    addRow() {
      var rows = this.$refs.mytable.getSelected();
      if (!rows || rows.length == 0) {
        return this.$message.error("請選擇數據");
      }

      if (this.returnType=="onSelect") {//多層級調用
        this.$emit("onSelect", this.flag, rows)
      }else{
        this.$emit('parentCall', $parent => {
          $parent.handlePriceGroupSelected(this.flag, rows);//自定義回調方法處理,在調用頁面聲明
        })
      }

      //关闭当前窗口
      this.model = false;
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
      params.wheres.push({ name: "status", value: 'Y' });
      if (this.group_name ) {
        params.wheres.push({ name: "group_name", value: this.group_name,displayType:'like' });
      }
      if(this.group_id){
        params.wheres.push({ name: "group_id", value: this.group_id ,displayType:'like'});
      }
      return true;
    },
  },
};
</script>
