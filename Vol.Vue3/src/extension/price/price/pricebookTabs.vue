<template>
  <div class="tabs-group">
    <el-scrollbar style="height: 100%">
      <div class="tabs-btns">
        <button
          v-for="(btn, bIndex) in tabsButtons"
          @click="onClick(btn, bIndex)"
          :class="{ actived: bIndex == index }"
          :key="bIndex"
        >
          <i :class="btn.icon"></i>
          {{ btn.name }}
        </button>
        <!--<span class="message"
          ><i class="el-icon-chat-line-round"
            >关于多页签：可以将生成的页面或自定义页面引用到此处,具体使用见:tabsTable.vue</i
          ></span-->
        >
      </div>
      <keep-alive>
        <component ref="com" v-bind:is="currentComponent"></component>
      </keep-alive>
    </el-scrollbar>
  </div>

</template>
<script>
import group from "@/views/price/price/View_cust_price.vue"
import cust from "@/views/price/price/View_cust_price_detail.vue"
//注意必看，App_Appointment与App_Transaction是自动生成的页面，在页签引用时需要指定表名权限，否则普通帐号打开页面会出现401
//具体指定权限方式见：App_Appointment.js与App_Transaction.js中的tableAction属性
export default {
  components: {
    group,
    cust
  },
  data() {
    return {
      index: 0,
      currentComponent: "",
      open: false,
      tabsButtons: [],
    };
  },
  created() {
    //判断权限(初始化顶tabs选项)
    this.tabsButtons = [
      {
        name: "Group",
        icon: "el-icon-document",
        component: "group", //上面引用的组件名
        table: "/View_cust_price", //这里填写实际表名用于权限判断(与菜单设置上的表path一样)，没有权限的不会显示
      },
      {
        name: "Cust",
        icon: "el-icon-s-custom",//
        component: "cust",
        table: "/View_cust_price_detail",
      },

    ].filter((x) => {
      return this.$store.getters.getPermission(x.table);
    });

    //默认显示第一个页面
    if (this.tabsButtons.length) {
      this.currentComponent = this.tabsButtons[0].component;
    }
  },
  activated() {},
  methods: {
    //可以通过this.$refs.com.$refs.grid访问生成页面里的数据
    onClick(item, index) {
      debugger
      if (this.index == index) {
        return;
      }
      this.index = index;
      this.currentComponent = item.component;
      //页签切换时，可以调用此方法刷新生成页面的数据
      this.$nextTick(() => {
        if (this.$refs.com.$refs.grid) {
          //this.$refs.com.$refs.grid.search();
          //如果需要调用自定义方法，可以在表的js中定义xxx方法
          //this.$refs.com.$refs.grid.xxx();
        }
      });
      // togglePage.call(this, { item, index });
    },
  },
};
</script>
<style lang="less" scoped>
.tabs-group {
  position: absolute;
  height: 100%;
  width: 100%;
}
.tabs-btns {
  border-bottom: 1px solid #eee;
  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    margin-right: 20px;
    position: relative;
    padding: 10px 10px 10px 15px;
  }
  button:after {
    content: "/";
    position: absolute;
    right: -16px;
    bottom: 10px;
    color: #b3b3b3;
  }
  button:last-child:after {
    content: "";
    display: none;
  }
  .actived {
    color: #409eff;
    font-weight: bold;
  }
  .message {
    font-size: 12px;
    color: #a2a19e;
    margin-left: 30px;
  }
}
</style>
