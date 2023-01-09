export const generateData = (columns: any, count = 20, prefix = 'row-') =>
  new Array(count).fill(0).map((_, rowIndex) => {
    return columns.reduce(
      (rowData: any, column: any, columnIndex: any) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`;
        return rowData;
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null
      }
    )
  })