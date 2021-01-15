const List = props => (
    <ul className='etabs'>
        <li className='tab' id="tab-about">
            <a href="#about">
                <i className="icon-user"></i>
                <span>Portada</span>
            </a>
        </li>
        <li className='tab'>
            <a href="#certificados">
                <i className="icon-star"></i>
                <span>Certificados</span>
            </a>
        </li>
        <li className='tab'>
            <a href="#portfolio">
                <i className="icon-heart"></i>
                <span>Proyectos</span>
            </a>
        </li>
        <li className='tab'>
            <a href="#contact">
                <i className="icon-envelope"></i>
                <span>Contacto</span>
            </a>
        </li>
    </ul>
)

export default List
