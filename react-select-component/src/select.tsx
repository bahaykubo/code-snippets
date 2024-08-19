import { useEffect, useState } from 'react';
import styles from './select.module.css';

export type SelectOption = {
  label: string;
  value: string | number;
}

export type SelectProps = {
  options: SelectOption[];
  value?: SelectOption;
  onChange: (value?: SelectOption) => void;
}

export function Select(props: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  function clearOptions() {
    props.onChange(undefined);
  }

  function selectOption(option: SelectOption) {
    if (option !== props.value) {
      props.onChange(option);
    }
  }

  function isOptionSelected(option: SelectOption) {
    return option === props.value
  }

  useEffect(() => {
    if (isOpen) {
      setHighlightedIndex(0);
    }
  }, [isOpen])

  return (
      <div
        tabIndex={0}
        className={styles.container}
        onClick={(() => setIsOpen((prev) => !prev))}
        onBlur={() => setIsOpen(false)}
      >
        <span className={styles.value}>{props.value?.label}</span>
        <button
          className={styles['clear-btn']}
          onClick={(e) => {
            e.stopPropagation();
            clearOptions();
          }}
        >&times;</button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul className={`${styles.options} ${isOpen ? styles.show : ''}`}>
          {props.options.map((option: SelectOption, index) => (
            <li
              key={option.value}
              className={`${styles.option} ${isOptionSelected(option) ? styles.selected : ''} ${index === highlightedIndex ? styles.highlighted : ''}`}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setIsOpen(false);
              }}>
              {option.label}
            </li>
          ))}
        </ul>
      </div>
  )
}
