import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = async () => {
    try {
      if (!email || !password || !username) {
        Alert.alert("Error", "Please fill in all fields!");
        return;
      }

      if (password !== confirmPassword) {
        Alert.alert("Error", "Passwords do not match!");
        return;
      }

      const userData = { username, email, password };
      await AsyncStorage.setItem("user", JSON.stringify(userData));

      Alert.alert("Success", "Account created successfully!");

      navigation.navigate("Home");
    } catch (error) {
      console.error("Error saving user data:", error);
      Alert.alert("Something went wrong while signing up!");
    }
  };

  return (
    <View style={styles.container}>
       <View style={styles.images}>
      <Image source={require("./assets/burgerr.png")} style={styles.burger} resizeMode="cover" />
      <Image source={require("./assets/fries.png")} style={styles.fries} resizeMode="cover" />
      <Image source={require("./assets/boba.png")} style={styles.boba} resizeMode="cover" />
      <Image source={require("./assets/pancake.png")} style={styles.pancake} resizeMode="cover" />
      <Image source={require("./assets/donut.png")} style={styles.donut} resizeMode="cover" />
      <Image source={require("./assets/cookie.png")} style={styles.cookie} resizeMode="cover" />
      <Image source={require("./assets/pizza.png")} style={styles.pizza} resizeMode="cover" />
</View>
      <View style={styles.group}>
        <View style={styles.outerBox}>
          <Text style={styles.boxTitle}>Sign Up</Text>

          <Text style={styles.subtitle1}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Enter your username"
            placeholderTextColor="#ccc"
          />

          <Text style={styles.subtitle2}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Enter your email"
            placeholderTextColor="#ccc"
          />

          <Text style={styles.subtitle3}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="Enter your password"
            placeholderTextColor="#ccc"
          />

          <Text style={styles.subtitle4}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
            placeholder="Confirm your password"
            placeholderTextColor="#ccc"
          />

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
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
    color:'#fff'
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
    marginTop:70,
  top:-15
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
  marginRight:150,
  marginTop:-10,
  },

  subtitle2:{
  marginBottom: -20,          
  fontSize: 16,
  fontWeight: '500',
  color: '#333',
  padding: 12,
  marginVertical: 6,
  marginRight:180,
  marginTop:-20,
  },
  subtitle3:{
  marginBottom: -20,          
  fontSize: 16,
  fontWeight: '500',
  color: '#333',
  padding: 12,
  marginVertical: 6,
  marginRight:155,
  marginTop:-12,
  },
subtitle4:{
  marginBottom: -20,          
  fontSize: 16,
  fontWeight: '500',
  color: '#333',
  padding: 12,
  marginVertical: 6,
  marginRight:100,
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
 images:{
  top:40
 }
});