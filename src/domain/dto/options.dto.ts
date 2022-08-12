export type OptionsDto = {
  page: number;
  limit?: number;
  order?: string;
  orderBy?: "ASC" | "DESC";
};
