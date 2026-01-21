const playBtn = document.querySelector('#play-btn');
const progress = document.querySelector('#progress')
const songList = document.querySelector('#song-list')

let songs =[
   
    {
        name:'song2',
        id:2
    },
    {
        name:'song3',
        id:3
    },
]

//constructor
const audio = new Audio('./Assets/song3.mp3')

//show songs in unordered list
for (let song of songs) {
   const li = document.createElement('li');
   li.innerText = song.name;
   songList.append(li);
}

//play btn click
playBtn.addEventListener('click',function(){
    audio.paused? audio.play() : audio.pause();
    if(playBtn.children[0].classList.contains('fa-circle-play')){
        playBtn.children[0].classList.remove('fa-circle-play')
        playBtn.children[0].classList.add('fa-circle-pause')
    }
    else{
        playBtn.children[0].classList.remove('fa-circle-pause')
        playBtn.children[0].classList.add('fa-circle-play')

    }
})


//current time ko dekho 
audio.addEventListener('timeupdate',function(){
    const currentProgress = audio.currentTime * 100 /audio.duration;
    progress.value=currentProgress;

})

//input ko apne hisaab se aage peeche karna
progress.addEventListener('change',function(){
    const  updatedTime = audio.duration*progress.value/100;
    audio.currentTime = updatedTime;

})

//gana khud se karo select
songList.addEventListener('click',function(e){
    let songId= e.target.targetAttribute('id');
    audio.src = `./Assets/song${songId}.mp3`
    audio.currentTime = 0;
    audio.play();
    playBtn.childern[0].classList.remove('fa-circle-play');
    playBtn.childern[0].classList.add('fa-circle-pause');




})