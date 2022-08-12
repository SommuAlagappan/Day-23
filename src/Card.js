import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function Card({item}) {
    return <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
            <div className="card-body">
                <h5 class="card-title text-muted text-uppercase text-center">{item.plan}</h5>
                <h6 class="card-price text-center">{item.currency}{item.price}<span class="period">/{item.period}</span></h6>
                <hr />
                <ul className="fa-ul">
                    {
                        item.features.map((item) => {
                            return <li className={item.isEnable ? "" : `text-muted`}>

                                <span className="fa-li">
                                    {
                                        item.isEnable ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faTimes} />
                                    }

                                </span>
                                <span>
                                    {
                                        item.isBold ? <strong>{item.title}</strong> : item.title
                                    }
                                </span>
                            </li>
                        })
                    }
                </ul>
                <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
            </div>
        </div>
    </div>


}

export default Card;