import { createStackNavigator } from 'react-navigation';
import HomeScreen from 'app/components/newsfeed/screens/HomeScreen';
import DetailScreen from 'app/components/details/screens/DetailScreen';
import InAppWebview from 'app/components/webview/InAppWebview';

const Router = createStackNavigator(
  {
    newsfeed: { screen: HomeScreen },
    details: { screen: DetailScreen },
    webview: { screen: InAppWebview }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default Router;
