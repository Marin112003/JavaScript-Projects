const colorButton = document.querySelector('.color-button');
      const bodyEl = document.querySelector('body');
      const containerEl = document.querySelector(".container")
      const colorDiv = document.createElement('div');
      colorDiv.className = "color-div"

      containerEl.appendChild(colorDiv);

      function randomNum() {
        return Math.floor(Math.random() * 255);
      }

      colorButton.addEventListener('click', () => {

        const color = `rgb(${randomNum()} ${randomNum()} ${randomNum()})`;

        bodyEl.style.backgroundColor = color;

        colorDiv.textContent = color;
      });