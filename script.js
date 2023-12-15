const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const APIkey = "b5zonOd7VK2jzpCBMfgYhg==tx1hoFAML8LyZnLA";

const options= {
    method:"GET",
    headers: { 'X-Api-Key': APIkey},
};

const APIurl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
try {
    jokeEl.innerText="loading";

    btnEl.Disabled = true;
    btnEl.innerText = null

    const response = await fetch(APIurl,options);
    const data =await response.json();

    btnEl.Disabled = false;
    btnEl.innerText = "tell me a joke";
    
    jokeEl.innerText = data[0].joke;
} catch (error) {
    jokeEl.innerText= "you are offline";
    btnEl.Disabled = false;
    btnEl.innerText = "tell me a joke";
    console.log(error);
}
}

btnEl.addEventListener("click",getJoke);