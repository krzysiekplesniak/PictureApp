import PicturesStockContext from '@/components/PicturesStockContext'

export default function StockPictures() {

    const { picturesInStock, deletePicture } = useContext(PicturesStockContext)

    return (
        <div>
            Current in stock-bucket there is/are {picturesInStock} of pictures!
            map

            <button onClick={() => deletePicture()}>Delete all?</button>
            
        </div>
    )
}
