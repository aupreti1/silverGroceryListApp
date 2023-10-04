import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import ProjectNavigation from "./components/Navigation.js";
//import React from "react";

// export const AuthContext = React.createContext({
//   hasUser: false,
//   setUser: () => { }
// });

export default function App() {
  return (
    //<AuthContext.Provider value={{ hasUser, setUser }}>
      <ProjectNavigation/>
    //</AuthContext.Provider>
  );
}
