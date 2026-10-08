import { View, Text } from 'react-native'
import React from 'react'

const CustomLabel = (props:any) => {
  return (
    <View>
      <Text style={{
        fontSize: 40,
        color: 'white',
        fontWeight: '700',
        borderWidth: 1,
        borderColor: 'red',
      }}>{props.children}</Text>
    </View>
  )
}

export default CustomLabel