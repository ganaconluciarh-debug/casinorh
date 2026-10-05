const BotonWhatsapp = () =>{

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