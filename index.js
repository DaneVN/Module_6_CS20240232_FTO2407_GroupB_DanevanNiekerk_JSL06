// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuEl = document.querySelector('#menu')

    // Loop through each category and its items in the menu object
    Object.entries(menu).map( ([category, menuItem]) => {
        // Create an element to represent the category
        const categoryDivEl = document.createElement(`h3`)

        // Set the text content of the category element to the category name
        categoryDivEl.textContent = category;

        // Append the category element to the menu container
        menuEl.appendChild(categoryDivEl);

        // Create an element to represent a list of items
        const categoryListEl = document.createElement('ul');
        categoryListEl.setAttribute('styles', 'list-style-type: none');

        // Append a list of items element to the menu container
        menuEl.appendChild(categoryListEl);

        // Loop through the items in the category and create list items
        menuItem.map((dishName) => {
            // Create a list item element
            const dishOptionEl = document.createElement('li');

            // Set the text content of the list item element to the item name
            dishOptionEl.textContent = dishName;

            // Attach a click event listener to the list item to add it to the order
            dishOptionEl.addEventListener("click", () =>  addToOrder(dishName))
            
            // Append the list item to the list of items
            categoryListEl.appendChild(dishOptionEl);
        })
    })
}

// Callback function for adding an item to the order
const addToOrder = function() {
    let currentTotal = 0; // Keeps track of the total within the closure

    return function(itemName) {
        // Get the order items list and the order total element from the HTML
        const orderItemsEl = document.querySelector('#order-items');
        const orderTotalEl = document.querySelector('#order-total');

        // Create a list item for the order
        const orderListEl = document.createElement('li');

        // Set the text content of the list item to the item name
        orderListEl.textContent = itemName;
        // Append the list item to the order items list
        orderItemsEl.appendChild(orderListEl);

        // Calculate and update the total price
        // Update the text content of the order total element with the new total
        const itemPrice = 60;
        currentTotal += itemPrice;
        orderTotalEl.textContent = currentTotal.toFixed(2);
    };
}(); //immidiate invocation

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
