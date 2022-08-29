import Form from "../Components/Form";
import Texto from "../Components/Texto/Texto";
import { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState("");
  const [dados, setDados] = useState({});

  async function handleRequisicao() {
    const apiKey = "4BRmrLBBB1Cwrz53RdZAdK0Nxob5FFmUpZ2RflnM";
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${data}`
    );
    const json = await response.json("");
    setDados(json)
  }

  const handleChange = (e) => {
    setData(e.target.value)
    console.log(data);
  }

  const handleClick = (e) => {
    e.preventDefault();
    handleRequisicao();

  };

  useEffect(() => {
    console.log(dados)
  }, [dados]);

  return (
    <div>
      <div>
        <Form handleChange={handleChange} handleClick={handleClick} />
        <Texto titulo={dados.title} texto={dados.explanation} img={dados.url} mediaType={dados.media_type} />
      </div>
      <div></div>
    </div>
  );
};

export default Home;
