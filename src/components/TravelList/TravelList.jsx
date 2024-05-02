import styles from "./TravelList.module.css";

const TravelList = ({ list , onDelete }) => {
  const travelList = list.map((item) => {
    const {id , description, destination, image, totalCost } = item;

    const greatDealMarkup = (
      <>
        <p>
          <span className={styles.price}>Price:</span> {totalCost}€
        </p>
        <p className={[styles.label , styles.labelSecondary].join(' ')}>Great Deal</p>
      </>
    );

    const premuimMarkup = (
      <>
        <p>
          <span className={styles.price}>Price:</span> {totalCost}€
        </p>
        <div className={styles.premuimContainer}>
          <p className={[styles.label , styles.labelPrimary].join(' ')}>Premuim</p>
          <p className={[styles.label , styles.labelPrimary].join(' ')}>All-inclusive</p>
        </div>
      </>
    );

    return (
      <div key={id} className={styles.card}>
        <div className={styles.imageContainer}>
          <img className={styles.cardImage} src={image} alt={description} />
        </div>
        <div>
          <h2>{destination}</h2>
          <p className={styles.description}>{description}</p>

          {totalCost <= 350 && greatDealMarkup }
          {totalCost >= 1500 && premuimMarkup }

          <button onClick={() => {
            onDelete(id)
          }} className={styles.btn}>Delete</button>
        </div>
      </div>
    );
  });
  return <div>{travelList}</div>;
};

export default TravelList;
