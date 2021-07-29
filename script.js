'use strict';
const record_el = document.getElementById('record');
const blank_black_board_el = document.getElementById('blank_black_board');
const record_wrapper_el= document.getElementById('record_wrapper');
const vid_wrapper_el= document.getElementById('vid_wrapper');
// const vid_el= document.getElementById('vid');



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


  function appendStreamToVideo(capturedVideoStream){
    vid_wrapper_el.srcObject =new MediaStream(capturedVideoStream);
  }
  
  async function newRecordWithStream(capturedVideoStream){
    // const mediaStreamTrack =new MediaStream(capturedVideoStream);
    const recordedDetails =[];
    const record = new MediaRecorder(capturedVideoStream,{ mimeType: "video/webm" });
    record.ondataavailable =(e)=>{
      recordedDetails.push(e.data);
    }
    console.log(recordedDetails);
  }
  
  async function screenCapture(){
    let capturedVideoStream ='';
      try{
          vid_wrapper_el.style.display='block';
          capturedVideoStream= await navigator.mediaDevices.getDisplayMedia(gdmOptions);
      }
      catch(e){
          console.log(e.message);
      }
      let recordedMedia = new MediaRecorder(capturedVideoStream,{ mimeType: "video/webm" });
      recordedMedia.start();

       appendStreamToVideo(capturedVideoStream);
      // record the mediaStream
       newRecordWithStream(capturedVideoStream);
      
  }

record_el.onclick = ()=>{
    blank_black_board_el.remove();
    record_wrapper_el.remove();
     screenCapture();
    
}

