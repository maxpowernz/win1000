import React from "react";
import { useAppState } from "../../AppStateContext";

export default function Family() {
  const { state, dispatch } = useAppState();

  return <div>{state.selectedChild.family.father.firstName}</div>;
}
