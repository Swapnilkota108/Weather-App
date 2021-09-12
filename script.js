
const button = document.querySelector('button');
const heading = document.querySelector('.container');

button.addEventListener('click',()=>{
    const inputValue = document.querySelector('input').value;
   fetch(getUrl(inputValue))
   .then(response=>response.json())
   .then(json=>{
    heading.innerHTML = `<h1>${inputValue}</h1> <h3>${json.current.temp_c}°C / ${json.current.temp_f}°F</h3>`;
    console.log(json.current)
   })

})


function getUrl(input){
    return `http://api.weatherapi.com/v1/current.json?key=76f8617e85884982ab543528211209&q=${input}&aqi=no`;
}


