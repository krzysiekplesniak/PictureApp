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
      
      {/* //FIXME: OSTYLOWAĆ PÓZNIEJ I DLATEGO JEST TAKI PUSTY DIV */}
      <div>
          <Filters />
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



export async function getServerSideProps({query : {filter = null, sort = 'ASC', limit=6 }}) {

  // function filtersQuery(filter) {

  //   switch(filter) {
  //     case 'city':
  //       query.concat("&_city=true");;
  //       break;
  //     case "nature":
  //       query.concat("&_nature=true");
  //       break;
  //     case "people":
  //       query.concat("&_people=true"); 
  //       break;
  //     case "food":
  //       query.concat("&_=true"); 
  //        break;
  //     default:
  //       query = '';
  //   }
  //   return query;
  // }
  
  // let query = filter.split('_');
  // let queryString = '?';
  
   
    
  // const filters = query.map(filter => filtersQuery(filter))
 

  // queryString.concat()
  
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