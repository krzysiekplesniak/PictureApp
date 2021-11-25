import ImagesContext from '@/context/ImagesContext'

export default function StockPictures() {

    const { picturesInStock, deletePicture } = useContext(ImagesContext)

    return (
        <>
            Current in stock-bucket there is/are {picturesInStock} of pictures!

            {/* <button onClick={() => deletePicture()}>Delete all?</button> */}
            
        </>
    )
}
