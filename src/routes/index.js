import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home.js";
import Form from "../pages/Form.js";
import Confirmation from "../pages/Confirmation.js";

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Form"
                component={Form}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Confirmation"
                component={Confirmation}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}