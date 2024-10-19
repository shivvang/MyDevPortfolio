import FooterContent from "../components/FooterContent";

export default function Footer() {
  return (
    <div
      id="footer"
      className="relative h-screen"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 h-screen w-full">
        <FooterContent />
      </div>
    </div>
  );
}
