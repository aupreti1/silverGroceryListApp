//IMPORT react
import React from "react";
//IMPORT components we will use
import { View, Text, Button, StyleSheet, Platform, KeyboardAvoidingView } from "react-native";
//IMPORT useNavigation Hook
import { useNavigation } from '@react-navigation/native';

//CREATE FailedSignIn function
function FailedSignIn() {
  const pageNavigation = useNavigation();

  //RETURN the content
  return (
    //CREATE a container to hold content
    <KeyboardAvoidingView keyboardVerticalOffset={130} behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <View style={styles.formStyles}>
        <Text style={styles.formTextStyles}>Email Of The Person You Want To Invite</Text>
      </View>
      <View style={styles.passLogButtons}>
        <Button title="Back to Log In" color='#0f3d3d' onPress={() => pageNavigation.navigate("SignInPage")}/>
      </View>
    </KeyboardAvoidingView>
    //END return
  );
  //END FailedSignIn Function
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
  //END Styles
});

//EXPORT FailedSignIn
export default FailedSignIn;