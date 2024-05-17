document.addEventListener("DOMContentLoaded", function() {
    // Get references to count containers
    var countContainers = document.querySelectorAll(".count-container");
    
    // Set the target count
    var targetCount = 100; // Change this to your desired count
    
    // Define the duration for the count animation (in milliseconds)
    var duration = 2000; // Change this to adjust the duration
    
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
  