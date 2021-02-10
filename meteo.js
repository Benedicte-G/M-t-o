function getWeather(ville){
				let xhttp = new XMLHttpRequest();
				let result = '';
				xhttp.onreadystatechange = function() {
				  if (this.readyState == 4 && this.status == 200) {
					result = JSON.parse(this.response);
					document.querySelector('#' + ville.id +' .temp').innerHTML = 'Temp: ' + result.main.temp +'°';
					document.querySelector('#' + ville.id +' .ressentis').innerHTML = 'Ressentis: ' + result.main.feels_like +'°';
					document.querySelector('#' + ville.id +' .tempMin').innerHTML = 'Min: ' + result.main.temp_min +'°';
					document.querySelector('#' + ville.id +' .tempMax').innerHTML = 'Max: ' + result.main.temp_max +'°';
					document.querySelector('#' + ville.id +' .humidity').innerHTML = 'Huu: ' + result.main.humidity +'%';
					document.querySelector('#' + ville.id +' .cloud').innerHTML =  result.weather[0].description;
			
				  }
				};
				xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q="+ville.id+"&appid=bc9152f15f618348dc2ac5248b7b86e3&units=metric&lang=fr", true);
				xhttp.send();
				
				return result;
			}
			
            function showCity() {
				let cities = document.getElementsByClassName("city");
				let ville = document.getElementById("ville").value;
				for (i=0; i < cities.length; i++) {
					result = getWeather(cities[i]);
					console.log(result);
					//Si aucune ville est sélectionnée on affiche toutes les villes 
					if (ville == ''){
						cities[i].style.display= "";
					} else {
						if (cities[i].id != ville) {
							cities[i].style.display= "none";
						} else {
							cities[i].style.display= "";
						}
					}
				}
			}