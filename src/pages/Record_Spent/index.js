import React, { useState, useRef } from 'react'
import { View } from 'react-native'

import { Container, Input, Label, SubmitButton } from './styles'

export default function Record_Spent() {
  const [expenseType, setExpenseType] = useState('Rolê')
  const [desription, setDescription] = useState('Lanche')
  const [valueSpent, setValueSpent] = useState('30,00')
  const [datePurchase, setDatePurchase] = useState('25/10/20')

  const spendTypeField = useRef(null)
  const valueSpentField = useRef(null)
  const datePurchaseField = useRef(null)
  const handleSubmitButton = useRef(null)


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
          value={expenseType}
          onSubmitEditing={() => spendTypeField.current.focus()}
        />
      </View>

      <View style={{ marginTop: 20 }}>
        <Label>Decrição</Label>
        <Input
          ref={spendTypeField}
          placeholder={'Ex: Lanche'}
          onChangeText={text => setDescription(text)}
          value={desription} 
          onSubmitEditing={() => valueSpentField.current.focus()}/>
      </View>

      <View style={{ marginTop: 20 }}>
        <Label>Valor</Label>
        <Input
          ref={valueSpentField}
          placeholder={'Ex: 30.00'}
          onChangeText={text => setValueSpent(text)}
          value={valueSpent} 
          onSubmitEditing={() => datePurchaseField.current.focus()}/>
      </View>

      <View style={{ marginTop: 20 }}>
        <Label>Data</Label>
        <Input
          ref={datePurchaseField}
          placeholder={'Ex: 25/10/20'}
          onChangeText={text => setDatePurchase(text)}
          value={datePurchase}
          onSubmitEditing={handleSubmit}/>
      </View>

      <SubmitButton
        ref={handleSubmitButton}
        onPress={handleSubmit}
      />
      <View style={{ flex: 1 }}></View>
    </Container>
  )
}
