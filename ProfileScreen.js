import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen({ route, navigation }) {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  // Load user data from AsyncStorage or route params
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        } else if (route?.params) {
          setUser(route.params);
          await AsyncStorage.setItem("user", JSON.stringify(route.params)); // ✅ ensure saved if new
        }
      } catch (error) {
        console.log("Error loading user:", error);
      }
    };
    loadUser();
  }, [route?.params]);

  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    navigation.replace("Login");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#F8E4DA" }}>
        {/* Food images background */}
        <View style={styles.images}>
          <Image source={require("./assets/burgerr.png")} style={styles.burger} />
          <Image source={require("./assets/fries.png")} style={styles.fries} />
          <Image source={require("./assets/boba.png")} style={styles.boba} />
          <Image source={require("./assets/pancake.png")} style={styles.pancake} />
          <Image source={require("./assets/donut.png")} style={styles.donut} />
          <Image source={require("./assets/cookie.png")} style={styles.cookie} />
          <Image source={require("./assets/pizza.png")} style={styles.pizza} />
        </View>

        {/* Profile Box */}
        <View style={styles.profileCard}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            }}
            style={styles.profileImage}
          />

          <Text style={styles.title}>My Profile</Text>

          {/* User Info Boxes */}
          <View style={styles.infoBox}>
            <Text style={styles.label}>Username</Text>
            <Text style={styles.value}>{user.username || "N/A"}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>{user.email || "N/A"}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>Password</Text>
            <Text style={styles.value}>
              {user.password ? "••••••••" : "N/A"}
            </Text>
          </View>

          {/* Logout Button */}
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  profileCard: {
    marginTop: 100,
    marginHorizontal: 25,
    backgroundColor: "#CEA8A6",
    borderRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 80,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#A15C5C",
    marginBottom: 30,
  },
  infoBox: {
    width: "100%",
    backgroundColor: "#F8E4DA",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#E5B9B9",
  },
  label: {
    color: "#A15C5C",
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 5,
  },
  value: {
    color: "#333333",
    fontSize: 16,
    fontWeight: "500",
  },
  logoutButton: {
    backgroundColor: "#ad8583ff",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 50,
    marginTop: 20,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
 container2: { flex: 1, backgroundColor: '#F8E4DA' },
  backgroundContainer: { ...StyleSheet.absoluteFillObject, zIndex: 0, top: 200, left: 20 },
  foregroundContainer: { flex: 1, alignItems: 'center', paddingTop: 60, zIndex: 1 },
  burger: { position: 'absolute', top: 150, left: -80, width: 155, height: 147, opacity: 0.2 },
  fries: { position: 'absolute', top: 90, left: 240, width: 150, height: 140, opacity: 0.3, transform: [{ rotate: '-15deg' }] },
  boba: { position: 'absolute', top: -200, left: -19, width: 100, height: 210, opacity: 0.2, transform: [{ rotate: '15deg' }] },
  cookie: { position: 'absolute', top: -120, left: 275, width: 137, height: 126, opacity: 0.2 },
  pancake: { position: 'absolute', top: 300, left: 270, width: 152, height: 154, opacity: 0.2, transform: [{ rotate: '10deg' }] },
  donut: { position: 'absolute', top: 500, left: 180, width: 126, height: 127, opacity: 0.2 },
  pizza: { position: 'absolute', top: 420, left: 10, width: 126, height: 127, opacity: 0.2 },
  images:{flex:1,top:200,left:20}
});