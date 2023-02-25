import cn from 'classnames';
import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo;
  onDelete: (todoId: number) => () => void;
  isDeleting: boolean;
  onUpdateStatus: (todo: Todo) => () => void;
  isStatusUpdating: boolean;
};

export const TodoItem: React.FC<Props> = ({
  todo,
  onDelete,
  isDeleting,
  onUpdateStatus,
  isStatusUpdating,
}) => {
  return (
    <div key={todo.id} className={cn('todo', { completed: todo.completed })}>
      <label className="todo__status-label">
        <input
          type="checkbox"
          className="todo__status"
          checked
          onChange={onUpdateStatus({ ...todo, completed: !todo.completed })}
        />
      </label>

      <span className="todo__title">{todo.title}</span>

      {/* Remove button appears only on hover */}
      <button
        type="button"
        className="todo__remove"
        onClick={onDelete(todo.id)}
      >
        ×
      </button>

      {/* overlay will cover the todo while it is being updated */}
      <div className="modal overlay">
        <div className="modal-background has-background-white-ter" />
        {(isDeleting || isStatusUpdating) && <div className="loader" />}
      </div>
    </div>
  );
};
