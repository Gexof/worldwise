import { Check, MapPin, Globe2, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";

const plans = [
  {
    name: "Explorer",
    description: "Everything you need to start your journey.",
    price: "Free",
    icon: MapPin,
    features: [
      "Track visited cities",
      "Explore countries",
      "Add travel dates",
      "Save personal notes",
      "Interactive world map",
    ],
    highlighted: false,
  },
  {
    name: "Adventurer",
    description: "For travelers who love keeping memories.",
    price: "$4.99",
    period: "/ month",
    icon: Globe2,
    features: [
      "Everything in Explorer",
      "Unlimited travel memories",
      "Advanced travel statistics",
      "Personal travel timeline",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Globetrotter",
    description: "For those who never stop exploring.",
    price: "$9.99",
    period: "/ month",
    icon: Sparkles,
    features: [
      "Everything in Adventurer",
      "Detailed travel analytics",
      "Export your travel history",
      "Custom travel collections",
      "Exclusive features",
    ],
    highlighted: false,
  },
];

function Pricing() {
  return (
    <div className="min-h-screen bg-[#242A2E] text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00C46A]/20 bg-[#00C46A]/10 px-4 py-2 text-xs font-semibold tracking-wider text-[#00C46A]">
            <Sparkles size={15} />
            SIMPLE PRICING
          </span>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Choose your way to
            <span className="block text-[#00C46A]">explore the world.</span>
          </h1>

          <p className="mt-5 text-sm leading-7 text-gray-400">
            Start tracking your adventures for free, or unlock more ways to
            organize and celebrate your journeys.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-[#00C46A] bg-[#2D3439] shadow-xl shadow-[#00C46A]/5"
                    : "border-white/10 bg-[#2D3439] hover:border-white/20"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#00C46A] px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#242A2E]">
                    Most Popular
                  </span>
                )}

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00C46A]/10 text-[#00C46A]">
                  <Icon size={23} />
                </div>

                <h2 className="text-xl font-bold">{plan.name}</h2>

                <p className="mt-2 min-h-10 text-sm leading-6 text-gray-400">
                  {plan.description}
                </p>

                <div className="my-7 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-gray-500">{plan.period}</span>
                  )}
                </div>

                <button
                  className={`mb-8 w-full rounded-xl px-5 py-3 text-sm font-bold transition-all ${
                    plan.highlighted
                      ? "bg-[#00C46A] text-[#242A2E] hover:bg-[#00A85A]"
                      : "border border-white/10 bg-[#242A2E] text-white hover:border-[#00C46A]/50 hover:text-[#00C46A]"
                  }`}
                >
                  Get started
                </button>

                <div className="mb-5 border-t border-white/10 pt-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    What's included
                  </p>
                </div>

                <ul className="flex flex-col gap-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-300"
                    >
                      <Check
                        size={17}
                        className="mt-0.5 shrink-0 text-[#00C46A]"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-center text-xs text-gray-500">
          Start your journey today. No credit card required.
        </p>
      </main>
    </div>
  );
}

export default Pricing;
