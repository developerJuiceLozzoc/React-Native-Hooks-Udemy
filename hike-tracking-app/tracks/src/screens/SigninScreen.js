import React, {useState,useContext,useEffect} from "react"
import {View,StyleSheet,TouchableOpacity} from "react-native"
import {NavigationEvents} from "react-navigation"
import {Text,Input,Button} from "react-native-elements"
import Spacer from "../components/Spacer"
import AsyncStorage from "@react-native-async-storage/async-storage"

import {Context} from "../context/authContext"

function SigninScreen({navigation}){
  const {state,signin,clearErrorMessage} = useContext(Context)
  const [email,setEmail] = useState("")
  const [password,setPass] = useState("")
  const [error,setError] = useState(null)



    return (<View style={s.container}>
      <NavigationEvents
        onWillFocus={function(){
          setError("")
          clearErrorMessage()
        }}
        />
      <Text h3>Sign In</Text>
      <Spacer>
        <Input label="Email"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setEmail}/>
      </Spacer>
      <Input label="Password" secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setPass} />
      {(error || state.errorMessage.length > 0) && <Spacer>
        {error && <Text style={s.error}>{error.message}</Text>}
        {state.errorMessage.length > 0 && <Text style={s.error}>{state.errorMessage}</Text>}
      </Spacer>}
      <Spacer>

        <Button title="Login"
          onPress={function(){
            if(password.length < 1 || email.length < 3){
              setError({message: "Both fields are required"})
            }
            else{
              signin({email,password})
            }
          }}/>
      </Spacer>
      <TouchableOpacity
        onPress={function(){
          navigation.navigate("Signup")
        }} >
        <Text style={s.link}>Dont have an Account? SIGN UP</Text>
      </TouchableOpacity>
    </View>)

}
SigninScreen.navigationOptions = {
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
  },
  link: {
    color: "blue",
    fontSize: 16
  }
})
export default SigninScreen
