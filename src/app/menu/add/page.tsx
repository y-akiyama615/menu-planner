'use client';

import { useRouter } from 'next/navigation';
import AddMenuForm from '@/components/AddMenuForm';
import { MenuItem } from '@/types/menu';

export default function AddMenu() {
  const router = useRouter();

  const handleSubmit = (menuData: Omit<MenuItem, 'id'>) => {
    // 実際のアプリケーションでは、ここでAPIを呼び出してデータを保存します
    console.log('Submitted menu:', menuData);
    router.push('/');
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900">新しいメニューを追加</h1>
            <p className="mt-2 text-sm text-gray-700">
              新しい料理メニューの情報を入力してください。
            </p>
          </div>
          <AddMenuForm onSubmit={handleSubmit} />
        </div>
      </div>
    </main>
  );
} 