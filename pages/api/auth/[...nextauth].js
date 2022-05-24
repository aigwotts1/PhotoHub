import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
//import TwitterProvider from 'next-auth/providers/twitter'


export default NextAuth({
  providers: [
    //   TwitterProvider({
    //       clientId:process.env.TWITTER_CLIENT_ID,
    //       clientSecret: process.env.TWITTER_CLIENT_SECRET
          
    //   })
    // OAuth authentication providers...
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),

  ],
  theme:{
    logo:'https://drive.google.com/uc?export=view&id=105wpWB8ziAsAP7ChV4ViTc_slxmiJwl0',
    brandColor:'#F13287',
    colorScheme:'auto',
  },
})