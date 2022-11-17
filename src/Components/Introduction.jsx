function Introduction() {

    return (
        <section id="introduction-wrapper">
            <video id="background-video" height="240" autoPlay loop muted>
                <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"/>
            </video>
            <div className="overlay">
                <h1 className="span-intro">Votre logement est unique, nous en prenons soin.</h1>
            </div>
        </section>
    )
}

export default Introduction
