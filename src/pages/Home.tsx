import Hero from "../components/Hero";
import Card from "../components/Card";
import Section from "../components/Section";
import Carrousel from "../components/Carrousel";
import banner1 from "../assets/images/banners/banner1.webp";
import banner2 from "../assets/images/banners/banner2.webp";
import banner3 from "../assets/images/banners/banner3.webp";
import banner4 from "../assets/images/banners/banner4.webp";
import banner5 from "../assets/images/banners/banner5.webp";
import banner6 from "../assets/images/banners/banner6.webp";

function Home() {
  return (
    <main>
      {/* Hero section */}
      <header className="h-96 md:h-[35rem]">
        <Carrousel
          content={[
            <Hero
              title="Summer Value Pack"
              subtitle="Category placehldr"
              textLocation="left"
              imgLink={banner1}
              btnLink="/store"
              btnText="Shop Now"
              btnTransparent={false}
            />,
            <Hero
              title="Summer Value Pack 2"
              subtitle="Category placehldr"
              textLocation="left"
              imgLink={banner2}
              btnLink="/store"
              btnText="Shop Now"
              btnTransparent={false}
            />,
          ]}
        />
      </header>

      {/* Content section */}
      <div className="mx-4 mt-20 lg:mx-24">
        {/* Highlighted categories */}
        <div className="flex gap-2 justify-center md:gap-6">
          <div className="h-[16rem] lg:h-[22rem] w-full">
            <Card
              title="High Coziness"
              subtitle="Category placehldr"
              textLocation="left"
              imgLink={banner3}
              btnLink="/store"
              btnText="Shop Now"
              btnTransparent
            />
          </div>

          <div className="h-[16rem] lg:h-[22rem] w-full">
            <Card
              title="Summer Style"
              subtitle="Category placehldr"
              textLocation="left"
              imgLink={banner2}
              btnLink="/store"
              btnText="Shop Now"
              btnTransparent
            />
          </div>
        </div>

        {/* Big saving zone */}
        <div className="mt-16">
          <Section title="Big Saving Zone">
            <div className="grid  gap-4">
              <div className="grid md:grid-cols-3 mt-8 gap-4 h-[42rem] w-full md:h-[22rem]">
                <Card
                  title="Hawaiian Shirts"
                  subtitle="Category placehldr"
                  textLocation="left"
                  imgLink={banner1}
                  btnLink="/store"
                  btnText="Shop Now"
                  btnTransparent
                />

                <Card
                  title="Printed T-Shirt"
                  subtitle="Category placehldr"
                  textLocation="right"
                  imgLink={banner4}
                  btnLink="/store"
                  btnText="Shop Now"
                  btnTransparent
                />

                <Card
                  title="Cargo Joggers"
                  subtitle="Category placehldr"
                  textLocation="right"
                  imgLink={banner5}
                  btnLink="/store"
                  btnText="Shop Now"
                  btnTransparent
                />
              </div>
              <div className="grid grid-cols-2 gap-4 h-[16rem] w-full md:h[22rem]">
                <Card
                  title="Urban Shirts"
                  subtitle="Category placehldr"
                  textLocation="right"
                  imgLink={banner5}
                  btnLink="/store"
                  btnText="Shop Now"
                  btnTransparent
                />

                <Card
                  title="Oversized"
                  subtitle="Category placehldr"
                  textLocation="right"
                  imgLink={banner6}
                  btnLink="/store"
                  btnText="Shop Now"
                  btnTransparent
                />
              </div>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}

export default Home;
