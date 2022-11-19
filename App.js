import React from 'react';
import {SafeAreaView, Text, StyleSheet, Pressable} from 'react-native';

const App = () => {
  console.log('Antes del componente');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Appointments Manager</Text>
      <Pressable
        style={styles.btnNew}
        onPress={() => {
          console.log('presionando');
        }}>
        <Text style={styles.btnText}>New Event</Text>
      </Pressable>
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
    letterSpacing: 1,
  },

  btnNew: {
    backgroundColor:"#EB6440",
    padding: 10,
    marginTop: 30,
   marginHorizontal:40,
  borderRadius: 10
  },

  btnText: {
    textAlign:"center",
    fontSize:15,
    color: "#FFF",
    textTransform:"uppercase",
    fontWeight:"900",
    letterSpacing: 1
  },
});

export default App;
