import ModalBackdrop from "@/components/modal-backdrop";
import { getNewsItem } from "@/lib/news";
import { notFound, useRouter } from "next/navigation";



export default async function InterceptedImagePage({params}: {params: Promise<{ slug: string }>}){

    const newsSlug = (await params).slug;
    const newsItem =  await getNewsItem(newsSlug);
    
    if(!newsItem){
        notFound();
    }

    return(
        <>
        <ModalBackdrop />
        {/*Here, used router.back to programatically navigate back */}
        <dialog className="modal" open>
            <div className="fullscreen-image">
                <img src= {`/images/news/${newsItem.image}`} alt = {newsItem.title}></img>
            </div>
        </dialog>
        </>
    )

}


/*import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Define the type for the params prop
interface Props {
  params: Promise<{ slug: string }>;
}

//all nested components get access to the params 

export default function InterceptedImagePage({ params }: Props) {
  const router = useRouter();
  const [newsItem, setNewsItem] = useState<(typeof DUMMY_NEWS)[0] | null>(null);
  const [loading, setLoading] = useState(true);

  // Resolve params and find news item
  useEffect(() => {
    const resolveParams = async () => {
      try {
        const resolvedParams = await params; // Await the Promise for params
        const slug = resolvedParams.slug;
        const foundNewsItem = DUMMY_NEWS.find(item => item.slug === slug);
        
        if (!foundNewsItem) {
          // Redirect to not-found page if no news item is found
          router.push('/not-found');
          return;
        }
        
        setNewsItem(foundNewsItem);
        setLoading(false);
      } catch (error) {
        console.error('Error resolving params:', error);
        router.push('/error'); // Fallback navigation on error
      }
    };

    resolveParams();
  }, [params, router]);

  // Show loading state while resolving params or finding news item
  if (loading || !newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back}/>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}

*/


