'use client'

import { useEffect, useState } from 'react'

interface CLientOnlyProps {
  children: React.ReactNode
}

const CLientOnly: React.FC<CLientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }

  return <>{children}</>
}
export default CLientOnly;