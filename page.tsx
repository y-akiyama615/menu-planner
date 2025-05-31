'use client';

import { useState } from 'react';
import MenuList from '@/components/MenuList';
import { MenuItem } from '@/types/menu';

export default function Home() {
  const [menus, setMenus] = useState<MenuItem[]>([
    {
      id: '1',
      name: 'ハンバーグ',
      description: '手作りデミグラスソースのジューシーなハンバーグ',
      category: 'main',
      imageUrl: 'https://example.com/hamburger.jpg',
    },
    {
      id: '2',
      name: 'サラダ',
      description: '新鮮な野菜のミックスサラダ',
      category: 'side',
      imageUrl: 'https://example.com/salad.jpg',
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-3xl font-semibold text-gray-900">家庭のメニュー表</h1>
              <p className="mt-2 text-sm text-gray-700">
                家族で共有する料理メニューの一覧です。新しいメニューを追加して、バリエーションを増やしましょう。
              </p>
            </div>
          </div>
          <div className="mt-8">
            <MenuList items={menus} />
          </div>
        </div>
      </div>
    </main>
  );
} 