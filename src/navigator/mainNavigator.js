import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial168917Navigator from '../features/Tutorial168917/navigator';
import NotificationList168889Navigator from '../features/NotificationList168889/navigator';
import Settings168888Navigator from '../features/Settings168888/navigator';
import Settings168880Navigator from '../features/Settings168880/navigator';
import UserProfile168878Navigator from '../features/UserProfile168878/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial168917: { screen: Tutorial168917Navigator },
NotificationList168889: { screen: NotificationList168889Navigator },
Settings168888: { screen: Settings168888Navigator },
Settings168880: { screen: Settings168880Navigator },
UserProfile168878: { screen: UserProfile168878Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
