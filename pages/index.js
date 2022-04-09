import NavBar from "../components/NavBar/NavBar"
import Carousel from "../components/ImageCarousel/ImageCarousel"
import ImageCarousel from "../components/ImageCarousel/ImageCarousel"

export default function Home() {
  return (
    <>
      <NavBar />
      <ImageCarousel srcs={["/images/mood-poza.jpg", "/images/brasov-poze.jpeg"]} />
      <p>MatchWithBrasov este un site creat pentru a facilita descoperirea si participarea la evenimente de divertisment in Brasov.
        Astfel, cu ajutorul nostru poti gasi activitati si obiective turistice de interes din jurul tau.
        Site-ul nostru foloseste de un chestionar pentru a te conecta cu activitatile din jurul tau.
      </p>
    </>
  )
}