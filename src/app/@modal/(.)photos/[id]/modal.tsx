'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);


  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  const modalRoot = typeof window !== "undefined" ? document.getElementById('modal-root') : null;
  if (!modalRoot) return null;

  return createPortal(
    <div className="modal-backdrop">
      <dialog
        ref={dialogRef}
        className="modal"
        onClose={onDismiss}
        aria-modal="true"
        role="dialog"
      >
        {children}
        <button
          onClick={onDismiss}
          className="close-button"
          aria-label="Fechar modal"
        >
          Fechar
        </button>
      </dialog>
    </div>,
    modalRoot
  );
}