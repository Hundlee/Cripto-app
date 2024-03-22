"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Card, CardContent, CardTitle } from "@/app/_components/ui/card";
import { useCryptoData } from "@/app/_providers/CryptoProvider";

const CryptoRecommended = () => {
    const { cryptoData, real } = useCryptoData();

    const cryptoDataCrescente = cryptoData
        .filter((crypto) => crypto.quote.USD.percent_change_1h > 0)
        .sort(
            (a, b) =>
                b.quote.USD.percent_change_1h - a.quote.USD.percent_change_1h
        );

    function formatCryptoPrice(price: number) {
        // Se o preço for menor que 0.01, exibe mais casas decimais
        if (price < 0.01) {
            return price.toFixed(6);
        } else {
            return price.toFixed(2);
        }
    }

    return (
        <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {cryptoDataCrescente.map((crypto, index) => (
                <Card key={index} className="">
                    <CardContent className="w-[20rem] cursor-pointer">
                        <div className="flex justify-between pt-6">
                            <CardTitle className="text-2xl">
                                {crypto.name}
                            </CardTitle>

                            {crypto.quote.USD.percent_change_1h > 0 ? (
                                <Badge className="font-semibold ">
                                    <p>
                                        {crypto.quote.USD.percent_change_1h.toFixed(
                                            2
                                        )}
                                        %
                                    </p>
                                </Badge>
                            ) : (
                                <Badge variant="destructive">
                                    {" "}
                                    <p className="font-semibold">
                                        {crypto.quote.USD.percent_change_1h.toFixed(
                                            2
                                        )}
                                        %
                                    </p>
                                </Badge>
                            )}
                        </div>

                        <div>
                            <div className="mt-10 flex justify-between items-center">
                                <p className="text-xl font-bold">
                                    R$
                                    {real
                                        ? formatCryptoPrice(
                                              crypto.quote.USD.price * real
                                          )
                                        : "Loading..."}
                                </p>

                                <p className="mr-1">{crypto.symbol}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default CryptoRecommended;
