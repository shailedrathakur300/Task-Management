"use client";

import Image from "next/image";
import React from "react";
import TaskList from "./_Components/taskList";


const tasks = [
  { id: 1, description: "Going to the gym" },
  { id: 2, description: "Meditation for 5 minutes" },
  { id: 3, description: "Make a cup of tea" },
  { id: 4, description: "Go to sleep" },
  { id: 5, description: "Drink water" },
];

const Page: React.FC = () => {
  const username = "Shailendra";
  const currentDate = new Date().toLocaleDateString();
  return (
    <div className="mt-10 w-screen h-screen">
      {/* Header Section */}
      <header className="flex items-center gap-4">
        <Image
          src="/Icon-dashboard-page/heardLogonearpulsly.png"
          alt="Heart Logo"
          width={50}
          height={30}
        />
        <h1 className="text-black text-3xl font-bold">PULSLY</h1>
      </header>

      {/* Greeting Section */}
      <section className="mt-6">
        <h3 className="text-5xl font-bold">
          Hello {username}, 👋
        </h3>
      </section>

      {/* Main Content */}
      <main className="m-3">
        <div className="grid grid-cols-8 grid-rows-8 h-screen gap-3">
          {/* Calendar Section */}
          <div
            id="calendar-show-board"
            className="col-span-8 row-span-5 border bg-yellow-50 border-orange-500 border-dashed rounded-lg"
          >
            <p className="text-center text-lg font-semibold">Calendar</p>
          </div>

          {/* Task List Section */}
          <div className="col-span-5 row-span-3 bg-pink-100 border border-purple-600 border-dashed rounded-lg">
            <TaskList tasks={tasks} date={currentDate}/>
          </div>

          {/* Timer Section */}
          <div className="col-span-3 row-span-3 bg-blue-100 border border-blue-600 border-dashed rounded-lg">
            <p className="text-center text-lg font-semibold">Timer</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
