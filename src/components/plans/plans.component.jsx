import './plans.styles.scss';

const Plans = ({ category }) => {
    if (!category) return null; // Defensive check

    const { ImageUrl, Title, description, price } = category;

  return (
    <div className="plansCard-container">
      <div className="plansImg">
        <img src={ImageUrl} alt={Title} />
      </div>
      <div className="plansText">
        <h2>{Title}</h2>
        <p>{description}</p>
        <h2>₹{price}</h2>
        <div className="button-container">
          <button className='purchase-button'>Purchase Now</button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
