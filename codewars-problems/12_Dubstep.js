function songDecoder(song) {
  return song.replace(/WUB/gi, " ").replace(/\s+/g, ' ').trim();
}

console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"));