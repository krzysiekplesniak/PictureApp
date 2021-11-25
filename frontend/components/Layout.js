
import Head from "next/head" 
import Header from "./Header"
import Footer from "./Footer"
import ShowPictureDay from "./ShowPictureDay"


export default function Layout({title, keyword, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keyword" content={keyword}/>
            </Head>

            <Header />
 
            <ShowPictureDay />

            <h1>Layout</h1>

            <div>
                {children}
            </div>            

            <Footer /> 
        </div>
    )
}


Layout.defaultProps = {
    title: "Pictures shop | Find coolest pics on the world",
    description: "Find the latest fun pic",
    keyword: "Pictures, stock, image"
}