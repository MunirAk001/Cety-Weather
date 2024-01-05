    let APIKey = "039f062cb2efd753702758546324e682"
    let Url = "https://api.openweathermap.org/data/2.5/weather?units=matric"


    let datas = new Date()
    let dayOfweek = [ "Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" ]
    let month = ["Jan" , "Feb" , "March" , "Apr" , "May" , "Jun" , "Jul" , "Sep" , "Oct" , "Nov" , "Dec"]

    async function getData(datavalue)
    {
      let response = await fetch(
        Url + `&appid=${APIKey}` + "&q=" + datavalue
      );
      var data = await response.json();

      let city = (document.querySelector(".city").innerHTML = data.name);
      let temp = (document.querySelector(".temp").innerHTML =
        data.main.temp + " °F");
      let deyOfWeek = (document.querySelector(".deyOfWeek").innerHTML =
        dayOfweek[datas.getDay()]);
      //         document.querySelector(".monthofdata").innerHTML = datas.getDate() + " " + " " + month[datas.getMonth() - 1] + " " + " " + datas.getFullYear()

      let monthofdata = (document.querySelector(".monthofdata").innerHTML =
        datas.getDate() +
        " " +
        " " +
        month[datas.getMonth() - 1] +
        " " +
        " " +
        datas.getFullYear());

      let wind = (document.querySelector(".wind").innerHTML =
        data.wind.speed + " km/h");
      let humidity = (document.querySelector(".humidity").innerHTML =
        data.main.humidity + " %");
      let main = (document.querySelector(".main").innerHTML =
        data.weather[0].main);
      if (data.weather[0].main == "Clouds") {
        document.querySelector(".imgWeather").src = "./cloud.png";
      }
      if (data.weather[0].main == "Sun") {
        document.querySelector(".imgWeather").src = "./suny.png";
      }
    }

    let search = document.querySelector(".search")

    let btnSearch = document.querySelector("#btnSearch")
    btnSearch.onclick = () =>
    {
        getData(search.value)
    }

    

          getData();