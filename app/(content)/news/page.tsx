import NewsList from "@/components/news-list";

export default async function NewsPage() {
  
  const response = await fetch('http://localhost:8080/news');
  const news = await response.json();
  
  if(!response.ok){
    throw new Error('Failed to fetch the news!')
  }
  
  return (
    <div id="news">
      <h1>The News</h1>
      <NewsList news={news}/>      
    </div>
  );
}
