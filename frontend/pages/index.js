import Layout from "@/components/Containers/Layout"
import PictureItem from "@/components/Pictures/PictureItem";  
import Filters from "@/components/Filters/Filters"
import Sort from "@/components/Filters/Sort"
import FeaturedArtwork from "@/components/Containers/FeaturedArtwork"
import { fetchAPI, Filter } from "@/utils/fetchAPI"
import { API_URL } from "@/config/index"
import styles from "@/styles/Home.module.css"


export default function HomePage({ pictures , featuredArtwork }) {
    
  return (
    
    <Layout title="Home page | PictureApp">

      <h1>All Pictures</h1>
      
      {/* //FIXME: OSTYLOWAĆ PÓZNIEJ I DLATEGO JEST TAKI PUSTY DIV */}
      <aside>
          <Filters />
          <Sort />
      </aside>
      
      {
        pictures && pictures.length === 0
          ? <h3>No pictures at all</h3>
          : <main className={styles.main}>
              <FeaturedArtwork featuredArtwork={featuredArtwork}/>

              TODO: wydzielić do osobnego komponnetu
              <section>
                    {
                      pictures.map(picture => (
                        <PictureItem
                          key={picture.id} 
                          picture={picture}
                        />      
                      ))
                    }
              </section>   
            </main>
      }
      
    </Layout>
  )
}



export async function getServerSideProps({query : {people, nature, city, food, sort}}) {
   
    let queryString = '?_limit=6';
    let filters = '';
          
    if (people) {filters +="people=true"}; 
    if (nature) {filters ? filters +="&nature=true" : filters +="nature=true"};
    if (city) {filters ? filters +="&city=true" : filters +="city=true"}; 
    if (food) {filters ? filters +="&food=true" : filters +="food=true"}; 
    
    if (filters) queryString += `&${filters}`;

    if (sort) {queryString +="&_sort=date:ASC"} else {queryString +="&_sort=date:DESC"};
    

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