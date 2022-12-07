import React, { useState } from 'react';
import {
  Text,
  Modal,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  ScrollView,
  Switch,
  Pressable,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Form = ({modal, setModal}) => {

  const [customerData, setCustomerData] = useState({
    name:"",
    company:"",
    email:"",  
    phone:"",
    comments:""
  })

  const { name, company,email, phone, comments  } = customerData;

  const [date, setDate] = useState(new Date());

  const handleAppointment = () => {

    if( [ name, company,email, phone, comments, date ].includes("")){
      Alert.alert('Error', "All fields are required");
      return
    }

   console.log("adios")
  }
  return (
    <Modal animationType="fade" visible={modal}>
      <SafeAreaView style={styles.content}>
        <ScrollView>
        <Text style={styles.title}>
          New <Text>Appointment</Text>
        </Text>
        <Pressable style={styles.cancelBtn} onPress={( ) => setModal(false)}>
          <Text  style={styles.cancelBtnText}>X Cancel</Text>
        </Pressable>
        <View style={styles.field}>
          <Text style={styles.label}>Customer name:</Text>
          <TextInput 
            style={styles.input}
            placeholder="Client name" 
            value={name}
            onTextChange={setCustomerData}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Company:</Text>
          <TextInput 
            style={styles.input}
            placeholder="Company name" 
            value={company}
            onTextChange={setCustomerData}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Email::</Text>
          <TextInput 
            style={styles.input}
            placeholder="example@customer.com" 
            keyboardType='email-address'
            value={email}
            onTextChange={setCustomerData}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Phone number:</Text>
          <TextInput 
            style={styles.input}
            placeholder="+555 555 555" 
            keyboardType='number-pad'
            value={phone}
            onTextChange={setCustomerData}
          />
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Date:</Text>
            <View style={styles.dateContainer}>
            <DatePicker 
                date={date}
                onDateChange={(date)=>setDate(date)}
              />
            </View>

        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Comments:</Text>
          <TextInput 
            style={styles.input}
            placeholder="Any comment about the meeting..." 
            multiline={true}
            numberOfLines={4}
            value={comments}
            onTextChange={setCustomerData}
          />
        </View>
        <Pressable style={styles.addBtn} onPress={handleAppointment}>
          <Text  style={styles.addBtnText}>Add appointment</Text>
        </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#8D9EFF',
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
  
  cancelBtn: {
    marginTop:20,
    backgroundColor:"#5A4FCF",
    marginHorizontal:30,
    padding:15,
    borderRadius:10,
  },

  cancelBtnText:{
    color:"#fFF",
    textAlign:"center",
    fontWeight:"700",
    fontSize:20,
    textTransform:"uppercase"
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
  },

  dateContainer:{
    backgroundColor:"#eee",
    borderRadius:10,
  },
  addBtn: {
    backgroundColor:"#F59E0B",
    marginHorizontal:30,
    padding:15,
    borderRadius:10,
    marginVertical:50,
  },

  addBtnText:{
    color:"#FFF",
    textAlign:"center",
    fontWeight:"700",
    fontSize:20,
    textTransform:"uppercase"
  },

});

export default Form;
