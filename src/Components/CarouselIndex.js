import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

function CarouselIndex() {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"                
                height="500px"
                src="https://via.placeholder.com/500x500?text=OSSEG"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3 class="mb-4">Cuidar su Salud nos importa</h3>
			            <p>Llevar una vida saludable es importante, como así también realizar evaluaciones y chequeos periódicos.</p>
			            <p><Button class="btn btn-primary">Más Información</Button></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                height="500px"
                src="https://via.placeholder.com/500x500?text=OSSEG"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3 class="mb-4">Apertura de la nueva Delegación de Olavarria</h3>
			            <p><strong>La misma está ubicada en la calle San Martin Nº 2835 siendo el horario de atención será de 10 a 18 horas <br/>(Tel. 02284 43-1774, 
							      <a href="mailto:&quot;olavarria@osseg.org.ar&quot;">olavarria@osseg.org.ar</a>).</strong></p>
			            <p><a href="/#" class="btn btn-primary">Más Información</a></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                height="500px"
                src="https://via.placeholder.com/500x500?text=OSSEG"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3 class="mb-4">Cuidar su Salud nos importa3</h3>
			            <p>Llevar una vida saludable es importante, como así también realizar evaluaciones y chequeos periódicos.</p>
			            <p><a href="/#" class="btn btn-primary">Más Información</a></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
  }
  
export default CarouselIndex;