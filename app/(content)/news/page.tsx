"use client";

import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

export default function NewsPage() {

  const [error, setError] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [news, setNews] = useState();

  //not a good practice to make the main useEffect function async, so make another async function for fetch
  //fetch return a promise, therefore await 
  useEffect(()=>{
    setIsLoading(true);
    async function fetchNews(){
      const response = await fetch('http://localhost:8080/news');

      if(!response.ok){
        setError('Failed to fetch News!')
        setIsLoading(false);
      }

      const news = await response.json();
      setIsLoading(false);
      setNews(news);
    }
   
    
    fetchNews();
  }, []);

  if(isLoading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>{error}</p>
  }
  let newsContent;

  if(news){
    newsContent = <NewsList news={news}/>
  }

  return (
    <div id="news">
      <h1>The News</h1>
      {newsContent}
      
    </div>
  );
}
