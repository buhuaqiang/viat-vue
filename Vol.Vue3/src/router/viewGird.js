
let viewgird = [
  {
    path: '/Sys_Log',
    name: 'sys_Log',
    component:  () => import('@/views/system/Sys_Log.vue' )
  },
  {
    path: '/Sys_User',
    name: 'Sys_User',
    component:  () => import('@/views/system/Sys_User.vue' )
  },
  {
    path: '/permission',
    name: 'permission',
    component:  () => import('@/views/system/Permission.vue' )
  },

  {
    path: '/Sys_Dictionary',
    name: 'Sys_Dictionary',
    component:  () => import('@/views/system/Sys_Dictionary.vue' )
  },
  {
    path: '/Sys_Role',
    name: 'Sys_Role',
    component:  () => import('@/views/system/Sys_Role.vue' )
  }, {
    path: '/Sys_Role1',
    name: 'Sys_Role1',
    component:  () => import('@/views/system/Sys_Role1.vue' )
  }
  , {
    path: '/Sys_DictionaryList',
    name: 'Sys_DictionaryList',
    component:  () => import('@/views/system/Sys_DictionaryList.vue' )
  }
  , {
    path: '/SellOrder',
    name: 'SellOrder',
    component:  () => import('@/views/order/SellOrder.vue' )
  }, {
    path: '/SellOrder2',
    name: 'SellOrder2',
    component:  () => import('@/views/order/SellOrder2.vue' )
  }, {
    path: '/SellOrder3',
    name: 'SellOrder3',
    component:  () => import('@/views/order/SellOrder3.vue' )
  }, {
    path: '/vSellOrderImg',
    name: 'vSellOrderImg',
    component:  () => import('@/views/order/vSellOrderImg.vue' )
  },
  {
    path: '/App_Appointment',
    name: 'App_Appointment',
    component:  () => import('@/views/order/App_Appointment.vue' )
  },
  {
    path: '/App_Appointment2', //二级表头
    name: 'App_Appointment2',
    component:  () => import('@/views/order/App_Appointment2.vue' )
  },
  {
    path: '/App_TransactionAvgPrice',
    name: 'App_TransactionAvgPrice',
    component:  () => import('@/views/appmanager/App_TransactionAvgPrice.vue' )
  }
  , {
    path: '/App_Expert',
    name: 'App_Expert',
    component:  () => import('@/views/appmanager/App_Expert.vue' )
  }
  , {
    path: '/App_Expert2',
    name: 'App_Expert2',
    component:  () => import('@/views/appmanager/App_Expert2.vue' )
  }
  , {
    path: '/App_Transaction',
    name: 'App_Transaction',
    component:  () => import('@/views/appmanager/App_Transaction.vue' )
  }
  , {
    path: '/App_Transaction2',
    name: 'App_Transaction2',
    component:  () => import('@/views/appmanager/App_Transaction2.vue' )
  }, {
    path: '/App_ReportPrice',
    name: 'App_ReportPrice',
    component:  () => import('@/views/appmanager/App_ReportPrice.vue' )
  }, {
    path: '/App_News',
    name: 'App_News',
    component:  () => import('@/views/appmanager/App_News.vue' )
  }, {
    path: '/App_NewsEditor',
    name: 'App_NewsEditor',
    component:  () => import('@/views/appmanager/App_NewsEditor.vue' )
  }    ,{
        path: '/FormDesignOptions',
        name: 'FormDesignOptions',
        component: () => import('@/views/system/form/FormDesignOptions.vue')
    }    ,{
        path: '/FormCollectionObject',
        name: 'FormCollectionObject',
        component: () => import('@/views/system/form/FormCollectionObject.vue')
    }     ,{
        path: '/Viat_com_cust',
        name: 'Viat_com_cust',
        component: () => import('@/views/basic/cust/Viat_com_cust.vue')
    }          ,{
        path: '/Viat_com_prod',
        name: 'Viat_com_prod',
        component: () => import('@/views/basic/prod/Viat_com_prod.vue')
    }    ,{
        path: '/View_com_prod',
        name: 'View_com_prod',
        component: () => import('@/views/basic/prod/View_com_prod.vue')
    }    ,{
        path: '/View_app_power_contract_main',
        name: 'View_app_power_contract_main',
        component: () => import('@/views/contract/contract/View_app_power_contract_main.vue')
    }    ,{
        path: '/Viat_app_power_contract_cust',
        name: 'Viat_app_power_contract_cust',
        component: () => import('@/views/contract/contract/Viat_app_power_contract_cust.vue')
    }   ,{
        path: '/Viat_com_zip_city',
        name: 'Viat_com_zip_city',
        component: () => import('@/views/basic/city/Viat_com_zip_city.vue')
    }    ,{
        path: '/Viat_com_system_value',
        name: 'Viat_com_system_value',
        component: () => import('@/views/basic/sysvalue/Viat_com_system_value.vue')
    }    ,{
        path: '/Viat_com_doh_type',
        name: 'Viat_com_doh_type',
        component: () => import('@/views/basic/dohtype/Viat_com_doh_type.vue')
    }    ,{
        path: '/Viat_com_cust_delivery',
        name: 'Viat_com_cust_delivery',
        component: () => import('@/views/basic/delivery/Viat_com_cust_delivery.vue')
    }    ,{
        path: '/View_com_prod',
        name: 'View_com_prod',
        component: () => import('@/views/basic/prod/View_com_prod.vue')
    }    ,{
        path: '/View_com_cust',
        name: 'View_com_cust',
        component: () => import('@/views/basic/cust/View_com_cust.vue')
    }    ,{
        path: '/View_com_cust_delivery',
        name: 'View_com_cust_delivery',
        component: () => import('@/views/basic/cust/View_com_cust_delivery.vue')
    }   /* ,{
        path: '/Test_info',
        name: 'Test_info',
        component: () => import('@/views/basic/test/Test_info.vue')
    }    ,{
        path: '/Group_test',
        name: 'Group_test',
        component: () => import('@/views/basic/test/Group_test.vue')
    }*/    ,{
        path: '/View_com_prod_pop_query',
        name: 'View_com_prod_pop_query',
        component: () => import('@/views/basic/prod/View_com_prod_pop_query.vue')
    }    ,{
        path: '/Viat_com_global_mpg',
        name: 'Viat_com_global_mpg',
        component: () => import('@/views/basic/mpg/Viat_com_global_mpg.vue')
    }    ,{
        path: '/View_com_local_mpg',
        name: 'View_com_local_mpg',
        component: () => import('@/views/basic/mpg/View_com_local_mpg.vue')
    }    ,{
        path: '/Viat_com_local_mpg',
        name: 'Viat_com_local_mpg',
        component: () => import('@/views/basic/mpg/Viat_com_local_mpg.vue')
    }    ,{
        path: '/View_sys_deputy',
        name: 'View_sys_deputy',
        component: () => import('@/views/basic/deputy/View_sys_deputy.vue')
    }    ,{
        path: '/View_sys_deputy_pop',
        name: 'View_sys_deputy_pop',
        component: () => import('@/views/basic/deputy/View_sys_deputy_pop.vue')
    }      ,{
        path: '/Viat_app_power_contract_ship_data',
        name: 'Viat_app_power_contract_ship_data',
        component: () => import('@/views/contract/contract/Viat_app_power_contract_ship_data.vue'),
        meta: {
            keepAlive: false//禁用页面缓存
        }
    }    ,{
        path: '/View_app_power_contract_ship_data_prod_list',
        name: 'View_app_power_contract_ship_data_prod_list',
        component: () => import('@/views/contract/contract/View_app_power_contract_ship_data_prod_list.vue')
    }    ,{
        path: '/view_dist_margin',
        name: 'view_dist_margin',
        component: () => import('@/views/basic/distroub/view_dist_margin.vue')
    }    ,{
        path: '/View_com_dist',
        name: 'View_com_dist',
        component: () => import('@/views/basic/distroub/View_com_dist.vue')
    }    ,{
        path: '/Viat_com_dist',
        name: 'Viat_com_dist',
        component: () => import('@/views/basic/distroub/Viat_com_dist.vue')
    }    ,{
        path: '/Viat_com_close_period',
        name: 'Viat_com_close_period',
        component: () => import('@/views/basic/period/Viat_com_close_period.vue')
    }    ,{
        path: '/View_com_close_period_margin',
        name: 'View_com_close_period_margin',
        component: () => import('@/views/basic/period/View_com_close_period_margin.vue')
    }    ,{
        path: '/Viat_com_notify_template',
        name: 'Viat_com_notify_template',
        component: () => import('@/views/basic/notify/Viat_com_notify_template.vue')
    }    ,{
        path: '/View_com_notify_template',
        name: 'View_com_notify_template',
        component: () => import('@/views/basic/notify/View_com_notify_template.vue')
    }    ,{
        path: '/Viat_app_cust_price_group',
        name: 'Viat_app_cust_price_group',
        component: () => import('@/views/price/price/Viat_app_cust_price_group.vue')
    }    ,{
        path: '/View_cust_custgroup_pricegroup',
        name: 'View_cust_custgroup_pricegroup',
        component: () => import('@/views/price/price/View_cust_custgroup_pricegroup.vue')

    }    ,{
        path: '/Viat_app_hp_contract',
        name: 'Viat_app_hp_contract',
        component: () => import('@/views/contract/hpcontract/Viat_app_hp_contract.vue')
    }    ,{
        path: '/Viat_app_bulletin',
        name: 'Viat_app_bulletin',
        component: () => import('@/views/basic/bulletin/Viat_app_bulletin.vue')
    }    ,{
        path: '/Viat_app_bulletin_receiver',
        name: 'Viat_app_bulletin_receiver',
        component: () => import('@/views/basic/bulletin/Viat_app_bulletin_receiver.vue')
    }    ,{
        path: '/View_com_bulletin',
        name: 'View_com_bulletin',
        component: () => import('@/views/basic/bulletin/View_com_bulletin.vue')
    }
        ,{
        path: '/Viat_com_employee',
        name: 'Viat_com_employee',
        component: () => import('@/views/basic/employee/Viat_com_employee.vue')
    },{
        path: '/View_com_prod_maintenance',
        name: 'View_com_prod_maintenance',
        component: () => import('@/views/basic/prod/View_com_prod_maintenance.vue')
    }
    ,{
        path: '/Viat_app_cust_price',
        name: 'Viat_app_cust_price',
        component: () => import('@/views/price/price/Viat_app_cust_price.vue')
    }    ,{
        path: '/View_cust_price',
        name: 'View_cust_price',
        component: () => import('@/views/price/price/View_cust_price.vue')
    }    ,{
        path: '/Viat_app_cust_price_detail',
        name: 'Viat_app_cust_price_detail',
        component: () => import('@/views/price/price/Viat_app_cust_price_detail.vue')
    }    ,{
        path: '/View_cust_price_detail',
        name: 'View_cust_price_detail',
        component: () => import('@/views/price/price/View_cust_price_detail.vue')
    }
        ,{
        path: '/View_app_hp_contract',
        name: 'View_app_hp_contract',
        component: () => import('@/views/contract/hpcontract/View_app_hp_contract.vue')
    }    ,{
        path: '/View_app_hp_share_table',
        name: 'View_app_hp_share_table',
        component: () => import('@/views/contract/hpcontract/View_app_hp_share_table.vue'),
        meta: {
            keepAlive: false//禁用页面缓存
        }
    }    ,{
        path: '/Viat_app_hp_contract_share',
        name: 'Viat_app_hp_contract_share',
        component: () => import('@/views/contract/hpcontract/Viat_app_hp_contract_share.vue')
    },{
        path: '/CustomerJoinGroup',
        name: 'CustomerJoinGroup',
        component: () => import('@/extension/price/price/CustomerJoinGroup.vue')
    },{
        path: '/CustomerDetachFromGroup',
        name: 'CustomerDetachFromGroup',
        component: () => import('@/extension/price/price/CustomerDetachFromGroup.vue')
    }]

export default viewgird
