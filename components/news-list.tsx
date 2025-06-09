import Link from "next/link";
import { NewsItem } from "@/types/news";

export default async function NewsList({news}:{news : NewsItem[]}){
    return(
    <ul className="news-list">

        {news?.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href= {`/news/${newsItem.slug}`}>
            <img src= {`/images/news/${newsItem.image}`} alt= {newsItem.title}></img>
            </Link>
            <span>
              {newsItem.title}
            </span>
          </li>
        ))}
        
    </ul>
    )
}