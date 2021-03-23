import React from 'react';
import {useState,useEffect} from "react"
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import yelp from "../api/yelp"
import SearchBar from "../components/SearchBar"
import useResults from "../hooks/useBusinesses"
import ResultsList from "../components/ResultsList"

function SearchScreen(){
  const [searchTerm,setSearchTerm] = useState("")
  const [searchApi,results,error] = useResults()

  return (<>
  <SearchBar onTermChange={setSearchTerm}
            term={searchTerm}
            onTermSubmit={()=>{
              searchApi(searchTerm)
            }}/>
  {error.length > 0 && <Text> {error} </Text>}
  <Text> Search Screen: {`${searchTerm}`} results: {results.length} </Text>

  <ScrollView>
    <ResultsList
      header="Cost Effective"
      data={filterResultsByPrice(results,"$")}
      />
    <ResultsList
      header="Bit Pricier"
      data={filterResultsByPrice(results,"$$")}

      />
    <ResultsList
      header="Big Spender"
      data={filterResultsByPrice(results,"$$$")}
      />
  </ScrollView>
  </>)
}

function filterResultsByPrice(results,price){
  return results.filter(business => {
    return business.price == price
  })
}

export default SearchScreen
