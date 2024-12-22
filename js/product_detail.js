// preloader 

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.querySelector(".preloader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 3000); 
});

// preloader end


// price
$(document).ready(function () {
    $('#quantity').on('input', function () {
        const quantity = parseInt($(this).val(), 10);
        const pricePerItem = 25000; 
        const totalPrice = (quantity * pricePerItem).toFixed(2);
        $('#product-price').text(totalPrice);
    });
});
