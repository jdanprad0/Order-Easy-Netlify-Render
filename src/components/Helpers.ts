import axios from "axios";
import { OptionType } from "../view/EditView";

export const numberTables = 28; // chamar isso ainda

export const typesEmployees: OptionType[] = [
  {
    value: 1,
    label: "Atendimento",
  },
  {
    value: 2,
    label: "Caixa",
  },
  {
    value: 3,
    label: "Supervisor",
  },
];

export const userRoutes: Record<string, string[]> = {
  Atendimento: ["/", "/auth", "/perfil", "/sair"],
  Caixa: ["/", "/auth", "/perfil", "/sair", "/finalizar", "/produtos"],
  Supervisor: [
    "/",
    "/auth",
    "/perfil",
    "/sair",
    "/finalizar",
    "/cadastrar",
    "/editar",
    "/usuarios",
    "/produtos",
  ],
};

export const formatNumberWithTwoDigits = (number: number): string =>
  number < 10 ? `0${number}` : String(number);

export const handleApiError = (
  error: any,
  setErrorMessage: (message: string) => void
) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      const errorMessage = error.response.data.msg;
      setErrorMessage(errorMessage);
    } else {
      setErrorMessage(`Ocorreu um erro na requisição: ${error.message}`);
    }
  } else {
    setErrorMessage(`Ocorreu um erro desconhecido: ${error}`);
  }
  setTimeout(() => {
    setErrorMessage("");
  }, 3000);
};

export const produtos = [
  {
    value: "1",
    label: "Coca Cola",
    price: 3.5,
  },
  {
    value: "2",
    label: "Sopa",
    price: 15.0,
  },
  {
    value: "3",
    label: "Bolachinha",
    price: 7.25,
  },
  {
    value: "4",
    label: "Sorvete",
    price: 8.78,
  },
  {
    value: "5",
    label: "Batata Frita (200g)",
    price: 35.0,
  },
  {
    value: "6",
    label: "Hamburguer",
    price: 29.9,
  },
  {
    value: "7",
    label: "Camarão",
    price: 62.0,
    amount: 0,
  },
  {
    value: "8",
    label: "Bife a Milanesa",
    price: 35.33,
  },
  {
    value: "9",
    label: "Suco",
    price: 10.0,
  },
  {
    value: "10",
    label: "Costelinha",
    price: 49.0,
  },
];
