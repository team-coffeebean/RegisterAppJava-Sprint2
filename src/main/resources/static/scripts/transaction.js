// * Sprint 4 Task 3
// * Domenic Sithimolada
//

// When document loads
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("searchButton")
        .addEventListener('click', searchActionClick);
});

// Search Lookup
function searchActionClick(event) {
    // validate search
    if (!validateSearch()) {
        return;
    }

    const searchActionElement = event.target;
    searchActionElement.disabled = true; 

    // ajax request

}

// Check null inputs
function validateSearch() {
    // Validate input form
    const lookupElement = getLookupCodeElement();
    let errorMessage = document.getElementById("searchErrorMessage");

    // check null
    if (lookupElement.value.trim() === "") {
        errorMessage.innerHTML = "Please provide a valid input";
        lookupElement.focus();
        return false;
    } 
    else {
        errorMessage.innerHTML = ""; // clear msg
        console.log(lookupElement.value);
    }
}

function completeSearchAction() {

}

// Create Search result box with list of products
function displaySearchedProducts() {
    
}

// Getters and setters
function getLookupCodeElement() {                        // get form input
    return document.forms["searchForm"]["search"];
}

