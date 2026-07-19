import { useState } from 'react';
import { Select, SelectOption } from './select-items/select';
import { ToDo } from './todo/todo';
import styles from './app.module.css';

const selectOptions: SelectOption[] = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
];

export default function App() {
  const [selected, setSelected] = useState<SelectOption | undefined>(selectOptions[0]);

  return (
    <div className={styles.app}>
      <ToDo />
      <Select options={selectOptions} value={selected} onChange={setSelected} />
    </div>
  );
}
