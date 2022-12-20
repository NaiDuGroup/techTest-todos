export interface ToDoItem {
  id?: string;
  label: string;
  description?: string;
  category?: string;
  done?: boolean | string;
}
