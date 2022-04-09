import NavBar from "../components/NavBar/NavBar"
import { Form } from "react-bootstrap"

export default function ActivitiesMap() {
    return (
        <>
            <NavBar />
            <div className="container">
                <Form.Check
                    inline
                    label="Din punct de vedere cultural"
                    name="map-sort"
                    type="radio"
                    id={`inline-radio-1`}
                />
                <Form.Check
                    inline
                    label="Din punct de vedere de divertisment"
                    name="map-sort"
                    type="radio"
                    id={`inline-radio-2`}
                />
            </div>
        </>
    )
}