import { useEffect } from "react";
import { Form } from "antd";
import type { NamePath } from "antd/es/form/interface";
import type { FieldConfig } from "./types";
import type { PostActions } from "@/features/post/types/post";
import { BUTTONS_LABELS } from "@/shared/constants/buttons";
import * as S from "./DynamicForm.styles";

interface DynamicFormProps<T> {
  fields: FieldConfig<T>[];
  state: T;
  actions: PostActions<T>;
  onChange: (changedValues: Partial<T>) => void;
}
const DynamicForm = <T,>({
  fields,
  state,
  actions,
}: DynamicFormProps<T>) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(state);
  }, [form, state]);

  return (
    <S.CustomForm
      form={form}
      layout="vertical"
      onValuesChange={(changedValues) => {
        actions.handleInputChange(changedValues);
      }}
      onFinish={(values) => actions.submit(values as Partial<T>)}
    >
      {fields.map((field) => {
        switch (field.type) {
          case "input":
            return (
              <Form.Item
                key={String(field.name)}
                name={field.name as NamePath}
                label={field.label}
                rules={field.rules}
              >
                <S.CustomInput placeholder={field.placeholder} />
              </Form.Item>
            );
          case "textarea":
            return (
              <Form.Item
                key={String(field.name)}
                name={field.name as NamePath}
                label={field.label}
                rules={field.rules}
              >
                <S.CustomTextarea placeholder={field.placeholder} />
              </Form.Item>
            );
        }
      })}
      <Form.Item>
        <S.CustomSpace>
          <S.ResetButton
            onClick={() => {
              actions.reset();
              form.resetFields();
            }}
          >
            {BUTTONS_LABELS.reset}
          </S.ResetButton>
          <S.SubmitButton htmlType="submit">{BUTTONS_LABELS.update}
          </S.SubmitButton>
        </S.CustomSpace>
      </Form.Item>
    </S.CustomForm>
  );
};

export default DynamicForm;
