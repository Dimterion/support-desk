const Footer = () => {
  return (
    <footer className="text-center text-xs">
      <a
        href="https://github.com/Dimterion/support-desk"
        target="_blank"
        rel="noopener noreferrer"
      >
        &copy; {new Date().getFullYear()} Dimterion
      </a>
    </footer>
  );
};

export default Footer;
