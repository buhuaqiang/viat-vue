<template>
  <div class="menu-container">
    <!-- <el-input/> -->
    <vol-box :width="940"
             :mask="true"
             :height="500"
             title="图标列表"
             v-model="model">
      <Icons :onSelect="onSelect"></Icons>
      <template #footer>
        <el-button type="primary"
                   size="mini"
                   @click="model = false">确 认</el-button>
      </template>
    </vol-box>
    <vol-box :width="600"
             :mask="true"
             :height="270"
             title="其他权限"
             v-model="actionModel">
      <vol-form ref="actionForm"
                :formRules="actionOptions"
                :formFields="actionFields">
        <template #header>
          <div>
            <el-alert show-icon
                      type="success">
              配置的其他权限
              <br />1、添加新的权限后请在vue项目中config文件夹下buttns.js添加此权限的按钮。
              <br />2、如果权限只在某少数几个功能中使用,在vue的对应页面扩展extension文件找到对应js,添加到el-buttons对象中,格式同config文件夹下buttns.js一样。
            </el-alert>
          </div>
        </template>
      </vol-form>
      <template #footer>
        <el-button type="primary"
                   size="mini"
                   @click="otherAction">确 认</el-button>
      </template>
    </vol-box>

    <!-- v-if="tree.length" -->
    <div class="menu-left">
      <div class="m-title"><i class="el-icon-warning-outline"></i>Menu List</div>
      <el-scrollbar style="height: 100%; width: 200px">
        <VolMenu :onSelect="getTreeItem"
                 :list="tree"
                 :isCollapse="false"></VolMenu>
      </el-scrollbar>
    </div>
    <div class="menu-right">
      <el-scrollbar style="height: 100%">
        <el-alert title="Menu configuration description"
                  type="warning"
                  :closable="false"
                  show-icon>
          <div>
            1、如果是用程式碼生器生成的Vue頁面，Url為Vue項目中src->router->viewGrid. js對應表名的path内容
          </div>
          <div style="padding-top: 5px">
            2、如果只是建一級選單或空選單url不用填寫，【視圖/表名】填寫. 或者/
          </div>
        </el-alert>
        <div style="padding: 0px 30px 0 20px">
          <vol-form class="form-content"
                    ref="form"
                    :formRules="options"
                    :formFields="fields">
          </vol-form>
          <div>
            <div class="auth-group">
              <label style="width: 100px;font-weight: bolder;color: #000000">Permission button：</label>
              <div class="ck">
                <el-checkbox-group v-model="actions">
                  <el-checkbox v-for="(item, index) in action"
                               :key="index"
                               :label="item.value">{{ item.text + "(" + item.value + ")" }}</el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
          </div>
          <div style="padding-left: 100px">
            <el-button @click="handleCheckAll"
                       size="mini"
                       type="success"
                       plain><i class="el-icon-check"></i>Select All</el-button>
            <el-button @click="actionModel = true"
                       size="mini"
                       type="primary"
                       plain><i class="el-icon-plus"></i>Other Buttons</el-button>
          </div>
          <div class="m-btn">
            <el-button type="primary"
                       @click="save"><i class="el-icon-check"></i>Save</el-button>
            <el-button type="success"
                       icon="md-add"
                       @click="add"><i class="el-icon-plus"></i>Add</el-button>
            <el-button type="warning"
                       icon="md-add-circle"
                       @click="addChild"><i class="el-icon-plus"></i>Add Child</el-button>
            <el-button type="primary"
                       plain
                       icon="ios-barcode-outline"
                       @click="addBrother"><i class="el-icon-circle-plus"></i> ADD Current level</el-button>
            <el-button type="warning"
                       plain
                       @click="delMenu"><i class="el-icon-delete"></i> Delete</el-button>
          </div>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
import VolForm from "@/components/basic/VolForm.vue";
import VolBox from "@/components/basic/VolBox.vue";
import Icons from "@/components/basic/Icons.vue";
import VolMenu from "@/components/basic/VolElementMenu.vue";
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  onMounted,
  h,
  resolveComponent,
} from "vue";

import http from "@/api/http";
export default defineComponent({
  components: {
    VolForm: VolForm,
    VolBox: VolBox,
    Icons: Icons,
    VolMenu,
  },
  methods: {
    otherAction () {
      this.$refs.actionForm.validate(() => {
        let exist = this.action.some((x) => {
          return (
            x.text == this.actionFields.name ||
            x.value == this.actionFields.value
          );
        });
        if (exist) {
          return this.$message.error("权限名称或权限值已存在");
        }
        this.actionModel = false;
        this.action.push({
          text: this.actionFields.name,
          value: this.actionFields.value,
        });
      });
    },
    handleCheckAll () {
      if (this.actions == this.action.length) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      if (this.checkAll) {
        this.actions = this.action.map((x) => {
          return x.value;
        });
      } else {
        this.actions = [];
      }
    },
    checkAllGroupChange (data) {
      if (data.length === this.action.length) {
        this.checkAll = true;
      } else if (data.length > 0) {
        this.checkAll = false;
      } else {
        this.checkAll = false;
      }
    },
    add (obj) {
      this.$refs.form.reset(
        Object.assign({ enable: 1 }, obj || { parentId: 0 })
      );
      this.icon = "";
      // this.actions = [];
      //2020.08.07新建菜单时，默认选中查询按钮权限
      this.actions = ["Search"];
    },
    addChild () {
      if (!this.isSelect()) return;
      this.add({ parentId: this.fields.menu_Id });
    },
    addBrother () {
      if (!this.isSelect()) return;
      this.add({ parentId: this.fields.parentId });
    },
    delMenu () {
      //2020.08.07增加菜单删除功能
      if (this.fields.menu_Id == 0) {
        return this.$Message.error("請選擇菜單");
      }

      let tigger = false;
      this.$confirm(
        "Confirm to delete 【" + this.fields.menuName + "】Menu？",
        "Warning",
        {
          confirmButtonText: "Ture",
          cancelButtonText: "Cancle",
          type: "warning",
          center: true,
        }
      ).then(() => {
        if (tigger) return;
        tigger = true;
        let menuId = this.fields.menu_Id;
        this.http
          .post("/api/menu/delMenu?menuId=" + menuId, {}, "Deleting data....")
          .then((x) => {
            if (!x.status) return this.$Message.error(x.message);
            this.$refs.form.reset();
            this.$Message.info(x.message);
            this.initTree();
          });
      });
    },
    save () {
      this.$refs.form.validate(() => {
        this.fields.auth = "";
        if (this.actions) {
          this.fields.auth = this.action.filter((x) => {
            return this.actions.indexOf(x.value) != -1;
          });
        }
        if (
          this.fields.auth &&
          this.fields.auth instanceof Array &&
          this.fields.auth.length > 0
        ) {
          this.fields.auth = JSON.stringify(this.fields.auth);
        } else {
          this.fields.auth = "";
        }
        this.http.post("/api/menu/save", this.fields, true).then((x) => {
          if (!x.status) {
            this.$Message.error(x.message);
            return;
          }

          this.$Message.success(x.message);
          if (this.fields.menu_Id) {
            this.tree.forEach((t) => {
              if (t.id == this.fields.menu_Id) {
                t.name = this.fields.menuName;
                t.orderNo = this.fields.orderNo;
                t.parentId = this.fields.parentId;
              }
            });
            return;
          }
          this.fields.menu_Id = x.data.menu_Id;
          this.fields.createDate = x.data.createDate;
          this.tree.push({
            id: x.data.menu_Id,
            name: this.fields.menuName,
            orderNo: this.fields.orderNo,
            parentId: this.fields.parentId,
          });
        });
      });
    },
    isSelect () {
      let id = this.fields.menu_Id;
      if (!id) {
        this.$message.error("Please select a Menu node");
        return false;
      }
      return true;
    },
    onSelect (icon) {
      this.fields.icon = icon;
      this.$message.info(icon);
    },
    onOpenChange (node) {
      if (node.length == 0) return;
      this.getTreeItem(node[node.length > 1 ? node.length - 1 : 0]);
    }
  },
  setup () {
    const tree = ref([]);
    const actionValues = ref([]);
    const action = ref([
      { text: "查询", value: "Search" },
      { text: "新建", value: "Add" },
      { text: "删除", value: "Delete" },
      { text: "编辑", value: "Update" },
      { text: "查看", value: "view" },
      { text: "导入", value: "Import" },
      { text: "导出", value: "Export" },
      { text: "上传", value: "Upload" },
      { text: "审核", value: "Audit" }
    ]);
    const actions = ref([]);
    actionValues.value = action.value.map((x) => {
      return x.value;
    });
    const initTree = () => {
      http.post("/api/menu/getMenu", {}, true).then((x) => {
        x.forEach(item=>{
          item.icon='el-icon-menu';
          if (item.menuType==1&&!item.parentId) {
            item.name="(app)"+item.name;
          }
        })
        tree.value = x;
      });
    };
    onMounted(() => {
      initTree();
    });
    const actionModel = ref(false);
    const checkAll = ref(false);
    const model = ref(false);

    const fields = ref({
      menu_Id: 0,
      parentId: 0,
      menuName: "",
      tableName: "",
      url: "",
      auth: "",
      icon: "",
      orderNo: "",
      enable: 1,
      menuType:null,
      createDate: "",
      creator: "",
      modifyDate: "",
    });

    const actionFields = ref({
      name: "",
      value: "",
    });
    const actionOptions = ref([
      [
        {
          title: "Button Name",
          field: "name",
          placeholder: "",
          required: true,
        },
      ],
      [
        {
          title: "Button Value",
          field: "value",
          placeholder: "",
          required: true,
        },
      ],
    ]);

    const options = ref([
      [
        {
          title: "Menu ID",
          field: "menu_Id",
          placeholder: "Menu ID",
          min: 0,
          disabled: true,
        },
        {
          title: "Parent Menu ID",
          required: true,
          type: "number",
          min: 0,
          field: "parentId",
          // min: 0, max: 50
        },
        {
          title: "Menu Name",
          field: "menuName",
          required: true,
        },
      ],
      [
        {
          title: "View/Table Name",
          field: "tableName",
          placeholder: "",
          required: true,
        },
        {
          title: "Router Url",
          field: "url",
          placeholder: "",
        },
        {
          title: "Order",
          field: "orderNo",
          type: "number",
          min: 0,
          placeholder: "The higher the value, the higher the display",
          required: true,
        },
      ],
      [
        {
          title: "Enable",
          field: "enable",
          required: true,
          type: "select",
          colSize: 4,
          data: [
            { key: 1, value: "Enable" },
            { key: 2, value: "Enable And Hidden" },
            { key: 0, value: "Disabled" },
          ],
        },
        {
          // 2022.03.26增移动端加菜单类型
          title: "Menu Type",
          field: "menuType",
          required: true,
          type: "select",
          colSize: 4,
          data: [
            { key: 0, value: "PC Menu" },
            { key: 1, value: "APP Menu" }
          ],
        },
        {
          title: "Icon",
          field: "icon",
          render: (h) => {
            return h("div", {}, [
              h("i", {
                style: {
                  "font-size": "25px",
                  margin: "0px 9px",
                  position: "relative",
                  top: "4px",
                },
                class: [fields.value.icon],
              }),
              h(
                resolveComponent("el-button"),
                {
                  size: "small",
                  style: { padding: "0px 9px" },
                  type: "primary",
                  plain: true,
                  icon: "el-icon-search",
                  onClick: () => {
                    model.value = true;
                  },
                },
                "Select Icon"
              ),
            ]);
          },
        },
      ],
    ]);
    const refForm = ref();
    const getTreeItem = (node) => {
      http.post("api/menu/getTreeItem?menuId=" + node, {}, true).then((x) => {
        try {
          fields.value.icon = x.icon;
          if (x.auth) {
            x.auth = JSON.parse(x.auth);
            action.value.splice(8, action.value.length);

            actions.value = x.auth.map((element) => {
              if (actionValues.value.indexOf(element.value) == -1) {
                action.value.push(element);
              }
              return element.value;
            });
          } else {
            action.value.splice(8, action.value.length);
            x.auth = [];
            fields.value.icon = "";
            actions.value = [];
          }
        } catch (error) {
          console.log("Failed to convert menu function permissions to JSON:" + x.auth);
          x.auth = [];
          //   this.icon = "";
          actions.value = [];
        }
        refForm.value.reset(x);
      });
    };
    return {
      tree,
      initTree,
      action,
      actions,
      actionValues,
      actionModel,
      checkAll,
      model,
      fields,
      actionFields,
      actionOptions,
      options,
      form: refForm,
      getTreeItem
    };
  },
  data () {
    return {};
  },
});
</script>

<style lang="less" scoped>
.on-icon {
  line-height: 20px;
  position: relative;
  .remove {
    display: none;
    color: red;
    right: 7px;
    position: absolute;
    top: -14px;
    font-size: 13px;
  }
}
.on-icon:hover {
  cursor: pointer;
  .remove {
    display: block;
  }
}
.action {
  width: 100%;
  display: flex;

  margin-bottom: 15px;
  .ivu-checkbox-wrapper {
    margin-right: 20px;
  }
  .ck {
    line-height: 33px;
    display: inline-block;
    display: flex;
    label:first-child {
      min-width: 58px;
      float: left;
      margin-top: 1px;
    }
    > div {
      float: left;
    }
  }
}

.menu-container {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 8px;
  background: #f7f7f7;
  .menu-left {
    height: 100%;
    width: 201px;
    border: 1px solid #eee;
    display: flex;
    background: white;
    flex-direction: column;
    .module-name {
      border-radius: 0px;
      /* height: 5%; */
      line-height: 21px;
      margin-bottom: 0;
    }
  }
  .menu-right {
    flex: 1;
    border-radius: 3px;
    border: 1px solid #eee;
    background: white;
    margin-left: 9px;
    margin-right: 3px;
  }
}
.m-btn {
  margin-top: 20px;
  text-align: center;
}
.m-title {
  line-height: 40px;
  font-size: 15px;
  background: #66b1ff0f;
  font-weight: bold;
  padding: 6px 16px;
  border-bottom: 1px solid #eee;
  i {
    padding-right: 5px;
  }
}
.form-content {
  margin-top: 30px;
}
.menu-left ::v-deep(.el-scrollbar__bar.is-vertical) {
  width: 2px;
}
.auth-group {
  display: flex;
  label {
    display: inline-block;
    //width: 100px;
    text-align: right;
    color: #797979;
    font-size: 14px;
  }
  .ck {
    flex: 1;
  }
  .el-checkbox {
    min-width: 105px;
    margin-right: 5px;
    display: inline-block;
    padding-bottom: 10px;
  }
}
.auth-group ::v-deep(.el-checkbox__label) {
  padding-left: 4px;
}
</style>

