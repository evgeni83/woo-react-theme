import { gql, useQuery } from "@apollo/client";
import { Fragment } from "react";
import MenuItem from "./MenuItem";
import './Menu.scss';

const Menu = () => {
    const GET_MENU_ITEMS = gql` {
        menuItems(where: {location: PRIMARY}) {
            nodes {
              id
              databaseId
              parentDatabaseId
              order
              cssClasses
              label
              path
              menu {
                node {
                  slug
                }
              }
            }
          }
    }`;

    const { loading, error, data } = useQuery(GET_MENU_ITEMS);

    if (loading) return <p>menu is loading...</p>

    if (error) {
        console.error(error);
        return <p>See console</p>;
    }

    const nest = (items, databaseId = 0, link = 'parentDatabaseId') =>
        items
            .filter(item => item[link] === databaseId)
            .sort((a, b) => {
                if (a.order < b.order) {
                    return -1;
                }
                if (a.order > b.order) {
                    return 1;
                }
                return 0;
            })
            .map(item => ({ ...item, children: nest(items, item.databaseId) }));

    const renderNestedMenu = (nestedArray, isSubMenu = false) => {
        const listClasses = [
            'menu-list',
            isSubMenu ? 'sub-menu-list' : null
        ].join(' ');

        return (
            <ul className={listClasses}>
                {
                    nestedArray.map(item => {
                        const itemHasChildren = item.children.length > 0;

                        return (
                            <Fragment key={item.id}>
                                <MenuItem item={item} hasChildren={itemHasChildren}>
                                    {itemHasChildren ? renderNestedMenu(item.children, true) : null}
                                </MenuItem>
                            </Fragment>
                        )
                    })
                }
            </ul>
        )
    }

    return (
        <nav className="nav-menu">
            {renderNestedMenu(nest(data.menuItems.nodes))}
        </nav>
    )
}

export default Menu;