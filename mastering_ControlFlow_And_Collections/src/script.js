const playlist = [];
let recordPrototype = {
	name: "",
	artist: "",
};

const isIndexValid = (index) => {
	const playlistLength = playlist.length;
	return (playlistLength > 0 && index >= 0 && index < playlistLength);
}
const addSong = (songName, artistName) => {
	let record = Object.create(recordPrototype);
	record.name = songName;
	record.artist = artistName;
}

const removeSong = (index) => {
	if (isIndexValid(index)) playlist.splice(index, 1);

}

const getSongDetails = (index) =>
	(isIndexValid(index)) ? playlist[index] : null;


const modifySong = (index, songName, artistName) => {
	if (isIndexValid(index)) {
		let song = playlist[index];
		song.name = songName;
		song.artist = artistName;
	}
	const now = new Date();
	now.getMinutes()
}

