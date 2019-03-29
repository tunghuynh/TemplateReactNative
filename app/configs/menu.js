import AboutScreen from "../views/about";
import SettingsScreen from "../views/settings";
import AppsScreen from "../views/apps";
import DardboardScreen from "../views/dardboard";

export default [
    {
        key: "Dardboard",
        icon: "",
        screen: DardboardScreen,
        visible: true,
        showMenuIcon: true
    },
    {
        key: "Apps",
        icon: "",
        screen: AppsScreen,
        visible: true,
        showMenuIcon: true
    },
    {
        key: "Settings",
        icon: "",
        screen: SettingsScreen,
        visible: true,
    },
    {
        key: "About",
        icon: "",
        screen: AboutScreen,
        visible: true,
    },
]