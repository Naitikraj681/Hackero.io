// Check if user has already uploaded a photo
window.onload = function() {
    let savedPhoto = localStorage.getItem("userPhoto");
    if (savedPhoto) {
        document.getElementById("photoUploadSection").style.display = "none";
        document.getElementById("uploadedPhoto").style.display = "block";
        document.getElementById("userPhoto").src = savedPhoto;
        document.getElementById("songOptions").style.display = "block";
    }
};

// Upload Photo Function
function uploadPhoto() {
    let fileInput = document.getElementById("photoUpload");
    let file = fileInput.files[0];

    if (!file) {
        alert("Please select a photo to upload.");
        return;
    }

    let reader = new FileReader();
    reader.onload = function(e) {
        localStorage.setItem("userPhoto", e.target.result);
        document.getElementById("photoUploadSection").style.display = "none";
        document.getElementById("uploadedPhoto").style.display = "block";
        document.getElementById("userPhoto").src = e.target.result;
        document.getElementById("songOptions").style.display = "block";
    };
    reader.readAsDataURL(file);
}

// Show Songs Based on Selected Option
let selectedCategory = 1;
function showSongs(category) {
    selectedCategory = category;
    document.getElementById("songList").style.display = "block";
}

// Play Selected Song
function playSong(songNumber) {
    let songs = {
        1: ["audio/option1_song1.mp3", "audio/option1_song2.mp3", "audio/option1_song3.mp3", "audio/option1_song4.mp3"],
        2: ["audio/option2_song1.mp3", "audio/option2_song2.mp3", "audio/option2_song3.mp3", "audio/option2_song4.mp3"],
        3: ["audio/option3_song1.mp3", "audio/option3_song2.mp3", "audio/option3_song3.mp3", "audio/option3_song4.mp3"],
        4: ["audio/option4_song1.mp3", "audio/option4_song2.mp3", "audio/option4_song3.mp3", "audio/option4_song4.mp3"]
    };

    let audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = songs[selectedCategory][songNumber - 1];
    audioPlayer.play();

    document.getElementById("nowPlaying").style.display = "block";
}
