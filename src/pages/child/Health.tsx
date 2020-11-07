import React from "react";
import { useAppState } from "../../AppStateContext";

export default function Health() {
  const { state, dispatch } = useAppState();

  return <div>health page</div>;
}
