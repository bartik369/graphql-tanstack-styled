import type { Rule } from "antd/es/form";
export type  FieldType = 'input' | 'select' | 'textarea' | 'number' | 'date';

export interface FieldConfig<T>{
    name: keyof T;
    label: string;
    type: FieldType;
    rules?: Rule[];
    options?: { label: string; value: string | number }[];
    placeholder?: string;
}