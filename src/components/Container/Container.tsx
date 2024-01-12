import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string | undefined
}) {
  return (
    <div
      className={twMerge(
        'w-full max-w-[90.75rem] mx-auto px-3',
        `${className}`,
      )}
    >
      {children}
    </div>
  )
}
