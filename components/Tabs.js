const Tabs = props => (
    <div id="tab-container" class="tab-container">


    <ul class='etabs'>

        <li class='tab' id="tab-about">
            <a href="#about">
                <i class="icon-user"></i>
                <span>
                    Portada
                </span>
            </a>
        </li>


        <li class='tab'>
            <a href="#certificados">
                <i class="icon-star"></i>
                <span>
                    Certificados
                </span>
            </a>
        </li>

        <li class='tab'>
            <a href="#portfolio">
                <i class="icon-heart"></i>
                <span>
                    Proyectos
                </span>
            </a>
        </li>

        <li class='tab'>
            <a href="#contact">
                <i class="icon-envelope"></i>
                <span>
                    Contacto
                </span>
            </a>
        </li>

    </ul>
</div> // NO ESTÁ EN EL ORIGINAL
)

export default Tabs