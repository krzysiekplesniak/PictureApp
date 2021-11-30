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



export async function getServerSideProps({query : {people, nature, city, food, sorting}}) {
   
    let queryString = '?_limit=6';
    let filters = '';
          
    if (people) {filters +="people=true"}; 
    if (nature) {filters ? filters +="&nature=true" : filters +="nature=true"};
    if (city) {filters ? filters +="&city=true" : filters +="city=true"}; 
    if (food) {filters ? filters +="&food=true" : filters +="food=true"}; 
    
    if (filters) queryString += `&${filters}`;

    if (sorting) {queryString +="&_sort=date:ASC"} else {queryString +="&_sort=date:DESC"};
    

   const [picturesFiletred, picturesdfeaturedArtwork] = await Promise.all([
      
      fetchAPI(`${API_URL}/pictures${queryString}`),
      fetchAPI(`${API_URL}/pictures?featuredartwork=true`)
   ]);

  
  return {
    props: { 
       pictures: picturesFiletred,
       featuredArtwork: picturesdfeaturedArtwork
    }
  }
}