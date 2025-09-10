import type { ReactNode } from "react";

interface IProps{
  children: ReactNode;
  className?:string;
}


const Button = ({children ,className, ...rest}: IProps) => {
  return (
    <button className={`${className} w-full rounded-md p-2 cursor-pointer`} {...rest}>{children}</button>
  )
}


export default Button;