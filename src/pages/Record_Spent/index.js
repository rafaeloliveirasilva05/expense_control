import React, { useState, useRef, useEffect } from 'react'
import { View } from 'react-native'
import moment from 'moment-timezone'
import RNFetchBlob from 'rn-fetch-blob'

import { Container, Input, Label, SubmitButton } from './styles'
import getRealm from '../../services/realm'

moment.locale('pt-br')

export default function Record_Spent() {
  const [expenseType, setExpenseType] = useState('Rolê')
  const [desription, setDescription] = useState('Lanche')
  const [valueSpent, setValueSpent] = useState('30,00')
  const [datePurchase, setDatePurchase] = useState('25/10/20')

  const spendTypeField = useRef(null)
  const valueSpentField = useRef(null)
  const datePurchaseField = useRef(null)
  const handleSubmitButton = useRef(null)

  const values = [
    ['build', '2017-11-05T05:40:35.515Z'],
    ['deploy', '2017-11-05T05:42:04.810Z']
  ]

  useEffect(() => {
    setDatePurchase(getCurrentDate())
    loadSpendingData()
    // buildCSV()
  }, [])

  const loadSpendingData = async () => {
    try {
      const realm = await getRealm()
      const data = realm.objects('SpendingData')
      console.tron.log('data', data)

    } catch (error) {
      console.tron.log('error', error)
    }
  }

  const buildCSV = () => {
    // construct csvString
    const headerString = 'event,timestamp\n';
    const rowString = values.map(d => `${d[0]},${d[1]}\n`).join('')
    const csvString = `${headerString}${rowString}`

    // write the current list of answers to a local csv file
    const pathToWrite = `${RNFetchBlob.fs.dirs.DownloadDir}/data.csv`

    // pathToWrite /storage/emulated/0/Download/data.csv
    RNFetchBlob.fs
      .writeFile(pathToWrite, csvString, 'utf8')
      .then(() => {
        // console.tron.log(`wrote file ${pathToWrite}`);
        // wrote file /storage/emulated/0/Download/data.csv
      })
  }

  const getCurrentDate = () => {
    const dataUtc = moment.utc()
    return moment.tz(dataUtc, moment.tz.guess()).format('DD/MM/YYYY HH:mm:ss')
  }


  const handleSubmit = async () => {

    const data = {
      id: Math.floor(Math.random() * 256),
      expenseType,
      desription,
      valueSpent,
      datePurchase
    }

    try {
      const realm = await getRealm()

      realm.write(() => {
        realm.create('SpendingData', data)
      })
    } catch (error) {
      console.tron.log('error', error)
    }

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
          onSubmitEditing={() => valueSpentField.current.focus()} />
      </View>

      <View style={{ marginTop: 20 }}>
        <Label>Valor</Label>
        <Input
          ref={valueSpentField}
          placeholder={'Ex: 30.00'}
          onChangeText={text => setValueSpent(text)}
          value={valueSpent}
          onSubmitEditing={() => datePurchaseField.current.focus()} />
      </View>

      <View style={{ marginTop: 20 }}>
        <Label>Data</Label>
        <Input
          ref={datePurchaseField}
          placeholder={'Ex: 25/10/20'}
          onChangeText={text => setDatePurchase(text)}
          value={datePurchase}
          onSubmitEditing={handleSubmit} />
      </View>

      <SubmitButton
        ref={handleSubmitButton}
        onPress={handleSubmit}
      />
      <View style={{ flex: 1 }}></View>
    </Container>
  )
}
