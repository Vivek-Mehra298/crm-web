import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc
} from "firebase/firestore";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Lead } from "../Types/leadsType";

// Firestore reference
const leadsRef = collection(db, "leads");


//   API FUNCTIONS

//  Get all leads
const fetchLeads = async (): Promise<Lead[]> => {
  const snapshot = await getDocs(leadsRef);
  return snapshot.docs.map((docSnap) => ({
    id: docSnap.id,
    ...(docSnap.data() as Omit<Lead, "id">)
  }));
};

//  Add lead
const createLead = async (lead: Omit<Lead, "id">) => {
  await addDoc(leadsRef, lead);
};

//  Update lead
const editLead = async ({ id, data }: { id: string; data: Partial<Lead> }) => {
  const ref = doc(db, "leads", id);
  await updateDoc(ref, data);
};

//  Delete lead
const removeLead = async (id: string) => {
  const ref = doc(db, "leads", id);
  await deleteDoc(ref);
};


//  REACT QUERY HOOKS

export const useLeads = () => {
  return useQuery({
    queryKey: ["leads"],
    queryFn: fetchLeads,
  });
};

export const useAddLead = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createLead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
};

export const useUpdateLead = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editLead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
};

export const useDeleteLead = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: removeLead,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads"] });
    },
  });
};
