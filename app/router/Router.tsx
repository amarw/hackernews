import { createStackNavigator } from 'react-navigation';
import NewsFeedScreen from 'app/components/newsfeed/NewsFeedScreen';
import DetailScreen from 'app/components/details/DetailScreen';

const Router = createStackNavigator(
  {
    newsfeed: { screen: NewsFeedScreen },
    details: { screen: DetailScreen }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default Router;
