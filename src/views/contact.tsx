import { ModalView } from "../components/view"

type viewProps ={
    closeOverlay?: any,
}

function Contact({ closeOverlay }:viewProps) {
    return (
        <ModalView closeOverlay={closeOverlay} title='Get in touch'>
            <div style={{height:2000}}></div>
        </ModalView>
    )
}

export default Contact