import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export default function App() {

  const [itens, setItens] = useState([

    { tipo: 'Ação', key: 1 },
    { tipo: 'Aventura', key: 2 },
    { tipo: 'Terror', key: 4 },
    { tipo: 'RPG', key: 5 },
    { tipo: 'FPS', key: 6 },
    { tipo: 'Puzzle', key: 7 },
    { tipo: 'Corrida', key: 8 },
    { tipo: 'Simulador', key: 9 },
    { tipo: 'Estratégia', key: 10 },

  ])
  const [itensb, setName] = useState(false);
  const click = () => {

    setName(!itensb);

  }

  return (
    <SafeAreaView>
      <ScrollView>

        <View style={styles.container}>
          <View style={styles.caixa}>
            <Entypo style={styles.icone} name="key" size={25} color="black" />
            <TextInput style={styles.logon} placeholder='Login'></TextInput>
          </View>

          <View style={styles.caixa}>
            <FontAwesome style={styles.icone} name="lock" size={29} color="black" />
            <TextInput style={styles.logon} placeholder='Senha'></TextInput>
          </View>
          <Button style={styles.botao} title='LOGIN' onPress={() => Alert.alert('Usuário Logado!')} />


          <View style={styles.botao}>
            <Button title='ESCONDER' onPress={click}></Button>
          </View>

          {
            itensb ?
              <Text> </Text>
              :
              itens.map(
                (item) => {
                  return (
                    <TouchableOpacity>
                      <View key={item.key}>
                        <Text style={styles.styitens1}>{item.tipo}</Text>
                      </View>
                    </TouchableOpacity>
                  )
                }
              )
          }
          <View style={styles.stylist}>

          </View>

          <StatusBar style="auto" />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flexbox: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  caixa: {

    flexDirection: 'row',
    justifyContent: 'space-around'

  },

  icone:{

    padding: 15,

  },

  botao: {

    backgroundColor: 'lightgreen',
    borderRadius: 10,

  },

  botao2: {

    backgroundColor: 'black',
    borderRadius: 10,

  },

  logon: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 200,

  },

  styitens1: {

    backgroundColor: 'lightblue',
    marginTop: 20,
    padding: 30,
    width: 400,
    fontSize: 25,
    borderWidth: 2,
    borderRadius: 25,
    overflow: 'hidden',
    textAlign: 'center',

  },

  styitens2: {

    backgroundColor: 'lightblue',
    marginTop: 20,
    padding: 30,
    width: 400,
    fontSize: 25,
    borderWidth: 2,
    borderRadius: 25,
    overflow: 'hidden',
    textAlign: 'center',

  },
});
