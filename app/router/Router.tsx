import { createStackNavigator } from 'react-navigation';
import HomeScreen from 'app/components/newsfeed/screens/HomeScreen';
import DetailScreen from 'app/components/details/screens/DetailScreen';

const Router = createStackNavigator(
  {
    newsfeed: { screen: HomeScreen },
    details: { screen: DetailScreen }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default Router;
