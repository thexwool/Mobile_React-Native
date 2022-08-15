import { Text, TextInput, View, TouchableOpacity, Alert, FlatList } from "react-native"
import { styles } from "./styles"
import { Task } from "../../components/Task"
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { useState } from "react"

export default function Home(){
    const [tasks, setTasks] = useState<string[]>([])
    const [taskName, setTaskName] = useState('')
    const [created, setCreated] = useState(0)
    const [completed, setCompleted] = useState(0)

    const handleTaskRemove = (nameTask: string) => {
        Alert.alert('Remover', `Deseja mesmo remover esta tarefa?`, [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks(prevState => prevState.filter(t => t !== nameTask))
                    setCreated(prevState => prevState - 1)
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    const handleTaskAdd = () => {
        if(tasks.includes(taskName)){
            return Alert.alert('Participante existe', 'Já existe um participante na lista com esse nome.')
        }

        setTasks(prevState => [...prevState, taskName])
        setCreated(prevState => prevState + 1)
        setTaskName('')
    }

    return(
        <View>
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
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor='#808080'
                        onChangeText={setTaskName}
                        value={taskName}
                    />

                    <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
                        <Text>
                            <AntDesign name="pluscircleo" size={24} color="#FFF" />
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
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Task
                            key={item}
                            nameTask={item}
                            onRemove={() => handleTaskRemove(item)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <>
                            <View style={styles.line}></View>
                            <View style={styles.listEmpty}>
                                <Text style={styles.emptyIcon}>
                                    <Ionicons name="ios-clipboard-outline" size={55} color='#3D3D3D' />
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
        </View>
    )
}
