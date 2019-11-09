export default class SpendingDataSchema {
  static schema = {
    name: 'SpendingData',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true }, 
      expenseType: 'string',
      desription: 'string',
      valueSpent: 'string',
      datePurchase: 'string'
    }
  }
}