import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import BannerJogos from './src/components/bannerJogos';
import Lancameto from './src/data/lancamento';
import MaisVendido from './src/data/maisvendido';

import Header from './src/components/header';
import SearchBar from './src/components/searchbar';
import CardLancamento from './src/components/cardLancamento';
import CardMaisVendido from './src/components/cardMaisVendido';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <SearchBar></SearchBar>
      <BannerJogos></BannerJogos>

      <Text style = {styles.textBanner}> Lançamentos </Text>

      <View style={{width:"90%"}}>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={Lancameto}
        keyExtractor={(item) => item.id}
        renderItem = { ({item}) => (

          <CardLancamento

            titulo = {item.nome}
            desen = {item.desen}
            nota = {item.nota}
            preco = {item.preco}
            imagem = {item.imagem}

          />

        )}
        

        />
      </View>

      <Text style = {styles.textBanner2} class="alta"> Mais Vendidos </Text>

      <View style={{width:"90%"}}>
        <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={MaisVendido}
        keyExtractor={(item) => item.id}
        renderItem = { ({item}) => (

          <CardMaisVendido

            titulo = {item.nome}
            desen = {item.desen}
            nota = {item.nota}
            preco = {item.preco}
            imagem = {item.imagem}

          />

        )}
        

        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#15011c',
    alignItems:"center"
    
    
  },

  textBanner:{
    fontSize:30,
    color:'white',
    marginTop:15,
    marginLeft:-175,
    fontWeight:'Bold'
},

  textBanner2:{
  fontSize:30,
  color:'white',
  marginTop:15,
  marginLeft:-155,
  fontWeight:'Bold'
}

});
