import React from "react"
import { Link } from "react-router-dom"


export default function End() {

    const [formData, setFormData] = React.useState(
        {
            email: "",
        }
    )

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        console.log(formData)
    }

    return (
        <>
            <div className="eplsm-main mt-5">
                <div className="my-5 mx-5">
                    <div className="row ">
                        <div className="col-md-3 text-start ">
                            <h1 className="eplsm">EPLSM</h1>
                            <p className="eplsm-text mt-5">400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA</p>
                        </div>

                        <div className="col-md-2 text-start end-row">
                            <Link to="" className="end-main"><p>Links</p></Link>
                            <Link to="/" className="end-texts" ><p>Home</p> </Link>
                            <Link to="/products" className="end-texts" ><p>Products</p></Link>
                            <Link to="" className="end-texts" ><p>About</p></Link>
                            <Link to="/contact" className="end-texts" ><p>Contact</p></Link>
                        </div>
                        <div className="col-md-2 text-start end-row">
                            <Link to="" className="end-main"><p>Help</p></Link>
                            <Link to="" className="end-texts" ><p>Payment Options</p></Link>
                            <Link to="" className="end-texts" ><p>Returns</p></Link>
                            <Link to="" className="end-texts" ><p>Privacy Policies</p></Link>
                        </div>

                        <div className="col-md-3 text-start end--row">
                            <a href="" className="end-main"><p>Newsletter</p></a>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    onChange={handleChange}
                                    className="input-email"
                                    name="email"
                                    value={formData.email}
                                />
                                <button className="end-button">SUBSCRIBE</button>
                            </form>
                        </div>

                        <div className="end--line mt-3">
                            <p className="mt-5 end-line--text">2023 EPLSM. All rights reverved</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}  