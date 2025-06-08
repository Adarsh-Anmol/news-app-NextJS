import { ReactNode } from "react";

export default function NewsDetailLayout({modal, children} : {modal: ReactNode, children:ReactNode}){
    return(
     <>
     {modal}
     {children}
     </>   
    );

}