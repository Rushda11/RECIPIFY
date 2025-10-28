import React from "react";
import { View, ScrollView, Image, Text, StyleSheet } from "react-native";

export default ({ username, email, password }) => {
  const ProfileScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Your Favorite Bites 🍔🍟🧋</Text>

        {/* ✅ Displaying user details */}
        <Text style={{ marginLeft: 20, fontSize: 18, color: '#3F3F3F' }}>
          Username: {username}
        </Text>
        <Text style={{ marginLeft: 20, fontSize: 18, color: '#3F3F3F' }}>
          Email: {email}
        </Text>
        <Text style={{ marginLeft: 20, fontSize: 18, color: '#3F3F3F' }}>
          Password: {password}
        </Text>

        <View style={styles.images}>
          <Image source={require('./assets/burgerr.png')} style={styles.burger} />
          <Image source={require('./assets/fries.png')} style={styles.fries} />
          <Image source={require('./assets/boba.png')} style={styles.boba} />
          <Image source={require('./assets/pancake.png')} style={styles.pancake} />
          <Image source={require('./assets/donut.png')} style={styles.donut} />
          <Image source={require('./assets/cookie.png')} style={styles.cookie} />
          <Image source={require('./assets/pizza.png')} style={styles.pizza} />
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView style={{ flex: 1, backgroundColor: "#F8E4DA" }}>
        <View style={{ marginTop: 8, marginBottom: 75 }}>
          <View style={{ marginHorizontal: 29 }}>
            <View style={{ alignItems: "flex-end", marginBottom: 162 }}></View>
            <View>
              <View
                style={{
                  backgroundColor: "#CEA8A6",
                  borderTopLeftRadius: 160,
                  borderTopRightRadius: 160,
                  borderBottomRightRadius: 30,
                  borderBottomLeftRadius: 30,
                  paddingTop: 100,
                  paddingBottom: 79,
                  height: 600,
                }}
              >
                <Text
                  style={{
                    color: "#3F3F3F",
                    fontSize: 30,
                    width: 200,
                    marginTop: 50,
                    marginBottom: 6,
                    marginLeft: 39,
                    marginRight: 213,
                  }}
                >
                  {"Smokey"}
                </Text>

                <Text
                  style={{
                    color: "#201F32",
                    fontSize: 15,
                    marginBottom: 6,
                    marginLeft: 39,
                    marginRight: 244,
                    width: 88,
                  }}
                >
                  {"Edit Profile >"}
                </Text>
                <View
                  style={{
                    height: 2,
                    backgroundColor: "#201F32",
                    marginBottom: 19,
                    marginHorizontal: 13,
                  }}
                ></View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    marginBottom: 43,
                    marginLeft: 39,
                  }}
                >
                  <View style={{ marginRight: 162 }}>
                    <Text
                      style={{
                        color: "#201F32",
                        fontSize: 20,
                        marginRight: 53,
                      }}
                    >
                      {"Addresses"}
                    </Text>
                    <Text
                      style={{
                        color: "#FFFFFF",
                        fontSize: 10,
                      }}
                    >
                      {"Share, Edit & Add New Addresses"}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 20,
                      marginTop: 20,
                    }}
                  >
                    {">"}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginBottom: 42,
                    marginLeft: 39,
                  }}
                >
                  <Text
                    style={{
                      color: "#201F32",
                      fontSize: 20,
                    }}
                  >
                    {"Payments & Refund"}
                  </Text>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 10,
                      marginRight: 27,
                    }}
                  >
                    {"Refund Status & Payment Modes"}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    marginBottom: 43,
                    marginLeft: 39,
                  }}
                >
                  <Text
                    style={{
                      color: "#201F32",
                      fontSize: 20,
                      marginRight: 38,
                    }}
                  >
                    {"My Vouchers"}
                  </Text>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 10,
                    }}
                  >
                    {"Scratch and win exciting vouchers"}
                  </Text>
                </View>
                <View
                  style={{
                    alignSelf: "flex-start",
                    flexDirection: "row",
                    marginLeft: 39,
                  }}
                >
                  <View style={{ marginRight: 149 }}>
                    <Text
                      style={{
                        color: "#201F32",
                        fontSize: 20,
                        marginRight: 17,
                      }}
                    >
                      {"Student Reward"}
                    </Text>
                    <Text
                      style={{
                        color: "#FFFFFF",
                        fontSize: 10,
                      }}
                    >
                      {"Exclusive offers for college students"}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 20,
                      marginTop: 20,
                    }}
                  >
                    {">"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Image
          source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff3343d5-9864-4089-a951-ef6f5c2e9c70",
          }}
          resizeMode={"stretch"}
          style={{
            position: "absolute",
            top: 136,
            right: 127,
            left: 127,
            height: 169,
          }}
        />
        <ProfileScreen />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff6f61',
    marginLeft: 20,
    marginTop: 20,
  },
  burger: {
    position: 'absolute',
    top: 200,
    left: -55,
    width: 155,
    height: 147,
    zIndex: 10,
    opacity: 0.2,
  },
  fries: {
    position: 'absolute',
    top: 150,
    left: 270,
    width: 150,
    height: 140,
    zIndex: 10,
    opacity: 0.3,
    transform: [{ rotate: '-15deg' }],
  },
  boba: {
    position: 'absolute',
    top: -150,
    left: 9,
    width: 100,
    height: 210,
    zIndex: 10,
    opacity: 0.2,
    transform: [{ rotate: '15deg' }],
  },
  cookie: {
    position: 'absolute',
    top: -60,
    left: 300,
    width: 137,
    height: 126,
    zIndex: 10,
    opacity: 0.2,
  },
  pancake: {
    position: 'absolute',
    top: 350,
    left: 300,
    width: 152,
    height: 154,
    zIndex: 10,
    opacity: 0.2,
    transform: [{ rotate: '10deg' }],
  },
  donut: {
    position: 'absolute',
    top: 550,
    left: 200,
    width: 126,
    height: 127,
    zIndex: 10,
    opacity: 0.2,
  },
  pizza: {
    position: 'absolute',
    top: 490,
    left: 40,
    width: 126,
    height: 127,
    zIndex: 10,
    opacity: 0.2,
  },
  images: {
    position: 'relative',
    height: 600,
    marginRight: 360,
    marginTop: -800,
    overflow: 'visible',
    top:85,
    left:-8
  },
});