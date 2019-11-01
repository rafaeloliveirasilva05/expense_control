import React, { useState } from 'react'
import { View } from 'react-native'

import { Container, Input, Label, SubmitButton } from './styles'

export default function Record_Spent() {
  const [expenseType, setExpenseType] = useState('Rolê')
  const [desription, setDescription] = useState('Lanche')
  const [valueSpent, setValueSpent] = useState('30,00')
  const [datePurchase, setDatePurchase] = useState('25/10/20')

  const handleSubmit = () => {
    console.tron.log(expenseType)
    console.tron.log(desription)
    console.tron.log(valueSpent)
    console.tron.log(datePurchase)
  }

  return (
    <Container>
      <View style={{ marginTop: 20 }}>
        <Label>Tipo do gasto</Label>
        <Input
          placeholder={'Ex: Rolê'}
          onChangeText={text => setExpenseType(text)}
          value={expenseType}/>
      </View>

      <View style={{ marginTop: 20 }}>
        <Label>Decrição</Label>
        <Input
          placeholder={'Ex: Lanche'}
          onChangeText={text => setDescription(text)}
          value={desription}/>
      </View>

      <View style={{ marginTop: 20 }}>
        <Label>Valor</Label>
        <Input
          placeholder={'Ex: 30.00'}
          onChangeText={text => setValueSpent(text)}
          value={valueSpent}/>
      </View>

      <View style={{ marginTop: 20 }}>
        <Label>Data</Label>
        <Input
          placeholder={'Ex: 25/10/20'}
          onChangeText={text => setDatePurchase(text)}
          value={datePurchase}/>
      </View>

      <SubmitButton
        onPress={handleSubmit}
      />
    </Container>
  )
}
