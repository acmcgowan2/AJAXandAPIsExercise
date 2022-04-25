// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

// 1a 
const stringJSON = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;
const jokeJS1 = JSON.parse(stringJSON);
// 1b
p1.innerText = jokeJS1.setup;
// 1c 
p2.innerText = jokeJS1.punchline;

// Use the Friends API for questions 2 & 3 (Link below)…
// https://friends-quotes-api.herokuapp.com/

// 2a
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random/`)

// 2b 
.then(res => {
    const friendJS2 = res;
    // 2c
    p3.innerText = friendJS2.data.character;
    p4.innerText = friendJS2.data.quote;
})

// 2d 
.catch(err => {
    console.log(`rejected`);
    console.log(err);
});


// 3a, 3b, 3c, and 3d
async function quoteFunc(){
    try{ 
        const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random/`); 
        p5.innerText = quoteJS3.data.character;
        p6.innerText = quoteJS3.data.quote;
    }catch(err){
        console.log(`rejected`);
        console.log(err);
    }
};
quoteFunc();

// 4a and 4b
async function tvMazeFunc(){
    try{
    const tvmaze = `https://api.tvmaze.com`;
    const episodeByNumber = `/shows/38963/episodebynumber?season=2&number=8`;
    const finalEp = tvmaze + episodeByNumber;
    const res = await axios.get(finalEp);
    p7.innerText = res.data.name;

    } catch(err){
        console.log(`rejected`);
        console.log(err);
    }
}
tvMazeFunc();

// Bonus!!!

// 5
async function getImg(){
    try{
        const pokeAPIpika = `https://pokeapi.co/api/v2/pokemon/pikachu`;
        const pikachu = await axios.get(pokeAPIpika);
        const image1 = document.createElement(`img`);
        const image2 = document.createElement(`img`);
        image1.src = pikachu.data.sprites.front_default;
        image2.src = pikachu.data.sprites.back_default;
        fourth.after(image1, image2);
    } catch(err){
        console.log(err);
        console.log(`rejected`);
    }
}
getImg();

// 6
async function getPoster(){
    try{

        const omdbAPI = `http://www.omdbapi.com/?i=tt0119822&apikey=a3726122`;
        const aG = await axios.get(omdbAPI);
        console.log(aG);
        console.log(aG.data);

        const image = document.createElement(`img`);
        image.src = aG.data.Poster;
        fourth.after(image);
    }
    catch(err){
        console.log(err);
    }

}
getPoster();     