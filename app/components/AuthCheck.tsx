import { ReactNode } from 'react';
import { redirect } from 'next/navigation';

interface AuthCheckProps {
  children: ReactNode;
}

export default async function AuthCheck({ children }: AuthCheckProps) {
  // Выполняем запрос к API маршруту для проверки аутентификации
  const response = await fetch('/api/auth');
  const data = await response.json();

  // Если пользователь не аутентифицирован, перенаправляем на главную страницу
  if (!data.authenticated) {
    redirect('/');
    return null;
  }

  // Если аутентифицирован, рендерим дочерние компоненты
  return <>{children}</>;
}
