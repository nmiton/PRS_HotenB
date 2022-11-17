import React from "react";
import { Link } from "react-router-dom";

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            telephone: '',
            message: ''
        }
    }

    onNameChange(event) {
        this.setState({name: event.target.value})
    }

    onEmailChange(event) {
        this.setState({email: event.target.value})
    }

    onTelephoneChange(event) {
        this.setState({telephone: event.target.value})
    }

    onMessageChange(event) {
        this.setState({message: event.target.value})
    }

    handleSubmit( event ) {
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <section id="contact-wrapper">
                <h2>Contactez-nous : </h2>
                <div className="container">
                    <div className="contact-info">
                        <div className="contact-adresse">
                            <h3>Adresse :</h3>
                            <span>
                                Z.A du Ponteix <br />
                                87220 FEYTIAT <br />
                                France <br />
                            </span>
                        </div>
                        <div className="contact-email">
                            <h3>Email :</h3>
                            <a href="mailto:contact@hotenb-village.com">contact@hotenb-village.com</a>
                        </div>
                    </div>
                    <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Nom : *</label>
                            <input 
                                required 
                                type="text" 
                                placeholder="Nom" 
                                className="form-control" 
                                onChange={this.onNameChange.bind(this)}
                            />
                        </div>
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
                            <label htmlFor="telephone">Téléphone :</label>
                            <input 
                                type="tel" 
                                className="form-control" 
                                placeholder="Téléphone au format international (France : +33)" 
                                pattern="^\+(?:[0-9]●?){6,14}[0-9]$"
                                onChange={this.onTelephoneChange.bind(this)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message : *</label>
                            <textarea
                                required 
                                className="form-control" 
                                placeholder="Message" 
                                rows="5" 
                                onChange={this.onMessageChange.bind(this)}
                            >
                            </textarea>
                        </div>
                        <div className="form-checkbox">
                            <input 
                                type="checkbox" 
                                id="contact_request_accept_privacy_policy" 
                                name="contact_request_accept_privacy_policy" 
                                required
                            />
                            <label htmlFor="contact_request_accept_privacy_policy">J'ai lu et approuvé la <Link to="/donnees-personnelles">politique de confidentialité</Link></label>
                        </div>
                        <button type="submit" className="btn-sumbit">Envoyer</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Contact