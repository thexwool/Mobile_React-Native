import { Text, TextInput, View, TouchableOpacity, FlatList } from "react-native"
import { styles } from "./styles"
import { AntDesign } from '@expo/vector-icons'
import { Foundation } from '@expo/vector-icons';
import { useState } from "react"

export default function Home(){
    const [created, setCreated] = useState(0)
    const [completed, setCompleted] = useState(0)

    return(
        <>
            <View style={styles.topContainer}>
                <Text style={styles.title}>
                    <AntDesign name="rocket1" size={30} color='#4EA8DE' />
                    To:
                    <Text style={{color: '#8284FA'}}>
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

                <View style={styles.allCount}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.createdCount}>
                            Criadas
                        </Text>
                        <Text style={styles.count}>
                            {created}
                        </Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.completedCount}>
                            Concluídas
                        </Text>
                        <Text style={styles.count}>
                            {completed}
                        </Text>
                    </View>
                </View>

                <FlatList
                    ListEmptyComponent={() => (
                        <>
                            <View style={styles.line}></View>
                            <View style={styles.listEmpty}>
                                <Text style={styles.emptyIcon}>
                                    <Foundation name="clipboard-pencil" size={55} />
                                </Text>
                                <Text style={styles.emptyText1}>
                                    Você ainda não tem tarefas cadastradas
                                </Text>
                                <Text style={styles.emptyText2}>
                                    Crie tarefas e organize seus itens a fazer
                                </Text>
                            </View>
                        </>
                    )}
                />
            </View>
        </>
    )
}
