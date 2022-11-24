import React, { useState } from 'react';
import {SafeAreaView, Text, StyleSheet, Pressable} from 'react-native';
import Form from './src/components/Form';

const App = () => {
  
  const [modal, setModal] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Clients Manager</Text>
      <Pressable
        style={styles.btnNew}
        onPress={() => {
         setModal(true)
        }}>
        <Text style={styles.btnText}>+ New Appointment</Text>
      </Pressable>
      <Form modal={modal} setModal={setModal}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EFF5F5',
    flex: 1,
  },

  title: {
    color: '#393E46',
    textAlign: 'center',
    fontSize: 30,
    marginTop: 10,
    fontWeight: '600',
  },

  btnNew: {
    backgroundColor:"#8D9EFF",
    padding: 15,
    marginTop: 30,
   marginHorizontal:40,
  borderRadius: 10
  },

  btnText: {
    textAlign:"center",
    fontSize:18,
    color: "#FFF",
    textTransform:"uppercase",
    fontWeight:"900",
    letterSpacing: 1
  },
});

export default App;
