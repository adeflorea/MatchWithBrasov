import NavBar from "../components/NavBar/NavBar"
import Carousel from "../components/ImageCarousel/ImageCarousel"
import ImageCarousel from "../components/ImageCarousel/ImageCarousel"

export default function Home() {
  return (
    <>
      <NavBar />
      <ImageCarousel srcs={[
        "images/carusel1.jpeg",
        "images/carusel2.jpeg",
        "images/carusel3.jpeg",
        "images/carusel4.jpeg",
        "images/carusel5.jpeg",
        "images/carusel6.jpeg"
      ]} />
      <p>MatchWithBrasov este un site creat pentru a facilita descoperirea si participarea la evenimente de divertisment in Brasov.
        Astfel, cu ajutorul nostru poti gasi activitati si obiective turistice de interes din jurul tau.
        Site-ul nostru foloseste de un chestionar pentru a te conecta cu activitatile din jurul tau.
      </p>
    </>
  )
}