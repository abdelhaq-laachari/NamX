export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {/* <img className="cellImg" src={params.row.img} alt="avatar" /> */}
          {params.row.fullName}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  // {
  //   field: "status",
  //   headerName: "Status",
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.status}`}>
  //         {params.row.status}
  //       </div>
  //     );
  //   },
  // },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 160,
  },

  // add address and city in one column
  {
    field: "address",
    headerName: "Address",
    width: 160,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const carColumns = [
  { field: "_id", headerName: "ID", width: 130 },
  {
    field: "name",
    headerName: "Name",
    width: 120,
  },
  {
    field: "edition",
    headerName: "Edition",
    width: 120,
  },
  {
    field: "horsepower",
    headerName: "Horse Power",
    width: 135,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.horsepower} hp</div>;
    },
  },
  {
    field: "maxSpeed",
    headerName: "Max Speed",
    width: 135,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.maxSpeed} km/h</div>;
    },
  },
  {
    field: "acceleration",
    headerName: "Acceleration",
    width: 135,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.acceleration} s</div>;
    },
  },
];

export const orderColumns = [
  { field: "_id", headerName: "ID", width: 170 },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  {
    // get the name of the client from the object id
    field: "idClient",
    headerName: "Client",
    width: 230,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.idClient.fullName}</div>;
    },
  },
  {
    field: "idCar",
    headerName: "Car",
    width: 170,
    renderCell: (params) => {
      return <div className="cellWithImg">{params.row.idCar.name} {params.row.idCar.edition} </div>;
    },
  },
];
