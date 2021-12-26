import { Text, Link } from "@components/ui";

function QuickLink({ href = "#", text, children }) {
  return (
    <Link
      href={href}
      className="w-full flex flex-col items-center text-primary-2"
    >
      {children}
      <Text>{text} </Text>
    </Link>
  );
}

export default QuickLink;
