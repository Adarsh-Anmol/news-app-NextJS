import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

export default function NewsPage() {
  return (
    <div id="news">
      <h1>The News</h1>
      <NewsList news={DUMMY_NEWS}/>
    </div>
  );
}
