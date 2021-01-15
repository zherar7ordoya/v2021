const Tabs = ({ children }) => (
    <div id="tab-container" className="tab-container">
        {/* COMIENZ SECCIONES DENTRO DE PESTAÑAS */}
        <div>{children}</div>
        {/* TERMINA SECCIONES DENTRO DE PESTAÑAS */}
    </div>
);

export default Tabs