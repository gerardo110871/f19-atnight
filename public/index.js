const input = document.querySelector('#input-bar')
const button = document.querySelector('#submit-btn')

function create() {
    const thing = {
        text: input.value
    }
    // console.log(input.value)
    axios.post("/test", thing)
    .then((res) => {
        alert(res.data)
    })
    .catch((err) => {
        console.error(err)
    })
}

button.addEventListener("click", create)