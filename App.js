import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen() {
  const navigation = useNavigation();




  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

      <View style={styles.linha}>

      <View style={styles.pokemon}>
        <Button style={styles.botao} onPress={() => navigation.navigate('Profile', {idPokemon : 1})}>
          <View>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' }}
          style={styles.image}
        />
        </View>
        <View>
        <Text style={styles.text}>
          Bulbasaur
        </Text>
        </View>
        </Button>
      </View>

      <View style={styles.pokemon}>
        <Button style={styles.botao} onPress={() => navigation.navigate('Profile', {idPokemon : 2})}>
          <View>
          <Image
            source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' }}
            style={styles.image}
          />
          </View>
          <View>
          <Text style={styles.text}>
            Ivysaur
          </Text>
          </View>
        </Button>
      </View>

      <View style={styles.pokemon}>
        
        <Button style={styles.botao} onPress={() => navigation.navigate('Profile', {idPokemon : 3})}>
          <View>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' }}
          style={styles.image}
        />
        </View>
        <View>
        <Text style={styles.text}>
          Venusaur
        </Text>
        </View>
        </Button>
      </View>

      </View>

    </View>
  );
}


function ProfileScreen({route}) {
  const navigation = useNavigation();
  const { idPokemon } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Image
            source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png` }}
            style={styles.imageProfile}
          />
        </View>

        <View>
        <Text style={styles.textProfile}>
          Venusaur {{idPokemon}}
        </Text>
        </View>

    </View>
  );
}


const MyStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
});


const Navigation = createStaticNavigation(MyStack);


export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({

  image: {
    width: 70,
    height: 70
  },

  imageProfile: {
    width: 300,
    height: 300
  },

  text: {
    color: '#121212',
  },

  textProfile: {
    fontSize: 36,
    color: '#121212'
  },

  pokemon: {
    alignItems: 'center'
  },

  botao: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    backgroundColor: '#EAEAEA',
    color: '#121212'
  },

  linha: {
    flexDirection: 'row',
    gap: '10'
  },
  
 


});



