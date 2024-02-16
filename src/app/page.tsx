'use client';

import { Header } from '@components/layout';
import Task from '@components/tasks/Task';

export default function Home() {
  return (
    <>
      <Header />
      <main className="cp flex min-h-screen flex-col items-center gap-10 p-24">
        <h1 className="text-4xl">Rando</h1>
        <p>Daily tasks randomizer</p>
        <Task
          className="w-[300px]"
          task={{
            title: 'First task',
            isDone: false,
          }}
          onEdit={() => {}}
          onDelete={() => {}}
          onChange={() => {}}
        />
      </main>
    </>
  );
}
