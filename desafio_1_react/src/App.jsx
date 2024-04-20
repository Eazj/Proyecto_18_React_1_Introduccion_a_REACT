import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/footer'
import Header from './components/header'
import Mycard from './components/mycard'
import Tags from './components/tags'
import Beagle from './assets/Beagle.webp'
import Bobtail from './assets/Bobtail.webp'
import Husky from './assets/Husky.jpg'
import Sharpei from './assets/Sharpei.jpg'

function App() {
  return (
    <>
    <Header/>
    <div className='container_card'>
    <Mycard
            image={Husky}
            name="Bartolo"
            description="lleno de energia y listo para jugar.¡Dale a bartolo lo que se merece!"
            text="Husky"
            color="success"
    />
        <Mycard
            image={Bobtail}
            name="Messi"
            description="Es jugueton, amigable y se lleva bien con niños y otros animales ¡Haz de Messi parte de tu familia hoy mismo!"
            text="Bobtail"
            color="primary"
    />
        <Mycard
            image={Sharpei}
            name="Gohan"
            description="Un perro de tamaño mediano con un corazon gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!"
            text="Shar pei"
            color="danger"
    />
        <Mycard
            image={Beagle}
            name="Princesa"
            description="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a princesa a encontrar su final feliz!"
            text="Beagle"
            color="warning"
    />
    </div>
    <Tags/>
    <Footer/>
    </>
  )
}

export default App
