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
        showMenuIcon: true,
        group: 1
    },
    {
        key: "Apps",
        icon: "",
        screen: AppsScreen,
        visible: false,
        showMenuIcon: true,
        group: 1
    },
    {
        key: "Settings",
        icon: "",
        screen: SettingsScreen,
        visible: true,
        group: 2
    },
    {
        key: "About",
        icon: "",
        screen: AboutScreen,
        visible: true,
        group: 2
    },
]
