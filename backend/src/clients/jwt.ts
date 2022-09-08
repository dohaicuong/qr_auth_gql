import { JsonWebTokenError, NotBeforeError, sign, TokenExpiredError, verify, VerifyErrors } from 'jsonwebtoken'

type JwtPayload = {
  sub: string
}

export const JWT_SECRET = process.env.JWT_SECRET || 'JWT_SECRET_HERE'

export const signToken = (payload: JwtPayload) => sign(payload, JWT_SECRET)

type VerifyTokenSuccess = {
  situation: 'VerifyTokenSuccess'
  payload: JwtPayload
}
type VerifyTokenError = {
  situation: 'VerifyTokenError'
  type: 'JsonWebTokenError' | 'VerifyTokenError' | 'TokenExpiredError' | 'UnknownError'
  message: string
}
type VerifyTokenPayload = VerifyTokenSuccess | VerifyTokenError

export const verifyToken = (token: string): VerifyTokenPayload => {
  try {
    return {
      situation: 'VerifyTokenSuccess',
      payload: verify(token, JWT_SECRET) as JwtPayload
    }
  }
  catch(error: unknown) {
    if (error instanceof JsonWebTokenError) {
      return {
        situation: 'VerifyTokenError',
        type: 'JsonWebTokenError',
        message: error.message,
      }
    }

    if (error instanceof NotBeforeError) {
      return {
        situation: 'VerifyTokenError',
        type: 'VerifyTokenError',
        message: error.message,
      }
    }

    if (error instanceof TokenExpiredError) {
      return {
        situation: 'VerifyTokenError',
        type: 'TokenExpiredError',
        message: error.message,
      }
    }

    return {
      situation: 'VerifyTokenError',
      type: 'UnknownError',
      message: 'Something went wrong!',
    }
  }
}
