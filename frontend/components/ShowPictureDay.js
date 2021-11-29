import Image from 'next/image'
import { useContext } from 'react'
import ImagesContext from '@/context/ImagesContext'


export default function ShowPictureDay({ featuredArtwork = null, pictures = null }) {

    const { addPicture } = useContext(ImagesContext)

    return (
        <div>
            {/* {console.log('featuredArtwork', featuredArtwork)}  */}

            <h1>Picture of the day</h1>
            <div>
                <p>{featuredArtwork.name}</p>
                <p>{featuredArtwork.description}</p>

                <button onClick={() => addPicture(featuredArtwork.id)}>DODAJ</button>

                <Image src={featuredArtwork.image ? featuredArtwork.image.formats.thumbnail.url : `/images/pexel.jpeg`} width='500' height="500" />
            </div>
        </div>
    )
}

