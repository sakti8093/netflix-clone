import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
export const authOptions:NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
      // OAuth authentication providers...
      GoogleProvider({
        clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID??"",
        clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET??""
      }),
    ]
} 