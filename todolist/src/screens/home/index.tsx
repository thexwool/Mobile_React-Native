import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { AntDesign } from '@expo/vector-icons';


export default function Home(){
    return(
        <>
            <View style={styles.topContainer}>
                <Text style={styles.title}>
                    <AntDesign name="rocket1" size={30} color='#4EA8DE' />
                    To:
                    <Text style={{color: '#5E60CE'}}>
                        Do
                    </Text>
                </Text>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.form}>
                    <TextInput 
                        style={styles.input}
                        placeholder='Adicione uma tarefa'
                        placeholderTextColor='#808080'
                    />

                    <TouchableOpacity style={styles.button}>
                        <Text>
                            <AntDesign name="pluscircleo" size={24} color="white" />
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}