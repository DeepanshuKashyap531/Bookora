import Plans from "../plans/plans.component";
import './plansLists.styles.scss'

const plansPricing = [
  {
    id: 1,
    Title: "Montly Plan",
    description: "You can read some ebook that are under in this plan",
    ImageUrl:
      "https://img.freepik.com/free-vector/happy-facial-expression-white_1308-33214.jpg",
    price: 400,
  },
  {
    id: 2,
    Title: "Yearly Plan",
    description: "You can read all paid ebook online for a Year",
    ImageUrl:
      "https://img.freepik.com/free-vector/happy-face-expression-with-tears_1308-14005.jpg?t=st=1746018714~exp=1746022314~hmac=caaec6eb72eb2ea00cbe394dc8183be2b00fca68711f0536db5354bdaf931d50&w=740",
    price: 4400,
  },
  {
    id: 3,
    Title: "Permanent Plan",
    description: "You can read all ebooks and download forever",
    ImageUrl:
      "https://img.freepik.com/free-vector/expressive-cartoon-face-illustration_1308-165454.jpg?t=st=1746018764~exp=1746022364~hmac=a94d4a2dd8b2ba2a17440e09f0c0eaddcbe58e7535e233d15c714c35bde26236&w=740",
    price: 15000,
  },
];

const PlansLists = () => {
  return (
    <div className="planList-container">
     {plansPricing.map((category) => (
  <Plans key={category.id} category={category} />
))}
    </div>
  );
};

export default PlansLists;
