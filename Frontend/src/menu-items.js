export default {
  items: [
    {
      id: "navigation",
      title: "Navigation",
      type: "group",
      icon: "icon-navigation",
      children: [
        {
          id: "dashboard",
          title: "Dashboard",
          type: "item",
          url: "/dashboard",
          icon: "feather icon-home",
        },
      ],
    },

    {
      id: "inventory",
      title: "Inventory",
      type: "group",
      icon: "icon-group",
      children: [
        {
          id: "Items",
          title: "Items",
          type: "item",
          url: "/items",
          icon: "feather icon-file-text",
        },
        {
          id: "Item Group",
          title: "Item Group",
          type: "item",
          icon: "feather icon-server",
          url: "",
        },
        {
          id: "Inventory Adjustments",
          title: "Inventory Adjustments",
          type: "item",
          icon: "feather icon-server",
          url: "/forms/tables/bootstrap",
        },
      ],
    },
    // {
    //     id: 'chart-maps',
    //     title: 'Chart & Maps',
    //     type: 'group',
    //     icon: 'icon-charts',
    //     children: [
    //         {
    //             id: 'charts',
    //             title: 'Charts',
    //             type: 'item',
    //             icon: 'feather icon-pie-chart',
    //             url: '/charts/nvd3'
    //         },
    //         {
    //             id: 'maps',
    //             title: 'Map',
    //             type: 'item',
    //             icon: 'feather icon-map',
    //             url: '/maps/google-map'
    //         }
    //     ]
    // },
    // {
    //     id: 'pages',
    //     title: 'Pages',
    //     type: 'group',
    //     icon: 'icon-pages',
    //     children: [
    //         {
    //             id: 'auth',
    //             title: 'Authentication',
    //             type: 'collapse',
    //             icon: 'feather icon-lock',
    //             badge: {
    //                 title: 'New',
    //                 type: 'label-danger'
    //             },
    //             children: [
    //                 {
    //                     id: 'signup-1',
    //                     title: 'Sign up',
    //                     type: 'item',
    //                     url: '/auth/signup-1',
    //                     target: true,
    //                     breadcrumbs: false
    //                 },
    //                 {
    //                     id: 'signin-1',
    //                     title: 'Sign in',
    //                     type: 'item',
    //                     url: '/auth/signin-1',
    //                     target: true,
    //                     breadcrumbs: false
    //                 }
    //             ]
    //         },

    //         {
    //             id: 'sample-page',
    //             title: 'Sample Page',
    //             type: 'item',
    //             url: '/sample-page',
    //             classes: 'nav-item',
    //             icon: 'feather icon-sidebar'
    //         },
    //         {
    //             id: 'docs',
    //             title: 'Documentation',
    //             type: 'item',
    //             url: '/docs',
    //             classes: 'nav-item',
    //             icon: 'feather icon-help-circle'
    //         },
    //         {
    //             id: 'menu-level',
    //             title: 'Menu Levels',
    //             type: 'collapse',
    //             icon: 'feather icon-menu',
    //             children: [
    //                 {
    //                     id: 'menu-level-1.1',
    //                     title: 'Menu Level 1.1',
    //                     type: 'item',
    //                     url: '#!',
    //                 },
    //                 {
    //                     id: 'menu-level-1.2',
    //                     title: 'Menu Level 2.2',
    //                     type: 'collapse',
    //                     children: [
    //                         {
    //                             id: 'menu-level-2.1',
    //                             title: 'Menu Level 2.1',
    //                             type: 'item',
    //                             url: '#',
    //                         },
    //                         {
    //                             id: 'menu-level-2.2',
    //                             title: 'Menu Level 2.2',
    //                             type: 'collapse',
    //                             children: [
    //                                 {
    //                                     id: 'menu-level-3.1',
    //                                     title: 'Menu Level 3.1',
    //                                     type: 'item',
    //                                     url: '#',
    //                                 },
    //                                 {
    //                                     id: 'menu-level-3.2',
    //                                     title: 'Menu Level 3.2',
    //                                     type: 'item',
    //                                     url: '#',
    //                                 }
    //                             ]
    //                         }
    //                     ]
    //                 }
    //             ]
    //         },
    //         {
    //             id: 'disabled-menu',
    //             title: 'Disabled Menu',
    //             type: 'item',
    //             url: '#',
    //             classes: 'nav-item disabled',
    //             icon: 'feather icon-power'
    //         },
    //     ]
    // }
  ],
};