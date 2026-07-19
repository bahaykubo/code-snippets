import { useState } from 'react';
import styles from './todo-new-form.module.css';

interface Props {
  onSubmit: (title: string) => void;
}

export function TodoNewForm({ onSubmit }: Props) {
  const [newItem, setNewItem] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (newItem === '') return;

    onSubmit(newItem);
    setNewItem('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles['form-row']}>
        <label htmlFor="item">New Item</label>
        <input
          className={styles.input}
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className={styles.btn}>Add</button>
    </form>
  );
}
