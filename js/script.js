click_to_record.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = 'ar-AR';
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

        document.getElementById("convert_text").innerHTML = transcript;
        console.log(transcript);
    });
    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        action.innerHTML = "<small>listening, please speak...</small>";
    };
            
    recognition.onspeechend = function() {
        action.innerHTML = "<small>stopped listening</small>";
        recognition.stop();
        

                  
    }
    
    if (speech == true) {
        recognition.start();
    }
})

click_to_record2.addEventListener('click',function(){
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-EU';
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('')

        document.getElementById("convert_text").innerHTML = transcript;
        console.log(transcript);
    });
    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        action.innerHTML = "<small>listening, please speak...</small>";
    };
            
    recognition.onspeechend = function() {
        action.innerHTML = "<small>stopped listening</small>";
        recognition.stop();
        

                  
    }
    
    if (speech == true) {
        recognition.start();
    }
})