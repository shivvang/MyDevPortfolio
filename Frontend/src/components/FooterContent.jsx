/* eslint-disable react/prop-types */
export default function FooterContent() {
  return (
    <div className="bg-white py-8 px-6 lg:px-12 h-full flex flex-col justify-evenly ">
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div className="mt-6 lg:mt-0">
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center lg:items-end mt-12 lg:mt-0 space-y-6 lg:space-y-0">
      <h1 className="text-[10vw] lg:text-[5vw] leading-[0.8] whitespace-nowrap font-serif text-primary">
        Shivang Hariakar
      </h1>
      <p className="text-secondary">© {new Date().getFullYear()} copyright</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className="flex flex-col md:flex-row gap-12 md:gap-20 font-avenir text-primary">
      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-secondary font-source font-bold">
          My Coding Profiles
        </h3>
        <NavLink
          label="LeetCode"
          href="https://leetcode.com/u/shiv_ang/"
          activity="Most active"
        />
        <NavLink
          label="Geeks for Geeks"
          href="https://www.geeksforgeeks.org/user/shivanghioo1/"
          activity="Moderately active"
        />
        <NavLink
          label="Code 360"
          href="https://www.naukri.com/code360/profile/41d79573-7a72-417a-8d86-f1c824bf85b5"
          activity="Least active"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="mb-2 uppercase text-secondary font-source font-bold">
          Quick Links
        </h3>
        <NavLink label="Github" href="https://github.com/shivvang" />
        <NavLink
          label="LinkedIn"
          href="https://www.linkedin.com/in/shivang-hariakar-b62872256/"
        />
        <NavLink
          label="Certification"
          href="https://asset.cloudinary.com/do5cnzpgw/078fd773c4dd09276aad23dd658b04d1"
        />
      </div>
    </div>
  );
};

const NavLink = ({ label, href, activity }) => {
  return (
    <div className="flex items-center">
      <a
        href={href}
        className="hover:text-secondary transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
      {activity && (
        <span className="ml-2 text-xs text-primary italic">{activity}</span>
      )}
    </div>
  );
};
