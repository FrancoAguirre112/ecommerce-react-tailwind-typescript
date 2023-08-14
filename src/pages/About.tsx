import TestimonialCard from "../components/TestimonialCard";
import testimonial1 from "../assets/images/testimonial/testimonial1.webp";
import testimonial2 from "../assets/images/testimonial/testimonial2.webp";
import testimonial3 from "../assets/images/testimonial/testimonial3.webp";
import working from "../assets/images/heroImageWorking.webp";

const AboutUs = () => {
  return (
    <>
      <section
        id="about"
        className="container grid md:grid-cols-2 gap-4 mx-auto px-6 my-10"
      >
        <div className="space-y-10">
          <h1 className="text-4xl font-bold text-center md:text-5-xl md:text-left">
            Streamlined Ecommerce Made Easy
          </h1>
          <p className="text-md text-center text-secondary md:text-left">
            We are a dedicated group of e-commerce aficionados committed to
            enhancing your online shopping journey. Our platform empowers you to
            seamlessly discover and explore a wide range of products, ensuring
            you always find what you're looking for. With our intuitive
            interface and extensive product catalog, navigating the world of
            online shopping has never been more convenient.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={working}
            alt="An image of people working"
            className="w-[60%]"
          />
        </div>
      </section>

      <section id="team" className="container mx-auto px-6 my-10 mt-10">
        <h1 className="text-4xl font-bold text-center md:text-5-xl">
          Meet the Team
        </h1>
        <div className="grid gap-4 md:grid-cols-3">
          <TestimonialCard name="John Smith" img={testimonial1}>
            Strategic visionary overseeing overall operations and leading the
            team towards innovation and growth.
          </TestimonialCard>
          <TestimonialCard name="Sarah Johnson" img={testimonial3}>
            Driven leader spearheading the development of cutting-edge features
            and ensuring a seamless user experience.
          </TestimonialCard>
          <TestimonialCard name="David Lee" img={testimonial2}>
            Expert in managing and optimizing the product database, ensuring
            efficient and reliable functionalities for users.
          </TestimonialCard>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
