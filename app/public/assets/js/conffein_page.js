// console.log("JS LOADFED!");
// $(document).ready(function () {
//   $(".devour-btn").click(function () {
//     const id = $(this).attr("id");
//     $.ajax({
//       method: "PUT",
//       url: "/api/burgers/" + id,
//       data: { devoured: 1 },
//     }).then((data) => window.location.reload());
//   });

//   $(".undevour-btn").click(function () {
//     const id = $(this).attr("id");
//     $.ajax({
//       method: "PUT",
//       url: "/api/burgers/" + id,
//       data: { devoured: 0 },
//     }).then((data) => window.location.reload());
//   });

//   $(".delete-btn").click(function () {
//     const id = $(this).attr("id");
//     $.ajax({
//       method: "DELETE",
//       url: "/api/burgers/" + id,
//     }).then((data) => window.location.reload());
//   });

//   //create a burger
//   $(".form-button").click(function (e) {
//     console.log("clicked!");
//     e.stopPropagation();
//     e.preventDefault();
//     const burger_name = $("#burger").val().trim();
//     $.ajax({
//       method: "POST",
//       url: "/api/burgers/",
//       data: { burger_name },
//     }).then((data) => window.location.reload());
//   });
// });
