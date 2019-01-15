
(function () {
    const container = document.querySelector('.js_welcome__container'),
        authBtn = document.getElementById('js_authBtn'),
        frontSide = document.querySelector('.js_side--front'),
        backSide = document.querySelector('.js_side--back'),
        toMainPageBtn = document.getElementById('js_toMainPageBtn');

    container.onclick = function (e) {
        let target = e.target;

        if (target === authBtn || target === toMainPageBtn) {
            rotate();

            if (target === authBtn) {
                authBtn.style.display = 'none';
            } else if (target === toMainPageBtn) {
                authBtn.style.display = 'block';
            }
        }
    };

    const rotate = function () {
        frontSide.classList.toggle('rotate');
        backSide.classList.toggle('rotate');
    };

})();