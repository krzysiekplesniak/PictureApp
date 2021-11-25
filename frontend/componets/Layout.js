
import Head from "next/head" 
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({title, keyword, description, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description}/>
                <meta name="keyword" content={keyword}/>
            </Head>

            <Header />

            <h1>Layout</h1>
            {children}
            <Footer /> 
        </div>
    )
}


Layout.defaultProps = {
    title: "Pictures shop | Find coolest pics on the world",
    description: "Find teh latest fun pict",
    keyword: "PIctures, stock, image"
}