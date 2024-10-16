function Contact() {
  return (
    <div className="bg-primary text-white py-20 px-10  h-screen flex flex-col items-center justify-center">
      <h2 className="text-6xl font-source font-bold mb-6">
        Contact<span className="text-secondary">.</span>
      </h2>
      <p className="text-xl mb-4 font-avenir">
        Shoot me an email if you want to connect! You can also find me on{" "}
        <a
          href="https://www.linkedin.com/in/shivang-hariakar-b62872256/"
          className="text-secondary hover:underline"
        >
          Linkedin
        </a>{" "}
        if that&apos;s more your speed.
      </p>
      <p className="text-xl font-source">
        <a
          href="mailto:shivangramakanthariakar@gmail.com"
          className="text-secondary hover:underline"
        >
          shivangramakanthariakar@gmail.com
        </a>
      </p>
    </div>
  );
}

export default Contact;
