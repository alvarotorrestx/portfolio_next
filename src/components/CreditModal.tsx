"use client";

type CreditModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export default function CreditModal({ open, setOpen }: CreditModalProps) {  

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-base-100 text-base-content p-6 rounded-xl max-w-lg w-full shadow-xl relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-xl font-bold text-primary hover:text-red-500 transition"
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-4 text-primary">Artwork & Attribution</h2>
            <ul className="space-y-3 text-sm">
              <li>
                <strong>Background Image:</strong> Alley art by KJ via AlphaCoders – Free for Personal Use.
              </li>
              <li>
                <strong>Live Wallpaper:</strong> Batman Beyond animation via MoeWalls – for non-commercial use.
              </li>
              <li>
                <strong>Cursor Logo:</strong> Batman Beyond vector icon via SeekLogo – edited for personal use.
              </li>
              <li>
                Batman, Batman Beyond, and all associated imagery are © DC Comics / Warner Bros.  
                This site is fan-made and unaffiliated. Used for personal portfolio presentation only.
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
