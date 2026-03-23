import useFetch from "./my_custom_hook"

const Gallery = () => {
    const[photos,setPhotos]=useFetch("https://jsonplaceholder.typicode.com/photos")
    return (
        <div>
            <h1>All photos</h1>
            {
                photos.map(
                    (photos)=>{
                        return(
                            <p key={photos.id}>{photos.title}</p>
                        )
                    }
                )
            }
        </div>
    )
}
export default Gallery