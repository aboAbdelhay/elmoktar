/// <reference types="../@types/jquery" />
// // !=============form
$(function () {
  // !=============form save
  $("#materialForm").on("submit", function (event) {
    event.preventDefault();
    // Handle form data here
    let formData = {
      documentNumber: $("#documentNumber").val(),
      movementType: $("#movementType").val(),
      analyticalCode: $("#analyticalCode").val(),
      currency: $("#currency").val(),
      date: $("#date").val(),
      warehouse: $("#warehouse").val(),
      supplierName: $("#supplierName").val(),
      notes: $("#notes").val(),
    };
    // ?console.log(formData);
    // You can send formData to the server using AJAX or any other method
    let newRow = `
        <tr>
            <td>${formData.documentNumber}</td>
            <td>${formData.movementType}</td>
            <td>${formData.analyticalCode}</td>
            <td>${formData.currency}</td>
            <td>${formData.date}</td>
            <td>${formData.warehouse}</td>
            <td>${formData.supplierName}</td>
            <td>${formData.notes}</td>
        </tr>
    `;

    $("#tableBody").prepend(newRow);

    // Clear the form
    $("#materialForm")[0].reset();
  });
  // !====================print table
  $("#printButton").on("click", function () {
    let printContents = document.getElementById("materialTable").outerHTML;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  });
  // !====================sidebar
  $(".nav-item").on("click", function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
    ///////////////////////////
    $(".nav-item")
      .not(this)
      .children("div")
      .children("i")
      .removeClass("fa-sort-up")
      .addClass("fa-sort-down");
    /////////////////////////
    $(this)
      .children("div")
      .children("i")
      .toggleClass("fa-sort-down")
      .toggleClass("fa-sort-up");
    // /////////////////
    $(".nav-item").not(this).children("ul").addClass("d-none");
    $(this).children("ul").toggleClass("d-none");
  });
});

