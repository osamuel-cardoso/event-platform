import { ReactNode } from 'react'

export function Container({
  children,
  classStyle,
}: {
  children: ReactNode
  classStyle?: string
}) {
  return (
    <div className={`w-full max-w-[90.75rem] px-3 ${classStyle}`}>
      {children}
    </div>
  )
}
