const songs = [
    {
        title: "Song 1",
        artist: "Artist 1",
        albumArt: "./assets/download.jpeg",
        src: "./assets/ANDO_320(PagalWorld.com.sb).mp3"
    },
    {
        title: "Song 2",
        artist: "Artist 2",
        albumArt: "./assets/download.jpeg",
        src: "./assets/Big Dawgs_320(PagalWorld.com.sb).mp3"
    },
    {
        title: "Song 3",
        artist: "Artist 3",
        albumArt: "./assets/download.jpeg",
        src: "./assets/Dark Light_320(PagalWorld.com.sb).mp3"
    }
];

const songsContainer = document.getElementById('songsContainer');
const audioPlayer = document.getElementById('audioPlayer');
const audioSource = document.getElementById('audioSource');
const albumArt = document.getElementById('albumArt');
const songTitle = document.getElementById('songTitle');
const artistName = document.getElementById('artistName');

// Function to display available songs
function displaySongs() {
    songs.forEach((song, index) => {
        const songCard = document.createElement('div');
        songCard.className = 'bg-gray-800 p-4 rounded-lg flex items-center space-x-4';

        const songAlbumArt = document.createElement('img');
        songAlbumArt.src = song.albumArt;
        songAlbumArt.alt = `${song.title} Album Art`;
        songAlbumArt.className = 'rounded-lg';

        const songInfo = document.createElement('div');
        songInfo.innerHTML = `
            <h4 class="text-xl font-bold">${song.title}</h4>
            <p class="text-gray-400">${song.artist}</p>
        `;

        const playButton = document.createElement('button');
        playButton.className = 'ml-auto bg-yellow-500 text-black py-1 px-3 rounded-full font-bold hover:bg-yellow-600';
        playButton.innerText = 'Play';
        playButton.addEventListener('click', () => playSong(index));

        songCard.appendChild(songAlbumArt);
        songCard.appendChild(songInfo);
        songCard.appendChild(playButton);

        songsContainer.appendChild(songCard);
    });
}

// Function to play selected song
function playSong(index) {
    const song = songs[index];
    albumArt.src = song.albumArt;
    songTitle.innerText = song.title;
    artistName.innerText = song.artist;
    audioSource.src = song.src;
    audioPlayer.load();
    audioPlayer.play();
}

// Initializing the songs display
displaySongs();
