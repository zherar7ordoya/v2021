//import * as React from 'react'

// Esta DIV SOUP ya vino en la plantilla.

const Body = ({ children }) => (
    <body className="bg-fixed bg-1">
        <div className="main-container">
            <div className="main wrapper clearfix">

                {/* COMIENZ SECCIONES DENTRO DEL BODY */}
                <div>{children}</div>
                {/* TERMINA SECCIONES DENTRO DEL BODY */}
                
            </div>
        </div>
    </body>
);

export default Body
