import { ReactNode } from "react"

const WrapperBox = ({extraClass,children}:{extraClass?:string,children:ReactNode}) => {
  return (
    <div className={`relative min-h-[800px] bg-white/40 containers rounded-[50px] wrapper-box  ${extraClass}`}>
      
      {children}</div>
  )
}

export default WrapperBox