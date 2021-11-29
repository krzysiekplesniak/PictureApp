import Layout from "@/components/Layout"
import PictureItem from "@/components/PictureItem";  
import Filters from "@/components/Filters"
import Sort from "@/components/Sort"
import ShowPictureDay from "@/components/ShowPictureDay"
import { fetchAPI, Filter } from "@/utils/fetchAPI"
import { API_URL } from "@/config/index"


export default function HomePage({ pictures , featuredArtwork }) {
    
  return (
    
    <Layout title="Home page | PictureApp">

      <h1>All Pictures</h1>
      
      {/* //FIXME: OSTYLOWAĆ PÓZNIEJ I DLATEGO JEST TAKI PUSTY DIV */}
      <div>
          <Filters />
          <Sort />
      </div>

      {pictures && pictures.length === 0
        ? <h3>No pictures at all</h3>
        : <div>

            <ShowPictureDay featuredArtwork={featuredArtwork}/>

            TODO: wydzielić do osobnego komponnetu
            <div>
                {
                  pictures.map(picture => (
                    <PictureItem
                      key={picture.id} 
                      picture={picture}
                    />      
                  ))
                }
            </div>   
         </div>}
    </Layout>
  )
}



export async function getServerSideProps({query : {people, nature, city, food}}) {
   
    let queryString = `?_limit=6`;
    let query2 = '';
  
    if (people) {query2 +="people=true"}; 
    if (nature) {query2 ? query2 +="&nature=true" : query2 +="nature=true"};
    if (city) {query2 ? query2 +="&city=true" : query2 +="city=true"}; 
    if (food) {query2 ? query2 +="&food=true" : query2 +="food=true"}; 
        
    if (query2) {
        console.log('111', `${queryString}&${query2}`); 
        queryString += `&${query2}`;
    } else {
        console.log('222', `${queryString}`);
    }

   const [picturesFiletred, picturesdfeaturedArtwork] = await Promise.all([
      fetchAPI(`${API_URL}/pictures${queryString}`),
      fetchAPI(`${API_URL}/pictures?featuredartwork=true`),
   ]);

  
  return {
    props: { 
       pictures: picturesFiletred,
       featuredArtwork: picturesdfeaturedArtwork
    }
  }
}