function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-6 pt-6 pb-4">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>

          <h2 className="font-bold text-lg">
            TradeJournal Pro
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Professional trading journal built for disciplined traders.
          </p>

        </div>

        <div>

          <h3 className="font-semibold mb-2">
            Features
          </h3>

          <ul className="space-y-1 text-sm text-gray-500">

            <li>Trading Journal</li>

            <li>Analytics</li>

            <li>Reports</li>

            <li>Psychology</li>

          </ul>

        </div>

        <div>

          <h3 className="font-semibold mb-2">
            Resources
          </h3>

          <ul className="space-y-1 text-sm text-gray-500">

            <li>User Guide</li>

            <li>Documentation</li>

            <li>FAQ</li>

          </ul>

        </div>

        <div>

          <h3 className="font-semibold mb-2">
            Version
          </h3>

          <p className="text-sm text-gray-500">

            Version 1.0.0

          </p>

          <p className="text-sm text-gray-500 mt-2">

            © 2026 TradeJournal Pro

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;