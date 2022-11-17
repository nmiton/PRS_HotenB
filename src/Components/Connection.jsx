import React from "react";
import { Link } from "react-router-dom";

class Connection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: '',
        }
    }

    onNameChange(event) {
        this.setState({password: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }


    handleSubmit( event ) {
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <section id="connection-wrapper">
                <h2>Connexion : </h2>
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">
                            <label htmlFor="email">Adresse email : *</label>
                            <input 
                                required 
                                type="email" placeholder="Email" 
                                className="form-control" 
                                aria-describedby="emailHelp" 
                                onChange={this.onEmailChange.bind(this)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Mot de passe : *</label>
                            <input 
                                required 
                                type="text" 
                                placeholder="Mot de passe" 
                                className="form-control" 
                                onChange={this.onNameChange.bind(this)}
                            />
                        </div>
                        <button type="submit" className="btn-sumbit">Connexion</button>
                    </form>

            </section>
        )
    }
}

export default Connection