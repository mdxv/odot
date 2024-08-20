"use client"
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, ChevronDown, Plus } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";

interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const [isAddingTask, setIsAddingTask] = useState(false);
  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isAddingTask && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [isAddingTask]);

  const handleTaskCompletion = (taskId: number, isCompleted: boolean) => {
    if (isCompleted) {
      const taskToComplete = tasks.find(task => task.id === taskId);
      if (taskToComplete) {
        setTasks(tasks.filter(task => task.id !== taskId));
        setCompletedTasks([...completedTasks, { ...taskToComplete, completed: true }]);
      }
    } else {
      const taskToUncomplete = completedTasks.find(task => task.id === taskId);
      if (taskToUncomplete) {
        setCompletedTasks(completedTasks.filter(task => task.id !== taskId));
        setTasks([...tasks, { ...taskToUncomplete, completed: false }]);
      }
    }
  };

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTaskTitle.trim() !== '') {
      const newTask: Task = {
        id: Date.now(),
        title: newTaskTitle,
        description: newTaskDescription.trim() !== '' ? newTaskDescription : undefined,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
      setNewTaskDescription('');
      setIsAddingTask(false);
    }
  };

  return (
    <main className="flex flex-col flex-cols-1 justify-center items-center h-screen">
      <div className="lg:w-5/12">
        <div>
          <p className="font-medium">Odot</p>
          <p className="text-muted-foreground">Task management made simple.</p>
        </div>
        <div className="mt-10 mb-2">
          {isAddingTask ? (
            <form onSubmit={handleAddTask} className="flex flex-col gap-2">
              <Input
                ref={titleInputRef}
                type="text"
                placeholder="Task title"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                className="border-0 shadow-none focus-visible:ring-0 text-base"
              />
              <Input
                type="text"
                placeholder="Description"
                value={newTaskDescription}
                onChange={(e) => setNewTaskDescription(e.target.value)}
                className="border-0 shadow-none focus-visible:ring-0 text-base"
              />
              <div className="flex gap-2 justify-end">
                <Button type="submit" className="py-1">Add</Button>
                <Button type="button" variant="outline" onClick={() => setIsAddingTask(false)}>Cancel</Button>
              </div>
            </form>
          ) : (
            <Button
              variant="ghost"
              className="flex items-center justify-start gap-2 w-full text-base font-normal"
              onClick={() => setIsAddingTask(true)}
            >
              <Plus className="text-gray-500" size={18} /> Add a new task
            </Button>
          )}
        </div>
        <Separator />

        {tasks.map(task => (
          <div key={task.id}>
            <div className="flex gap-4 mx-4 my-2 items-center">
              <Checkbox
                className="rounded-full"
                checked={task.completed}
                onCheckedChange={(checked) => handleTaskCompletion(task.id, checked as boolean)}
              />
              <h2 className="truncate">{task.title}</h2>
            </div>
            {task.description && (
              <div className="mx-4 ml-12 my-2">
                <h3 className="text-zinc-500">{task.description}</h3>
              </div>
            )}
            <Separator />
          </div>
        ))}

        <div className="justify-start my-5">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger className="flex gap-2 items-center text-gray-500 hover:bg-gray-100 w-full p-2 rounded">
              {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
              <p>Completed</p>
            </CollapsibleTrigger>
            <CollapsibleContent>
              {completedTasks.map(task => (
                <div key={task.id}>
                  <div className="flex gap-4 mx-4 my-2 items-center">
                    <Checkbox
                      className="rounded-full"
                      checked={task.completed}
                      onCheckedChange={(checked) => handleTaskCompletion(task.id, checked as boolean)}
                    />
                    <h2 className={`truncate ${task.completed ? 'line-through' : ''}`}>{task.title}</h2>
                  </div>
                  {task.description && (
                    <div className="mx-4 ml-12 my-2">
                      <h3 className="text-zinc-500 line-through">{task.description}</h3>
                    </div>
                  )}
                </div>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </main>
  );
}