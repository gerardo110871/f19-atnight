const input = document.querySelector('#input-bar')
const button = document.querySelector('#submit-btn')

function create() {
    let nameInput = document.querySelector('#input-bar')
    const thing = {
        text: input.value
    }
    // console.log(input.value)
    axios.post("http://localhost:4005/test", thing)
    .then((res) => {
        alert(res.data)
        console.log(thing.text)
    })
    .catch((err) => {
        console.error(err)
    })
}

button.addEventListener("click", create)