document.addEventListener('DOMContentLoaded', function() {
    // Define the key used to store the review count
    const REVIEW_COUNT_KEY = 'numReviews';

    // 1. Read the current count from localStorage. 
    //    Defaults to 0 if the key is not found.
    let currentCount = parseInt(localStorage.getItem(REVIEW_COUNT_KEY)) || 0;

    // 2. Increment the count because a new review has just been submitted
    currentCount++;

    // 3. Save the new count back to localStorage
    localStorage.setItem(REVIEW_COUNT_KEY, currentCount.toString());

    // 4. Display the new count on the confirmation page
    const reviewCountElement = document.getElementById('review-count');
    if (reviewCountElement) {
        reviewCountElement.textContent = currentCount;
    }
});