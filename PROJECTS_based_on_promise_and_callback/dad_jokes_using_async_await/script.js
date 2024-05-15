// https://icanhazdadjoke.com/   API to fetch the random dad jokes

let storage = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere libero unde corrupti sint quae itaque quos possimus obcaecati laborum. Iste repudiandae earum exercitationem? Sed impedit harum error veniam ullam?";

let getJokeBtn = document.getElementById("getJokesBtn");
let jokeDisplayArea = document.querySelector(".joke_area");

async function getJoke()
{
    try 
    {
        let res = await fetch("https://icanhazdadjoke.com/" , {
            headers : {
                Accept : "application/json",
            },
        });

        let data = await res.json();
        jokeDisplayArea.innerHTML = data.joke;
        console.log(data.joke);
    }
    catch(err)
    {
        console.log("error generated is",err);
    }
}
 
getJoke();
getJokeBtn.addEventListener("click" , getJoke);