import * as React from 'react';
import { View } from 'react-native'
import {  Text } from 'react-native-paper'
import { Actions } from 'react-native-router-flux'

const Search = () => {
   const goToHome = () => {
      Actions.customerHome()
   }
   return (<View><Text>Search</Text></View>)
}

export default Search