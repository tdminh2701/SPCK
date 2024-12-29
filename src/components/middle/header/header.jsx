import './header.css'

function Header() {
        
    return (
        <>
        <div id='header'>
        <input  type="text" placeholder= 'Search For Musics, Artists, Albumes ...' className='searchBar poppins'/>
        <button className='loginbtn poppins' type='submit'>Login</button>
        <button className='signUpbtn poppins' type='submit'>Sign up</button>
        </div>
        </>
    )
}
export default Header
