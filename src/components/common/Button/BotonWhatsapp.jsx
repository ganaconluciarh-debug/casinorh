import "../Button/botonwhatsapp.css"

const BotonWhatsapp = () =>{

    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || "5491100000000";
    const whatsappMessage = encodeURIComponent(
    import.meta.env.VITE_WHATSAPP_MESSAGE || "Hola, quiero consultar por las promociones."
    );

    return(
        <>
        <div>

            <a
            className="floating-whatsapp"
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Contactar por WhatsApp"
            >
            <span>💬</span>
            </a>
        </div>
        </>
    )

}

export default BotonWhatsapp