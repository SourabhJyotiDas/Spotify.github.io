
console.log("Welcome to spotify");

// //initilise the variables

let songIndex = 0;
let audioElement = new Audio('./music/music0.m4a');
let time = document.getElementsByClassName('time');
let songName = document.getElementsByClassName('songName');
let songList = document.querySelector('.songList');
// audioElement.play();  for playing musics
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('mastersongname');
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName("songitem"))


let songs = [
    {
        songName: "KORDHELL - MURDER IN MY MIND (MUSIC VIDEO)",
        filePath: "music/music0.m4a",
        coverPath: "img/cover.jpg",
        duration: "2:25"
    },
    {
        songName: "Tobu - Hope NCS Release",
        filePath: "music/music1.m4a",
        coverPath: "img/cover.jpg",
        duration: "4:45"
    },
    {
        songName: "Unknown Brain - Superhero (feat. Chris Linton) NCS Release",
        filePath: "music/music2.m4a",
        coverPath: "img/cover.jpg",
        duration: "3:02"
    },
    {
        songName: " Warriyo - Mortals (feat. Laura Brehm) NCS Release",
        filePath: "music/music3.m4a", coverPath: "img/cover.jpg",
        duration: "3:50"
    },
    {
        songName: "Lost Sky - Fearless pt.II (feat. Chris Linton) NCS Release",
        filePath: "music/music4.m4a",
        coverPath: "img/cover.jpg",
        duration: "3:14"
    },
    {
        songName: " Janji - Heroes Tonight (feat. Johnning) NCS Release",
        filePath: "music/music5.m4a",
        coverPath: "img/cover.jpg",
        duration: "3:28"
    },
    {
        songName: "Itro  Tobu - Cloud 9 NCS Release",
        filePath: "music/music6.m4a",
        coverPath: "img/cover.jpg",
        duration: "4:35"
    },
    {
        songName: "Elektronomia - Sky High NCS Release",
        filePath: "music/music7.m4a",
        coverPath: "img/cover.jpg",
        duration: "3:58"
    },
    {
        songName: "Electro-Light - Symbolism NCS Release",
        filePath: "music/music8.m4a",
        coverPath: "img/cover.jpg",
        duration: "4:51"
    },
    {
        songName: "Disfigure - Blank NCS Release",
        filePath: "music/music9.m4a",
        coverPath: "img/cover.jpg",
        duration: "3:29"
    },
    {
        songName: "Different Heaven  EH!DE - My Heart NCS Release",
        filePath: "music/music10.m4a",
        coverPath: "img/cover.jpg",
        duration: "4:27"
    },
    {
        songName: "DEAF KEV - Invincible NCS Release",
        filePath: "music/music11.m4a",
        coverPath: "img/cover.jpg",
        duration: "4:33"
    },
    {
        songName: "Cartoon - Why We Lose (feat. Coleman Trapp) NCS Release",
        filePath: "music/music12.m4a",
        coverPath: "img/cover.jpg",
        duration: "3:33"
    },
    {
        songName: "Cartoon - On  On (feat. Daniel Levi) NCS Release",
        filePath: "music/music13.m4a",
        coverPath: "img/cover.jpg",
        duration: "3:28"
    },
]

songItems.forEach((element, i) => {
    //  console.log('element,i')
    // element.getElementsByTagName('img')[0].src = songs[i].coverPath
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName
});

songs.map((element, index) => {
    const mydiv = document.createElement("div");
    mydiv.setAttribute('class', 'songitem  flex items-center justify-between p-3 rounded-xl bg-white w-[90%] ');
    mydiv.innerHTML = `
    <p class="songName">${element.songName}</p>
    <span class="time">${element.duration}
        <i id="${index}" class="far songitemplay fa fa-play-circle text-xl cursor-pointer"></i>
    </span>
    `;
    document.querySelector(".songList").appendChild(mydiv);

})

//  time.innerText = (audioElement.currentTime);

// // audioElement.play();

// //handel play pause

masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        // gif.style.opacity = 1;
        document.getElementById(songIndex).classList.remove('fa-play-circle')
        document.getElementById(songIndex).classList.add('fa-pause-circle')
    }
    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        // gif.style.opacity = 0;
        document.getElementById(myid).classList.remove('fa-pause-circle')
        document.getElementById(myid).classList.add('fa-play-circle')
    }
});

// //listen to events
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myprogressbar.value = progress;
});

myprogressbar.addEventListener('change', () => {
    audioElement.currentTime = myprogressbar.value * audioElement.duration / 100;
});


const makeallplays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e) => { //  'e' represent where you click //'element' means every children
        makeallplays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `music/music${songIndex}.m4a`;
        // console.log(songIndex);
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    });
})
// // previous or  backward 


document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else { songIndex += 1; }

    // console.log(songIndex , songs.length);

    audioElement.src = `music/music${songIndex}.m4a`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');


    // console.log(songIndex);
    // console.log(myid);

    document.getElementById(songIndex).classList.remove('fa-play-circle')
    document.getElementById(songIndex).classList.add('fa-pause-circle')


    // console.log(songIndex-1);

    document.getElementById(songIndex - 1).classList.remove('fa-pause-circle')
    document.getElementById(songIndex - 1).classList.add('fa-play-circle')

});




document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }

    audioElement.src = `music/music${songIndex}.m4a`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    makeallplays()

    document.getElementById(songIndex).classList.remove('fa-play-circle')
    document.getElementById(songIndex).classList.add('fa-pause-circle')


    // console.log(songIndex);

    // document.getElementById(songIndex-1).classList.remove('fa-pause-circle')
    // document.getElementById(songIndex - 1).classList.add('fa-play-circle')
})