import { gql, useQuery } from "@apollo/client";

const GET_MENU_ITEMS = gql` {
    menuItems {
        edges {
            node {
                id
                label
                path
            }
        }
    }
}`;

function App() {
    const { loading, error, data } = useQuery( GET_MENU_ITEMS );

    if ( loading ) return <h1>Loading...</h1>

    if ( error ) {
        console.error( error );
        return <h2>See console</h2>;
    }

    console.log( data );

    return (
        <div className="App">
            <h1>Hello!!!</h1>
            <nav>
                <ul>
                    { data.menuItems.edges.map( item => (
                        <li key={ item.node.id }>
                            <a href={ item.node.path }>{ item.node.label }</a>
                        </li>
                    ) ) }
                </ul>
            </nav>
        </div>
    );
}

export default App;
