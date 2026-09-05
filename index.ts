import {TinkoffInvestApi} from 'tinkoff-invest-api'

const token = process.env.TINKOFF_API_TOKEN;
if (!token) {
  throw new Error('TINKOFF_API_TOKEN не задан')
}
const api = new TinkoffInvestApi({token});
