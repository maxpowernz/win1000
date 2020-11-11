import React from "react";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import AgencyEmployeeList from "./AgencyEmployeeList";
import { ThemeProvider } from "@material-ui/core";
import theme from "../../theme";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import edit from "@material-ui/icons/Edit";
import deleteIcon from "@material-ui/icons/Delete";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

export default function AgencyList() {
  return (
    <div style={{ maxWidth: "100%" }}>
      <ThemeProvider theme={theme}>
        <MaterialTable
          icons={tableIcons}
          columns={[
            { title: "Agency", field: "agencyName" },
            { title: "Employees Count", field: "employeeCount", type: "numeric" },
            { title: "Matters Count", field: "agencyMatters", type: "numeric" },
            {
              title: "User Count",
              field: "usersInvolved",
              type: "numeric",
              // lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
            },
          ]}
          data={[
            {
              agencyName: "Work & Income",
              employeeCount: "1",
              agencyMatters: 3,
              usersInvolved: 10,
            },
            {
              agencyName: "Education New Zealand",
              employeeCount: "2",
              agencyMatters: 3,
              usersInvolved: 9,
            },
            {
              agencyName: "Earthquake Commission",
              employeeCount: "3",
              agencyMatters: 3,
              usersInvolved: 8,
            },
            {
              agencyName: "Immigration and Protection Tribunal",
              employeeCount: "4",
              agencyMatters: 3,
              usersInvolved: 7,
            },
            {
              agencyName: "Land Information New Zealand",
              employeeCount: "5",
              agencyMatters: 3,
              usersInvolved: 6,
            },
            {
              agencyName: "Ministry of Justice",
              employeeCount: "6",
              agencyMatters: 3,
              usersInvolved: 5,
            },
            {
              agencyName: "Commerce Commission",
              employeeCount: "7",
              agencyMatters: 3,
              usersInvolved: 4,
            },
            {
              agencyName: "Charities Services",
              employeeCount: "8",
              agencyMatters: 3,
              usersInvolved: 3,
            },
            {
              agencyName: "External Reporting Board",
              employeeCount: "9",
              agencyMatters: 3,
              usersInvolved: 2,
            },
            {
              agencyName: "Accident Compensation Corporation",
              employeeCount: "10",
              agencyMatters: 3,
              usersInvolved: 1,
            },
          ]}
          actions={[
            {
              icon: AddBox,
              tooltip: "Add User",
              isFreeAction: true,
              onClick: (event) => alert("You want to add a new row"),
            },
            {
              icon: edit,
              tooltip: "Edit agency information",
              onClick: (event, rowData) => alert("Edit agency detail " + rowData.name),
            },
            {
              icon: deleteIcon,
              tooltip: "Delete agency",
              onClick: (event, rowData) => alert("Delete agency detail " + rowData.name),
            },
          ]}
          onRowClick={(event, rowData, togglePanel) => togglePanel()}
          detailPanel={[
            {
              tooltip: "Show Name",
              render: (rowData) => {
                return (
                  <div
                    style={{
                      textAlign: "center",
                    }}>
                    <AgencyEmployeeList />
                  </div>
                );
              },
            },
          ]}
          options={{
            actionsColumnIndex: -1,
            // headerStyle: {
            //   backgroundColor: theme.palette.headerStyle.main,
            //   color: "#FFFFFF"
            // }
          }}
          title="Agencies' list"
        />
      </ThemeProvider>
    </div>
  );
}
