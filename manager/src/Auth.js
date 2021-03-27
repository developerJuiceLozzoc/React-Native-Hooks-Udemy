import { AsyncStorage } from 'react-native';


function login(username,password){
  return new Promise(async function(resolve,reject){

      const value = await AsyncStorage.getItem(username)
      if(!value){
        reject({email: username,password})
      }
      else if(value == password){
        resolve()
      }
      else{
        reject("invalid")
      }


  })
}

function signup(username,password){
  return new Promise(async function(resolve,reject){
    const user = await AsyncStorage.setItem(username,password)
    resolve({username,password})
  })
}

function SignupFlow(email,password){
  return login(email,password)
    .then(function(){
      return new Promise(function(r,j){ r() })
    })
    .catch(function(e){
      if(e == "invalid"){
        return new Promise(function(r,j){
          j(e)
        })
      }
      else{
        const {email,password} = e
        return signup(email,password)
      }
    })
  // .then(function(){
  //   return new Promise(function(r,j){ r() })
  // })
  // .catch(function(e){
  //   return new Promise(function(r,j){ j(e) })
  // })
}


export {signup,login,SignupFlow}
