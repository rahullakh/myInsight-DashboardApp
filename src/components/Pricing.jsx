import Layout from "./Layout"

import { Link } from "react-router-dom"
const Pricing = () => {
  return (
    <Layout>
           <section
      id="pricing"
      className="bg-gray-50 py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Simple Pricing</h2>
        <p className="text-gray-600 mb-12">
          Choose a plan that fits your needs.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="border rounded-xl p-6 bg-white">
            <h3 className="text-xl font-semibold mb-2">Free</h3>
            <p className="text-3xl font-bold mb-4">$0</p>
            <p className="text-gray-600 mb-6">
              Basic dashboard access.
            </p>
            <Link
              to="/signup"
              className="block bg-green-600 text-white py-2 rounded-lg"
            >
              Get Started
            </Link>
          </div>

          <div className="border rounded-xl p-6 bg-white shadow-lg scale-105">
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-3xl font-bold mb-4">$15</p>
            <p className="text-gray-600 mb-6">
              Advanced analytics & management.
            </p>
            <Link
              to="/signup"
              className="block bg-green-600 text-white py-2 rounded-lg"
            >
              Start Free Trial
            </Link>
          </div>

          <div className="border rounded-xl p-6 bg-white">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-3xl font-bold mb-4">Custom</p>
            <p className="text-gray-600 mb-6">
              Full dashboard & priority support.
            </p>
            <button className="block w-full border py-2 rounded-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  )
}

export default Pricing
