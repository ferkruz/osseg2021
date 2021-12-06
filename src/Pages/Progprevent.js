import BreadKrumb from "../Components/BreadKrumb";
import { Container, Button, Row, Col } from "react-bootstrap";

function Progprevent (){
    const rutasPage=["Home","menuTipoUser", "menucat"]

    const progPrevent = [
        {
          titul: "DENGUE",
          bajada: "Para combatir esta enfermedad lo más importamnte es la prevención",
          descrip: "El dengue es una enfermedad viral transmitida por la picadura del mosquito AEDES AEGYPTI, el cual se cría y se reproduce en el agua acumulada en recipientes y objetos en desuso. El Virus del dengue tiene cuatro variedades (serotipos): Den-1, Den-2, Den-3 y Den-4. La primera vez que una persona es inoculada con cualquiera de estos cuatro serotipos, desarrolla el dengue clásico quedando inmune para este tipo exclusivamente. Si fuera picada nuevamente por un mosquito portador de cualquiera de los 3 tipos restantes, podría contraer dengue hemorrágico, de forma más severa, con riesgo de muerte.",
          img: "https://via.placeholder.com/440x400?text=OSSEG",
          linkProg: "https://www.osseg.org.ar/images/delegaciones/pelle.jpg",
          styleNoti: "col-md-6 pr-md-5",
        },
        {
            titul: "CELIAQUÍA",
            bajada: "¿Qué es la enfermedad Celiaca?",
            descrip: "Es una enfermedad que daña el revestimiento del intestino delgado e impide la absorción de partes de los alimentos que son importantes para permanecer saludables. El daño se debe a una reacción del sistema inmune provocada por la ingesta de gluten, conjunto de proteínas presentes en el trigo, avena, cebada y centeno (TACC) y productos derivados de estos cuatro cereales.",
            img: "https://via.placeholder.com/440x400?text=OSSEG",
            linkProg: "https://www.osseg.org.ar/images/delegaciones/pelle.jpg",
            styleNoti: "col-md-6 pr-md-5 order-md-last",
        },
        {
            titul: "PLAN MATERNO INFANTIL",
            bajada: "¿Qué es el control prenatal?",
            descrip: "Es un conjunto de acciones médicas y asistenciales que se concretan en visitas programadas con un obstetra a fin de controlar la evolución del embarazo y alcanzar el adecuado estado de salud de la madre y del bebe. Su objetivo más importante es prevenir, orientar, eliminar factores de riesgo, diagnosticar y tratar condiciones adversas.",
            img: "https://via.placeholder.com/440x400?text=OSSEG",
            linkProg: "https://www.osseg.org.ar/images/delegaciones/pelle.jpg",
            styleNoti: "col-md-6 pr-md-5",
        },
        {
            titul: "PREVENCIÓN CÁNCER GENITOMAMARIO",
            bajada: "La prevención y el diagnóstico precoz posibilitan un tratamiento oportuno frente al cáncer. El control ginecológico permite detectarlo a partir de diferentes estudios.",
            descrip: "El cáncer de cuello de útero es una enfermedad causada, en la mayoría de los casos, por la infección del Virus de Papiloma Humano (HPV). Es el segundo cáncer más frecuente en nuestro país luego del cáncer de mama, constituye el 6% de los tumores malignos y el segundo más frecuente en las mujeres de 35 a 55 años.",
            img: "https://via.placeholder.com/440x400?text=OSSEG",
            linkProg: "https://www.osseg.org.ar/images/delegaciones/pelle.jpg",
            styleNoti: "col-md-6 pr-md-5 order-md-last",
        },
        {
            titul: "VACUNACIÓN ANTIGRIPAL Y ANTINEUMOCÓCICA",
            bajada: "¿Qué es la gripe A?",
            descrip: "Es una infección respiratoria aguda, altamente contagiosa causada por un virus de influenza o gripe. Como los síntomas clínicos generalmente son similares a los de una influenza estacional y van desde infecciones asintomáticas hasta neumonías severas, la mayoría de los casos se han detectado casualmente mediante los sistemas de vigilancia de la gripe estacional.",
            img: "https://via.placeholder.com/440x400?text=OSSEG",
            linkProg: "https://www.osseg.org.ar/images/delegaciones/pelle.jpg",
            styleNoti: "col-md-6 pr-md-5",
        }
    ]

    
    return(
    <>    
	<BreadKrumb menuTipoUser={rutasPage} act="Programas Preventivos" />	

    <section className="ftco-animate fadeInUp ftco-animated mt-5 mb-5" >
    <Container>

    {progPrevent.map(progPrevent =>
            <Row className="dept align-items-center" >
                <div className={progPrevent.styleNoti}>
                    <h2>{progPrevent.titul}</h2>
                    <h5><span>{progPrevent.bajada}</span></h5>
                    <p>{progPrevent.descrip}</p>
                    <Button className="btn btn-primary">Leer Más</Button>
                </div>
                <Col className="col-md-6 img" style={{ backgroundImage: `url(https://via.placeholder.com/540x400?text=OSSEG)`}}></Col>
                
            </Row>
    )}     

    </Container>
    </section>
    </>
    )      
}

export default Progprevent;