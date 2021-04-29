import React from "react";
import MaterialTable from "material-table";
import { db } from "./firebase/config";
import { formatDate } from "./utils";

export default function AdminThesisTable({ tableRef, refresh }) {
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
          await db.collection("thesis").doc(cur).delete();
        }
        areMany
          ? alert("Deleted records successfully")
          : alert("Deleted record successfully");
      } catch (e) {
        console.log(e);
        alert("Failed in deleting records. Try after some time.");
      }
      refresh();
    }
  };

  // columns for the react table
  const columns = [
    {
      field: "dateCollected",
      title: "Date",
      sorting: false,
      cellStyle: {
        minWidth: 120,
        // maxWidth: 140,
      },
      editable: "never",
    },
    {
      field: "title",
      title: "Title",
      editable: "never",
      sorting: false,
      cellStyle: {
        minWidth: 150,
        // maxWidth: 150,
        overflow: "hidden",
      },
    },
    {
      field: "description",
      title: "Description",
      editable: "never",
      sorting: false,
      render: (rowData) => (
        <p
          style={{ wordBreak: "break-all", whiteSpace: "normal" }}
          title="message"
        >
          {rowData.description}
        </p>
      ),
      cellStyle: {
        minWidth: 450,
        maxWidth: 550,
        overflow: "hidden",
      },
    },
    {
      field: "filename",
      title: "Filename",
      editable: "never",
      sorting: false,
      cellStyle: {
        minWidth: 120,
        //   maxWidth: 120,
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
            db.collection("thesis")
              .orderBy("dateCollected")
              .get()
              .then((qS) => {
                const count = qS.docs.length;

                db.collection("thesis")
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
