const ProductItem= ({data,addToCart})=> {
    debugger
const {id,name,price} = data;
    return (
        <div style={{border:"thin solid gray", padding: "1 rem"}}>
            <h4>{data.id}</h4>
            <h4>{data.name}</h4>
            <h4>${data.price}.00</h4>
            <button onClick={()=> addToCart (id)}> Agregar </button>
        </div>
    )
}

export default ProductItem; 