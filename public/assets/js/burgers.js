// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".update-devoured").on("click", function(event) {
      const id = $(this).data("id");
      console.log(id);

    //   const updateDevoured = $(this).data("updateDevoured");
  
      const updatedDevouredState = {
        devoured_burger: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: updatedDevouredState
      }).then(
        function() {
          console.log("update Devoured to", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const updatedBurger = {
        burger_name: $("#bu").val().trim(),
      };
      console.log(updatedBurger);

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: updatedBurger
      }).then(
        function() {
          console.log("Created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });   
  });