import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";


//all nested components get access to the params 

export default async function ImagePage({params}: {params: Promise<{ slug: string }>}){

    const newsSlug = (await params).slug;
    const newsItem =  await getNewsItem(newsSlug) ;
    
    if(!newsItem){
        notFound();
    }

    return(
        <div className="fullscreen-image">
        <img src= {`/images/news/${newsItem.image}`} alt = {newsItem.title}></img>
        </div>
        
    )

}