/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button, Card, Checkbox, Radio, Spin } from "antd";
import {
  changeAnswer,
  getUserDataByUserIdAndDataId,
  markAsLabelled,
} from "@/api/user-data";
import { useAtom } from "jotai";
import Navbar from "@/components/navbar";
import { UserData, dataAtom } from "@/atom/data-atom";
import { useRouter } from "next/navigation";
import { getMe } from "@/api/user";
import ManIcon from "@mui/icons-material/Man";

const LabelPage: React.FC = () => {
  const router = useRouter();
  const [selectedLabel, setSelectedLabel] = useState<string[]>([]);
  const [userId, setUserId] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [data, setData] = useAtom(dataAtom);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData>({
    id: "",
    userId: "",
    dataId: "",
    isLabelled: false,
    answers: [],
  });

  const answerOptions = ["inside", "near", "front", "far", "back"];

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!localStorage.getItem("isLogin")) {
        router.push("/login");
      }
    }
    if (!data) {
      router.push("/data");
    }
  }, [data, router]);

  const fetchMe = useCallback(async () => {
    try {
      setIsLoading(true);
      const user = await getMe();
      setUsername(user.data.username);
      setUserId(user.data.id);
      const userData = await getUserDataByUserIdAndDataId(
        user.data.id,
        data ? data.id : ""
      );
      setUserData(userData.data);
      if (userData.data.isLabelled) {
        setSelectedLabel(userData.data.answers);
      }
      setIsLoading(false);
    } catch (error) {
      router.push("/data");
    }
  }, [data, router]);

  useEffect(() => {
    fetchMe();
  }, [fetchMe]);

  const handleSubmit = async () => {
    try {
      if (data) {
        if (userData.isLabelled) {
          await changeAnswer(selectedLabel, userId, data.id);
        } else {
          await markAsLabelled(selectedLabel, userId, data.id);
        }
        router.push("/data");
      }
    } catch (error) {
      console.error("Failed to submit label:", error);
    }
  };

  return (
    <div>
      <Navbar username={username} />
      <Card className="flex justify-center items-center p-8 rounded-none ">
        {isLoading ? (
          <Spin />
        ) : (
          <>
            <div className="relative">
              <img
                src={data?.url}
                width={400}
                height={400}
                alt="Labelled Image"
                className="block w-[400px] h-[400px] object-cover border border-gray-300 "
              />

              <ManIcon
                style={{
                  top: `${data ? data.coordinateY * 400 : 0}px`,
                  left: `${data ? data.coordinateX * 400 : 0}px`,
                }}
                fontSize="large"
                className="absolute text-emerald-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              />
              <div
                style={{
                  top: `${data ? data.coordinateY * 400 : 0}px`,
                  left: `${data ? data.coordinateX * 400 : 0}px`,
                }}
                className="absolute w-1 h-1 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <div className="mt-4">
              <Checkbox.Group
                onChange={(values) => setSelectedLabel(values.map(String))}
                value={selectedLabel?.map(String)}
              >
                {answerOptions.map((option) => (
                  <Checkbox key={option} value={option}>
                    {option}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </div>

            <div className="mt-4">
              <Button
                onClick={handleSubmit}
                disabled={selectedLabel?.length === 0}
              >
                Submit
              </Button>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default LabelPage;
