import Layout from "@/components/Layout"
import PictureItem from "@/components/PicturePage";  
import { API_URL } from "@/config/index"
import Link from "next/link"


export default function HomePage({ pictures }) {
  
  console.log('FRONT', pictures);

  return (
   
    <Layout title="Home page | PictureApp">

      <h1>All Pictures</h1>

      {pictures.length === 0 && <h3>No pictures at all</h3>}

            
      {pictures.map(picture => (
        <PictureItem key={picture.id} picture={picture} />      
      ))}
      

    </Layout>
  )
}

export async function getServerSideProps() {

  const response = await fetch(`${API_URL}/api/pictures`); 
  const pictures = await response.json();

  //console.log('BACK',pictures);
  
  return {
    props: { pictures},
  }
}