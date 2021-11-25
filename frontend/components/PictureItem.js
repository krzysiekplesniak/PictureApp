import Link from "next/link"
import Image from 'next/image'
import PicturesStockContext from '@/components/PicturesStockContext'

export default function PictureItem({picture}) {
    
    const { addPicture } = useContext(PicturesStockContext)


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
 