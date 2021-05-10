import { useHistory, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client/core";

const SingleProduct = () => {
    const { state } = useLocation();
    const history = useHistory();

    const GET_PRODUCT_BY_SLUG = gql`
        query GetProduct($id: ID!) {
            product(id: $id) {
                id
                databaseId
                name
                description
                image {
                    sourceUrl
                    altText
                }
                onSale
            }
        }`;

    const { loading, error, data } = useQuery( GET_PRODUCT_BY_SLUG, {
        variables: {
            id: state.id
        }
    } );

    if ( loading ) return <p>product is loading...</p>

    if ( error ) {
        console.error( error );
        return <p>See console</p>;
    }

    const { product } = data;

    return (
        <div className="single-product">
            <button onClick={() => { history.goBack() } }>Back</button>
            <h1>{ product.name }</h1>
            <img src={ product.image.sourceUrl } alt={ product.image.altText || "product-thumb" }/>
            <div className="description" dangerouslySetInnerHTML={ { __html: product.description } }/>
        </div>
    );
};

export default SingleProduct;
