import './trdingSong.css'
import trending1 from '../../img/Trending/The_Neighbourhood_-_The_Neighbourhood 1.png'

function Trendingsong(props){
    

    return(
        <>
        <div className='trendingContainer'>
            <p className='number poppins'>{props.index}</p>
            <img className='image' src={props.img} alt="" />
            
            <div className='nameAndauth'>
                <h4 className='poppins'>{props.songName}</h4>
                <p className='poppins poppins-small'>{props.authName}</p>
            </div>
            <p className='releaseDate poppins poppins-small'>{props.date}</p>
            
            <div className='albumName'> 
            <p className='poppins poppins-small'>{props.album}</p>
            </div>

            <p className='length poppins poppins-small'>{props.length}</p>
        </div>
        </>
    )
}

export default Trendingsong