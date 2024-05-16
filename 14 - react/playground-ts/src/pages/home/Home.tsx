interface homeProps {
  titulo: string;
  texto: string;
}

function Home(props: homeProps) {
  return (
    // <> fragment, simula uma div de componente
    <>
      <div>
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
      </div>
    </>
  );
}

export default Home