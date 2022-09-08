import { hash, compare } from 'bcrypt'

export const HASH_ROUND = process.env.HASH_ROUND || 10

export const hashPassword = (pasword: string): Promise<string> => {
  return hash(pasword, HASH_ROUND)
}

export const comparePassword = (password: string, hashed: string): Promise<boolean> => {
  return compare(password, hashed)
}
