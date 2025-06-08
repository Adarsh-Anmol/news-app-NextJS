import { DUMMY_NEWS } from "@/dummy-news";  
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function NewsDetailPage({params}: {params: Promise<{ slug: string }>}) {
  
    const newsSlug = (await params).slug;
    const newsItem =  DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug) ;

    if(!newsItem){
      notFound();
    }

    return (
    <>
      <article className="news-article">
        <header>
          <Link href= {`/news/${newsSlug}/image`}><img src = {`/images/news/${newsItem!.image}`} alt={newsItem!.title}/></Link>
          <br/>
          <time dateTime={newsItem!.date}>{newsItem!.date}</time>
        </header>
      <p>News: {newsItem!.content}</p>
      </article>
    </>
  );
}
