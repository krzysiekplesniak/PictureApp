import Layout from "@/components/Layout"
import { API_URL } from "@/config"
import Link from "next/link"


export default HomePage = () => {
  return (
   
    <Layout title="Home page | PictureApp">

      <Link href="/about">About page</Link>

    </Layout>
  )
}

export async function getServerSideProps() {

  const reposne = await fetch(`${API_URL}/api/pictures`); 
  const pictures = await response.json();

  console.log(pictures);
  
  return {
    props: {}
  }
}