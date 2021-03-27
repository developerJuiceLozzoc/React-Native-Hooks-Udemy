import React from "react"
import {View,Text} from "react-native"
import {Button,TextField,Card,CardSection,Spinner} from "./common"
import {emailChanged,passwordChanged,
        SigninFlowAction,sendLoginError,
        startLoginProcess,} from "../actions"
import {connect} from "react-redux"

class LoginForm extends React.Component {
    constructor(){
      super()
      this.state = {
        error:null,
        isLoading: false,
      }

    }
    onLoginSuccess(){
      this.props.loggedin(this.state.email)
    }
    onButtonPress(){
      const {email,password} = this.props
      if(!email.length || !password.length){
        this.props.sendLoginError("fields are required")
        return
      }
      this.props.startLoginProcess()
      this.props.SigninFlowAction({email,password})

    }
    renderButton(){
      if(this.props.isLoading){
        return <Spinner />
      }
      else{
        return <Button
          doStuff={()=>{
            this.onButtonPress()
          }}>
          Log in
        </Button>
      }
    }
    onEmailChange(text){
      this.props.emailChanged(text)
    }
    onPassChange(text){
      this.props.passwordChanged(text)
    }
    componentDidMount(){

    }
    render(){
      return (<SafeAreaView style={{flex: 1}}>

        <Card>
          <CardSection >
            <TextField
              placeholder="user123@gmail.com"
              label="Email"
              setValue={this.onEmailChange.bind(this)}
              />
          </CardSection>
          <CardSection >
            <TextField
              placeholder="super secret pass"
              label="Password"
              setValue={this.onPassChange.bind(this)}
              />
          </CardSection>
          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>
          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
      </SafeAreaView>)
    }
}
const styles = {
  errorTextStyle:{
    color: "red",
    alignSelf: "center",
    fontSize: 20
  }
}

function mapStateToProps(state){
 return {
   email: state.auth.email,
   password: state.auth.password,
   error: state.auth.error,
   isLoading: state.auth.isLoading
 }
}




export default connect(mapStateToProps,
  {SigninFlowAction,
  sendLoginError,
  emailChanged,passwordChanged,startLoginProcess})(LoginForm)
