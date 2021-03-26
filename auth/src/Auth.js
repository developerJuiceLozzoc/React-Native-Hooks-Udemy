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

export {signup,login}
