'use strict';
const record_el = document.getElementById('record');
const blank_black_board_el = document.getElementById('blank_black_board');
const record_wrapper_el= document.getElementById('record_wrapper');
const vid_wrapper_el= document.getElementById('vid_wrapper');
const vid_el= document.getElementById('vid');


console.log( vid_wrapper_el.srcObject);
const gdmOptions = {
    video: {
      cursor: "always"
    },
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      sampleRate: 44100
    }
  }


record_el.onclick = ()=>{
    blank_black_board_el.remove();
    record_wrapper_el.remove();
    userMedia();
    
}

async function userMedia(){
    
    try{
        vid_wrapper_el.style.display='block';
       const check=  await navigator.mediaDevices.getDisplayMedia(gdmOptions);
        vid_wrapper_el.srcObject = await navigator.mediaDevices.getDisplayMedia(gdmOptions);
        // console.log(vid_wrapper_el.srcObject);
    
    }
    catch(e){
        console.log(e.message);
    }
   
    
}