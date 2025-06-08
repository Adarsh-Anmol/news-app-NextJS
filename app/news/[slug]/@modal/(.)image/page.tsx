import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";


//all nested components get access to the params 

export default async function InterceptedImagePage({params}: {params: Promise<{ slug: string }>}){

    const newsSlug = (await params).slug;
    const newsItem =  DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug) ;
    
    if(!newsItem){
        notFound();
    }

    return(
        <>
        <div className="modal-backdrop" />
        <dialog className="modal" open>
            <div className="fullscreen-image">
                <img src= {`/images/news/${newsItem.image}`} alt = {newsItem.title}></img>
            </div>
        </dialog>
        
        
        </>
    )

}