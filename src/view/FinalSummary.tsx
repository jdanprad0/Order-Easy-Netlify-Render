/** @jsxImportSource @emotion/react */
import { VFlow } from "bold-ui";
import React, { Fragment, useEffect, useState } from "react";
import { AccordionFinalSummary } from "../components/AccordionFinalSummary";
import { Header } from "../components/Header";
import { PageContainer } from "../components/PageContainer";
import api from "../api";

export function FinalSummary() {
  const [mesasOcupadas, setMesasOcupadas] = useState([]);

  const fetchDataMesasOcupadas = async () => {
    try {
      const mesasOcupadas = await api.get("/queryMesasOcupadas");
      setMesasOcupadas(mesasOcupadas.data);
    } catch {}
  };

  useEffect(() => {
    fetchDataMesasOcupadas();

    const interval = setInterval(fetchDataMesasOcupadas, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderRepeatedContent = (tableNumber: number) => (
    <AccordionFinalSummary
      tableNumber={tableNumber}
      fetchDataMesasOcupadas={fetchDataMesasOcupadas}
    ></AccordionFinalSummary>
  );

  return (
    <Fragment>
      <Header title="Finalizar"></Header>
      <PageContainer>
        <VFlow vSpacing={2}>
          {mesasOcupadas.map((value) => renderRepeatedContent(value))}
        </VFlow>
      </PageContainer>
    </Fragment>
  );
}
