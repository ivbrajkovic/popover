import { useId, useRef } from 'react';
import styles from './popover.module.css';

export const Popover = () => {
  const popoverId = useId();
  const isHovering = useRef(false);
  const confinerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={confinerRef}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p>Popover --- </p>
      <div
        onMouseLeave={(e) => {
          if (!isHovering.current) popoverRef.current?.hidePopover();
        }}
      >
        <button
          id='anchor'
          popovertarget='popover'
          popovertargetaction='show'
          className={styles.popoverTarget}
          onMouseEnter={() => {
            isHovering.current = true;
            popoverRef.current?.showPopover();
          }}
        >
          Open
        </button>
        <div
          popover='auto'
          id='popover'
          ref={popoverRef}
          className={styles.popover}
          onMouseLeave={() => {
            isHovering.current = false;
          }}
        >
          <ul className={styles.menu}>
            <li>
              <a href='#'>Home 1234567869</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
