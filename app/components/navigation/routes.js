import DardboardScreen from '../../views/dardboard';
import AppsScreen from '../../views/apps';
import AboutScreen from '../../views/about';
import SettingsScreen from '../../views/settings';
// import LoginScreen from '../../views/login';

/* Icon key is optional. It must be of type string and its value should match a valid provider icon
  name.
  To omit the icon just pass null on its value.
*/
export default [
  // {name: 'Login', screen: LoginScreen, icon: 'airplane-takeoff'},
  {name: 'Dardboard', screen: DardboardScreen, icon: 'airplane-takeoff'},
  {name: 'Apps', screen: AppsScreen, icon: 'compass-outline'},
  {name: 'About', screen: AboutScreen, icon: 'information-outline'},
  {name: 'Settings', screen: SettingsScreen, icon: 'account-circle'},
];
