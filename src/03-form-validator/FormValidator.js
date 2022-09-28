import { useState } from "react";

export default function FormValidator() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // * Other Approach
    // let checkEmail = /(.+)@(.+){2,}\.(.+){2,}/.test(email);
    if (email === "" || email.indexOf("@") === -1) {
      setMessage("An email must have exactly one @ sign!");
    } else if (
      password === "" ||
      password.length < 8 ||
      passwordConfirm.length < 8
    ) {
      setMessage("Password and Confirm Password must be 8 characters or long!");
    } else if (password !== passwordConfirm) {
      setMessage("Password and Confirm Password are not same!");
    } else {
      setMessage("SUCCESS, Form submitted sucessfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up!</h2>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password-confirm">Confirm Password </label>
      <input
        type="password"
        name="password-confirm"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      {message}
      <input type="submit" value="Submit" />
    </form>
  );
}
