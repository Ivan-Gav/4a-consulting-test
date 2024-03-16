import s from './Checkbox.module.css';

export default function Checkbox(props) {

  return (
    <label className={s.checkbox_container}>
      <input
        type="checkbox"
        className={s.checkbox_input}
        {...props}
      />
      <div className={s.checkbox} />
    </label>
  );
}
