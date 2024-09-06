import { CheckIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  const onSeeDetailsClick = (task) => {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  };

  return (
    <>
      {tasks.length === 0 ? null : (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
          {tasks.map((task) => (
            <li key={task.id} className="flex gap-2">
              <button
                onClick={() => onTaskClick(task.id)}
                className={`justify-between flex items-center gap-2 w-full text-left bg-slate-400 text-white p-2 rounded-md ${
                  task.isCompleted && "line-through"
                }`}
              >
                {task.title}
                {task.isCompleted ? (
                  <CheckIcon className="text-green-600" />
                ) : null}
              </button>
              <Button
                onClick={() => onSeeDetailsClick(task)}
                className="bg-slate-400 p-2 text-white rounded-md"
              >
                <ChevronRightIcon />
              </Button>

              <Button onClick={() => onDeleteTaskClick(task.id)}>
                <TrashIcon />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Tasks;
