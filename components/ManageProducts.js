import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Navigation,
  NavigatorIOS,
  TextComponent,
} from 'react-native';
import Constants from 'expo-constants';
import { MaterialCommunityIcons as Icon } from 'react-native-vector-icons';

export default function ManageProduct({ navigation }) {
  
  const [getList, setList] = useState(['item1','item2','item3']);


  return (
    <View style={styles.container}>
           
      <Text style={styles.title}>OnlineStoreApp</Text>
      <View> 
          <ScrollView style={styles.scrollview}>
          {getList.map((item) =>
            
              <View style={styles.scrollviewItem}>
                <Text style={styles.scrollviewText}>{`Product Name : ${item}\n`}</Text>
              </View>
          )}
         </ScrollView>
        </View>
      <View style={{paddingTop: 50}}>
        <TouchableOpacity
          style={styles.appButtonContainer} onPress={() => navigation.navigate('ProductsDetails')}>
           
          <Text style={styles.appButtonText} >Products Details</Text>
        </TouchableOpacity>
      </View>
    
      <View style={styles.buttonframe}>
        <TouchableOpacity
          style={styles.appButtonContainer}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.appButtonText}>Exit</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 40,
    paddingBottom: 20
  },
  scrollviewText: {
    fontSize: 30,
  },
  textView: {
    textAlign: 'center',
    fontSize: 30,
  },
  buttonsRowContainer: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '33%',
    margin: 2,
  },

  appButtonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
 
  buttonframe: {
    paddingTop: 8,
  },
});

