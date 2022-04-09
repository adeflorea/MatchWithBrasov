import NavBar from "../components/NavBar/NavBar";
import Image from "next/image";
import Link from "next/link";
import {Form} from "react-bootstrap"

function Activity({ title, description, imageSrc }) {
    <div className="container-fluid">
        <Image src={imageSrc} width={400} height={400} />
        <div className="container-fluid textbox">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    </div>
}

export default function Activities() {
    return (
        <>
            <NavBar />
            <ul className="container text-center mt-3">
                <Form.Check
                    inline
                    label="Locuri de divertisment"
                    name="sort"
                    type="radio"
                    id={`inline-radio-1`}
                />
                <Form.Check
                    inline
                    label="Locuri culturale"
                    name="sort"
                    type="radio"
                    id={`inline-radio-2`}
                />
            </ul>
        </>
    )
}