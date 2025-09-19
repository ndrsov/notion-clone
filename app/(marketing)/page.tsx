import { Footer } from './_components/footer';
import { Heading } from './_components/heading';
import { Heroes } from './_components/heroes';

const MarketingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-between text-center gap-y-8 flex-1 px-6 p-10">
        <Heading />
        <Heroes />
        <Footer />
      </div>
    </div>
  );
};

export default MarketingPage;
