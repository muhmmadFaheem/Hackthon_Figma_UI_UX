import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactCard from "../components/ContactCard";

export default function Help() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">What Payment Options Can I Use on Nike Orders?</h1>
        <section>
          <p className="mb-4">
            We accept the following payment options:
            <br />
            Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro, PayTM, Apple Pay, and more.
          </p>
          <p className="mb-6">
            Nike Members can store multiple cards in their profile for faster checkout. <a href="#" className="text-blue-500 hover:underline">Join us today!</a>
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">FAQs</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold">Does my card need international purchases enabled?</h3>
              <p>Yes, contact your bank to enable international purchases on your card.</p>
            </div>
            <div>
              <h3 className="font-bold">Can I pay for my order with multiple methods?</h3>
              <p>No, orders cannot be split between payment methods.</p>
            </div>
            <div>
              <h3 className="font-bold">Why don’t I see Apple Pay as an option?</h3>
              <p>
                Ensure you're using a compatible Apple device with a supported card in your Wallet and Safari browser.
              </p>
            </div>
          </div>
        </section>
        <aside className="mt-12">
          <ContactCard />
        </aside>
      </main>
      <Footer />
    </div>
  );
}
