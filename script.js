var button = document.querySelector(".more")

button.addEventListener('click', function () {
    const width = window.innerWidth;

    var link_1 = document.querySelector('.main-menu__element:nth-child(7)');
    var link_2 = document.querySelector('.main-menu__element:nth-child(8)');
    var link_3 = document.querySelector('.main-menu__element:nth-child(9)');
    var link_4 = document.querySelector('.main-menu__element:nth-child(10)');
    var link_5 = document.querySelector('.main-menu__element:nth-child(11)');

    var more_text = document.querySelector('.more__text');
    var more_img = document.querySelector('.more__img');
    text = more_text.textContent;

    if (text == 'Показать все') {
        if (width < 1120) {
            link_1.classList.remove('hidden');
            link_2.classList.remove('hidden');
        }
        else {
            link_3.classList.remove('hidden-max');
            link_4.classList.remove('hidden-max');
            link_5.classList.remove('hidden-max');
        }

        more_text.textContent = 'Скрыть';
        more_img.classList.add('hide_img');
        button.classList.add('hide');
    }

    else {
        if (width < 1120) {
            link_1.classList.add('hidden');
            link_2.classList.add('hidden');
        }
        else {
            link_3.classList.add('hidden-max');
            link_4.classList.add('hidden-max');
            link_5.classList.add('hidden-max');
        }
        more_text.textContent = 'Показать все';
        more_img.classList.remove('hide_img');
        button.classList.remove('hide');
    }



})