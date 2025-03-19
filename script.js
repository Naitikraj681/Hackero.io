const const songs = {
    1: [
        "audio/option1_song1.mp3",
        "audio/option1_song2.mp3",
        "audio/option1_song3.mp3",
        "audio/option1_song4.mp3"
    ],
    2: [
        "audio/option2_song1.mp3",
        "audio/option2_song2.mp3",
        "audio/option2_song3.mp3",
        "audio/option2_song4.mp3"
    ],
    3: [
        "audio/option3_song1.mp3",
        "audio/option3_song2.mp3",
        "audio/option3_song3.mp3",
        "audio/option3_song4.mp3"
    ],
    4: [
        "audio/option4_song1.mp3",
        "audio/option4_song2.mp3",
        "audio/option4_song3.mp3",
        "audio/option4_song4.mp3"
    ]
};

function showSongs(option) {
    let songListDiv = document.getElementById("song-list");
    songListDiv.innerHTML = ""; // Purana content hatao
    
    songs[option].forEach(song => {
        let audioElement = document.createElement("audio");
        audioElement.controls = true;
        audioElement.src = song;
        songListDiv.appendChild(audioElement);
    });
}￼Enter
