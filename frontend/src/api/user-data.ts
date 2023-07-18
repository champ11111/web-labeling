import api from "./api";

export const markAsLabelled = (
  answer: string,
  userId: string,
  dataId: string
) => {
  return api.post(`/user-data/mark-as-labelled`, {
    answer,
    userId,
    dataId,
  });
};
