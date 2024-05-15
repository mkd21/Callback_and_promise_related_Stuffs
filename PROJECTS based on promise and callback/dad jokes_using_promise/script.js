// https://icanhazdadjoke.com/   API to fetch the random dad jokes

let storage = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facere libero unde corrupti sint quae itaque quos possimus obcaecati laborum. Iste repudiandae earum exercitationem? Sed impedit harum error veniam ullam?";

let getJokeBtn = document.getElementById("getJokesBtn");
let jokeDisplayArea = document.querySelector(".joke_area");

let getJoke = () =>{
    const response = fetch("https://icanhazdadjoke.com/" , {
        headers : {
            Accept : "application/json",
        },
})
    .then( (res) => res.json())
    .then( (data) => jokeDisplayArea.innerHTML = data.joke)
    .catch((e) =>{
        console.log(e);
    })


}
 
getJoke();
getJokeBtn.addEventListener("click" , getJoke);