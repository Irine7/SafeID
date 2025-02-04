import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  // Получаем статус аутентификации из cookie
  const isAuthenticated = request.headers.get('cookie')?.includes('ic-identity');

  // Проверяем аутентификацию
  if (isAuthenticated) {
    return NextResponse.json({ authenticated: true });
  } else {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
