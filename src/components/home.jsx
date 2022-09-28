import React from "react";
import Flecha from '../assets/arrow-right.svg';
import Fotos from '../assets/fotos.svg';
import Hero from '../assets/hero.svg';
import Mochila from '../assets/mochi.svg';
import Mujer from '../assets/mujer.svg';
import Search from '../assets/search.svg';
import Tablet from '../assets/tablet.svg';
import ComillaArriba from '../assets/comilla-arriba.svg';
import ComillaAbajo from '../assets/comilla-abajo.svg';
import '../components/style.scss';


const Home = ()=>{
    return (
        <>
        <div className="body_home__general">
            <div className="body_home__general-hero">

                <div className="hero_nav__contenedor">
                    <div className="nav_contenedor__logo">

                        <a href="#">MKTContent</a>

                    </div>

                    <div className="nav_contenedor__sections">
                        <a href="#">
                            Home
                        </a>
                        <a href="#">
                            Proyectos
                        </a>
                        <a href="#">
                            Blog
                        </a>
                        <a href="#">
                            Precios
                        </a>
                        <a href="#">
                            Contacto
                        </a>
          
                    </div>
                    <div className="nav_contenedor__input">
                        <button className="button_active">Contactar</button>
                        <button className="button_inactive"><img src={Search} alt="lupa-buscador" /></button>
                    </div>
                </div>

                <div className="hero_header__contenedor">
                    <div className="header_contenedor__texto">
                        <h1>Potencia tu sitio web con nosotros</h1>
                        <h2>Ideamos la mejor estrategia de redes sociales de tu marca, optimizando el contenido.</h2>
                        <button className="button_active">Contactar</button>
                    </div>
                    <div className="header_contenedor__IMG">

                        <img src={Hero} alt="personas-trabajando" />

                    </div>
                </div>
            </div>

            <div className="body_home__general-main">

                <div className="main_section__cards">
                    <div className="cards_card__body">
                        <div className="cards_card__contenido">
                            <div className="card_contenido__titulo">
                                <img src={Tablet} alt="icono-tablet-3d" />
                                <h3>Redes Sociales</h3>
                            </div>
                            <div className="card_contenido__texto">
                                <p>Ideamos la mejor estrategia de redes sociales de tu marca, optimizando el contenido.</p>
                                <div className="texto_IMG">
                                <img src={Flecha} alt="flecha-apuntando-a-la-derecha" />   
                                </div>
                                
                            </div>
                        </div>                        
                    </div>

                    <div className="cards_card__body">
                        <div className="cards_card__contenido">
                            <div className="card_contenido__titulo">
                                <img src={Fotos} alt="icono-fotos-3d" />
                                <h3>Estrategia SEO</h3>
                            </div>
                            <div className="card_contenido__texto">
                                <p>Ideamos la mejor estrategia de redes sociales de tu marca, optimizando el contenido.</p>
                                <div className="texto_IMG">
                                <img src={Flecha} alt="flecha-apuntando-a-la-derecha" />
                                </div>
                                
                            </div>
                        </div>                        
                    </div>

                    <div className="cards_card__body">
                        <div className="cards_card__contenido">
                            <div className="card_contenido__titulo">
                                <img src={Mochila} alt="icono-mochila-3d" />
                                <h3>Email Marketing</h3>

                            </div>
                            <div className="card_contenido__texto">
                                <p>Ideamos la mejor estrategia de redes sociales de tu marca, optimizando el contenido.</p>
                                <div className="texto_IMG">
                                <img src={Flecha} alt="flecha-apuntando-a-la-derecha" />
                                </div>

                            </div>
                        </div>                        
                    </div>


                </div>

                <div className="main_section__numbers">
                    <div className="numbers_data">
                        <div className="data_texto">
                            <h4>900+</h4>
                            <p>Usuarios felices</p>
                        </div>
                    </div>
                    <div className="numbers_data">
                        <div className="data_texto">
                            <h4>600+</h4>
                            <p>Clietes recomendados</p>
                        </div>
                    </div>
                    <div className="numbers_data">
                        <div className="data_texto">
                            <h4>200+</h4>    
                            <p>Estrategias eficaces</p>
                        </div>
                    </div>
                    <div className="numbers_data--texto">
                        <div className="data_texto">
                            <p>Ideamos la mejor estrategia de redes sociales de tu marca, optimizando el contenido.</p>
                        </div>
                    </div>
                </div>

                <div className="main_section__testimonios">

                    <div className="testimonios_contenedor">
                        <div className="contenedor_testimonio__carrusel">
                            <div className="carrusel_IMG">
                                <img src={Mujer} alt="imagen-mujer-testimonios" />
                                
                            </div>
                            <div className="carrusel_texto">
                                <div className="texto_testimonio">
                                    <img src={ComillaArriba} alt="comillas-icono-abierto" /> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </p><img src={ComillaAbajo} alt="comillas-icono-cierre" className="comillas-cierre"/>                                    
                                </div>
                                    <div className="texto_nombre">
                                    <span className="nombre">Jonh Doe</span>
                                        <span className="cargo">CEO & Founder</span>
                                    </div>

                            </div>

                        </div>

                        <div className="contenedor_testimonio__texto">
                            <h4>Clientes y usuarios nos respaldan</h4>
                            <p>Ideamos la mejor estrategia de redes sociales de tu marca, optimizando el contenido.</p>
                            <button className="button_active">Contactar</button>
                        </div>
                    </div>

                </div>

                <div className="main_section__servicios">

                    <div className="servicios_titulo">
                        <h4>Servicios y valores</h4>
                        <p>Ideamos la mejor estrategia de redes sociales de tu marca, optimizando el contenido.</p>
                        <button className="button_active">Contactar</button>
                    </div>

                    <div className="servicios_cards__contenedor">
                        <div className="cards_contenedor_card">
                            <div className="card_IMG">
                                <img src={Tablet} alt="icono-tablet-3d" />
                            </div>
                            <div className="card_texto">
                                <h5>Redes Sociales</h5>
                                <p>Ideamos la mejor estrategia de redes sociales de tu marca, optimizando el contenido.</p>
                            </div>
                            <div className="card_precio">
                                <h6>$99,99</h6>
                            </div>
                            <div className="card_button">
                                <img src={Flecha} alt="flecha-apuntando-a-la-derecha-imagen" />
                            </div>
                        </div>

                        <div className="cards_contenedor_card">
                        <div className="card_IMG">
                                <img src={Fotos} alt="icono-fotos-3d" />
                            </div>
                            <div className="card_texto">
                                <h5>Redes Sociales</h5>
                                <p>Ideamos la mejor estrategia de redes sociales de tu marca, optimizando el contenido.</p>
                            </div>
                            <div className="card_precio">
                                <h6>$99,99</h6>
                            </div>
                            <div className="card_button">
                                <img src={Flecha} alt="flecha-apuntando-a-la-derecha-imagen" />
                            </div>
                        </div>

                        <div className="cards_contenedor_card">
                        <div className="card_IMG">
                            <img src={Mochila} alt="icono-mochila-3d" />
                            </div>
                            <div className="card_texto">
                                <h5>Redes Sociales</h5>
                                <p>Ideamos la mejor estrategia de redes sociales de tu marca, optimizando el contenido.</p>
                            </div>
                            <div className="card_precio">
                                <h6>$99,99</h6>
                            </div>
                            <div className="card_button">
                                <img src={Flecha} alt="flecha-apuntando-a-la-derecha-imagen" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="main_section__newsletter">

                    <div className="newsletter_contenedor">
                        <h4>Newsletter</h4>
                        <p>Ideamos la mejor estrategia de redes sociales de tu marca, optimizando el contenido.</p>

                        <div className="contenedor_input">
                            <input type="text" placeholder="placeholder-light"/><button><img src={Flecha} alt="flecha-apuntando-a-la-derecha-imagen" /></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}

export default Home;