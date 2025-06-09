import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";
import { NewsItem } from "@/types/news";

export default async function NewsPage() {

  const news= getAllNews()

  return (
    <div id="news">
      <h1>The News</h1>
      <NewsList news={news}/>      
    </div>
  );
}
