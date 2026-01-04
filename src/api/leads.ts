import api from "./Axios";
import {type Lead } from "../Types/leadsType";

export const fetchLeads=async():Promise<Lead[]>=>{
    const res=await api.get("/leads");
    return res.data;
};

export const createLead = async (lead: Omit<Lead, "id">) => {
  const res = await api.post("/leads", {
    ...lead,
    createdAt: new Date().toISOString()
  });
  return res.data;
};


export const updateLead=async(lead:Lead)=>{
    const res=await api.put(`/leads/${lead.id}`,lead)
    return res.data;
}

export const deleteLead=async(id:number)=>{
    await api.delete(`/leads/${id}`)
}