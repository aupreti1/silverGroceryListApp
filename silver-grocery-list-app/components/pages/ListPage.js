//IMPORT react
import React from "react";
//IMPORT components we will use
import { Text, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";



//CREATE Forgot function
function ListPage() {
    

  //RETURN the content
  return (
    //CREATE a container to hold content
    <KeyboardAvoidingView keyboardVerticalOffset={130} behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
       
        <Text style={styles.formTextStyles}>LIST PAGE</Text>
     
    </KeyboardAvoidingView>
    //END return
  );
  //END Landing Function
}

//CREATE styles
const styles = StyleSheet.create({
  //Start Container Styles
  container: {
    //Flex to Screen
    flex: 1,
    //Background color
    backgroundColor: '#d6f5f5',
    //Centers whole ele
    alignItems: 'center',
    //Centers children
    justifyContent: 'center',
    paddingBottom:100,
    //END Container Style
  },
  switchContainer: {
    flexDirection: "row",
    bottom: 30,
  },
  switchText: {
    color: '#0f3d3d',
    fontSize: 18,
  },
  formTextStyles: {
    //Color for the text
    color: '#0f3d3d',
    //Text size
    fontSize: 18,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  passLogButtons: {
    flexDirection: "row",
    top: 40,
  },
  spaceStyle: {
    //Width of space
    width: 20,
    //Height of space
    height: 20,
  },
  logoStyle: {
    //Image Height
    height: 250,
    //Image Width
    width: 250,
    //Resize the Image
    resizeMode: 'contain',
    //Adding space at the bottom
    bottom: 35,
    //END Logo Container
  },
  //END Styles
});

//EXPORT SignIn
export default ListPage;