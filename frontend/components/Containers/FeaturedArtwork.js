import Image from 'next/image'
import { useContext } from 'react'
import ImagesContext from '@/context/ImagesContext'


const FeaturedArtwork = ({ featuredArtwork = null, pictures = null }) => {

// FIXME: zmienić domyślne wartości z null po użyciu TS

const { addPicture } = useContext(ImagesContext)

    return (
        <section>
            <h1>Picture of the day</h1>
            <div>
                <p>{featuredArtwork.name}</p>
                <p>{featuredArtwork.description}</p>

                <button onClick={() => addPicture(featuredArtwork.id)}>DODAJ</button>

                <Image src={featuredArtwork.image ? featuredArtwork.image.formats.thumbnail.url : `/images/pexel.jpeg`} width='750' height="500" />
            </div>
        </section>
    )
}

export default FeaturedArtwork;

