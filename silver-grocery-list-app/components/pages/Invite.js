//IMPORT react
import React from "react";
//IMPORT components we will use
import { View, Text, Button, TextInput, StyleSheet, Image } from "react-native";


//CREATE Forgot function
function Invite() {
  const [text, onChangeText] = React.useState("");

  //RETURN the content
  return (
    //CREATE a container to hold content
    <View style={styles.container}>
        <Image style={styles.logoStyle} source={{ uri: "https://cdn.pixabay.com/photo/2022/01/01/09/14/bird-6907231_640.png" }} />
      <View style={styles.formStyles}>
        <Text style={styles.formTextStyles}>Email Of The Person You Want To Invite</Text>
        <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
      </View>
      <View style={styles.passLogButtons}>
        <Button title="SKIP" color='#0f3d3d' />
        <Button title="INVITE" color='#0f3d3d' />
      </View>
    </View>
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
export default Invite;