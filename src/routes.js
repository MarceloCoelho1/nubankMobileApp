import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from './pages/Home/Home'
import Money from './pages/Money/Money'
import Store from './pages/Store/Store'

import CustomTabBar from './components/CustomTabBar/CustomTabBar'

const Tab = createBottomTabNavigator();

export function Routes() {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true, // não mostra a tabBar quando abre algum input de texto
                tabBarShowLabel: false, // Não mostra as labels das rotas da tabBar
                tabBarActiveTintColor: '#121212', // quando tiver na tela ativa, o icone vai ficar com essa cor

                tabBarStyle: {
                    borderTopWidth: 0,
                    backgroundColor: '#fff'
                }
            }}

            tabBar={(props)=> <CustomTabBar {...props}/>}
        >
            <Tab.Screen 
            name='Home' 
            component={Home}
            options={{
                tabBarIcon: "compare-arrows"
            }}
            />
            <Tab.Screen 
            name='Money' 
            component={Money}
            options={{
                tabBarIcon: "attach-money"
            }}
            />
            <Tab.Screen 
            name='Store' 
            component={Store}
            options={{
                tabBarIcon: "storefront"
            }}
            />
        </Tab.Navigator>
    )
}