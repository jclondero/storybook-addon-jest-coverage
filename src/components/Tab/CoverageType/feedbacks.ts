import { statusProps } from "src/utils/coverage";

export const getTitleCoverageFeedback = (status: statusProps) => {
  if (status === "good") {
    return "A cobertura de testes está no nível ideal.";
  }

  if (status === "regular") {
    return "A cobertura de testes está num nível razoável.";
  }

  return "A cobertura de testes está abaixo do recomendado.";
};

export const getDescriptionCoverageFeedback = (status: statusProps) => {
  if (status === "good") {
    return "Essa categoria já tem um ótima cobertura, verifique as demais categorias.";
  }

  if (status === "regular") {
    return "Essa categoria tem uma boa cobertura, todavia pode ser consultada a seção de código para verificar possíveis trechos não cobertos.";
  }

  return "Essa categoria necessita obrigatóriamente de novos teste. Verifique na seção do código quais são os trechos que não estão sendo cobertos.";
};
