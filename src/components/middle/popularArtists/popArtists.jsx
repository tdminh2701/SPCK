import './popArtists.css'

function Popartists(props){
    

    return(
        <>
            <div className='artistCard'>
                <img className='artistImg' src={props.img} alt="" />
                <h4 className='poppins'>{props.authName}</h4>
            </div>

        </>
    )
}

export default Popartists