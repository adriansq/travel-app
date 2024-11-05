import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-16 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 lg:ml-[50px]">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 mt-5">High Quality Instagram Engagement</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[800px] bg-white/80">
          Our fully automated solution provides thousands of ultra high-quality
          interactions (likes + views + comments) from real and targeted accounts
          in your language and region country, all in one service.
        </p>
        <div className="my-8 flex flex-wrap gap-5 bg-white/80">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="./star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            10k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Get Started" variant="btn_green" />
          <Button
            type="button"
            title="How it works"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start"></div>
    </section>
  );
};

export default Hero;
