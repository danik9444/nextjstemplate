import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transform Your Business With Our Solution
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Get started today and see how our platform can help you grow your business, 
              reach more customers, and increase your revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-foreground text-background py-3 px-6 text-center font-medium hover:bg-foreground/90 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/demo"
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] py-3 px-6 text-center font-medium hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] transition-colors"
              >
                Request Demo
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="inline-block h-8 w-8 rounded-full bg-gray-200 ring-2 ring-white dark:ring-gray-900"></div>
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Trusted by <span className="font-medium">2,000+</span> businesses
              </p>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              Hero Image Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
