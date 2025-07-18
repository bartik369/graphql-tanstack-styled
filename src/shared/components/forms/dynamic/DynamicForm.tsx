import { Input, Form } from "antd";
import type { FieldConfig } from "./types";
import type { NamePath } from "antd/es/form/interface";
import { useEffect } from "react";

interface DynamicFormProps<T> {
  fields: FieldConfig<T>[];
  state: T;
  onChange: (changedValues: Partial<T>) => void;
}
const DynamicForm = <T,>({ fields, state, onChange }: DynamicFormProps<T>) => {
  const [form] = Form.useForm();
  
  useEffect(() => {
    form.setFieldsValue(state);
  }, [form, state]);
  
  return (
    <Form
      form={form}
      layout="vertical"
       onValuesChange={(changedValues) => {
        onChange(changedValues);
      }}
    >
    {fields.map((field) => {
        switch (field.type) {
            case 'input':
              return (
                <Form.Item 
                  key={String(field.name)}
                  name={field.name as NamePath} 
                  label={field.label} 
                  rules={field.rules}
                >
                  <Input placeholder={field.placeholder} />
                </Form.Item>
              );
            case 'textarea':
              return (
                <Form.Item 
                  key={String(field.name)} 
                  name={field.name as NamePath} 
                  label={field.label} 
                  rules={field.rules}
                >
                  <Input.TextArea placeholder={field.placeholder} />
                </Form.Item>
              );
          }
    })}
    </Form>
  );
};

export default DynamicForm;
