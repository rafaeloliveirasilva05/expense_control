import styled from 'styled-components/native'

export const Container = styled.ScrollView`
  padding: 0 20px;
  flex: 1;
  display: flex;
`

export const Label = styled.Text`
  font-size: 18px;
`

export const Input = styled.TextInput`
  height: 40;
  border-color: green;
  border-width: 1;
`

export const SubmitButton = styled.TouchableOpacity`
  height: 40;
  margin: 40px 50px;
  background-color: green;
  border-radius: 50;
`