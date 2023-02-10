import React from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";


export function Home() {
  const participants = ["mi", "che", "le", "ca", "mar", "go", "fa", "ri", "as", "de", "i", "gor"];
  
  function handleParticipantAdd() {
    if (participants.includes("mi")) {
      return Alert.alert("Participante existe", "ta chapando maluco?")
    }
    console.log("Você clicou no botão de Adicionar!");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("remover", `tem certeza que vai tirar o ${name}?`, [
      {
        text: "sim",
        onPress: () => Alert.alert("removido")
      },
      {
        text: "não",
        style: "cancel"
      }
    ])

    console.log(`Você clicou no botão de remover o ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        keyExtractor={item => item}
        data={participants}
        renderItem={({item}) => (
          <Participant
            key={item}
            name={item} 
            onRemove={()=> handleParticipantRemove(item)}/>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou? calma um pouco
          </Text>
        )}
      />
    </View>
  )
}