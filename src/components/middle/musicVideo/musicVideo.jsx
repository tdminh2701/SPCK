import './musicVideo.css'

function Musicvideo(props){


    return(
        <>
            <div className='musicVideocard'>
                <img className='musicVideoimg' src={props.img} alt="" />
                <h4 className='poppins poppins-light'>{props.songName}</h4>
                <p className='poppins poppins-small'>{props.authName}</p>
            </div>

        </>
    )
}

export default Musicvideo