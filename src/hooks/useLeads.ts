import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchLeads , createLead, deleteLead, updateLead } from "../api/leads";
import { type Lead } from "../Types/leadsType";

export const useLeads =()=>{
    return useQuery({
        queryKey: ['leads'],
        queryFn: fetchLeads,
    });
};

export const useAddLead=()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:createLead,
        onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: ['leads'] });
        },
    });
};

export const useUpdateLead=()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:updateLead,
        onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: ['leads'] });
        },
    });
};

export const useDeleteLead=()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:deleteLead,
        onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: ['leads'] });
        },
    });
};