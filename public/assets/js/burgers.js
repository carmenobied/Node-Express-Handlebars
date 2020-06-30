// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".update-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var updateDevoured = $(this).data("newsleep");
  
      var updatedDevouredState = {
        devoured_burger: updateDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: updatedDevouredState
      }).then(
        function() {
          console.log("update Devoured to", updateDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var updatedBurger = {
        burger_name: $("#bu").val().trim(),
        devoured_burger: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: updatedBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });   
  });