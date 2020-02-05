// Initializes the npm packages used
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

//Initializes the connection variable to sync with a mysql database
var connection = mysql.createConnection({
    host: "localhost",

    // your port: if its not 3306
    port: 3306,

    //your username
    user: "root",

    //your password:
    password: "password",
    database: "bamazon"
});

//Creates the connection with the server and loads the product data with a successful connection
connection.connect(function (err) {
    if (err) {
        console.error("error connection: " + err.stack);
    }
    loadProducts();
});

//function to load the products table from the database and print the results to the console.
function loadProducts() {
    //selects all of the data from the mysql products table
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        //draw the table in the terminal using the response
        console.table(res);
        //then prompt the cust for their choice of product
        promptCustomerForItem(res);
    });
}

//prompt the cust for a product ID
function promptCustomerForItem(inventory) {
    //prompts cust for what they want to purchase
    inquirer.prompt([
        {
            type: "input",
            name: "choice",
            message: "Whats the ID of the item you would like to purchase? [Quit with Q]",
            validate: function (val) {
                return !isNaN(val) || val.toLowerCase() === "q";
            }
        }
    ])
        .then(function (val) {
            //check if the user wants to quit the program
            checkIfShouldExit(val.choice);
            var choiceId = parseInt(val.choice);
            var product = checkInventory(choiceId, inventory);

            //if there is a product with the id the cust chose, prompt the cust with a quantity
            if (product) {
                //pass the chosen product to promptCustomerForQuantity
                promptCustomerForQuantity(product);
            } else {
                //otherwise let them know the item is not in the inventory re-run loadProducts
                console.log("\nThat item isnt in the Inventory.");
                loadProducts();
            }
        });
}

//prompt the customer for a product quantity
function promptCustomerForQuantity(product) {
    inquirer
        .prompt([
            {
                type: "input",
                name: "quantity",
                message: "How many would you like? [Quit with Q]",
                validate: function (val) {
                    return val > 0 || val.toLowerCase() === "q";
                }
            }
        ])
        .then(function (val) {
            //check if cust wants to quit the program
            checkIfShouldExit(val.quantity);
            var quantity = parseInt(val.quantity);

            //if there isnt enough of the product and quantity, let the user know then re run loadProducts
            if (quantity > product.stock_quantity) {
                console.log("\nInsufficient quantity!");
                loadProducts();
            } else {
                //otherwise run make purchase, and give it the product info and desired quantity to purchase
                makePurchase(product, quantity);
            }
        });
}

//purchase the desired quantity of the desired item
function makePurchase(product, quantity) {
    connection.query(
        "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
        [quantity, product.item_id],
        function (err, res) {
            //let the cust know the purchase was successful, re-run loadProducts
            console.log("\nSuccessfully purchased " + quantity + " " + product.product_name + "'s!");
            loadProducts();
        }
    );
}
//check to see if the product the cust chose exists in the inventory
function checkInventory(choiceId, inventory) {
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].item_id === choiceId) {
            //if a matching product is vounc, return the product
            return inventory[i];
        }
    }
    //otherwise return null
    return null;
}

//check to see if the cust wants to quit the program
function checkIfShouldExit(choice) {
    if (choice.toLowerCase() === "q") {
        //log a message and exit the current node process
        console.log("Goodbye!");
        process.exit(0);
    }
}