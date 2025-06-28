const Message = () => {

    const text = '0754a1bf-a1fe-44f8-9ac5-e69555910a7c';

    const handleCopy = () => {
        try {
            navigator.clipboard.writeText(text).then(console.log);
        } catch (err) {
            console.error('Erro ao copiar:', err);
        }
    };

    return (
        <div className='bombom'>
            <h1>Contribua com nossa bomboniere</h1>
            <p>
                Não deixe o bombom acabar — o mundo precisa de doçura para continuar a encantar.
            </p>

            <p>

                Você também pode mandar um <span className='pix' onClick={handleCopy}>Pix</span> se preferir. <br />

                <span className='copy'>
                    (Clique em PIX para copiar)
                </span>
            </p>
        </div>
    )
};


export default Message;