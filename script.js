const vel = prompt("Insira a velocidade: ");

if (vel >= 60) {
  alert(
    "Você ultrapassou a velocidade permitida!\n" +
      "Sua velocidade foi de: " +
      vel
  );
} else if (vel >= 30 && vel <= 60) {
  alert("Você está dentro da velocidade permitida!");
} else if (vel <= 29) {
  alert("Você está lento demais! Sua velocidade é de: " + vel);
}
