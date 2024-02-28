export const _getWeatherUI = function (element, data) {
    if (element.children.length >= 3) {
      // Eğer 3 veya daha fazla çocuk varsa, ilk çocuğu kaldır
      const childrenToRemove = Array.from(element.children).slice(0,1);
      childrenToRemove.forEach(child => child.remove());
    }
  
    // Yeni içeriği ekleyin
    element.innerHTML += `
        <div class="weather-card">
            <div class="city">
                <h4>${data.location.name}</h4>
            </div>
            <div class="country">
                <p>${data.location.country}</p>
            </div>
            <div class="feel">
                <img src="./assets/images/sun.svg" alt="null" />
                <span>${data.current.temp_c}°C</span>
            </div>
            <div class="realfeel">
                <p>Hissedilen ${data.current.feelslike_c}°C</p>
            </div>
        </div>
    `;
  };

export const _renderUI = function (element, cardDatas) {
  element.innerHTML = "";
  cardDatas.forEach((cardData) => {
    const data = cardData.query;
    element.innerHTML += `
            <div class="city-wrapper">
              <h3>${data.location.name}</h3>
              <img src="${data.current.condition.icon}" alt="sun" />
              <span>${data.current.temp_c} °C</span>
            </div>
        `;
  });
};
