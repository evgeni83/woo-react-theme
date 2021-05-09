import { NavLink } from "react-router-dom";

const MenuItem = ({ item, hasChildren, children }) => {
    const classes = [
        ...item.cssClasses,
        'menu-item',
        hasChildren ? 'menu-item-has-children' : null
    ].join(' ');

    return (
        <li className={classes} id={`menu-item-${item.databaseId}`}>
            <NavLink
                to={item.path}
                exact
                className={'menu-link'}
            >{item.label}</NavLink>
            { children}
        </li>
    )
};

export default MenuItem;