import React from "react";
import { useAppState } from "../../AppStateContext";

export default function Agencies() {
  const { state, dispatch } = useAppState();

  return <div>agencies page</div>;
}
