import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ href, children }) => {
  const router = useRouter()

  let className = children.props.className || ''
  if (router && router.pathname === href) {
    className = `${className} scroll`
  }

  
  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}