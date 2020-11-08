import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  id: number;
}

function ChildNavTabs({ id }: Props) {
  const [value, setValue] = useState(0);

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box style={{ backgroundColor: "white" }}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example">
        <Tab label="Personal Info" component={Link} to={`/admin/childmain/${id}`} />
        <Tab label="Whanau" component={Link} to={`/admin/childmain/family/${id}`} />
        <Tab label="Health" component={Link} to={`/admin/childmain/health/${id}`} />
        <Tab label="Education" component={Link} to={`/admin/childmain/education/${id}`} />
        <Tab label="Agencies" component={Link} to={`/admin/childmain/agencies/${id}`} />
      </Tabs>
    </Box>
  );
}

export default ChildNavTabs;