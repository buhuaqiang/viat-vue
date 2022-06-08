<!--<script src="View_com_cust.js"></script>-->
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
      :single=single
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
      single:true,
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
      cust_name: "", //查询条件字段
      fieldName:"",//編輯字段,用於回傳設置值
      url: "api/Viat_com_cust/getPageData",//加载数据的接口
      columns: [
        {field:'cust_id',title:'客戶編號',type:'string',link:true,width:110,hidden:true,require:true,align:'left'},
        {field:'cust_name',title:'客戶名稱',type:'string',width:120,readonly:true,align:'left',sort:true},
        {field:'cust_address',title:'客戶地址',type:'string',width:180,readonly:true,align:'left'},
        {field:'invoice_name',title:'發票抬頭',type:'string',width:120,hidden:true,readonly:true,align:'left'},
        {field:'invoice_address',title:'發票地址',type:'string',width:180,hidden:true,readonly:true,align:'left'},
        {field:'owner',title:'負責人',type:'string',width:120,hidden:true,readonly:true,align:'left'},
        {field:'tax_id',title:'統一編號',type:'string',width:110,hidden:true,align:'left'},
        {field:'contact',title:'聯絡人',type:'string',width:120,hidden:true,align:'left'},
        {field:'tel_no',title:'電話號碼',type:'string',width:110,align:'left'},
        {field:'fax_no',title:'傳真號碼',type:'string',width:110,hidden:true,align:'left'},
        {field:'email',title:'電子郵箱',type:'string',width:110,hidden:true,align:'left'},
        {field:'territory_id',title:'預設業代分區',type:'string',width:110,align:'left'},
        {field:'doh_institute_no',title:'健保機構代碼',type:'string',width:110,hidden:true,align:'left'},
        {field:'ctrl_drug_no',title:'管制藥品認證代碼',type:'string',width:110,hidden:true,align:'left'},
        {field:'ctrl_drug_contact',title:'管制藥品聯絡人',type:'string',width:120,hidden:true,align:'left'},
        {field:'margin_type',title:'毛利類別',type:'string',bind:{ key:'doh_type',data:[]},width:110,align:'left'},
        {field:'is_contract',title:'是否為合約客戶',type:'bool',bind:{ key:'Status3',data:[]},width:110,hidden:true,align:'left'},
        {field:'is_private',title:'是否為私立',type:'bool',bind:{ key:'Status3',data:[]},width:110,hidden:true,align:'left'},
        {field:'own_by_hospital',title:'是否為門前藥局/診所',type:'bool',bind:{ key:'Status3',data:[]},width:110,hidden:true,align:'left'},
        {field:'own_hospital',title:'隸屬醫院代碼',type:'string',width:110,hidden:true,align:'left'},
        {field:'med_group',title:'隸書體系主院代碼',type:'string',width:110,hidden:true,align:'left'},
        {field:'delv_group',title:'統一寄送至醫院代碼',type:'string',width:110,hidden:true,align:'left'},
        {field:'new_cust_id',title:'新客戶代碼',type:'string',width:110,hidden:true,align:'left'},
        {field:'inactive_date',title:'失效日期',type:'datetime',width:110,hidden:true,align:'left',sort:true},
        {field:'status',title:'是否有效',type:'string',bind:{ key:'Status2',data:[]},width:110,align:'left'},
        {field:'remarks',title:'備註',type:'string',width:220,hidden:true,align:'left'},
        {field:'source',title:'資料來源',type:'string',width:110,hidden:true,align:'left'},
        {field:'accnt_code',title:'accnt_code',type:'string',width:110,hidden:true,align:'left'},
        {field:'doh_type',title:'健保類別',type:'string',bind:{ key:'doh_type',data:[]},width:110,align:'left'},
        {field:'zip_id',title:'客戶地址郵區代碼',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,align:'left'},
        {field:'bmp_zip_id',title:'郵寄郵區代碼',type:'string',bind:{ key:'viat_city_zone',data:[]},width:110,align:'left'},
        {field:'modified_date',title:'最後修改時間',type:'datetime',width:150,align:'left',sort:true},
        {field:'modified_client',title:'最後修改者的委託人',type:'int',width:80,align:'left'},
        {field:'modified_user',title:'最後修改用戶',type:'int',width:80,align:'left'},
        {field:'created_date',title:'建立時間',type:'datetime',width:150,align:'left',sort:true},
        {field:'created_client',title:'建立者的委託人',type:'int',width:80,align:'left'},
        {field:'created_user',title:'建立用戶',type:'int',width:80,align:'left'},
        {field:'cust_dbid',title:'主鍵',type:'guid',width:110,hidden:true,require:true,align:'left'}],
      pagination: {}, //分页配置，见voltable组件api    cust_dbid,territory_id,cust_id,cust_name
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
      debugger;
      var rows = this.$refs.mytable.getSelected();
      if (!rows || rows.length == 0) {
        return this.$message.error("请选择行数据");
      }
      let path =this.$route.path;
      if(path=='/View_app_power_contract_main'){//多層級調用
        this.$emit("onSelect",this.fieldName,rows)
      }else{
        this.$emit("parentCall", ($parent) => {
          //将选择的数据合并到表单中(注意框架生成的代码都是大写，后台自己写的接口是小写的)
          $parent.editFormFields[this.fieldName] = rows[0].cust_id;
        });
      }


      //回写数据到表单

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
