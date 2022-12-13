const GlassCard = function ( {title, description, price, stock} ){
    return (
        <div className="margin_card">
            <div>{title}</div>
            <div>{description}</div>
            <div>{price}</div>
            <div>{stock}</div>
        </div>
    )
}
export default GlassCard