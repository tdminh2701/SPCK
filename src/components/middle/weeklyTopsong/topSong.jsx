import './weeklycards'
import './topSong.css'
import React, { useState } from "react";
import Weeklycard from './weeklycards'
import Newsong from '../newSong/newSong';
import Trendingsong from '../trendingSong/trdingSong';
import Popartists from '../popularArtists/popArtists';
import Musicvideo from '../musicVideo/musicVideo';
import Topalbumcard from '../topAlbum/topAlb';
import Moodplaylist from '../moodPlaylist/playlist';

// Weekly img 
import weekly1 from '../../img/weeklyImg/Rectangle 17.png'
import weekly2 from '../../img/weeklyImg/Rectangle 19.png'
import weekly3 from '../../img/weeklyImg/Rectangle 21.png'
import weekly4 from '../../img/weeklyImg/Rectangle 23.png'
import weekly5 from '../../img/weeklyImg/Rectangle 25.png'
import viewAll from '../../img/weeklyImg/Group 21.png'

// New Release img
import newR1 from '../../img/newRelease/Rectangle 17.png'
import newR2 from '../../img/newRelease/Rectangle 19.png'
import newR3 from '../../img/newRelease/Rectangle 21.png'
import newR4 from '../../img/newRelease/Rectangle 23.png'
import newR5 from '../../img/newRelease/Rectangle 25.png'
import cross from '../../img/+.png'

// Trending Song
import trending1 from '../../img/Trending/The_Neighbourhood_-_The_Neighbourhood 1.png'
import trending2 from '../../img/Trending/The_Neighbourhood_-_The_Neighbourhood 2.png'
import trending3 from '../../img/Trending/The_Neighbourhood_-_The_Neighbourhood 3.png'
import trending4 from '../../img/Trending/The_Neighbourhood_-_The_Neighbourhood 4.png'
import trending6 from '../../img/Trending/The_Neighbourhood_-_The_Neighbourhood 6.png'
import trending7 from '../../img/Trending/The_Neighbourhood_-_The_Neighbourhood 7.png'
import trending8 from '../../img/Trending/The_Neighbourhood_-_The_Neighbourhood 8.png'

// Popular Artists
import popAimg1 from '../../img/popArtists/popA_1.png'
import popAimg2 from '../../img/popArtists/popA_2.png'
import popAimg3 from '../../img/popArtists/popA_3.png'
import popAimg4 from '../../img/popArtists/popA_4.png'
import popAimg5 from '../../img/popArtists/popA_5.png'
import popAimg6 from '../../img/popArtists/popA_6.png'

// Music Video
import msImg1 from '../../img/musicPlayer/Rectangle 35.png'
import msImg2 from '../../img/musicPlayer/Rectangle 36.png'
import msImg3 from '../../img/musicPlayer/Rectangle 37.png'

// Top Albums
import albumImg1 from '../../img/topAlbums/Rectangle 17.png'
import albumImg2 from '../../img/topAlbums/Rectangle 18.png'
import albumImg3 from '../../img/topAlbums/Rectangle 19.png'
import albumImg4 from '../../img/topAlbums/Rectangle 20.png'
import albumImg5 from '../../img/topAlbums/Rectangle 21.png'

// Mood Playlist
import listImg1 from '../../img/Moodplaylist/Rectangle 17.png' 
import listImg2 from '../../img/Moodplaylist/Rectangle 18.png' 
import listImg3 from '../../img/Moodplaylist/Rectangle 19.png' 
import listImg4 from '../../img/Moodplaylist/Rectangle 20.png' 
import listImg5 from '../../img/Moodplaylist/Rectangle 21.png' 

function Weeklysong(){
    const [songName, setSongname] = useState([
        ['Whatever It Takes','Skyfall','Superman','Softcore','The Lonliest'],
        ['Time', '112', "We don't care","Who I Am","Baixo"],
        ['Sorfcore','Skyfall Beats','Greedy','Lovin On me','pain the town red','Dancin On Night','Water'],
        ['Gossip','Shape Of You','Someone Like You'],
        ['Adele 21','Beauty Behind the Madnesse 21','Scorpion',"Harry's House","Born To Die"]


    ])
    const [authName, setAuthname] = useState([
        ['Imagne Dragons','Adele','Eminiem','The neighberhood','Måneskin'],
        ['Luciano', 'jazzek', 'Kyanu & Dj Gullum', 'Alan Walker &  Elias','XXAnteria'],
        ['The neighberhood','nightmares','tate mcrae',' jack harlow','Doja Cat','Dualipa','Tyla'],
        // popArtists
        ['Eminiem','Imagne Dragons','Adele','Lana Del Ray','Harry Styles','Billie Eilish'],

        ['Måneskin','Ed Sheeran','Adele'],
        ['Adele','The Weekend','Drake','Harry Styles','Lana Del Ray']
    ])
    const [cardImg, setCardimg] = useState([
        [weekly1,weekly2,weekly3,weekly4,weekly5],
        [newR1,newR2,newR3,newR4,newR5],
        [trending1,trending2,trending3,trending4,trending6,trending7,trending8],
        // popAirtists
        [popAimg1,popAimg2,popAimg3,popAimg4,popAimg5,popAimg6],
        [msImg1,msImg2,msImg3],
        [albumImg1,albumImg2,albumImg3,albumImg4,albumImg5],
        [listImg1,listImg2,listImg3,listImg4,listImg5]
    ])

    const [date, setDate] = useState(['Nov 4, 2023','Oct 26, 2023','Dec 30, 2023','Dec 30, 2023','Dec 29, 2023','may 27, 2023','Dec 10, 2023'])
    const [album, setAlbum] = useState(['Hard to Imagine the Neighbourhood Ever Changing','nightmares','Greedy','Lovin On me','Paint The Town Red','Dance The Night(From Barbie Movie)','Water'])
    const [length, setLength] = useState(['3:26','2:45','2:11','2:18','3:51','2:56','3:20'])
    return(
        <>
        {/* Weekly */}
         <h1 className='poppins' style={{marginTop: '3%'}}>Weekly Top Song</h1>
        <div className='songContainer'>
            <Newsong songName = {songName[0][0]} authName = {authName[0][0]} img ={cardImg[0][0]} />
            <Newsong songName = {songName[0][1]} authName = {authName[0][1]} img ={cardImg[0][1]} />
            <Newsong songName = {songName[0][2]} authName = {authName[0][2]} img ={cardImg[0][2]} />
            <Newsong songName = {songName[0][3]} authName = {authName[0][3]} img ={cardImg[0][3]} />
            <Newsong songName = {songName[0][4]} authName = {authName[0][4]} img ={cardImg[0][4]} />
            <div className='viewAll'>
                <img src={viewAll} alt="" />
                <p className='poppins poppins-small poppins-light'>View All</p>
            </div>
        </div>

        {/* New Release */}
        <h1 className='poppins' style={{marginTop: '3%'}}>New Released Song</h1>
        <div className='songContainer'>
            <Weeklycard songName = {songName[1][0]} authName = {authName[1][0]} img ={cardImg[1][0]} />
            <Weeklycard songName = {songName[1][1]} authName = {authName[1][1]} img ={cardImg[1][1]} />
            <Weeklycard songName = {songName[1][2]} authName = {authName[1][2]} img ={cardImg[1][2]} />
            <Weeklycard songName = {songName[1][3]} authName = {authName[1][3]} img ={cardImg[1][3]} />
            <Weeklycard songName = {songName[1][4]} authName = {authName[1][4]} img ={cardImg[1][4]} />
            <div className='viewAll'>
                <img src={viewAll} alt="" />
                <p className='poppins poppins-small poppins-light'>View All</p>
            </div>
        </div>

        {/* Trending Songs */}
        <h1 className='poppins' style={{marginTop: '3%'}}>Trending Songs</h1>
        <div className='trendingSongs'>
            <div className='detail'>
                <p className='poppins release poppins-light'>Release Date</p>
                <p className='poppins poppins-light'>Album</p>
                <p className='time poppins poppins-light'>Time</p>
            </div>
            <Trendingsong index='#1' songName = {songName[2][0]} authName = {authName[2][0]} img ={cardImg[2][0]} date = {date[0]} album = {album[0]} length = {length[0]} />
            <Trendingsong index='#2' songName = {songName[2][1]} authName = {authName[2][1]} img ={cardImg[2][1]} date = {date[1]} album = {album[1]} length = {length[1]} />
            <Trendingsong index='#3' songName = {songName[2][2]} authName = {authName[2][2]} img ={cardImg[2][2]} date = {date[2]} album = {album[2]} length = {length[2]} />
            <Trendingsong index='#4' songName = {songName[2][3]} authName = {authName[2][3]} img ={cardImg[2][3]} date = {date[3]} album = {album[3]} length = {length[3]} />
            <Trendingsong index='#5' songName = {songName[2][4]} authName = {authName[2][4]} img ={cardImg[2][4]} date = {date[4]} album = {album[4]} length = {length[4]} />
            <Trendingsong index='#6' songName = {songName[2][5]} authName = {authName[2][5]} img ={cardImg[2][5]} date = {date[5]} album = {album[5]} length = {length[5]} />
            <Trendingsong index='#7' songName = {songName[2][6]} authName = {authName[2][6]} img ={cardImg[2][6]} date = {date[6]} album = {album[6]} length = {length[6]}/>
            <div className='viewAlltrends'>
                <p className='poppins poppins-large poppins-bold'><img src={cross} alt="" />View All</p>
            </div>
        </div>

        <h1 className='poppins' style={{marginTop: '3%'}}>Popular Artist</h1>
        <div className='songContainer'>
            <Popartists authName = {authName[3][0]} img ={cardImg[3][0]} />
            <Popartists authName = {authName[3][1]} img ={cardImg[3][1]} />
            <Popartists authName = {authName[3][2]} img ={cardImg[3][2]} />
            <Popartists authName = {authName[3][3]} img ={cardImg[3][3]} />
            <Popartists authName = {authName[3][4]} img ={cardImg[3][4]} />
            <Popartists authName = {authName[3][5]} img ={cardImg[3][5]} />
            <div className='viewAll'>
                <img src={viewAll} alt="" />
                <p className='poppins poppins-small poppins-light'>View All</p>
            </div>
        </div>

        <h1 className='poppins' style={{marginTop: '3%'}}>Music Video</h1>
        <div className='songContainer'>
            <Musicvideo img ={cardImg[4][0]} songName = {songName[3][0]} authName = {authName[4][0]}/>
            <Musicvideo img ={cardImg[4][1]} songName = {songName[3][1]} authName = {authName[4][1]}/>
            <Musicvideo img ={cardImg[4][2]} songName = {songName[3][2]} authName = {authName[4][0]}/>
            
            <div className='viewAll'>
                <img src={viewAll} alt="" />
                <p className='poppins poppins-small poppins-light'>View All</p>
            </div>
        </div>


        <div style={{marginTop: '3%' ,display: 'flex'}}>
            <h1 className='poppins'>Top</h1>
            <h1 className='poppins' style={{color: '#0E9EEF', marginLeft: '1%'}}>Album</h1>
        </div>
        
        <div className='songContainer'>
            <Topalbumcard songName = {songName[4][0]} authName = {authName[5][0]} img ={cardImg[5][0]} />
            <Topalbumcard songName = {songName[4][1]} authName = {authName[5][1]} img ={cardImg[5][1]} />
            <Topalbumcard songName = {songName[4][2]} authName = {authName[5][2]} img ={cardImg[5][2]} />
            <Topalbumcard songName = {songName[4][3]} authName = {authName[5][3]} img ={cardImg[5][3]} />
            <Topalbumcard songName = {songName[4][4]} authName = {authName[5][4]} img ={cardImg[5][4]} />
            
            <div className='viewAll'>
                <img src={viewAll} alt="" />
                <p className='poppins poppins-small poppins-light'>View All</p>
            </div>
        </div>

        <h1 className='poppins' style={{marginTop: '3%'}}>Mood Playlist</h1>

        <div className='songContainer'>
            <Moodplaylist img = {cardImg[6][0]} listName ='Sad Playlist'/>
            <Moodplaylist img = {cardImg[6][1]} listName ='Chill Playlist'/>
            <Moodplaylist img = {cardImg[6][2]} listName ='Workout Songs'/>
            <Moodplaylist img = {cardImg[6][3]} listName ='Love Playlist'/>
            <Moodplaylist img = {cardImg[6][4]} listName ='Happy Songs'/>

            <div className='viewAll'>
                <img src={viewAll} alt="" />
                <p className='poppins poppins-small poppins-light'>View All</p>
            </div>
        </div>

        </>
    )
}
export default Weeklysong