$(function() {
// PUT *************************************************
  $(".update-devoured").on("click", function(event) {
    event.preventDefault();
    const id = $(this).data("id");

    const updatedDevouredState = {
      devoured_burger: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: updatedDevouredState
    }).then(
      function() {
        console.log("changed devoured to", updatedDevouredState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  
  // POST *************************************************
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const addedBurger = {
      burger_name: $("#bu").val().trim(),
      devoured_burger: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: addedBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
      );
    });
});
