import React from "react"
import {View,Text} from "react-native"
import {Button,TextField,Card,CardSection} from "./common"

import {login,signup} from "../Auth"

class LoginForm extends React.Component {
    constructor(){
      super()
      this.state = {
        email: "",
        password: "",
        error:null
      }

    }
    onButtonPress(){
      const {email,password} = this.state
      const self = this;
      login(email,password)
      .then(function(user){
        // dispatch a login
      })
      .catch(function(e){
        if(e == "invalid"){
          console.log("invalid password");
          self.setState({error: "Error signing/signuping",password:""})
          return new Promise(function(r,j){
            j()
          })
        }
        else{
          const {email,password} = e
          return signup(email,password)
        }
      })
      .then(function(user){
      //dispatch a login
      })
      .catch(function(err){
        console.log(err);

      })

    }

    componentDidMount(){

    }
    render(){
      return (
        <Card>
          <CardSection >
            <TextField
              placeholder="user123@gmail.com"
              label="Email"
              setValue={text => this.setState({email: text})}
              value={this.state.email}/>
          </CardSection>
          <CardSection >
            <TextField
              placeholder="super secret pass"
              label="Password"
              setValue={text => this.setState({password: text})}
              value={this.state.password}/>
          </CardSection>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
          <CardSection>
            <Button
              doStuff={()=>{
                this.onButtonPress()
              }}>
              Log in
            </Button>
          </CardSection>
        </Card>
      )
    }
}
const styles = {
  errorTextStyle:{
    color: "red",
    alignSelf: "center",
    fontSize: 20
  }
}


export default LoginForm
