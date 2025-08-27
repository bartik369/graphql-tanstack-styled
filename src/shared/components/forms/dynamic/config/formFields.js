import { PLACEHOLDERS } from "@/shared/constants/placeholders";
import { MESSAGES } from "@/shared/constants/messages";
export const postFromFields = [
    {
        type: 'input',
        name: 'title',
        label: PLACEHOLDERS.title,
        rules: [{ required: true, message: MESSAGES.requiredField }]
    },
    {
        type: 'textarea',
        name: 'body',
        label: PLACEHOLDERS.body,
        rules: [{ required: true, message: MESSAGES.requiredField }]
    },
];
