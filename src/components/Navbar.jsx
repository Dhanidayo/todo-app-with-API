import { useContext } from 'react';
import { AppContext } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';

//import styles
import styles from '../styles/navbar.module.css';

function Navbar() {
    
    const context = useContext(AppContext);
    const history = useHistory();

    const logout = () => {
        context.dispatch({
            type: 'LOGOUT',
        })
        history.push('/Login');
    }

    return (
        <nav className={styles.navbar}>
            {context.state.isLoggedIn ? (
                <>
                    <Link className={styles.navlink} to='/Home'>Home</Link>
                    <br />
                    <Link className={styles.navlink} to='/Login'>Login</Link>
                    <br />
                    <Link className={styles.navlink} to='/Register'>Register</Link>
                    <br />           
                </>
            ) : (
                <>
                    <Link className={styles.navlink}  to='/TodoList'>My Todo</Link>
                    <br />
                    <span className={styles.navlink} onClick={logout}>Logout</span>
                </>
            )}
        </nav>
    );
};

export default Navbar;