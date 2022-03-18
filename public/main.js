const input = document.querySelector('#input-bar')
const button = document.querySelector('button')

function create() {
    const thing = {
        text: input.value
    }

    axios.post("http://localhost:4005/yo", thing)
    .then((res) => {
        alert(res.data)
    })
    .catch((err) => {
        console.error(err)
    })
}

button.addEventListener('click', create)