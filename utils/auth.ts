
import Router from 'next/router'
import nextCookie from 'next-cookies'

export const auth = ctx => {
  const { auth_token } = nextCookie(ctx)

  if (ctx.req && !auth_token) {
    ctx.res.writeHead(302, { Location: '/login' })
    ctx.res.end()
    return
  }

  if (!auth_token) {
    Router.push('/login')
  }

  return auth_token   
}