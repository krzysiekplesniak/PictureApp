
import Link from "next/link"
import Layout from "../componets/Layout"

export default function HomePage() {
  return (
   
    <Layout title="Home page | PictureApp">

           <Link href="/about">About page</Link>

    </Layout>
  )
}
