import { VFlow } from "bold-ui";
import React from "react";
import Select, { SingleValue } from "react-select";
import { ItemSelectedType, ProductType } from "./ModalOrder";
import { produtos } from "./Helpers";

interface SelectItemsOrderProps {
  handleChange(option: SingleValue<ItemSelectedType>): void;
  value: ItemSelectedType;
}

const options: ItemSelectedType[] = convertToSelect(produtos);

function convertToSelect(products: ProductType[]): ItemSelectedType[] {
  return products.map((product) => {
    const { value, label } = product;
    const formattedPrice = `R$${product.price.toFixed(2)}`;
    const updatedLabel = `${label} - ${formattedPrice}`;
    return { value, label: updatedLabel };
  });
}

export function SelectItemsOrder(props: SelectItemsOrderProps) {
  const { handleChange, value } = props;

  return (
    <VFlow>
      <Select
        onChange={handleChange}
        options={options}
        placeholder={"Selecione o produto"}
        value={value}
        required
      />
    </VFlow>
  );
}
