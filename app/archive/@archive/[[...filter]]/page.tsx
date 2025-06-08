import NewsList from "@/components/news-list";
import Link from "next/link";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import { NewsItem } from "@/types/news";

//catc-all params will be an array of strings
export default async function FilteredNewsPage({params}: {params: Promise<{ filter: string[] }>}){

    
    const filter = (await params).filter;
    console.log(filter);

    const selectedYear = filter?.[0]; 
    // can also use terenery expression here filer ? filter[0] : undefined 
    const selectedMonth = filter?.[1];

    let news: NewsItem[] = [];

    if (selectedYear && !selectedMonth){
        news = getNewsForYear(selectedYear);
    }

    let defNewsContent = <p> No news for the specific period of time. </p>
    //default News Content

    if ( news && news.length>0){
        defNewsContent = <NewsList news={news}/>
    }

    const links = getAvailableNewsYears();

    return (
        <>
        <header id ="archive-header">
            <nav>
                <ul>
                    {links.map(link => <li key ={link}>
                        <Link href = {`/archive/${link}`}>{link}</Link>
                    </li>)}

                </ul>
            </nav>

        </header>
        {defNewsContent}
        </>
    )
}