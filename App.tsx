import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native"
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

function App(){
  return (
    <View style={styles.container}>

        <StatusBar style="light"/>
        <Image style={styles.logo} source={require('./assets/image.png')}></Image>
        <Text style={styles.text}>Bem-Vindo(a)</Text>


        <View style={styles.quadB}>

        <View style={styles.inputContainer}>
          <Text style={styles.fontE}>E-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail:"
          placeholderTextColor="#B0B0B0"
        />

        <View style={styles.inputContainer2}>
          <Text style={styles.fontS}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Sua senha:"
          placeholderTextColor="#B0B0B0"
        />

        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Acessar</Text>
          </TouchableOpacity>
            </View>

        <View>
          <Text style={styles.fontC}>Não possui conta? Cadastre-se</Text>
        </View>

        <View style={styles.icon}>
          <AntDesign name="google" paddingRight={8} size={50} color="black" />
          <FontAwesome5 name="facebook" paddingLeft={8} size={50} color="black" />
        </View>

        </View>
        </View>
        </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#FF0000',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 42,
    paddingHorizontal: 73,
  },
  logo:{
    width: 200,
    height: 51.27,
    marginBottom: 20,
  },
  text:{
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#fff',
    fontWeight: '400',
    lineHeight: 23.44

  },

  inputContainer: {
    marginTop: 30,
    width: 320,
    height: 74,
    left: 23,
  },

  fontE:{
    fontSize:16
  },

inputContainer2:{
  marginTop: 30,
  width: 320,

},

fontS:{
  fontSize: 16
},

  input: {
    paddingTop:20,
    paddingBottom:15,
    height: 55,
    borderBottomWidth: 1,
  },


  button: {
    backgroundColor: '#000',
    width: 320,
    height: 47,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  textButton: {
    fontSize: 20,
    color: '#fff',
  },

  fontC:{
    width:208,
    height:18,
    top:27,
    fontFamily: "Roboto",
    fontSize:15,
    color: "#4305C7"
  },

  icon: {
    paddingTop: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'                               
  },

  quadB:{
    backgroundColor:'#F6FFFD',
    flex: 1,
    width:360,
    height:641,
    top: 50,
    borderRadius:10
  },

})

export default App