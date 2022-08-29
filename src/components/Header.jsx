import React, { useState } from 'react';
import noteimg from '../assets/images/notes.png';
import doubletick from '../assets/images/double-tick.png';
import plus from '../assets/images/plus.png';
import { useDispatch } from 'react-redux';
import { added, allcomplete, clearcomplete } from '../redux/todos/action';

const Header = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const handleChnageInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(added(input));
    setInput('');
  };

  const completeHandler = () => {
    dispatch(allcomplete());
  };

  const clearHandler = () => {
    dispatch(clearcomplete());
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
      >
        <img src={noteimg} className="w-6 h-6" alt="Add todo" />
        <input
          onChange={handleChnageInput}
          value={input}
          type="text"
          placeholder="Type your todo"
          class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
        />
        <button
          type="submit"
          className={`appearance-none w-8 h-8 bg-[url${plus}] bg-no-repeat bg-contain`}
        ></button>
      </form>

      <ul className="flex justify-between my-4 text-xs text-gray-500">
        <li className="flex space-x-1 cursor-pointer">
          <img className="w-4 h-4" src={doubletick} alt="Complete" />
          <span onClick={completeHandler}>Complete All Tasks</span>
        </li>
        <li className="cursor-pointer" onClick={clearHandler}>
          Clear completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
