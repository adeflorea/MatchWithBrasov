import style from "./textbox.module.scss"

export default function TextBox({children}) {
    return (
        <div className={"container-lg text-justify my-3 " + style.textbox}>
            {children}
        </div>
    )
}