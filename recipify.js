import React from 'react';
import { ScrollView, StyleSheet, View, Image,Text } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.box, styles.box1]}>
    
    
         <Text style={styles.caption} numberOfLines={1} ellipsizeMode="tail">Chocolate Swirl
</Text>


      </View>
      <View style={[styles.box, styles.box2]}>
        <Image
          source={{
            uri: 'https://nutricia.com.au/fortisip/wp-content/uploads/sites/8/2020/09/Forticreme-Chocolate-Chocolate-Layered-Dessert-1-scaled.jpeg',
          }}
          style={styles.image}
        />
                 <Text style={styles.caption} numberOfLines={1} ellipsizeMode="tail">Layered Dessert
</Text>
      </View>
      <View style={[styles.box, styles.box3]}>
        <Image
          source={{
            uri: 'https://cdn.loveandlemons.com/wp-content/uploads/2021/06/summer-desserts.jpg',
          }}
          style={styles.image}
        />
        <Text style={styles.caption} numberOfLines={1} ellipsizeMode="tail">Summer Treats
</Text>
      </View>
      <View style={[styles.box, styles.box1]}>
        <Image
          source={{
            uri: 'https://recipesblob.oetker.co.uk/assets/988c4bdb665341a2a99a1ba67a85b5c6/1272x764/layered-chocolate-dessert.webp',
          }}
          style={styles.image}
        />
                <Text style={styles.caption} numberOfLines={1} ellipsizeMode="tail">Chocolate Layers
</Text>
      </View>
      <View style={[styles.box, styles.box2]}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-photo/cute-mini-strawberry-shortcakeon-table_53876-103592.jpg?semt=ais_incoming&w=740&q=80',
          }}
          style={styles.image}
        />
                <Text style={styles.caption} numberOfLines={1} ellipsizeMode="tail">Mini Strawberry Cake
</Text>
      </View>
      <View style={[styles.box, styles.box3]}>
        <Image
          source={{
            uri: 'https://www.brit.co/media-library/strawberry-filled-chocolate-cake.jpg?id=34162741&width=1500&height=2000&quality=50&coordinates=0%2C56%2C0%2C57',
          }}
          style={styles.image}
        />
                <Text style={styles.caption} numberOfLines={1} ellipsizeMode="tail">Strawberry Chocolate Cake
</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
  },
  box: {
    width: 500,
    height: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 100,
  },
  image: {
    width: 500,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  caption: {
  marginTop: 5,
  fontSize: 25,
  color: '#333',
  fontWeight: 'bold',
  textAlign: 'center',
  width: '100%',         // allow full width
  flexWrap: 'nowrap',    // prevent wrapping
  overflow: 'visible',   // allow overflow
},

});