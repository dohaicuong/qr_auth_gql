import { YogaInitialContext } from '@graphql-yoga/node'
import { IncomingMessage, ServerResponse } from 'http'
import { verifyToken } from '../clients/jwt'


type InitContext = YogaInitialContext & {
  req: IncomingMessage
  res: ServerResponse
}

export type Context = {
  accountId: string | undefined
}

export const context = ({ req }: InitContext): Context => {
  const jwtPayload = parseAuthHeader(req.headers.authorization)

  return {
    accountId: jwtPayload?.sub,
  }
}

const parseAuthHeader = (auth: string | undefined) => {
  if (!auth) return

  const isBearer = auth.indexOf('Bearer ') === 0
  if (!isBearer) return

  const token = auth.replace('Bearer ', '')
  const verifyTokenPayload = verifyToken(token)
  if (verifyTokenPayload.situation === 'VerifyTokenError') return console.log(verifyTokenPayload.message)
  
  return verifyTokenPayload.payload
}
