import NewsList from "@/components/news-list";
import Link from "next/link";
import { getAvailableNewsMonths, 
    getAvailableNewsYears, 
    getNewsForYear, 
    getNewsForYearAndMonth } from "@/lib/news";
import { NewsItem } from "@/types/news";

//catc-all params will be an array of strings
export default async function FilteredNewsPage({params}: {params: Promise<{ filter: string[] }>}){

    
    const filter = (await params).filter;
    console.log(filter);

    const selectedYear = filter?.[0]; 
    // can also use terenery expression here filer ? filter[0] : undefined 
    const selectedMonth = filter?.[1];

    let news: NewsItem[] = [];
    let links = await getAvailableNewsYears();

    if (selectedYear && !selectedMonth){
        news = await getNewsForYear(selectedYear);
        links = getAvailableNewsMonths(selectedYear);
    }

    if (selectedYear && selectedMonth){
        news = await getNewsForYearAndMonth(selectedYear, selectedMonth);
        links = []; //set the links to disappear when month and year both selected
    }

    let defNewsContent = <p> No news for the specific period of time. </p>
    //default News Content

    if ( news && news.length>0){
        defNewsContent = <NewsList news={news}/>
    }

    const availableYears = await getAvailableNewsYears();

    if (selectedYear && !availableYears.includes(selectedYear) ||
        selectedMonth && !getAvailableNewsMonths(selectedYear).includes(selectedMonth)){
            throw new Error('An error Occured!')
        }

    return (
        <>
        <header id ="archive-header">
            <nav>
                <ul>
                    {links.map((link)=>{
                        const href = selectedYear ? `/archive/${selectedYear}/${link}` : `archive/${link}`
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
        {defNewsContent}
        </>
    )
}