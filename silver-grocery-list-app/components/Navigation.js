//Importing everything react from react
import * as React from "react";
//Importing NavigationContainer component 
import { NavigationContainer } from '@react-navigation/native';
//Import createStackNavigator function
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const ProjectNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LandingPage"
                    component={Landing}
                />
                <Stack.Screen
                    name="SignInPage"
                    component={SignIn}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

//EXPORT Navigation
export default ProjectNavigation;