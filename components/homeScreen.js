import * as React from 'react';
import { 
  Text,
  View,
  StyleSheet, 
  Button, 
  TouchableOpacity,
  Navigation,
  NavigatorIOS,
  TextComponent} from 'react-native';
import Constants from 'expo-constants';



 export default function  StartScreen ({navigation}) {
 
  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>OnlineStoreApp</Text>
      <View style={{paddingTop: 0}}>
        <TouchableOpacity
          style={styles.appButtonContainer} onPress={() => navigation.navigate('ManageProducts')}>
           
          <Text style={styles.appButtonText} >Manage Products</Text>
        </TouchableOpacity>
      </View>

      <View style={{paddingTop: 50}}>
        <TouchableOpacity
          style={styles.appButtonContainer} onPress={() => navigation.navigate('ManageEmployees')}>
           
          <Text style={styles.appButtonText} >Manage Employees</Text>
        </TouchableOpacity>
      </View>

      <View style={{paddingTop: 50}}>
        <TouchableOpacity
          style={styles.appButtonContainer} onPress={() => navigation.navigate('ManageOrders')}>
           
          <Text style={styles.appButtonText} >Manage Orders</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}
 
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    paddingBottom: 20
  },

  appButtonContainer: {
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  
});
