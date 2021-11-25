import Link from "next/link"
import Image from 'next/image'

export default function PictureItem({picture}) {
 
    return (
        <div>
            <p>{picture.id}</p>
            <p>{picture.name}</p>
            <p>{picture.description}</p>
            
            <Image src={picture.image ? picture.image.formats.thumbnail.url : `/images/pexel.jpeg`} width='320' height="200" />

        </div>
    )
}
 