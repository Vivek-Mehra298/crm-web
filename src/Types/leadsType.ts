export type LeadStatus = "New" | "Contacted" | "Converted";

export interface Lead{
    id:number;
    name:string;
    email:string;
    phone:string;
    status:LeadStatus;
    source:string;
    createdAt:string;
}