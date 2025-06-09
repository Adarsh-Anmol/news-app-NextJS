import NewsList from "@/components/news-list";
import Link from "next/link";
import { getAvailableNewsMonths, 
    getAvailableNewsYears, 
    getNewsForYear, 
    getNewsForYearAndMonth } from "@/lib/news";
import { NewsItem } from "@/types/news";
import { Suspense } from "react";

async function FilterHeader({year, month}: {year:string, month:string}){
    const availableYears = await getAvailableNewsYears();
    let links = availableYears;

    if (year && !availableYears.includes(year) ||
        month && !getAvailableNewsMonths(year).includes(month)){
            throw new Error('An error Occured!')
        }


    if (year && !month){
        links = getAvailableNewsMonths(year);
    }

    if (year && month){
        links = []; //set the links to disappear when month and year both selected
    }

    return(<header id ="archive-header">
            <nav>
                <ul>
                    {links.map((link)=>{
                        const href = year ? `/archive/${year}/${link}` : `archive/${link}`
                        //changing the link based on if month selected or not
                        return(
                            <li key = {link}>
                                <Link href={href}>{link}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

        </header>
    )    


}

async function FilteredNews({year, month}: {year:string, month:string}){

    let news:NewsItem[] = [];
    
    if(year && !month){
        news = await getNewsForYear(year);
    }else if(year && month){
        news = await getNewsForYearAndMonth(year, month);
    }
    
    let defNewsContent = <p> No news for the specific period of time. </p>
    //default News Content

    if ( news && news.length>0){
        defNewsContent = <NewsList news={news}/>
    }

    return defNewsContent;
}

//catch-all params will be an array of strings
export default async function FilteredNewsPage({params}: {params: Promise<{ filter: string[] }>}){

    
    const filter = (await params).filter;
    console.log(filter);

    const selectedYear = filter?.[0]; 
    // can also use terenery expression here filer ? filter[0] : undefined 
    const selectedMonth = filter?.[1];

    
    return (
        <>
        <Suspense fallback={<p>Loading filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth}/>
        </Suspense>
        <Suspense fallback={<p>Loading Archived News...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth}/>
        </Suspense>
        </>
    )
}