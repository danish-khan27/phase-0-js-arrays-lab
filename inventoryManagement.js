// Write your code here

// Create the products array
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Log the first product
function logFirstProduct() {
  console.log(products[0]);
}

// Add a new product to the array
function addProduct(productName) {
  products.push(productName);
}

// Update a product name at a given position
function updateProductName(position, newName) {
  if (position >= 0 && position < products.length) {
    products[position] = newName;
  }
}

// Remove the last product in the array
function removeLastProduct() {
  products.pop();
}



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
