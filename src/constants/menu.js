const data = [
  {
    id: "gogo",
    icon: "iconsminds-bank",
    label: "menu.bank",
    to: "/app/gogo",
    subs: [
      {
        icon: "iconsminds-wallet",
        label: "menu.start",
        to: "/app/gogo/start"
      },
      {
        icon: "iconsminds-line-chart-1",
        label: "menu.ibovespa",
        to: "/app/gogo/ibovespa"
      },
      {
        icon: "iconsminds-building",
        label: "menu.fii",
        to: "/app/gogo/fii"
      },     
      {
        icon: "iconsminds-dollar-sign-2",
        label: "menu.stocks",
        to: "/app/gogo/stocks"
      },     
      {
        icon: "iconsminds-chrysler-building",
        label: "menu.reits",
        to: "/app/gogo/reits"
      },     
      {
        icon: "iconsminds-coins",
        label: "menu.rendaFixa",
        to: "/app/gogo/rendaFixa"
      }
    ]
  },
  {
    id: "secondmenu",
    icon: "iconsminds-gears",
    label: "menu.second-menu",
    to: "/app/second-menu"
    // subs: [
    //   {
    //     icon: "simple-icon-paper-plane",
    //     label: "menu.second",
    //     to: "/app/second-menu/second"
    //   }
    // ]
  },
  {
    id: "blankpage",
    icon: "iconsminds-receipt-4",
    label: "menu.blank-page",
    to: "/app/blank-page"
  },
  {
    id: "docs",
    icon: "iconsminds-library",
    label: "menu.docs",
    to: "https://gogo-react-docs.coloredstrategies.com/",
    newWindow:true
  }
];
export default data;
