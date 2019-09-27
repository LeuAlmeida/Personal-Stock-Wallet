const data = [
  {
    id: "start",
    icon: "iconsminds-dashboard",
    label: "menu.start",
    to: "/app/gogo/start",
  },
  {
    id: "gogo",
    icon: "iconsminds-bank",
    label: "menu.ies",
    to: "/app/gogo",
    subs: [
        {
        id: "umesp",
        icon: "iconsminds-line-chart-1",
        label: "menu.umesp",
        to: "/app/gogo/umesp"
      },
      {
        id: "unimep",
        icon: "iconsminds-building",
        label: "menu.unimep",
        to: "/app/gogo/unimep"
      },     
      {
        id: "centenario",
        icon: "iconsminds-dollar",
        label: "menu.centenario",
        to: "/app/gogo/centenario"
      },     
      {
        id: "izabela",
        icon: "iconsminds-chrysler-building",
        label: "menu.izabela",
        to: "/app/gogo/izabela"
      },     
      {
        id: "granbery",
        icon: "iconsminds-coins",
        label: "menu.granbery",
        to: "/app/gogo/granbery"
      },
      {
        id: "ipa",
        icon: "iconsminds-coins",
        label: "menu.ipa",
        to: "/app/gogo/ipa"
      },
      {
        id: "ead",
        icon: "iconsminds-coins",
        label: "menu.ead",
        to: "/app/gogo/ensinoADistancia"
      }
        ]
  },
  // {
  //   id: "secondmenu",
  //   icon: "iconsminds-gears",
  //   label: "menu.second-menu",
  //   to: "/app/second-menu"
  //   // subs: [
  //   //   {
  //   //     icon: "simple-icon-paper-plane",
  //   //     label: "menu.second",
  //   //     to: "/app/second-menu/second"
  //   //   }
  //   // ]
  // },
  // {
  //   id: "blankpage",
  //   icon: "iconsminds-receipt-4",
  //   label: "menu.blank-page",
  //   to: "/app/blank-page"
  // },
  // {
  //   id: "docs",
  //   icon: "iconsminds-library",
  //   label: "menu.docs",
  //   to: "https://gogo-react-docs.coloredstrategies.com/",
  //   newWindow:true
  // }
];
export default data;
