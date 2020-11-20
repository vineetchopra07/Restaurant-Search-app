import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen'; 

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Results: ResultShowScreen
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Vs Hotel Search App',
    },
  }
);

export default createAppContainer(navigator);
