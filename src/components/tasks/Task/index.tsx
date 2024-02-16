'use client';

import React, { ChangeEvent, ChangeEventHandler, MouseEvent, MouseEventHandler } from 'react';
import classNames from 'classnames';

import TrashIcon from '@assets/icons/trash.svg';
import EditIcon from '@assets/icons/edit.svg';
import Checkbox from '@components/tasks/Task/Checkbox';

export interface ITask {
  title: string;
  isDone: boolean;
}

export interface TaskProps {
  task: ITask;
  className?: string;
  onDelete: (task: ITask, e?: MouseEvent<HTMLButtonElement>) => void;
  onEdit: (task: ITask, e: MouseEvent<HTMLButtonElement>) => void;
  onChange: (checked: boolean, e: ChangeEvent<HTMLInputElement>) => void;
}

const Task = ({ className, task, onDelete, onChange, onEdit }: TaskProps) => {
  const { title, isDone } = task;
  const handleClickEdit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.currentTarget.blur(); // fix issue with sliding animation on hover when modal open/close
    onEdit(task, e);
  };
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const checked = e.target.checked;

    onChange(checked, e);
  };
  const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    onDelete(task, e);
  };

  return (
    <div
      className={classNames(
        className,
        'text-md group relative mb-2 flex min-w-[200px] items-center justify-between overflow-hidden rounded-3xl border-2 border-gray-300 bg-gray-200 p-2 font-light',
      )}
    >
      <div className="flex items-center">
        <Checkbox checked={isDone} onChange={handleChange} />
        <span className={`${isDone && 'line-through'}`}>{title}</span>
      </div>
      {/*border radius = parent radius - parent border width*/}
      <div className="absolute right-0 flex h-full translate-x-[100%] items-center gap-4 rounded-[22px] bg-gray-300 px-4 py-2 shadow-xl duration-200 ease-in group-hover:translate-x-0">
        <button className="border-2 p-2" title="edit" onClick={handleClickEdit}>
          <EditIcon />
        </button>
        <button color="error" className="border-2 p-2" title="delete" onClick={handleDelete}>
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default Task;
