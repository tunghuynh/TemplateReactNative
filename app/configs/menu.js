import AboutScreen from "../views/about";
import SettingsScreen from "../views/settings";
import AppsScreen from "../views/apps";
import DashboardScreen from "../views/dashboard";
import NotificationsScreen from "../views/notifications";
import Test from "../../Test";

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
        key: "Notifications",
        icon: "notifications",
        screen: NotificationsScreen,
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
    {
        key: "Test",
        icon: "",
        screen: Test,
        visible: true,
        group: 1
    },
]
