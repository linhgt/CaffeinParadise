$(document).ready(function () {
  let subTotal = 0;
  const cart = localStorage.getItem("savedCart")
    ? JSON.parse(localStorage.getItem("savedCart"))
    : [];
  renderCart();
  $(".order-btn").on("click", function (event) {
    const name = $(this)
      .parent(".card-footer")
      .siblings(".card-body")
      .children("h5")
      .text();
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
  });

  function renderCart() {
    subTotal = 0;
    $("#cart").html("");
    cart.forEach((item, i) => {
      const total = item.price * item.quan;
      subTotal += total;
      $("#cart").append(`
        <h4>${item.size} ${item.name} x ${item.quan} = $${total.toFixed(
        2
      )}<span><button id=${i} class="btn remove-btn">Remove</button></span></h4>
        `);
    });
    $("#total").text(subTotal.toFixed(2));
  }

  $(document).on("click", ".remove-btn", function () {
    deleteFromCart($(this).attr("id"));
  });

  function deleteFromCart(index) {
    cart.splice(Number(index), 1);
    renderCart();
    localStorage.setItem("savedCart", JSON.stringify(cart));
  }

  $(".place-btn").click(function () {
    $.ajax({
      method: "POST",
      url: "/api/order",
      data: { cart, subTotal },
    }).then((data) => {
      localStorage.removeItem("savedCart");
      window.location.reload();
    });
  });

  $(".showDetails").click(function () {
    const orderId = $(this).attr("data-order-id");
    $.get("/api/orderdetail/" + orderId).then((data) => {
      const details = JSON.parse(data.details);
      $(".modal-dialog").html(`
      <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Order #${
                          data.id
                        }</h5>
                    </div>
                    <div class="modal-body">
                       ${details
                         .map((item, i) => {
                           const total = item.price * item.quan;
                           return `<h4>${item.size} ${item.name} x ${
                             item.quan
                           } = $${total.toFixed(2)}</h4>`;
                         })
                         .join("")}
                         <hr>
                         <h4>Order Total - $${data.total}</h4>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
              </div>`);
    });
  });
});
