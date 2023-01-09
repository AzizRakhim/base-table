import BaseTable from "react-base-table";

function ExampleOne() {
  const columns = [
    {
      dataKey: "name",
      title: "Name",
      width: 400,
      key: "name",
    },
    { dataKey: "surname", title: "Surname", width: 400, key: "surname" },
    { dataKey: "tel", title: "Tel", width: 400, key: "tel" },
  ];

  const data = [
    {
      name: "Aziz",
      surname: "Rakhim",
      tel: "+998 95 911 36 33",
      id: "row-1",
      parentId: null,
    },
    {
      name: "Saul",
      surname: "Goodman",
      tel: "+899 59 199 64 33",
      id: "row-2",
      parentId: null,
    },
  ];
  return (
    <BaseTable columns={columns} data={data} width={1200} maxHeight={600} />
  );
}

export default ExampleOne;
