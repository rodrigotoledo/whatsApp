import React from 'react';
import { View, Text, TextInput, Button, TouchableHighlight } from "react-native";
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import styles from "./styles";
import colors from "styles/colors";


const FormLogin = props => {
  return (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>WhatsApp Clone</Text>
    </View>
    <View style={styles.main}>
      <TextInput value={props.email} placeholder="Email" style={styles.input} />
      <TextInput value={props.senha} placeholder="Senha" style={styles.input} />
      <TouchableHighlight onPress={() => Actions.FormCadastro()}>
        <Text style={ styles.link }>Ainda não tem cadastro? Cadastre-se</Text>
      </TouchableHighlight>
    </View>
    
    <View style={styles.footer}>
      <TouchableHighlight style={styles.button}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableHighlight>
    </View>
  </View>
)
};

const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
);

export default connect(mapStateToProps, null)(FormLogin);