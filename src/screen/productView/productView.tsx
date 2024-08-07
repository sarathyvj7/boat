import "./productView.css";
import viewProduct from "../../Common/viewProduct/ProductDetails";
import ProductDetails from "../../Common/viewProduct/ProductDetails";
import { HeadPhones } from "../../Common/Data/HeadPhones";
const productView = () => {
  const viewcard = [
    {
      id: 1,
      imageurl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/280_lr.png?v=1721292483",
      name: "Airdopes280ANC",
      price: "1,299",
      discont: "6,999",
      offer: "81%off",
      details: "Enx™ Tech",
      noisecollection: "noisecollection",
      charge: "Asap™ Charge",
    },

    {
      id: 2,
      imageurl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/SPACE_LR.png?v=1721232197",
      name: "NirvanaSpace",
      price: "2,499",
      discont: "7,999",
      offer: "69%off",
      noisecollection: "noisecollection",
      charge: "Asap™ Charge",
      details: "Enx™ Tech",
    },
    {
      id: 3,
      imageurl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/255_Z_PLUS_d626c700-4ee7-4955-b159-ba8098932fd3.png?v=1721623208",
      name: "airdopes",
      price: "1,999",
      discont: "2,999",
      offer: "40%",
      noisecollection: "noisecollection",
      charge: "Asap™ Charge",
      details: "Enx™ Tech",
    },
    {
      id: 4,
      imageurl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/LR_SRA.png?v=1721220692",
      name: "airdopes",
      price: "1,999",
      discont: "2,999",
      offer: "40%",
      noisecollection: "noisecollection",
      charge: "Asap™ Charge",
      details: "Enx™ Tech",
    },
    {
      id: 5,
      imageurl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/diy_wfs_oasis.68.jpg?v=1721209018",
      name: "airdopes",
      price: "1,999",
      discont: "2,999",
      offer: "40%",
      noisecollection: "noisecollection",
      charge: "Asap™ Charge",
      details: "Enx™ Tech",
    },
    {
      id: 6,
      imageurl:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/immortal_158_banner1.76.jpg?v=1719218830",
      name: "airdopes",
      price: "1,999",
      discont: "2,999",
      offer: "40%",
      noisecollection: "noisecollection",
      charge: "Asap™ Charge",
      details: "Enx™ Tech",
    },
  ];
  return (
    <main className="product-bar">
      <p>Home Newlaunches</p>
      <section>
        <div>
          <h5>New Launches</h5>
        </div>
        <br />
        <br />
        <div className="button-view">
          <button>Filter</button>
          <button>shorBY</button>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            cursor: "pointer",
          }}
        >
          {viewcard.map((item) => {
            return (
              <ProductDetails
                id={item.id}
                imageurl={item.imageurl}
                name={item.name}
                price={item.price}
                discount={item.discont}
                offer={item.offer}
                details={item.details}
                noisecollection={item.noisecollection}
                charge={item.charge}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
};
export default productView;
