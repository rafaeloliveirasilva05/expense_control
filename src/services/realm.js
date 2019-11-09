import Realm from 'realm'

import SpendingDataSchema from '../schemas/SpendingDataSchema'

export default function getRealm() {
  return Realm.open({
    schema: [SpendingDataSchema]
  })
}