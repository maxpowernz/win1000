import { Button } from "@material-ui/core";
import React from "react";

interface Props {}

function Uploaddummy(props: Props) {
  const {} = props;

  return (
    <>
      <input type="file" value="filename.pdf" />
      <Button color="secondary">Upload</Button>
    </>
  );
}

export default Uploaddummy;
