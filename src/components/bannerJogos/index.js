import React,{Fragment} from 'react';
import { Image,Text, View } from 'react-native';
import styles from './style';


export default function BannerJogos(){
    const imagem = Math.floor(Math.random() * 4 +1);
    return(
        <>
            <Text style = {styles.textBanner}> Seja Bem-Vindo(a)! </Text>
            <Image style = {styles.imagemBanner} source = {require(`../../Img/${imagem}.jpg`)} />
        </>
    );  
}