// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.
// Write your JavaScript code.

//Login
$(function () {
    let form = $("#account");
    form.on('submit', function (e) {
        e.preventDefault();
        let returnURL = location.search;
        let url = location.origin + '/Identity/Account/Login' + returnURL;
        let data = form.serialize();
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (res, text, xhr) {
                if (xhr.status === 200) {
                    if (xhr.responseText === "Invalid") {
                        Swal.fire({
                            icon: 'error',
                            title: 'Sorry',
                            text: 'Email or password is incorrect',
                        });
                    } if (xhr.responseText.includes("LoginWith2fa")) {
                        $(location).attr('href', location.origin + xhr.responseText);
                    } if (xhr.responseText.startsWith("Succeeded")) {
                        $(location).attr('href', location.origin + xhr.responseText.slice(9));
                    } if (xhr.responseText.includes("Lockout")) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Sorry',
                            text: 'Co cai lon',
                            scrollbarPadding: false,
                        });
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    });
});

//Resend Email
$(function () {
    let form = $("#resend-email");
    form.on('submit', function (e) {
        e.preventDefault();
        let url = location.href;
        let data = form.serialize();
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (res, text, xhr) {
                if (xhr.status === 200) {
                    if (xhr.responseText.includes("Email does not exist")) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Sorry',
                            text: 'Email does not exist. Please register your account.',
                            scrollbarPadding: false,
                        });
                    } if (xhr.responseText.includes("Verification email sent")) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Successful',
                            text: 'Verification email sent. Please check your email.',
                            scrollbarPadding: false,
                        });
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    });
});

//Add To Cart
$(function () {
    let form = $(".add-to-cart");
    form.on('submit', function (e) {
        e.preventDefault();
        let url = form.attr("action");
        let data = form.serialize();
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (res, text, xhr) {
                if (xhr.responseText.includes("Success")) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successful',
                        text: 'This product has been added to your cart',
                        confirmButtonText: 'Continue',
                        scrollbarPadding: false,
                    });
                }
            },
            error: function (res, text, xhr) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Sorry',
                    text: 'You must be logged in to purchase',
                    scrollbarPadding: false,
                });
            }
        });
    });
});

////Shopping Cart
//$(function () {
//    $(".cart").click(function (e) {
//        e.preventDefault();
//        let url = location.origin + "/CartDetails";
//        $.ajax({
//            type: "GET",
//            url: url,
//            dataType: "json",
//            success: function (res, text, xhr) {
//                const table = $(".render-product");
//                let content = "";
//                let total = 0;
//                for (var i = 0; i < res.length; i++) {
//                    const row = ` <tr class="cart-item">
//                            <td class="w-25">
//                                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png" class="img-fluid img-thumbnail" alt="Sheep">
//                            </td>
//                            <td>Product Name</td>
//                            <td>${res[i].price}</td>
//                            <td>
//                                <form action="/CartDetails/Delete/${res[i].id}" class="delete-cart-item" method="post">
//                                    <input type="hidden" data-val="true" data-val-required="The Id field is required." id="Id" name="Id" value="${res[i].id}">
//                                    <input type="submit" value="Remove" class="btn btn-sm btn-outline-danger">
//                                </form>
//                            </td>
//                        </tr>`;
//                    content += row;
//                    total += res[i].price;
//                }
//                table.html(content);
//                $('#total').html(total);
//            },
//            error: function (jqXHR, textStatus, errorThrown) {
//            }
//        });
//    });
//});

////Delete Cart Item
//$(function () {
//    $(".delete-cart-item").submit(function (e) {
//        e.preventDefault();
//        let url = $(this).attr("action");
//        let data = $(this).serialize();
//        let item = $(this);
//        $.ajax({
//            type: "POST",
//            url: url,
//            data: data,
//            success: function (res) {
//                if (res.id != null) {
//                    item.parents(".cart-item").remove();
//                } else {
//                    alert("Error");
//                }
//            },
//            error: function (jqXHR, textStatus, errorThrown) {
//            }
//        });
//    });
//});

//Google Button
$("#external-account button[value = 'Google']").attr('class', 'btn btn-block text-white').css("background-color", "#dd5044");