const AddToCart = (productId, responseReceived, notificationMessage) => {

    // console.log("clicked add to cart")
    // console.log(added);
    // Test the co-cart is plugged in and working
    // Run a GET  to the following endpoint:
    // ​http://localhost:8888/wordpress-api/wp-json/cocart/v2/store

    // make the product ID a string so it can be interpreted by the coCart API
    // (id and quantity properties are strings) - see https://docs.cocart.xyz/?javascript--node#add-to-cart-clear-cart-parameters
    const idString = productId.toString();

    // Update cart with new item
    const updateCart = (endpoint) => {
        // console.log("end point" + endpoint);
        axios.post(endpoint, {
            id: idString,
            quantity: "1"
        })
            .then((response) => {
                // console.log(response)
                responseReceived(true)
                notificationMessage("Successfully added to cart!")
                // set the cart key
                const uniqueCartKey = response.data.cart_key;
                localStorage.setItem('cartKey', uniqueCartKey)
            })
            .catch((error) => {
                console.log(error);
                responseReceived(true)
                notificationMessage("Sorry there was a problem. Please try again later.")
            });
    }

    // check if a cart already exists
    // if so, post to the unique cart based on the current cart_key

    if (localStorage.cartKey) {
        const cartEndpoint = `${baseUrl}/wp-json/cocart/v2/cart/add-item/?cart_key=${localStorage.cartKey}`
        updateCart(cartEndpoint)
    } else {
        const cartEndpoint = `${baseUrl}/wp-json/cocart/v2/cart/add-item`
        updateCart(cartEndpoint)
    }

}

export default AddToCart;