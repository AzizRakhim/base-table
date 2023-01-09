import BaseTable, { Column } from "react-base-table";
import { faker } from "@faker-js/faker";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { useState } from "react";

const GenderContainer = styled("div")<any>`
  background-color: ${(props: any) =>
    props.gender === "male" ? "lightblue" : "pink"};
  color: white;
  border-radius: 3px;
  width: 20px;
  height: 20px;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  text-align: center;
`;

const Score = styled("span")<any>`
  color: ${(props: any) => (props.score >= 60 ? "green" : "red")};
`;

const Attachment = styled.div`
  background-color: lightgray;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  border-radius: 4px;
  color: gray;
`;

function ExampleTwo() {
  const dataGenerator = () => ({
    id: uuidv4(),
    name: faker.name.firstName(),
    gender: faker.datatype.boolean() ? "male" : "female",
    score: {
      math: faker.datatype.number(70) + 30,
    },
    birthday: faker.date.between(1995, 2005),
    attachments: faker.datatype.number(5),
    description: faker.lorem.sentence(),
    email: faker.internet.email(),
    country: faker.address.country(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      zipCode: faker.address.zipCode(),
    },
  });

  const Gender = ({ gender }: any) => (
    <GenderContainer gender={gender}>
      {gender === "male" ? "♂" : "♀"}
    </GenderContainer>
  );

  const defaultData = new Array(50)
    .fill(0)
    .map(dataGenerator)
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  const [data, setData] = useState(defaultData);

  const columns = [
    {
      key: "name",
      title: "Name",
      dataKey: "name",
      width: 150,
      resizable: true,
      sortable: true,
      frozen: Column.FrozenDirection.LEFT,
    },
    {
      key: "score",
      title: "Score",
      dataKey: "score.math",
      width: 60,
      align: Column.Alignment.CENTER,
      sortable: false,
      cellRenderer: ({ cellData: score }: any) => (
        <Score score={score}>{score}</Score>
      ),
    },
    {
      key: "gender",
      title: "♂♀",
      dataKey: "gender",
      cellRenderer: ({ cellData: gender }: any) => <Gender gender={gender} />,
      width: 60,
      align: Column.Alignment.CENTER,
      sortable: true,
    },
    {
      key: "birthday",
      title: "Birthday",
      dataKey: "birthday",
      dataGetter: ({ column, rowData }: any) =>
        rowData[column.dataKey].toLocaleDateString(),
      width: 100,
      align: Column.Alignment.RIGHT,
      sortable: true,
    },
    {
      key: "attachments",
      title: "Attachments",
      dataKey: "attachments",
      width: 60,
      align: Column.Alignment.CENTER,
      headerRenderer: () => <Attachment>?</Attachment>,
      cellRenderer: ({ cellData }: any) => <Attachment>{cellData}</Attachment>,
    },
    {
      key: "description",
      title: "Description",
      dataKey: "description",
      width: 200,
      resizable: true,
      sortable: true,
      cellRenderer: ({ cellData }: any) => <div>{cellData}</div>,
    },
    {
      key: "email",
      title: "Email",
      dataKey: "email",
      width: 200,
      resizable: true,
      sortable: true,
    },
    {
      key: "country",
      title: "Country",
      dataKey: "country",
      width: 100,
      resizable: true,
      sortable: true,
    },
    {
      key: "address",
      title: "Address",
      dataKey: "address.street",
      width: 200,
      resizable: true,
    },
    {
      key: "action",
      width: 100,
      align: Column.Alignment.CENTER,
      frozen: Column.FrozenDirection.RIGHT,
      cellRenderer: ({ rowData }: any) => (
        <button
          onClick={() => {
            setData(data.filter((x) => x.id !== rowData.id));
          }}
        >
          Remove
        </button>
      ),
    },
  ];

  return (
    <BaseTable columns={columns} data={data} width={1200} maxHeight={600} />
  );
}

export default ExampleTwo;
