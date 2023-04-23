function fetchBitcoinPrice() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(data => {
        const prices = data.bpi;
        const priceContainer = document.getElementById('price-container');
        priceContainer.innerHTML = '';
        for (const currency in prices) {
          const price = prices[currency];
          const currencyCode = price.code;
          const currencySymbol = price.symbol;
          const priceRate = price.rate;
          const priceFloat = price.rate_float;
          const priceElement = document.createElement('div');
          priceElement.innerHTML = `
            <span class="currency-code">${currencyCode}</span>
            <span class="currency-symbol">${currencySymbol}</span>
            <span class="price-rate">${priceRate}</span>
          `;
          priceContainer.appendChild(priceElement);
        }
      })
      .catch(error => console.error(error));
  }
  
  setInterval(fetchBitcoinPrice, 5000);
  