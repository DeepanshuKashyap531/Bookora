import './navigation.styles.scss';
import { Link } from 'react-router-dom';
import {ReactComponent as Bookera } from '../../assests/bookeramain.svg';
import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';

const Navigation = () => {
    return(
        <Fragment>
        <div className="navigation-container">
               <div className="nav-content">
                    <Link to='/' className="logo">
                        <Bookera />
                    </Link>
                    <ul className="nav-links">
                       <Link to='/signIn' className='link'>Login <i class="fa-solid fa-user"></i></Link>
                       <Link className='link'>Your Library <i class="fa-solid fa-book"></i></Link>
                       <Link className='link'>History <i class="fa-solid fa-clock"></i></Link>
                       <Link to='/plans' className='link'>Subscription Plans <i class="fa-solid fa-money-bill"></i></Link>
                       <Link to='/marketPlace' className='link'>MarketPlace <i class="fa-solid fa-shop"></i></Link>
                    </ul>
    </div>
        </div>
          <Outlet />
        </Fragment>
    )
}

export default Navigation