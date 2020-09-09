import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import ConfirmScreen from './screens/ConfirmScreen';
import Results from './screens/Results';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Confirmation: {screen: ConfirmScreen},
  Result: {screen: Results},
});

const App = createAppContainer(MainNavigator);

export default App;