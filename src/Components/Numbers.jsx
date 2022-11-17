import Incrementer from "./Increment"

function Numbers() {
    return(
        <section id="numbers-wrapper">
            <h2>Quelques chiffres :</h2>
            <div className="container">
                <div className="card">
                    <span className="span_number customer_number">+<Incrementer end="15"/></span>
                    <span className="span_label">Clients satisfaits</span>
                </div>
                <div className="card">
                    <span className="span_number properties_number">+<Incrementer end="80"/></span>
                    <span className="span_label">Propiétés en location</span>
                </div>
                <div className="card">
                    <span className="span_number span_number_three">+<Incrementer end="50"/>%</span>
                    <span className="span_label">Augmentations de réservations</span>
                </div>
            </div>
        </section>
    )
}

export default Numbers
