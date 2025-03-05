import "./AssinaturaNewsletter.css";

export default function AssinaturaNewsletter() {
  return (
    <>
      <div>
        <input
          type="email"
          name="e-mail"
          id="e-mail"
          placeholder="Insira seu e-mail"
        />
        <button>Assinar Newsletter</button>
      </div>
    </>
  );
}
