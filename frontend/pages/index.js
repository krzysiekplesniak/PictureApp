import Layout from "@/components/Layout"
import { API_URL } from "@/config/index"
import Link from "next/link"


export default function HomePage({ pictures }) {
  
  console.log('FRONT', pictures);

  return (
   
    <Layout title="Home page | PictureApp">

      <h1>All Pictures</h1>

      {pictures.length === 0 && <h3>No pictures at all</h3>}

            
      {pictures.map(p => (
        <>
          <p>{p.id}</p>
          <p>{p.name}</p>
        </>
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