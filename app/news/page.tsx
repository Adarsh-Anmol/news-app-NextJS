import Link from "next/link";
import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage() {
  return (
    <div id="news">
      <h1>The News</h1>
      <ul className="news-list">

        {DUMMY_NEWS.map((newsItem) => (
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
    </div>
  );
}
