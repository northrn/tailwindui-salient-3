import { useState, useEffect } from 'react';

export function Notification() {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowNotification(true), 3000);
    return () => clearTimeout(timeout);
  }, []);

  function handleAcceptAllClick() {
    setShowNotification(false);
  }

  return (
    <>
      {showNotification && (
        <div className="pointer-events-none fixed inset-y-0 right-0 z-50 top-0 px-6 pt-6">
          <div className="pointer-events-auto mr-6 max-w-xl rounded-xl bg-white p-6 shadow-lg ring-1 ring-gray-900/10">
            <p className="text-sm leading-6 text-gray-900">
              This website uses cookies to supplement a balanced diet and provide a much deserved reward to the senses after
              consuming bland but nutritious meals. Accepting our cookies is optional but recommended, as they are
              delicious. See our{' '}
              <a href="#" className="font-semibold text-emerald-600">
                cookie policy
              </a>
              .
            </p>
            <div className="mt-4 flex items-center gap-x-5">
              <button
                type="button"
                onClick={handleAcceptAllClick}
                className="rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
              >
                Accept all
              </button>
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Reject all
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
