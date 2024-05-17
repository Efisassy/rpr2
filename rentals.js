document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("myInput");
    var dropdownContent = document.getElementById("dropdownContent");
  
    input.addEventListener("click", function() {
      dropdownContent.style.display = "block";
    });
  
    dropdownContent.addEventListener("click", function(event) {
      if (event.target.tagName === "P") {
        input.value = event.target.textContent.trim();
        dropdownContent.style.display = "none";
      }
    });
  
    document.addEventListener("click", function(event) {
      if (!input.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.style.display = "none";
      }
    });
  });

  


  document.addEventListener("DOMContentLoaded", function() {
    // Get references to count containers
    var countContainers = document.querySelectorAll(".count-container");
    
    // Set the target count
    var targetCount = 1000; // Change this to your desired count
    
    // Define the duration for the count animation (in milliseconds)
    var duration = 4000; // Change this to adjust the duration
    
    // Calculate the increment for each count container
    var increment = Math.ceil(targetCount / countContainers.length);
    
    // Function to animate the count for each container
    function animateCount(container, start, end, duration) {
      var startTime = null;
      
      function step(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        var percentage = Math.min(progress / duration, 1);
        var count = Math.floor(start + (end - start) * percentage);
        container.textContent = count;
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      }
      
      requestAnimationFrame(step);
    }
    
    // Animate the count for each container
    var startCount = 0;
    for (var i = 0; i < countContainers.length; i++) {
      var endCount = Math.min(startCount + increment, targetCount);
      animateCount(countContainers[i], startCount, endCount, duration);
      startCount += increment;
    }
  });
  


  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("bookingForm");
    const thankYouMessage = document.getElementById("thankYouMessage");
    const userDataDisplay = document.getElementById("userData");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = new FormData(form);
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Display thank you message
        form.style.display = "none";
        thankYouMessage.style.display = "block";

        // Display user input
        userDataDisplay.innerHTML = `
           
            <p>Location: ${formDataObject.location}</p>
            <p>Pick up date: ${formDataObject.pickupDate}</p>
            <p>Return date: ${formDataObject.returnDate}</p>
        `;
    });
});
