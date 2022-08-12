export type ContactID = string;
export type ContactLabel = "email" | "mobile" | "facebook" | "line" | "other";
export type Contact = {
  id: ContactID;
  label: ContactLabel;
  value: string;
};
