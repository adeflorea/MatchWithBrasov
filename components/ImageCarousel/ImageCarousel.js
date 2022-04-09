import { Carousel } from "react-bootstrap";
import Image from "next/image";
import style from "./carousel.module.scss"

export default function ImageCarousel({srcs, children}) {
    return (
        <div className={"container-fluid p-0 m-0 " + style.navbar}>
            <Carousel>
                {srcs.map(src =>
                    <Carousel.Item>
                        <img
                            className={"d-block w-100 " + style.image} src={src}
                        />
                    </Carousel.Item>
                )}
            </Carousel>
        </div>
    )
}