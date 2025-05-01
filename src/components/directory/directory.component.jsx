import './directory.styles.scss';
import { Link } from 'react-router-dom';


const Directory = () => {
    return (
        <div className="landing-container">
          <section className="hero">
            <h2>Unlimited Access to E-Books</h2>
            <p>Explore thousands of books anytime, anywhere on Bookera.</p>
            <Link to="/signIn"><button>Get Started</button></Link>
          </section>
    
          <section className="features" id="features">
            <div className="feature-box">
              <h3>Vast Library</h3>
              <p>Access fiction, non-fiction, and academic books.</p>
            </div>
            <div className="feature-box">
              <h3>Affordable Plans</h3>
              <p>Choose from monthly, yearly, or lifetime plans.</p>
            </div>
            <div className="feature-box">
              <h3>Cross-Platform</h3>
              <p>Read on mobile, tablet, or desktop seamlessly.</p>
            </div>
          </section>
    
          <section className="cta">
            <h2>Join Bookera Today</h2>
            <p>Start your reading journey now.</p>
            <Link to="/plans"><button>View Plans</button></Link>
          </section>
    
          <footer>
            <p>© 2025 Bookera. All rights reserved.</p>
          </footer>
        </div>
      );
    };


export default Directory;