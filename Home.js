// App.js
import React, { createContext, useContext, useState } from 'react';
import {View,Text,StyleSheet,Image,TextInput,Button,ScrollView,TouchableOpacity,I} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';
import LikeScreen from './LikeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

// ---------- Recipe Database ----------
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
  },
];

// ---------- Context for Liked Recipes ----------
const LikedRecipesContext = createContext();
export const useLikedRecipes = () => useContext(LikedRecipesContext);

const LikedRecipesProvider = ({ children }) => {
  const [likedRecipes, setLikedRecipes] = useState([]);
  return (
    <LikedRecipesContext.Provider value={{ likedRecipes, setLikedRecipes }}>
      {children}
    </LikedRecipesContext.Provider>
  );
};

// ---------- Utility Function ----------
function getRecipeFromIngredients(inputIngredients) {
  const ingredients = inputIngredients.map((i) => i.trim().toLowerCase());
  let matches = recipeDatabase.filter((recipe) =>
    ingredients.every((ing) => recipe.ingredients.includes(ing))
  );
  if (matches.length === 0 && ingredients.length === 1) {
    matches = recipeDatabase.filter((recipe) =>
      recipe.ingredients.includes(ingredients[0])
    );
  }
  return matches;
}

// ---------- Home Screen ----------
const HomeScreen = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);
  const { likedRecipes, setLikedRecipes } = useLikedRecipes();

  const handleGenerateRecipe = () => {
    const ingredientsArray = ingredients.split(',').map((i) => i.trim().toLowerCase());
    const results = getRecipeFromIngredients(ingredientsArray);
    setRecipes(results);
  };

  const toggleLike = (name) => {
    setLikedRecipes((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  return (
    <View style={styles.container2}>
      {/* Background images */}
      <View style={styles.backgroundContainer}>
        <Image source={require('./assets/burgerr.png')} style={styles.burger} />
        <Image source={require('./assets/fries.png')} style={styles.fries} />
        <Image source={require('./assets/boba.png')} style={styles.boba} />
        <Image source={require('./assets/pancake.png')} style={styles.pancake} />
        <Image source={require('./assets/donut.png')} style={styles.donut} />
        <Image source={require('./assets/cookie.png')} style={styles.cookie} />
        <Image source={require('./assets/pizza.png')} style={styles.pizza} />
      </View>

      {/* Foreground */}
      <View style={styles.foregroundContainer}>
        {/* Recipe Generator Box */}
        <View style={styles.recipeBox}>
          <Text style={styles.recipeTitle}>🍳 Recipe Generator</Text>
          <TextInput
            style={styles.input}
            placeholder="🥕 Enter ingredients to find recipes!"
            value={ingredients}
            onChangeText={setIngredients}
          />
          <Button title="Get Recipes" onPress={handleGenerateRecipe} />
        </View>

        {/* Recipes List */}
        <ScrollView style={styles.recipeScrollBox} contentContainerStyle={{ paddingBottom: 100 }}>
          {recipes.length > 0 ? (
            recipes.map((r, index) => (
              <View key={index} style={styles.recipeCard}>
                <View style={styles.cardHeader}>
                  <Text style={styles.recipeName}>{r.name}</Text>
                  <TouchableOpacity onPress={() => toggleLike(r.name)}>
                    <MaterialCommunityIcons
  name={likedRecipes.includes(r.name) ? 'heart' : 'heart-outline'}
  size={26}
  color={likedRecipes.includes(r.name) ? '#ff4d4d' : '#555'}
/>

                  </TouchableOpacity>
                </View>
                {r.steps.map((step, i) => (
                  <Text key={i} style={styles.recipeStep}>
                    Step {i + 1}: {step}
                  </Text>
                ))}
              </View>
            ))
          ) : (
            <Text style={styles.noResultsText}></Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

// ---------- Tab Decorations ----------
const getTabDecoration = (routeName, focused) => {
  switch (routeName) {
    case 'MainHome':
      return (
        <MaterialCommunityIcons
          name={focused ? 'home' : 'home-outline'}
          size={26}
          color={focused ? '#ff6f61' : '#363131ff'}
        />
      );

    case 'Likes':
      return (
        <MaterialCommunityIcons
          name={focused ? 'heart' : 'heart-outline'}
          size={26}
          color={focused ? '#ff6f61' :'#363131ff'}
        />
      );

    case 'Profile':
      return (
         <MaterialCommunityIcons
          name={focused ? 'account' : 'account-outline'}
          size={26}
          color={focused ? '#ff6f61' : '#363131ff'}
        />
      );

    default:
      return null;
  }
};


// ---------- Main App Component ----------
export default function App() {
  return (
    <LikedRecipesProvider>
   <Tab.Navigator
  screenOptions={({ route }) => ({
    tabBarIcon: ({ focused }) => getTabDecoration(route.name, focused),
    tabBarActiveTintColor: '#ff6f61',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      backgroundColor: '#CEA8A6',
      borderTopWidth: 0,
      elevation: 10,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      height: 70,
    },
    headerShown: false,
  })}
>
      <Tab.Screen name="MainHome" component={HomeScreen} options={{ tabBarLabel: '' }} />
        <Tab.Screen name="Likes" component={LikeScreen} options={{ tabBarLabel: '' }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: '' }} />
      </Tab.Navigator>
    </LikedRecipesProvider>
  );
}

// ---------- Styles ----------
const styles = StyleSheet.create({
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
 
  recipeBox: { backgroundColor: '#CEA8A6', padding: 15, borderRadius: 12, marginBottom: 20, width: '90%' },
  recipeTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { backgroundColor: '#fff', borderColor: '#ccc', borderWidth: 1, borderRadius: 8, padding: 8, marginBottom: 10 },
  recipeScrollBox: { width: '90%' },
  recipeCard: { backgroundColor: '#dcc4bfff', padding: 15, borderRadius: 12, marginBottom: 15 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 },
  recipeName: { fontWeight: 'bold', fontSize: 18 },
  recipeStep: { fontSize: 14, marginBottom: 3 },
  noResultsText: { fontSize: 16, fontStyle: 'italic', padding: 20 },
  noLikes: { fontSize: 16, fontStyle: 'italic', textAlign: 'center', marginTop: 50 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
});
