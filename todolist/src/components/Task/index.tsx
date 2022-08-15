import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { styles } from './styles'

type Props = {
    nameTask: string,
    onRemove: () => void
}

export function Task({ nameTask, onRemove }: Props){
    return(
        <View style={styles.container}>
            <Text style={styles.taskContent}>
                {nameTask}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text>
                    <Feather name="trash-2" size={24} color="#808080" />
                </Text>
            </TouchableOpacity>
        </View>
    )
}