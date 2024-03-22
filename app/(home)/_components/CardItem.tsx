"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Card, CardContent, CardTitle } from "@/app/_components/ui/card";
import { useCryptoData } from "@/app/_providers/CryptoProvider";

const CardItem = () => {
    const { cryptoData, real } = useCryptoData();

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
