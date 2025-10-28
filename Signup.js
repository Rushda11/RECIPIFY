import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image} from 'react-native';

export default function Signup({ navigation }) {
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');



const handleSignup = () => {
  if (email && password && username) {
    alert('Account created!');
    navigation.replace('Home'); // ✅ replaces Signup so it won’t come back
  } else {
    alert('Please fill in all fields');
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

<View>  {/* ✅ changed from styles.burger to styles.orange */}
  <Image
    source={require('./assets/fries.png')}
    style={styles.fries}
    resizeMode="cover"
  />
</View>

<View>  {/* ✅ changed from styles.burger to styles.orange */}
  <Image
    source={require('./assets/boba.png')}
    style={styles.boba}
    resizeMode="cover"
  />
</View>
<View>  {/* ✅ changed from styles.burger to styles.orange */}
  <Image
    source={require('./assets/pancake.png')}
    style={styles.pancake}
    resizeMode="cover"
  />
</View><View>  {/* ✅ changed from styles.burger to styles.orange */}
  <Image
    source={require('./assets/donut.png')}
    style={styles.donut}
    resizeMode="cover"
  />
</View>

<View>  {/* ✅ changed from styles.burger to styles.orange */}
  <Image
    source={require('./assets/cookie.png')}
    style={styles.cookie}
    resizeMode="cover"
  />
</View>

<View>  {/* ✅ changed from styles.burger to styles.orange */}
  <Image
    source={require('./assets/pizza.png')}
    style={styles.pizza}
    resizeMode="cover"
  />
</View>

<View style={styles.group}>
      {/* Outer box containing inner boxes */}
      <View style={styles.outerBox}>
        <Text style={styles.boxTitle}>SignIn</Text>
      <View style={styles.g1}>
      <Text style={styles.subtitle1}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
       <Text style={styles.subtitle2}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />
      </View>
      <View style={styles.g2}>
       <Text style={styles.subtitle3}> Password</Text>
       <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
              
        <Text style={styles.subtitle4}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

      </View>
         <TouchableOpacity style={styles.button} onPress={handleSignup}>
  <Text style={styles.buttonText}>Create Account</Text>
</TouchableOpacity>


              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.back}>← Back to Login</Text>
        </TouchableOpacity>

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
        marginTop:20,
         width:239,
         marginLeft:-5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  outerBox: {
  justifyContent: 'center',   // centers vertically
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
    marginTop:70,
  },
  boxText: {
    color: '#333',
    fontWeight: '500',
    textAlign: 'center',
  },
  subtitle1:{
  marginBottom: -20,           // pushes the subtitle down
  fontSize: 16,
  fontWeight: '500',
  color: '#333',
  padding: 12,
  marginVertical: 6,
  marginRight:90,
  marginTop:-10,
  },

  subtitle2:{
  marginBottom: -20,           // pushes the subtitle down
  fontSize: 16,
  fontWeight: '500',
  color: '#333',
  padding: 12,
  marginVertical: 6,
  marginRight:180,
  marginTop:-20,
  },
  subtitle3:{
  marginBottom: -20,           // pushes the subtitle down
  fontSize: 16,
  fontWeight: '500',
  color: '#333',
  padding: 12,
  marginVertical: 6,
  marginRight:180,
  marginTop:-12,
  },
subtitle4:{
  marginBottom: -20,           // pushes the subtitle down
  fontSize: 16,
  fontWeight: '500',
  color: '#333',
  padding: 12,
  marginVertical: 6,
  marginRight:90,
    marginTop:-20,
  },
  back:{
marginTop:30,
alignSelf:"center",
  fontWeight: 'bold',

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
  position: 'absolute', // enables manual placement
  top: 150,              // Y-axis (distance from top)
  left: -80,              // X-axis (distance from left)
  width: 155,
  height: 147,
  zIndex: 10,
  opacity: 0.2,                                       
  },

  fries:{
  position: 'absolute', // enables manual placement
  top: 90,              // Y-axis (distance from top)
  left: 240,              // X-axis (distance from left)
  width: 150,
  height: 140,
  zIndex: 10,
  opacity: 0.3,
  transform: [{ rotate: '-15deg' }], 
 },
 boba:{
position: 'absolute', // enables manual placement
  top: -200,              // Y-axis (distance from top)
  left: -19,              // X-axis (distance from left)
  width: 100,
  height: 210,
  zIndex: 10,
  opacity: 0.2,
// rotate: '45deg' ,
//    scale: 1.1 , // slightly enlarge
//    translateX: 10
transform: [{ rotate: '15deg' }], 
 },
  cookie:{
position: 'absolute', // enables manual placement
  top: -120,              // Y-axis (distance from top)
  left: 275,              // X-axis (distance from left)
  width: 137,
  height: 126,
  zIndex: 10,
  opacity: 0.2,
  },
  pancake:{
  position: 'absolute', // enables manual placement
  top: 300,              // Y-axis (distance from top)
  left: 270,              // X-axis (distance from left)
  width: 152,
  height: 154,
  zIndex: 10,
  opacity: 0.2,
  transform: [{ rotate: '10deg' }],
  },
donut:{
position: 'absolute', // enables manual placement
  top: 500,              // Y-axis (distance from top)
  left: 180,              // X-axis (distance from left)
  width: 126,
  height: 127,
  zIndex: 10,
  opacity: 0.2,
  },
  
 pizza:{
position: 'absolute', // enables manual placement
  top: 420,              // Y-axis (distance from top)
  left: 10,              // X-axis (distance from left)
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


//   signin:{
// marginBottom:2,

//   }
  
});


