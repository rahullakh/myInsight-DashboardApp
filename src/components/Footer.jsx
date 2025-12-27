
const Footer = () => {
  return (
     <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">
            MyDashboard
          </h3>
          <p className="text-sm">
            Modern dashboard platform for managing your work.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Security</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} MyDashboard. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
