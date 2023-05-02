import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Moviments({data}) {
    const [showValue, setShowValue] = React.useState(false)

    const handleShowValue = () => {
        setShowValue(!showValue)
    }

  return (
    <TouchableOpacity style={styles.container} onPress={handleShowValue}>
      <Text style={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        { showValue ? (
            <Text style={data.type === 0 ? styles.espenses : styles.value}>
                {data.type === 0 ? `R$ -${data.value}` : `R$ ${data.value}`}
            </Text>
        ) : 
            <View style={styles.skeleton}>
                
            </View>
        }
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    date: {
        color: '#dadada',
        fontWeight: 'bold'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    value: {
        fontSize: 16,
        color: '#2ecc71',
        fontWeight: 'bold'
    },
    espenses: {
        fontSize: 16,
        color: '#e74c3c',
        fontWeight: 'bold'
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#dadada',
        borderRadius: 8,
    }
})