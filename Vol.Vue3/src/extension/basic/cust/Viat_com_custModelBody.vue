<template>
  <VolBox
    v-model="model"
    :lazy="true"
    title="选择数据"
    :height="600"
    :width="1150"
    :padding="15"
  >
    <!-- 设置查询条件 -->
    <div style="padding-bottom: 10px">
      <span style="margin-right: 20px">请选择数据</span>
      <el-input

        placeholder="名称"
        style="width: 200px"
        v-model="cust_name"
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
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
      cust_name: "", //查询条件字段
      fieldName:"",//編輯字段,用於回傳設置值
      url: "api/View_com_cust/getPageData",//加载数据的接口
      columns: [
        {field:'cust_id',title:'客戶編號',type:'string',width:110,require:true,align:'left',sort:true},
        {field:'cust_name',title:'客戶名',type:'string',link:true,width:120,align:'left'},
        {field:'cust_address',title:'客戶地址',type:'string',width:180,align:'left'},
        {field:'tel_no',title:'聯繫電話',type:'string',width:110,align:'left'},
        {field:'territory_id',title:'默認區域',type:'string',width:110,hidden:true,align:'left'},
        {field:'doh_type',title:'健保類別',type:'string',bind:{ key:'doh_type',data:[]},width:110,align:'left'},
        {field:'margin_type',title:'毛利類別',type:'string',bind:{ key:'doh_type',data:[]},width:110,align:'left'},
         {field:'status',title:'status',type:'string',bind:{ key:'Status2',data:[]},width:110,align:'left'},
        {field:'modified_date',title:'最后修改时间',type:'datetime',width:150,align:'left',sort:true}
        ],
      pagination: {}, //分页配置，见voltable组件api
    };
  },
  methods: {
    openDemo(fieldName) {
      this.model = true;
      this.fieldName=fieldName;
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
      debugger
      var rows = this.$refs.mytable.getSelected();
      if (!rows || rows.length == 0) {
        return this.$message.error("请选择行数据");
      }

      //回写数据到表单
      this.$emit("parentCall", ($parent) => {
        //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)
        $parent.editFormFields[this.fieldName] = rows[0].cust_dbid;
        $parent.editFormFields[this.fieldName+'name'] = rows[0].cust_id+" "+rows[0].cust_name;
      });
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
    loadTableBefore(params) {
      //查询前，设置查询条件
      if (this.cust_name) {
        params.wheres = [{ name: "cust_name", value: this.cust_name }];
      }
      return true;
    },
  },
};
</script>
