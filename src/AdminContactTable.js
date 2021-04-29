import React from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import { db } from "./firebase/config";
import { formatDate } from "./utils";

export default function AdminContactTable() {
  const tableRef = React.createRef();

  const refresh = () => {
    tableRef.current && tableRef.current.onQueryChange();
  };

  // delete modal handlers
  const handleDelete = async (idArr) => {
    console.log(idArr);
    const areMany = idArr.length > 1;
    const proceed = window.confirm(
      `Do you want to delete ${areMany ? "these records ?" : "this record ?"}`
    );
    console.log(proceed);
    if (proceed) {
      try {
        for (let cur of idArr) {
          await db.collection("contacts").doc(cur).delete();
        }
        areMany
          ? alert("Deleted records successfully")
          : alert("Deleted record successfully");

        refresh();
      } catch (e) {
        console.log(e);
        alert("Failed in deleting records. Try after some time.");
      }
    }
  };

  // columns for the react table
  const columns = [
    {
      field: "dateCollected",
      title: "Date",
      sorting: false,
      defaultSort: "desc",
      cellStyle: {
        minWidth: 0,
        // maxWidth: 140,
      },
      editable: "never",
    },
    {
      field: "full_name",
      title: "Name",
      editable: "never",
      sorting: false,
      cellStyle: {
        minWidth: 110,
        maxWidth: 110,
        overflow: "hidden",
      },
    },
    {
      field: "email",
      title: "Email",
      editable: "never",
      sorting: false,
      cellStyle: {
        minWidth: 200,
        maxWidth: 250,
        overflow: "hidden",
      },
    },
    {
      field: "phone",
      title: "Phone",
      editable: "never",
      sorting: false,
      cellStyle: {
        minWidth: 110,
        maxWidth: 110,
        overflow: "hidden",
      },
    },
    {
      field: "company_name",
      title: "Company",
      editable: "never",
      sorting: false,
      cellStyle: {
        minWidth: 120,
        maxWidth: 120,
        overflow: "hidden",
      },
    },
    {
      field: "message",
      title: "Message",
      render: (rowData) => (
        <p
          style={{ wordBreak: "break-all", whiteSpace: "normal" }}
          title={rowData.message}
        >
          {rowData.message}
        </p>
      ),
      sorting: false,
      cellStyle: {
        minWidth: 350,
        maxWidth: 440,
        overflow: "hidden",
      },
    },
  ];

  return (
    <React.Fragment>
      <MaterialTable
        columns={columns}
        tableRef={tableRef}
        data={(query) =>
          new Promise((resolve, reject) => {
            const {
              // search,
              // totalCount,
              page,
              pageSize,
              orderBy,
              orderDirection,
            } = query;
            console.log(page, pageSize, orderBy, orderDirection);
            const lastVisible = (page + 1) * pageSize;

            db.collection("contacts")
              .orderBy("dateCollected")
              .startAfter(lastVisible)
              .limit(pageSize)
              .get()
              .then((querySnapshot) => {
                const result = [];
                querySnapshot.forEach((doc) => {
                  console.log(doc.data().dateCollected.toDate().getDay());
                  result.push({
                    ...doc.data(),
                    id: doc.id,
                    dateCollected: formatDate(
                      doc.data().dateCollected.toDate()
                    ),
                  });
                });
                console.log(result);
                db.collection("contacts")
                  // .orderBy(orderBy ? orderBy.field : "")
                  .get()
                  .then((qS) => {
                    const count = qS.docs.length;
                    resolve({
                      data: result,
                      page: page,
                      totalCount: count,
                    });
                  })
                  .catch((e) => console.log(e));
              })
              .catch((e) => console.log(e));
          })
        }
        actions={[
          {
            icon: "delete",
            tooltip: "Delete Post",
            iconProps: { style: { color: "#F4511E" } },
            onClick: (e, rowData) => {
              handleDelete(rowData.map((cur) => cur.id));
            },
          },
          {
            icon: "refresh",
            tooltip: "Refresh Data",
            isFreeAction: true,
            onClick: () => tableRef.current && tableRef.current.onQueryChange(),
          },
        ]}
        options={{
          pageSizeOptions: [20, 30, 40],
          pageSize: 20,
          actionsColumnIndex: -1,
          search: false,
          selection: true,
          exportButton: true,
        }}
        title="Contact Messages"
      />
    </React.Fragment>
  );
}
