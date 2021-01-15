const Portada = props => (
    <div id="about">
        <section className="clearfix">
            <div className="g2">
                <div className="photo">
                    <img src="./images/rubik.gif" alt="Gerardo Tordoya" />
                </div>
                <div className="info">
                    <h2>Gerardo Tordoya</h2>
                    <h4>FULLSTACK⭐DEVELOPER</h4>
                </div>
            </div>
            <div className="g1">
                <div className="main-links sidebar">
                    <b>
                        <ul>
                            <li>
                                <a href="#certificados">Certificados</a>
                            </li>
                            <li>
                                <a href="#portfolio">Proyectos</a>
                            </li>
                            <li>
                                <a href="#contact">Contacto</a>
                            </li>
                        </ul>
                    </b>
                </div>
            </div>
            <div className="break"></div>
            <p className="joker">
                <i><br />Un experto en todos los oficios es un maestro de ninguno, pero a menudo es mejor que un maestro de uno.</i>
            </p>
        </section>
    </div>
)

export default Portada
