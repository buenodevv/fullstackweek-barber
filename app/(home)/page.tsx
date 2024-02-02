import Image from "next/image";
import Header from "../_components/header";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import Search from "./_components/search";
import { Badge } from "../_components/ui/badge";
import BookingItem from "../_components/booking-item";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, Rodrigo</h2>
        <p className="capitalize text-sm">{format(new Date(), "EEEE ',' dd 'de' MMMM", {
          locale: ptBR,
        })}</p>
      </div>
      <div className="px-5 mt-6">
        <Search />
      </div>
      <div className="p-5">
        <BookingItem />
      </div>
    </div>

  );
}
