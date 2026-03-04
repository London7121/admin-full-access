import { Table } from "antd";
import type { TableProps } from "antd";

export function AppTable<T>(props: TableProps<T>) {
  return (
    <Table
      rowKey="id"
      pagination={{
        pageSize: 10,
        showSizeChanger: true,
      }}
      {...props}
    />
  );
}
