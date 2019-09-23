import { StackNavigator } from 'react-navigation';
import { Home } from './components/index';

const RootNavigator = StackNavigator({
    Home: { screen: Home },
},{
    headerMode: 'none',
    mode: 'modal'
})
export {RootNavigator};