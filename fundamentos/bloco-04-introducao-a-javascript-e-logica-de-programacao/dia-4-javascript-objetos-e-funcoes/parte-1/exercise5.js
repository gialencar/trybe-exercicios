let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};

let info_2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (const key in info) {
  if (key === "recorrente") {
    if (info[key] === "Sim" && info_2[key] === "Sim") {
      console.log("Ambos recorrentes");
    }
  } else {
    console.log(info[key] + " e " + info_2[key]);
  }
}
