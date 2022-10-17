import { general } from "./ApiGeneral"
import { token } from './ApiToken'
import { testnet } from './TestnetApi'
import { mfp } from './MFPApi'
import { pef } from './PEFApi'

export const accordionList = [
  {
    id: 1,
    title: 'General',
    listItem: general
  },
  {
    id: 2,
    title: 'Token',
    listItem: token
  },
  {
    id: 3,
    title: 'Testnet',
    listItem: testnet
  },
  {
    id: 4,
    title: 'Machine NFT’s on peaq',
    listItem: mfp
  },
  {
    id: 5,
    title: 'peaq Ecosystem Fund',
    listItem: pef
  }
]
