import { api } from "./api";

export interface Member {
  id?: string;
  first_name: string;
  last_name: string;
  enroll_date: string;
  cin: string;
}

export const getMembers = async () => {
  const response = await api.get('/members');
  return response.data;
};

export const getMember = async (id: string) => {
  const response = await api.get(`/members/${id}`);
  return response.data;
};

export const createMember = async (member: Member) => {
  const response = await api.post('/members', member);
  return response.data;
};



