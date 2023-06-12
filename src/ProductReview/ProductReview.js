import React from "react";
import { ImStarFull, ImStarEmpty } from "react-icons/im";
import "./ProductReview.css";
import productReviewConstant from "./productReviewConstant";
import MainComponent from "./MainComponent";

//display rating given by user
const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<ImStarFull key={i} className="mx-1 text-warning" size="1em" />);
    }
    for (let i = rating; i < 5; i++) {
        stars.push(<ImStarEmpty key={i} className="mx-1 text-warning" size="1em" />);
    }
    return stars;
};

const ProductReview = () => {
    return (
        <>
            <MainComponent />
            <section className="main">
                <div className="full-boxer">
                    {productReviewConstant.map((elem, index) => (
                        <div className="comment-box">
                            <div className="box-top">
                                <div className="Profile">
                                    <div className="profile-image">
                                        <img src={elem.img} />
                                    </div>
                                    <div className="Name">
                                        <strong>{elem.name}</strong>
                                        <span>{elem.timeDuration}</span>
                                        <div className="rating">{renderRatingStars(4)}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="comment">
                                <p>{elem.review}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default ProductReview;
