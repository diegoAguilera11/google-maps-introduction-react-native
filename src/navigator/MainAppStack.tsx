import { createStackNavigator } from '@react-navigation/stack';
import { FormScreen } from '../screens/address/FormScreen';
import { MapScreen } from '../screens/map/MapScreen';


export type RootStackParams = {
    FormScreen: undefined,
    MapScreen: undefined
}

const Stack = createStackNavigator<RootStackParams>();

export const MainAppStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='FormScreen'
        >
            <Stack.Screen
                name="FormScreen"
                component={FormScreen}
                options={{
                    title: 'Formulario de dirección',
                }}
            />
            <Stack.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                    title: 'Mapa de dirección',
                }}
            />
        </Stack.Navigator>
    );
}