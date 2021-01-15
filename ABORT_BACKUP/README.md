# Resumé

## 🚨 AVISO 🚨

**SOLUCIÓN ABORTADA:** Lo reconozco, fue mi error.

Yo había calculado que no iba a tener interferencia con jQuery pues no estaba llamando a esta librería para algo crítico. Pero jQuery, en su corazón, en algún momento va a querer comunicarse con el DOM. Ahora lo sé. Es decir, calculé mal.
Hay una [solución](https://github.com/tudorgergely/jquery-plugin-nextjs) propuesta por [tudor.gergely](https://stackoverflow.com/a/61040108), pero como se podrá ver, es sucia, y que así, es justamente el tipo de parches a los que rechazo.
Pero por sobre todo, me hizo reflexionar que lo que Tudor Gergely puso en su solución: «Use antiguos complementos de jQuery en NextJS...».
Ese "old"... por favor. Justo hoy leí exactamente lo mismo sobre Dreamweaver.
El mundo React los ha metido a la bolsa de lo vintage.

---

## Presentación

**_[Deploy](https://zherar7ordoya.vercel.app/)_**

Inicié este proyecto con la idea de mente de aplicar a un caso concreto todo ese camino que va desde el maquetado hasta el despliegue. Cosa rara. El hacer un resumé se ha convertido en un desafío pues, como decimos en Argentina, "pongo toda la carne en la parrilla". Es decir, siempre he tratado de que un documento tan significativo diga mucho simplemente por la forma en que está hecho.
Pero en esta ocasión, hacerlo me ha puesto a reflexionar sobre si no estoy haciendo una arquitectura más que un desarrollo.
Pero al margen de eso, lo que sí me queda claro es que he llegado a un punto en el que quiero (necesito) herramientas que me permitan construir aplicaciones sin tener que repetir siempre las mismas bases.
Así que, en cuanto termine esta propuesta, me voy a poner manos a la obra en la búsqueda de estas herramientas de construcción.

## Bitácora

- Usaré como base el esquema de [JSON Resume](https://jsonresume.org/schema/). Me ha gustado su idea de consumir una API para generar una cartera (portafolio). Sin embargo, el esquema propuesto tiene un par de faltantes que, en mi experiencia, no deberían estar ausentes (por ejemplo, los proyectos). De otro modo, me hubiera quedado con la propuesta así como está. De todas maneras, lo uso como guía porque, después de todo, acumula la experiencia personal de muchos otros desarrolladores.
- **SEO (search engine optimization: posicionamiento en buscadores, optimización en motores de búsqueda):** Originalmente, me había decantado por una [librería](https://github.com/garmeeh/next-seo) que, en la mayor parte de los casos, ya es una solución [probada](https://codesandbox.io/s/3194op0r6m). Sin embargo, esta opción no es viable: si bien las instrucciones del repositorio han sido actualizadas hace un par de meses, el ejemplo que encontré (y que sigue fielmente a ese texto) usa la versión 7.0.2 de NextJS, y en esta (la 10.0.4) NextJS me señala errores en la librería. La solución de [St_Mute](https://stackoverflow.com/a/55849835/14009797), que es muy parecida, tiene problemas parecidos también. FINALMENTE Flavio Copes vino al rescate una vez más: [la solución que funcionó](https://www.freecodecamp.org/news/the-next-js-handbook/#populating-the-head-tag-with-custom-tags).
- **Contenedor (Wrapper) para BODY:** La plantilla tiene una clase CSS para BODY. La verdad, no había enfrentado nunca una cosa así. He tomado la solución de [Sebastien Lorber](https://stackoverflow.com/a/31757397/14009797) por haber resultado efectiva al primer intento, lo cual me lleva a dilucidar con más claridad lo que hacen los CHILDREN en ReactJS. Lo agrego a pendientes.

---

## Pendientes

- [x] Otro cambio a introducir es que no usaré a Heroku como alojamiento.

- [x] Simplificar el redireccionamiento (no usar DNS).

- [ ] El uso de los CHILDREN.

- [x] No olvidar créditos.

- [x] No olvidar bitácora.

---

## Créditos

- **Plantilla:** ➡️ [Prateek Mishra](https://github.com/0xPrateek/Portfolio-Template).
- **Tags:**      ➡️ [miarroba](https://metatags.miarroba.com/)
- **Icons:**     ➡️ [SimpleIcons.org](https://simpleicons.org/)
- **Imagen:**    ➡️ [(In)Humanity](https://electricathenaeum.com/2019/08/13/inhumanity/)
- **Imagen:**    ➡️ [Algorithm](https://dribbble.com/shots/5819252-Machine-Learning-Algorithm)
- **Imagen:**    ➡️ [Rubik](http://universo.math.org.mx/2016-1/Rubik/rubikfiguras/)
- **Tarjeta:**   ➡️ [CodePen](https://codepen.io/faelplg/pen/MWwxred)
- **Head:**      ➡️ [CodeSandbox](https://codesandbox.io/s/3194op0r6m?file=/pages/index.js)

---

✨ Made with 🧡 by Gerardo⭐Tordoya in 🇦🇷
