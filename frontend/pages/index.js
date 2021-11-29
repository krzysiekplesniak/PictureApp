import Layout from "@/components/Layout"
import PictureItem from "@/components/PictureItem";  
import Filters from "@/components/Filters"
import ShowPictureDay from "@/components/ShowPictureDay"
import { fetchAPI, Filter } from "@/utils/fetchAPI"
import { API_URL } from "@/config/index"


export default function HomePage({ pictures , featuredArtwork }) {
    
  return (
    
    <Layout title="Home page | PictureApp">

      <h1>All Pictures</h1>

      <div>
          <Filters />
      </div>

      {pictures && pictures.length === 0
        ? <h3>No pictures at all</h3>
        : <div>
           Zzzzzzzzzzzzzzzzzzzzzz 
         </div>}
        
        <ShowPictureDay featuredArtwork={featuredArtwork}/>


        // TODO wydzielić do osobnego komponnetu   
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
    </Layout>
  )
}



export async function getServerSideProps({query : {sort='updated_at:DESC', limit=6 }}) {

  
  const queryString = '?_limit=6&_start=0&_sort=updated_at:DESC';
  

   const [picturesFiletred, picturesdfeaturedArtwork] = await Promise.all([
      fetchAPI(`${API_URL}/pictures${queryString}`),
      fetchAPI(`${API_URL}/pictures?featuredartwork=true`),
   ]);

  //  let picturesAll = [1,2,3]
   
  //  const featuredArtwork = await Filter(picturesAll, 3)
   
  //  console.log('BACK', featuredArtwork)

    
  
  return {
    props: { 
       pictures: picturesFiletred,
       featuredArtwork: picturesdfeaturedArtwork
    }
  }
}