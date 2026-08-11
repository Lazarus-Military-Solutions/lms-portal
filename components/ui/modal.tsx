type ModalProps = {
  open: boolean;
  title: string;
  description?: string;
  children: React.ReactNode;
  onClose: () => void;
};

export function Modal({ open, title, description, children, onClose }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-4 backdrop-blur">
      <div className="w-full max-w-lg rounded-2xl border border-slate-800/80 bg-slate-900/90 p-5 shadow-2xl">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {description ? <p className="mt-1 text-sm text-slate-400">{description}</p> : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-700 px-2.5 py-1 text-sm text-slate-300 transition hover:border-emerald-400/50 hover:text-emerald-300"
          >
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
