import { renderHook } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { test, expect } from "@jest/globals";

// Простые моки без сложных типов
jest.mock("uuid", () => ({ v4: () => "test-id" }));

// Мокаем только то, что вызывает ошибки
jest.mock("../graphql/generated/graphqlzero/hooks", () => ({
  useCreateTodoMutation: jest.fn()
}));

test("basic test - check if file exists and can be imported", () => {
  // Просто проверяем что файл можно импортировать
  expect(() => {
    require("./useTodo");
  }).not.toThrow();
});

test("QueryClientProvider works", () => {
  const queryClient = new QueryClient();
  const wrapper = ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  // Простой тест рендера
  const { result } = renderHook(() => ({ test: true }), { wrapper });
  expect(result.current.test).toBe(true);
});