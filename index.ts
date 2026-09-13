import 'dotenv/config'
import {TinkoffInvestApi} from 'tinkoff-invest-api'
import * as grpc from '@grpc/grpc-js'

// yarn ts-node-dev index.ts

async function main() {
  const token = process.env.TINKOFF_API_TOKEN;

  if (!token) {
    throw new Error('TINKOFF_API_TOKEN не задан')
  }

  const api = new TinkoffInvestApi(token);

  const {accounts} = await api.users.getAccounts({});

  console.log(accounts)
}

main().catch(console.error)
