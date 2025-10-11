import BarraSuperior from "../widgets/BarraSuperior";
import Acomodacoes from "../widgets/Acomodacoes";

import BarraPesquisa from "../widgets/BarraPesquisa";
import NavegacaoAbasHorizontal from "../widgets/NavegacaoAbasHorizontal";
import Rodape from "../widgets/Rodape";
import { fetchData } from "@/utils/api";

export default async function Home() {
  const dados = await fetchData();
  return (
    <>
      <header className=" mx-4">
        <BarraSuperior />
        <BarraPesquisa />
      </header>

      <hr className="my-6" />

      <main className=" mx-4">
        <NavegacaoAbasHorizontal icons={dados.icons} />
        <Acomodacoes accommodation={dados.accommodation} />
      </main>

      <footer className="bg-gray-300">
        <Rodape />
      </footer>
    </>
  );
}
