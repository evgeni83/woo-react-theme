import { useParams } from 'react-router-dom';
import { gql, useQuery } from "@apollo/client";
import './Archive.scss';
import ProductCard from "./ProductCard";

const GET_PRODUCTS = gql`
    query GetProducts($category: String) {
        products(where: {status: "published", visibility: VISIBLE, category: $category}) {
            nodes {
                id
                databaseId
                name
                image {
                    altText
                    sourceUrl
                }
                onSale
                slug
                shortDescription
                ... on SimpleProduct {
                    price
                    regularPrice
                    salePrice
                }
                ... on GroupProduct {
                    price
                }
                ... on VariableProduct {
                    price
                    regularPrice
                    salePrice
                }
                ... on ExternalProduct {
                    price
                    regularPrice
                    salePrice
                }
            }
        }
    }
`;


const Archive = () => {
    const { prod_cat } = useParams();
    const { loading, error, data } = useQuery( GET_PRODUCTS, {
        variables: {
            category: prod_cat || ''
        }
    } );

    if ( loading ) return <p>products are loading...</p>

    if ( error ) {
        console.error( error );
        return <p>See console</p>;
    }

    console.log( data );

    let page_title = <h1>Shop</h1>;

    if ( prod_cat ) {
        page_title = <h1>Category: { prod_cat }</h1>
    }

    return (
        <div>
            { page_title }

            <div className="products">
                { data.products.nodes.map( product => <ProductCard key={ product.id } product={ product }/> ) }
            </div>
        </div>
    );
};

export default Archive;
