import endpoint from "shared/endpoint";
import { Column, Module, Row } from "./types";

export type TopData = {
  rows: Row[];
  columns: Column[];
  module?: Module[];
};

export async function getTopsellingHttpsList(): Promise<TopData> {
  const response = await endpoint.get("/home?layout=1");
  return {
    rows: response.data.rows,
    columns: response.data.columns,
  };
}
