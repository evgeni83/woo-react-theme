import { Link } from "react-router-dom";

const ProductCard = ( { product } ) => {
    return (
        <Link to={{
            pathname: `/product/${product.slug}`,
            state: {
                id: product.id
            }
        }} className="product">
            <h2>{ product.name }</h2>
            <img src={ product.image.sourceUrl } alt={ product.image.altText || "product-thumb" }/>
            <p className="price">{ product.price }</p>
        </Link>
    );
};

export default ProductCard;
