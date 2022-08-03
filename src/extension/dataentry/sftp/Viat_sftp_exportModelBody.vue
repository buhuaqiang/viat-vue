<template>
  <VolBox
    v-model="model"
    :lazy="true"
    title="Execute options"
    :height="600"
    :width="1252"
    :padding="15"
  >
    <!-- 设置查询条件 -->
    <div style="padding-bottom: 10px">
      <span style="margin-right: 20px"></span>
      <!-- <el-input placeholder="Input Customer Code" style="width: 200px" v-model="cust_id" />
      <el-input
        placeholder="Input Customer Name"
        style="width: 200px; padding-left: 5px"
        v-model="cust_name"
      />
      -->
      <div class="block">
        <span class="demonstration">Date: </span>
        <el-date-picker
                v-model="trans_date"
                type="date"
                placeholder="選擇日期">
        </el-date-picker>
      </div>
      <div class="block">

      </div>
      <span class="demonstration">Type: </span>
      <el-select
              placeholder="Input Type"
              style="width: 200px; padding-left: 5px"
              v-model="type"
      >
      <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
      </el-option>
      </el-select>

      <span class="demonstration">Distributor: </span>
      <el-select
              placeholder="Input Distributor"
              style="width: 200px; padding-left: 5px"
              v-model="dist_id"
      >
        <el-option
                v-for="item in dists"
                :key="item.value"
                :label="item.label"
                :value="item.value">
        </el-option>
      </el-select>

      <!--
            <label for="type">Type:</label>
            <select v-model="type" id="type">
              <option selected>price</option>
              <option>customer</option>
              <option>order</option>
              <option>Allowance</option>
            </select>





            <el-input

                    placeholder="Input Zip Code"
                    style="width: 200px; padding-left: 5px"
                    v-model="zip_id"
            />
            <el-select v-model="channelValue" placeholder="Select channel" style="width: 200px; padding-left: 5px">
              <el-option
                      v-for="item in channelData"
                      :key="item.key"
                      :label="item.value"
                      :value="item.key"
              >
              </el-option>
            </el-select>
            <el-select v-model="dohValue" placeholder="Select DOH Type" style="width: 200px; padding-left: 5px">
              <el-option
                      v-for="item in dohData"
                      :key="item.key"
                      :label="item.value"
                      :value="item.key"
              >
              </el-option>
            </el-select>
-->
      <el-button
        type="primary"
        style="margin-left: 10px"
        size="medium"
        icon="el-icon-zoom-in"
        @click="execute"
        >Execute</el-button
      >

    </div>


    <!-- vol-table配置的这些属性见VolTable组件api文件 -->
    <!--
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
      @loadAfter="loadTableAfter"
      @rowClick="rowClick"
    ></vol-table>
    -->
    <!-- 设置弹出框的操作按钮 -->
    <template #footer>
      <div>
    <!--    <el-button
          size="mini"
          type="primary"
          icon="el-icon-plus"
          @click="addRow()"
          >Add Row</el-button
        >  -->
        <el-button size="mini" icon="el-icon-close" @click="model = false"
          >Close</el-button
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
      pickerOptions1: {
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      trans_date: '',
      single: true,
      returnType:"",
      flag:"",
      defaultLoadPage: false, //第一次打开时不加载table数据，openDemo手动调用查询table数据
      cust_name: "", //查询条件字段
      cust_id:"",
      options: [{
        value: '01',
        label: 'Price'
      }, {
        value: '02',
        label: 'Customer'
      }, {
        value: '03',
        label: 'Order'
      }, {
        value: '04',
        label: 'Allowance'
      }],
      type: '',
      dists: [{
        value: '1',
        label: '1:輝瑞'
      }, {
        value: '2',
        label: '2:裕利'
      }, {
        value: '3',
        label: '3:久裕'
      }, {
        value: '6',
        label: '6:文德'
      }, {
        value: '8',
        label: '8:新美'
      }, {
        value: '9',
        label: '9:友華'
      }, {
        value: 'A',
        label: 'A:安強'
      }, {
        value: 'B',
        label: 'B:惠貿'
      }, {
        value: 'C',
        label: 'C:杏隆'
      }, {
        value: 'H',
        label: 'H:加拿安'
      }, {
        value: 'I',
        label: 'I:吉多'
      }, {
        value: 'J',
        label: 'J:兆鴻'
      }, {
        value: 'K',
        label: 'K:美立恆'
      }, {
        value: 'L',
        label: 'L:大昌華嘉'
      }, {
        value: 'M',
        label: 'M:大用'
      }, {
        value: 'N',
        label: 'N:亞博'
      }],
      dist_id:'',
      zip_id: "",
      channelValue:"",
      dohValue:"",
      channelData:[],
      dohData:[],
      url: "api/View_com_cust/GetPopPageData",//加载数据的接口
      columns: [
        {
          field: "cust_id",
          title: "Customer Code",
          type: "string",
          width: 110,
          require: true,
          align: "left",
          sort: true,
        },
        {
          field: "cust_name",
          title: "Customer Name",
          type: "string",
          link: true,
          width: 120,
          align: "left",
        },
        {
          field: "cust_address",
          title: "Customer Address",
          type: "string",
          width: 180,
          align: "left",
        },
        {field:'cust_zip_id',title:'Zip ID',type:'string',width:110,align:'left',sort:true},
        {
          field: "territory_id",
          title: "Default Zone",
          type: "string",
          width: 110,
          align: "left",
        },
        {
          field: "doh_type",
          title: "DOH Type",
          type: "string",
          bind: { key: "doh_type", data: [] },
          width: 110,
          align: "left",
        },
        // {
        //   field: "status",
        //   title: "status",
        //   type: "string",
        //   bind: { key: "Status_YN", data: [] },
        //   width: 110,
        //   align: "left",
        // },
        {
          field: "modified_date",
          title: "Modified Date",
          type: "datetime",
          width: 150,
          align: "left",
          sort: true,
        },
      ],

      pagination: {}, //分页配置，见voltable组件api
    };
  },
  methods: {
    getChannel(){
      //健保渠道
      this.http.post('/api/Sys_Dictionary/GetVueDictionary', ['Channel']).then((dic) => {
        this.channelData=dic[0].data;
      });
    },
    // getDoh(){
    //   //健保渠道
    //   this.http.post('/api/Sys_Dictionary/GetVueDictionary', ['doh_type']).then((dic) => {
    //     this.dohData=dic[0].data;
    //   });
    // },
    openModel(single,flag,returnType) {
      // this.getChannel();
      //this.getDoh();
      debugger
      this.single=single;
      this.model = true;
      this.flag = flag;
      this.returnType = returnType
      //打开弹出框时，加载table数据
      //this.$nextTick(() => {
        //this.$refs.mytable;
        // this.$refs.mytable.loadTableBefore(params,returnType);
        // loadTableBefore(params,returnType);
        // this.$refs.mytable.search(searchItem);
        // this.csut_name = returnType;
      //});

    },
    /*clearData(fieldName_dbid,fieldName_id, formType) {
      this.$emit("parentCall", ($parent) => {
        if (formType == "f") {
          $parent.editFormFields[fieldName_dbid] = "";
          $parent.editFormFields[fieldName_id] = "";
        } else if (formType == "s") {
          $parent.searchFormFields[fieldName_dbid] = "";
          $parent.searchFormFields[fieldName_id] = "";
        }
        $parent.pickCustomerName="";
      });
    },*/
    execute() {
      debugger
      let cmd = [];
      if (this.type){
        let types = this.type;
        cmd.push({"type":types});
      }else{
        this.$message.error("Warninig ! Please select a type!");
        return false;
      }
      if (this.trans_date) {
        let transfDate = this.trans_date;
        cmd.push({"transferDate":transfDate})
      }
      if (this.dist_id) {
        let distIds = this.dist_id;
        cmd.push({"distId":distIds})
      }

      // let cmd = {"Type":types, "Dist":distIds, "transDate":transfDate}
      this.$confirm('Do you want to upload?', 'Confirm', {
        confirmButtonText: 'confirm',
        cancelButtonText: 'Cancel',
        type: 'Confirm',
        center: true
      }).then(()=> {
        alert('需要後台接口')
        let url = "api/View_wk_cust_main/Submit";
        this.http.post(url, cmd, 'Wait...').then((x) => {
        if (!x.status) return this.$Message.error(x.message);
        this.$Message.success("Complete.")
        this.refresh();
        })
      })
    },
    search() {
      //点击搜索
      debugger
      this.$refs.mytable.load();
    },
    addRow() {
      var rows = this.$refs.mytable.getSelected();
      if (!rows || rows.length == 0) {
        return this.$message.error("Please select a record first.");
      }

      if (this.returnType=="onSelect") {//多層級調用
        this.$emit("onSelect", this.flag, rows)
      }else{
        this.$emit('parentCall', $parent => {
          $parent.handleCustomerSelected(this.flag, rows);//自定義回調方法處理,在調用頁面聲明
        })
      }

      //关闭当前窗口
      this.model = false;
    },
    rowClick({ row, column, event }) {
      //查询界面点击行事件
      this.$refs.mytable.$refs.table.toggleRowSelection(row); //单击行时选中当前行;
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
      debugger
      if (params[0] && params[1]){
        this.cust_name = params[0] + params[1];
        params.wheres.push({
          name: "cust_name",
          value: this.cust_name,
          displayType: "like",
        });
      }
      if (this.cust_id) {
        params.wheres.push({
          name: "cust_id",
          value: this.cust_id,
          displayType: "like",
        });
      }
      if (this.zip_id) {
        params.wheres.push({ name: "cust_zip_id", value: this.zip_id,displayType:'like' });
      }
      params.wheres.push({ name: "status", value: 'Y' });
      if(this.channelValue){
        params.wheres.push({ name: "channelValue", value: this.channelValue });
      }
      if(this.dohValue){
        params.wheres.push({ name: "doh_type", value: this.dohValue });
      }
      return true;
    },
  },
};
</script>
