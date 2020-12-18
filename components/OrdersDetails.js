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

export default function OrdersDetail({ navigation }) { 

  return (
    <View style={styles.container}>
      <View style={styles.textBlock}>
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
