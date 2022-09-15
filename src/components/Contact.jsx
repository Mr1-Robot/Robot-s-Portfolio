import React, { useState } from 'react'
import '../index.css'

const Contact = () => {

  const valuesObj = { name: "", email: "", textArea: ""};
  const [ values, setValues ] = useState(valuesObj);
  const [focused, setFocused] = useState(false);

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      errorMessage: "Name is required, between '3-16' characters",
      placeHolder: "Enter your name",
      style:
        "p-2 bg-transparent border-2 rounded-md text-white focus:outline-none peer",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },

    {
      id: 2,
      name: "email",
      type: "email",
      errorMessage: "Email is required!",
      placeHolder: "Enter your email",
      style:
        "p-2 bg-transparent border-2 rounded-md text-white focus:outline-none peer",
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name] : e.target.value})
  }

  console.log(values)

  const handleFocus = (e) => {
    setFocused(true);
  }

    return (
      <div
        name="contact"
        className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-14">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Contact
            </p>
            <p className="py-8">
              Submit the form below to get in touch with me
            </p>
          </div>
          <div className="flex justify-center items-center relative">
            <form
              onChange={onChange}
              action="https://getform.io/f/1a45c8bd-f2ea-4735-9e44-e7d6ad25fdae"
              method="POST"
              className="flex flex-col gap-5 w-[40rem] md:1/2"
            >
              {inputs.map(
                ({
                  id,
                  name,
                  errorMessage,
                  type,
                  placeHolder,
                  style,
                  required,
                  pattern,
                }) => (
                  <div className=" flex flex-col gap-3">
                    <input
                      onChange={onChange}
                      key={id}
                      type={type}
                      name={name}
                      placeholder={placeHolder}
                      className={style}
                      value={valuesObj[inputs.name]}
                      required={required}
                      pattern={pattern}
                      onBlur={handleFocus}
                      focused={focused.toString()}
                    />
                    <span className="text-red-500 invisible">
                      {errorMessage}
                    </span>
                  </div>
                )
              )}
              <textarea
                onChange={onChange}
                name="textArea"
                id=""
                value={valuesObj[inputs.textArea]}
                rows="10"
                placeholder="Please leave me a message here"
                className="relative peer p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                required
              >
              </textarea>
              
              <button
                className="text-white
                            bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
              >
                Let's talk
              </button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default Contact