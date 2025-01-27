import { ReactNode } from "react"

const Tag = ({ children }: { children: ReactNode }) => {
  return (
    <span className="px-5 py-1 font-semibold bg-zinc-800 rounded-full">
      {children}
    </span>
  )
}

export default Tag