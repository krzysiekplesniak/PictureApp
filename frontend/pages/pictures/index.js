import Link from "next/link"
import Layout from "@/components/Containers/Layout"
import { useContext } from 'react'
import ImagesContext from '@/context/ImagesContext'


const CheckoutPage = () => {

    const { picturesInStock } = useContext(ImagesContext)
    
    return (

        <Layout titel="Checkout | PicturesApp">
            <Link href="/">
                <a>
                    Back to homepage
                </a>        
            </Link>
            <h1>All pictures in your checkout</h1>
            <p>{picturesInStock}</p>
        </Layout>
    )
}

export default CheckoutPage;
