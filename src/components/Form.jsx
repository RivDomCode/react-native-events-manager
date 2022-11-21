import React from 'react';
import {
  Text,
  Modal,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  ScrollView,
} from 'react-native';

const Form = ({modal}) => {
  return (
    <Modal animationType="fade" visible={modal}>
      <SafeAreaView style={styles.content}>
        <ScrollView>


        <Text style={styles.title}>
          New <Text>Appointment</Text>
        </Text>
        <View style={styles.field}>
          <Text style={styles.label}>Customer name:</Text>
          <TextInput 
            style={styles.input}
            placeholder="Client name" 

          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Company:</Text>
          <TextInput 
            style={styles.input}
            placeholder="Company name" 

          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Email::</Text>
          <TextInput 
            style={styles.input}
            placeholder="example@customer.com" 
            keyboardType='email-address'

          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Phone number:</Text>
          <TextInput 
            style={styles.input}
            placeholder="+555 555 555" 
            keyboardType='number-pad'

          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Comments:</Text>
          <TextInput 
            style={styles.input}
            placeholder="Any comment about the meeting..." 

          />
        </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#AAC4FF',
    flex: 1,
  },

  title: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 30,
    color: '#eee',
    textTransform: 'uppercase',
  },

  titleBold: {
    fontWeight: '900',
  },

  field:{
    marginTop:40,
    marginHorizontal:20,
  },

  label:{
    color:"#eee",
    marginBottom:5,
    fontSize:15,
    fontWeight: "600"
  },

  input:{
    backgroundColor:"#eee",
    borderRadius:10,
    padding:8,

  }
});

export default Form;
