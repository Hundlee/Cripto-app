import { getServerSession } from "next-auth";
import Header from "../_components/header";
import { authOptions } from "../_lib/auth";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "../_components/ui/button";
import { SearchIcon } from "lucide-react";
import CryptoCard from "./_components/CryptoCard";
import CryptoGrowing from "./_components/CryptoGrowing";
import RecommendedCrypto from "./_components/recommendedCrypto";

export default async function Home() {
    const session = await getServerSession(authOptions);

    return (
        <div>
            <Header />

            <div className="px-5 pt-5">
                <div>
                    {session?.user ? (
                        <h2 className="text-xl ">
                            Olá{" "}
                            <strong>{session.user.name?.split(" ")[0]}!</strong>
                        </h2>
                    ) : (
                        <h2 className="text-xl font-bold">
                            Olá, Faça seu login!
                        </h2>
                    )}
                    <p className="capitalize text-sm">
                        {format(new Date(), "EEEE',' d 'de' MMMM", {
                            locale: ptBR,
                        })}
                    </p>
                </div>
            </div>

            <div className="px-5 mt-5">
                <div className="flex items-center ">
                    <input
                        type="text"
                        className="w-full mr-2 h-[2.4rem] rounded-md bg-input"
                    />
                    <Button variant="default" type="submit">
                        <SearchIcon size={20} />
                    </Button>
                </div>
            </div>

            <div className="pl-5 mt-6">
                <div className="flex justify-between pr-5">
                    <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">
                        Criptomoedas
                    </h2>
                    <h3 className="text-xs mb-3 uppercase text-gray-400 font-bold">
                        Ultima hora
                    </h3>
                </div>
                <CryptoCard />
            </div>

            <div className="pl-5 mt-6">
                <div className="flex justify-between pr-5">
                    <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">
                        Crescendo
                    </h2>
                    <h3 className="text-xs mb-3 uppercase text-gray-400 font-bold">
                        Ultima hora
                    </h3>
                </div>

                <CryptoGrowing />
            </div>

            <div className="pl-5 mt-6">
                <div className="flex justify-between pr-5">
                    <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">
                        Recomendadas
                    </h2>
                    <h3 className="text-xs mb-3 uppercase text-gray-400 font-bold">
                        Ultimas 24 horas
                    </h3>
                </div>

                <RecommendedCrypto />
            </div>
        </div>
    );
}
