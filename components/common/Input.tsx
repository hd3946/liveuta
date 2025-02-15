'use client';

import { InputHTMLAttributes, useState } from 'react';
import input from '@/components/common/Input.module.scss';
import { GrFormClose } from 'react-icons/gr';
import useInput from '@/hooks/useInput';
import { IoMdMusicalNote } from 'react-icons/io';
import { combineClassName } from '@/utils/combineClassName';
import { replaceSpecialCharacters } from '@/utils/regexp';

type OriginalInputProps = InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends Omit<OriginalInputProps, 'onSubmit' | 'value' | 'onReset'> {
  value: string;
  onReset: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>, inputValue: string) => void;
}

const Input = ({ className = '', onSubmit, type = 'text', value = '', onChange, onReset, ...props }: InputProps) => {
  const handleSubit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(e, value);
  };

  return (
    <form onSubmit={handleSubit} className={combineClassName(input['form'], className)}>
      <div>
        <input {...props} type={type} className={input['input']} value={value} onChange={onChange} />
        {value ? (
          <button type="button" onClick={onReset}>
            <GrFormClose color="inherit" size="1rem" />
          </button>
        ) : null}
        <button type="submit">
          <IoMdMusicalNote color="inherit" size="1.5rem" />
        </button>
      </div>
    </form>
  );
};

export default Input;
