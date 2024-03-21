import { getServerSession } from "next-auth";
import Header from "../_components/header";
import { authOptions } from "../_lib/auth";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Button } from "../_components/ui/button";
import { SearchIcon } from "lucide-react";

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

            <div className="px-5 mt-6">
                <div className="flex items-center ">
                    <input
                        type="text"
                        className="w-full mr-2 h-[2.4rem] rounded-md"
                    />
                    <Button variant="default" size="icon">
                        <SearchIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
}
