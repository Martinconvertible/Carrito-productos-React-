const CartItem =({data, delFromCart}) => {
    debugger
    let {id, name, price, quantity}= data;
    

    return (
        <div className="grid-responsive">
            <h6> {name} </h6>
            <h5> {price} x {quantity}=$ {price*quantity} </h5>
            <h6>{id}</h6>
            <h6>Cantidad {quantity} unidades</h6>
            <button > </button>

        </div>

    )

}

export default CartItem