"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface CryptoData {
    cryptoData: any[];
    real: number | undefined;
}

const CryptoDataContext = createContext<CryptoData>({
    cryptoData: [],
    real: undefined,
});

export const CryptoDataProvider = ({ children }: any) => {
    const [cryptoData, setCryptoData] = useState([]);
    const [real, setReal] = useState();

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

        const fetchDataAndDolar = () => {
            fetchDolar();
            fetchData();
        };

        fetchDataAndDolar();

        const interval = setInterval(fetchDataAndDolar, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <CryptoDataContext.Provider value={{ cryptoData, real }}>
            {children}
        </CryptoDataContext.Provider>
    );
};

// Hook personalizado para consumir o contexto
export const useCryptoData = () => useContext(CryptoDataContext);
