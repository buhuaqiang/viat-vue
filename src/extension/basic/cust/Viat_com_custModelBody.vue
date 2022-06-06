<template>
  <VolBox
    v-model="model"
    :lazy="true"
    title="选择数据"
    :height="450"
    :width="800"
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
      :max-height="380"
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
        {field:'cust_id',title:'列名cust_id',type:'string',width:110,require:true,align:'left',sort:true},
        {field:'cust_name',title:'列名cust_name',type:'string',link:true,width:120,align:'left'},
        {field:'cust_address',title:'列名cust_address',type:'string',width:180,align:'left'},
        {field:'invoice_name',title:'列名invoice_name',type:'string',width:120,align:'left'},
        {field:'invoice_address',title:'列名invoice_address',type:'string',width:180,hidden:true,align:'left'},
        {field:'owner',title:'列名owner',type:'string',width:120,hidden:true,align:'left'},
        {field:'tax_id',title:'列名tax_id',type:'string',width:110,hidden:true,align:'left'},
        {field:'contact',title:'列名contact',type:'string',width:120,hidden:true,align:'left'},
        {field:'tel_no',title:'列名tel_no',type:'string',width:110,align:'left'},
        {field:'fax_no',title:'列名fax_no',type:'string',width:110,hidden:true,align:'left'},
        {field:'email',title:'列名email',type:'string',width:110,hidden:true,align:'left'},
        {field:'territory_id',title:'列名territory_id',type:'string',width:110,hidden:true,align:'left'},
        {field:'doh_institute_no',title:'列名doh_institute_no',type:'string',width:110,hidden:true,align:'left'},
        {field:'ctrl_drug_no',title:'列名ctrl_drug_no',type:'string',width:110,hidden:true,align:'left'},
        {field:'ctrl_drug_contact',title:'列名ctrl_drug_contact',type:'string',width:120,hidden:true,align:'left'},
        {field:'doh_type',title:'列名doh_type',type:'string',bind:{ key:'doh_type',data:[]},width:110,align:'left'},
        {field:'margin_type',title:'列名margin_type',type:'string',bind:{ key:'doh_type',data:[]},width:110,align:'left'},
        {field:'is_contract',title:'列名is_contract',type:'string',bind:{ key:'Status_YN',data:[]},width:110,hidden:true,align:'left'},
        {field:'is_private',title:'列名is_private',type:'string',bind:{ key:'Status_YN',data:[]},width:110,hidden:true,align:'left'},
        {field:'own_by_hospital',title:'列名own_by_hospital',type:'string',bind:{ key:'Status_YN',data:[]},width:110,hidden:true,align:'left'},
        {field:'own_hospital',title:'列名own_hospital',type:'guid',width:110,hidden:true,align:'left'},
        {field:'med_group',title:'列名med_group',type:'guid',width:110,hidden:true,align:'left'},
        {field:'delv_group',title:'列名delv_group',type:'guid',width:110,hidden:true,align:'left'},
        {field:'new_cust_id',title:'列名new_cust_id',type:'string',width:110,hidden:true,align:'left'},
        {field:'inactive_date',title:'列名inactive_date',type:'datetime',width:110,hidden:true,align:'left',sort:true},
        {field:'status',title:'列名status',type:'string',bind:{ key:'Status2',data:[]},width:110,align:'left'},
        {field:'remarks',title:'列名remarks',type:'string',width:220,hidden:true,align:'left'},
        {field:'source',title:'列名source',type:'string',width:110,hidden:true,align:'left'},
        {field:'accnt_code',title:'列名accnt_code',type:'string',width:110,hidden:true,align:'left'},
        {field:'invoice_type',title:'列名invoice_type',type:'string',width:110,hidden:true,align:'left'},
        {field:'invoice_zip_name',title:'列名invoice_zip_name',type:'string',width:110,hidden:true,align:'left'},
        {field:'invoice_city_name',title:'列名invoice_city_name',type:'string',bind:{ key:'viat_city',data:[]},width:110,hidden:true,align:'left'},
        {field:'com_zip_name',title:'列名com_zip_name',type:'string',width:110,hidden:true,align:'left'},
        {field:'com_city_name',title:'列名com_city_name',type:'string',bind:{ key:'viat_city',data:[]},width:110,hidden:true,align:'left'},
        {field:'com_zip_id',title:'列名com_zip_id',type:'string',width:110,hidden:true,align:'left'},
        {field:'invoice_zip_id',title:'列名invoice_zip_id',type:'string',width:110,hidden:true,align:'left'},
        {field:'modified_date',title:'列名modified_date',type:'datetime',width:150,hidden:true,align:'left',sort:true},
        {field:'modified_client',title:'列名modified_client',type:'int',width:80,hidden:true,align:'left'},
        {field:'modified_user',title:'列名modified_user',type:'int',width:80,hidden:true,align:'left'},
        {field:'created_date',title:'列名created_date',type:'datetime',width:150,align:'left',sort:true},
        {field:'created_client',title:'列名created_client',type:'int',width:80,hidden:true,align:'left'},
        {field:'created_user',title:'列名created_user',type:'int',width:80,hidden:true,align:'left'},
        {field:'bmp_zip_id',title:'列名bmp_zip_id',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,hidden:true,align:'left'},
        {field:'zip_id',title:'列名zip_id',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,hidden:true,align:'left'},
        {field:'cust_dbid',title:'列名cust_dbid',type:'guid',width:110,hidden:true,require:true,align:'left'},
        {field:'created_username',title:'列名created_username',type:'string',width:110,hidden:true,align:'left'},
        {field:'modified_clientuser',title:'列名modified_clientuser',type:'string',width:110,hidden:true,align:'left'},
        {field:'own_hospitalname',title:'列名own_hospitalname',type:'string',width:110,hidden:true,align:'left'},
        {field:'med_groupname',title:'列名med_groupname',type:'string',width:110,hidden:true,align:'left'},
        {field:'delv_groupname',title:'列名delv_groupname',type:'string',width:110,hidden:true,align:'left'},
        {field:'C1',title:'列名C1',type:'string',width:180,hidden:true,align:'left'}],
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
