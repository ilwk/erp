export interface IPost {
  id: number;
  title: string;
  status: "published" | "draft" | "rejected";
  createdAt: string;
}

export interface ICategory {
  id: number;
  title: string;
}
