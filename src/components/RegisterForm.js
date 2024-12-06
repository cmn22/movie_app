import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const RegisterForm = () => {
    const [message, setMessage] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [data, setData] = useState({
        firstName:"",
        email: "",
        password: "",
        country:"",
        area:"",
        city:"",
    });

    const authenticate = (event) => {
        console.log(data);
        event.preventDefault();
        if (!data.email || !data.password || !data.country || !data.area || !data.firstName || !data.city) {
            setMessage("Please fill all required fields");
        } else {
            setMessage("TODO: Making request to backend");
        }
    };

    return (
        <React.Fragment>
            <div style={{ display: 'flex'}}>
                <div style={{flex:1 , marginLeft: '2px', marginRight: '2px'}}>
                    <label className="firstName">First Name</label>
                    <input
                        type="text"
                        className="firstName"
                        onChange={(e) => setData({...data, firstName: e.target.value})}
                    />
                </div>
                <div style={{flex:1, marginLeft: '2px', marginRight: '2px'}}>
                    <label className="email">Email</label>
                    <input
                        type="text"
                        className="email"
                        onChange={(e) => setData({...data, email: e.target.value})}
                    />
                </div>

            </div>
            <div style={{marginLeft: '2px', marginRight: '2px'}}>
                <label className="password">Password</label>
                <input
                    type={showPass ? "text" : "password"}
                    className="password"
                    onChange={(e) => setData({...data, password: e.target.value})}
                />
                <span onClick={(e) => setShowPass(!showPass)} style={{cursor: "pointer"}}>
                <span>
                  {showPass ? (
                      <FontAwesomeIcon icon={faEye} className="customIcon"/>
                  ) : (
                      <FontAwesomeIcon icon={faEyeSlash} className="customIcon"/>
                  )}
                </span>
                </span>
            </div>
            <div style={{display: 'flex'}}>
                <div style={{flex: 1, marginLeft: '2px', marginRight: '2px'}}>
                    <label className="country">Country</label>
                    <input
                        type="text"
                        className="country"
                        onChange={(e) => setData({...data, country: e.target.value})}
                    />
                </div>
                <div style={{flex: 1, marginLeft: '2px', marginRight: '2px'}}>
                    <label className="area">Area</label>
                    <input
                        type="text"
                        className="area"
                        onChange={(e) => setData({...data, area: e.target.value})}
                    />
                </div>
                <div style={{flex:1, marginLeft: '2px', marginRight: '2px'}}>
                    <label className="city">City</label>
                    <input
                        type="text"
                        className="city"
                        onChange={(e) => setData({...data, city: e.target.value})}
                    />
                </div>

            </div>

            <button className="submit" onClick={(e) => authenticate(e)}>
                submit
            </button>
            <span
                style={{display: "flex", justifyContent: "center", marginTop: "20px"}}
            >
        {message}
      </span>
        </React.Fragment>
    );
}

export default RegisterForm
