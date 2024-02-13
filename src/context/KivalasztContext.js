import { createContext, useState } from "react";

export const KivalasztContext = createContext();

export const KivalasztProvider = ({ children }) => {

    const [kivalasztottLista, setKivalasztottLista] = useState([]);

    function kivalaszt(ertek) {
        console.log(ertek);
        const a = kivalasztottLista;
        a.push(ertek);
        console.log(a);
        setKivalasztottLista([...a]);
    }

    return (
        <KivalasztContext.Provider
            value={{ kivalasztottLista, setKivalasztottLista, kivalaszt }}
        >
            {children}
        </KivalasztContext.Provider>
    );
}