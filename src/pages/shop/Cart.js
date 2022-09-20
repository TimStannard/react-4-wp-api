import { useAxios } from "use-axios-client";
import PlaceholderImage from "../../assets/placeholder-no-image.png"
import { Link } from "react-router-dom";

const baseUrl = process.env.REACT_APP_WOO_BASEURL

const GetCart = ({ cartKey }) => {
    const cartEndpoint = `${baseUrl}/wp-json/cocart/v2/cart/?cart_key=${cartKey}`
    // console.log(cartEndpoint);

    const { data: cart, error, loading } = useAxios({
        url: cartEndpoint
    })

    // ----Check if cart has been returned----
    if (loading) return "Loading...";
    if (!cart) return "No data...";
    // if (products.length === 0) return "No results found!";
    if (error) return "Error!";

    const productList = [...cart.items]
    console.log(cart);

    // this function maps and returns all products from cart
    const renderedProducts = productList.map((product, index) => {
        const GetImageOrPlaceholder = () => {
            if (product.featured_image !== "") {
                return (
                    <img src={product.featured_image} alt={product.name} />
                )
            } else {
                return (
                    <img src={PlaceholderImage} alt="placeholder" />
                )
            }
        }
        return (
            <div className="product-container item-container" key={index}>
                <GetImageOrPlaceholder />
                <div id="cart-item-details">
                    <p className="name"><b>{product.name}</b></p>
                    <p><b>Quantity:</b> {product.quantity.value}</p>
                    <p><b>Subtotal:</b> ${product.totals.subtotal}</p>
                </div>
            </div>

        )
    })

    const Total = () => {
        return (
            <div id="total-container">
                <p><b>Total:</b> {cart.currency.currency_code} {cart.currency.currency_symbol}{cart.totals.subtotal}</p>
            </div>
        )
    }

    return (
        <>
            <div id="rendered-products">
                {renderedProducts}
            </div>
            <Total />
            <Link to={`/checkout`} >
                <button className="regular-button">Checkout</button>
            </Link>
        </>
    )
}

const Cart = () => {
    // check if a cart already exists
    const localStorageCartKey = localStorage.cartKey;
    // console.log(localStorageCartKey)
    return (
        <div id="cart-container" className="page-container">
            <div className="section">
                <h2>Cart</h2>
                {localStorageCartKey && <GetCart cartKey={localStorageCartKey} />}
                {!localStorageCartKey && "No items in cart!"}
            </div>
        </div>
    )
}

export default Cart