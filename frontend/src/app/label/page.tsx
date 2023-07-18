"use client";
import React, { useState } from "react";
import { Button, Card, Radio } from "antd";
import { markAsLabelled } from "@/api/user-data";
import Image from "next/image";
import { useAtom } from "jotai";
import { dataAtom } from "../data/page";
import Navbar from "@/components/navbar";

const LabelPage: React.FC = () => {
  const [selectedLabel, setSelectedLabel] = useState("");
  const [data, setData] = useAtom(dataAtom);

  console.log("data=>", data);

  const handleLabelSelection = (e: any) => {
    setSelectedLabel(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await markAsLabelled(selectedLabel, "clk8991dp0000rsshz70os5rm", data.id);
    } catch (error) {
      console.error("Failed to submit label:", error);
    }
  };

  return (
    <div>
      <Navbar username={"champ"} />
      <Card className="flex justify-center items-center p-8 rounded-none">
        <img src={data.url} width={500} height={500} alt="Labelled Image" />
        <div className="mt-4">
          <Radio.Group onChange={handleLabelSelection} value={selectedLabel}>
            <Radio value="inside">Inside</Radio>
            <Radio value="near">Near</Radio>
            <Radio value="front">Front</Radio>
            <Radio value="far">Far</Radio>
            <Radio value="back">Back</Radio>
          </Radio.Group>
        </div>
        <div className="mt-4">
          <Button onClick={handleSubmit} disabled={!selectedLabel}>
            Submit
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LabelPage;
