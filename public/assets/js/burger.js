$(function() {
// PUT *************************************************
  $(".update-devoured").on("click", function(event) {
    // event.preventDefault();
    const id = $(this).data("id");
    // const updatedDevoured = $(this).data("updatedDevoured");

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

  //////
$(".change-sleep").on("click", function(event) {
  var id = $(this).data("id");
  var newSleep = $(this).data("newsleep");

  var newSleepState = {
    sleepy: newSleep
  };

  // Send the PUT request.
  $.ajax("/api/cats/" + id, {
    type: "PUT",
    data: newSleepState
  }).then(
    function() {
      console.log("changed sleep to", newSleep);
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
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});
