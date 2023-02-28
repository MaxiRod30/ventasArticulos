let APIkey = ''

function clima(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=montevideo&units=metric&appid=${APIkey}`)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(data => {

        let pTemp = document.getElementById("Temp")
        pTemp.innerText = `${data.main.temp} ºC`

    })
    .catch(error =>{
       console.log(error)
    })
}

clima()

