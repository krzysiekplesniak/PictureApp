import Layout from "@/components/Layout"
import Link from "next/link"

const About = () => {
    return (
        <Layout title="About | PictureApp">
            <h1>About page</h1>
            <Link href="/">back home</Link>
        </Layout>
    )
}

export default About;
