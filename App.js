import * as React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen() {
  const navigation = useNavigation();

  const [ pokemonEscolhido1, setPokemonEscolhido1 ] = useState(null);
  const [ pokemonEscolhido2, setPokemonEscolhido2 ] = useState(null);
  const [ pokemonEscolhido3, setPokemonEscolhido3 ] = useState(null);


  useEffect(() => {
    getPokemonData('bulbasaur', 'Ivysaur', 'Venusaur');
  }, []);
 
  const getPokemonData = (nome1, nome2, nome3) => {
  nome1 = nome1.toLowerCase();
  const endpoint1 = `https://api.pokemontcg.io/v2/cards?q=name:${nome1}`;
  const endpoint2 = `https://api.pokemontcg.io/v2/cards?q=name:${nome2}`;
  const endpoint3 = `https://api.pokemontcg.io/v2/cards?q=name:${nome3}`;


  fetch(endpoint1)
    .then(res => {
      if (!res.ok) throw new Error("Erro na requisição");
      return res.json();
    })
    .then(json => {
      const card = json.data[0];


      const pokemon1 = {
        nome: card.name,
        imagem: card.images.small,
        descricao: card.flavorText
      };


      setPokemonEscolhido1(pokemon1);
    })
    .catch((erro) => {
      console.log("ERRO:", erro);
      Alert.alert('Erro', 'Não foi possível carregar cartas');
    });
  fetch(endpoint2)
    .then(res => {
      if (!res.ok) throw new Error("Erro na requisição");
      return res.json();
    })
    .then(json => {
      const card = json.data[0];


      const pokemon2 = {
        nome: card.name,
        imagem: card.images.small,
        descricao: card.flavorText
      };


      setPokemonEscolhido2(pokemon2);
    })
    .catch((erro) => {
      console.log("ERRO:", erro);
      Alert.alert('Erro', 'Não foi possível carregar cartas');
    });
  fetch(endpoint3)
    .then(res => {
      if (!res.ok) throw new Error("Erro na requisição");
      return res.json();
    })
    .then(json => {
      const card = json.data[0];


      const pokemon3 = {
        nome: card.name,
        imagem: card.images.small,
        descricao: card.flavorText
      };


      setPokemonEscolhido3(pokemon3);
    })
    .catch((erro) => {
      console.log("ERRO:", erro);
      Alert.alert('Erro', 'Não foi possível carregar cartas');
    });
};

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
          {pokemonEscolhido1 ? pokemonEscolhido1.nome : 'Carregando...'}
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
            {pokemonEscolhido2 ? pokemonEscolhido2.nome : 'Carregando...'}
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
          {pokemonEscolhido3 ? pokemonEscolhido3.nome : 'Carregando...'}
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
          Venusaur {idPokemon}
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



