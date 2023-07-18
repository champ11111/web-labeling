"use client";
import React, { useEffect, useState } from "react";
import { Table, Button, Card, Divider, Typography } from "antd";
import {
  getLabelledDataByUsername,
  getUnlabelledDataByUsername,
} from "@/api/user";
import Navbar from "@/components/navbar";
import { atom, useAtom } from "jotai";

export interface DataItem {
  id: string;
  title: string;
  url: string;
  coordinateX: number;
  coordinateY: number;
  dataSetId: string;
}

const { Title } = Typography;
export const dataAtom = atom({});

const DataPage: React.FC = () => {
  const [unlabelledData, setUnlabelledData] = useState<DataItem[]>([]);
  const [labelledData, setLabelledData] = useState<DataItem[]>([]);
  const [username, setUsername] = useState<string>("");
  const [data, setData] = useAtom(dataAtom);

  useEffect(() => {
    fetchUnlabelledData();
    fetchLabelledData();
    setUsername("John Doe"); // Replace with the actual username from authentication
  }, []);

  const fetchUnlabelledData = async () => {
    try {
      const response = await getUnlabelledDataByUsername("regisiter1");
      setUnlabelledData(response.data);
    } catch (error) {
      console.error("Failed to fetch unlabelled data:", error);
    }
  };

  const fetchLabelledData = async () => {
    try {
      const response = await getLabelledDataByUsername("regisiter1");
      setLabelledData(response.data);
    } catch (error) {
      console.error("Failed to fetch labelled data:", error);
    }
  };

  const handleLabelData = (dataItem: DataItem) => {
    setData(() => dataItem);
    console.log(data);
    // Navigate to the label data page with the data's ID
  };

  const handleEditLabelData = (dataItem: DataItem) => {
    setData(dataItem);
    console.log(data);
    // Navigate to the edit label data page with the data's ID
  };

  const unlabelledDataColumns = [
    { title: "Title", dataIndex: "title", key: "title", width: "20%" },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
      width: "40%",
      render: (url: string) => (
        <img src={url} width={100} height={100} alt="Labelled Image" />
      ),
    },
    {
      title: "Coordinate X",
      dataIndex: "coordinateX",
      key: "coordinateX",
      width: "10%",
    },
    {
      title: "Coordinate Y",
      dataIndex: "coordinateY",
      key: "coordinateY",
      width: "10%",
    },
    {
      title: "Action",
      key: "action",
      width: "20%",
      render: (data: DataItem) => (
        <Button type="link" onClick={() => handleLabelData(data)}>
          Label
        </Button>
      ),
    },
  ];

  const labelledDataColumns = [
    { title: "Title", dataIndex: "title", key: "title", width: "20%" },
    {
      title: "URL",
      dataIndex: "url",
      key: "url",
      width: "40%",
      render: (url: string) => (
        <img src={url} width={100} height={100} alt="Labelled Image" />
      ),
    },
    {
      title: "Coordinate X",
      dataIndex: "coordinateX",
      key: "coordinateX",
      width: "10%",
    },
    {
      title: "Coordinate Y",
      dataIndex: "coordinateY",
      key: "coordinateY",
      width: "10%",
    },
    {
      title: "Action",
      key: "action",
      width: "20%",
      render: (data: DataItem) => (
        <Button type="link" onClick={() => handleEditLabelData(data)}>
          Edit Label
        </Button>
      ),
    },
  ];

  const paginationConfig = {
    pageSize: 5,
  };

  return (
    <div>
      <Navbar username={username} />
      <Card className="flex justify-center items-center p-8 rounded-none">
        <div className="text-center mb-6">
          <Title level={4}>Unlabelled Data</Title>
        </div>
        <Table
          columns={unlabelledDataColumns}
          dataSource={unlabelledData}
          rowKey="id"
          pagination={paginationConfig}
        />
        <Divider />
        <div className="text-center mt-6">
          <Title level={4}>Labelled Data</Title>
        </div>
        <Table
          columns={labelledDataColumns}
          dataSource={labelledData}
          rowKey="id"
          pagination={paginationConfig}
        />
      </Card>
    </div>
  );
};

export default DataPage;
