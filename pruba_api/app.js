window.addEventListener('load', () => {

    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let icono = document.getElementById('icono')

    let vientoVelocidad = document.getElementById('viento.velocidad')

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(posicion => {

            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

            const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-33.4462976&lon=-70.647808&appid=b4d65485abe16c6c3859c3d704526e16'


            //console.log(url)

            fetch(url)
             .then ( response => { return response.json() })
             .then (data => {
                console.log(data.main.temp)
                let temp = Math.round(data.main.temp)
                temperaturaValor.textContent = `${temp} C` 

                console.log(data.weather[0].descripcion)
                let desc = data.weather[0].descripcion
                temperaturaDescripcion.textContent = desc.toUpperCase()

                

            }) 
            .catch( error => {
                console.log(error)
            } )
        })
    }



})