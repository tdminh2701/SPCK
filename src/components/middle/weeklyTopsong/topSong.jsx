import './weeklycards'
import './topSong.css'
import Weeklycard from './weeklycards'

function Weeklysong(){

    return(
        <>
         <h1 className='poppins' style={{marginTop: '3%'}}>Weekly Top Song</h1>
        <div className='songContainer'>
         <Weeklycard />
        </div>
        </>
    )
}
export default Weeklysong