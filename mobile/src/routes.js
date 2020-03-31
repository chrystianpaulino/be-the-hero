import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

const AppStack = createStackNavigator(); // cadastrar as rotas aqui

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';


export default function Routes() {

    return (
        // sempre vai em volta de todas as rotas, screen: recebe um componente da pagina
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen name="Incidents" component={Incidents} /> 
                <AppStack.Screen name="Detail" component={Detail} /> 
            </AppStack.Navigator>
        </NavigationContainer>
    );

}