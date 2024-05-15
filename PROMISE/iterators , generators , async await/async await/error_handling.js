function downloadSong(url)
{
    return new Promise(function exec(resolve , reject){
        console.log("Download started");

        setTimeout(() => {
            console.log("Downloaded");
            let format = "mp3";
            resolve(format);
        } , 1000);
    });
}

function playSong()
{
    return new Promise(function exec(resolve , reject)
    {
        let output = "unable to play";
        reject(output);
    });
}

async function musicPlayer()
{
    try{
        let downloadResult = await downloadSong("www.google.com");
        console.log("Song downloaded in fomat",downloadResult);

        let playingResult = await playSong();
        console.log("output of the song is",playingResult);
    }
    catch(value){
        console.log("error has arrived -->",value);
    }
}

musicPlayer();