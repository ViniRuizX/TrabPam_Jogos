import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './style';

export default function CardLancamento({titulo,preco,imagem}){
    return(
        <TouchableOpacity style ={styles.containerLancameto}>

            <Image style ={styles.imagemLancamento} source = {require(`../../Img/${imagem}`)}/>
            <Text style ={styles.tituloLancameto}> {titulo} </Text>
            <Text style ={styles.precoLancameto}> {preco} </Text>

        </TouchableOpacity>
    );  
}