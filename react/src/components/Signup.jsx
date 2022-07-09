import React, { Component } from "react";

class Signup extends Component {
    handleSubmit = (e) => {
        let data = new FormData(e.target);
        var json = {};
        for (const [key, value] of data) {
            json[key] = value;
        }
        fetch("http://localhost:4000/user/new", {
            method: "POST",
            body: JSON.stringify(json),
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => response.json())
            .then((value) => console.log(value));
        e.preventDefault();
    };

    render() {
        return (
            <div id="page-signup" className="page-container">
                <div id="contents">
                    <h1>Sign up</h1>
                    <form
                        onSubmit={(e) => {
                            this.handleSubmit(e);
                        }}
                    >
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                        ></input>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                        ></input>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;
