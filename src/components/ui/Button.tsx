import type { ReactNode } from "react";

interface IProps{
  children: ReactNode;
  className?:string;
}


const Button = ({children ,className}: IProps) => {
  return (
    <button className={`${className} w-full rounded-md p-2 cursor-pointer`}>{children}</button>
  )
}


export default Button;