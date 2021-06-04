let url = "http://api.openweathermap.org/data/2.5/weather?appid=4f2e117329cc79caf42dd9006de1c6e1&units=metric&q=";
let eleBut = document.querySelector("button");
eleBut.onclick = () => {
    let eleInp = document.querySelector("input");
    let cityName = eleInp.value;
    let urlWeather = url + cityName;
    axios.get(urlWeather)
    .then((resp) => {
        let res =  resp.data;
        let spQuocGia = document.querySelector("#quoc-gia");
        let spNhietDo = document.querySelector("#nhiet-do");
        let spDoAm = document.querySelector("#do-am");
        let spThoiTiet = document.querySelector("#thoi-tiet");
        // console.log(res);
        spQuocGia.innerText = res.sys.country;
        spNhietDo.innerText = res.main.temp;
        spDoAm.innerText = res.main.humidity;
        spThoiTiet.innerText = res.weather[0].main;

    })
}