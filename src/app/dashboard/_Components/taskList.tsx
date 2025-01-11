"use client";

import { FC } from "react";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TimePeriodSelector } from "../../../components/ui/time-period-selector";

interface Task {
  id: number;
  description: string;
}

interface TaskListProps {
  tasks: Task[];
  date: string; // ISO string or formatted date
}

const TaskListItem: FC<{ task: Task }> = ({ task }) => (
  <div className="flex justify-between w-full h-10 bg-white m-2 rounded-lg p-3 items-center">
    <div className="flex gap-3">
      <div className="text-xl">{task.id}</div>
      <h2 className="text-xl">{task.description}</h2>
    </div>
    <div className="flex gap-3 items-center p-3">
      <MdDone />
      <RxCross2 />
    </div>
  </div>
);

const TaskList: FC<TaskListProps> = ({ tasks, date }) => {
  return (
    <div>
      <div className="text-2xl font-bold p-4 flex justify-between">
        <h3>{date}</h3>
        <TimePeriodSelector />
      </div>

      <div className="w-full h-full px-6">
        {tasks.map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
