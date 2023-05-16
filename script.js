function getCountries(lang) {
  fetch('https://restcountries.com/v3.1/lang/'+ lang) 
    .then( res => res.json())
      .then(function(response) {
        console.log(response)
        document.querySelector('.list-group').innerHTML = '';
        
        response.forEach(function(e) {          
          console.info(e);

          document.querySelector('.list-group').innerHTML +=
          '<li class="list-group-item list-group-item-action">Nome: ' + e.name.common + ' | <a target="_blank" href="' + e.maps.googleMaps + '">Mapa</a></li>';
        })
      })

      .catch(e  => console.log(e + 'erro durante captura de dados'))      

}


document.getElementById('btnSearch').addEventListener('click', function() {
    getCountries(document.querySelector('.form-control').value);
});

