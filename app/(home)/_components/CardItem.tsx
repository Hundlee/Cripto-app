"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Card, CardContent, CardTitle } from "@/app/_components/ui/card";
import { useEffect, useState } from "react";

const CardItem = () => {
    const [cryptoData, setCryptoData] = useState<any[]>([]);
    const [real, setReal] = useState<number>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const json = await response.json();
                setCryptoData(json.data);
                console.log(json);
            } catch (error) {
                console.error("Erro:", error);
            }
        };

        const fetchDolar = async () => {
            try {
                const response = await fetch(
                    "https://economia.awesomeapi.com.br/last/USD-BRL",
                    {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                const json = await response.json();
                setReal(json.USDBRL.ask);
                console.log(json.USDBRL.ask);
            } catch (error) {
                console.error("Erro:", error);
            }
        };

        fetchDolar();
        fetchData();
    }, []);
    return (
        <div className="px-5 mt-6">
            <h2 className="text-xs mb-3 uppercase text-gray-400 font-bold">
                Criptomoedas
            </h2>
            <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                {cryptoData.map((crypto, index) => (
                    <Card key={index} className="">
                        <CardContent className="w-[20rem] cursor-pointer">
                            <div className="flex justify-between pt-6">
                                <CardTitle className="text-2xl">
                                    {crypto.symbol}
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
                                <div className="mt-10">
                                    <p className="text-xl font-bold">
                                        R$
                                        {real
                                            ? (crypto.quote.USD.price * real)
                                                  .toFixed(2)
                                                  .toString()
                                            : "Loading..."}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default CardItem;
