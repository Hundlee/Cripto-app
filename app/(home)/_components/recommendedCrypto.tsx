"use client";

import { Badge } from "@/app/_components/ui/badge";
import { Card, CardContent, CardTitle } from "@/app/_components/ui/card";
import { useCryptoData } from "@/app/_providers/CryptoProvider";

const RecommendedCrypto = () => {
    const { cryptoData, real } = useCryptoData();

    const cryptoDataCrescente = cryptoData
        .filter((crypto) => crypto.quote.USD.percent_change_24h > 0)
        .sort(
            (a, b) =>
                b.quote.USD.percent_change_24h - a.quote.USD.percent_change_24h
        );

    return (
        <div>
            <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                {cryptoDataCrescente.map((crypto, index) => (
                    <Card key={index} className="">
                        <CardContent className="w-[20rem] cursor-pointer">
                            <div className="flex justify-between pt-6">
                                <CardTitle className="text-2xl">
                                    {crypto.name}
                                </CardTitle>

                                {crypto.quote.USD.percent_change_24h > 0 && (
                                    <Badge className="font-semibold ">
                                        <p>
                                            {crypto.quote.USD.percent_change_24h.toFixed(
                                                2
                                            )}
                                            %
                                        </p>
                                    </Badge>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default RecommendedCrypto;
