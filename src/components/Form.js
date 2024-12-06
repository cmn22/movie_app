import React, { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";

const Form = ({ formData }) => {
    const [message, setMessage] = useState("");
    const [showPass, setShowPass] = useState(false);

    const [formState, setFormState] = useState(
        formData.flat().reduce((acc, field) => ({ ...acc, [field.name]: "" }), {})
    );

    console.log(formState['email']);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    };

    const authenticate = (event) => {
        let message = "TODO: Making request to backend";
        event.preventDefault();
        for(const row of formData){
            for(const field of row){
                if  (!formState[field.name]){
                    message="Please fill all required formData";
                    break;
                }
            }
        }
        setMessage(message);

    };
    return (
        <React.Fragment>
            {formData.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    style={{
                        display: "flex",
                        gap: "1rem",
                        justifyContent: "space-between",
                    }}
                >
                    {row.map((field, fieldIndex) => (
                        <div key={fieldIndex} style={{flex: 1}}>
                            <label htmlFor={field.name}>{field.label}</label>
                            <input
                                type={showPass? 'text':field.type}
                                id={field.name}
                                name={field.name}
                                value={formState[field.name]}
                                onChange={handleChange}
                                style={{width: "100%"}}
                            />
                            { field.type === "password" ? (
                                <span
                                    onClick={(e) => setShowPass(!showPass)}
                                    style={{cursor: "pointer"}}
                                >
                                <span>
                                  {showPass ? (
                                      <FontAwesomeIcon icon={faEye} className="customIcon"/>
                                  ) : (
                                      <FontAwesomeIcon icon={faEyeSlash} className="customIcon"/>
                                  )}
                                </span>
                              </span>

                            ): null

                            }
                        </div>
                    ))}
                </div>
            ))}
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
};

export default Form;