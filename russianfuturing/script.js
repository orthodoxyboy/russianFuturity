// Получаем список ul
var myList = document.getElementById("articles");

// Добавляем обработчик события клика на список
myList.addEventListener("click", function(e) {
  // Проверяем, был ли клик по элементу li
  if (e.target.tagName === "LI") {
    // Проверяем, есть ли у элемента класс "expanded"
    if (e.target.classList.contains("expanded")) {
      // Если есть, то удаляем класс "expanded" и скрываем дочерние элементы
      e.target.classList.remove("expanded");
      var childList = e.target.getElementsByTagName("ul")[0];
      if (childList) {
        childList.style.display = "none";
      }
    } else {
      // Если нет, то добавляем класс "expanded" и показываем дочерние элементы
      e.target.classList.add("expanded");
      var childList = e.target.getElementsByTagName("ul")[0];
      if (childList) {
        childList.style.display = "block";
      }
    }
  }
});

const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();