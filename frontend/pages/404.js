
import Layout from "@/components/Layout"
import Link from "next/link"
//import  {FaExlamationTriangle} from "react-icons"

const NotFoundpage = () => {
    return (
        <Layout title="Page not found | PicturesAPP">
            <h1>
                {/* <FaExlamationTriangle /> */}
                404 Not found this page</h1>
            <p>Sorry, nothing found there</p>
            <Link href="/">Go back home </Link>
        </Layout>
        
    )
}

export default NotFoundpage;