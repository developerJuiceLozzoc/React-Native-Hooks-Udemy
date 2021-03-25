import React, {useState,useContext} from "react"
import {View, StyleSheet, TouchableOpacity} from "react-native"
import {Text,Input,Button} from "react-native-elements"
import Spacer from "../components/Spacer"
import {Context} from "../context/authContext"
import NavLink from "../components/Link.js"
import {NavigationEvents} from "react-navigation"


function SignupScreen({navigation}){
  const {state,signup,clearErrorMessage} = useContext(Context)
  const [email,setEmail] = useState("")
  const [password,setPass] = useState("")
  const [confirmPass,setConfirm] = useState("")
  const [error,setError] = useState(null)


  return (<View style={s.container}>
    <NavigationEvents
      onWillFocus={function(){
        setError("")
        clearErrorMessage()
      }}
      />
    <Text h3>Sign Up</Text>
    <Spacer>
      <Input label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail} />
    </Spacer>
    <Input label="Password" secureTextEntry
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={setPass} />
    <Input label="Confirm Password" secureTextEntry
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={setConfirm}/>
      {(error || state.errorMessage.length > 0) && <Spacer>
        {error && <Text style={s.error}>{error.message}</Text>}
        {state.errorMessage.length > 0 && <Text style={s.error}>{state.errorMessage}</Text>}
      </Spacer>}
    <Spacer>
      <Button title="Signup"
        onPress={function(){
          if(password.length < 1 || email.length < 3){
            setError({message: "Both fields are required"})
          }
          else if(confirmPass === password){
            signup({email,password})
          }
          else{
            setError({message: "passwords must match"})
          }
        }}/>
    </Spacer>
    <NavLink
      routeName="Signin"
      text="Already have an account? Sign In"
      />

    </View>)
}
SignupScreen.navigationOptions = {
  headerShown: false
}
const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  error: {
    fontSize: 18,
    color: "red",
    marginLeft: 15
  }
})
export default SignupScreen
