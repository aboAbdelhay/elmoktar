/// <reference types="../@types/jquery" />
// !=============form
$(function () {
  $("#materialForm").on("submit", function (event) {
    event.preventDefault();
    // Handle form data here
    var formData = {
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
    var newRow = `
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

    $("#tableBody").append(newRow);

    // Clear the form
    $("#materialForm")[0].reset();
  });
  // !====================print
  $("#printButton").on("click", function () {
    var printContents = document.getElementById("materialTable").outerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  });
});
