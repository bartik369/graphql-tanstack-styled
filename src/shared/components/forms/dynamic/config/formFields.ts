import type { FieldConfig } from "../types";

export const postFromFields:FieldConfig[] = [
    { type: 'input', name: 'title', label: 'Post title' },
    { type: 'textarea', name: 'body', label: 'Post body' },
]