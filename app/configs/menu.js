import AboutScreen from "../views/about";
import SettingsScreen from "../views/settings";
import AppsScreen from "../views/apps";
import DashboardScreen from "../views/dashboard";

export default [
    {
        key: "Dashboard",
        icon: "dashboard",
        screen: DashboardScreen,
        visible: true,
        showMenuIcon: true,
        group: 1
    },
    {
        key: "Apps",
        icon: "apps",
        screen: AppsScreen,
        visible: true,
        showMenuIcon: true,
        group: 1
    },
    {
        key: "Settings",
        icon: "settings",
        screen: SettingsScreen,
        visible: true,
        group: 2
    },
    {
        key: "About",
        icon: "info",
        screen: AboutScreen,
        visible: true,
        group: 2
    },
]
