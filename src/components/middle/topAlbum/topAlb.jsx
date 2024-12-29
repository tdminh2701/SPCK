import './topAlb.css'

function Topalbumcard(props){

    return(
        <>
            <div className='albumCard'>
                <img className='albumImg' src={props.img} alt="" />
                <h4 className='poppins poppins-light'>{props.songName}</h4>
                <p className='poppins poppins-small'>{props.authName}</p>
            </div>
        </>
    )
}

export default Topalbumcard