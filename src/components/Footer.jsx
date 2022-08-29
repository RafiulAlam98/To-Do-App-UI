import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorChanged, statusChanged } from '../redux/filter.js/action';

const remainingTodos = no_of_todos => {
  switch (no_of_todos) {
    case 0:
      return 'No task';
    case 1:
      return '1 task';

    default:
      return `${no_of_todos} tasks`;
  }
};

const Footer = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters);
  const { status, colors } = filter;

  const handleStatus = status => {
    dispatch(statusChanged(status));
  };

  const handleToggleColor = color => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, 'removed'));
    } else {
      dispatch(colorChanged(color, 'added'));
    }
  };

  const noOfTodos = todos.filter(todo => !todo.completed).length;

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{remainingTodos(noOfTodos)} left</p>
      <ul class="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === 'All' && `font-bold`}`}
          onClick={() => handleStatus('All')}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === 'Incomplete' && `font-bold`}`}
          onClick={() => handleStatus('Incomplete')}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === 'Complete' && `font-bold`}`}
          onClick={() => handleStatus('Complete')}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            colors.includes('green') && `bg-green-500`
          }`}
          onClick={() => handleToggleColor('green')}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            colors.includes('red') && `bg-red-500`
          }`}
          onClick={() => handleToggleColor('red')}
        ></li>
        <li
          class={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            colors.includes('yellow') && `bg-yellow-500`
          }`}
          onClick={() => handleToggleColor('yellow')}
        ></li>
      </ul>
    </div>
  );
};

export default Footer;
