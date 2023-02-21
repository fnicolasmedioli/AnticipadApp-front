const replaceChar = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
};

export const simplifyString = s => {
    const lowered = s.toLowerCase();
    let accentsRemoved = "";
    for (let c of lowered) accentsRemoved += replaceChar[c] || c;
    return accentsRemoved;
};
