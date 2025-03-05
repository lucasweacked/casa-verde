import "./Manu.css";

export default function Menu() {
  return (
    <>
      <header className="cabecalho">
        <section className="cabecalho__conteudo">
          <section className="cabecalho__conteudo__logo">
            <a
              href="https://www.instagram.com/21lucasbarros/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src="../public/image/logo_def.png"
                alt="Logo da Casa Verde"
                loading="lazy"
                className="logo"
              />
            </a>
          </section>

          <ul className="cabecalho__conteudo__links">
            <li className="cabecalho__conteudo__links-link">
              <a href="#">Como fazer</a>
            </li>
            <span>/</span>
            <li className="cabecalho__conteudo__links-link">
              <a href="#">Ofertas</a>
            </li>
            <span>/</span>
            <li className="cabecalho__conteudo__links-link">
              <a href="#">Depoimentos</a>
            </li>
            <span>/</span>
            <li className="cabecalho__conteudo__links-link">
              <a href="#">Vídeos</a>
            </li>
            <span>/</span>
            <li className="cabecalho__conteudo__links-link">
              <a href="#">Meu carrinho</a>
            </li>
          </ul>
        </section>
      </header>
    </>
  );
}
