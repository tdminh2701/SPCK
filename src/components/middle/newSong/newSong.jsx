import './newSong.css'

function Newsong(props){
    

    return(
        <>
            <div className='weeklyCard'>
                <img className='cardImg' src={props.img} alt="" />
                <h4 className='poppins'>{props.songName}</h4>
                <p className='poppins poppins-small'>{props.authName}</p>
            </div>

        </>
    )
}

export default Newsong