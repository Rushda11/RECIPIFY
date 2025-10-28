// LikesScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useLikedRecipes } from './Home'; // or './App' if your context is there
import Icon from 'react-native-vector-icons/FontAwesome';

// ---------- Likes Screen ----------
const LikeScreen = () => {
  const { likedRecipes } = useLikedRecipes();
const recipeDatabase = [
  
  {
    name: '🍳 Classic Omelette',
    ingredients: ['eggs', 'milk', 'salt', 'pepper', 'butter', 'onion', 'tomato'],
    steps: [
      'Crack eggs into a bowl.',
      'Add milk, salt, and pepper.',
      'Whisk until well combined.',
      'Chop onion and tomato finely.',
      'Heat butter in a pan.',
      'Sauté onion and tomato until soft.',
      'Pour egg mixture into the pan.',
      'Cook on low heat until edges set.',
      'Fold omelette in half.',
      'Serve hot with toast.',
    ],
  },
  {
    name: '🥗 Greek Salad',
    ingredients: ['cucumber', 'tomato', 'onion', 'feta cheese', 'olives', 'olive oil', 'oregano'],
    steps: [
      'Wash and chop cucumber, tomato, and onion.',
      'Cube the feta cheese.',
      'Combine vegetables and cheese in a bowl.',
      'Add olives.',
      'Drizzle with olive oil.',
      'Sprinkle oregano on top.',
      'Toss gently.',
      'Chill before serving.',
    ],
  },
  {
    name: '🍝 Spaghetti Aglio e Olio',
    ingredients: ['spaghetti', 'garlic', 'olive oil', 'chili flakes', 'parsley', 'salt'],
    steps: [
      'Boil spaghetti in salted water until al dente.',
      'Drain and set aside.',
      'Slice garlic thinly.',
      'Heat olive oil in a pan.',
      'Add garlic and sauté until golden.',
      'Add chili flakes and stir.',
      'Toss in the cooked spaghetti.',
      'Mix well to coat with oil.',
      'Add chopped parsley.',
      'Serve hot.',
    ],
  },
  {
    name: '🍚 Vegetable Biryani',
    ingredients: ['basmati rice', 'mixed vegetables', 'onion', 'tomato', 'yogurt', 'spices', 'ghee'],
    steps: [
      'Soak rice for 30 minutes.',
      'Boil rice until 70% cooked.',
      'Heat ghee in a pan.',
      'Fry sliced onions until golden.',
      'Add chopped tomatoes and cook until soft.',
      'Add spices and cook for 2 minutes.',
      'Add vegetables and sauté.',
      'Mix in yogurt and cook for 5 minutes.',
      'Layer rice and vegetable mix in a pot.',
      'Cover and cook on low heat for 15 minutes.',
      'Garnish with fried onions and coriander.',
    ],
  },
  {
    name: '🥪 Grilled Cheese Sandwich',
    ingredients: ['bread', 'cheddar cheese', 'butter'],
    steps: [
      'Butter one side of each bread slice.',
      'Place cheese between unbuttered sides.',
      'Heat a skillet over medium heat.',
      'Place sandwich on skillet, buttered side down.',
      'Cook until golden brown.',
      'Flip and cook the other side.',
      'Serve hot.',
    ],
  },
  {
    name: '🍲 Chicken Soup',
    ingredients: ['chicken', 'carrot', 'celery', 'onion', 'garlic', 'broth', 'salt', 'pepper'],
    steps: [
      'Chop vegetables.',
      'Heat oil in a pot.',
      'Add garlic and onion, sauté until fragrant.',
      'Add chicken pieces and brown slightly.',
      'Add carrots and celery.',
      'Pour in broth.',
      'Bring to a boil.',
      'Reduce heat and simmer for 30 minutes.',
      'Season with salt and pepper.',
      'Serve warm.',
    ],
  },
  {
    name: '🍛 Paneer Butter Masala',
    ingredients: ['paneer', 'tomato', 'onion', 'butter', 'cream', 'spices'],
    steps: [
      'Chop onions and tomatoes.',
      'Sauté onions in butter until golden.',
      'Add tomatoes and cook until soft.',
      'Blend mixture into a smooth paste.',
      'Return paste to pan and add spices.',
      'Add butter and cook for 5 minutes.',
      'Add paneer cubes.',
      'Pour in cream and simmer.',
      'Cook for 10 minutes.',
      'Garnish with coriander and serve.',
    ],
  },
  {
    name: '🍤 Garlic Butter Shrimp',
    ingredients: ['shrimp', 'garlic', 'butter', 'lemon juice', 'parsley', 'salt'],
    steps: [
      'Peel and clean shrimp.',
      'Mince garlic.',
      'Heat butter in a pan.',
      'Add garlic and sauté until fragrant.',
      'Add shrimp and cook until pink.',
      'Drizzle lemon juice.',
      'Sprinkle salt and chopped parsley.',
      'Serve immediately.',
    ],
  },
  {
    name: '🍞 French Toast',
    ingredients: ['bread', 'egg', 'milk', 'sugar', 'cinnamon', 'butter'],
    steps: [
      'Crack eggs into a bowl.',
      'Add milk, sugar, and cinnamon.',
      'Whisk until smooth.',
      'Dip bread slices into the mixture.',
      'Heat butter in a pan.',
      'Place soaked bread on the pan.',
      'Cook until golden brown on both sides.',
      'Serve with syrup or fruit.',
    ],
  },
  {
    name: '🍪 Chocolate Chip Cookies',
    ingredients: ['flour', 'sugar', 'butter', 'egg', 'vanilla', 'baking soda', 'chocolate chips'],
    steps: [
      'Preheat oven to 180°C.',
      'Cream butter and sugar.',
      'Add egg and vanilla, mix well.',
      'Combine dry ingredients in another bowl.',
      'Mix dry and wet ingredients.',
      'Fold in chocolate chips.',
      'Scoop dough onto baking tray.',
      'Bake for 10–12 minutes.',
      'Cool on a wire rack.',
    ],
  }
]

  return (
        <View style={styles.images={flex:1,Top:1000}}>
          <Image source={require('./assets/burgerr.png')} style={styles.burger} />
          <Image source={require('./assets/fries.png')} style={styles.fries} />
          <Image source={require('./assets/boba.png')} style={styles.boba} />
          <Image source={require('./assets/pancake.png')} style={styles.pancake} />
          <Image source={require('./assets/donut.png')} style={styles.donut} />
          <Image source={require('./assets/cookie.png')} style={styles.cookie} />
          <Image source={require('./assets/pizza.png')} style={styles.pizza} />    
    <ScrollView style={{  backgroundColor: '#F8E4DA', padding: 20, flex:1}}>
      {likedRecipes.length > 0 ? (
        likedRecipes.map((r, i) => {
          const recipe = recipeDatabase.find((recipe) => recipe.name === r);
          return (
            <View key={i} style={styles.recipeCard}>
              <Text style={styles.recipeName}>{recipe.name}</Text>
              {recipe.steps.map((s, j) => (
                <Text key={j} style={styles.recipeStep}>
                  Step {j + 1}: {s}
                </Text>
              ))}
            </View>
          );
        })
      ) : (
        <Text style={styles.noLikes}>No liked recipes yet 😋</Text>
      )}
    </ScrollView>
    </View>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8E4DA',
    alignItems: 'center',
    paddingTop: 80,
  },
  noLikes: {
    marginTop: 100,
    textAlign:'center',
    fontSize: 18,
    color: '#444343ff',
  },
  recipeCard: {
    backgroundColor: '#dcc4bfff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    top:70,
    opacity:1
  },
  recipeName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ff6f61',
    marginBottom: 10,
  },
  stepText: {
    fontSize: 15,
    color: '#333',
    lineHeight: 22,
  },

  // Background images (same as before)
  burger: {
    position: 'absolute',
    top: 150,
    left: -80,
    width: 155,
    height: 147,
    zIndex: 1,
    opacity: 0.2,
  },
  fries: {
    position: 'absolute',
    top: 90,
    left: 240,
    width: 150,
    height: 140,
    zIndex: 1,
    opacity: 0.3,
    transform: [{ rotate: '-15deg' }],
  },
  boba: {
    position: 'absolute',
    top: -200,
    left: -19,
    width: 100,
    height: 210,
    zIndex: 1,
    opacity: 0.2,
    transform: [{ rotate: '15deg' }],
  },
  cookie: {
    position: 'absolute',
    top: -120,
    left: 275,
    width: 137,
    height: 126,
    zIndex: 1,
    opacity: 0.2,
  },
  pancake: {
    position: 'absolute',
    top: 300,
    left: 270,
    width: 152,
    height: 154,
    zIndex: 1,
    opacity: 0.2,
    transform: [{ rotate: '10deg' }],
  },
  donut: {
    position: 'absolute',
    top: 500,
    left: 180,
    width: 126,
    height: 127,
    zIndex: 1,
    opacity: 0.2,
  },
  pizza: {
    position: 'absolute',
    top: 420,
    left: 10,
    width: 126,
    height: 127,
    zIndex: 1,
    opacity: 0.2,
  },
});
