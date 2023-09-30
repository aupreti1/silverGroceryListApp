//Importing everything react from react
import * as React from "react";
//Importing NavigationContainer component 
import { NavigationContainer } from '@react-navigation/native';
//Import createStackNavigator function
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Invite from "./pages/Invite";
import ListPage from "./pages/ListPage";


const Stack = createStackNavigator();

const ProjectNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LandingPage"
                    component={Landing}
                    options={{headerShown:false, title: "Home"}}
                />
                <Stack.Screen
                    name="SignInPage"
                    component={SignIn}
                    options={{title: "Sign In", 
                        headerStyle:{backgroundColor:'#a0c4d1'}, 
                        headerTitleStyle:{color:'#0f3d3d'}, 
                        headerBackTitleStyle:{color:'#0f3d3d'},
                        headerTintColor:'#0f3d3d'}}
                />
                <Stack.Screen 
                    name="RegisterPage"
                    component={Register}
                    options={{title: "Register", 
                        headerStyle:{backgroundColor:'#a0c4d1'}, 
                        headerTitleStyle:{color:'#0f3d3d'},
                        headerBackTitleStyle:{color:'#0f3d3d'},
                        headerTintColor:'#0f3d3d'}}
                />
                <Stack.Screen 
                    name="ForgotPage"
                    component={Forgot}
                    options={{title: "Forgot Password", 
                        headerStyle:{backgroundColor:'#a0c4d1'}, 
                        headerTitleStyle:{color:'#0f3d3d'},
                        headerBackTitleStyle:{color:'#0f3d3d'},
                        headerTintColor:'#0f3d3d'}}
                />
                <Stack.Screen 
                    name="InvitePage"
                    component={Invite}
                    options={{title: "Invite Someone", 
                        headerStyle:{backgroundColor:'#a0c4d1'}, 
                        headerTitleStyle:{color:'#0f3d3d'},
                        headerBackTitleStyle:{color:'#0f3d3d'},
                        headerTintColor:'#0f3d3d'}}
                />
                {/* <Stack.Screen 
                    name="ListPage"
                    component={ListPage}
                    options={{title: "List Page", 
                        headerStyle:{backgroundColor:'#a0c4d1'}, 
                        headerTitleStyle:{color:'#0f3d3d'},
                        headerBackTitleStyle:{color:'#0f3d3d'},
                        headerTintColor:'#0f3d3d'}}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

//EXPORT Navigation
export default ProjectNavigation;