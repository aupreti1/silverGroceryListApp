//IMPORT react
import React from "react";
//IMPORT components we will use
import { View, Text, Button, TextInput, StyleSheet, Image } from "react-native";
import {useNavigation} from '@react-navigation/native';

//CREATE Landing function
function SignIn() {
  const [text, onChangeText] = React.useState();
  const pageNavigation = useNavigation();
  //RETURN the content
  return (
    //CREATE a container to hold content
    <View style={styles.container}>
      <Image style={styles.logoStyle} source={{ uri: "https://cdn.pixabay.com/photo/2013/07/13/13/40/penguin-161356_1280.png" }} />
      <View style={styles.formStyles}>
        <Text style={styles.formTextStyles}>Group Name *</Text>
        <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
        <Text style={styles.formTextStyles}>User Name *</Text>
        <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
        <Text style={styles.formTextStyles}>Password *</Text>
        <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
      </View>
      <View style={styles.passLogButtons}>
        <Button title="FORGOT PASSWORD" color='#0f3d3d'  onPress={() => pageNavigation.navigate("ForgotPage")}/>
        <View style={styles.spaceStyle}></View>
        <Button title="SIGN IN" color='#0f3d3d' />
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
    //END Container Style
    paddingBottom:35,
  },
  // formStyles:{
  //   bottom:35,
  // },
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
    top: 30,
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
export default SignIn;