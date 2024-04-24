const show = document.getElementById('show');
        const add = document.getElementById('add');
        const two = document.getElementById('2');
        const three = document.getElementById('3');
        const reset = document.getElementById('reset');
        show.addEventListener('click', showCart);
        add.addEventListener('click', addToCart);
        two.addEventListener('click', addTwo);
        three.addEventListener('click', addThree);
        reset.addEventListener('click', resetCart);
    let cart = 0;

    function showCart () {
        alert(`You cart have (${cart}) ${cart > 1 ? 'items':'item'}`);
    }

    function addToCart () {
        cart ++; //short hand to cart = cart +1;
        showCart();
    };

    function addTwo () {
        cart += 2; //Short hand to cart = cart + 2;
        showCart();
    };

    function addThree () {
        cart += 3; //Short hand to cart = cart + 3;
        showCart();
    };

    function resetCart () {
        cart = 0;
        showCart();
    };