import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl opacity-90 mb-8">
            Join thousands of satisfied customers who are already using our platform to 
            grow their business. Get started today with a 14-day free trial.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/signup"
              className="bg-white text-black font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white font-medium py-3 px-6 rounded-full hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
