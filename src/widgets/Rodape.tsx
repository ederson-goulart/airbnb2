import Link from "next/link";

const Rodape = () => {
  return (
    <div className=" mx-4 py-5">
      <span className="text-lg font-semibold">&copy; AirBnb INC</span>
      <ul className="flex flex-row gap-2">
        <li>
          <Link className="hover:text-red-500" href="/">
            Privacidade
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link className="hover:text-red-500" href="/">
            Termos
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link className="hover:text-red-500" href="/">
            Mapa do Site
          </Link>
        </li>
        <li>&middot;</li>
        <li>
          <Link className="hover:text-red-500" href="/">
            Informações da Empresa
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Rodape;
