const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    };
    const response = await fetch('https://api.chucknorris.io/jokes/random', config);
    const data = await response.json();
    jokeEl.innerHTML = data.value;
}
