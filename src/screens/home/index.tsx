import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements/dist/icons/Icon';

export interface HomescreenProps {
}

export function Homescreen (props: HomescreenProps) {
    return (
      <><View style={styles.container}>
            
            <Text style={styles.titulo1}> Bem-vindo, Carlos</Text>

            <Text style={styles.titulo2}>Você gastou hoje{"\n"}
                <Text style={styles.titulo3}>R$ 500</Text>
            </Text>

            <Text style={styles.titulo4}>ESCOLHER PERÍODO:</Text>
            
            <Text style={styles.titulo5}>Hoje</Text>
            <Text style={styles.titulo6}>Essa semana</Text>
            <Text style={styles.titulo7}>Esse mês</Text>
    
        </View>

        <View style={styles.container2}>
            
            <View style={{flexDirection: 'row', justifyContent:'space-between', padding: 15}}>

                <Button icon = {{backgroundColor: '#444140', name: 'flight', color: '#FFF'}}></Button>
                <Button icon = {{backgroundColor: '#444140', name: 'home', color: '#FFF'}}></Button>
                <Button icon = {{backgroundColor: '#444140', name: 'local-dining', color: '#FFF'}}></Button>
                <Button icon = {{backgroundColor: '#444140', name: 'direction-car', color: '#FFF'}}></Button>
                <Button icon = {{backgroundColor: '#444140', name: 'build', color: '#FFF'}}></Button>

            </View>
            
            <View style={styles.card1}>
                <Text style={styles.cardTitulo1}>Pizza (R$30)</Text>
                <Text style={styles.cardTitulo2}>20/01/2020</Text>
            </View>

            <View style={styles.card2}>
                <Text style={styles.cardTitulo3}>Coca-cola (R$10)</Text>
                <Text style={styles.cardTitulo4}>20/01/2020</Text>
            </View>

        </View></>


    );
}

const styles = StyleSheet.create({
    container:{
        flex: 2,
        backgroundColor: '#E54B4B',
        flexDirection: 'column',
        borderRadius: 50,
        borderTopEndRadius: -0,
        borderTopLeftRadius: -0,
    },

    container2:{
        flex: 2,
        backgroundColor: '#F7EBE8',
    },

    titulo1:{
        color: '#FFF',
        padding: 60,
        textAlign: 'center',
        fontSize: 30,
    },

    titulo2:{
        color: '#FFF',
        textAlign: 'center',
        fontSize: 15,
    },

    titulo3:{
        color: '#FFF',
        textAlign: 'center',
        fontSize: 25,
        padding: 60,
    },

    titulo4:{
        color: '#FFF',
        textAlign: 'center',
        fontSize: 15,
        padding: 40,
    },

    titulo5:{
        flexDirection: 'row',
        marginHorizontal: 35,
        marginTop:-30,
        textAlign:'left',
        color: '#FFF',
        fontSize: 15,
    },

    titulo6:{
        flexDirection: 'row',
        marginHorizontal: 35,
        marginTop: -15,
        textAlign:'center',
        color: '#FFF',
        fontSize: 15,
    },

    titulo7:{
        flexDirection: 'row',
        marginHorizontal: 35,
        marginTop: -15,
        textAlign:'right',
        color: '#FFF',
        fontSize: 15,
    },

    card1:{
        backgroundColor: '#FFF',
        padding: 25,
        borderRadius: 15,
        marginTop: 10,
        marginHorizontal: 15,
    },

    cardTitulo1:{
        fontSize: 15,
        textAlign: 'left',
    },

    cardTitulo2:{
        fontSize: 15,
        textAlign: 'right',
        marginTop: -17,
        
    },

    card2:{
        backgroundColor: '#FFF',
        padding: 25,
        borderRadius: 15,
        marginTop: 20,
        marginHorizontal: 15,
    },

    cardTitulo3:{
        fontSize: 15,
        textAlign: 'left',
    },

    cardTitulo4:{
        fontSize: 15,
        textAlign: 'right',
        marginTop: -17,
        
    },
});

