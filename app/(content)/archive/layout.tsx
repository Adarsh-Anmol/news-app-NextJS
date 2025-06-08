import { ReactNode } from "react";

//the parallel routes get the folder names as children, as is known are of type ReactNode
export default function ArchiveLayout({archive, latest} : {archive: ReactNode , latest: ReactNode}){

    return(
        <div>
            <h1>News Archive</h1>
            <section id="archive-filter">{archive}</section>
            <section id="archive-latest">{latest}</section>
        </div>
    )


}