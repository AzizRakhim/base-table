export const generateColumns = (columns: any, prefix = 'column-', props?: any) =>
  columns.map((column: any, columnIndex: number) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: column.dataKey,
    title: column.title,
    width: column.width
  }))