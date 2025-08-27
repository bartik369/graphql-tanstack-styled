import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Form } from "antd";
import { BUTTONS_LABELS } from "@/shared/constants/buttons";
import * as S from "./DynamicForm.styles";
const DynamicForm = ({ fields, state, actions }) => {
    const [form] = Form.useForm();
    useEffect(() => {
        form.setFieldsValue(state);
    }, [form, state]);
    return (_jsxs(S.CustomForm, { form: form, layout: "vertical", onValuesChange: (changedValues) => {
            actions.handleInputChange(changedValues);
        }, onFinish: (values) => actions.submit(values), children: [fields.map((field) => {
                switch (field.type) {
                    case "input":
                        return (_jsx(Form.Item, { name: field.name, label: field.label, rules: field.rules, children: _jsx(S.CustomInput, { placeholder: field.placeholder }) }, String(field.name)));
                    case "textarea":
                        return (_jsx(Form.Item, { name: field.name, label: field.label, rules: field.rules, children: _jsx(S.CustomTextarea, { placeholder: field.placeholder }) }, String(field.name)));
                }
            }), _jsx(Form.Item, { children: _jsxs(S.CustomSpace, { children: [_jsx(S.ResetButton, { onClick: () => {
                                actions.reset();
                                form.resetFields();
                            }, children: BUTTONS_LABELS.reset }), _jsx(S.SubmitButton, { htmlType: "submit", children: BUTTONS_LABELS.update })] }) })] }));
};
export default DynamicForm;
