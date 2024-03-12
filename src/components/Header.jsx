import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-10">
      <Link to={"/"}>
        <img className="max-w-[150px]" src="/public/net.webp" alt="" />
      </Link>{" "}
    </header>
  );
};

export default Header;
