
import ImagesContext from '@/context/ImagesContext'
import { useContext } from 'react'

export default function NumberPictures() {

    const { picturesInStock, deletePicture } = useContext(ImagesContext)

    return (
        <>
            #{picturesInStock}
            <button onClick={() => deletePicture()}>X</button>
        </>
    )
}
