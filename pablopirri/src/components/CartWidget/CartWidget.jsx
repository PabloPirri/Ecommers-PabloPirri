
const CartWidget = ({cantCarrito}) => {
    return (
        <>
            <button className="btn btn-danger">Carrito</button>
            <p>{cantCarrito}</p>
        </>
    );
}

export default CartWidget;
