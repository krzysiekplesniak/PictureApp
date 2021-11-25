import Layout from "@/components/Layout"
import PictureItem from "@/components/PicturePage";  
import Filters from "@/components/Filters"
import { API_URL } from "@/config/index"



export default function HomePage({ pictures }) {
  
  //console.log('FRONT', pictures);

  return (
    
    <Layout title="Home page | PictureApp">

      <h1>All Pictures</h1>

      {pictures.length === 0 && <h3>No pictures at all</h3>}

      <Filters />
            
      {pictures.map(picture => (
        <PictureItem key={picture.id} picture={picture} />      
      ))}
      

    </Layout>
  )
}

export async function getServerSideProps({query : {sort='updated_at:DESC', limit=6 }}) {


  const queryString = '?_limit=3&_start=0&_sort=updated_at:DESC';
  

  const response = await fetch(`${API_URL}/pictures${queryString}`); 
  const pictures = await response.json();

  //console.log('BACK',pictures);
  
  return {
    props: { pictures},
  }
}