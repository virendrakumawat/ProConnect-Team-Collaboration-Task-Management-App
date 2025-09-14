export interface sidebarmenu{
    section?: string; // optional header
  items: {
    title: string;
    icon: string;
    route: string;
    role?: string[];
  }[];
}