console.log("JS LOADFED!");

$(document).ready(function () {
  let total;
  const cart = localStorage.getItem("savedCart")
    ? JSON.parse(localStorage.getItem("savedCart"))
    : [];
  renderCart();
  $(".order-btn").on("click", function (event) {
    const name = $(this).siblings("h5").text();
    const quan = $(this).siblings(".quantity").val();
    const size = $(this).siblings(".price").val().split("-")[0];
    const price = $(this).siblings(".price").val().split("-")[1];
    const cartItem = {
      name,
      quan,
      size,
      price,
    };
    cart.push(cartItem);
    renderCart();
    localStorage.setItem("savedCart", JSON.stringify(cart));

    // $.ajax({
    //   method: "POST",
    //   url: "/api/CoffeeDrinks/",
    //   data: { coffee_name, coffee_quantityAndPrice },
    // }).then((data) => window.location.reload());
  });

  // $(".delete-btn").click(function () {
  //   const id = $(this).attr("id");
  function renderCart() {
    subTotal = 0;
    $("#cart").html("");
    cart.forEach((item, i) => {
      const total = item.price * item.quan;
      subTotal += total;
      $("#cart").append(`
        <h3>${item.size} ${item.name} x ${item.quan} = $${total.toFixed(
        2
      )}<span>
            <button id=${i} class="btn btn-info delete-btn">Remove</button>
                </span></h3>
        `);
    });
    $("#total").text(subTotal.toFixed(2));
  }

  $(document).on("click", ".delete-btn", function () {
    deleteFromCart($(this).attr("id"));
  });

  function deleteFromCart(index) {
    cart.splice(Number(index), 1);
    renderCart();
    localStorage.setItem("savedCart", JSON.stringify(cart));
  }
  //   $.ajax({
  //     method: "DELETE",
  //     url: "/api/CoffeeDrinks/" + id,
  //   }).then((data) => window.location.reload());
  // });

  $(".place-btn").click(function () {
    $.ajax({
      method: "POST",
      url: "/api/CoffeeDrinks/",
      data: { cart, total },
    }).then((data) => {
      localStorage.removeItem("savedCart");
      window.location.reload();
    });
  });
});
