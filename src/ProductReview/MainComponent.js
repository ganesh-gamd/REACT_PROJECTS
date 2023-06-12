import React from "react";
import { IoMdStar } from "react-icons/io";
import ProgressBar from "react-bootstrap/ProgressBar";

const MainComponent = () => {
    const now = 60;
    return (
        <div className="main-container py-2">
            <div className="main-container-child-one">
                <h4 className="main-container-child-one-heading">Ratings & Reviews</h4>
                <div>
                    <button class="_2KpZ6l  _1q9yVr" type="submit">
                        <span>Rate Product</span>
                    </button>
                </div>
            </div>
            {/* <div className="main-container-child-two"> */}
            <div className="main-container-child-two-div">
                <div className="d-flex">
                    <h3>4.6</h3>
                    <span className="icon-span">
                        <IoMdStar size={"1.5em"} />
                    </span>
                </div>
                <div></div>
            </div>
            <div className="main-container-child-three">
                <h4
                    className="main-container-child-three-heading text-secondary"
                    style={{ fontSize: "14px" }}
                >
                    35,467 Ratings & 1,372 Reviews
                </h4>
                <div></div>
            </div>
            <div className="main-container-child-four">
                <div className="main-container-child-four-div">
                    <div className="main-container-child-four-divTwo">
                        <h5
                            style={{ fontSize: "14px" }}
                            className="main-container-child-four-div-heading"
                        >
                            <span> 5</span>
                            <span className="icon-average-span">
                                <IoMdStar size={"0.8em"} className="icon-average" />
                            </span>
                        </h5>
                        <ProgressBar variant="success" now={100} />
                        <div className="main-container-child-four-divThree">
                            <span
                                className="text-secondary d-inline-block"
                                style={{ fontSize: "12px" }}
                            >
                                29,017
                            </span>
                        </div>
                    </div>

                    <div className="main-container-child-four-divTwo">
                        {" "}
                        <h5
                            style={{ fontSize: "14px" }}
                            className="main-container-child-four-div-heading"
                        >
                            4
                            <span className="icon-average-span">
                                <IoMdStar className="icon-average" size={"0.8em"} />
                            </span>
                        </h5>
                        <ProgressBar variant="success" now={80} />
                        <div className="main-container-child-four-divThree">
                            <span
                                className="text-secondary d-inline-block"
                                style={{ fontSize: "12px" }}
                            >
                                29,017
                            </span>
                        </div>
                    </div>
                    <div className="main-container-child-four-divTwo">
                        {" "}
                        <h5
                            style={{ fontSize: "14px" }}
                            className="main-container-child-four-div-heading"
                        >
                            3
                            <span className="icon-average-span">
                                <IoMdStar className="icon-average" size={"0.8em"} />
                            </span>
                        </h5>
                        <ProgressBar variant="success" now={60} />
                        <div className="main-container-child-four-divThree">
                            <span
                                className="text-secondary d-inline-block"
                                style={{ fontSize: "12px" }}
                            >
                                29,017
                            </span>
                        </div>
                    </div>
                    <div className="main-container-child-four-divTwo">
                        {" "}
                        <h5
                            style={{ fontSize: "14px" }}
                            className="main-container-child-four-div-heading"
                        >
                            2
                            <span className="icon-average-span">
                                <IoMdStar className="icon-average" size={"0.8em"} />
                            </span>
                        </h5>
                        <ProgressBar variant="danger" now={40} />
                        <div className="main-container-child-four-divThree">
                            <span
                                className="text-secondary d-inline-block"
                                style={{ fontSize: "12px" }}
                            >
                                29,017
                            </span>
                        </div>
                    </div>
                    <div className="main-container-child-four-divTwo">
                        {" "}
                        <h5
                            style={{ fontSize: "14px" }}
                            className="main-container-child-four-div-heading"
                        >
                            1
                            <span className="icon-average-span">
                                <IoMdStar className="icon-average" size={"0.8em"} />
                            </span>
                        </h5>
                        <ProgressBar variant="danger" now={20} />
                        <div className="main-container-child-four-divThree">
                            <span
                                className="text-secondary d-inline-block"
                                style={{ fontSize: "12px" }}
                            >
                                29,017
                            </span>
                        </div>
                    </div>
                </div>

                <div></div>
            </div>
        </div>
    );
};

export default MainComponent;
