import Image from 'next/image';
import Header2 from "@/components/Header2";
const About = () => {

  return (
    <div>
    <Header2 />
    <div className=" bg-white text-gray-900 text-right">    
    <section className="flex max-w-7xl mx-auto px-8 py-40 items-right">
  <div className="flex-1 py-4 text-center">
    <h3 className="font-bold">Our Company</h3>
    <br></br>
    <h1 className="text-6xl font-extrabold mb-4">ABOUT US</h1>
    <br></br>
    <p className="text-lg text-gray-600 mb-6">
      We are here to grow your dreams into reality.
    </p>
    <button className="bg-blue-600 text-white px-6 py-3 rounded-md mt-4 md:mt-0">Get Quote Now</button>
  </div>
  <div className="flex-1">
    <Image
      src="/about/girl.png"
      alt="Shopping girl"
      width={800}
      height={900}
      className="mx-auto rounded-lg"
    />
  </div>
</section>

      
      <section className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-2xl font-bold">15K</h3>
            <p className="text-gray-600">Clients</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">150K</h3>
            <p className="text-gray-600">Sales</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">15</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">100+</h3>
            <p className="text-gray-600">Partners</p>
          </div>
        </div>
      </section>

    
      <section className="py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full h-64">
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <h4 className="text-center">Problems trying to resolve the conflict between
          <br></br> 
        the two major realms of Classical physics: Newtonian mechanics </h4>
        <br></br>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          {[
            { name: "Alice", role: "Designer", image: "/about/t1.jpg" },
            { name: "Bob", role: "Developer", image: "/about/t2.jpg" },
            { name: "Charlie", role: "Manager", image: "/about/t3.jpg" },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="max-w-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

    
      <section className="py-12 bg-gray-50">
        <h2 className="text-xl font-semibold text-center mb-8">
          Big Companies Are Here
        </h2>
        <h4 className="text-center">Problems trying to resolve the conflict between
          <br></br> 
        the two major realms of Classical physics: Newtonian mechanics </h4>

        <div className="flex justify-center gap-6 flex-wrap">
          {["aws", "stripe", "lyft", "slack"].map((logo) => (
            <Image
              key={logo}
              src={`/${logo}.png`}
              alt={logo}
              width={100}
              height={50}
              className="grayscale hover:grayscale-0 transition-all"
            />
          ))}
        </div>
      </section>
      <footer className="grid grid-cols-2 py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div>
            <h3 className="text-2xl font-bold mb-2">Now Let’s Grow Yours</h3>
            <p className="text-gray-200">Contact us to know how we can help!</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md mt-4 md:mt-0">
            Get Started
          </button>
          </div>
          <div>
            <Image
            src="/about/women.jpg"
            alt="women"
            width={500}
            height={500}
            className="max-w-full mx-left mb-4"
            />
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
};  

export default About;
