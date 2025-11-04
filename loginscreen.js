import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      navigation.navigate('Home');
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      </Text>
<View>
  <Image
    source={require('./assets/burgerr.png')}
    style={styles.burger}
    resizeMode="cover"
  />
</View>

<View> 
  <Image
    source={require('./assets/fries.png')}
    style={styles.fries}
    resizeMode="cover"
  />
</View>

<View>  
  <Image
    source={require('./assets/boba.png')}
    style={styles.boba}
    resizeMode="cover"
  />
</View>
<View> 
  <Image
    source={require('./assets/pancake.png')}
    style={styles.pancake}
    resizeMode="cover"
  />
</View><View> 
  <Image
    source={require('./assets/donut.png')}
    style={styles.donut}
    resizeMode="cover"
  />
</View>

<View>  
  <Image
    source={require('./assets/cookie.png')}
    style={styles.cookie}
    resizeMode="cover"
  />
</View>

<View> 
  <Image
    source={require('./assets/pizza.png')}
    style={styles.pizza}
    resizeMode="cover"
  />
</View>

<View style={styles.group}>
      <View style={styles.outerBox}>
        <Text style={styles.boxTitle}>Login</Text>
      <View style={styles.g1}>
      <Text style={styles.subtitle1}>Email</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      </View>
      <View style={styles.g2}>
       <Text style={styles.subtitle2}> Password</Text>
       <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <Text style={styles.subtitle3}>
  Don't have an account?
  <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
    <Text style={styles.signin}> Signin</Text>
  </TouchableOpacity>
</Text>
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', 
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#F8E4DA',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 12,
    width:239,
    marginBottom: 20,
    marginTop:20,
    borderRadius: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
  },
  button: {
 backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 14,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 30,
        marginTop:30,
         width:239,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  outerBox: {
  justifyContent: 'center',  
  alignItems: 'center',  
    padding: 16,
    backgroundColor: '#CEA8A6',
    borderRadius: 30,
    height:580,
    width:325,
  },
  boxTitle: {
    fontSize: 30,
    fontFamily:'regular',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444',
    marginTop:-100,
  },
  boxText: {
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
  },
  subtitle1:{
  marginBottom: -20,       
  fontSize: 16,
  fontWeight: '500',
  color: '#333',
  padding: 12,
  marginVertical: 6,
  marginRight:180,
  },

  subtitle2:{
  marginBottom: -20,        
  fontSize: 16,
  fontWeight: '500',
  color: '#333',
  padding: 12,
  marginVertical: 6,
  marginRight:180,
  },
  signin:{
marginTop:-50,
textAlign: 'center',
alignSelf: 'center',

  },
  group:{
marginLeft:20,
marginTop:-50,
  },
  g1:{
marginTop:20,
  },
  g2:{
    marginRight:-35,
    marginTop:-10,
  },
  burger:{
  position: 'absolute', 
  top: 150,              
  left: -80,            
  width: 155,
  height: 147,
  zIndex: 10,
  opacity: 0.2,                                       
  },

  fries:{
  position: 'absolute',
  top: 90,            
  left: 240,             
  width: 150,
  height: 140,
  zIndex: 10,
  opacity: 0.3,
  transform: [{ rotate: '-15deg' }], 
 },
 boba:{
position: 'absolute',
  top: -200,            
  left: -19,           
  width: 100,
  height: 210,
  zIndex: 10,
  opacity: 0.2,
transform: [{ rotate: '15deg' }], 
 },
  cookie:{
position: 'absolute',
  top: -120,              
  left: 275,             
  width: 137,
  height: 126,
  zIndex: 10,
  opacity: 0.2,
  },
  pancake:{
  position: 'absolute',
  top: 300,            
  left: 270,           
  width: 152,
  height: 154,
  zIndex: 10,
  opacity: 0.2,
  transform: [{ rotate: '10deg' }],
  },
donut:{
position: 'absolute', 
  top: 500,              
  left: 180,            
  width: 126,
  height: 127,
  zIndex: 10,
  opacity: 0.2,
  },
  
 pizza:{
position: 'absolute',
  top: 420,           
  left: 10,             
  width: 126,
  height: 127,
  zIndex: 10,
  opacity: 0.2,
  },
  signin: {
  color: '#333',
  fontWeight: 'bold',
  textDecorationLine: 'underline',
},
});