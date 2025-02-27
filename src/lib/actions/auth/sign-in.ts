'use server'
import { signIn } from './../../auth'

export async function SignIn(provider: string, callbackUrl: string) {
  return await signIn(provider, { callbackUrl })
}