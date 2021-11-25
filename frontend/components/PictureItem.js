
import Image from 'next/image'
import { useContext } from 'react'
import ImagesContext from '@/context/ImagesContext'

export default function PictureItem({picture}) {
    
    const { addPicture } = useContext(ImagesContext)


    return (
        <div>
            <p>{picture.name}</p>
            <p>{picture.description}</p>
            <div>
                <button onClick={() => addPicture(picture.id)}></button>
            </div>
            <Image src={picture.image ? picture.image.formats.thumbnail.url : `/images/pexel.jpeg`} width='320' height="200" />

        </div>
    )
}
 