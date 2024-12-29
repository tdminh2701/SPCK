import './playlist.css'


function Moodplaylist(props){
    

    return(
        <>
            <div className='plistCard'>
                <img className='plistImg' src={props.img} alt="" />
                <h4 className='poppins poppins-light'>{props.listName}</h4>
            </div>
        </>
    )
}

export default Moodplaylist