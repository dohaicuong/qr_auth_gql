// import { afterAll, beforeAll, expect, it } from 'vitest'

// import { Socket } from 'net'
// import { createSimpleProxy, ISimpleProxySession } from 'pg-server'
// import { PrismaClient } from '@prisma/client'
// import { join } from 'path'
// import { execSync } from 'child_process'

// const server = createSimpleProxy(
//   { port: 5432, host: 'localhost' },
//   class implements ISimpleProxySession {
//     onConnect(socket: Socket) {
//       console.log('👤 Client connected, IP: ', socket.remoteAddress)
//     }
//     onQuery(query: string) {
//       console.log(query)
//       return query
//     }
//   }
// )

// let prisma: PrismaClient

// beforeAll(() => {
//   server.listen(5432, '127.0.0.1')

//   const prismaBinary = join(__dirname, "..", "node_modules", ".bin", "prisma")
//   execSync(`${prismaBinary} db push`)
//   execSync(`${prismaBinary} generate`)
//   prisma = new PrismaClient()
// })

// afterAll(async () => {
//   server.close()
//   await new Promise((resolve) => setTimeout(() => resolve({}), 2000))
// })

// it('renders correctly', async () => {
//   console.log(prisma)
// })
